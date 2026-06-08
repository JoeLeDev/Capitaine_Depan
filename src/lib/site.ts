export const site = {
  name: "Capitaine Depan'",
  legalName: "Capitaine Depan'",
  tagline: "Serrurier dépanneur installateur",
  description:
    "Serrurier dépanneur et installateur en Île-de-France. Ouverture de porte, changement de serrure, blindage. Intervention rapide 24h/24 et 7j/7.",
  phone: "06.62.49.85.51",
  phoneHref: "+33662498551",
  /** Passer à `true` quand le WhatsApp professionnel est configuré */
  whatsappEnabled: false,
  whatsappHref:
    "https://wa.me/33662498551?text=Bonjour%2C%20je%20souhaite%20une%20intervention%20serrurerie.",
  whatsappLabel: "WhatsApp",
  whatsappStepTitle: "APPEL OU MESSAGE",
  whatsappStepDescription:
    "Contactez-nous par téléphone ou WhatsApp. On évalue votre situation et votre urgence.",
  snapchat: "CAPI_DESCAPI",
  email: "contact@capitainedepan.com",
  areaServed: "Île-de-France",
  url: import.meta.env.VITE_SITE_URL ?? "https://capitainedepan.com",
} as const;
