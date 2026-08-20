import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";

const points: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "pencil",
    title: "Materi Interaktif",
    description: "Materi pembelajaran dapat disajikan dengan elemen yang mendukung interaksi langsung.",
  },
  {
    icon: "quiz",
    title: "Aktivitas Belajar",
    description: "Kuis, latihan, dan permainan membantu membuat siswa lebih aktif mengikuti pembelajaran.",
  },
  {
    icon: "presentation",
    title: "Presentasi Kelas",
    description: "Guru dapat menyampaikan materi melalui layar besar dalam satu pengalaman pembelajaran.",
  },
];

/** What You Can See - tiga poin yang ditampilkan dalam demo. */
export function WhatYouCanSee() {
  return (
    <Section id="lihat" tone="muted">
      <Container>
        <SectionHeading
          eyebrow="YANG DAPAT DILIHAT"
          title="Lihat Bagaimana Pembelajaran Menjadi Lebih Interaktif"
          description="Gerbang Edukasi menggabungkan berbagai aktivitas pembelajaran dalam satu pengalaman yang dirancang untuk Interactive Flat Panel."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((item) => (
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
      </Container>
    </Section>
  );
}
