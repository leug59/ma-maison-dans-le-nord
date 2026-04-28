import { Resend } from "resend";
import { NextResponse } from "next/server";

const FROM = "contact@ma-maison-dans-le-nord.fr";
const TO_ADMIN = "contact@ma-maison-dans-le-nord.fr";
const SITE_NAME = "Ma Maison dans le Nord";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[devis] RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Configuration serveur manquante." }, { status: 500 });
  }

  const resend = new Resend(apiKey);
  const body = await req.json();
  const { prenom, nom, email, telephone, typeMaison, budget, surface, ville, terrain, message } = body;

  if (!prenom || !nom || !email || !typeMaison || !budget || !ville) {
    return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
  }

  const fullName = `${prenom} ${nom}`;

  // Email de notification à l'admin
  const { data: adminData, error: adminError } = await resend.emails.send({
    from: FROM,
    to: TO_ADMIN,
    replyTo: email,
    subject: `[Devis] ${fullName} — ${typeMaison} à ${ville}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#0d1b2e;border-bottom:2px solid #c8922a;padding-bottom:12px">
          Nouvelle demande de devis
        </h2>
        <table style="width:100%;border-collapse:collapse;margin-top:16px">
          <tr><td style="padding:8px 0;color:#666;width:160px"><strong>Prénom / Nom</strong></td><td style="padding:8px 0;color:#0d1b2e">${fullName}</td></tr>
          <tr><td style="padding:8px 0;color:#666"><strong>Email</strong></td><td style="padding:8px 0;color:#0d1b2e"><a href="mailto:${email}">${email}</a></td></tr>
          ${telephone ? `<tr><td style="padding:8px 0;color:#666"><strong>Téléphone</strong></td><td style="padding:8px 0;color:#0d1b2e">${telephone}</td></tr>` : ""}
          <tr><td style="padding:8px 0;color:#666"><strong>Type de maison</strong></td><td style="padding:8px 0;color:#0d1b2e">${typeMaison}</td></tr>
          <tr><td style="padding:8px 0;color:#666"><strong>Budget</strong></td><td style="padding:8px 0;color:#0d1b2e">${budget}</td></tr>
          ${surface ? `<tr><td style="padding:8px 0;color:#666"><strong>Surface souhaitée</strong></td><td style="padding:8px 0;color:#0d1b2e">${surface} m²</td></tr>` : ""}
          <tr><td style="padding:8px 0;color:#666"><strong>Ville / Code postal</strong></td><td style="padding:8px 0;color:#0d1b2e">${ville}</td></tr>
          ${terrain ? `<tr><td style="padding:8px 0;color:#666"><strong>Terrain</strong></td><td style="padding:8px 0;color:#0d1b2e">${terrain}</td></tr>` : ""}
        </table>
        ${message ? `
        <div style="margin-top:20px;background:#f9fafb;border-left:4px solid #c8922a;padding:16px;border-radius:4px">
          <strong style="color:#0d1b2e">Précisions :</strong>
          <p style="color:#374151;margin:8px 0 0;white-space:pre-wrap">${message}</p>
        </div>` : ""}
        <p style="margin-top:24px;font-size:12px;color:#9ca3af">
          Reçu via le formulaire de devis de ${SITE_NAME}
        </p>
      </div>
    `,
  });

  if (adminError) {
    console.error("[devis] Admin email error:", JSON.stringify(adminError));
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }
  console.log("[devis] Admin email sent, id:", adminData?.id);

  // Email de confirmation à l'expéditeur
  const { data: confirmData, error: confirmError } = await resend.emails.send({
    from: FROM,
    to: email,
    subject: `Votre demande de devis a bien été reçue — ${SITE_NAME}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <h2 style="color:#0d1b2e;border-bottom:2px solid #c8922a;padding-bottom:12px">
          Votre demande de devis a bien été reçue
        </h2>
        <p style="color:#374151">Bonjour ${prenom},</p>
        <p style="color:#374151">
          Merci pour votre demande de devis. Notre équipe l'étudie et vous mettra en relation
          avec le constructeur idéal dans les <strong>24 à 48h</strong>.
        </p>
        <div style="margin:24px 0;background:#f9fafb;border:1px solid #e5e7eb;padding:20px;border-radius:8px">
          <h3 style="color:#0d1b2e;margin:0 0 12px">Récapitulatif de votre projet</h3>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:6px 0;color:#666;width:150px">Type de maison</td><td style="padding:6px 0;color:#0d1b2e"><strong>${typeMaison}</strong></td></tr>
            <tr><td style="padding:6px 0;color:#666">Budget</td><td style="padding:6px 0;color:#0d1b2e"><strong>${budget}</strong></td></tr>
            ${surface ? `<tr><td style="padding:6px 0;color:#666">Surface</td><td style="padding:6px 0;color:#0d1b2e"><strong>${surface} m²</strong></td></tr>` : ""}
            <tr><td style="padding:6px 0;color:#666">Localisation</td><td style="padding:6px 0;color:#0d1b2e"><strong>${ville}</strong></td></tr>
          </table>
        </div>
        <div style="margin:24px 0;background:#0d1b2e;padding:20px;border-radius:8px;text-align:center">
          <p style="color:rgba(255,255,255,0.8);margin:0 0 12px;font-size:14px">En attendant, explorez nos types de maisons</p>
          <a href="https://www.ma-maison-dans-le-nord.fr/types-construction-maison-nord"
             style="display:inline-block;padding:10px 24px;background:#c8922a;color:#fff;text-decoration:none;border-radius:6px;font-weight:600;font-size:14px">
            Voir nos constructions
          </a>
        </div>
        <p style="color:#374151">À très bientôt,<br><strong>L'équipe ${SITE_NAME}</strong></p>
        <p style="margin-top:32px;font-size:12px;color:#9ca3af">
          ${SITE_NAME} — <a href="https://www.ma-maison-dans-le-nord.fr" style="color:#9ca3af">ma-maison-dans-le-nord.fr</a>
        </p>
      </div>
    `,
  });

  if (confirmError) {
    console.error("[devis] Confirmation email error:", JSON.stringify(confirmError));
    // Admin email already sent — return success anyway
  } else {
    console.log("[devis] Confirmation email sent, id:", confirmData?.id);
  }

  return NextResponse.json({ success: true });
}
