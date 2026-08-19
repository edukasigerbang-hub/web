import type { Metadata } from "next";
import { DashboardSectionPlaceholder } from "@/components/dashboard/DashboardSectionPlaceholder";

export const metadata: Metadata = { title: "Perangkat", robots: { index: false } };

export default function PerangkatPage() {
  return (
    <DashboardSectionPlaceholder
      title="Perangkat"
      description="Manajemen perangkat yang terdaftar dan status aktivasi Anda."
    />
  );
}