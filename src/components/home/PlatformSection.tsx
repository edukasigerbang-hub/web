import { platforms } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";

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
        <div className="grid gap-5 md:grid-cols-2">
          {platforms.items.map((platform) => (
            <div
              key={platform.id}
              className="rounded-2xl border border-line bg-surface p-8 shadow-card"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-muted text-ink">
                <Icon name={platform.icon as IconName} size={28} />
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink">{platform.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted">{platform.description}</p>
            </div>
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