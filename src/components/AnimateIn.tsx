import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type AnimateInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function AnimateIn({
  children,
  className = "",
  delay = 0,
}: AnimateInProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
