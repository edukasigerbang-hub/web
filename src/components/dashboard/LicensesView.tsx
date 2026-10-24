"use client";

import { useEffect, useState } from "react";
import { loadOwnDashboardData, type DeviceRow, type LicenseRow } from "@/lib/dashboardData";

function formatDate(value: string | null): string {
  if (!value) return "—";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString("id-ID", { dateStyle: "medium" });
}

function statusTone(status: string): string {
  if (status === "active") return "text-success";
  if (status === "trial") return "text-warning";
  return "text-rose-700";
}

export function LicensesView() {
  const [state, setState] = useState<
    | { kind: "loading" }
    | { kind: "unconfigured" }
    | { kind: "unauthenticated" }
    | { kind: "error" }
    | { kind: "ready"; licenses: LicenseRow[]; devices: DeviceRow[] }
  >({ kind: "loading" });

  useEffect(() => {
    let cancelled = false;
    void loadOwnDashboardData().then((result) => {
      if (cancelled) return;
      if (!result.ok) {
        setState({ kind: result.reason === "error" ? "error" : result.reason });
        return;
      }
      setState({
        kind: "ready",
        licenses: result.data.licenses,
        devices: result.data.devices
      });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (state.kind === "loading") return <p className="text-sm text-muted">Memuat lisensi…</p>;
  if (state.kind === "unconfigured") {
    return (
      <p className="rounded-xl border border-dashed border-line bg-surface-muted p-4 text-sm text-muted">
        Dashboard memerlukan koneksi Supabase (isi <code>.env.local</code>).
      </p>
    );
  }
  if (state.kind === "unauthenticated") {
    return <p className="text-sm text-muted">Silakan masuk untuk melihat lisensi Anda.</p>;
  }
  if (state.kind === "error") {
    return (
      <p className="rounded-xl border border-error/30 bg-rose-50 p-4 text-sm text-rose-800">
        Lisensi tidak dapat dimuat. Coba muat ulang halaman.
      </p>
    );
  }

  const usedByLicense = new Map<string, number>();
  for (const device of state.devices) {
    if (!device.license_id || device.status === "revoked") continue;
    usedByLicense.set(device.license_id, (usedByLicense.get(device.license_id) ?? 0) + 1);
  }

  return (
    <section className="rounded-2xl border border-line bg-surface p-6 shadow-card">
      <h2 className="text-lg font-bold text-ink">Lisensi</h2>
      <p className="mt-1 text-sm text-muted">Status, masa berlaku, dan kuota perangkat.</p>

      {state.licenses.length === 0 ? (
        <p className="mt-4 text-sm text-muted">Belum ada lisensi pada akun ini.</p>
      ) : (
        <ul className="mt-4 divide-y divide-line-soft">
          {state.licenses.map((license) => (
            <li key={license.id} className="py-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-semibold text-ink">
                  Paket {license.plan} · <span className="font-mono text-xs">{license.id}</span>
                </p>
                <span className={`text-sm font-semibold ${statusTone(license.status)}`}>
                  {license.status}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted">
                Perangkat: {usedByLicense.get(license.id) ?? 0}/{license.max_devices} · Mulai{" "}
                {formatDate(license.starts_at)} · Berakhir {formatDate(license.expires_at)}
              </p>
              {license.activated_at ? (
                <p className="text-xs text-muted">Diaktifkan {formatDate(license.activated_at)}</p>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
