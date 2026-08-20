import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/** Hero /demo — H1 + description + dua CTA (anchor a secciones internas). */
export function DemoHero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(60%_80%_at_70%_0%,var(--color-primary-soft),transparent_70%)]"
      />
      <Container className="mx-auto max-w-3xl py-16 sm:py-20 md:py-24 text-center">
        <Badge tone="brand">Demo</Badge>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
          Lihat Gerbang Edukasi Beraksi
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Tonton video demo atau jelajahi pratinjau interaktif aplikasi. Lihat
          bagaimana Gerbang Edukasi menghadirkan pengalaman belajar yang lebih
          interaktif di Interactive Flat Panel.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            href="#video-demo"
            variant="primary"
            size="lg"
            icon="play"
            event="demo_click"
          >
            Lihat Video Demo
          </Button>
          <Button href="#interactive-preview" variant="secondary" size="lg">
            Jelajahi Demo Interaktif
          </Button>
        </div>
      </Container>
    </section>
  );
}