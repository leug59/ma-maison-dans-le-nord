import { Resend } from "resend";
import { NextResponse } from "next/server";

const FROM = "noreply@ma-maison-dans-le-nord.fr";
const TO_ADMIN = "legrandj@gmail.com";
const SITE_NAME = "Ma Maison dans le Nord";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { nom, email, telephone, objet, message } = body;

  if (!nom || !email || !objet || !message) {
    return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
  }

  try {
    // Email de notification à l'admin
    await resend.emails.send({
      from: FROM,
      to: TO_ADMIN,
      replyTo: email,
      subject: `[Contact] ${objet} — ${nom}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#0d1b2e;border-bottom:2px solid #c8922a;padding-bottom:12px">
            Nouveau message de contact
          </h2>
          <table style="width:100%;border-collapse:collapse;margin-top:16px">
            <tr><td style="padding:8px 0;color:#666;width:130px"><strong>Nom</strong></td><td style="padding:8px 0;color:#0d1b2e">${nom}</td></tr>
            <tr><td style="padding:8px 0;color:#666"><strong>Email</strong></td><td style="padding:8px 0;color:#0d1b2e"><a href="mailto:${email}">${email}</a></td></tr>
            ${telephone ? `<tr><td style="padding:8px 0;color:#666"><strong>Téléphone</strong></td><td style="padding:8px 0;color:#0d1b2e">${telephone}</td></tr>` : ""}
            <tr><td style="padding:8px 0;color:#666"><strong>Objet</strong></td><td style="padding:8px 0;color:#0d1b2e">${objet}</td></tr>
          </table>
          <div style="margin-top:20px;background:#f9fafb;border-left:4px solid #c8922a;padding:16px;border-radius:4px">
            <strong style="color:#0d1b2e">Message :</strong>
            <p style="color:#374151;margin:8px 0 0;white-space:pre-wrap">${message}</p>
          </div>
          <p style="margin-top:24px;font-size:12px;color:#9ca3af">
            Reçu via le formulaire de contact de ${SITE_NAME}
          </p>
        </div>
      `,
    });

    // Email de confirmation à l'expéditeur
    await resend.emails.send({
      from: FROM,
      to: email,
      subject: `Votre message a bien été reçu — ${SITE_NAME}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#0d1b2e;border-bottom:2px solid #c8922a;padding-bottom:12px">
            Nous avons bien reçu votre message
          </h2>
          <p style="color:#374151">Bonjour ${nom},</p>
          <p style="color:#374151">
            Merci de nous avoir contactés. Nous avons bien reçu votre message concernant
            <strong>${objet}</strong> et nous vous répondrons dans les meilleurs délais (24 à 48h ouvrées).
          </p>
          <div style="margin:24px 0;background:#f9fafb;border-left:4px solid #c8922a;padding:16px;border-radius:4px">
            <strong style="color:#0d1b2e">Rappel de votre message :</strong>
            <p style="color:#374151;margin:8px 0 0;white-space:pre-wrap">${message}</p>
          </div>
          <p style="color:#374151">
            En attendant, vous pouvez consulter nos
            <a href="https://www.ma-maison-dans-le-nord.fr/faq" style="color:#c8922a">questions fréquentes</a>
            ou découvrir
            <a href="https://www.ma-maison-dans-le-nord.fr/types-construction-maison-nord" style="color:#c8922a">nos types de maisons</a>.
          </p>
          <p style="color:#374151">À bientôt,<br><strong>L'équipe ${SITE_NAME}</strong></p>
          <p style="margin-top:32px;font-size:12px;color:#9ca3af">
            ${SITE_NAME} — <a href="https://www.ma-maison-dans-le-nord.fr" style="color:#9ca3af">ma-maison-dans-le-nord.fr</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] Resend error:", err);
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }
}
