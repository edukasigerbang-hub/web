import { partner } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";

/**
 * Hero /partner — positioning + conversion entry points.
 * Compact two-column hero (text + IFP visual) so it doesn't feel tall.
 * Primary CTA scrolls to the form; secondary to the benefits section.
 */
export function PartnerHero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* subtle digital-gate wash — on-brand, no external image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[280px] bg-[radial-gradient(60%_90%_at_70%_0%,var(--color-primary-soft),transparent_70%)]"
      />
      <Container className="py-12 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Copy */}
          <div className="max-w-xl">
            <Badge tone="brand">{partner.eyebrow}</Badge>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
              {partner.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              {partner.description}
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted">
              {partner.heroSupport}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                href={partner.heroCtas.primary.href}
                variant="primary"
                size="lg"
                event="partner_form_submit"
              >
                {partner.heroCtas.primary.label}
              </Button>
              <Button
                href={partner.heroCtas.secondary.href}
                variant="secondary"
                size="lg"
              >
                {partner.heroCtas.secondary.label}
              </Button>
            </div>
          </div>

          {/* Visual: classroom / IFP partnership theme */}
          <div className="mt-6 lg:mt-0">
            <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
              <Image
                src="/assets/hero-ifp.png"
                alt="Interactive Flat Panel Gerbang Edukasi di ruang kelas"
                width={1535}
                height={1024}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
