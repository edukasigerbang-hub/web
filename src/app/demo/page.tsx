import type { Metadata } from "next";
import { DemoHero } from "@/components/demo/DemoHero";
import { VideoDemo } from "@/components/demo/VideoDemo";
import { InteractivePreview } from "@/components/demo/InteractivePreview";
import { WhatYouCanSee } from "@/components/demo/WhatYouCanSee";
import { DemoCta } from "@/components/demo/DemoCta";

export const metadata: Metadata = {
  title: "Demo Gerbang Edukasi - Lihat Aplikasi Beraksi",
  description: "Tonton video demo atau jelajahi pratinjau interaktif Gerbang Edukasi, aplikasi media pembelajaran interaktif untuk Interactive Flat Panel.",
};

export default function DemoPage() {
  return (
    <>
      <DemoHero />
      <VideoDemo />
      <InteractivePreview />
      <WhatYouCanSee />
      <DemoCta />
    </>
  );
}
