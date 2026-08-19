import type { Metadata } from "next";
import { contentCards, contentCategories } from "@/data/site";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";

const platformLabels: Record<string, string> = {
  android: "Android",
  windows: "Windows",
  both: "Android · Windows",
};

export const metadata: Metadata = {
  title: "Konten",
  description: "Eksplorasi media interaktif Gerbang Edukasi — Matematika, IPA, Bahasa, Game Edukasi, dan banyak lagi.",
};

export default function KontenPage() {
  return (
    <>
      <PageHeader
        eyebrow="Konten"
        title="Eksplorasi Media Interaktif"
        description="Jelajahi media pembelajaran interaktif yang siap digunakan di kelas. Konten dari berbagai kategori dan platform."
      />
      <Container className="py-14 md:py-20">
        {/* Categories */}
        <ul className="mb-10 flex flex-wrap gap-2" aria-label="Kategori konten">
          {contentCategories.map((cat) => (
            <li
              key={cat.name}
              className="rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-medium text-ink-soft"
            >
              {cat.name}
            </li>
          ))}
        </ul>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contentCards.map((card) => (
            <article
              key={card.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-shadow hover:shadow-card-hover"
            >
              <div className="grid aspect-[16/9] place-items-center bg-gradient-to-br from-surface-muted to-primary-soft">
                <Icon name="media" size={40} className="text-primary/60" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-semibold text-primary">{card.category}</span>
                <h2 className="mt-1.5 font-bold text-ink">{card.title}</h2>
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

        <p className="mt-10 text-center text-sm text-muted">
          Katalog konten akan terus bertambah. Sesuai kebijakan konten, tautan & thumbnail
          diisi saat katalog resmi tersedia.
        </p>
      </Container>
    </>
  );
}