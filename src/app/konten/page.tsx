import type { Metadata } from "next";
import { KontenHero } from "@/components/konten/KontenHero";
import { ContentCatalog } from "@/components/konten/ContentCatalog";
import { ContentGrowth } from "@/components/konten/ContentGrowth";
import { ContentCta } from "@/components/konten/ContentCta";

export const metadata: Metadata = {
  title: "Katalog Media Interaktif Gerbang Edukasi",
  description:
    "Katalog media pembelajaran interaktif Gerbang Edukasi untuk Interactive Flat Panel. Materi, game, quiz, dan aktivitas untuk Matematika, IPA, Bahasa, IPS, dan lainnya.",
};

export default function KontenPage() {
  return (
    <>
      <KontenHero />
      <ContentCatalog />
      <ContentGrowth />
      <ContentCta />
    </>
  );
}
