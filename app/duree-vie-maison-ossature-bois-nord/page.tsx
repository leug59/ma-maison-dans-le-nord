import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Durée de vie d'une maison en ossature bois dans le Nord",
  description:
    "Une maison en ossature bois n'est pas éphémère. Découvrez les facteurs qui influencent sa longévité : essence du bois, construction, humidité, climat nordiste. Durée réelle : 100 ans et plus.",
  alternates: { canonical: "/duree-vie-maison-ossature-bois-nord" },
};

export default function DureeVieMaisonOssatureBoisPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 px-4" aria-label="En-tête">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Ossature bois
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Quelle est la durée de vie d&apos;une maison en ossature bois dans le Nord ?
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Vous craignez que le bois soit moins résistant qu&apos;une construction
            traditionnelle ? Non, une maison en ossature bois n&apos;est pas éphémère —
            et nous vous expliquons pourquoi.
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-14">

          {/* Intro */}
          <p className="text-gray-700 text-lg leading-relaxed">
            Vous vous demandez si vous faites bien de construire votre future demeure
            en bois, plutôt qu&apos;en parpaings ou en briques ? Vous craignez que la
            durée de vie d&apos;une maison en ossature bois dans le Nord soit moins
            importante qu&apos;un autre type de construction ? Le climat dans la région
            Hauts-de-France est-il compatible avec ce matériau naturel ? Votre maison
            sera-t-elle moins résistante ? Ma Maison dans le Nord tord le cou aux
            idées reçues : non, une maison en ossature bois n&apos;est pas éphémère.
          </p>

          {/* Section 1 */}
          <section aria-labelledby="facteurs">
            <h2 id="facteurs" className="font-display text-2xl font-bold text-navy mb-6">
              Quels sont les facteurs qui peuvent nuire à la durée de vie d&apos;une maison en ossature bois dans le Nord ?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Le bois étant un matériau naturel, il est fragile et sensible à certains
              éléments. Il faut donc les prendre en compte, afin d&apos;assurer une
              durabilité à votre maison en ossature bois.
            </p>

            <div className="space-y-10">

              <div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">
                  Le type de bois utilisé
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pour une bonne tenue dans le temps, le choix de l&apos;essence a une
                  importance capitale. Il est conseillé d&apos;avoir recours à différentes
                  essences de bois pour la conception de l&apos;ossature, de la charpente
                  et du bardage, le cas échéant.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Les bois les plus couramment utilisés sont :
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-gold font-bold shrink-0">—</span>
                    <span className="text-gray-700">
                      <strong className="text-navy">le sapin ou l&apos;épicéa</strong> : pour
                      l&apos;ossature bois ou la charpente, donc pour la partie structurelle,
                      non exposée aux intempéries. En général, on ne se sert pas de ces
                      essences pour le bardage, car elles craignent l&apos;humidité (et
                      demandent donc un entretien important) ;
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold font-bold shrink-0">—</span>
                    <span className="text-gray-700">
                      <strong className="text-navy">le douglas</strong> : on peut le
                      retrouver pour les ossatures bois, mais le plus souvent, il est
                      utilisé pour l&apos;extérieur (bardage, terrasse, etc.). En effet, il
                      est naturellement imputrescible et présente une grande résistance ;
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold font-bold shrink-0">—</span>
                    <span className="text-gray-700">
                      <strong className="text-navy">le mélèze</strong> : il est idéal
                      pour la structure de votre habitation, comme pour le bardage. Il est
                      très résistant au froid, donc conseillé pour la construction des
                      maisons à ossature bois dans le Nord.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">
                  La façon dont elle a été construite
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Comme pour toute construction, une maison en ossature bois se doit
                  d&apos;être construite dans les règles de l&apos;art. Si l&apos;on veut qu&apos;elle
                  dure dans le temps, il faut que les étapes suivantes soient bien
                  respectées et correctement réalisées :
                </p>
                <ul className="space-y-2">
                  {[
                    "la fabrication et l'assemblage des murs en atelier ;",
                    "les fondations ;",
                    "l'installation du plancher ;",
                    "l'élévation des murs ;",
                    "la pose de la charpente ;",
                    "la mise hors d'eau, hors d'air.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-gold font-bold shrink-0">—</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Ceci démontre l&apos;intérêt de faire le choix du bon professionnel pour
                  votre projet immobilier. Ma Maison dans le Nord vous aide à trouver
                  le spécialiste qu&apos;il vous faut pour votre construction, en fonction
                  de vos envies, mais aussi de vos contraintes.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">
                  L&apos;humidité
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Une humidité trop importante sera néfaste à votre maison ossature
                  bois, car elle favorise le pourrissement de ce matériau naturel.
                  Idéalement, le taux d&apos;hygrométrie doit être compris entre{" "}
                  <strong className="text-navy">45 et 55 %</strong>.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">
                  Quid du climat sur la durée de vie d&apos;une maison en ossature bois dans le Nord ?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Contrairement à ce que l&apos;on pourrait penser, le climat n&apos;a aucun
                  impact sur ce type de construction. Pour preuve : la plupart des pays
                  qui accueillent le plus grand nombre de bâtiments en bois sont des
                  pays nordiques (comme la Norvège, la Finlande ou le Canada), mais
                  aussi des pays de l&apos;Est, où il fait froid de nombreux mois de
                  l&apos;année : la Pologne, l&apos;Estonie, etc. Donc, soyez rassuré : le
                  climat de la région Nord-Pas-de-Calais convient tout à fait aux
                  maisons bois !
                </p>
              </div>

            </div>
          </section>

          {/* Section 2 */}
          <section aria-labelledby="lutter-vieillissement">
            <h2 id="lutter-vieillissement" className="font-display text-2xl font-bold text-navy mb-6">
              Comment lutter contre le vieillissement prématuré d&apos;une habitation faite de ce matériau naturel ?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Isoler correctement, mais aussi bien ventiler, en laissant l&apos;air
              circuler, permettra de lutter contre l&apos;humidité et donc le pourrissement
              du bois. La ventilation de l&apos;air est assurée par une ventilation
              mécanique. L&apos;étanchéité à l&apos;air est possible grâce à un frein vapeur.
              Et enfin, la perméabilité à la vapeur d&apos;eau s&apos;obtient par la mise en
              place d&apos;un pare-pluie. Le chauffage joue également un rôle dans la lutte
              contre l&apos;humidité dans une maison, choisissez-le bien !
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              On l&apos;a déjà vu : le choix de l&apos;essence est capital pour une construction
              à ossature bois et si vous choisissez de barder votre logement de ce
              matériau, c&apos;est ce dernier qu&apos;il faudra particulièrement bien
              sélectionner, mais aussi bien protéger.
            </p>
            <p className="text-gray-700 leading-relaxed">
              L&apos;entretien de votre construction dans le Nord consistera donc
              essentiellement en un traitement du bardage extérieur (si vous en avez
              un). En effet, le bois composant la structure est, quant à lui, traité
              au préalable contre les champignons, les insectes et les mousses. Le
              bardage bois doit être lasuré régulièrement (tous les 5 ans environ),
              afin de lutter contre les intempéries et les rayons UV, qui pourraient
              l&apos;altérer. Toutefois, il n&apos;y a aucun risque pour l&apos;ossature bois qui
              est traitée et ne demande pas d&apos;entretien particulier.
            </p>
          </section>

          {/* Section 3 */}
          <section aria-labelledby="duree-vie" className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h2 id="duree-vie" className="font-display text-2xl font-bold text-navy mb-6">
              Alors, quelle est la durée de vie d&apos;une maison en ossature bois dans le Nord ?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si vous optez pour une construction en bois, n&apos;ayez crainte, elle ne va
              pas s&apos;écrouler au bout de 10 ans ! Comme pour toute autre construction,
              quels que soient les matériaux utilisés, le principal est la façon de la
              bâtir. Si votre maison présente des malfaçons, qu&apos;elle soit en bois, en
              briques ou en parpaings, sa longévité sera mise à dure épreuve.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Donc, on peut dire que la durabilité d&apos;un logement n&apos;est pas liée au
              type de matériau employé, mais aux professionnels qui la bâtissent.
              Nous avons l&apos;exemple de certains pays qui construisent la plupart de
              leurs bâtiments en bois depuis des décennies et qui sont toujours debout !
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold text-navy">
              Avec le recul, on peut donc objectivement affirmer que de telles
              constructions ont une durée de vie d&apos;une centaine d&apos;années, voire plus.
            </p>
          </section>

        </div>
      </article>

      {/* CTA */}
      <section className="bg-navy py-16 px-4" aria-labelledby="cta-title">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-title" className="font-display text-2xl font-bold text-white mb-4">
            Vous êtes à la recherche d&apos;un constructeur ossature bois dans le Nord ?
          </h2>
          <p className="text-white/70 mb-8">
            Notre équipe a sélectionné les meilleurs professionnels du secteur
            et vous conseillera dans vos choix. Mise en relation gratuite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="/constructeur-maison-bois-nord"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white hover:bg-white/5 transition-colors"
            >
              Maisons ossature bois
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
