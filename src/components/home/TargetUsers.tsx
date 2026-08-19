import Link from "next/link";
import { targetUsers } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";

const icons: Record<string, IconName> = { guru: "pencil", sekolah: "device", partner: "support" };

/** Target User — guru, sekolah, partner. */
export function TargetUsers() {
  return (
    <Section id="target" tone="muted">
      <Container>
        <SectionHeading
          eyebrow={targetUsers.eyebrow}
          title={targetUsers.title}
          description={targetUsers.description}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {targetUsers.cards.map((card) => (
            <div
              key={card.id}
              id={`target-${card.id}`}
              className="flex flex-col rounded-2xl border border-line bg-surface p-8 shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Icon name={icons[card.id] ?? "sparkle"} size={24} />
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink">{card.title}</h3>
              <p className="mt-2 flex-1 text-base leading-relaxed text-muted">{card.description}</p>
              <Link
                href={card.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                {card.cta}
                <Icon name="arrow" size={16} />
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}