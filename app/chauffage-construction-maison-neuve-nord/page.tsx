import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quel système de chauffage choisir pour la construction de sa maison dans le Nord ?",
  description:
    "Pompe à chaleur, poêle à bois, granulés, électrique, maison passive… Quel chauffage pour votre construction neuve dans le Nord ? Conseils et comparatif complet.",
  alternates: { canonical: "/chauffage-construction-maison-neuve-nord" },
};

export default function ChauffageMaisonNeuveNordPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 px-4" aria-label="En-tête">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Énergie
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Quel système de chauffage choisir pour la construction de sa maison dans le Nord ?
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Le souci est que si vous faites le mauvais choix dès le départ, il sera
            difficile de revenir en arrière. Autant bien y réfléchir dès votre
            projet immobilier lancé.
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-14">

          {/* Intro */}
          <p className="text-gray-700 text-lg leading-relaxed">
            Le chauffage : un véritable casse-tête ! Entre les poêles, les pompes à
            chaleur et le chauffage électrique, vous êtes complètement perdu ? C&apos;est
            bien normal ! Le souci est que si vous faites le mauvais choix dès le
            départ, il sera difficile de revenir en arrière. Alors, autant bien y
            réfléchir, dès votre projet immobilier lancé.
          </p>

          {/* Section PAC */}
          <section aria-labelledby="pac">
            <h2 id="pac" className="font-display text-2xl font-bold text-navy mb-4">
              La pompe à chaleur
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Ce système de chauffage puise des calories dans l&apos;air, la terre ou
              l&apos;eau, et les transforme ensuite en chaleur. La PAC extrait et diffuse
              les calories de plusieurs façons.
            </p>

            <div className="space-y-8">

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-display text-lg font-bold text-navy mb-3">
                  La PAC aérothermique (air/air ou air/eau)
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  C&apos;est la pompe à chaleur la plus courante. Il existe deux types de
                  PAC aérothermique :
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-gold font-bold shrink-0">—</span>
                    <span className="text-gray-700 text-sm">
                      <strong className="text-navy">la pompe à chaleur air/air</strong> :
                      la PAC récupère des calories dans l&apos;air et les transforme en
                      air chaud (chauffage) ou froid (climatisation), via des unités
                      murales. C&apos;est une installation qui peut se prévoir en construction
                      ou en rénovation. Ce système ne produit que du chauffage et pas
                      de l&apos;eau chaude.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold font-bold shrink-0">—</span>
                    <span className="text-gray-700 text-sm">
                      <strong className="text-navy">la pompe à chaleur air/eau</strong> :
                      elle peut s&apos;installer sur une installation de chauffage déjà
                      existante. En plus du chauffage, elle va permettre de fournir
                      de l&apos;eau chaude, grâce à un chauffe-eau thermodynamique électrique.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-display text-lg font-bold text-navy mb-3">
                  La PAC géothermique
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Qu&apos;est-ce que la géothermie ? C&apos;est le procédé selon lequel un
                  équipement va capter les calories présentes dans le sol, pour les
                  transformer en chauffage dans un bâtiment.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Pour votre terrain dans le Nord, il existe deux types de captage
                  dans le sol :
                </p>
                <ul className="space-y-3 mb-4">
                  <li className="flex gap-3">
                    <span className="text-gold font-bold shrink-0">—</span>
                    <span className="text-gray-700 text-sm">
                      <strong className="text-navy">le captage horizontal</strong> :
                      les tubes sont enfouis à environ 1 mètre de profondeur. Ce système
                      prend beaucoup de place, votre terrain doit donc s&apos;y prêter. Sa
                      surface nécessite d&apos;être au moins égale à 1,5 voire 2 fois la
                      surface habitable de votre habitation.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-gold font-bold shrink-0">—</span>
                    <span className="text-gray-700 text-sm">
                      <strong className="text-navy">le captage vertical</strong> :
                      il est recommandé pour les petits terrains et pour les rénovations,
                      afin d&apos;éviter de détériorer le jardin. Un forage est indispensable
                      pour enfouir les capteurs à une profondeur pouvant aller jusqu&apos;à
                      100 mètres. Ce système est très efficace lors de grand froid, car
                      les capteurs enfouis sont bien protégés.
                    </span>
                  </li>
                </ul>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Une fois les calories puisées dans le sol, elles sont acheminées
                  jusqu&apos;à la PAC, via un liquide caloporteur. Ce liquide subit une
                  compression puis une condensation pour produire de la chaleur, par
                  votre plancher chauffant ou votre chauffage central.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-display text-lg font-bold text-navy mb-3">
                  La PAC aquathermique (eau/eau)
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Le principe est le même que pour la PAC géothermique, mis à part que
                  les calories sont puisées dans les eaux souterraines. Une nappe
                  phréatique doit donc être accessible pour la mise en place du système
                  eau/eau. La pompe à chaleur aquathermique est très intéressante pour
                  la constance de ses performances, quelle que soit la saison. En
                  effet, l&apos;eau des nappes phréatiques a une température stable toute
                  l&apos;année, ce qui permet d&apos;assurer une régularité de fonctionnement
                  à la PAC eau/eau. Autre point positif : la chaleur peut produire à
                  la fois du chauffage (par les radiateurs ou un plancher chauffant)
                  et de l&apos;eau chaude.
                </p>
              </div>

              {/* Encart plancher chauffant */}
              <div className="border border-gold/30 rounded-xl p-6 bg-gold/5">
                <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
                  Bon à savoir
                </p>
                <p className="font-semibold text-navy mb-3">
                  Avantages et inconvénients d&apos;un chauffage au sol
                </p>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Les principaux atouts d&apos;un plancher chauffant sont les suivants :
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    "il permet d'aménager les pièces plus facilement, puisqu'il n'y a pas encombrement, contrairement à un chauffage central où des radiateurs sont positionnés sur les murs ;",
                    "le chauffage au sol apporte une sensation de chaleur agréable, constante et diffuse, puisque ce n'est pas le volume d'air qui est chauffé ;",
                    "il accepte tous les types de revêtements (carrelage, moquette, parquet, sol PVC ou vinyle, pierre naturelle), sous certaines conditions ;",
                    "s'il est couplé à une pompe à chaleur, il offre un rendement optimal et vous permet donc de faire des économies.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-gold font-bold shrink-0 text-xs mt-1">—</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Le principal point négatif du plancher chauffant est son coût
                  d&apos;installation. Par ailleurs, son mode de fonctionnement n&apos;autorise
                  pas un usage ponctuel. Étant donné qu&apos;il monte en chaleur petit à
                  petit, il doit être constamment allumé : vous ne pouvez pas
                  l&apos;enclencher pour chauffer rapidement une pièce. Enfin, une
                  intervention sur un chauffage au sol, même pour un problème
                  quelconque, est bien plus compliquée que sur un radiateur.
                </p>
              </div>

            </div>
          </section>

          {/* Section Poêle */}
          <section aria-labelledby="poele">
            <h2 id="poele" className="font-display text-2xl font-bold text-navy mb-4">
              Le poêle pour chauffer votre nouvelle construction
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Le plaisir de la flamme : c&apos;est ce que permettent les poêles, qu&apos;ils
              soient à bois ou à granulés. Mais il n&apos;est pas le seul avantage de ce
              système de chauffage pour la construction de sa maison dans le Nord.
            </p>

            <div className="space-y-8">

              <div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">
                  Le poêle à bois comme chauffage
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Très design, ou au contraire plus traditionnel, le poêle à bois est
                  un système de chauffe fonctionnant grâce à la combustion de bûches.
                  Il présente l&apos;intérêt d&apos;être un moyen de chauffage à la fois
                  économique (prix de l&apos;installation et du bois abordables) et
                  écologique (rejet d&apos;acheminement moindre par rapport au gaz,
                  par exemple).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Le principal désavantage est le stockage, qui peut vite devenir
                  problématique en raison du volume des stères de bois. Par ailleurs,
                  un poêle ne permet pas un chauffage harmonieux de la maison et les
                  écarts de température dans les différentes pièces peuvent parfois
                  être conséquents, s&apos;il n&apos;est pas couplé avec un autre mode de
                  chauffage.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">
                  Le chauffage à granulés
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Aussi appelé poêle à pellets, cet appareil produit du chauffage
                  grâce à la combustion de granulés de bois ou de pellets. C&apos;est un
                  système qui apporte du confort, puisqu&apos;il est réglable et s&apos;adapte
                  donc à la température souhaitée. Il peut être programmé, ce qui
                  permet d&apos;utiliser le combustible aux moments opportuns et évite les
                  productions de chaleur inutiles. Par ailleurs, il possède un très
                  bon rendement (peu d&apos;énergie consommée pour une forte quantité de
                  chaleur émise).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Côté inconvénients, on peut reprocher au poêle à granulés d&apos;être
                  un peu moins efficace qu&apos;un chauffage central, tout comme le poêle
                  à bois. Il peut aussi dégager une faible odeur, selon le modèle de
                  l&apos;appareil et le type de pellets utilisés.
                </p>
              </div>

            </div>
          </section>

          {/* Section électrique */}
          <section aria-labelledby="electrique">
            <h2 id="electrique" className="font-display text-2xl font-bold text-navy mb-4">
              Le chauffage électrique pour la construction de sa maison dans le Nord
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Dans le cas d&apos;une construction de maison neuve, le chauffage électrique
              peut être envisagé. En effet, il existe de très bons convecteurs
              électriques (radiateurs à inertie ou panneaux rayonnants, par exemple),
              qui, couplés à une bonne isolation de votre logement, permettent de ne
              pas trop consommer d&apos;électricité. Attention cependant à faire installer
              des équipements recommandés par la RE2020. Par ailleurs, il faut prévoir
              un chauffe-eau thermodynamique ou solaire, pour la production d&apos;eau
              chaude, en supplément.
            </p>
          </section>

          {/* Section passive */}
          <section aria-labelledby="passive">
            <h2 id="passive" className="font-display text-2xl font-bold text-navy mb-4">
              Aucun système de chauffage (ou presque !)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Oui, c&apos;est possible, grâce aux{" "}
              <Link href="/constructeur-nord-maison-passive" className="text-gold hover:underline">
                maisons passives
              </Link>
              . Leur principe ? Utiliser toutes les sources énergétiques à leur
              disposition (rayons solaires, chaleur humaine, chaleur provenant des
              produits électriques, ou autres) et les conserver à l&apos;intérieur du
              domicile. Ceci est réalisable grâce à :
            </p>
            <ul className="space-y-3 mb-4">
              {[
                "un pouvoir isolant maximal ;",
                "une étanchéité à l'air du bâti optimale ;",
                "une architecture parfaitement imaginée, avec notamment une bonne orientation de la maison et de très grandes ouvertures exposées plein sud.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-gold font-bold shrink-0">—</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Donc, même pour une construction de maison dans le Nord, un bâtiment
              passif peut être envisagé et s&apos;avérer intéressant pour votre chauffage.
            </p>
          </section>

          {/* Conclusion */}
          <section className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              Si vous hésitez toujours pour votre moyen de chauffage, n&apos;ayez crainte !
              En faisant appel à un de nos partenaires constructeurs de maisons
              individuelles dans le Nord, vous serez conseillé au mieux. Confiez-nous
              votre projet et nous vous mettrons en relation avec les meilleurs
              professionnels de la région Hauts-de-France.
            </p>
          </section>

        </div>
      </article>

      {/* CTA */}
      <section className="bg-navy py-16 px-4" aria-labelledby="cta-title">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-title" className="font-display text-2xl font-bold text-white mb-4">
            Vous construisez dans le Nord et voulez optimiser votre chauffage ?
          </h2>
          <p className="text-white/70 mb-8">
            Prenez contact avec nous, nous vous mettrons rapidement en relation
            avec le constructeur qu&apos;il vous faut !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="/blog"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white hover:bg-white/5 transition-colors"
            >
              Retour au blog
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
