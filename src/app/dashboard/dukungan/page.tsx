import type { Metadata } from "next";
import { DashboardSectionPlaceholder } from "@/components/dashboard/DashboardSectionPlaceholder";

export const metadata: Metadata = { title: "Dukungan", robots: { index: false } };

export default function DukunganPage() {
  return (
    <DashboardSectionPlaceholder
      title="Dukungan"
      description="Tiket dukungan dan bantuan untuk akun serta perangkat Anda."
    />
  );
}