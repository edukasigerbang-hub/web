"use client";

import { useEffect, useState } from "react";
import { loadOwnDashboardData, type DeviceRow, type LicenseRow } from "@/lib/dashboardData";
import { EnrollmentCodesPanel } from "./EnrollmentCodesPanel";

function formatDate(value: string | null): string {
  if (!value) return "—";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" });
}

function statusLabel(status: string): string {
  if (status === "active") return "Aktif";
  if (status === "revoked") return "Dicabut";
  return "Belum aktif";
}

export function DevicesView() {
  const [state, setState] = useState<
    | { kind: "loading" }
    | { kind: "unconfigured" }
    | { kind: "unauthenticated" }
    | { kind: "error" }
    | { kind: "ready"; devices: DeviceRow[]; licenses: LicenseRow[] }
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
        devices: result.data.devices,
        licenses: result.data.licenses
      });
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (state.kind === "loading") {
    return <p className="text-sm text-muted">Memuat perangkat…</p>;
  }
  if (state.kind === "unconfigured") {
    return (
      <p className="rounded-xl border border-dashed border-line bg-surface-muted p-4 text-sm text-muted">
        Dashboard memerlukan koneksi Supabase (isi <code>.env.local</code>).
      </p>
    );
  }
  if (state.kind === "unauthenticated") {
    return <p className="text-sm text-muted">Silakan masuk untuk melihat perangkat Anda.</p>;
  }
  if (state.kind === "error") {
    return (
      <p className="rounded-xl border border-error/30 bg-rose-50 p-4 text-sm text-rose-800">
        Perangkat tidak dapat dimuat. Coba muat ulang halaman.
      </p>
    );
  }

  const licenseById = new Map(state.licenses.map((license) => [license.id, license]));

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-line bg-surface p-6 shadow-card">
        <h2 className="text-lg font-bold text-ink">Perangkat terdaftar</h2>
        <p className="mt-1 text-sm text-muted">
          Perangkat yang terikat ke lisensi Anda. Aktivasi baru dilakukan lewat halaman Aktivasi.
        </p>

        {state.devices.length === 0 ? (
          <p className="mt-4 text-sm text-muted">Belum ada perangkat terdaftar.</p>
        ) : (
          <ul className="mt-4 divide-y divide-line-soft">
            {state.devices.map((device) => {
              const license = device.license_id ? licenseById.get(device.license_id) : null;
              return (
                <li key={device.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
                  <div className="min-w-0">
                    <p className="truncate font-mono text-sm text-ink">{device.device_id}</p>
                    <p className="mt-0.5 text-xs text-muted">
                      {device.platform === "android" ? "Android" : "Windows"}
                      {license ? ` · ${license.plan} (${license.status})` : " · tanpa lisensi"}
                      {device.label ? ` · ${device.label}` : ""}
                    </p>
                    <p className="text-xs text-muted">
                      Aktivasi: {formatDate(device.activated_at)} · Terakhir: {formatDate(device.last_seen_at)}
                    </p>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                      device.status === "active" ? "text-success" : "text-warning"
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        device.status === "active" ? "bg-success" : "bg-warning"
                      }`}
                    />
                    {statusLabel(device.status)}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      <EnrollmentCodesPanel />
    </div>
  );
}
