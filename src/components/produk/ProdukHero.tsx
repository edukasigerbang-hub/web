import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ScreenPlaceholder } from "@/components/fitur/ScreenPlaceholder";

/** Hero /produk — headline + subheadline + CTA + visual produk di IFP. */
export function ProdukHero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(60%_80%_at_70%_0%,var(--color-primary-soft),transparent_70%)]"
      />
      <Container className="grid items-center gap-12 py-16 sm:py-20 md:grid-cols-2 md:py-24 md:gap-16">
        <div className="max-w-xl">
          <Badge tone="brand">Produk</Badge>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Satu Platform Media untuk Kelas Lebih Interaktif
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Gerbang Edukasi mengubah Interactive Flat Panel menjadi media belajar
            interaktif — satu platform untuk pembelajaran, kuis, multimedia,
            permainan edukasi, latihan, dan presentasi kelas.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
        </div>

        <div className="mt-10 md:mt-0">
          <ScreenPlaceholder
            icon="logo"
            title="Gerbang Edukasi"
            theme="primary"
            img="/assets/hero-ifp.png"
            priority
            wide
          />
        </div>
      </Container>
    </section>
  );
}
