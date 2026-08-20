import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
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
      <div className="flex items-center gap-4">
        <span className="text-3xl font-extrabold leading-none tracking-tighter text-primary/10">
          {feature.number}
        </span>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          {feature.title}
        </h2>
      </div>

      <p className="mt-4 text-base leading-relaxed text-muted">
        {feature.short}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink/70">
        {feature.copy}
      </p>

      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
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
 * Enam showcase section dengan alternation layout:
 * 01 visual-left | 02 text-left | 03 visual-large | 04 visual-left
 * 05 text-left | 06 visual-large + CTA
 */
export function FeatureSections() {
  return (
    <>
      {featuresShowcase.map((feature, i) => {
        const tone = i % 2 === 0 ? "white" : "muted";
                const theme = feature.theme as FeatureTheme;
        const isTextLeft = feature.layout === "text-left";
        const isLarge = feature.layout === "visual-large";
        const isLargeCta = feature.layout === "visual-large-cta";

        return (
          <Section key={feature.id} id={feature.id} tone={tone}>
            <Container className="py-0">
              {isLarge || isLargeCta ? (
                /* 03 & 06: visual besar, text di bawah */
                <div className="flex flex-col items-center gap-10">
                  <ScreenPlaceholder
                    icon={feature.icon as IconName}
                    title={feature.title}
                    theme={theme}
                    img={feature.img}
                    wide
                  />
                  <FeatureText feature={feature} center />
                  {isLargeCta ? (
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button
                        href="/demo"
                        variant="primary"
                        size="lg"
                        icon="arrow"
                        event="demo_click"
                      >
                        Coba Demo
                      </Button>
                      <Button
                        href="/download"
                        variant="secondary"
                        size="lg"
                        event="trial_start"
                      >
                        Download Aplikasi
                      </Button>
                    </div>
                  ) : null}
                </div>
              ) : (
                /* 01,02,04,05: dua kolom, visual kiri/kanan bergantian */
                <div className="grid gap-10 items-center md:grid-cols-2 md:gap-16">
                  <div className={isTextLeft ? "md:col-start-2" : ""}>
                                        <ScreenPlaceholder
                      icon={feature.icon as IconName}
                      title={feature.title}
                      theme={theme}
                      img={feature.img}
                    />
                  </div>
                  <FeatureText feature={feature} />
                </div>
              )}
            </Container>
          </Section>
        );
      })}
    </>
  );
}
