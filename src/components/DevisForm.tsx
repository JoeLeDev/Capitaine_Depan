import { Loader2, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
import { services } from "../data/services";
import { AnimateIn } from "./AnimateIn";

type FormState = "idle" | "loading" | "success" | "error";

const initialForm = {
  nom: "",
  email: "",
  telephone: "",
  ville: "",
  service: "",
  urgence: "non",
  message: "",
};

export function DevisForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const update = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/send-devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        throw new Error(data.error ?? "Erreur lors de l'envoi");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Une erreur est survenue",
      );
    }
  };

  const inputClass =
    "w-full rounded-lg border border-brand-orange/40 bg-black/50 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30";

  return (
    <section id="devis" className="scroll-mt-24 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <AnimateIn>
          <h2 className="text-center font-display text-4xl tracking-wide text-white sm:text-5xl">
            DEMANDE DE <span className="text-brand-orange">DEVIS</span>
          </h2>
          <p className="mt-4 text-center text-white/70">
            Décrivez votre besoin — réponse rapide par téléphone ou e-mail.
          </p>
        </AnimateIn>

        <AnimateIn delay={120}>
        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5 rounded-2xl border-2 border-brand-orange/50 bg-black/40 p-6 shadow-glow-orange sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="nom" className="mb-1.5 block text-sm font-semibold text-brand-orange">
                Nom complet *
              </label>
              <input
                id="nom"
                name="nom"
                type="text"
                required
                autoComplete="name"
                className={inputClass}
                value={form.nom}
                onChange={(e) => update("nom", e.target.value)}
                placeholder="Jean Dupont"
              />
            </div>
            <div>
              <label htmlFor="telephone" className="mb-1.5 block text-sm font-semibold text-brand-orange">
                Téléphone *
              </label>
              <input
                id="telephone"
                name="telephone"
                type="tel"
                required
                autoComplete="tel"
                className={inputClass}
                value={form.telephone}
                onChange={(e) => update("telephone", e.target.value)}
                placeholder="06 12 34 56 78"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-brand-orange">
                E-mail *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClass}
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="vous@exemple.fr"
              />
            </div>
            <div>
              <label htmlFor="ville" className="mb-1.5 block text-sm font-semibold text-brand-orange">
                Ville / Code postal *
              </label>
              <input
                id="ville"
                name="ville"
                type="text"
                required
                className={inputClass}
                value={form.ville}
                onChange={(e) => update("ville", e.target.value)}
                placeholder="Paris 75"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-brand-orange">
              Type de prestation *
            </label>
            <select
              id="service"
              name="service"
              required
              className={inputClass}
              value={form.service}
              onChange={(e) => update("service", e.target.value)}
            >
              <option value="" disabled>
                Sélectionnez un service
              </option>
              {services.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Autre">Autre</option>
            </select>
          </div>

          <fieldset>
            <legend className="mb-2 text-sm font-semibold text-brand-orange">
              Urgence ?
            </legend>
            <div className="flex flex-wrap gap-4">
              {[
                { value: "oui", label: "Oui — intervention urgente" },
                { value: "non", label: "Non — devis planifié" },
              ].map(({ value, label }) => (
                <label
                  key={value}
                  className="flex cursor-pointer items-center gap-2 rounded-lg border border-brand-orange/30 px-4 py-2 has-checked:border-brand-orange has-checked:bg-brand-orange/10"
                >
                  <input
                    type="radio"
                    name="urgence"
                    value={value}
                    checked={form.urgence === value}
                    onChange={(e) => update("urgence", e.target.value)}
                    className="accent-brand-orange"
                  />
                  <span className="text-sm">{label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-brand-orange">
              Détail de la demande *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={`${inputClass} resize-y`}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Type de porte, situation, horaire souhaité…"
            />
          </div>

          {status === "success" && (
            <p
              role="status"
              className="rounded-lg border border-green-500/50 bg-green-500/10 px-4 py-3 text-center text-green-400"
            >
              Demande envoyée. Capitaine Depan&apos; vous recontacte très vite.
            </p>
          )}

          {status === "error" && (
            <p
              role="alert"
              className="rounded-lg border border-red-500/50 bg-red-500/10 px-4 py-3 text-center text-red-400"
            >
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-orange py-4 font-display text-xl tracking-wide text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                ENVOI EN COURS…
              </>
            ) : (
              <>
                <Send className="h-5 w-5" aria-hidden />
                ENVOYER MA DEMANDE
              </>
            )}
          </button>
        </form>
        </AnimateIn>
      </div>
    </section>
  );
}
