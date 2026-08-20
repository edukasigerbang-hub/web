import { demoSx } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { DemoPlayer } from "./DemoPlayer";

/** Demo — video / preview interaktif + CTA. */
export function DemoSsection() {
  return (
    <Section id="demo" tone="white">
      <Container>
        <SectionHeading
          eyebrow={demoSx.eyebrow}
          title={demoSx.title}
          description={demoSx.description}
        />
        <div className="mx-auto max-w-4xl">
          <DemoPlayer />
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={demoSx.primaryCta.href} variant="primary" size="lg" icon="play" event={demoSx.primaryCta.event}>
              {demoSx.primaryCta.label}
            </Button>
            <Button
              href={demoSx.secondaryCta.href}
              variant="secondary"
              size="lg"
              icon="download"
              event={demoSx.secondaryCta.event}
            >
              {demoSx.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}