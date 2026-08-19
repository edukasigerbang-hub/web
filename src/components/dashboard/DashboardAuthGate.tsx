"use client";

import { type ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createAnonClient, isSupabaseConfigured } from "@/lib/supabase/client";
import { track } from "@/lib/analytics";

/**
 * Guard sederhana untuk area dashboard:
 * - Jika Supabase belum terkonfigurasi → lewati ke placeholder (dev-only).
 * - Jika terkonfigurasi & belum terautentikasi → redirect ke /login.
 * Pengecekan dilakukan lewat async callback setelah `getSession`.
 */
export function DashboardAuthGate({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(!isSupabaseConfigured());
  const [checking, setChecking] = useState(isSupabaseConfigured());

  useEffect(() => {
    if (!isSupabaseConfigured()) return;

    const client = createAnonClient();
    if (!client) return;

    let cancelled = false;
    void client.auth.getSession().then(({ data: { session } }) => {
      if (cancelled) return;
      const ok = Boolean(session?.user);
      setAuthorized(ok);
      setChecking(false);
      if (!ok) {
        track("dashboard_guard_redirect", { reason: "unauthenticated" });
        router.replace("/login");
      }
    });

    return () => {
      cancelled = true;
    };
  }, [router]);

  if (checking) {
    return <div className="py-10 text-center text-sm text-muted">Memverifikasi sesi…</div>;
  }

  return authorized ? <>{children}</> : null;
}