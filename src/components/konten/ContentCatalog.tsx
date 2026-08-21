"use client";

import { useState } from "react";
import { contentCards, kontenFilters, kontenContent } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { KontenFilter } from "./KontenFilter";
import { ContentCard } from "./ContentCard";

/**
 * Interactive catalog body for /konten.
 *
 * Holds the active filter in state and derives the visible cards from the
 * static contentCards data. Swapping contentCards for a CMS/API response
 * later requires no UI change -- only the data source.
 *
 * Grid: 1 col (mobile) -> 2 col (tablet) -> 3 col (desktop).
 */
export function ContentCatalog() {
  const [active, setActive] = useState("Semua");
  const items =
    active === "Semua"
      ? contentCards
      : contentCards.filter((c) => c.categories.includes(active));

  return (
    <section className="py-10 md:py-14">
      <Container>
        <KontenFilter
          filters={kontenFilters}
          active={active}
          onChange={setActive}
        />

        {/* Content header -- title + dynamic count (spec section 7) */}
        <div className="mt-8 mb-8">
          <h2 className="text-2xl font-bold text-ink">
            {kontenContent.contentHeader.title} ({items.length})
          </h2>
        </div>

        {items.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-sm text-muted">{kontenContent.emptyHint}</p>
          </div>
        ) : (
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((card) => (
              <li key={card.id} className="h-full">
                <ContentCard card={card} />
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  );
}
