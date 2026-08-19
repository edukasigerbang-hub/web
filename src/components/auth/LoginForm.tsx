"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/Button";

/** Form login placeholder — terhubung ke backend auth (API) menyusul. */
export function LoginForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: POST /api/auth/login — autentikasi & sesi
    setSubmitted(true);
    track("trial_start", { source: "login" });
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-surface-muted p-6 text-center text-sm text-muted">
        Login belum terhubung ke backend autentikasi. Sebagai placeholder, halaman dashboard
        dapat diakses di{" "}
        <a href="/dashboard" className="font-semibold text-primary hover:text-primary-dark">
          /dashboard
        </a>
        .
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
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
        Masuk
      </Button>
    </form>
  );
}