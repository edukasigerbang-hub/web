import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";
import Image from "next/image";

interface IfpPoint {
  icon: IconName;
  title: string;
  description: string;
}

const ifpPoints: IfpPoint[] = [
  {
    icon: "pointer",
    title: "Touch First",
    description: "Dirancang untuk interaksi menggunakan layar sentuh.",
  },
  {
    icon: "device",
    title: "Large Screen Experience",
    description: "Interface dibuat agar nyaman dilihat dan digunakan pada layar besar.",
  },
  {
    icon: "android",
    title: "Android & Windows",
    description: "Mendukung perangkat IFP berbasis Android maupun Windows.",
  },
  {
    icon: "thumbsup",
    title: "Teacher Friendly",
    description: "Navigasi sederhana dan mudah dipahami oleh guru.",
  },
];

/**
 * Designed for IFP — memperkuat positioning produk sebagai aplikasi
 * Interactive Flat Panel, bukan sekadar aplikasi yang tampil di layar besar.
 */
export function FeatureDesignedForIfp() {
  return (
    <Section id="ifp" tone="brand">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Dirancang untuk Interactive Flat Panel
            </h2>
            <p className="mt-4 text-base leading-relaxed text-indigo-100 sm:text-lg">
              Bukan sekadar aplikasi yang ditampilkan di layar besar. Gerbang
              Edukasi dirancang dengan mempertimbangkan cara guru dan siswa
              berinteraksi langsung dengan IFP.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {ifpPoints.map((point) => (
                <li
                  key={point.title}
                  className="flex items-start gap-3 rounded-xl bg-white/5 p-4 ring-1 ring-inset ring-white/10"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent-soft">
                    <Icon name={point.icon} size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-indigo-100">
                      {point.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="portal-rings rounded-2xl" aria-hidden="true" />
            <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-2xl border border-white/15 bg-ink/40 shadow-hero">
              <Image
                src="/assets/hero-ifp.png"
                alt="Tampilan aplikasi Gerbang Edukasi pada layar Interactive Flat Panel"
                width={1535}
                height={1024}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}