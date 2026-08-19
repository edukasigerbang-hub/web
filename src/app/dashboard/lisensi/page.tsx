import type { Metadata } from "next";
import { DashboardSectionPlaceholder } from "@/components/dashboard/DashboardSectionPlaceholder";

export const metadata: Metadata = { title: "Lisensi", robots: { index: false } };

export default function LisensiPage() {
  return (
    <DashboardSectionPlaceholder
      title="Lisensi"
      description="Cek status lisensi, masa berlaku, dan perbarui paket. Daftar komplemen menyusul."
    />
  );
}