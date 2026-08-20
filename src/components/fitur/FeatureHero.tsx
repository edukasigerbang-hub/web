import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";
import { site } from "@/data/site";
import { ScreenPlaceholder } from "./ScreenPlaceholder";

type PlatformPillProps = { icon: IconName; label: string };
function PlatformPill({ icon, label }: PlatformPillProps) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ink-soft">
      <Icon name={icon} size={14} />
      {label}
    </span>
  );
}

/** Hero /fitur — headline + supporting + platform indicators + visual. */
export function FeatureHero() {
  return (
    <section className="bg-surface py-16 sm:py-20 md:py-24">
      <Container className="items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="max-w-xl">
          <Badge tone="brand">Fitur</Badge>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            Fitur yang Membuat Belajar Lebih Interaktif
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Semua fitur inti {site.name} dalam satu platform — untuk
            pembelajaran yang lebih aktif di kelas.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5">
            <PlatformPill icon="android" label="Android" />
            <PlatformPill icon="window" label="Windows" />
            <PlatformPill icon="device" label="IFP" />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href="/demo"
              variant="primary"
              size="lg"
              icon="arrow"
              event="demo_click"
            >
              Coba Demo
            </Button>
            <Button href="/download" variant="secondary" size="lg" event="trial_start">
              Download Aplikasi
            </Button>
          </div>
        </div>

                        <div className="mt-10 md:mt-0">
          <ScreenPlaceholder
            icon="logo"
            title={site.name}
            theme="primary"
            wide
            img="/assets/hero-ifp.png"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
