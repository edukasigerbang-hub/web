import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProductSection } from "@/components/home/ProductSection";
import { ValueStrip } from "@/components/home/ValueStrip";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Produk",
  description:
    "Jelajahi platform media pembelajaran interaktif untuk Interactive Flat Panel — fitur inti seperti quiz, multimedia, game, dan presentasi kelas.",
};

export default function ProdukPage() {
  return (
    <>
      <PageHeader
        eyebrow="Produk"
        title="Satu Platform Media untuk Kelas Lebih Interaktif"
        description="Jelajahi bagaimana Gerbang Edukasi mengubah Interactive Flat Panel menjadi media belajar interaktif — satu platform untuk interactive learning, kuis, multimedia, game edukasi, latihan, dan presentasi kelas."
      />
      <ValueStrip />
      <ProductSection />
      <Container className="py-12">
        <div className="rounded-2xl border border-line bg-surface-muted p-8 text-center shadow-card">
          <h2 className="text-2xl font-bold text-ink">Berdik, ingin coba sendiri?</h2>
          <p className="mt-2 text-muted">
            Siap merasakan interaktividade langsung di demo nossa.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/demo" variant="primary" size="lg" icon="arrow" event="demo_click">
              Coba Demo
            </Button>
            <Button href="/partner" variant="secondary" size="lg">
              Jadi Partner
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}