"use client";

import { useState } from "react";
import { contentCards, kontenFilters, kontenContent } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { KontenFilter } from "./KontenFilter";
import { ContentCard } from "./ContentCard";
import { Icon } from "@/components/ui/icons";

/**
 * Interactive catalog body for /konten.
 *
 * Holds the active filter in state and derives the visible cards from the
 * static `contentCards` data. Swapping `contentCards` for a CMS/API response
 * later requires no UI change — only the data source.
 *
 * Grid: 1 col (mobile) → 2 col (tablet) → 3 col (desktop), per spec §5/§14.
 */
export function ContentCatalog() {
  const [active, setActive] = useState("Semua");
  const items =
    active === "Semua"
      ? contentCards
      : contentCards.filter((c) => c.categories.includes(active));

  const renderGrowthNote = (
    <div className="mt-12 flex flex-col items-center gap-3 text-center">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-primary">
        <Icon name="media" size={22} />
      </span>
      <p className="text-sm font-semibold text-ink">
        {kontenContent.growthEyebrow}.
      </p>
      <p className="max-w-md text-sm text-muted">
        {kontenContent.growthDescription}
      </p>
      <p className="text-xs text-muted">{kontenContent.emptyHint}</p>
    </div>
  );

  return (
    <section className="py-10 md:py-14">
      <Container>
        <KontenFilter
          filters={kontenFilters}
          active={active}
          onChange={setActive}
        />

        {items.length === 0 ? (
          renderGrowthNote
        ) : (
          <>
            <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {items.map((card) => (
                <li key={card.id} className="h-full">
                  <ContentCard card={card} />
                </li>
              ))}
            </ul>

            {/* Positive "konten terus bertambah" note (replaces old copy) */}
            <p className="mt-10 text-center text-sm text-muted">
              <span className="font-semibold text-ink">
                {kontenContent.growthEyebrow}.
              </span>{" "}
              {kontenContent.growthDescription}
            </p>
          </>
        )}
      </Container>
    </section>
  );
}
