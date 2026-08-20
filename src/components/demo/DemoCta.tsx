import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/** Final CTA /demo - kontak / lihat produk. */
export function DemoCta() {
  return (
    <section className="bg-surface-muted py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
          Siap Melihat Gerbang Edukasi Lebih dekat?
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          Hubungi kami untuk mendapatkan informasi lebih lanjut, melihat demo
          produk, atau mengetahui bagaimana Gerbang Edukasi dapat digunakan pada
          Interactive Flat Panel.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:mt-6 sm:flex-row">
          <Button
            href="/partner"
            variant="primary"
            size="lg"
            icon="play"
            event="demo_click"
          >
            Hubungi Kami
          </Button>
          <Button href="/produk" variant="secondary" size="lg">
            Lihat Produk
          </Button>
        </div>
      </Container>
    </section>
  );
}