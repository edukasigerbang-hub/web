import { features, productHeading } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";

/** Product — kartu fitur visual, tidak penuh teks. */
export function ProductSection() {
  return (
    <Section id="produk" tone="white">
      <Container>
        <SectionHeading
          eyebrow={productHeading.eyebrow}
          title={productHeading.title}
          description={productHeading.description}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="group rounded-2xl border border-line bg-surface p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Icon name={feature.icon as IconName} size={24} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{feature.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}