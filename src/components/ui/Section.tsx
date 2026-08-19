import type { ReactNode } from "react";

/**
 * Vertical section wrapper with consistent rhythm and optional
 * alternating background for clear visual hierarchy.
 */
export function Section({
  children,
  id,
  className = "",
  tone = "white",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: "white" | "muted" | "brand";
}) {
  const tones: Record<typeof tone, string> = {
    white: "bg-surface",
    muted: "bg-surface-muted",
    brand: "bg-primary",
  };
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 md:py-24 ${tones[tone]} ${className}`}>
      {children}
    </section>
  );
}