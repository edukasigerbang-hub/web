import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/** Closing conversion CTA — penutup halaman yang kuat, tidak agresif. */
export function FeatureCta() {
  return (
    <section className="bg-surface-muted py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
          Siap membuat pembelajaran lebih interaktif?
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          Kenali lebih jauh Gerbang Edukasi dan lihat bagaimana media
          pembelajaran interaktif dapat digunakan di kelas Anda.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:mt-6 sm:flex-row">
          <Button
            href="/demo"
            variant="primary"
            size="lg"
            icon="play"
            event="demo_click"
          >
            Lihat Demo
          </Button>
          <Button href="/partner" variant="secondary" size="lg">
            Hubungi Kami
          </Button>
        </div>
      </Container>
    </section>
  );
}
