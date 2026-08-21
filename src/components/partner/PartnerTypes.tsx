import { partner } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";

/** "Pilih Peran Anda" — empat peran kemitraan sebagai kartu ringkas. */
export function PartnerTypes() {
  const { types } = partner;
  return (
    <Section id="peran" tone="white">
      <Container>
        <SectionHeading
          eyebrow={types.eyebrow}
          title={types.title}
          description={types.description}
        />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {types.items.map((type) => (
            <li
              key={type.title}
              className="flex h-full flex-col rounded-2xl border border-line bg-surface p-5 shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Icon name={type.icon as IconName} size={22} />
              </span>
              <h3 className="mt-4 text-base font-bold text-ink">{type.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {type.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
