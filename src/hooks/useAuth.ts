"use client";

import { useEffect, useState } from "react";
import type { SupabaseClient, User } from "@supabase/supabase-js";
import { createAnonClient, isSupabaseConfigured } from "@/lib/supabase/client";

/**
 * Hook autentikasi sederhana di atas Supabase anon-client.
 * - `configured` false → halaman tetap berjalan (fallback placeholder; tidak crash).
 * - `logout` memakai client.auth.signOut(), lalu mengarahkan ke /login.
 */
export function useAuth() {
  const [client, setClient] = useState<SupabaseClient | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const c = createAnonClient();
    if (!c) {
      // Supabase belum terkonfigurasi — tetap berjalan dalam mode placeholder.
      // Defer agar tidak memicu render berulang di dalam effect body.
      void Promise.resolve().then(() => setLoading(false));
      return;
    }

    let cancelled = false;
    let unsubscribe: (() => void) | undefined;

    void (async () => {
      const { data: { session } } = await c.auth.getSession();
      if (cancelled) return;
      setClient(c);
      setUser(session?.user ?? null);
      setLoading(false);

      const { data: listener } = c.auth.onAuthStateChange((_event, s) => {
        setUser(s?.user ?? null);
      });
      unsubscribe = () => listener.subscription.unsubscribe();
    })();

    return () => {
      cancelled = true;
      unsubscribe?.();
    };
  }, []);

    async function logout() {
    if (client) {
      await client.auth.signOut();
    }
  }

  return {
    client,
    user,
    loading,
    configured: isSupabaseConfigured(),
    logout,
  };
}