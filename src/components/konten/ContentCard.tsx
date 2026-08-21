"use client";

import { useState } from "react";
import Image from "next/image";
import type { ContentCard as Card, PlatformTarget } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";
import type { IconName } from "@/components/ui/icons";

const platformPills: Record<
  PlatformTarget,
  { label: string; icon: IconName }[]
> = {
  android: [{ label: "Android", icon: "android" }],
  windows: [{ label: "Windows", icon: "window" }],
  both: [
    { label: "Android", icon: "android" },
    { label: "Windows", icon: "window" },
  ],
};

function PlatformPill({ label, icon }: { label: string; icon: IconName }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-line bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-ink-soft">
      <Icon name={icon} size={12} />
      {label}
    </span>
  );
}

/**
 * Product/content card for the /konten catalog.
 *
 * Hierarchy: Thumbnail → Category → Title → Description → Grade → Platform → CTA.
 * Equal-height layout via flex so the grid stays aligned.
 * Thumbnail is locked to 16:9 (object-cover) with an onError fallback so a
 * missing image never breaks the layout or leaves a broken artifact.
 */
export function ContentCard({ card }: { card: Card }) {
  const [imgError, setImgError] = useState(false);
  const primaryCategory = card.categories[0] ?? card.category;
  const platforms = platformPills[card.platform];

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-all duration-200 hover:scale-[1.02] hover:shadow-card-hover">
      {/* 16:9 thumbnail */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-surface-muted to-primary-soft">
        {imgError ? (
          <div className="grid h-full w-full place-items-center">
            <Icon name="media" size={44} className="text-primary/50" />
          </div>
        ) : (
          <Image
            src={card.thumb}
            alt={card.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        {/* Kategori */}
        <span className="text-xs font-semibold uppercase tracking-wider text-primary">
          {primaryCategory}
        </span>

        {/* Judul */}
        <h3 className="mt-2 text-base font-bold leading-snug text-ink">
          {card.title}
        </h3>

        {/* Deskripsi (1–2 baris) */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {card.description}
        </p>

        {/* Jenjang */}
        {card.grade ? (
          <span className="mt-3 text-xs font-medium text-ink-soft">
            {card.grade}
          </span>
        ) : null}

        {/* Platform */}
        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {platforms.map((p) => (
            <PlatformPill key={p.label} label={p.label} icon={p.icon} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-4">
          <Button
            href="/demo"
            variant="ghost"
            size="sm"
            icon="arrow"
            event="demo_click"
          >
            Lihat Detail
          </Button>
        </div>
      </div>
    </article>
  );
}
