import type { Metadata } from "next";
import { dashboardMock } from "@/data/pages";
import { Icon } from "@/components/ui/icons";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Gerbang Edukasi — lisensi, perangkat, dan aktivasi.",
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-extrabold text-ink">Selamat datang, {dashboardMock.user.name}</h1>
        <p className="text-sm text-muted">{dashboardMock.user.email}</p>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {dashboardMock.stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-line bg-surface p-5 shadow-card">
            <p className="text-3xl font-extrabold text-ink">{stat.value}</p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* License + devices */}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-line bg-surface p-6 shadow-card">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <Icon name="license" size={20} />
            </span>
            <div>
              <p className="text-sm text-muted">Status Lisensi</p>
              <p className="font-bold text-ink">{dashboardMock.license.label}</p>
            </div>
          </div>
          <div className="mt-4">
            <Button href="/dashboard/lisensi" variant="secondary" size="sm" icon="arrow">
              Kelola Lisensi
            </Button>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-6 shadow-card">
          <h2 className="flex items-center gap-2 font-bold text-ink">
            <Icon name="device" size={20} className="text-primary" /> Perangkat
          </h2>
          <ul className="mt-3 space-y-2">
            {dashboardMock.devices.map((d) => (
              <li key={d.id} className="flex items-center justify-between rounded-lg bg-surface-muted px-3 py-2 text-sm">
                <span className="font-mono text-ink-soft">{d.id}</span>
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                    d.status === "active" ? "text-success" : "text-warning"
                  }`}
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      d.status === "active" ? "bg-success" : "bg-warning"
                    }`}
                  />
                  {d.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="rounded-xl border border-dashed border-line bg-surface-muted p-4 text-xs text-muted">
        {dashboardMock.note}
      </p>
    </div>
  );
}