import { NextResponse } from "next/server";
import { createServerAdminClient } from "@/lib/supabase/admin";

/**
 * POST /api/activation — server-side license activation.
 * IMPORTANT: licensing logic must stay on the server (never on the client).
 * Placeholder validation until wired with Supabase licenses/devices.
 */
export async function POST(req: Request) {
  try {
    const { activationCode, deviceId } = await req.json();

    if (!activationCode || !deviceId) {
      return NextResponse.json(
        { ok: false, error: "activationCode dan deviceId wajib" },
        { status: 400 }
      );
    }

    // TODO(license): validate against `licenses`, bind `deviceId` into
    // `devices`, and record an authorization. Mock keeps the demo usable.
    const normalized = String(activationCode).replace(/-/g, "").trim();
    const ok = normalized.length >= 12;

    const admin = createServerAdminClient();
    if (admin) {
      await admin.from("activations").insert({
        device_id: String(deviceId),
        activation_code: String(activationCode),
        result: ok ? "success" : "failed",
      });
    }

    return NextResponse.json({
      ok,
      status: ok ? "activated" : "failed",
      deviceId,
      note: "Validasi lisensi riil masih placeholder — hubungi backend supabase nanti.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Isi request tidak valid" },
      { status: 400 }
    );
  }
}