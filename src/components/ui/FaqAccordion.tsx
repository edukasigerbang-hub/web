"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/pages";
import { Icon } from "./icons";

/** Accordion FAQ yang aksesibel (toggle tombol + aria-expanded). */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-surface">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <span className="font-semibold text-ink">{item.question}</span>
              <Icon
                name="arrow"
                size={18}
                className={`shrink-0 text-primary transition-transform ${open ? "rotate-90" : ""}`}
              />
            </button>
            {open ? (
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{item.answer}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}