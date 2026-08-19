import type { Metadata } from "next";
import { DashboardSectionPlaceholder } from "@/components/dashboard/DashboardSectionPlaceholder";

export const metadata: Metadata = { title: "Konten", robots: { index: false } };

export default function DashboardKontenPage() {
  return (
    <DashboardSectionPlaceholder
      title="Konten"
      description="Kelola media pembelajaran dan konten yang tersedia untuk perangkat Anda."
    />
  );
}