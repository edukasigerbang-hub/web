"use client";

import type { ContentFilter } from "@/data/site";

interface KontenFilterProps {
  filters: ContentFilter[];
  active: string;
  onChange: (value: string) => void;
}

/**
 * Horizontal filter bar for the /konten catalog.
 *
 * - Buttons (not divs) → keyboard accessible.
 * - Fixed height + min-width → no layout shift when toggling.
 * - aria-pressed → conveys active state to assistive tech.
 * - flex-wrap inside a constrained container → no horizontal overflow.
 */
export function KontenFilter({ filters, active, onChange }: KontenFilterProps) {
  return (
    <nav aria-label="Filter katalog konten">
      <ul className="flex flex-wrap items-center gap-2">
        {filters.map((f) => {
          const isActive = active === f.label;
          return (
            <li key={f.id}>
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => onChange(f.label)}
                className={
                  "h-9 min-w-[4.25rem] whitespace-nowrap rounded-full px-4 text-sm font-semibold transition-colors " +
                  (isActive
                    ? "bg-primary text-white"
                    : "border border-line bg-surface text-ink-soft hover:bg-surface-muted")
                }
              >
                {f.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
