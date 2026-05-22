import { CheckCircle2 } from "lucide-react";
import { services } from "../data/services";
import { AnimateIn } from "./AnimateIn";

export function ServicesGrid() {
  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-2">
      {services.map(({ id, icon: Icon, title, description, highlights }, index) => (
        <AnimateIn key={id} delay={index * 80}>
          <article className="h-full rounded-2xl border border-brand-orange/30 bg-black/50 p-6 text-left transition hover:border-brand-orange hover:shadow-glow-orange">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange">
              <Icon className="h-7 w-7 text-white" aria-hidden />
            </div>
            <h3 className="font-display text-2xl tracking-wide text-white">
              {title}
            </h3>
            <p className="mt-3 text-white/70">{description}</p>
            <ul className="mt-4 space-y-2">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-white/80"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </AnimateIn>
      ))}
    </div>
  );
}
