import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";

interface ValuePropItem {
  icon: IconName;
  title: string;
  description: string;
}

const valueItems: ValuePropItem[] = [
  {
    icon: "pointer",
    title: "Interactive by Design",
    description:
      "Materi dirancang agar siswa tidak hanya melihat, tetapi ikut berinteraksi.",
  },
  {
    icon: "device",
    title: "Dibuat untuk IFP",
    description:
      "Interface dan pengalaman penggunaan dirancang untuk layar besar dan interaksi sentuh.",
  },
  {
    icon: "media",
    title: "Multimedia Learning",
    description:
      "Gabungkan teks, gambar, audio, video, animasi, dan elemen interaktif dalam satu pengalaman belajar.",
  },
  {
    icon: "thumbsup",
    title: "Teacher Friendly",
    description:
      "Navigasi sederhana sehingga guru dapat menggunakan media pembelajaran tanpa proses yang rumit.",
  },
];

/**
 * Value Proposition — "Mengapa Gerbang Edukasi?" 4 poin singkat setelah hero.
 */
export function FeatureValueProps() {
  return (
    <Section id="mengapa" tone="white">
      <Container>
        <SectionHeading
          eyebrow="Mengapa Gerbang Edukasi?"
          title="Media pembelajaran interaktif yang dibuat untuk kelas modern"
          description="Empat alasan mengapa Gerbang Edukasi berbeda dari media pembelajaran biasa."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {valueItems.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Icon name={item.icon} size={24} />
              </span>
              <h3 className="text-lg font-bold leading-snug text-ink">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
