import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { defaultSeo, seoByPath } from "../data/seo";
import { site } from "../lib/site";

function upsertMeta(name: string, content: string, property = false) {
  const attr = property ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export function SeoHead() {
  const { pathname } = useLocation();
  const seo = seoByPath[pathname] ?? defaultSeo;
  const canonical = `${site.url.replace(/\/$/, "")}${seo.path}`;

  useEffect(() => {
    document.title = seo.title;
    upsertMeta("description", seo.description);
    upsertMeta("robots", "index, follow");
    upsertLink("canonical", canonical);

    upsertMeta("og:title", seo.title, true);
    upsertMeta("og:description", seo.description, true);
    upsertMeta("og:type", "website", true);
    upsertMeta("og:url", canonical, true);
    upsertMeta("og:locale", "fr_FR", true);
    upsertMeta("og:image", `${site.url}/logo.png`, true);

    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", seo.title);
    upsertMeta("twitter:description", seo.description);
  }, [seo.title, seo.description, canonical]);

  return null;
}
