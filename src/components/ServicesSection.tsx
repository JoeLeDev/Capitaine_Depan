import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimateIn } from "./AnimateIn";
import { ServicesGrid } from "./ServicesGrid";

type ServicesSectionProps = {
  showPageTitle?: boolean;
};

export function ServicesSection({ showPageTitle = false }: ServicesSectionProps) {
  return (
    <section id="services" className="scroll-mt-24 px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {showPageTitle ? (
          <AnimateIn>
            <p className="text-center font-display text-lg tracking-wide text-brand-orange">
              NOS PRESTATIONS
            </p>
            <h1 className="mt-2 text-center font-display text-4xl tracking-wide text-white sm:text-5xl md:text-6xl">
              SERVICES SERRURERIE
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-center text-white/70">
              Capitaine Depan&apos; intervient en dépannage, installation et
              sécurisation sur toute l&apos;Île-de-France. Diplômé, travail propre
              et devis transparent.
            </p>
          </AnimateIn>
        ) : (
          <AnimateIn>
            <h2 className="text-center font-display text-3xl tracking-wide text-white sm:text-4xl md:text-5xl">
              SERRURIER DÉPANNEUR INSTALLATEUR
            </h2>

            <div className="mx-auto mt-8 flex max-w-2xl items-center gap-4">
              <span className="h-px flex-1 bg-brand-orange" aria-hidden />
              <p className="shrink-0 font-display text-lg tracking-wide text-brand-orange sm:text-xl">
                DIPLÔMÉ – COMPÉTENCES VALIDÉES
              </p>
              <span className="h-px flex-1 bg-brand-orange" aria-hidden />
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-center text-white/70">
              Dépannage, installation et sécurisation sur toute l&apos;Île-de-France.
            </p>
          </AnimateIn>
        )}

        <ServicesGrid />

        <AnimateIn delay={200}>
        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border-2 border-brand-orange bg-gradient-to-r from-brand-orange/20 to-transparent p-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-2xl tracking-wide text-white">
              BESOIN D&apos;UN DEVIS ?
            </p>
            <p className="mt-1 text-white/70">
              Réponse rapide — urgence 24/7 en Île-de-France
            </p>
          </div>
          <Link
            to="/#devis"
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 font-display text-xl tracking-wide text-white transition hover:opacity-90"
          >
            DEMANDER UN DEVIS
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Link>
        </div>
        </AnimateIn>
      </div>
    </section>
  );
}
