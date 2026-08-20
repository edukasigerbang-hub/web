import { contentCards, contentCategories } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const platformLabels: Record<string, string> = {
  android: "Android",
  windows: "Windows",
  both: "Android · Windows",
};

/** Content — konsep mini marketplace media interaktif. */
export function ContentSection() {
  return (
    <Section id="konten" tone="white">
      <Container>
        <SectionHeading
          eyebrow="Konten"
          title="Eksplorasi Media Interaktif"
          description="Jelajahi media pembelajaran interaktif yang siap digunakan di kelas."
        />
        {/* Categories */}
        <ul className="mb-10 flex flex-wrap justify-center gap-2" aria-label="Kategori konten">
          {contentCategories.map((cat) => (
            <li
              key={cat.name}
              className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-medium text-ink-soft"
            >
              {cat.name}
            </li>
          ))}
        </ul>
        {/* Content cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contentCards.map((card) => (
            <article
              key={card.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-surface-muted to-primary-soft">
                <Image
                  src={card.thumb}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold text-primary">{card.category}</span>
                <h3 className="mt-1.5 font-bold text-ink">{card.title}</h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{card.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted">{platformLabels[card.platform]}</span>
                  <Button href="/konten" variant="ghost" size="sm" icon="arrow">
                    Preview
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/konten" variant="secondary" size="lg">
            Lihat Konten
          </Button>
        </div>
      </Container>
    </Section>
  );
}