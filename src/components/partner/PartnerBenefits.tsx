import { partner } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";

/**
 * "Partner dengan Dukungan yang Lengkap" — grid 3/2/1 kolom dari benefit
 * yang sudah ada, disajikan sebagai kartu visual yang menarik.
 */
export function PartnerBenefits() {
  const { benefits } = partner;
  return (
    <Section id="keuntungan" tone="muted">
      <Container>
        <SectionHeading
          eyebrow={benefits.eyebrow}
          title={benefits.title}
          description={benefits.description}
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.items.map((benefit) => (
            <li
              key={benefit.title}
              className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Icon name={benefit.icon as IconName} size={22} />
              </span>
              <h3 className="mt-4 text-base font-bold text-ink">{benefit.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
