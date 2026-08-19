import Link from "next/link";
import type { ReactNode } from "react";
import { dashboardSections } from "@/data/pages";
import { Button } from "@/components/ui/Button";
import { DashboardAuthGate } from "@/components/dashboard/DashboardAuthGate";
import { LogoutButton } from "@/components/dashboard/LogoutButton";

/**
 * Dashboard shell — arsitektur application platform.
 * Catatan: saat production, letakkan di route group terpisah agar tidak
 * memakai navbar/footer marketing (refinement menyusul).
 */
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-[80vh] bg-surface-muted">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-0 md:flex-row">
        {/* Sidebar */}
        <aside className="w-full shrink-0 border-b border-line-soft bg-surface md:w-64 md:border-b-0 md:border-r">
          <nav aria-label="Navigasi dashboard" className="flex gap-1 overflow-x-auto p-3 md:flex-col md:gap-1">
            {dashboardSections.map((s) => (
              <Link
                key={s.id}
                href={s.href}
                className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-ink-soft hover:bg-surface-muted hover:text-ink md:whitespace-normal"
              >
                {s.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-line-soft p-3 md:p-4">
            <Button href="/" variant="secondary" size="sm" className="w-full">
              Kembali ke Website
            </Button>
            <div className="mt-2">
              <LogoutButton />
            </div>
          </div>
        </aside>

        {/* Content */}
        <div className="min-w-0 flex-1 p-5 md:p-8">
          <DashboardAuthGate>{children}</DashboardAuthGate>
        </div>
      </div>
    </div>
  );
}