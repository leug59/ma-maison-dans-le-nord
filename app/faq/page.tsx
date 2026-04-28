import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/app/_components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ — Questions fréquentes sur la construction de maison dans le Nord",
  description:
    "Toutes les réponses à vos questions sur la construction de maison individuelle dans les Hauts-de-France : budget, terrain, types de maisons, étapes, délais.",
  alternates: { canonical: "/faq" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Puis-je avoir une maison sur-mesure ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bien sûr et c'est le but ! Avec nos partenaires constructeurs de maisons dans le Nord, vous êtes certain d'avoir une maison unique et entièrement personnalisée selon vos souhaits.",
      },
    },
    {
      "@type": "Question",
      name: "Quel budget prévoir pour construire dans le Nord ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En 2024, le prix moyen d'un terrain dans le Nord est d'environ 80 € le m² et celui d'une maison neuve de 1 350 € le m². Ces chiffres varient selon la commune, le type de maison et les finitions choisies.",
      },
    },
  ],
};

const categories = [
  {
    titre: "Général & mise en relation",
    questions: [
      {
        question: "Puis-je avoir une maison 100% sur mesure ?",
        answer:
          "Bien sûr et c'est précisément notre raison d'être ! Avec nos constructeurs partenaires dans le Nord, vous êtes certain d'avoir une maison unique et entièrement personnalisée : plans, matériaux, finitions, équipements… tout est conçu selon vos souhaits et votre mode de vie.",
      },
      {
        question: "Quels sont les avantages d'un constructeur local dans le Nord ?",
        answer:
          "Un constructeur local connaît parfaitement les spécificités du territoire : réglementations urbanistiques, types de terrains, conditions météorologiques, architectures régionales. Il intervient rapidement sur votre chantier et bénéficie de relations solides avec les artisans et fournisseurs locaux.",
      },
      {
        question: "Pourquoi choisir un constructeur plutôt que l'auto-construction ?",
        answer:
          "Faire appel à un constructeur professionnel vous garantit le respect des délais (Contrat de Construction de Maison Individuelle – CCMI), une maîtrise budgétaire préalable, et une gestion complète du chantier. Vous bénéficiez également des garanties légales : garantie de parfait achèvement, garantie biennale et garantie décennale.",
      },
      {
        question: "Comment choisir le meilleur constructeur pour mon projet ?",
        answer:
          "Le choix dépend du type de construction souhaité, de votre budget et de votre localisation. C'est exactement pour cela que nous existons : notre équipe analyse votre projet et vous oriente vers le constructeur le plus adapté parmi notre réseau de partenaires sélectionnés.",
      },
      {
        question: "Qui contacter pour démarrer mon projet de construction ?",
        answer:
          "Il vous suffit de remplir notre formulaire de demande de devis en décrivant vos attentes. Notre équipe analyse votre projet et vous met en relation avec le constructeur adapté, qui devient votre interlocuteur unique tout au long du projet.",
      },
    ],
  },
  {
    titre: "Terrain & localisation",
    questions: [
      {
        question: "Comment trouver un terrain à bâtir dans le Nord ?",
        answer:
          "Plusieurs sources existent : les annonces internet (SeLoger, LeBonCoin, PAP), les agences immobilières locales, les mairies (Plan Local d'Urbanisme), les notaires, ou directement votre constructeur qui dispose souvent de terrains disponibles dans son secteur.",
      },
      {
        question: "Comment choisir un bon terrain pour construire ?",
        answer:
          "Évaluez attentivement la localisation, la superficie, le prix, la configuration (pente, orientation), et si le terrain est viabilisé (raccordé aux réseaux). Consultez le PLU de la commune, vérifiez les droits à construire avec un Certificat d'Urbanisme, et visitez le terrain à différents moments de la journée.",
      },
      {
        question: "Quel est le prix moyen d'un terrain dans le Nord ?",
        answer:
          "En 2024, le prix moyen d'un terrain constructible dans le Nord est d'environ 80 € le m², soit 32 000 € pour un terrain de 400 m². Ce prix varie significativement selon la commune : les secteurs proches de Lille sont naturellement plus chers.",
      },
    ],
  },
  {
    titre: "Budget & financement",
    questions: [
      {
        question: "Quel budget total prévoir pour construire sa maison ?",
        answer:
          "En 2024, comptez en moyenne 1 350 € le m² de construction, hors terrain. Pour une maison de 120 m², cela représente environ 160 000 € de construction, auquel s'ajoute le prix du terrain (40 000 – 80 000 €), les frais de notaire et les aménagements extérieurs. Budget total typique : 220 000 – 310 000 €.",
      },
      {
        question: "Qu'est-ce qui fait varier le coût de construction ?",
        answer:
          "Le coût dépend principalement du type de maison (traditionnelle, contemporaine, passive…), de la superficie, du prix du terrain, des matériaux choisis, des finitions et équipements intérieurs, et du mode de chauffage. Une maison passive coûte plus cher à construire mais génère de grandes économies d'énergie.",
      },
      {
        question: "Quelles aides financières existent pour construire ?",
        answer:
          "Plusieurs dispositifs peuvent vous aider : le Prêt à Taux Zéro (PTZ) sous conditions de ressources, l'éco-prêt à taux zéro pour les constructions performantes, la TVA à taux réduit dans certains cas, et les aides locales (région Hauts-de-France, communes). Votre constructeur peut vous orienter selon votre situation.",
      },
    ],
  },
  {
    titre: "Types de maisons",
    questions: [
      {
        question: "Qu'est-ce qu'une maison traditionnelle du Nord ?",
        answer:
          "La maison traditionnelle nordiste se distingue par sa façade en briques rouges, son toit à forte pente (souvent à deux pans), ses menuiseries foncées verticales et étroites, et parfois ses chiens-assis caractéristiques. Elle s'intègre parfaitement dans le paysage architectural de la région.",
      },
      {
        question: "Qu'est-ce qu'une maison contemporaine ?",
        answer:
          "La maison contemporaine marie lignes épurées et matériaux de dernière génération : enduit clair, bardage bois ou composite, grandes baies vitrées, toit plat ou à faible pente. Elle offre une modularité des espaces, une luminosité optimale et des performances énergétiques souvent supérieures.",
      },
      {
        question: "Quels sont les avantages d'une maison à ossature bois ?",
        answer:
          "L'ossature bois offre de nombreux avantages : matériau écologique et renouvelable, excellentes performances thermiques, chantier plus rapide (gain de 3 à 4 mois), légèreté structurelle adaptée aux terrains argileux du Nord, et jusqu'à 10% d'espace habitable supplémentaire par rapport à une construction traditionnelle.",
      },
      {
        question: "Comment fonctionne une maison passive ?",
        answer:
          "Une maison passive accumule les calories gratuites (soleil, chaleur des occupants) en hiver pour maintenir une température confortable sans ou avec très peu de chauffage. En été, une VMC double flux avec échangeur thermique assure une température agréable. Dans les Hauts-de-France, les économies d'énergie sont significatives.",
      },
    ],
  },
  {
    titre: "Construction & délais",
    questions: [
      {
        question: "Quelles démarches entreprendre avant de construire ?",
        answer:
          "Les étapes administratives sont : étude de projet avec le constructeur, recherche et obtention de financement, signature du Contrat de Construction de Maison Individuelle (CCMI), et dépôt du permis de construire en mairie. Le constructeur vous accompagne dans toutes ces démarches.",
      },
      {
        question: "Comment se déroule la construction ?",
        answer:
          "La construction se divise en trois grandes phases : le gros œuvre (fondations, murs porteurs, charpente, toiture), le second œuvre (isolation, menuiseries extérieures, plomberie, électricité, cloisons) et les finitions intérieures et extérieures. La durée totale varie de 8 à 12 mois.",
      },
      {
        question: "Combien de temps faut-il pour construire une maison ?",
        answer:
          "De votre première prise de contact à l'emménagement, comptez en moyenne 14 à 22 mois : 1 à 3 mois pour la conception et le devis, 2 à 4 mois pour l'obtention du permis de construire, et 8 à 12 mois de chantier. Ces délais varient selon la complexité du projet et la commune.",
      },
    ],
  },
];

export default function FAQPage() {
  const allItems = categories.flatMap((c) => c.questions);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-navy py-24 px-4" aria-label="En-tête">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Tout ce que vous devez savoir
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Questions fréquentes
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
            Retrouvez toutes les réponses à vos questions sur la construction de
            maison individuelle dans les Hauts-de-France.
          </p>
        </div>
      </section>

      {/* FAQ par catégories */}
      <section className="py-20 px-4" aria-label="Questions et réponses">
        <div className="max-w-3xl mx-auto">
          {categories.map((cat) => (
            <div key={cat.titre} className="mb-14">
              <h2 className="font-display text-2xl font-bold text-navy mb-6 pb-4 border-b border-gray-200">
                {cat.titre}
              </h2>
              <FAQAccordion items={cat.questions} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 px-4" aria-labelledby="faq-cta-title">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            id="faq-cta-title"
            className="font-display text-2xl font-bold text-navy mb-4"
          >
            Votre question n&apos;est pas ici ?
          </h2>
          <p className="text-gray-600 mb-8">
            Notre équipe se fait un plaisir de répondre à toutes vos questions
            sur la construction de maison dans le Nord.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
            >
              Nous contacter
            </Link>
            <Link
              href="/devis"
              className="px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
