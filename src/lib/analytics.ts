import { getCookieConsent } from "./cookies";

let loaded = false;

function loadPlausible(domain: string) {
  if (document.querySelector('script[data-plausible="true"]')) return;

  const script = document.createElement("script");
  script.defer = true;
  script.dataset.plausible = "true";
  script.dataset.domain = domain;
  script.src = "https://plausible.io/js/script.js";
  document.head.appendChild(script);
  loaded = true;
}

function loadGa4(measurementId: string) {
  if (document.querySelector(`script[data-ga4="${measurementId}"]`)) return;

  const gtag = document.createElement("script");
  gtag.async = true;
  gtag.dataset.ga4 = measurementId;
  gtag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(gtag);

  const inline = document.createElement("script");
  inline.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${measurementId}', { anonymize_ip: true });
  `;
  document.head.appendChild(inline);
  loaded = true;
}

export function initAnalytics() {
  if (loaded || getCookieConsent() !== "accepted") return;

  const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
  const ga4Id = import.meta.env.VITE_GA4_ID;

  if (plausibleDomain) {
    loadPlausible(plausibleDomain);
  } else if (ga4Id) {
    loadGa4(ga4Id);
  }
}
