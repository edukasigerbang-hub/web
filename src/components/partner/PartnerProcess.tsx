import { partner } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";

/**
 * "Mulai Kemitraan dalam 4 Langkah" — stepper horizontal di desktop,
 * vertikal di mobile, dengan penomoran visual yang jelas.
 */
export function PartnerProcess() {
  const { process } = partner;
  return (
    <Section id="proses" tone="white">
      <Container>
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          description={process.description}
        />
        <div className="relative">
          {/* mobile vertical connector */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-[1.375rem] top-3 bottom-3 w-px bg-line md:hidden"
          />
          {/* desktop horizontal connector */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-[1.375rem] hidden h-px bg-line md:block"
          />
          <ol className="grid gap-10 md:grid-cols-4 md:items-start md:gap-6">
            {process.steps.map((item) => (
              <li
                key={item.step}
                className="relative flex flex-col gap-3 md:items-start md:text-left"
              >
                <span className="z-10 flex h-11 w-11 shrink-0 items-center justify-center gap-1.5 rounded-full bg-primary text-sm font-bold text-white shadow-card">
                  <Icon name={item.icon as IconName} size={16} />
                  <span className="text-[0.7rem]">{item.step}</span>
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
