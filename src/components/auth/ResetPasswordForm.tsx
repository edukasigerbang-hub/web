"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { validateNewPassword } from "@/lib/password";
import { createAnonClient, isSupabaseConfigured } from "@/lib/supabase/client";

type Mode = "checking" | "request" | "recovery" | "unconfigured";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "sent" }
  | { kind: "updated" }
  | { kind: "error"; message: string };

const inputClass =
  "rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink placeholder:text-muted focus-visible:outline-primary";

export function ResetPasswordForm() {
  const [mode, setMode] = useState<Mode>(() =>
    isSupabaseConfigured() ? "checking" : "unconfigured"
  );
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  useEffect(() => {
    const client = createAnonClient();
    if (!client) {
      queueMicrotask(() => setMode("unconfigured"));
      return;
    }

    let active = true;
    const { data } = client.auth.onAuthStateChange((event, session) => {
      if (!active) return;
      if (event === "PASSWORD_RECOVERY" || session) {
        setMode("recovery");
        setStatus({ kind: "idle" });
      }
    });

    client.auth.getSession().then(({ data: sessionData }) => {
      if (!active) return;
      setMode(sessionData.session ? "recovery" : "request");
    });

    return () => {
      active = false;
      data.subscription.unsubscribe();
    };
  }, []);

  async function handleRequest(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const client = createAnonClient();
    if (!client) {
      setMode("unconfigured");
      return;
    }
    setStatus({ kind: "submitting" });
    const { error } = await client.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setStatus(
      error
        ? { kind: "error", message: "Tautan reset gagal dikirim. Coba lagi." }
        : { kind: "sent" }
    );
  }

  async function handleUpdate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const invalid = validateNewPassword(password);
    if (invalid) {
      setStatus({ kind: "error", message: invalid });
      return;
    }
    if (password !== confirm) {
      setStatus({ kind: "error", message: "Konfirmasi kata sandi tidak cocok." });
      return;
    }
    const client = createAnonClient();
    if (!client) {
      setMode("unconfigured");
      return;
    }
    setStatus({ kind: "submitting" });
    const { error } = await client.auth.updateUser({ password });
    setStatus(
      error
        ? { kind: "error", message: "Kata sandi gagal diperbarui. Minta tautan reset baru." }
        : { kind: "updated" }
    );
  }

  if (mode === "unconfigured") {
    return (
      <div className="rounded-2xl border border-line bg-surface-muted p-6 text-center text-sm text-muted">
        Supabase Auth belum terkonfigurasi.{" "}
        <Link href="/login" className="font-semibold text-primary hover:text-primary-dark">
          Kembali ke login
        </Link>
      </div>
    );
  }

  if (mode === "checking") {
    return <p className="text-center text-sm text-muted">Memeriksa tautan reset…</p>;
  }

  if (status.kind === "updated") {
    return (
      <div className="grid gap-4 text-center">
        <p className="text-sm text-ink">Kata sandi berhasil diperbarui.</p>
        <Link
          href="/login"
          className="font-semibold text-primary hover:text-primary-dark"
        >
          Masuk dengan kata sandi baru
        </Link>
      </div>
    );
  }

  if (mode === "recovery") {
    return (
      <form onSubmit={handleUpdate} className="grid gap-4">
        {status.kind === "error" ? (
          <div className="rounded-xl border border-error/30 bg-rose-50 p-3" role="alert">
            <p className="text-sm text-rose-800">{status.message}</p>
          </div>
        ) : null}
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-ink-soft">Kata sandi baru</span>
          <input
            type="password"
            name="password"
            required
            minLength={8}
            maxLength={72}
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-ink-soft">Ulangi kata sandi</span>
          <input
            type="password"
            name="confirm"
            required
            minLength={8}
            maxLength={72}
            autoComplete="new-password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className={inputClass}
          />
        </label>
        <Button type="submit" variant="primary" size="lg" className="w-full">
          {status.kind === "submitting" ? "Menyimpan…" : "Simpan kata sandi"}
        </Button>
      </form>
    );
  }

  if (status.kind === "sent") {
    return (
      <div className="grid gap-3 text-center text-sm text-ink">
        <p>
          Jika email terdaftar, tautan reset sudah dikirim ke <strong>{email}</strong>. Buka
          tautan tersebut untuk membuat kata sandi baru.
        </p>
        <p className="text-xs text-muted">Tidak menerima email? Periksa folder spam.</p>
        <button
          type="button"
          onClick={() => setStatus({ kind: "idle" })}
          className="text-sm font-semibold text-primary hover:text-primary-dark"
        >
          Kirim ulang
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleRequest} className="grid gap-4">
      {status.kind === "error" ? (
        <div className="rounded-xl border border-error/30 bg-rose-50 p-3" role="alert">
          <p className="text-sm text-rose-800">{status.message}</p>
        </div>
      ) : null}
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink-soft">Email akun</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="nama@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </label>
      <Button type="submit" variant="primary" size="lg" className="w-full">
        {status.kind === "submitting" ? "Mengirim…" : "Kirim tautan reset"}
      </Button>
    </form>
  );
}
