import type { ReactNode } from "react";

type Tone = "brand" | "accent" | "neutral" | "success";

const tones: Record<Tone, string> = {
  brand: "bg-primary-soft text-primary-dark",
  accent: "bg-accent-soft text-accent-dark",
  neutral: "bg-surface-muted text-muted ring-1 ring-inset ring-line",
  success: "bg-emerald-50 text-emerald-700",
};

/** Small pill label used for eyebrows / category tags. */
export function Badge({ children, tone = "brand" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}