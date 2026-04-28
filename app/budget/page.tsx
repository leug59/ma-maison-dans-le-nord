import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Budget construction de maison dans le Nord — Prix et estimations 2024",
  description:
    "Quel budget prévoir pour construire une maison dans le Nord ? Prix moyen du terrain (80 €/m²), de la construction (1 349 €/m²), modes de chauffage et niveaux de finition.",
  alternates: { canonical: "/budget" },
};

const chauffageData = [
  { mode: "Électricité + bois", prix: "164 451 €", prixM2: "1 296 €/m²" },
  { mode: "Chauffage au gaz", prix: "167 996 €", prixM2: "1 344 €/m²" },
  { mode: "Tout électrique", prix: "172 997 €", prixM2: "1 380 €/m²" },
  { mode: "Énergies renouvelables", prix: "184 432 €", prixM2: "1 368 €/m²" },
];

const finitionsData = [
  {
    type: "Hors d'eau, hors d'air",
    prix: "149 010 €",
    prixM2: "1 204 €/m²",
    detail: "Structure, toiture et menuiseries extérieures posées. Intérieur à votre charge.",
  },
  {
    type: "Prête à décorer",
    prix: "170 129 €",
    prixM2: "1 353 €/m²",
    detail: "Cloisons, isolation, plomberie, électricité posés. Finitions (peinture, sols) à votre charge.",
  },
  {
    type: "Totalement terminée",
    prix: "189 789 €",
    prixM2: "1 418 €/m²",
    detail: "Maison clé en main : peinture, sols, cuisine et équipements inclus.",
  },
];

const facteurs = [
  {
    title: "Le terrain",
    description:
      "Un terrain en campagne et un terrain en pleine agglomération lilloise n'auront pas le même coût. La viabilisation (raccordement aux réseaux eau, électricité, assainissement) représente un poste potentiellement significatif si le terrain est isolé.",
  },
  {
    title: "L'architecture",
    description:
      "Une maison cubique coûte moins cher qu'une villa avec plusieurs volumes distincts. Les maisons avec sous-sol ou à étages sont plus onéreuses que les maisons plain-pied, car elles nécessitent plus de structure.",
  },
  {
    title: "La superficie",
    description:
      "Plus la maison sera grande, plus le coût des travaux sera important. Cependant, un constructeur professionnel optimise les espaces pour maximiser la valeur par m² et éviter les m² inutiles.",
  },
  {
    title: "Les matériaux",
    description:
      "Une maison en bois (ossature bois) coûtera un peu plus cher qu'une construction traditionnelle. Le type de couverture — toit plat ou tuiles — influence aussi le prix. La brique régionale reste compétitive dans le Nord.",
  },
  {
    title: "Le mode de chauffage",
    description:
      "Le choix du chauffage impacte directement le prix de construction. Les énergies renouvelables (pompe à chaleur, solaire) nécessitent un investissement initial plus élevé mais génèrent des économies significatives sur la durée.",
  },
  {
    title: "Les prestations intérieures",
    description:
      "Les revêtements de sol varient considérablement : carrelage à 15-20 €/m² en entrée de prix, 200 €/m² et plus pour du haut de gamme. Les cuisines équipées représentent souvent 10 000 à 30 000 € selon le standing choisi.",
  },
];

export default function BudgetPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 px-4" aria-label="En-tête">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Finances & construction
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Quel budget pour construire une maison dans le Nord ?
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
            Prix du terrain, coût de construction, modes de chauffage, niveaux
            de finition : toutes les données chiffrées pour estimer votre projet
            dans les Hauts-de-France.
          </p>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="bg-white py-16 px-4 border-b border-gray-100" aria-label="Estimations de référence">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Données du Ministère de la Transition écologique
            </p>
            <h2 className="font-display text-3xl font-bold text-navy">
              Les prix de référence dans le Nord-Pas-de-Calais
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Statistiques 2019 — source : Ministère de la Transition écologique
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-200">
              <p className="text-gray-500 text-sm mb-2">Terrain moyen (875 m²)</p>
              <p className="font-display text-3xl font-bold text-navy mb-1">
                69 885 €
              </p>
              <p className="text-gold font-semibold text-sm">80 €/m²</p>
            </div>
            <div className="bg-navy rounded-xl p-8 text-center">
              <p className="text-white/60 text-sm mb-2">Construction (120 m²)</p>
              <p className="font-display text-3xl font-bold text-white mb-1">
                171 275 €
              </p>
              <p className="text-gold font-semibold text-sm">1 349 €/m²</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 text-center border border-gray-200">
              <p className="text-gray-500 text-sm mb-2">Budget total estimé</p>
              <p className="font-display text-3xl font-bold text-navy mb-1">
                241 160 €
              </p>
              <p className="text-gold font-semibold text-sm">Terrain + construction</p>
            </div>
          </div>
          <p className="text-center text-gray-400 text-xs">
            * Hors frais de notaire, aménagements extérieurs et équipements optionnels. Ces chiffres sont des moyennes régionales.
          </p>
        </div>
      </section>

      {/* Impact du chauffage */}
      <section className="py-20 px-4" aria-labelledby="chauffage-title">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2
              id="chauffage-title"
              className="font-display text-3xl font-bold text-navy"
            >
              Impact du mode de chauffage sur le prix
            </h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto">
              Pour une maison de 120 m² — le choix de l&apos;énergie influence directement le coût de construction
            </p>
          </div>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            <table className="w-full text-sm" aria-label="Impact du mode de chauffage sur le prix de construction">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-6 py-4 font-semibold">Mode de chauffage</th>
                  <th className="text-left px-6 py-4 font-semibold">Prix moyen</th>
                  <th className="text-left px-6 py-4 font-semibold">Prix au m²</th>
                </tr>
              </thead>
              <tbody>
                {chauffageData.map((row, i) => (
                  <tr key={row.mode} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-medium text-navy">{row.mode}</td>
                    <td className="px-6 py-4 text-gray-700">{row.prix}</td>
                    <td className="px-6 py-4 text-gold font-semibold">{row.prixM2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-400 text-xs mt-3">
            Source : statistiques nationales 2019 — maison de 120 m²
          </p>
        </div>
      </section>

      {/* Niveaux de finition */}
      <section className="bg-gray-50 py-20 px-4" aria-labelledby="finitions-title">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2
              id="finitions-title"
              className="font-display text-3xl font-bold text-navy"
            >
              Les niveaux de finition et leurs prix
            </h2>
            <p className="text-gray-600 mt-3">
              Pour une maison de 120 m²
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {finitionsData.map((item, i) => (
              <article
                key={item.type}
                className={`rounded-xl p-8 ${i === 2 ? "bg-navy text-white" : "bg-white border border-gray-200"}`}
              >
                <div
                  className={`font-display text-2xl font-bold mb-1 ${i === 2 ? "text-white" : "text-navy"}`}
                >
                  {item.prix}
                </div>
                <div className="text-gold font-semibold text-sm mb-4">{item.prixM2}</div>
                <h3 className={`font-display font-bold text-lg mb-3 ${i === 2 ? "text-white" : "text-navy"}`}>
                  {item.type}
                </h3>
                <p className={`text-sm leading-relaxed ${i === 2 ? "text-white/70" : "text-gray-600"}`}>
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Facteurs qui font varier le coût */}
      <section className="py-20 px-4" aria-labelledby="facteurs-title">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2
              id="facteurs-title"
              className="font-display text-3xl sm:text-4xl font-bold text-navy"
            >
              Ce qui fait varier le coût de construction
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facteurs.map((f) => (
              <article
                key={f.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-1 h-8 bg-gold rounded-full mb-4" aria-hidden="true" />
                <h3 className="font-display font-bold text-navy mb-3">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Conseil global */}
      <section className="bg-navy py-20 px-4" aria-labelledby="conseil-title">
        <div className="max-w-3xl mx-auto">
          <h2
            id="conseil-title"
            className="font-display text-2xl font-bold text-white mb-6"
          >
            Notre conseil : pensez coût global, pas prix initial
          </h2>
          <p className="text-white/70 leading-relaxed mb-6">
            L&apos;un des premiers soucis que rencontrent les futurs
            propriétaires est la question financière. Il est tentant de choisir
            l&apos;option la moins chère à la construction. Pourtant, le bon
            calcul prend en compte les dépenses futures liées au chauffage et à
            la maintenance, et pas seulement le prix initial.
          </p>
          <p className="text-white/60 leading-relaxed mb-10">
            Une maison passive ou à ossature bois peut coûter 15 à 25% de plus
            à construire qu&apos;une maison traditionnelle, mais elle peut générer
            jusqu&apos;à 2 000 à 4 000 € d&apos;économies énergétiques par an. Sur
            20 ans, le calcul est souvent très favorable.
          </p>
          <Link
            href="/devis"
            className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors"
          >
            Obtenir une estimation personnalisée
          </Link>
        </div>
      </section>

      {/* Types liés */}
      <section className="py-16 px-4" aria-label="Types de maisons">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-500 mb-6">
            Le type de maison influe directement sur le budget — explorez les options :
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "Maison traditionnelle", href: "/constructeur-maison-traditionnelle-nord" },
              { label: "Maison contemporaine", href: "/constructeur-de-maison-contemporaine-nord" },
              { label: "Maison cubique", href: "/constructeur-maison-cubique-nord" },
              { label: "Ossature bois", href: "/constructeur-maison-bois-nord" },
              { label: "Plain-pied", href: "/constructeur-maison-plain-pied-nord" },
              { label: "Maison passive", href: "/constructeur-nord-maison-passive" },
            ].map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className="px-5 py-2.5 border-2 border-navy text-navy font-medium rounded-lg hover:bg-navy hover:text-white transition-colors text-sm"
              >
                {t.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
