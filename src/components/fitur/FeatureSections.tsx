import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";
import { featuresShowcase } from "./data";
import type { FeatureShowcase, FeatureTheme } from "./data";
import { ScreenPlaceholder } from "./ScreenPlaceholder";

function FeatureText({
  feature,
  center = false,
}: {
  feature: FeatureShowcase;
  center?: boolean;
}) {
  return (
    <div
      className={`max-w-prose ${center ? "mx-auto text-center" : "text-left"}`}
    >
      <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          {feature.label}
        </span>
      </div>

      <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl">
        {feature.title}
      </h3>

      <p className="mt-4 text-base leading-relaxed text-muted">
        {feature.description}
      </p>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        <li className="flex items-start gap-2.5">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/15 text-success">
            <Icon name="check" size={12} />
          </span>
          <span className="text-sm text-muted">{feature.benefit}</span>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/15 text-success">
            <Icon name="check" size={12} />
          </span>
          <span className="text-sm text-muted">{feature.how}</span>
        </li>
      </ul>
    </div>
  );
}

/**
 * Enam showcase feature — pola alternating (visual ↔ text) yang dinamis saat
 * scrolling. Setiap baris dua kolom; posisi bergantian tiap feature.
 */
export function FeatureSections() {
  return (
    <Section id="fitur" tone="muted">
      <Container>
        <SectionHeading
          eyebrow="Fitur Utama"
          title="Kemampuan inti yang siap dipakai di kelas"
          description="Dari menjelaskan materi hingga mengajak siswa berpartisipasi — semua berjalan langsung di Interactive Flat Panel."
        />

        <div className="flex flex-col gap-20 md:gap-28">
          {featuresShowcase.map((feature, i) => {
            const theme = feature.theme as FeatureTheme;
            const isTextFirst = i % 2 === 1;

            return (
              <div
                key={feature.id}
                id={feature.id}
                className="grid scroll-mt-24 items-center gap-8 md:grid-cols-2 md:gap-16"
              >
                <div className={isTextFirst ? "md:order-2" : ""}>
                  <ScreenPlaceholder
                    icon={feature.icon as IconName}
                    title={feature.title}
                    theme={theme}
                    img={feature.img}
                    wide
                  />
                </div>

                <div className={isTextFirst ? "md:order-1" : ""}>
                  <FeatureText feature={feature} />
                  {feature.layout === "visual-large-cta" ? (
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Button
                        href="/demo"
                        variant="primary"
                        size="lg"
                        icon="play"
                        event="demo_click"
                      >
                        Lihat Demo
                      </Button>
                      <Button
                        href="/partner"
                        variant="secondary"
                        size="lg"
                      >
                        Hubungi Kami
                      </Button>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
