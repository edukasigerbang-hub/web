import { NextResponse } from "next/server";
import { createServerAdminClient } from "@/lib/supabase/admin";

/**
 * POST /api/partner — stores B2B partner leads in Supabase `partners`.
 * Returns 503 when Supabase isn't configured so the client can fall back
 * to a placeholder confirmation (still works without live credentials).
 */
export async function POST(req: Request) {
  try {
    const { name, company, email, whatsapp, kota, jenisBisnis, pesan } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { ok: false, error: "name dan email adalah wajib" },
        { status: 400 }
      );
    }

    const admin = createServerAdminClient();
    if (!admin) {
      return NextResponse.json(
        { ok: false, error: "Supabase not configured" },
        { status: 503 }
      );
    }

    const { error } = await admin.from("partners").insert({
      name,
      company: company ?? null,
      email,
      phone: whatsapp ?? null,
      city: kota ?? null,
      business_type: jenisBisnis ?? null,
      message: pesan ?? null,
    });

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Isi request tidak valid" },
      { status: 400 }
    );
  }
}