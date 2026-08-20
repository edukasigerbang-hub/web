import { features, productHeading } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";

/** Product — kartu fitur visual, tidak penuh teks. */
const gradientPairs = [
  "from-primary-soft to-accent-soft",
  "from-accent-soft to-success/15",
  "from-primary-soft to-success/15",
];

export function ProductSection() {
  return (
    <Section id="produk" tone="white">
      <Container>
        <SectionHeading
          eyebrow={productHeading.eyebrow}
          title={productHeading.title}
          description={productHeading.description}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <div
                  className={`grid h-full w-full place-items-center bg-gradient-to-br transition-transform duration-500 group-hover:scale-105 ${
                    gradientPairs[index % gradientPairs.length]
                  }`}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/85 text-primary shadow-card">
                    <Icon name={feature.icon as IconName} size={26} />
                  </span>
                </div>
              </div>
              <div className="flex flex-col p-5">
                <h3 className="text-lg font-bold text-ink">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}