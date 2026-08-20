import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/** Final CTA /produk — menggantikan copy lama yang rusak. */
export function ProdukCta() {
  return (
    <section className="bg-surface-muted py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
          Ingin Mencoba Gerbang Edukasi?
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          Lihat langsung bagaimana Gerbang Edukasi menghadirkan pengalaman
          belajar interaktif di Interactive Flat Panel.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:mt-6 sm:flex-row">
          <Button
            href="/demo"
            variant="primary"
            size="lg"
            icon="play"
            event="demo_click"
          >
            Coba Demo
          </Button>
          <Button href="/partner" variant="secondary" size="lg">
            Jadi Partner
          </Button>
        </div>
      </Container>
    </section>
  );
}
