import { NextResponse } from "next/server";
import {
  decideActivation,
  hashActivationCode,
  machineIdForAudit,
  type ActivationLicense
} from "@/lib/activation";
import { createServerAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

/**
 * POST /api/activation — aktivasi lisensi di sisi server.
 * Serial hanya disimpan sebagai hash (SHA-256 dengan pepper); kode mentah
 * tidak pernah ditulis ke database/log dan tidak dikembalikan ke klien.
 */
export async function POST(request: Request) {
  const pepper = process.env.ACTIVATION_CODE_PEPPER;
  const admin = createServerAdminClient();
  if (!pepper || !admin) {
    return failure(503, "ACTIVATION_UNAVAILABLE", "Layanan aktivasi belum dikonfigurasi.");
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return failure(400, "ACTIVATION_INVALID_REQUEST", "Isi request tidak valid.");
  }

  const activationCode = typeof body.activationCode === "string" ? body.activationCode.trim() : "";
  const deviceId = typeof body.deviceId === "string" ? body.deviceId.trim() : "";
  const platform =
    body.platform === "android" ? "android" : body.platform === "windows" ? "windows" : "";
  if (
    activationCode.length < 4 ||
    activationCode.length > 128 ||
    deviceId.length < 8 ||
    deviceId.length > 128 ||
    !platform
  ) {
    return failure(
      400,
      "ACTIVATION_INVALID_REQUEST",
      "activationCode, deviceId, dan platform wajib diisi dengan benar."
    );
  }

  const now = new Date();
  const nowIso = now.toISOString();
  const codeHash = hashActivationCode(activationCode, pepper);
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;

  try {
    const licenseQuery = await admin
      .from("licenses")
      .select("id, owner_id, plan, status, starts_at, expires_at, max_devices, activated_at")
      .eq("serial_hash", codeHash)
      .maybeSingle();

    if (licenseQuery.error) {
      return failure(500, "ACTIVATION_READ_FAILED", "Lisensi tidak dapat dibaca.");
    }

    const license = licenseQuery.data as (ActivationLicense & { plan: string }) | null;
    if (!license) {
      await recordActivation(admin, deviceId, codeHash, "failed", "Kode aktivasi tidak dikenal.", ip);
      return failure(404, "ACTIVATION_CODE_INVALID", "Kode aktivasi tidak dikenal.");
    }

    const deviceQuery = await admin
      .from("devices")
      .select("device_id, license_id, platform, status, activated_at")
      .eq("device_id", deviceId)
      .maybeSingle();
    if (deviceQuery.error) {
      return failure(500, "ACTIVATION_READ_FAILED", "Perangkat tidak dapat dibaca.");
    }

    const countQuery = await admin
      .from("devices")
      .select("id", { count: "exact", head: true })
      .eq("license_id", license.id)
      .neq("status", "revoked");
    if (countQuery.error) {
      return failure(500, "ACTIVATION_READ_FAILED", "Jumlah perangkat tidak dapat dibaca.");
    }

    const decision = decideActivation({
      license,
      device: deviceQuery.data ?? null,
      deviceCount: countQuery.count ?? 0,
      now
    });

    if (!decision.ok) {
      await recordActivation(admin, deviceId, codeHash, "failed", decision.message, ip);
      return failure(403, decision.code, decision.message);
    }

    const deviceWrite = await admin.from("devices").upsert(
      {
        device_id: deviceId,
        license_id: license.id,
        platform,
        status: "active",
        activated_at: deviceQuery.data?.activated_at ?? nowIso,
        owner_id: license.owner_id,
        last_seen_at: nowIso
      },
      { onConflict: "device_id" }
    );
    if (deviceWrite.error) {
      return failure(500, "ACTIVATION_WRITE_FAILED", "Perangkat gagal diaktifkan.");
    }

    if (decision.activateLicense) {
      const licenseWrite = await admin
        .from("licenses")
        .update({ status: "active", activated_at: license.activated_at ?? nowIso })
        .eq("id", license.id);
      if (licenseWrite.error) {
        return failure(500, "ACTIVATION_WRITE_FAILED", "Status lisensi gagal diperbarui.");
      }
    }

    await recordActivation(
      admin,
      deviceId,
      codeHash,
      "success",
      decision.idempotent ? "Re-aktivasi idempoten." : "Aktivasi berhasil.",
      ip
    );
    try {
      await admin.from("license_audit").insert({
        license_id: license.id,
        action: "activated",
        machine_id: machineIdForAudit(deviceId),
        actor: "activation-api"
      });
    } catch (auditError) {
      console.error(
        "license audit error",
        auditError instanceof Error ? auditError.message : "unknown"
      );
    }

    return NextResponse.json({
      ok: true,
      status: "activated",
      licenseId: license.id,
      plan: license.plan,
      deviceId,
      expiresAt: license.expires_at,
      idempotent: decision.idempotent
    });
  } catch (error) {
    console.error("activation error", error instanceof Error ? error.message : "unknown");
    return failure(500, "ACTIVATION_FAILED", "Aktivasi gagal diproses.");
  }
}

function failure(status: number, code: string, message: string) {
  return NextResponse.json({ ok: false, code, error: message }, { status });
}

async function recordActivation(
  admin: NonNullable<ReturnType<typeof createServerAdminClient>>,
  deviceId: string,
  codeHash: string,
  result: "success" | "failed",
  message: string,
  ip: string | null
) {
  try {
    const { error } = await admin.from("activations").insert({
      device_id: deviceId,
      activation_code: codeHash,
      result,
      message,
      ip
    });
    if (error) {
      console.error("activation audit error", error.message);
    }
  } catch (error) {
    console.error(
      "activation audit error",
      error instanceof Error ? error.message : "unknown"
    );
  }
}
