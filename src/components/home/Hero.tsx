import { hero } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";

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

                {/* Visual: premium IFP app mockup with restrained digital-gate accent */}
        <div className="relative">
          {/* subtle geometric "gate" portal behind the device */}
          <div className="portal-rings rounded-2xl" />

          <div className="rounded-2xl border border-line bg-white p-3 shadow-hero">
            {/* device top bar */}
            <div className="mb-2 flex items-center gap-2 rounded-full bg-ink px-4 py-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-primary text-white">
                <Icon name="logo" size={16} />
              </span>
              <span className="text-xs font-semibold tracking-wide text-white">Gerbang Edukasi</span>
              <span className="mx-auto" />
              <span className="text-[10px] tracking-wide text-white/70">Interactive Flat Panel</span>
            </div>

            {/* App screen — struktur tetap, ganti isi dengan screenshot nyata */}
            <div className="overflow-hidden rounded-xl border border-line bg-white p-5">
              <div className="grid grid-cols-3 gap-2.5">
                <span className="flex h-14 items-center justify-center rounded-lg bg-primary-soft text-primary/70">
                  <Icon name="pencil" size={20} />
                </span>
                <span className="flex h-14 items-center justify-center rounded-lg bg-accent-soft text-accent/70">
                  <Icon name="quiz" size={20} />
                </span>
                <span className="flex h-14 items-center justify-center rounded-lg bg-success/15 text-success/70">
                  <Icon name="game" size={20} />
                </span>
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-lg border border-line bg-white px-3 py-3 shadow-card">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                  <Icon name="logo" size={18} />
                </span>
                <div className="min-w-0 flex-1 truncate">
                  <p className="truncate text-xs font-bold text-ink">Media Pembelajaran Interaktif</p>
                  <p className="truncate text-[11px] text-muted">Sentuh para beraksi · touch to interact</p>
                </div>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success text-white">
                  <Icon name="check" size={14} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}