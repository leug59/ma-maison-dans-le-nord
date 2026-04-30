import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Délais de construction : combien de temps pour votre maison dans le Nord ?",
  description:
    "De la recherche du terrain à la remise des clés, comptez 12 à 18 mois pour faire construire dans le Nord. Le détail de chaque étape et les facteurs qui allongent les délais.",
  alternates: { canonical: "/delais-construction-maison-nord" },
  openGraph: buildOpenGraph("/delais-construction-maison-nord", "article"),
};

const etapes = [
  {
    numero: "1",
    duree: "1 – 3 mois",
    titre: "Recherche du terrain et définition du projet",
    description:
      "Avant toute démarche administrative, il faut trouver le terrain constructible et finaliser votre projet avec le constructeur : plan de masse, superficie, style architectural, budget. Cette phase inclut également l'étude de sol (G2), obligatoire depuis 2020 pour les terrains en zone argileuse. Dans le bassin minier (Lens, Douai, Valenciennes), une étude spécifique sur les risques miniers peut allonger ce délai de 2 à 4 semaines.",
  },
  {
    numero: "2",
    duree: "2 – 3 mois",
    titre: "Instruction du permis de construire",
    description:
      "Une fois le dossier de demande de permis déposé en mairie, le délai légal d'instruction est de 2 mois pour une maison individuelle (3 mois en secteur ABF — Architectes des Bâtiments de France — fréquents dans les zones patrimoniales du Nord comme les cités minières UNESCO). Le recours des tiers court pendant 2 mois après l'affichage sur le terrain. En pratique, comptez 3 à 4 mois entre le dépôt et le début effectif du chantier.",
  },
  {
    numero: "3",
    duree: "1 – 2 mois",
    titre: "Préparation et terrassement",
    description:
      "Ouverture de chantier, installation de la clôture de chantier, terrassement, fouilles, décapage et évacuation des terres. Dans le Nord, les hivers pluvieux et les sols argileux peuvent ralentir cette phase : le gel et les fortes pluies de novembre à février sont des facteurs fréquents de décalage. Idéalement, planifiez l'ouverture du chantier au printemps ou en début d'été.",
  },
  {
    numero: "4",
    duree: "2 – 3 mois",
    titre: "Gros œuvre : fondations, murs et dalles",
    description:
      "C'est la phase la plus structurante. Coulage des fondations et des longrines, élévation des murs (parpaings, briques, béton banché selon le type de construction), pose des planchers et de la dalle. Pour une maison à ossature bois, cette phase est souvent plus rapide (4 à 6 semaines pour la structure) mais nécessite un délai de fabrication en usine en amont.",
  },
  {
    numero: "5",
    duree: "1 – 2 mois",
    titre: "Hors d'eau, hors d'air",
    description:
      "Pose de la charpente, de la couverture (tuiles, bac acier ou toit plat selon le style), puis des menuiseries extérieures — fenêtres, portes et volets. Une fois cette étape franchie, la maison est protégée des intempéries et les corps de métier du second œuvre peuvent intervenir. Dans le Nord, la pose de la toiture est souvent planifiée hors des mois de novembre et décembre pour éviter les arrêts de chantier liés au gel.",
  },
  {
    numero: "6",
    duree: "2 – 4 mois",
    titre: "Second œuvre : cloisons, plomberie, électricité",
    description:
      "Phase la plus longue en nombre d'intervenants : plombiers, électriciens, plaquistes, chauffagistes, menuisiers intérieurs… se succèdent dans un ordre précis. L'installation d'une pompe à chaleur air/eau — très répandue dans le Nord pour répondre aux exigences RE2020 — nécessite des passages de gaines dimensionnés dès la conception. Les travaux modificatifs acquéreurs (TMA) rallongent souvent cette phase de 2 à 6 semaines supplémentaires.",
  },
  {
    numero: "7",
    duree: "1 – 2 mois",
    titre: "Finitions et réception",
    description:
      "Pose des revêtements de sol (carrelage, parquet), peintures, faïences, cuisine, sanitaires, équipements domotiques. Puis vient la pré-réception avec le constructeur — occasion de dresser la liste des réserves — suivie de la réception officielle, moment clé du CCMI : vous prenez possession de la maison et le délai de garantie décennale commence.",
  },
];

export default function DelaisConstructionNordPage() {
  return (
    <>
      <section className="bg-navy py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">Blog — Construction dans le Nord</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">Délais de construction : combien de temps pour votre maison dans le Nord ?</h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">De la signature du CCMI à la remise des clés, comptez en moyenne 12 à 18 mois. Le détail étape par étape et les facteurs propres au Nord qui peuvent allonger les délais.</p>
          <Link href="/devis" className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors">Demander un devis gratuit</Link>
        </div>
      </section>

      <section className="px-4 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/etapes-construction.jpg" alt="Étapes de construction d'une maison dans le Nord" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" priority />
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-8">Faire construire une maison neuve dans le Nord prend du temps — et c&apos;est normal. La durée totale dépend du type de construction, de la saison, du secteur géographique et de la complexité du projet. Mais pour la grande majorité des maisons individuelles construites en CCMI (Contrat de Construction de Maison Individuelle) dans les Hauts-de-France, le délai réaliste est de <strong>12 à 18 mois</strong> entre la signature du contrat et la remise des clés.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { label: "Délai minimum constaté", value: "12 mois", sub: "maison simple, terrain prêt, été" },
              { label: "Délai moyen en pratique", value: "15 mois", sub: "CCMI standard dans le Nord" },
              { label: "Délai avec aléas", value: "18-24 mois", sub: "secteur ABF, TMA, hiver difficile" },
            ].map((stat) => (
              <div key={stat.label} className="bg-navy rounded-xl p-6 text-center">
                <p className="text-white/60 text-sm mb-2">{stat.label}</p>
                <p className="font-display text-3xl font-bold text-gold mb-1">{stat.value}</p>
                <p className="text-white/50 text-xs">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-10">Les 7 étapes de votre construction, de A à Z</h2>
          <div className="space-y-0">
            {etapes.map((etape, index) => (
              <div key={etape.numero} className="flex gap-0">
                {/* Timeline */}
                <div className="flex flex-col items-center mr-6">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shrink-0 z-10">
                    <span className="text-white font-bold text-sm">{etape.numero}</span>
                  </div>
                  {index < etapes.length - 1 && (
                    <div className="w-0.5 bg-gold/30 flex-1 mt-1" style={{ minHeight: "2rem" }} />
                  )}
                </div>
                {/* Content */}
                <div className="pb-10 flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-display text-xl font-bold text-navy">{etape.titre}</h3>
                    <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-semibold rounded-full">{etape.duree}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{etape.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-navy mb-6">Ce qui allonge les délais dans le Nord spécifiquement</h2>
          <div className="space-y-6">
            {[
              {
                titre: "Les hivers nordistes",
                texte: "Le climat du Nord-Pas-de-Calais est l'un des plus pluvieux de France. Les chantiers ouverts entre novembre et février font face à des arrêts fréquents liés au gel (coulage béton impossible sous 0°C) et aux pluies prolongées. Planifiez si possible votre ouverture de chantier au printemps pour avancer rapidement sur le gros œuvre avant l'automne.",
              },
              {
                titre: "Les secteurs ABF et cités minières",
                texte: "Dans les communes classées ou situées en périmètre ZPPAUP (Zones de Protection du Patrimoine Architectural Urbain et Paysager) — nombreuses autour du bassin minier UNESCO — l'avis de l'Architecte des Bâtiments de France est obligatoire. Cela allonge l'instruction du permis de construire d'un mois supplémentaire et peut imposer des contraintes esthétiques (couleur de briques, pente de toiture, menuiseries).",
              },
              {
                titre: "Les sols argileux et anciens terrains miniers",
                texte: "Les études de sol révèlent parfois des contraintes inattendues : présence d'argile expansive, remblais anciens, ou proximité de galeries minières. Ces découvertes peuvent nécessiter des fondations spéciales (micropieux, semelles filantes renforcées) et rallonger le chantier de 3 à 8 semaines.",
              },
              {
                titre: "Les délais de raccordement aux réseaux",
                texte: "Dans certaines communes périurbaines du Nord, les délais d'intervention d'ENEDIS pour le raccordement électrique ou des syndicats d'eau peuvent atteindre 8 à 12 semaines. Anticipez ces démarches dès la signature du contrat — votre constructeur peut vous y aider.",
              },
            ].map((item) => (
              <div key={item.titre} className="border-l-4 border-gold pl-8">
                <h3 className="font-display text-lg font-bold text-navy mb-2">{item.titre}</h3>
                <p className="text-gray-700 leading-relaxed">{item.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Prêt à lancer votre projet ?</h2>
          <p className="text-white/70 text-lg mb-8">Nos constructeurs partenaires dans le Nord vous accompagnent de la recherche du terrain jusqu&apos;à la remise des clés — avec un calendrier précis et des engagements contractuels.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors">Demander un devis gratuit</Link>
            <Link href="/etapes-construction" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white hover:bg-white/5 transition-colors">Voir les étapes en détail</Link>
          </div>
        </div>
      </section>

      {/* Lire aussi */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-xl font-bold text-navy mb-6">Lire aussi</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog" className="px-5 py-2.5 bg-white border-2 border-gray-200 text-navy font-medium rounded-lg hover:border-gold hover:text-gold transition-colors text-sm">← Tous les articles</Link>
            <Link href="/erreurs-construction-maison-nord" className="px-5 py-2.5 bg-white border-2 border-gray-200 text-navy font-medium rounded-lg hover:border-gold hover:text-gold transition-colors text-sm">5 erreurs à éviter</Link>
            <Link href="/budget" className="px-5 py-2.5 bg-white border-2 border-gray-200 text-navy font-medium rounded-lg hover:border-gold hover:text-gold transition-colors text-sm">Budget construction</Link>
            <Link href="/etapes-construction" className="px-5 py-2.5 bg-white border-2 border-gray-200 text-navy font-medium rounded-lg hover:border-gold hover:text-gold transition-colors text-sm">Étapes de construction</Link>
          </div>
        </div>
      </section>
    </>
  );
}
