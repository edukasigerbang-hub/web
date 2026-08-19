import type { Metadata } from "next";
import { DashboardSectionPlaceholder } from "@/components/dashboard/DashboardSectionPlaceholder";

export const metadata: Metadata = { title: "Akun", robots: { index: false } };

export default function AkunPage() {
  return (
    <DashboardSectionPlaceholder
      title="Akun"
      description="Profil, keamanan, dan preferensi akun. Integrasi backend menyusul."
    />
  );
}