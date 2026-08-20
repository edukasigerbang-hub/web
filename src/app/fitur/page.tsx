import type { Metadata } from "next";
import { FeatureHero } from "@/components/fitur/FeatureHero";
import { FeatureOverview } from "@/components/fitur/FeatureOverview";
import { FeatureSections } from "@/components/fitur/FeatureSections";
import { FeatureCta } from "@/components/fitur/FeatureCta";

export const metadata: Metadata = {
  title: "Fitur",
  description:
    "Fitur inti Gerbang Edukasi — pembelajaran interaktif, kuis, multimedia, educational games, latihan, dan presentasi untuk Interactive Flat Panel (Android & Windows).",
};

export default function FiturPage() {
  return (
    <>
      <FeatureHero />
      <FeatureOverview />
      <FeatureSections />
      <FeatureCta />
    </>
  );
}
