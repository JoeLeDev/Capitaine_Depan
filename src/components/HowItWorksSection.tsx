import { ArrowDown, ArrowRight, FileText, Phone, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { site } from "../lib/site";
import { AnimateIn } from "./AnimateIn";

type Step = {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: Phone,
    step: "01",
    title: site.whatsappEnabled
      ? site.whatsappStepTitle
      : "VOUS NOUS APPELEZ",
    description: site.whatsappEnabled
      ? site.whatsappStepDescription
      : "Contactez-nous par téléphone. On évalue votre situation et votre urgence.",
  },
  {
    icon: FileText,
    step: "02",
    title: "DEVIS CLAIR",
    description:
      "Vous recevez un devis transparent avant toute intervention — sans mauvaise surprise.",
  },
  {
    icon: Wrench,
    step: "03",
    title: "INTERVENTION",
    description:
      "Capitaine Depan' intervient rapidement sur place en Île-de-France, travail propre et sécurisé.",
  },
];

function StepCard({
  icon: Icon,
  step,
  title,
  description,
  delay,
}: Step & { delay: number }) {
  return (
    <AnimateIn delay={delay} className="h-full">
      <article className="flex h-full flex-col items-center rounded-2xl border border-brand-orange/30 bg-black/50 p-6 text-center lg:items-start lg:text-left">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange">
          <Icon className="h-7 w-7 text-white" aria-hidden />
        </div>
        <span className="font-display text-lg tracking-wide text-brand-orange">
          {step}
        </span>
        <h3 className="mt-1 font-display text-2xl tracking-wide text-white">
          {title}
        </h3>
        <p className="mt-3 text-sm text-white/70 sm:text-base">{description}</p>
      </article>
    </AnimateIn>
  );
}

export function HowItWorksSection() {
  return (
    <section
      id="comment-ca-marche"
      className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-5xl">
        <AnimateIn>
          <p className="text-center font-display text-lg tracking-wide text-brand-orange">
            SIMPLE ET RAPIDE
          </p>
          <h2 className="mt-2 text-center font-display text-4xl tracking-wide text-white sm:text-5xl">
            COMMENT ÇA SE PASSE ?
          </h2>
        </AnimateIn>

        {/* Mobile : vertical */}
        <div className="mt-12 flex flex-col items-center gap-4 lg:hidden">
          {steps.map((step, index) => (
            <div key={step.title} className="w-full max-w-md">
              <StepCard {...step} delay={index * 100} />
              {index < steps.length - 1 && (
                <div className="flex justify-center py-2 text-brand-orange" aria-hidden>
                  <ArrowDown className="h-6 w-6" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop : horizontal */}
        <div className="mt-12 hidden items-stretch gap-3 lg:flex">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-1 items-center gap-3">
              <div className="flex-1">
                <StepCard {...step} delay={index * 100} />
              </div>
              {index < steps.length - 1 && (
                <div
                  className="shrink-0 text-brand-orange"
                  aria-hidden
                >
                  <ArrowRight className="h-8 w-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
