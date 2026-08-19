import { pricing } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";

/** Pricing — sederhana, tanpa harga fiktif (Coming Soon / Hubungi Kami). */
export function PricingSection() {
  return (
    <Section id="harga" tone="muted">
      <Container>
        <SectionHeading
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          description={pricing.description}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pricing.tiers.map((tier) => (
            <article
              key={tier.id}
              className={`relative flex flex-col rounded-2xl border bg-surface p-6 shadow-card ${
                tier.featured ? "border-primary shadow-card-hover" : "border-line"
              }`}
            >
              {tier.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                  Direkomendasikan
                </span>
              ) : null}
              <h3 className="text-lg font-bold text-ink">{tier.name}</h3>
              <p className="mt-1 text-sm text-muted">{tier.tagline}</p>
              <p className="mt-4 text-2xl font-extrabold text-ink">{tier.priceLabel}</p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Icon name="check" size={16} className="mt-0.5 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  href={tier.href}
                  variant={tier.featured ? "primary" : "secondary"}
                  className="w-full"
                  event={tier.id === "demo" ? "trial_start" : "contact_submit"}
                >
                  {tier.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          Butuh kebutuhan khusus?{" "}
          <a href="/partner" className="font-semibold text-primary hover:text-primary-dark">
            Hubungi tim kami
          </a>
          .
        </p>
      </Container>
    </Section>
  );
}