import { platforms } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

/** Platform — satu produk, dua platform (Android + Windows). */
export function PlatformSection() {
  return (
    <Section id="platform" tone="muted">
      <Container>
        <SectionHeading
          eyebrow={platforms.eyebrow}
          title={platforms.title}
          description={platforms.description}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {platforms.items.map((platform) => (
            <article
              key={platform.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-card-hover"
            >
              <div className="flex items-center justify-center border-b border-line bg-gradient-to-br from-primary-soft via-white to-accent-soft px-6 py-8">
                <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-white shadow-card overflow-hidden">
                  <Image
                    src={platform.img}
                    alt={`Logo ${platform.title}`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </span>
              </div>
              <div className="flex flex-col gap-3 p-6">
                <h3 className="text-xl font-bold text-ink">{platform.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{platform.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {platforms.cta.map((cta) => (
            <Button
              key={cta.event}
              href={cta.href}
              variant={cta.event === "download_android" ? "primary" : "secondary"}
              icon="download"
              event={cta.event as "download_android" | "download_windows"}
            >
              {cta.label}
            </Button>
          ))}
        </div>
      </Container>
    </Section>
  );
}