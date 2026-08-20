import { hero } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";
import Image from "next/image";

/**
 * Hero — hentikan perhatian, jawab "apa/manfaat/coba" dalam hitungan detik.
 * Visual utama berupa mockup IFP berbasis CSS agar tidak bergantung pada
 * file asset. Ganti dengan mockup/screenshot nyata di /assets/hero-ifp.png.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* subtle brand wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(60%_80%_at_70%_0%,var(--color-primary-soft),transparent_70%)]"
      />
      <Container className="grid items-center gap-12 py-16 sm:py-20 md:grid-cols-2 md:py-24">
        {/* Copy */}
        <div className="max-w-xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary-dark">
            <Icon name="sparkle" size={15} />
            Media Interaktif untuk Interactive Flat Panel
          </span>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            {hero.heading}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">{hero.subheading}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href} variant="primary" size="lg" icon="arrow" event={hero.primaryCta.event}>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>

                    <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <li className="flex items-center gap-2">
              <Icon name="check" size={16} className="text-success" /> Android &amp; Windows
            </li>
            <li className="flex items-center gap-2">
              <Icon name="check" size={16} className="text-success" /> Siap dipakai di kelas
            </li>
            <li className="flex items-center gap-2">
              <Icon name="check" size={16} className="text-success" /> Mudah digunakan guru
            </li>
          </ul>

          {/* Conversion funnel cue: discovery -> demo -> licensing -> activation */}
          <p className="mt-8 text-sm text-muted">
            Mulai dari{" "}
            <a href="/demo" className="font-medium text-primary hover:underline">
              demo
            </a>{" "}
            →{" "}
            <a href="/harga" className="font-medium text-primary hover:underline">
              lisensi
            </a>{" "}
            →{" "}
            <a href="/aktivasi" className="font-medium text-accent hover:underline">
              aktivasi
            </a>
            . Satu pengalaman belajar interaktif.
          </p>
        </div>

                {/* Visual: screenshot/mockup IFP nyata dari /assets/hero-ifp.png */}
        <div className="relative">
          {/* subtle geometric "gate" portal behind the image */}
          <div className="portal-rings rounded-2xl" aria-hidden="true" />

          <Image
            src={hero.visual.src}
            alt={hero.visual.alt}
            width={1535}
            height={1024}
            priority
            className="relative h-auto w-full rounded-2xl border border-line object-contain shadow-hero"
          />
        </div>
      </Container>
    </section>
  );
}