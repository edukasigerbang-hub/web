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
    <section className="relative overflow-hidden bg-surface">
      {/* subtle brand wash + portal motif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(60%_80%_at_70%_0%,var(--color-primary-soft),transparent_70%)]"
      />
      <Container className="grid items-center gap-12 py-16 sm:py-20 md:grid-cols-2 md:py-24 md:gap-16">
        <div className="max-w-xl">
          <Badge tone="brand">Fitur</Badge>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Fitur yang Membuat Belajar Lebih Interaktif
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {site.name} menghadirkan pengalaman belajar interaktif yang
            dirancang untuk Interactive Flat Panel, sehingga guru dan siswa
            dapat berinteraksi langsung dengan materi pembelajaran.
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
              icon="play"
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
              Download Aplicasi
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
