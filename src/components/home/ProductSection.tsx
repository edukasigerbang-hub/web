import { features, productHeading } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={feature.img}
                    alt={feature.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
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