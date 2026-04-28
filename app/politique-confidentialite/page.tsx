import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Ma Maison dans le Nord",
  description:
    "Politique de confidentialité et de protection des données personnelles du site ma-maison-dans-le-nord.fr, conformément au RGPD.",
  alternates: { canonical: "/politique-confidentialite" },
};

const sections = [
  {
    id: "responsable",
    titre: "1. Responsable du traitement",
    contenu: [
      {
        type: "p",
        texte:
          "Le responsable du traitement des données personnelles collectées sur le site ma-maison-dans-le-nord.fr est :",
      },
      {
        type: "list",
        items: [
          "Julien Legrand – Entreprise Individuelle",
          "17 rue du Plouick, 59133 Phalempin",
          "Email : contact@ma-maison-dans-le-nord.fr",
          "Numéro de TVA : FR60790279483",
        ],
      },
    ],
  },
  {
    id: "donnees-collectees",
    titre: "2. Données collectées",
    contenu: [
      {
        type: "p",
        texte:
          "Dans le cadre de l'utilisation du site et du formulaire de demande de devis, nous sommes susceptibles de collecter les données suivantes :",
      },
      {
        type: "list",
        items: [
          "Nom et prénom",
          "Adresse email",
          "Numéro de téléphone",
          "Localisation du projet (commune, département)",
          "Description du projet de construction",
          "Données de navigation (adresse IP, pages consultées, durée de visite)",
        ],
      },
      {
        type: "p",
        texte:
          "Aucune donnée sensible (au sens de l'article 9 du RGPD) n'est collectée sur ce site.",
      },
    ],
  },
  {
    id: "finalites",
    titre: "3. Finalités du traitement",
    contenu: [
      {
        type: "p",
        texte: "Vos données personnelles sont collectées pour les finalités suivantes :",
      },
      {
        type: "list",
        items: [
          "Mise en relation avec nos constructeurs partenaires dans les Hauts-de-France",
          "Réponse à vos demandes de devis et de contact",
          "Amélioration de l'expérience de navigation sur le site",
          "Prévention et lutte contre la fraude informatique",
          "Envoi de communications commerciales si vous y avez consenti",
        ],
      },
      {
        type: "p",
        texte:
          "Le site ne commercialise pas vos données personnelles. Elles sont utilisées exclusivement dans le cadre des finalités listées ci-dessus.",
      },
    ],
  },
  {
    id: "base-legale",
    titre: "4. Base légale des traitements",
    contenu: [
      {
        type: "p",
        texte: "Nos traitements reposent sur les bases légales suivantes :",
      },
      {
        type: "list",
        items: [
          "Votre consentement (article 6.1.a du RGPD) : pour l'envoi de communications marketing et le dépôt de cookies non essentiels.",
          "L'exécution d'un contrat ou de mesures précontractuelles (article 6.1.b) : pour le traitement de vos demandes de devis.",
          "Notre intérêt légitime (article 6.1.f) : pour l'amélioration du site, la sécurité et la prévention de la fraude.",
        ],
      },
    ],
  },
  {
    id: "conservation",
    titre: "5. Durée de conservation",
    contenu: [
      {
        type: "p",
        texte:
          "Vos données sont conservées pour la durée strictement nécessaire aux finalités pour lesquelles elles ont été collectées :",
      },
      {
        type: "list",
        items: [
          "Données de contact (formulaire de devis) : 3 ans à compter du dernier contact.",
          "Données de navigation et cookies : 13 mois maximum.",
          "Données de communication commerciale : jusqu'au retrait de votre consentement.",
        ],
      },
    ],
  },
  {
    id: "destinataires",
    titre: "6. Destinataires des données",
    contenu: [
      {
        type: "p",
        texte:
          "Vos données personnelles peuvent être transmises aux constructeurs partenaires de notre réseau dans les Hauts-de-France, uniquement dans le cadre de la mise en relation que vous avez sollicitée.",
      },
      {
        type: "p",
        texte:
          "Le site s'interdit de transférer vos données vers un pays situé en dehors de l'Union européenne ou reconnu comme « non adéquat » par la Commission européenne sans vous en informer préalablement.",
      },
      {
        type: "p",
        texte:
          "Nos sous-traitants techniques (hébergeur, outils d'analyse) sont soumis à des obligations de confidentialité et ne peuvent utiliser vos données qu'aux fins pour lesquelles elles leur ont été communiquées.",
      },
    ],
  },
  {
    id: "droits",
    titre: "7. Vos droits",
    contenu: [
      {
        type: "p",
        texte:
          "Conformément au RGPD (Règlement UE 2016/679), vous disposez des droits suivants sur vos données personnelles :",
      },
      {
        type: "list",
        items: [
          "Droit d'accès (article 15) : obtenir la confirmation que vos données sont traitées et en obtenir une copie.",
          "Droit de rectification (article 16) : corriger des données inexactes ou incomplètes.",
          "Droit à l'effacement (article 17) : demander la suppression de vos données dans les cas prévus par la loi.",
          "Droit à la limitation du traitement (article 18) : demander la suspension du traitement de vos données.",
          "Droit d'opposition (article 21) : vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière.",
          "Droit à la portabilité (article 20) : recevoir vos données dans un format structuré et lisible.",
          "Droit de retirer votre consentement à tout moment, sans que cela affecte la licéité du traitement antérieur.",
        ],
      },
      {
        type: "p",
        texte:
          "Pour exercer ces droits, contactez-nous par email à contact@ma-maison-dans-le-nord.fr ou par courrier à l'adresse : Julien Legrand – DPO, 17 rue du Plouick, 59133 Phalempin. Nous répondrons dans un délai d'un mois. Une copie d'un justificatif d'identité peut être demandée.",
      },
      {
        type: "p",
        texte:
          "En cas de réponse insatisfaisante, vous pouvez introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : www.cnil.fr.",
      },
    ],
  },
  {
    id: "cookies",
    titre: "8. Cookies",
    contenu: [
      {
        type: "p",
        texte:
          "Le site utilise des cookies pour améliorer votre expérience de navigation. Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de votre visite.",
      },
      {
        type: "p",
        texte: "Nous utilisons les types de cookies suivants :",
      },
      {
        type: "list",
        items: [
          "Cookies fonctionnels (nécessaires) : indispensables au fonctionnement du site. Ils ne nécessitent pas votre consentement.",
          "Cookies analytiques : pour mesurer l'audience du site et améliorer son contenu. Soumis à votre consentement.",
        ],
      },
      {
        type: "p",
        texte:
          "Vous pouvez à tout moment configurer votre navigateur pour refuser les cookies ou être alerté avant leur dépôt. Notez que le refus de certains cookies peut réduire les fonctionnalités du site.",
      },
    ],
  },
  {
    id: "securite",
    titre: "9. Sécurité des données",
    contenu: [
      {
        type: "p",
        texte:
          "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre toute perte, accès non autorisé, divulgation ou altération. Le site est hébergé sur des serveurs situés dans l'Union européenne, conformément au RGPD.",
      },
      {
        type: "p",
        texte:
          "En cas de violation de données susceptible d'engendrer un risque pour vos droits et libertés, nous nous engageons à vous en informer dans les meilleurs délais conformément à l'article 34 du RGPD.",
      },
    ],
  },
  {
    id: "modifications",
    titre: "10. Modifications de la politique",
    contenu: [
      {
        type: "p",
        texte:
          "Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment, notamment pour nous conformer à toute évolution légale, jurisprudentielle, éditoriale ou technique. La date de mise à jour sera indiquée en haut de la page. Nous vous encourageons à consulter régulièrement cette page.",
      },
    ],
  },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-navy py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Politique de confidentialité
          </h1>
          <p className="text-white/60 mt-3 text-sm">
            Dernière mise à jour : avril 2025 — Conformément au RGPD (UE) 2016/679
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Table of contents */}
          <nav className="bg-gray-50 rounded-xl p-6 mb-12" aria-label="Sommaire">
            <h2 className="font-display font-bold text-navy mb-4 text-sm uppercase tracking-widest">
              Sommaire
            </h2>
            <ol className="space-y-1.5">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-sm text-gray-600 hover:text-navy transition-colors"
                  >
                    {s.titre}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section) => (
              <article key={section.id} id={section.id}>
                <h2 className="font-display text-xl font-bold text-navy mb-4 pb-2 border-b border-gray-200">
                  {section.titre}
                </h2>
                <div className="space-y-4">
                  {section.contenu.map((block, i) => {
                    if (block.type === "p") {
                      return (
                        <p key={i} className="text-gray-600 leading-relaxed text-sm">
                          {block.texte}
                        </p>
                      );
                    }
                    if (block.type === "list" && block.items) {
                      return (
                        <ul key={i} className="space-y-2 ml-4">
                          {block.items.map((item, j) => (
                            <li
                              key={j}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2"
                                aria-hidden="true"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
