"use client";

import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";
import { track } from "@/lib/analytics";
import type { TrackEvent } from "@/lib/analytics";
import { Icon } from "./icons";
import type { IconName } from "./icons";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: IconName;
  /** Analytics event fired on click (see lib/analytics §25). */
  event?: TrackEvent;
  eventParams?: Record<string, string | number | boolean | undefined>;
  /** Only used for the non-link variant. */
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors " +
  "focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-card hover:bg-primary-dark focus-visible:outline-primary",
  secondary:
    "bg-surface text-ink border border-line hover:bg-surface-muted focus-visible:outline-primary",
  ghost: "text-ink-soft hover:bg-surface-muted focus-visible:outline-primary",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

function fire(event: TrackEvent | undefined, eventParams?: ButtonProps["eventParams"]) {
  if (event) track(event, eventParams);
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  event,
  eventParams,
  href,
  onClick,
  type = "button",
}: ButtonProps & { href?: string }) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={cls}
        onClick={(e) => {
          onClick?.(e);
          fire(event, eventParams);
        }}
      >
        {children}
        {icon ? <Icon name={icon} size={size === "lg" ? 20 : 18} /> : null}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      onClick={(e) => {
        onClick?.(e);
        fire(event, eventParams);
      }}
    >
      {children}
      {icon ? <Icon name={icon} size={size === "lg" ? 20 : 18} /> : null}
    </button>
  );
}