import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";
import { kontenContent } from "@/data/site";
import Image from "next/image";

/**
 * Hero katalog /konten — positioning + entry point.
 *
 * Dua kolom pada desktop: teks di kiri, visual IFP di kanan.
 * Pada mobile, teks di atas dan visual di bawah (single column).
 * Visual memakai asset placeholder existing (/assets/hero-ifp.png) berupa
 * Interactive Flat Panel yang menampilkan media pembelajaran interaktif.
 * Rasio tetap mencegah layout shift.
 */
export function KontenHero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* subtle digital-gate wash — on-brand, no external image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[280px] bg-[radial-gradient(60%_90%_at_70%_0%,var(--color-primary-soft),transparent_70%)]"
      />
      <Container className="py-14 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="max-w-xl">
            <Badge tone="brand">{kontenContent.eyebrow}</Badge>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
              {kontenContent.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {kontenContent.description}
            </p>

            {/* Supporting features */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6 sm:gap-y-5">
              {kontenContent.heroFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
                    <Icon
                      name={feature.icon as IconName}
                      size={20}
                    />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">
                      {feature.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual: IFP displaying interactive learning media */}
          <div className="mt-10 lg:mt-0">
            <div
              className="portal-rings rounded-2xl"
              aria-hidden="true"
            />
            <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
              <Image
                src={kontenContent.heroVisual.src}
                alt={kontenContent.heroVisual.alt}
                width={1535}
                height={1024}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
