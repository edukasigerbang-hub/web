import type { Metadata } from "next";
import { ProdukHero } from "@/components/produk/ProdukHero";
import { ProductValue } from "@/components/produk/ProductValue";
import { ApaItuEdukasi } from "@/components/produk/ApaItuEdukasi";
import { ProductExperience } from "@/components/produk/ProductExperience";
import { CoreCapabilities } from "@/components/produk/CoreCapabilities";
import { DesignedForIFP } from "@/components/produk/DesignedForIFP";
import { ProdukCta } from "@/components/produk/ProdukCta";

export const metadata: Metadata = {
  title: "Produk Gerbang Edukasi — Platform Media Interaktif untuk IFP",
  description:
    "Gerbang Edukasi adalah platform media pembelajaran interaktif untuk Interactive Flat Panel — satu platform untuk pembelajaran, kuis, multimedia, permainan edukasi, latihan, dan presentasi kelas.",
};

export default function ProdukPage() {
  return (
    <>
      <ProdukHero />
      <ProductValue />
      <ApaItuEdukasi />
      <ProductExperience />
      <CoreCapabilities />
      <DesignedForIFP />
      <ProdukCta />
    </>
  );
}
