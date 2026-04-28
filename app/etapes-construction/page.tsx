import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Les étapes de construction d'une maison dans le Nord",
  description:
    "De la définition du projet à la remise des clés, découvrez les 4 grandes phases pour construire votre maison individuelle dans les Hauts-de-France : budget, démarches, chantier, réception.",
  alternates: { canonical: "/etapes-construction" },
};

const phases = [
  {
    num: "01",
    titre: "Définition du projet et du budget",
    couleur: "bg-gold",
    etapes: [
      {
        titre: "Choix du type de construction",
        description:
          "Déterminez vos préférences architecturales : maison contemporaine, traditionnelle, cubique, plain-pied, passive ou ossature bois. Chaque style a ses caractéristiques, ses avantages et son impact sur le budget.",
      },
      {
        titre: "Recherche du terrain",
        description:
          "Évaluez la localisation, l'accessibilité, la superficie, l'orientation solaire, la viabilisation (raccordements aux réseaux) et les règles d'urbanisme de la commune (PLU). Un terrain non viabilisé peut entraîner un surcoût de plusieurs milliers d'euros.",
      },
      {
        titre: "Détermination de la capacité d'emprunt",
        description:
          "Consultez votre banque ou un courtier pour calculer votre capacité de financement. C'est la base sur laquelle vous allez dimensionner votre projet. Renseignez-vous aussi sur le Prêt à Taux Zéro (PTZ) et les aides régionales.",
      },
    ],
  },
  {
    num: "02",
    titre: "Démarches administratives",
    couleur: "bg-navy",
    etapes: [
      {
        titre: "Choix du constructeur",
        description:
          "Sélectionnez un professionnel qui sera votre interlocuteur unique et coordinateur de l'ensemble du projet. C'est notre rôle chez Ma Maison dans le Nord : vous mettre en relation avec le constructeur le plus adapté à votre projet et à votre secteur.",
      },
      {
        titre: "Étude de projet et plans",
        description:
          "Le constructeur élabore les plans de votre maison avec vous, ce qui permet le chiffrage complet de la construction. Cette phase comprend plusieurs allers-retours pour affiner chaque détail.",
      },
      {
        titre: "Signature du contrat CCMI",
        description:
          "Le Contrat de Construction de Maison Individuelle (CCMI) est le seul contrat légalement protecteur pour vous. Il garantit le respect des délais, du budget et des normes de construction. Ne construisez jamais sans CCMI.",
      },
      {
        titre: "Dépôt du permis de construire",
        description:
          "Le constructeur prépare et dépose le dossier complet en mairie après finalisation des plans. L'instruction du permis prend généralement 2 à 3 mois selon la commune.",
      },
    ],
  },
  {
    num: "03",
    titre: "Construction",
    couleur: "bg-gold",
    etapes: [
      {
        titre: "Gros œuvre",
        description:
          "C'est la phase la plus spectaculaire : piquetage et implantation, terrassement, fondations, assainissement, soubassement, dallage, élévation des murs, charpente, mise hors d'eau (toiture) et hors d'air (menuiseries extérieures), puis façade. Durée : 4 à 6 mois.",
      },
      {
        titre: "Second œuvre",
        description:
          "L'intérieur prend forme : cloisons, isolation thermique et acoustique, installation électrique, plomberie, chauffage, ventilation mécanique, puis les finitions intérieures (sols, peinture, faïences). Durée : 3 à 5 mois.",
      },
    ],
  },
  {
    num: "04",
    titre: "Réception de votre maison",
    couleur: "bg-navy",
    etapes: [
      {
        titre: "Visite de conformité et réception",
        description:
          "Une visite finale est organisée avec le constructeur pour vérifier la conformité de la construction avec les plans et le contrat. Vous pouvez consigner vos réserves (imperfections à corriger) dans le procès-verbal de réception. Cette date marque le point de départ de toutes vos garanties.",
      },
      {
        titre: "Remise des clés et garanties",
        description:
          "Les clés vous sont remises. La garantie de parfait achèvement (1 an) oblige le constructeur à corriger tous les défauts signalés. La garantie décennale couvre pendant 10 ans tout vice affectant la solidité de l'ouvrage.",
      },
    ],
  },
];

const garanties = [
  { nom: "Garantie de parfait achèvement", duree: "1 an", description: "Couvre tous les désordres signalés lors de la réception ou dans l'année qui suit." },
  { nom: "Garantie de bon fonctionnement", duree: "2 ans", description: "Couvre les équipements dissociables du gros œuvre (volets, robinetterie, chaudière…)." },
  { nom: "Garantie décennale", duree: "10 ans", description: "Couvre les vices cachés affectant la solidité de l'ouvrage ou le rendant impropre à sa destination." },
];

export default function EtapesConstructionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 px-4" aria-label="En-tête">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            De A à Z
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Les étapes de construction de votre maison dans le Nord
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
            De la définition du projet à la remise des clés — les 4 grandes
            phases pour construire votre maison individuelle dans les
            Hauts-de-France.
          </p>
        </div>
      </section>

      {/* Image banner */}
      <section className="px-4 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/etapes-construction.jpg"
              alt="Chantier de construction de maison individuelle dans le Nord"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-16 px-4" aria-label="Phases de construction">
        <div className="max-w-4xl mx-auto space-y-16">
          {phases.map((phase) => (
            <article key={phase.num} aria-labelledby={`phase-title-${phase.num}`}>
              <div className="flex items-center gap-5 mb-8">
                <div
                  className={`w-14 h-14 ${phase.couleur} rounded-full flex items-center justify-center shrink-0`}
                >
                  <span className="font-display font-bold text-white text-lg">
                    {phase.num}
                  </span>
                </div>
                <h2
                  id={`phase-title-${phase.num}`}
                  className="font-display text-2xl font-bold text-navy"
                >
                  {phase.titre}
                </h2>
              </div>

              <div className="ml-8 pl-8 border-l-2 border-gray-200 space-y-8">
                {phase.etapes.map((etape) => (
                  <div key={etape.titre}>
                    <h3 className="font-semibold text-navy mb-2">{etape.titre}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {etape.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Garanties */}
      <section className="bg-gray-50 py-20 px-4" aria-labelledby="garanties-title">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2
              id="garanties-title"
              className="font-display text-2xl font-bold text-navy"
            >
              Les garanties légales après réception
            </h2>
            <p className="text-gray-600 mt-3">
              Après la remise des clés, vous bénéficiez de trois garanties obligatoires.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {garanties.map((g) => (
              <div key={g.nom} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="text-3xl font-display font-bold text-gold mb-2">
                  {g.duree}
                </div>
                <h3 className="font-semibold text-navy mb-2">{g.nom}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{g.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Durée globale */}
      <section className="py-16 px-4" aria-label="Durée globale du projet">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-navy mb-4">
            Durée totale estimée : 14 à 22 mois
          </h2>
          <p className="text-gray-600 leading-relaxed">
            De votre première prise de contact à l&apos;emménagement, comptez
            en général{" "}
            <strong className="text-navy">14 à 22 mois</strong> : 2 à 5 mois
            pour les démarches administratives (dont 2 à 3 mois pour
            l&apos;obtention du permis de construire) et 7 à 11 mois de
            chantier (gros œuvre + second œuvre). Ce délai varie selon la
            complexité du projet, la commune et la disponibilité du
            constructeur.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 px-4" aria-labelledby="cta-title">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="cta-title"
            className="font-display text-3xl font-bold text-white mb-4"
          >
            Commençons votre projet ensemble
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Décrivez votre projet et recevez une mise en relation gratuite avec
            nos constructeurs partenaires dans les Hauts-de-France.
          </p>
          <Link
            href="/devis"
            className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors"
          >
            Démarrer mon projet
          </Link>
        </div>
      </section>
    </>
  );
}
