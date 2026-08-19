import type { Metadata } from "next";
import { ActivationForm } from "@/components/ui/ActivationForm";

export const metadata: Metadata = { title: "Aktivasi", robots: { index: false } };

export default function DashboardAktivasiPage() {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8 shadow-card">
      <ActivationForm />
    </div>
  );
}