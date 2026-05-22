import { Link } from "react-router-dom";
import { site } from "../lib/site";

export function FooterBar() {
  return (
    <footer className="mt-auto px-4 pb-24 pt-4 sm:px-6 md:pb-10">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-gradient-to-r from-brand-orange via-brand-orange-dark to-brand-black px-6 py-5 text-center shadow-glow-orange-lg">
        <p className="font-display text-xl tracking-wide text-white sm:text-2xl md:text-3xl">
          DISPONIBLE{" "}
          <span className="font-bold text-black drop-shadow-sm">24/7</span> SUR
          TOUTE L&apos;
          <span className="text-brand-orange">ÎLE DE FRANCE</span>
        </p>
      </div>

      <nav
        className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/50"
        aria-label="Liens pied de page"
      >
        <Link
          to="/mentions-legales"
          className="transition hover:text-brand-orange"
        >
          Mentions légales
        </Link>
        <a
          href={`tel:${site.phoneHref}`}
          className="transition hover:text-brand-orange"
        >
          {site.phone}
        </a>
      </nav>

      <p className="mt-4 text-center text-sm text-white/40">
        © {new Date().getFullYear()} {site.name} — Tous droits réservés
      </p>
    </footer>
  );
}
