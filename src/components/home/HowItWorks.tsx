import { howItWorks } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** How It Works — proses: Pilih → Download → Install → Activate → Start Learning. */
export function HowItWorks() {
  return (
    <Section id="cara-kerja" tone="brand">
      <Container>
        <SectionHeading
          eyebrow="Cara Kerja"
          title="Mulai Menggunakan dalam 5 Langkah"
          description="Dari memilih paket hingga belajar di kelas — prosesnya sederhana dan cepat."
          tone="brand"
        />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {howItWorks.map((item) => (
            <li
              key={item.step}
              className="relative rounded-2xl border border-white/15 bg-white/5 p-6"
            >
              <span className="text-3xl font-extrabold text-indigo-200">{item.step}</span>
              <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-indigo-100">{item.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}