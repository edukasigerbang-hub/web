import type { Metadata } from "next";
import { DashboardSectionPlaceholder } from "@/components/dashboard/DashboardSectionPlaceholder";

export const metadata: Metadata = { title: "Penagihan", robots: { index: false } };

export default function PenagihanPage() {
  return (
    <DashboardSectionPlaceholder
      title="Penagihan"
      description="Riwayat transaksi, faktur, dan metode pembayaran untuk lisensi Anda."
    />
  );
}