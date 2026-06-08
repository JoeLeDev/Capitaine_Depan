import { site } from "../lib/site";

const schema = {
  "@context": "https://schema.org",
  "@type": "Locksmith",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phoneHref,
  email: site.email,
  image: `${site.url}/logo.png`,
  areaServed: {
    "@type": "AdministrativeArea",
    name: site.areaServed,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "€€",
  sameAs: [
    ...(site.whatsappEnabled
      ? [site.whatsappHref.split("?")[0]]
      : []),
    `https://www.snapchat.com/add/${site.snapchat}`,
  ],
};

export function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
