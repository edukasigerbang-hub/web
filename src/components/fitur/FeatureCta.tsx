import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/** Closing conversion CTA — muncul setelah seluruh feature showcase. */
export function FeatureCta() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
          Siap Melihat Gerbang Edukasi Beraksi?
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          Coba pengalaman pembelajaran interaktif secara langsung.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:mt-6 sm:flex-row">
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
      </Container>
    </section>
  );
}
