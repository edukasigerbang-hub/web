import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";

interface ClassroomScenario {
  icon: IconName;
  step: string;
  title: string;
  description: string;
}

const scenarios: ClassroomScenario[] = [
  {
    icon: "presentation",
    step: "01",
    title: "Guru Menjelaskan",
    description:
      "Guru menggunakan IFP untuk menjelaskan materi secara visual dan interaktif.",
  },
  {
    icon: "pointer",
    step: "02",
    title: "Siswa Berinteraksi",
    description:
      "Siswa dapat ikut menyentuh, memilih, menjawab, dan mengeksplorasi materi.",
  },
  {
    icon: "sparkle",
    step: "03",
    title: "Kelas Menjadi Lebih Aktif",
    description:
      "Pembelajaran menjadi lebih visual, partisipatif, dan menarik.",
  },
];

/**
 * Real Classroom Experience — pembayangkan penggunaan produk di kelas.
 * Tia 3 scenario: guru menjelasa, siswa berinteraksi, kelas aktif.
 */
export function FeatureClassroom() {
  return (
    <Section id="kelas" tone="white">
      <Container>
        <SectionHeading
          eyebrow="Real Classroom Experience"
          title="Dari layar menjadi pengalaman belajar"
          description="Satu scenario yang rebatjalan ketika kelas ikut berinteraksi dengan Interactive Flat Panel."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {scenarios.map((scenario) => (
            <article
              key={scenario.step}
              className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-8 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                  <Icon name={scenario.icon} size={26} />
                </span>
                <span className="text-sm font-bold text-primary/60">
                  {scenario.step}
                </span>
              </div>
              <h3 className="text-xl font-bold leading-snug text-ink">
                {scenario.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {scenario.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}