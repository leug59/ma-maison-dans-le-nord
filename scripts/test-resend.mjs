// Quick smoke-test for Resend. Run with:
//   node scripts/test-resend.mjs
import { readFileSync } from "fs";
import { Resend } from "resend";

// Read RESEND_API_KEY from .env.local
let apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  try {
    const env = readFileSync(".env.local", "utf8");
    const match = env.match(/^RESEND_API_KEY=(.+)$/m);
    apiKey = match?.[1]?.trim();
  } catch {
    // file not found
  }
}

if (!apiKey) {
  console.error("❌ RESEND_API_KEY not found — set it in .env.local or as an env var");
  process.exit(1);
}

console.log("✓ API key found:", apiKey.slice(0, 8) + "…");

const resend = new Resend(apiKey);

const { data, error } = await resend.emails.send({
  from: "contact@ma-maison-dans-le-nord.fr",
  to: "contact@ma-maison-dans-le-nord.fr",
  subject: "[TEST] Vérification envoi Resend",
  html: "<p>Test d'envoi depuis le script de diagnostic. Si vous recevez cet email, Resend fonctionne correctement.</p>",
});

if (error) {
  console.error("❌ Resend returned an error:");
  console.error(JSON.stringify(error, null, 2));
  process.exit(1);
}

console.log("✅ Email envoyé avec succès !");
console.log("   ID:", data?.id);
