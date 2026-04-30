import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Blog — Conseils construction de maison dans le Nord",
  description:
    "Guides et conseils sur la construction de maison individuelle dans les Hauts-de-France : durée de vie ossature bois, choix du terrain, systèmes de chauffage, domotique.",
  alternates: { canonical: "/blog" },
  openGraph: buildOpenGraph("/blog", "website"),
};

const articles = [
  {
    slug: "erreurs-construction-maison-nord",
    titre: "5 erreurs à éviter quand on fait construire dans le Nord",
    extrait:
      "Mauvais constructeur, budget sous-estimé, terrain mal étudié… Ces 5 erreurs coûtent cher aux futurs propriétaires nordistes. Comment les éviter avant de signer votre CCMI.",
    categorie: "Construction",
    lien: "/erreurs-construction-maison-nord",
    image: "/images/maison-individuelle.jpg",
  },
  {
    slug: "delais-construction-maison-nord",
    titre: "Délais de construction : combien de temps pour votre maison dans le Nord ?",
    extrait:
      "De la signature du contrat à la remise des clés, comptez en moyenne 12 à 18 mois. Le détail étape par étape et les facteurs nordistes qui allongent les délais.",
    categorie: "Construction",
    lien: "/delais-construction-maison-nord",
    image: "/images/etapes-construction.jpg",
  },
  {
    slug: "duree-vie-maison-ossature-bois-nord",
    titre: "Quelle est la durée de vie d'une maison en ossature bois dans le Nord ?",
    extrait:
      "De nombreuses personnes s'interrogent sur la durabilité des maisons en ossature bois par rapport aux constructions traditionnelles. Réponse claire : une maison en ossature bois bien réalisée n'est pas éphémère.",
    categorie: "Ossature bois",
    lien: "/duree-vie-maison-ossature-bois-nord",
    image: "/images/maison-bois.jpg",
  },
  {
    slug: "choisir-terrain-a-vendre-nord",
    titre: "Construire dans le Nord : comment trouver et choisir le terrain idéal ?",
    extrait:
      "Localisation, prix, viabilisation, superficie, exposition… Avant de faire construire, il faut trouver le bon terrain constructible. Tous les critères à évaluer avant de signer.",
    categorie: "Terrain",
    lien: "/choisir-terrain-a-vendre-nord",
    image: "/images/hero-maison-nord.jpg",
  },
  {
    slug: "chauffage-construction-maison-neuve-nord",
    titre: "Quel système de chauffage choisir pour sa maison neuve dans le Nord ?",
    extrait:
      "Pompe à chaleur, gaz, bois, énergies renouvelables… Faire le bon choix dès le départ est crucial : revenir en arrière sera difficile et coûteux. Le guide complet pour décider.",
    categorie: "Énergie",
    lien: "/chauffage-construction-maison-neuve-nord",
    image: "/images/maison-passive.jpg",
  },
  {
    slug: "construction-maison-connectee",
    titre: "Maison connectée : quelle domotique prévoir pour la construction dans le Nord ?",
    extrait:
      "Volets motorisés, chauffage programmable, éclairage intelligent, sécurité… Intégrer la domotique dès la construction est bien plus simple et économique qu'en rénovation.",
    categorie: "Domotique",
    lien: "/construction-maison-connectee",
    image: "/images/maison-moderne.jpg",
  },
];

const categories = ["Tous", "Construction", "Ossature bois", "Terrain", "Énergie", "Domotique"];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 px-4" aria-label="En-tête">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Guides & conseils
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Le blog de la construction dans le Nord
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Guides pratiques et conseils d&apos;experts sur la construction de
            maison individuelle dans les Hauts-de-France.
          </p>
        </div>
      </section>

      {/* Filtres catégories */}
      <section
        className="border-b border-gray-200 bg-white"
        aria-label="Filtres par catégorie"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  cat === "Tous"
                    ? "bg-navy text-white"
                    : "text-gray-600 bg-gray-100"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 px-4" aria-label="Articles du blog">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                aria-labelledby={`article-title-${article.slug}`}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.titre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-navy/30" aria-hidden="true" />
                  <span className="absolute bottom-3 left-3 px-3 py-1 bg-gold text-white text-xs font-semibold rounded-full">
                    {article.categorie}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h2
                    id={`article-title-${article.slug}`}
                    className="font-display font-bold text-navy text-base mb-3 leading-snug group-hover:text-gold transition-colors flex-1"
                  >
                    <Link href={article.lien}>
                      {article.titre}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {article.extrait}
                  </p>
                  <Link
                    href={article.lien}
                    className="text-gold text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all mt-auto"
                    aria-label={`Lire l'article : ${article.titre}`}
                  >
                    Lire l&apos;article
                    <svg
                      className="w-4 h-4"
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

      {/* CTA */}
      <section className="bg-gray-50 py-16 px-4" aria-labelledby="cta-title">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            id="cta-title"
            className="font-display text-2xl font-bold text-navy mb-4"
          >
            Prêt à construire dans le Nord ?
          </h2>
          <p className="text-gray-600 mb-8">
            Obtenez une mise en relation gratuite avec nos constructeurs
            partenaires.
          </p>
          <Link
            href="/devis"
            className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
