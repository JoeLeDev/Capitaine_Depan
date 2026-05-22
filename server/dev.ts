import "dotenv/config";
import express from "express";
import cors from "cors";
import { sendDevisEmail } from "./send-devis-handler.js";

const app = express();
const PORT = Number(process.env.API_PORT) || 3001;

app.use(cors());
app.use(express.json());

app.post("/api/send-devis", async (req, res) => {
  try {
    await sendDevisEmail(req.body);
    res.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur serveur";
    const status = message.includes("requis") || message.includes("invalide") ? 400 : 500;
    res.status(status).json({ error: message });
  }
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`API devis : http://localhost:${PORT}`);
});
