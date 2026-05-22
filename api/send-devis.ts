import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sendDevisEmail } from "../server/send-devis-handler.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  try {
    await sendDevisEmail(req.body);
    return res.status(200).json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur serveur";
    const status =
      message.includes("requis") || message.includes("invalide") ? 400 : 500;
    return res.status(status).json({ error: message });
  }
}
