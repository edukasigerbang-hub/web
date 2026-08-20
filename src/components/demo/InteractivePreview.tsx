import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScreenPlaceholder } from "@/components/fitur/ScreenPlaceholder";

/**
 * Interactive Preview — jujur placeholder. Demo interaktif nyata belum
 * tersedia, jadi kita tidak berpura-pura aplikasi yang berjalan.
 */
export function InteractivePreview() {
  return (
    <Section id="interactive-preview" tone="white">
      <Container>
        <SectionHeading
          eyebrow="PRATINJAU INTERAKTIF"
          title="Coba Gambaran Pengalaman Gerbang Edukasi"
          description="Jelajahi gambaran antarmuka Gerbang Edukasi dan lihat bagaimana berbagai aktivitas pembelajaran dapat digunakan pada Interactive Flat Panel."
        />
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-dashed border-line bg-surface-muted p-10 text-center">
            <ScreenPlaceholder
              icon="logo"
              title="Pratinjau Interaktif"
              theme="accent"
            />
            <p className="mt-4 text-center text-sm text-muted">
              Pratinjau interaktif akan tersedia di sini — demo aplikasi belum
              tersedia.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}