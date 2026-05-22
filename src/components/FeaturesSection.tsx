import { Clock, ShieldCheck, ThumbsUp } from "lucide-react";
import { AnimateIn } from "./AnimateIn";
import { FeatureIcon } from "./FeatureIcon";

const features = [
  { icon: Clock, label: "INTERVENTION RAPIDE" },
  { icon: ShieldCheck, label: "TRAVAIL PROPRE ET SÉCURISÉ" },
  { icon: ThumbsUp, label: "SATISFACTION GARANTIE" },
] as const;

export function FeaturesSection() {
  return (
    <section id="atouts" className="scroll-mt-24 px-4 py-12 sm:px-6">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
        {features.map(({ icon, label }, index) => (
          <AnimateIn key={label} delay={index * 100}>
            <FeatureIcon icon={icon} label={label} />
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
