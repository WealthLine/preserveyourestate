type EventParams = Record<string, string | number | boolean>;

type GtagWindow = Window & { gtag?: (command: "event", name: string, params?: EventParams) => void };

/* Sends a Google Analytics event only when the visitor has allowed analytics.
   The gtag function exists only after consent (see VisitorTracking), so this
   is a no-op for visitors who decline. Never pass personal information. */
export function trackEvent(name: string, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as GtagWindow).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}
