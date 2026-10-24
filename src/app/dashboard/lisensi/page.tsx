import type { Metadata } from "next";
import { LicensesView } from "@/components/dashboard/LicensesView";

export const metadata: Metadata = { title: "Lisensi", robots: { index: false } };

export default function LisensiPage() {
  return <LicensesView />;
}
