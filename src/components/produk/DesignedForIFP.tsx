import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";

const points: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "pointer",
    title: "Touch First",
    description: "Interaksi langsung melalui layar sentuh.",
  },
  {
    icon: "device",
    title: "Large Screen",
    description: "Interface nyaman digunakan pada layar besar.",
  },
  {
    icon: "android",
    title: "Android",
    description: "Mendukung perangkat IFP berbasis Android.",
  },
  {
    icon: "window",
    title: "Windows",
    description: "Mendukung lingkungan perangkat berbasis Windows.",
  },
];

/** Designed for IFP — section ringkas mengapa produk cocok untuk layar besar. */
export function DesignedForIFP() {
  return (
    <Section id="ifp" tone="brand">
      <Container>
        <SectionHeading
          eyebrow="Interactive Flat Panel"
          title="Dirancang untuk Interactive Flat Panel"
          description="Gerbang Edukasi dirancang untuk memanfaatkan layar besar dan interaksi sentuh dalam proses pembelajaran."
          tone="brand"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-accent-soft">
                <Icon name={item.icon} size={22} />
              </span>
              <p className="mt-4 font-semibold text-white">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-indigo-100">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
