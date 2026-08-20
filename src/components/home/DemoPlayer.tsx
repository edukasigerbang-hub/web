"use client";

import { track } from "@/lib/analytics";
import { Icon } from "@/components/ui/icons";

/** Demo video frame — 16:9 premium placeholder, siap diganti dengan video nyata. */
export function DemoPlayer() {
  return (
    <a
      href="/demo"
      aria-label="Buka halaman demo Gerbang Edukasi"
      onClick={() => track("video_play", { source: "homepage-demo" })}
      className="group relative block aspect-video w-full overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-primary-soft via-white to-accent-soft shadow-card"
    >
      {/* subtle brand wash */}
      <span aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_60%,var(--color-primary-soft),transparent_75%)]" />
      {/* play button */}
      <span className="relative flex h-full w-full items-center justify-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/90 text-white shadow-card transition-transform duration-300 group-hover:scale-110">
          <Icon name="play" size={34} className="ml-1" />
        </span>
      </span>
      {/* branding */}
      <span className="absolute bottom-4 left-5 inline-flex items-center gap-2 text-sm font-semibold text-ink-soft">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-white">
          <Icon name="logo" size={16} />
        </span>
        Gerbang Edukasi — Demo
      </span>
    </a>
  );
}