import { Phone } from "lucide-react";
import { BsSnapchat } from "react-icons/bs";
import { site } from "../lib/site";
import { AnimateIn } from "./AnimateIn";
import { WhatsAppContactRow } from "./WhatsAppContact";

const contactLinkClass =
  "group flex items-center gap-4 transition-opacity hover:opacity-90";

export function ContactBox() {
  return (
    <AnimateIn>
      <div className="mx-auto w-full max-w-xl rounded-2xl border-2 border-brand-orange bg-black/60 px-6 py-8 shadow-glow-orange-lg backdrop-blur-sm sm:px-10">
        <a
          href={`tel:${site.phoneHref}`}
          className={`${contactLinkClass} mb-6`}
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-orange">
            <Phone className="h-7 w-7 text-white" aria-hidden />
          </span>
          <span className="font-display text-2xl tracking-wide text-white sm:text-3xl">
            TÉL :{" "}
            <span className="text-brand-orange group-hover:underline">
              {site.phone}
            </span>
          </span>
        </a>

        <WhatsAppContactRow
          className={`${contactLinkClass} group mb-6`}
        />

        <a
          href={`https://www.snapchat.com/add/${site.snapchat}`}
          target="_blank"
          rel="noopener noreferrer"
          className={contactLinkClass}
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-orange">
            <BsSnapchat className="h-8 w-8 text-white" aria-hidden />
          </span>
          <span className="font-display text-2xl tracking-wide text-white sm:text-3xl">
            SNAP :{" "}
            <span className="text-brand-orange group-hover:underline">
              {site.snapchat}
            </span>
          </span>
        </a>
      </div>
    </AnimateIn>
  );
}
