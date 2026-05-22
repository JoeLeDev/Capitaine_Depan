import { Resend } from "resend";

export type DevisPayload = {
  nom: string;
  email: string;
  telephone: string;
  ville: string;
  service: string;
  urgence: string;
  message: string;
};

function validate(body: unknown): DevisPayload {
  if (!body || typeof body !== "object") {
    throw new Error("Corps de requête invalide");
  }

  const b = body as Record<string, unknown>;
  const fields = ["nom", "email", "telephone", "ville", "service", "message"] as const;

  for (const field of fields) {
    if (typeof b[field] !== "string" || !b[field].trim()) {
      throw new Error(`Le champ « ${field} » est requis`);
    }
  }

  const email = (b.email as string).trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Adresse e-mail invalide");
  }

  return {
    nom: (b.nom as string).trim(),
    email,
    telephone: (b.telephone as string).trim(),
    ville: (b.ville as string).trim(),
    service: (b.service as string).trim(),
    urgence: typeof b.urgence === "string" ? b.urgence : "non",
    message: (b.message as string).trim(),
  };
}

export async function sendDevisEmail(body: unknown) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_TO_EMAIL;

  if (!apiKey || !from || !to) {
    throw new Error(
      "Configuration Resend manquante (RESEND_API_KEY, RESEND_FROM_EMAIL, RESEND_TO_EMAIL)",
    );
  }

  const data = validate(body);
  const resend = new Resend(apiKey);
  const urgenceLabel = data.urgence === "oui" ? "OUI — URGENT" : "Non";

  const html = `
    <h2>Nouvelle demande de devis — Capitaine Depan'</h2>
    <p><strong>Nom :</strong> ${escapeHtml(data.nom)}</p>
    <p><strong>E-mail :</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Téléphone :</strong> ${escapeHtml(data.telephone)}</p>
    <p><strong>Ville :</strong> ${escapeHtml(data.ville)}</p>
    <p><strong>Prestation :</strong> ${escapeHtml(data.service)}</p>
    <p><strong>Urgence :</strong> ${escapeHtml(urgenceLabel)}</p>
    <p><strong>Message :</strong></p>
    <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
  `;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject: `[Devis] ${data.service} — ${data.nom}${data.urgence === "oui" ? " (URGENT)" : ""}`,
    html,
  });

  if (error) {
    throw new Error(error.message);
  }

  return { ok: true as const };
}

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
