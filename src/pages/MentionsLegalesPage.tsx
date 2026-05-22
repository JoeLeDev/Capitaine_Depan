import { Link } from "react-router-dom";
import { AnimateIn } from "../components/AnimateIn";
import { site } from "../lib/site";

export function MentionsLegalesPage() {
  return (
    <main className="px-4 py-12 sm:px-6">
      <div className="prose-invert mx-auto max-w-3xl text-white/85">
        <AnimateIn>
          <h1 className="font-display text-4xl tracking-wide text-white sm:text-5xl">
            MENTIONS LÉGALES
          </h1>
          <p className="mt-4 text-white/60">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </AnimateIn>

        <AnimateIn delay={80} className="mt-10 space-y-10">
          <section>
            <h2 className="font-display text-2xl text-brand-orange">
              1. Éditeur du site
            </h2>
            <ul className="mt-3 list-none space-y-1 text-sm sm:text-base">
              <li>
                <strong>Raison sociale :</strong> {site.legalName}
              </li>
              <li>
                <strong>Activité :</strong> {site.tagline}
              </li>
              <li>
                <strong>Téléphone :</strong>{" "}
                <a
                  href={`tel:${site.phoneHref}`}
                  className="text-brand-orange hover:underline"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <strong>E-mail :</strong>{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="text-brand-orange hover:underline"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <strong>SIRET / RCS :</strong> [À compléter]
              </li>
              <li>
                <strong>Directeur de publication :</strong> [À compléter]
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-brand-orange">
              2. Hébergement
            </h2>
            <p className="mt-3 text-sm sm:text-base">
              Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, États-Unis —{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-orange hover:underline"
              >
                vercel.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-brand-orange">
              3. Propriété intellectuelle
            </h2>
            <p className="mt-3 text-sm sm:text-base">
              L&apos;ensemble du site (textes, images, logo, charte graphique) est
              la propriété de {site.name}, sauf mention contraire. Toute
              reproduction sans autorisation est interdite.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-brand-orange">
              4. Données personnelles (RGPD)
            </h2>
            <p className="mt-3 text-sm sm:text-base">
              Les données transmises via le formulaire de devis (nom, e-mail,
              téléphone, ville, message) sont utilisées uniquement pour répondre à
              votre demande et établir un devis. Elles ne sont pas revendues à des
              tiers.
            </p>
            <p className="mt-3 text-sm sm:text-base">
              Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
              rectification et de suppression en contactant{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-brand-orange hover:underline"
              >
                {site.email}
              </a>
              .
            </p>
            <p className="mt-3 text-sm sm:text-base">
              Les e-mails sont envoyés via le prestataire Resend (
              <a
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-orange hover:underline"
              >
                politique de confidentialité Resend
              </a>
              ).
            </p>
          </section>

          <section id="cookies">
            <h2 className="font-display text-2xl text-brand-orange">
              5. Cookies & analytics
            </h2>
            <p className="mt-3 text-sm sm:text-base">
              Des cookies de mesure d&apos;audience (Plausible ou Google Analytics)
              peuvent être déposés <strong>uniquement après votre consentement</strong>{" "}
              via la bannière affichée en bas du site. En cas de refus, aucun script
              analytique n&apos;est chargé.
            </p>
            <p className="mt-3 text-sm sm:text-base">
              Votre choix est enregistré localement dans votre navigateur. Vous
              pouvez le modifier en supprimant les données du site dans les
              paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-brand-orange">
              6. Responsabilité
            </h2>
            <p className="mt-3 text-sm sm:text-base">
              {site.name} s&apos;efforce d&apos;assurer l&apos;exactitude des
              informations publiées. Toutefois, le site ne saurait engager la
              responsabilité de l&apos;éditeur en cas d&apos;erreur ou
              d&apos;indisponibilité temporaire.
            </p>
          </section>

          <p className="pt-4">
            <Link
              to="/"
              className="font-display text-lg text-brand-orange hover:underline"
            >
              ← Retour à l&apos;accueil
            </Link>
          </p>
        </AnimateIn>
      </div>
    </main>
  );
}
