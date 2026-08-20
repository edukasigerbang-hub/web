import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScreenPlaceholder } from "@/components/fitur/ScreenPlaceholder";

/**
 * Video Demo — section jujur. Saat ini lagi belum tersedia video nyata,
 * jadi teks clear placeholder tampilkan, bukan fake video player.
 */
export function VideoDemo() {
  return (
    <Section id="video-demo" tone="muted">
      <Container>
        <SectionHeading
          eyebrow="VIDEO DEMO"
          title="Lihat Gerbang Edukasi dalam Penggunaan Nyata"
          description="Lihat bagaimana Gerbang Edukasi digunakan untuk menghadirkan pembelajaran interaktif melalui Interactive Flat Panel."
        />
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-dashed border-line bg-surface p-10 text-center">
            <ScreenPlaceholder
              icon="device"
              title="Video Demo"
              theme="primary"
            />
            <p className="mt-4 text-center text-sm text-muted">
              Video demo akan ditampilkan di sini — video final belum tersedia.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}