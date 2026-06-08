import { SiWhatsapp } from "react-icons/si";
import { site } from "../lib/site";

/** Bouton WhatsApp du hero — masqué tant que `site.whatsappEnabled` est false */
export function WhatsAppHeroButton() {
  if (!site.whatsappEnabled) return null;

  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-display text-xl tracking-wide text-white transition hover:opacity-90"
    >
      <SiWhatsapp className="h-5 w-5" aria-hidden />
      WHATSAPP
    </a>
  );
}

/** Ligne WhatsApp de la zone contact — masquée tant que `site.whatsappEnabled` est false */
export function WhatsAppContactRow({ className = "" }: { className?: string }) {
  if (!site.whatsappEnabled) return null;

  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
        <SiWhatsapp className="h-8 w-8 text-white" aria-hidden />
      </span>
      <span className="font-display text-2xl tracking-wide text-white sm:text-3xl">
        {site.whatsappLabel.toUpperCase()} :{" "}
        <span className="text-brand-orange group-hover:underline">
          {site.phone}
        </span>
      </span>
    </a>
  );
}
