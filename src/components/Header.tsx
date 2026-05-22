import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { site } from "../lib/site";

const navItems = [
  { label: "Accueil", to: "/#accueil", isHash: true },
  { label: "Services", to: "/#services", isHash: true },
  { label: "Atouts", to: "/#atouts", isHash: true },
  { label: "Devis", to: "/#devis", isHash: true },
  { label: "Contact", to: "/#contact", isHash: true },
] as const;

function scrollToHash(hash: string) {
  const id = hash.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    if (location.pathname === "/" && location.hash) {
      requestAnimationFrame(() => scrollToHash(location.hash));
    }
  }, [location.pathname, location.hash]);

  const handleNavClick = (to: string, isHash: boolean) => {
    setMenuOpen(false);
    if (isHash && location.pathname === "/") {
      scrollToHash(to.split("#")[1] ? `#${to.split("#")[1]}` : to);
    }
  };

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-display text-lg tracking-wide transition-colors hover:text-brand-orange ${
      isActive ? "text-brand-orange" : "text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-brand-orange/30 bg-brand-black/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="flex shrink-0 items-center"
          onClick={() => handleNavClick("/#accueil", true)}
        >
          <img
            src="/logo.png"
            alt="Capitaine Depan' — serrurier dépanneur"
            className="h-14 w-auto max-w-[160px] object-contain object-left sm:h-16 sm:max-w-[200px] md:h-[4.5rem] md:max-w-[240px]"
            width={480}
            height={320}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
          {navItems.map(({ label, to, isHash }) =>
            isHash ? (
              <Link
                key={label}
                to={to}
                className="font-display text-lg tracking-wide text-white transition-colors hover:text-brand-orange"
                onClick={() => handleNavClick(to, true)}
              >
                {label}
              </Link>
            ) : (
              <NavLink key={label} to={to} className={linkClass}>
                {label}
              </NavLink>
            ),
          )}
          <a
            href={`tel:${site.phoneHref}`}
            className="flex items-center gap-2 rounded-full bg-brand-orange px-4 py-2 font-display text-lg tracking-wide text-white transition-opacity hover:opacity-90"
          >
            <Phone className="h-4 w-4" aria-hidden />
            APPELER
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-orange/50 text-brand-orange lg:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-brand-orange/20 bg-brand-black px-4 py-4 lg:hidden"
          aria-label="Navigation mobile"
        >
          <ul className="flex flex-col gap-3">
            {navItems.map(({ label, to, isHash }) => (
              <li key={label}>
                {isHash ? (
                  <Link
                    to={to}
                    className="block font-display text-xl tracking-wide text-white hover:text-brand-orange"
                    onClick={() => handleNavClick(to, true)}
                  >
                    {label}
                  </Link>
                ) : (
                  <NavLink
                    to={to}
                    className="block font-display text-xl tracking-wide hover:text-brand-orange"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                )}
              </li>
            ))}
            <li>
              <a
                href={`tel:${site.phoneHref}`}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-brand-orange px-4 py-3 font-display text-xl tracking-wide text-white"
              >
                <Phone className="h-5 w-5" aria-hidden />
                {site.phone}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
