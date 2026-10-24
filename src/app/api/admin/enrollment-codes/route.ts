import { NextResponse } from "next/server";
import {
  generateEnrollmentCode,
  hashEnrollmentCode
} from "@/lib/enrollment";
import { createServerAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

async function authorizeAdmin(request: Request) {
  const pepper = process.env.ENROLLMENT_CODE_PEPPER;
  const admin = createServerAdminClient();
  if (!pepper || !admin) {
    return { error: failure(503, "ENROLLMENT_UNAVAILABLE", "Layanan enrollment belum dikonfigurasi.") };
  }

  const authorization = request.headers.get("authorization") ?? "";
  const token = authorization.startsWith("Bearer ") ? authorization.slice(7) : "";
  if (!token) {
    return { error: failure(401, "UNAUTHORIZED", "Sesi admin diperlukan.") };
  }

  const userResult = await admin.auth.getUser(token);
  if (userResult.error || !userResult.data.user) {
    return { error: failure(401, "UNAUTHORIZED", "Sesi admin tidak valid.") };
  }

  const roleResult = await admin
    .from("admin_roles")
    .select("role")
    .eq("user_id", userResult.data.user.id)
    .maybeSingle();
  if (roleResult.error) {
    return { error: failure(500, "ENROLLMENT_READ_FAILED", "Peran admin tidak dapat dibaca.") };
  }
  if (roleResult.data?.role !== "admin") {
    return { error: failure(403, "FORBIDDEN", "Hanya admin yang dapat mengelola kode enrollment.") };
  }

  return { admin, pepper, userId: userResult.data.user.id };
}

export async function GET(request: Request) {
  const auth = await authorizeAdmin(request);
  if ("error" in auth) return auth.error;

  const { data, error } = await auth.admin
    .from("enrollment_codes")
    .select("id, label, max_uses, used_count, expires_at, created_at")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    return failure(500, "ENROLLMENT_READ_FAILED", "Kode enrollment tidak dapat dibaca.");
  }
  return NextResponse.json({ ok: true, codes: data ?? [] });
}

export async function POST(request: Request) {
  const auth = await authorizeAdmin(request);
  if ("error" in auth) return auth.error;

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return failure(400, "ENROLLMENT_INVALID_REQUEST", "Isi request tidak valid.");
  }

  const label = typeof body.label === "string" ? body.label.trim() : "";
  if (label.length > 100) {
    return failure(400, "ENROLLMENT_INVALID_REQUEST", "Label maksimal 100 karakter.");
  }
  const maxUses = Number(body.maxUses ?? 1);
  if (!Number.isInteger(maxUses) || maxUses < 1 || maxUses > 1000) {
    return failure(400, "ENROLLMENT_INVALID_REQUEST", "maxUses harus 1–1000.");
  }
  const expiresInDays = body.expiresInDays === undefined || body.expiresInDays === null
    ? null
    : Number(body.expiresInDays);
  if (
    expiresInDays !== null &&
    (!Number.isInteger(expiresInDays) || expiresInDays < 1 || expiresInDays > 365)
  ) {
    return failure(400, "ENROLLMENT_INVALID_REQUEST", "expiresInDays harus 1–365.");
  }

  const code = generateEnrollmentCode();
  const codeHash = hashEnrollmentCode(code, auth.pepper);
  const expiresAt =
    expiresInDays === null
      ? null
      : new Date(Date.now() + expiresInDays * 86_400_000).toISOString();

  const { data, error } = await auth.admin
    .from("enrollment_codes")
    .insert({
      code_hash: codeHash,
      label: label || null,
      max_uses: maxUses,
      expires_at: expiresAt
    })
    .select("id, label, max_uses, expires_at, created_at")
    .single();

  if (error || !data) {
    return failure(500, "ENROLLMENT_WRITE_FAILED", "Kode enrollment gagal dibuat.");
  }

  return NextResponse.json(
    {
      ok: true,
      code,
      id: data.id,
      label: data.label,
      maxUses: data.max_uses,
      expiresAt: data.expires_at,
      createdAt: data.created_at
    },
    { status: 201 }
  );
}

function failure(status: number, code: string, message: string) {
  return NextResponse.json({ ok: false, code, error: message }, { status });
}
