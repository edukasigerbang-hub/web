import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/** Closing conversion CTA — peinaria de pantalla forta, però no agressiva. */
export function FeatureCta() {
  return (
    <section className="bg-surface-muted py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
          Siap membuat pembelajaran lebih interaktif?
        </h2>
                <p className="max-w-2xl text-lg leading-relaxed text-muted">
          Lihat bagaimana Gerbang Edukasi mengubah Interactive Flat Panel menjadi media pembelajaran yang aktif dan interaktif.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:mt-6 sm:flex-row">
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
      </Container>
    </section>
  );
}
