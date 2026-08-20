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
    title: "Touch First",
    description: "Interaksi langsung menggunakan layar sentuh.",
  },
  {
    icon: "device",
    title: "Designed for IFP",
    description: "Pengalaman penggunaan dirancang khusus untuk Interactive Flat Panel.",
  },
  {
    icon: "pencil",
    title: "Interactive Learning",
    description: "Materi mendorong siswa untuk melihat, mencoba, menjawab, dan berinteraksi.",
  },
  {
    icon: "android",
    title: "Android & Windows",
    description: "Dapat digunakan pada perangkat IFP berbasis Android maupun Windows.",
  },
];

/**
 * Value Proposition — "Why Gerbang Edukasi?" 4 motivacio.
 * Layout lleuger (icon + titol + desc) per priortizar l'espai; no pesat,
 * com una declaracio de valor, no pas una llista de funcions.
 */
export function FeatureValueProps() {
  return (
    <Section id="why" tone="white">
      <Container>
        <SectionHeading
          eyebrow="Mengapa Gerbang Edukasi?"
          title="Mengapa Gerbang Edukasi?"
          description="Dirancang bukan sekadar menampilkan materi, tetapi membuat interaksi belajar terjadi di dalam kelas."
        />
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {valueItems.map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Icon name={item.icon} size={24} />
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
