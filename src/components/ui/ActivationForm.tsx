"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";
import { activationData } from "@/data/pages";
import { Button } from "./Button";

type Status =
  | { kind: "idle" }
  | { kind: "checking" }
  | { kind: "success"; licenseId: string | null; idempotent: boolean }
  | { kind: "error"; message: string };

/**
 * Form aktivasi lisensi. Validasi dilakukan server-side (`/api/activation`);
 * kode aktivasi hanya dikirim ke server dan tidak disimpan di klien.
 */
export function ActivationForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const code = String(form.get("activationCode") ?? "");
    const deviceId = String(form.get("deviceId") ?? "");
    const platform = String(form.get("platform") ?? "windows");
    setStatus({ kind: "checking" });
    track("activation_start", { code: code.replace(/-/g, "").slice(0, 4) });

    let next: Status;
    try {
      const res = await fetch("/api/activation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ activationCode: code, deviceId, platform })
      });
      const data = (await res.json()) as {
        ok?: boolean;
        error?: string;
        licenseId?: string;
        idempotent?: boolean;
      };
      if (res.ok && data.ok) {
        next = {
          kind: "success",
          licenseId: data.licenseId ?? null,
          idempotent: Boolean(data.idempotent)
        };
        track("activation_success", { deviceId: "registered" });
      } else {
        next = {
          kind: "error",
          message: data.error ?? "Aktivasi belum berhasil. Periksa input dan coba lagi."
        };
      }
    } catch {
      next = {
        kind: "error",
        message: "Server aktivasi tidak dapat dihubungi. Coba lagi nanti."
      };
    }

    setStatus(next);
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

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-ink-soft">Platform perangkat</span>
        <select
          required
          name="platform"
          defaultValue="windows"
          className="rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink focus-visible:outline-primary"
        >
          <option value="windows">Windows</option>
          <option value="android">Android</option>
        </select>
      </label>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        Aktivasi Lisensi
      </Button>

      {status.kind === "checking" ? <p className="text-sm text-muted">Periksa lisensi…</p> : null}
      {status.kind === "success" ? (
        <div className="rounded-xl border border-success/30 bg-emerald-50 p-4" role="status">
          <p className="font-bold text-emerald-800">
            {status.idempotent ? "Lisensi sudah aktif" : "Aktivasi berhasil"}
          </p>
          <p className="text-sm text-emerald-700">
            Perangkat ini terhubung ke lisensi aktif.
            {status.licenseId ? (
              <>
                {" "}
                ID lisensi: <code className="font-mono text-xs">{status.licenseId}</code>
              </>
            ) : null}
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