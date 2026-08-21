import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { kontenContent } from "@/data/site";

/**
 * Closing conversion CTA for /konten.
 * Reuses existing routes (/fitur, /aktivasi) — no new routing introduced.
 */
export function ContentCta() {
  const cta = kontenContent.cta;
  return (
    <section className="bg-surface-muted py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
          {cta.title}
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          {cta.description}
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:mt-6 sm:flex-row">
          <Button href={cta.primary.href} variant="primary" size="lg">
            {cta.primary.label}
          </Button>
          <Button
            href={cta.secondary.href}
            variant="secondary"
            size="lg"
            event="activation_start"
          >
            {cta.secondary.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
