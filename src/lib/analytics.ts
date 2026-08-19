/**
 * GERBANG EDUKASI â€” ANALYTICS LAYER (API-READY)
 *
 * Lightweight event tracking used across the site. It is deliberately
 * decoupled so it can be pointed at Google Analytics 4 / a dataLayer /
 * Plausible / Mixpanel later by replacing the `dispatch` implementation,
 * without touching any of the call sites.
 *
 * Documented events (see master doc Â§25):
 *  page_view, demo_click, video_play, download_android, download_windows,
 *  pricing_view, trial_start, activation_start, activation_success,
 *  partner_form_submit, contact_submit, purchase
 */

export type TrackEvent =
  | "page_view"
  | "demo_click"
  | "video_play"
  | "download_android"
  | "download_windows"
  | "pricing_view"
  | "trial_start"
  | "activation_start"
  | "activation_success"
  | "partner_form_submit"
  | "dashboard_guard_redirect"
  | "contact_submit"
  | "purchase";

type TrackingParams = Record<string, string | number | boolean | undefined>;

const ENABLED = true;

/**
 * Pushes the event into the global dataLayer (GA4-ready) and, if a
 * provider window hook exists, forwards it. Safe on server-side (no-op).
 */
export function track(event: TrackEvent, params: TrackingParams = {}): void {
  if (!ENABLED || typeof window === "undefined") return;

  const payload = { event, ...params };

  try {
    const w = window as unknown as { dataLayer?: unknown[] };
    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push(payload);
    }
  } catch {
    /* tracking must never break the UI */
  }
}

/** Fire on page mounts for virtual/browser page views. */
export function trackPageView(path: string): void {
  track("page_view", { path });
}

