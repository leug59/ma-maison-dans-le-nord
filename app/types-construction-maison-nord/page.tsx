import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Types de maisons individuelles dans le Nord — Tous les styles",
  description:
    "Découvrez les 7 types de maisons individuelles proposées par nos constructeurs partenaires dans les Hauts-de-France : traditionnelle, contemporaine, cubique, ossature bois, plain-pied, passive, individuelle.",
  alternates: { canonical: "/types-construction-maison-nord" },
  openGraph: buildOpenGraph("/types-construction-maison-nord", "website"),
};

const maisonTypes = [
  {
    label: "Maison traditionnelle",
    href: "/constructeur-maison-traditionnelle-nord",
    image: "/images/maison-traditionnelle.jpg",
    imageAlt: "Maison traditionnelle en briques rouges dans le Nord",
    description:
      "Le charme authentique du Nord avec sa façade en briques rouges caractéristiques, son toit à forte pente et ses menuiseries foncées. Un style intemporel qui s'intègre parfaitement dans le paysage des Hauts-de-France.",
    points: ["Briques rouges typiques du Nord", "Toit deux pans à forte pente", "Charme et authenticité régionale"],
    prix: "À partir de 1 100 €/m²",
  },
  {
    label: "Maison contemporaine",
    href: "/constructeur-de-maison-contemporaine-nord",
    image: "/images/maison-contemporaine.jpg",
    imageAlt: "Maison contemporaine moderne dans le Nord",
    description:
      "Le mariage des lignes design et des matériaux de dernière génération. Grandes baies vitrées, enduit clair, toit plat ou à faible pente… La maison contemporaine repousse les limites de l'architecture moderne.",
    points: ["Grandes baies vitrées", "Matériaux innovants", "Performances énergétiques"],
    prix: "À partir de 1 400 €/m²",
  },
  {
    label: "Maison cubique",
    href: "/constructeur-maison-cubique-nord",
    image: "/images/maison-cubique.jpg",
    imageAlt: "Maison cubique à toit plat dans le Nord",
    description:
      "L'architecture cubique joue sur la juxtaposition de volumes géométriques pour créer des espaces habitables originaux et modulables. Toits-terrasses, revêtements contrastés, lignes ultra-épurées.",
    points: ["Volumes géométriques innovants", "Toits-terrasses accessibles", "Intérieur modulable"],
    prix: "À partir de 1 500 €/m²",
  },
  {
    label: "Ossature bois",
    href: "/constructeur-maison-bois-nord",
    image: "/images/maison-bois.jpg",
    imageAlt: "Maison à ossature bois dans le Nord",
    description:
      "La construction à ossature bois séduit par son côté écologique, sa rapidité de construction et ses performances thermiques exceptionnelles. Un choix durable pour les Hauts-de-France.",
    points: ["Matériau écologique et renouvelable", "Chantier 3 à 4 mois plus rapide", "10% d'espace habitable supplémentaire"],
    prix: "À partir de 1 300 €/m²",
  },
  {
    label: "Plain-pied",
    href: "/constructeur-maison-plain-pied-nord",
    image: "/images/maison-plain-pied.jpg",
    imageAlt: "Maison de plain-pied dans le Nord",
    description:
      "La maison de plain-pied offre une vie pratique et accessible, sans escaliers. Idéale pour les familles avec enfants en bas âge, les seniors et toute personne souhaitant faciliter ses déplacements quotidiens.",
    points: ["Accessibilité totale", "Vie de plain-pied sans escaliers", "Entretien facilité"],
    prix: "À partir de 1 200 €/m²",
  },
  {
    label: "Maison passive",
    href: "/constructeur-nord-maison-passive",
    image: "/images/maison-passive.jpg",
    imageAlt: "Maison passive à basse consommation d'énergie",
    description:
      "La maison passive utilise les énergies naturelles et gratuites pour maintenir une température confortable toute l'année avec un minimum de chauffage. Un investissement qui se rentabilise rapidement.",
    points: ["Chauffage quasi nul en hiver", "Confort thermique été comme hiver", "Économies d'énergie massives"],
    prix: "À partir de 1 600 €/m²",
  },
  {
    label: "Maison individuelle",
    href: "/constructeur-maison-individuelle-nord",
    image: "/images/maison-individuelle.jpg",
    imageAlt: "Maison individuelle sur mesure dans le Nord",
    description:
      "La maison individuelle, c'est la liberté de construire votre projet selon vos propres règles, sans contrainte de lotissement. Un projet unique qui vous ressemble, de l'architecture aux finitions.",
    points: ["Liberté architecturale totale", "Hors lotissement", "Personnalisation complète"],
    prix: "Variable selon le projet",
  },
];

export default function MaisonsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 px-4" aria-label="En-tête">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Tous les styles
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Types de maisons individuelles dans le Nord
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
            Découvrez les 7 styles de construction proposés par nos partenaires
            dans les Hauts-de-France et trouvez celui qui correspond à votre
            projet.
          </p>
        </div>
      </section>

      {/* Grille des types */}
      <section className="py-20 px-4" aria-label="Types de maisons">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {maisonTypes.map((type) => (
              <article
                key={type.href}
                className="group border border-gray-200 rounded-2xl overflow-hidden hover:border-gold hover:shadow-lg transition-all bg-white"
                aria-labelledby={`type-title-${type.href.split("/").pop()}`}
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={type.image}
                    alt={type.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <h2
                    id={`type-title-${type.href.split("/").pop()}`}
                    className="font-display text-2xl font-bold text-navy group-hover:text-gold transition-colors"
                  >
                    {type.label}
                  </h2>
                  <span className="shrink-0 text-sm font-semibold text-gold bg-gold/10 px-3 py-1.5 rounded-full">
                    {type.prix}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {type.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {type.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"
                        aria-hidden="true"
                      />
                      {p}
                    </li>
                  ))}
                </ul>

                <Link
                  href={type.href}
                  className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors"
                  aria-label={`En savoir plus sur ${type.label}`}
                >
                  En savoir plus
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Aide au choix */}
      <section className="bg-gray-50 py-16 px-4" aria-labelledby="aide-title">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="aide-title"
            className="font-display text-2xl font-bold text-navy mb-4"
          >
            Vous ne savez pas encore quel type choisir ?
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Notre équipe vous aide à définir le type de maison qui correspond le
            mieux à vos besoins, votre mode de vie et votre budget. Décrivez
            simplement votre projet.
          </p>
          <Link
            href="/devis"
            className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors"
          >
            Obtenir des conseils gratuits
          </Link>
        </div>
      </section>
    </>
  );
}
