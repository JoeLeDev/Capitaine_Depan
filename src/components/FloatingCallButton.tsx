import { Phone } from "lucide-react";
import { site } from "../lib/site";

export function FloatingCallButton() {
  return (
    <a
      href={`tel:${site.phoneHref}`}
      className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange text-white shadow-glow-orange-lg transition hover:scale-105 hover:opacity-90 md:hidden"
      aria-label={`Appeler ${site.name} au ${site.phone}`}
    >
      <Phone className="h-7 w-7" aria-hidden />
    </a>
  );
}
