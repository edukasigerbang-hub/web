import { howItWorks } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** How It Works — satu journey: Pilih → Download → Install → Activate → Start Learning. */
export function HowItWorks() {
  return (
    <Section id="cara-kerja" tone="white">
      <Container>
        <SectionHeading
          eyebrow="Cara Kerja"
          title="Mulai Menggunakan dalam 5 Langkah"
          description="Dari memilih paket hingga belajar di kelas — prosesnya sederhana dan cepat."
        />
        <div className="relative">
          {/* mobile vertical connector */}
          <span aria-hidden className="pointer-events-none absolute left-[1.125rem] top-2 bottom-2 w-px bg-line md:hidden" />
          {/* desktop horizontal connector */}
          <span aria-hidden className="pointer-events-none absolute inset-x-0 top-[1.125rem] hidden h-px bg-line md:block" />
          <ol className="grid gap-10 md:grid-cols-5 md:items-start md:gap-6">
            {howItWorks.map((item) => (
              <li key={item.step} className="relative flex flex-col gap-3 md:items-center md:text-center">
                <span className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white shadow-card">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}