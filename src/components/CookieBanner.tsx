import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { initAnalytics } from "../lib/analytics";
import { getCookieConsent, setCookieConsent } from "../lib/cookies";

const hasAnalytics =
  Boolean(import.meta.env.VITE_PLAUSIBLE_DOMAIN) ||
  Boolean(import.meta.env.VITE_GA4_ID);

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!hasAnalytics) return;
    setVisible(getCookieConsent() === null);
    initAnalytics();

    const onChange = () => setVisible(false);
    window.addEventListener("cookie-consent-change", onChange);
    return () => window.removeEventListener("cookie-consent-change", onChange);
  }, []);

  if (!hasAnalytics || !visible) return null;

  const accept = () => {
    setCookieConsent("accepted");
    initAnalytics();
    setVisible(false);
  };

  const reject = () => {
    setCookieConsent("rejected");
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-orange/40 bg-brand-black/95 p-4 backdrop-blur-md sm:p-5"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-white/80">
          <p id="cookie-banner-title" className="font-semibold text-white">
            Cookies & mesure d&apos;audience
          </p>
          <p className="mt-1">
            Nous utilisons des cookies analytiques pour améliorer le site. Vous
            pouvez accepter ou refuser.{" "}
            <Link
              to="/mentions-legales#cookies"
              className="text-brand-orange underline hover:no-underline"
            >
              En savoir plus
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={reject}
            className="rounded-lg border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-lg bg-brand-orange px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
