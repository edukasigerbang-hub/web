"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";
import { activationData } from "@/data/pages";
import { Button } from "./Button";

type Status =
  | { kind: "idle" }
  | { kind: "checking" }
  | { kind: "success"; code: string }
  | { kind: "error"; message: string };

/**
 * Form aktivasi lisensi. Fires activation_start/activation_success (mock).
 * Berhubung dengan backend (API) menyusul; tidak ada logic lisensi hard-coded.
 */
export function ActivationForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const code = String(form.get("activationCode") ?? "");
    const deviceId = String(form.get("deviceId") ?? "");
    setStatus({ kind: "checking" });
    track("activation_start", { code: code.replace(/-/g, "").slice(0, 4) });

    let ok = false;
    let message = "";
    try {
      const res = await fetch("/api/activation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ activationCode: code, deviceId }),
      });
      const data = await res.json();
      ok = Boolean(data.ok);
      if (!ok) message = data.error ?? "Validasi belum selesai. Periksa input dan coba ulang.";
    } catch {
      ok = false;
      message = "Server tidak validasi. Coba ulang nanti (berhubung kepada Supabase menyusul).";
    }

    setStatus(ok ? { kind: "success", code } : { kind: "error", message });
    track("activation_success", { deviceId: deviceId ? "registered" : "missing" });
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {activationData.inputs.map((field) => (
        <label key={field.name} className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-ink-soft">{field.label}</span>
          <input
            required
            name={field.name}
            placeholder={field.placeholder}
            className="rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink font-mono placeholder:text-muted focus-visible:outline-primary"
          />
        </label>
      ))}

      <Button type="submit" variant="primary" size="lg" className="w-full">
        Aktivasi Lisensi
      </Button>

      {status.kind === "checking" ? <p className="text-sm text-muted">Periksa lisensi…</p> : null}
      {status.kind === "success" ? (
        <div className="rounded-xl border border-success/30 bg-emerald-50 p-4" role="status">
          <p className="font-bold text-emerald-800">Aktivasi berhasil</p>
          <p className="text-sm text-emerald-700">
            Lisensi untuk code <code className="font-mono text-xs">{status.code}</code> diaktifkan.
            Validasi resmi menyusul via backend.
          </p>
        </div>
      ) : null}
      {status.kind === "error" ? (
        <div className="rounded-xl border border-error/30 bg-rose-50 p-4" role="alert">
          <p className="font-bold text-rose-800">Aktivasi belum selesai</p>
          <p className="text-sm text-rose-700">{status.message}</p>
        </div>
      ) : null}
    </form>
  );
}