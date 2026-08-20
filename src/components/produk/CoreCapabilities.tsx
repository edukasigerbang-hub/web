import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";

const capabilities: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "pencil",
    title: "Interactive Learning",
    description: "Pembelajaran dengan elemen interaktif.",
  },
  {
    icon: "quiz",
    title: "Interactive Quiz",
    description: "Evaluasi dan kuis yang membantu siswa berpartisipasi.",
  },
  {
    icon: "media",
    title: "Multimedia",
    description: "Gunakan gambar, audio, video, animasi, dan elemen interaktif.",
  },
  {
    icon: "game",
    title: "Educational Games",
    description: "Aktivitas belajar berbasis permainan yang mendorong partisipasi.",
  },
  {
    icon: "exercise",
    title: "Interactive Exercises",
    description: "Latihan yang memungkinkan siswa berinteraksi langsung dengan materi.",
  },
  {
    icon: "presentation",
    title: "Classroom Presentation",
    description: "Presentasi pembelajaran yang dirancang untuk layar besar.",
  },
];

/** Core capabilities — enam kemampuan ringkas + tautan ke /fitur. */
export function CoreCapabilities() {
  return (
    <Section id="kemampuan" tone="white">
      <Container>
        <SectionHeading
          eyebrow="KEMAMPUAN"
          title="Satu Platform, Banyak Cara Belajar"
          description="Gabungkan berbagai aktivitas pembelajaran dalam satu pengalaman yang dirancang untuk layar besar."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-6 shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Icon name={item.icon} size={22} />
              </span>
              <p className="text-base font-bold leading-tight text-ink">{item.title}</p>
              <p className="text-sm leading-relaxed text-muted">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/fitur"
            className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-dark"
          >
            Lihat Semua Fitur
            <Icon name="arrow" size={18} />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
