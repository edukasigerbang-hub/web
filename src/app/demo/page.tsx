import type { Metadata } from "next";
import { demoPage } from "@/data/pages";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DemoPlayer } from "@/components/home/DemoPlayer";

export const metadata: Metadata = {
  title: "Demo",
  description: "Lihat Gerbang Edukasi beraksi — demo & pratinjau interaktif aplikasi media pembelajaran.",
};

export default function DemoPage() {
  return (
    <>
      <PageHeader
        eyebrow={demoPage.eyebrow}
        title={demoPage.title}
        description={demoPage.description}
      />
      <Container className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <DemoPlayer />
          <p className="mt-3 text-center text-xs text-muted">{demoPage.interactiveNote}</p>

          {/* Interactive preview placeholder */}
          <div className="mt-10 rounded-2xl border border-dashed border-line bg-surface-muted p-10 text-center">
            <p className="text-sm font-medium text-ink-soft">
              Pratinjau interaktif aplikasi (placeholder)
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted">
              Di sini nantinya akan tampil demo aplikasi yang bisa dicoba langsung di browser.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={demoPage.primaryCta.href} variant="primary" size="lg" icon="play" event={demoPage.primaryCta.event}>
              {demoPage.primaryCta.label}
            </Button>
            <Button
              href={demoPage.secondaryCta.href}
              variant="secondary"
              size="lg"
              icon="download"
              event={demoPage.secondaryCta.event}
            >
              {demoPage.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}