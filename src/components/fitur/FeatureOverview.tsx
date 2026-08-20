import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";
import {
  featuresShowcase,
  featureThemeIcon,
} from "./data";
import type { FeatureTheme } from "./data";

/**
 * Clean feature navigation — 6 items, masing-masing anchor ke #id section.
 */
export function FeatureOverview() {
  return (
    <Section id="fitur-overview" tone="white">
      <Container className="py-0">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-wider text-ink-soft uppercase">
            Enam fitur inti
          </p>
          <h2 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
            Apa yang bisa dilakukan Gerbang Edukasi
          </h2>
        </div>

        <ul className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {featuresShowcase.map((feature) => (
            <li key={feature.id}>
              <a
                href={`#${feature.id}`}
                className="group flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 shadow-card transition-colors hover:bg-surface-muted hover:shadow-card-hover"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    featureThemeIcon[feature.theme as FeatureTheme]
                  }`}
                >
                  <Icon name={feature.icon as IconName} size={22} />
                </span>
                <span className="truncate text-sm font-semibold text-ink">
                  {feature.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

