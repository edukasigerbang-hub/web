import type { Metadata } from "next";
import { DevicesView } from "@/components/dashboard/DevicesView";

export const metadata: Metadata = { title: "Perangkat", robots: { index: false } };

export default function PerangkatPage() {
  return <DevicesView />;
}
