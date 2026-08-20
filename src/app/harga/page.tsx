import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Harga Gerbang Edukasi — Pilih Paket",
  description: "Pilih paket Gerbang Edukasi sesuai kebutuhan penggunaan, mulai dari personal hingga sekolah dan institusi.",
};

const plans = {
  demo: {
    name: "Demo",
    desc: "Lihat dan rasakan bagaimana Gerbang Edukasi digunakan untuk pembelajaran interaktif.",
    status: "Demo",
    cta: "Coba Demo",
    href: "/demo",
  },
  personal: {
    name: "Personal",
    desc: "Untuk penggunaan pribadi dan kebutuhan pembelajaran individu.",
    status: "Segera Hadir",
    cta: "Segera Hadir",
    href: "/partner",
  },
  school: {
    name: "School",
    desc: "Untuk kebutuhan pembelajaran dan penggunaan Gerbang Edukasi di lingkungan sekolah.",
    status: "Segera Hadir",
    cta: "Segera Hadir",
    href: "/partner",
  },
  enterprise: {
    name: "Enterprise",
    desc: "Untuk kebutuhan institusi dan penerapan Gerbang Edukasi dalam skala yang lebih luas.",
    status: "Hubungi Kami",
    cta: "Hubungi Kami",
    href: "/partner",
  },
};

const choose = {
  eyebrow: "PILIH SESUAI KEBUTUHAN",
  title: "Temukan Pilihan yang Sesuai",
  description: "Pilih paket berdasarkan cara Anda menggunakan Gerbang Edukasi.",
  items: [
    { name: "Personal", desc: "Untuk penggunaan pribadi dan pembelajaran individu." },
    { name: "School", desc: "Untuk kebutuhan pembelajaran di lingkungan sekolah." },
    { name: "Enterprise", desc: "Untuk kebutuhan institusi dan penerapan dalam skala yang lebih luas." },
  ],
};

export default function HargaPage() {
  const list = Object.values(plans);
  return (
    <>
      <Section id="harga" tone="white" className="py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Harga"
            title="Pilih Paket Gerbang Edukasi"
            description="Pilih solusi Gerbang Edukasi sesuai kebutuhan penggunaan Anda, mulai dari penggunaan personal hingga kebutuhan sekolah dan institusi."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {list.map((t) => (
              <article key={t.name} className="flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-card">
                <h2 className="text-lg font-bold text-ink">{t.name}</h2>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-muted">{t.desc}</p>
                <p className="mt-6 text-sm font-semibold text-ink-soft">Status: <span className="text-ink">{t.status}</span></p>
                <div className="mt-4">
                  <Button href={t.href} variant="secondary" className="w-full">{t.cta}</Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            eyebrow={choose.eyebrow}
            title={choose.title}
            description={choose.description}
          />
          <div className="grid gap-5 sm:grid-cols-3">
            {choose.items.map((it) => (
              <div key={it.name} className="flex flex-col gap-2 rounded-2xl border border-line bg-surface p-6">
                <p className="text-base font-bold text-ink">{it.name}</p>
                <p className="text-sm leading-relaxed text-muted">{it.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">Belum Yakin Memilih Paket?</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">Hubungi kami untuk mendiskusikan kebutuhan penggunaan Gerbang Edukasi Anda.</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button href="/partner" variant="primary" size="lg">Hubungi Kami</Button>
            <Button href="/produk" variant="secondary" size="lg">Lihat Produk</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
