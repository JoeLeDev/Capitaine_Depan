import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../lib/site";
import { AnimateIn } from "./AnimateIn";
import { WhatsAppHeroButton } from "./WhatsAppContact";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative scroll-mt-24 overflow-hidden px-4 pb-14 pt-8 sm:px-6 sm:pb-16 sm:pt-12"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(255,153,0,0.18)_0%,transparent_60%)]"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <AnimateIn>
          <img
            src="/logo.png"
            alt={`${site.name} — ${site.tagline}`}
            className="mx-auto h-auto w-full max-w-xs object-contain sm:max-w-sm md:max-w-md"
            width={480}
            height={320}
            fetchPriority="high"
          />
        </AnimateIn>

        <AnimateIn delay={120} className="mt-6">
          <p className="font-display text-2xl tracking-wide text-brand-orange sm:text-3xl">
            {site.tagline.toUpperCase()}
          </p>
          <p className="mt-3 text-lg text-white/80 sm:text-xl">
            Intervention rapide sur toute l&apos;{site.areaServed}
          </p>
          <p className="mt-2 font-display text-xl tracking-wide text-white sm:text-2xl">
            DISPONIBLE <span className="text-brand-orange">24/7</span>
          </p>
        </AnimateIn>

        <AnimateIn
          delay={240}
          className="mt-8 flex w-full max-w-lg flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center"
        >
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-8 py-4 font-display text-xl tracking-wide text-white transition hover:opacity-90"
          >
            <Phone className="h-5 w-5" aria-hidden />
            APPELER
          </a>
          <WhatsAppHeroButton />
          <Link
            to="/#devis"
            className="inline-flex items-center justify-center rounded-full border-2 border-brand-orange px-8 py-4 font-display text-xl tracking-wide text-brand-orange transition hover:bg-brand-orange/10"
          >
            DEMANDER UN DEVIS
          </Link>
        </AnimateIn>
      </div>
    </section>
  );
}
