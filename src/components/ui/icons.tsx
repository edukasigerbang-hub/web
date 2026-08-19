import type { ReactNode, SVGProps } from "react";

/**
 * IconSet — lightweight inline stroke icons (Lucide-style, 24x24).
 * Keeps the bundle small and design-system-consistent without another dep.
 */

type IconProps = SVGProps<SVGSVGElement> & { name: IconName; size?: number };

export type IconName =
  | "pointer"
  | "eye"
  | "thumbsup"
  | "device"
  | "pencil"
  | "quiz"
  | "media"
  | "game"
  | "exercise"
  | "presentation"
  | "android"
  | "window"
  | "download"
  | "tag"
  | "license"
  | "key"
  | "support"
  | "check"
  | "menu"
  | "close"
  | "arrow"
  | "play"
  | "logo"
  | "sparkle";

const paths: Record<IconName, ReactNode> = {
  logo: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <path d="M8.5 15.5v-7m0 3.5h4a2 2 0 0 0 0-4h-4M14 15.5h3" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" />
    </>
  ),
  pointer: (
    <>
      <path d="M6 3l12 6-5.5 2.2L10 17 6 3z" />
      <path d="M10 17l-2.5 3.5" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  thumbsup: (
    <>
      <path d="M7 11v9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3z" />
      <path d="M7 11l4-8c1 0 2 1 2 2.5V8h5.5a2 2 0 0 1 2 2.4l-1.2 6A2 2 0 0 1 17.3 18H7" />
    </>
  ),
  device: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 21h8M12 18v3" />
    </>
  ),
  pencil: (
    <>
      <path d="M4 20l1-4L17 4a2 2 0 0 1 3 3L8 19l-4 1z" />
      <path d="M14 6l4 4" />
    </>
  ),
  quiz: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 0 1 4.9.8c0 1.6-2.4 2-2.4 3.2" />
      <path d="M12 16.6h.01" />
    </>
  ),
  media: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M8 11l4 4 3-3 4 4" />
      <path d="M9 9h.01" />
    </>
  ),
  game: (
    <>
      <path d="M6 15h12M8 13v4M12 6c2.5 0 5 2 6.5 4.5.6 1 1.4 1.6 2.5 1.6 1.5 0 3-1 3-2.6 0-2.9-3.2-9.5-12-9.5S2 8.6 2 11.5C2 13 3.5 14 5 14c1.1 0 1.9-.6 2.5-1.6C9 9.9 11.5 8 14 8c1 0 1.8.3 2.5.8" />
      <path d="M2 11.5C2 9 5 6 8.5 6" />
    </>
  ),
  exercise: (
    <>
      <path d="M9 5h6l3 7-3 7H9l-3-7z" />
      <path d="M12 5v3m0 4v3" />
    </>
  ),
  presentation: (
    <>
      <path d="M3 3h18M4 3v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3" />
      <path d="M12 14v4m0 0l-4 4m4-4l4 4" />
    </>
  ),
  android: (
    <>
      <path d="M6 11V9a6 6 0 0 1 12 0v2" />
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 20v2m8-2v2M9 8H8M16 8h1" />
    </>
  ),
  window: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </>
  ),
  download: (
    <>
      <path d="M12 3v11m0 0l-4-4m4 4l4-4" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </>
  ),
  tag: (
    <>
      <path d="M3 12V5a2 2 0 0 1 2-2h7l9 9-8 8z" />
      <circle cx="7.5" cy="7.5" r="1.5" />
    </>
  ),
  license: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4" />
      <path d="M11 12L20 3m-3 3l3 3" />
    </>
  ),
  support: (
    <>
      <path d="M14 8a6 6 0 0 0-12 0c0 2 .8 3 1.5 3.5L2 14h4l1.5-2.5C8 12 8.5 12 9 12" />
      <circle cx="18" cy="12" r="4" />
      <path d="M18 10v.01M18 13.5h.01" />
    </>
  ),
  check: <path d="M5 12l5 5L20 7" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  arrow: <path d="M5 12h14m-6-6l6 6-6 6" />,
  play: <path d="M7 5l12 7-12 7z" />,
};

export function Icon({ name, size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}