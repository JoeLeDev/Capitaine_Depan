import { site } from "../lib/site";

export type SeoConfig = {
  title: string;
  description: string;
  path: string;
};

export const defaultSeo: SeoConfig = {
  title: `${site.name} — Serrurier ${site.areaServed} 24/7`,
  description: site.description,
  path: "/",
};

export const seoByPath: Record<string, SeoConfig> = {
  "/": defaultSeo,
  "/services": {
    title: `Services serrurerie — ${site.name}`,
    description:
      "Dépannage d'urgence, ouverture de porte, changement de serrure, blindage et installation en Île-de-France. Devis transparent.",
    path: "/services",
  },
  "/mentions-legales": {
    title: `Mentions légales — ${site.name}`,
    description: `Mentions légales, politique de confidentialité et cookies du site ${site.name}.`,
    path: "/mentions-legales",
  },
};
