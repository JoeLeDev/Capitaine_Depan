# Capitaine Depan' — Site vitrine

Site vitrine React + Tailwind CSS pour le serrurier **Capitaine Depan'** (Île-de-France).

## Fonctionnalités

- Hero allégé (logo + accroche + boutons appel / devis)
- Animations au scroll sur les sections
- Page d'accueil avec sections ancrées (accueil, services, atouts, devis, contact)
- **Bouton appeler** fixe sur mobile
- **Mentions légales** + politique cookies
- **SEO** : meta dynamiques, Open Graph, schema.org `Locksmith`
- **Bannière cookies** (analytics chargé uniquement après consentement)
- Formulaire de devis via [Resend](https://resend.com)

## Logo

Le logo officiel est dans `public/logo.png` (header + favicon).  
Le flyer complet reste sur l'accueil (`logo-flyer.png`).

## Analytics (optionnel)

Ajoutez dans `.env` **un seul** des deux :

```env
VITE_PLAUSIBLE_DOMAIN=capitainedepan.com
# ou
VITE_GA4_ID=G-XXXXXXXXXX
```

Sans ces variables, la bannière cookies ne s'affiche pas.

## Configuration Resend

1. Créez un compte sur [resend.com](https://resend.com)
2. Ajoutez et vérifiez votre domaine (ou utilisez `onboarding@resend.dev` en test)
3. Copiez `.env.example` vers `.env` :

```bash
cp .env.example .env
```

4. Renseignez les variables :

```env
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=Capitaine Depan <contact@capitainedepan.com>
RESEND_TO_EMAIL=votre@email.fr
```

## Démarrage

```bash
npm install
npm run dev
```

- Site : [http://localhost:5173](http://localhost:5173)
- API locale : [http://localhost:3001](http://localhost:3001)

Les deux serveurs démarrent ensemble (`vite` + API Express).

## Scripts

| Commande      | Description                    |
|---------------|--------------------------------|
| `npm run dev` | Front + API (devis par e-mail) |
| `npm run build` | Build production statique  |
| `npm run preview` | Prévisualiser le build     |

## Domaine

Site de production : **https://capitainedepan.com**

Dans `.env` et sur Vercel :

```env
VITE_SITE_URL=https://capitainedepan.com
```

## Déploiement (Vercel)

1. Connectez le dépôt à Vercel
2. Framework : **Vite**
3. Liez le domaine `capitainedepan.com` dans Vercel → Domains
4. Ajoutez les variables d'environnement (Resend + `VITE_SITE_URL`)
5. La route serverless `api/send-devis.ts` gère l'envoi en production
6. [Google Search Console](https://search.google.com/search-console) → soumettre `https://capitainedepan.com/sitemap.xml`

## Contact (flyer)

- Téléphone : [06.62.49.85.51](tel:+33662498551)
- Snapchat : [CAPI_DESCAPI](https://www.snapchat.com/add/CAPI_DESCAPI)
# Capitaine_Depan
