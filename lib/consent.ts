export const CONSENT_COOKIE = "wr_consent";
// This name is also read by the WealthReach site collector.
export const MODE_COOKIE = "privacy_mode";
export const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;
export const MODE_MAX_AGE = 60 * 60 * 24;
export const OPEN_PREFERENCES_EVENT = "preserve:open-cookie-preferences";
export type ConsentValue = "analytics:yes" | "analytics:no";
export type PrivacyMode = "opt-in" | "opt-out";

const OPT_IN_COUNTRIES = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR",
  "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL",
  "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
]);

// Matches Brandywine Oak's location-based defaults. An explicit choice wins.
export function privacyModeForLocation(country: string | null, region: string | null): PrivacyMode {
  if (!country) return "opt-in";
  const cc = country.toUpperCase();
  if (OPT_IN_COUNTRIES.has(cc) || (cc === "US" && region?.toUpperCase() === "CA")) return "opt-in";
  return "opt-out";
}

export function analyticsAllowed(consent: ConsentValue | null, mode: PrivacyMode, gpc: boolean): boolean {
  if (consent === "analytics:yes") return true;
  if (consent === "analytics:no") return false;
  return mode === "opt-out" && !gpc;
}

export function parseConsent(value: string | null): ConsentValue | null {
  return value === "analytics:yes" || value === "analytics:no" ? value : null;
}
