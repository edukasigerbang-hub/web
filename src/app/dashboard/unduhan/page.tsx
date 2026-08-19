import type { Metadata } from "next";
import { DashboardSectionPlaceholder } from "@/components/dashboard/DashboardSectionPlaceholder";

export const metadata: Metadata = { title: "Unduhan", robots: { index: false } };

export default function UnduhanPage() {
  return (
    <DashboardSectionPlaceholder
      title="Unduhan"
      description="Tempat mengelola unduhan aplikasi dan pembaruan untuk perangkat Anda."
    />
  );
}