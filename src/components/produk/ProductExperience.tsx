import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScreenPlaceholder } from "@/components/fitur/ScreenPlaceholder";

const points: { step: string; title: string; description: string }[] = [
  {
    step: "Explore",
    title: "Explore",
    description: "Guru membuka dan menjelaskan materi secara visual.",
  },
  {
    step: "Interact",
    title: "Interact",
    description: "Siswa berinteraksi langsung dengan materi melalui layar sentuh.",
  },
  {
    step: "Engage",
    title: "Engage",
    description: "Aktivitas, kuis, latihan, dan permainan membantu menjaga keterlibatan siswa.",
  },
];

/** Product experience — satu visual utama + tiga poin kecil. */
export function ProductExperience() {
  return (
    <Section id="pengalaman" tone="muted">
      <Container>
        <SectionHeading
          eyebrow="PENGALAMAN"
          title="Satu Platform untuk Pengalaman Belajar Interaktif"
          description="Semua yang dibutuhkan guru untuk membuat pembelajaran lebih aktif — tersedia dalam satu aplikasi yang siap digunakan di Interactive Flat Panel."
        />
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <ScreenPlaceholder
              icon="logo"
              title="Gerbang Edukasi"
              theme="primary"
              img="/assets/hero-ifp.png"
              wide
            />
          </div>
          <ul className="grid gap-6">
            {points.map((item) => (
              <li key={item.step}>
                <p className="text-sm font-bold uppercase tracking-wide text-primary">
                  {item.step}
                </p>
                <p className="mt-1 text-base leading-relaxed text-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
