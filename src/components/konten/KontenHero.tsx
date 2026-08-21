import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { kontenContent } from "@/data/site";

/**
 * Hero katalog /konten — positioning + entry point.
 *
 * Sengaja ringkas agar pengguna langsung melihat katalog di bawahnya.
 * Visual pendukung berupa "brand wash" radial (primary-soft) yang konsisten
 * dengan pola Hero / FeatureHero, tanpa gambar eksternal.
 */
export function KontenHero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      {/* subtle digital-gate wash — on-brand, no external image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[200px] bg-[radial-gradient(60%_90%_at_70%_0%,var(--color-primary-soft),transparent_70%)]"
      />
      <Container className="py-14 md:py-20">
        <div className="mx-auto max-w-2xl">
          <Badge tone="brand">{kontenContent.eyebrow}</Badge>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            {kontenContent.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {kontenContent.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
