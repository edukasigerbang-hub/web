"use client";

import { useEffect, useState } from "react";
import { createAnonClient } from "@/lib/supabase/client";

interface EnrollmentCodeRow {
  id: string;
  label: string | null;
  max_uses: number;
  used_count: number;
  expires_at: string | null;
  created_at: string;
}

function formatDate(value: string | null): string {
  if (!value) return "—";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString("id-ID", { dateStyle: "medium" });
}

export function EnrollmentCodesPanel() {
  const [token, setToken] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [codes, setCodes] = useState<EnrollmentCodeRow[]>([]);
  const [createdCode, setCreatedCode] = useState<string | null>(null);
  const [label, setLabel] = useState("");
  const [maxUses, setMaxUses] = useState("1");
  const [expiresInDays, setExpiresInDays] = useState("30");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const client = createAnonClient();
    if (!client) {
      queueMicrotask(() => setLoading(false));
      return;
    }
    void client.auth.getSession().then(async ({ data }) => {
      if (cancelled) return;
      const accessToken = data.session?.access_token;
      if (!accessToken) {
        setLoading(false);
        return;
      }
      setToken(accessToken);
      const response = await fetch("/api/admin/enrollment-codes", {
        headers: { authorization: `Bearer ${accessToken}` }
      });
      if (cancelled) return;
      if (response.status === 401 || response.status === 403) {
        setLoading(false);
        return;
      }
      if (!response.ok) {
        setError("Kode enrollment tidak dapat dimuat.");
        setLoading(false);
        return;
      }
      const body = (await response.json()) as { codes?: EnrollmentCodeRow[] };
      setCodes(body.codes ?? []);
      setVisible(true);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  async function handleCreate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!token) return;
    setBusy(true);
    setError(null);
    setMessage(null);
    setCreatedCode(null);
    try {
      const response = await fetch("/api/admin/enrollment-codes", {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
          "content-type": "application/json"
        },
        body: JSON.stringify({
          label: label.trim() || null,
          maxUses: Number(maxUses),
          expiresInDays: expiresInDays ? Number(expiresInDays) : null
        })
      });
      const body = (await response.json()) as {
        ok?: boolean;
        error?: string;
        code?: string;
        id?: string;
        label?: string | null;
        maxUses?: number;
        expiresAt?: string | null;
        createdAt?: string;
      };
      if (!response.ok || !body.ok || !body.code) {
        setError(body.error ?? "Kode gagal dibuat.");
        return;
      }
      setCreatedCode(body.code);
      setMessage("Kode baru dibuat. Tampilkan sekali ini saja; hash disimpan di server.");
      setCodes((current) => [
        {
          id: body.id ?? "",
          label: body.label ?? null,
          max_uses: body.maxUses ?? 1,
          used_count: 0,
          expires_at: body.expiresAt ?? null,
          created_at: body.createdAt ?? new Date().toISOString()
        },
        ...current
      ]);
      setLabel("");
    } catch {
      setError("Server enrollment tidak dapat dihubungi.");
    } finally {
      setBusy(false);
    }
  }

  if (loading || !visible) return null;

  return (
    <section className="rounded-2xl border border-line bg-surface p-6 shadow-card">
      <h2 className="text-lg font-bold text-ink">Kode enrollment (admin)</h2>
      <p className="mt-1 text-sm text-muted">
        Kode sekali-tampil untuk mengikat perangkat lewat Worker. Server hanya menyimpan hash.
      </p>

      <form onSubmit={handleCreate} className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
          <span className="font-medium text-ink-soft">Label (opsional)</span>
          <input
            value={label}
            onChange={(event) => setLabel(event.target.value)}
            maxLength={100}
            placeholder="Mis. Kelas 3A"
            className="rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-ink-soft">Maksimum pemakaian</span>
          <input
            type="number"
            min={1}
            max={1000}
            value={maxUses}
            onChange={(event) => setMaxUses(event.target.value)}
            className="rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-ink-soft">Berlaku (hari, kosongkan = tanpa batas)</span>
          <input
            type="number"
            min={1}
            max={365}
            value={expiresInDays}
            onChange={(event) => setExpiresInDays(event.target.value)}
            className="rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink"
          />
        </label>
        <button
          type="submit"
          disabled={busy}
          className="min-h-11 rounded-lg bg-primary px-5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-40 sm:col-span-2 sm:justify-self-start"
        >
          {busy ? "Membuat…" : "Buat kode"}
        </button>
      </form>

      {createdCode ? (
        <div className="mt-4 rounded-xl border border-success/30 bg-emerald-50 p-4">
          <p className="text-sm font-bold text-emerald-800">Kode baru (tampil sekali)</p>
          <code className="mt-1 block font-mono text-lg text-emerald-900">{createdCode}</code>
          <button
            type="button"
            onClick={() => void navigator.clipboard?.writeText(createdCode)}
            className="mt-2 min-h-9 rounded-lg border border-emerald-700/30 px-3 text-xs font-semibold text-emerald-800"
          >
            Salin kode
          </button>
        </div>
      ) : null}

      <p aria-live="polite" className="mt-2 text-sm text-muted">
        {message ?? ""}
      </p>
      {error ? (
        <p className="mt-2 rounded-lg border border-error/30 bg-rose-50 p-3 text-sm text-rose-800" role="alert">
          {error}
        </p>
      ) : null}

      {codes.length > 0 ? (
        <ul className="mt-4 divide-y divide-line-soft">
          {codes.map((code) => (
            <li key={code.id} className="flex flex-wrap items-center justify-between gap-2 py-2 text-sm">
              <span className="text-ink-soft">{code.label ?? "(tanpa label)"}</span>
              <span className="text-xs text-muted">
                {code.used_count}/{code.max_uses} · kedaluwarsa {formatDate(code.expires_at)}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
