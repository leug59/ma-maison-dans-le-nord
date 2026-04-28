import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Maison connectée : quelle domotique prévoir pour sa construction dans le Nord ?",
  description:
    "Volets motorisés, gestion de l'énergie, éclairage intelligent, sécurité, contrôle d'accès… Intégrer la domotique dès la construction est bien plus simple et économique qu'en rénovation.",
  alternates: { canonical: "/construction-maison-connectee" },
};

export default function MaisonConnecteePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 px-4" aria-label="En-tête">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Domotique
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Maison connectée : quelle domotique prévoir pour la construction de sa maison dans le Nord ?
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Avoir une maison intelligente, c&apos;est s&apos;offrir du confort, de la sécurité
            et de l&apos;autonomie supplémentaire. Voici les possibilités qui s&apos;offrent
            à vous en matière de maison connectée.
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-14">

          {/* Intro */}
          <p className="text-gray-700 text-lg leading-relaxed">
            Vous avez en tête un projet de construction de maison dans le Nord,
            mais avez-vous pensé à intégrer la domotique ? Avoir une maison
            intelligente, signifie s&apos;offrir du confort, de la sécurité et de
            l&apos;autonomie supplémentaire. Grâce aux nouvelles technologies, pilotez
            à distance vos chauffages, climatisation, éclairages, volets, portes,
            portails, appareils électriques et bien d&apos;autres équipements encore !
          </p>

          {/* Section 1 */}
          <section aria-labelledby="volets">
            <h2 id="volets" className="font-display text-2xl font-bold text-navy mb-4">
              1 – Le contrôle des volets roulants motorisés
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Quel plaisir d&apos;ouvrir ou fermer ses volets roulants en appuyant sur un
              simple bouton ! À moins que vous ne préfériez les commander de votre
              smartphone, de votre tablette, de votre ordinateur ou grâce à votre
              voix ! Une maison intelligente vous offre un gain de temps et de confort.
              Petit plus proposé par les nouvelles technologies : la programmation des
              heures d&apos;ouverture et de fermeture de vos stores. Et cela ne s&apos;arrête
              pas là. L&apos;intelligence de vos volets peut même aller au-delà : ils
              s&apos;adaptent à la météo. Grâce à des capteurs spécifiques, ils s&apos;abaissent
              si le soleil tape trop fort ou s&apos;ils détectent de la pluie.
            </p>
            <p className="text-gray-700 leading-relaxed">
              L&apos;intérêt de ces volets connectés ? En plus du côté pratique, ils vous
              permettent de réaliser des économies caloriques. Votre consommation en
              climatisation sera moindre si vos volets sont fermés. Autre atout non
              négligeable : la sécurité. En effet, simulez une présence, en
              programmant une ouverture et une fermeture des volets roulants, couplée
              à un éclairage aléatoire, lorsque vous n&apos;êtes pas chez vous. Cela
              dissuadera les intrus à coup sûr !
            </p>
          </section>

          {/* Section 2 */}
          <section aria-labelledby="energie">
            <h2 id="energie" className="font-display text-2xl font-bold text-navy mb-4">
              2 – Gestion des sources d&apos;énergie dans votre maison connectée dans le Nord
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              L&apos;économie d&apos;énergie est une de vos préoccupations ? La domotique vous
              offre la possibilité de gérer correctement et d&apos;optimiser les
              consommations énergétiques de votre foyer. Vous maîtrisez votre budget,
              tout en maintenant votre confort thermique. C&apos;est aussi simple que ça !
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Les nouvelles technologies vous permettent de programmer votre chauffage
              et votre climatisation à l&apos;avance, ou de les commander à distance, en
              temps réel. Ainsi, vous pouvez :
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-gold font-bold shrink-0">—</span>
                <span className="text-gray-700">
                  choisir des températures différentes pour chaque pièce de la maison
                  ou en fonction des zones à chauffer (coin jour et coin nuit) ;
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold shrink-0">—</span>
                <span className="text-gray-700">
                  contrôler vos systèmes de chauffage et de climatisation, en fonction
                  des heures de la journée, de la météo, de la présence ou non d&apos;un
                  membre de votre famille à domicile, etc. ;
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gold font-bold shrink-0">—</span>
                <span className="text-gray-700">
                  augmenter ou diminuer la température de votre domicile avant votre
                  retour, pour que la température soit optimale lorsque vous arrivez.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section aria-labelledby="eclairage">
            <h2 id="eclairage" className="font-display text-2xl font-bold text-navy mb-4">
              3 – Domotique : contrôle des éclairages intérieurs et extérieurs
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Éteignez et allumez l&apos;ensemble des lumières de votre maison connectée
              ou d&apos;une zone en particulier (coin jour, coin nuit, éclairage extérieur,
              ou autres), via un simple bouton ou en utilisant votre tablette, votre
              téléphone portable ou votre ordinateur. Créez des ambiances lumineuses
              au sein de votre domicile ou dans votre jardin, en jouant sur
              l&apos;intensité de la lumière, la couleur, et même en y ajoutant de la
              musique.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vous vous levez souvent la nuit pour aller aux toilettes ? La domotique
              a la solution pour vous ! Installez des détecteurs de lumière qui se
              déclencheront à votre passage.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vous vous intéressez à la chronobiologie ? Les nouvelles technologies
              également. Profitez d&apos;une lumière qui s&apos;intensifie progressivement au
              réveil, et qui se tamise en soirée, ceci afin de respecter votre rythme
              biologique.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Et si vous avez oublié d&apos;éteindre la lumière en partant de chez vous,
              pas de panique ! Commandez à distance l&apos;extinction de toutes vos lampes.
            </p>
          </section>

          {/* Section 4 */}
          <section aria-labelledby="securite">
            <h2 id="securite" className="font-display text-2xl font-bold text-navy mb-4">
              4 – La sécurité avant tout dans votre construction dans le Nord
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si vous vous demandez comment sécuriser votre domicile, alors la
              domotique est une excellente solution. Soyez alerté lorsqu&apos;un risque
              important menace votre logement : tentative d&apos;intrusion, incendie ou
              autres. Vous disposez de plusieurs systèmes domotiques pour améliorer
              votre sécurité et celle de vos proches.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Tout d&apos;abord, les <strong className="text-navy">systèmes d&apos;alarme</strong>.
              Ils regroupent les détecteurs d&apos;ouverture de portes, de fenêtres, de
              bris de glace, mais aussi les détecteurs de mouvement. Ils sont souvent
              couplés à une sirène d&apos;alerte. Positionnée sur la façade de votre
              domicile, elle se déclenche lors d&apos;une intrusion, en plus d&apos;avoir un
              rôle dissuasif. Et si vous avez oublié d&apos;enclencher votre alarme, vous
              avez la possibilité de la contrôler à distance, via votre smartphone
              ou votre tablette.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Grâce aux{" "}
              <strong className="text-navy">caméras de télésurveillance</strong>,
              visionnez à distance et en temps réel tout ce qui se déroule au sein
              de votre maison connectée. Vous pouvez ainsi vous assurer que tout est
              en ordre : qu&apos;il n&apos;y a pas d&apos;intrusion ou de départ de feu, par exemple.
            </p>
            <p className="text-gray-700 leading-relaxed italic">
              Notre conseil : pensez à intégrer ces équipements de sécurité,
              directement dans votre budget de construction de maison dans le Nord.
            </p>
          </section>

          {/* Section 5 */}
          <section aria-labelledby="acces">
            <h2 id="acces" className="font-display text-2xl font-bold text-navy mb-4">
              5 – Contrôle d&apos;accès de votre maison connectée à distance
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              La domotique intégrée dans la construction de votre maison dans le Nord
              vous permet également de contrôler l&apos;accès de votre domicile, sans
              forcément être sur place.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Que ce soit dans une maison contemporaine, ou plutôt une maison
              traditionnelle du Nord, il n&apos;est pas rare de trouver des portails ou
              portes de garage motorisés, avec commande à distance. Ces installations
              domotiques sont maintenant courantes. Mais savez-vous quels autres
              équipements pilotables à distance peuvent également vous être utiles ?
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vous souhaitez voir qui sonne à votre portail d&apos;entrée ou à votre porte,
              avant d&apos;ouvrir ? Installez un <strong className="text-navy">visiophone</strong>,
              afin de vérifier l&apos;identité de votre visiteur, en toute sécurité. Vous
              pourrez ainsi identifier la personne, lui parler et actionner l&apos;ouverture
              de votre porte ou de votre portail à distance.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Vous êtes hors de votre domicile et vous devez autoriser l&apos;accès à votre
              maison à une tierce personne (votre enfant qui a oublié ses clés, par
              exemple) ? C&apos;est possible, en contrôlant directement l&apos;ouverture de
              votre habitation, via votre smartphone ou votre tablette.
            </p>
          </section>

          {/* Conclusion */}
          <section className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              Vous l&apos;avez bien compris, les maisons de demain seront intelligentes et
              remplies d&apos;objets connectés. Que vous souhaitiez simuler une présence,
              déclencher l&apos;arrosage automatique, piloter votre thermostat à l&apos;aide
              d&apos;un écran tactile ou encore faire des économies d&apos;énergie, les
              avantages de la domotique sont nombreux. Les constructeurs de maisons
              individuelles dans le Nord avec qui nous travaillons ont été sélectionnés
              pour leur professionnalisme, leur sérieux, mais aussi leurs connaissances
              dans le domaine de la domotique.
            </p>
          </section>

        </div>
      </article>

      {/* CTA */}
      <section className="bg-navy py-16 px-4" aria-labelledby="cta-title">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-title" className="font-display text-2xl font-bold text-white mb-4">
            Vous souhaitez une maison connectée dans le Nord ?
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
