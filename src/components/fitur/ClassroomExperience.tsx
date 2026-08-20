import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";

interface ClassroomStep {
  icon: IconName;
  step: string;
  title: string;
  description: string;
}

const steps: ClassroomStep[] = [
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
 * PENGALAMAN DI KELAS - pembayangkan penggunaan produk di kelas.
 * Tiga langkah: guru menjelaskan, siswa berinteraksi, kelas aktif.
 */
export function FeatureClassroom() {
  return (
    <Section id="kelas" tone="white">
      <Container>
        <SectionHeading
          eyebrow="PENGALAMAN DI KELAS"
          title="Dari layar menjadi pengalaman belajar"
          description="Bayangkan bagaimana pembelajaran berlangsung ketika guru dan siswa dapat berinteraksi langsung dengan Interactive Flat Panel."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <article
              key={item.step}
              className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-8 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                  <Icon name={item.icon} size={26} />
                </span>
                <span className="text-sm font-bold text-primary/60">
                  {item.step}
                </span>
              </div>
              <h3 className="text-xl font-bold leading-snug text-ink">
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