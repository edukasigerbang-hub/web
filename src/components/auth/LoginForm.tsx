"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";
import { createAnonClient, isSupabaseConfigured } from "@/lib/supabase/client";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "unconfigured" }
  | { kind: "error"; message: string };

/** Form login — terhubung kepada Supabase Auth saat env tersedia. */
export function LoginForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");

    if (!isSupabaseConfigured()) {
      setStatus({ kind: "unconfigured" });
      track("trial_start", { source: "login" });
      return;
    }

    setStatus({ kind: "submitting" });
    const client = createAnonClient();
    if (!client) {
      setStatus({ kind: "unconfigured" });
      return;
    }
    const { error } = await client.auth.signInWithPassword({ email, password });
    if (error) {
      setStatus({ kind: "error", message: "Email atau kata sandi tidak valid. Coba ulang." });
      return;
    }
    router.push("/dashboard");
  }

  if (status.kind === "unconfigured") {
    return (
      <div className="rounded-2xl border border-line bg-surface-muted p-6 text-center text-sm text-muted">
        Supabase Auth belum terkonfigurasi (isi <code className="rounded bg-surface px-1.5 py-0.5 text-xs">.env.local</code>).
        {" "}
        <a href="/dashboard" className="font-semibold text-primary hover:text-primary-dark">
          /dashboard
        </a>
        {" "}
        akses tativa sebagai placeholder.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {status.kind === "error" ? (
        <div className="rounded-xl border border-error/30 bg-rose-50 p-3" role="alert">
          <p className="text-sm text-rose-800">{status.message}</p>
        </div>
      ) : null}
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink-soft">Email</span>
        <input
          type="email"
          name="email"
          required
          placeholder="nama@email.com"
          className="rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink placeholder:text-muted focus-visible:outline-primary"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink-soft">Kata Sandi</span>
        <input
          type="password"
          name="password"
          required
          placeholder="••••••••"
          className="rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink placeholder:text-muted focus-visible:outline-primary"
        />
      </label>
      <Button type="submit" variant="primary" size="lg" className="w-full">
        {status.kind === "submitting" ? "Masuk…" : "Masuk"}
      </Button>
    </form>
  );
}