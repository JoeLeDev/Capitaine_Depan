const CONSENT_KEY = "capitaine-depann-cookie-consent";

export type CookieConsent = "accepted" | "rejected";

export function getCookieConsent(): CookieConsent | null {
  const value = localStorage.getItem(CONSENT_KEY);
  if (value === "accepted" || value === "rejected") return value;
  return null;
}

export function setCookieConsent(consent: CookieConsent) {
  localStorage.setItem(CONSENT_KEY, consent);
  window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: consent }));
}
