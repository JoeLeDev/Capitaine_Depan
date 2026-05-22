import type { LucideIcon } from "lucide-react";

type FeatureIconProps = {
  icon: LucideIcon;
  label: string;
};

export function FeatureIcon({ icon: Icon, label }: FeatureIconProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-orange shadow-glow-orange">
        <Icon className="h-10 w-10 text-white" strokeWidth={2.5} aria-hidden />
      </div>
      <p className="max-w-[11rem] font-display text-lg leading-tight tracking-wide text-white sm:text-xl">
        {label}
      </p>
    </div>
  );
}
