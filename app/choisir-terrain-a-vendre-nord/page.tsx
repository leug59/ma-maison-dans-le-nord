import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trouver et choisir son terrain constructible dans le Nord",
  description:
    "Localisation, prix, viabilisation, superficie, exposition… Comment trouver et choisir le bon terrain à vendre dans le Nord pour construire sa maison ? Tous les critères et conseils.",
  alternates: { canonical: "/choisir-terrain-a-vendre-nord" },
};

export default function ChoisirTerrainNordPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 px-4" aria-label="En-tête">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Terrain
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Construire sa maison dans le Nord : comment trouver et choisir le terrain idéal ?
          </h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Localisation, prix, viabilisation, superficie, exposition… autant de
            critères à prendre en compte avant de devenir propriétaire de votre
            terrain constructible.
          </p>
        </div>
      </section>

      {/* Article */}
      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-14">

          {/* Intro */}
          <p className="text-gray-700 text-lg leading-relaxed">
            Vous rêvez de faire construire ? Mais avant toute chose, il va falloir
            dénicher le terrain constructible idéal pour votre future maison.
            Localisation, prix, viabilisation, superficie, exposition, etc. seront
            autant de critères à prendre en compte avant de devenir propriétaire.
            Comment trouver et choisir un terrain à vendre dans le Nord pour la
            construction de sa maison ? Nous vous donnons ici les éléments de réponse.
          </p>

          {/* Section 1 */}
          <section aria-labelledby="ou-trouver">
            <h2 id="ou-trouver" className="font-display text-2xl font-bold text-navy mb-4">
              Où trouver un terrain à vendre dans le Nord pour votre projet immobilier ?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Dans un premier temps, avant de choisir votre terrain, il va falloir le
              trouver. Alors comment dénicher la perle rare, ce bout de terre qui
              correspondra parfaitement à vos attentes et vos besoins ? Vous avez
              écumé les sites internet d&apos;annonces entre particuliers, avez rencontré
              toutes les agences immobilières de votre secteur, vous êtes même
              renseigné auprès des mairies et des notaires, mais avez-vous pensé à
              vous adresser directement à un constructeur de maison individuelle dans
              le Nord ? En effet, les professionnels avec qui nous travaillons sont à
              même de vous proposer un terrain pour votre future construction. À
              l&apos;écoute de vos souhaits, de vos attentes et de votre budget, ils vous
              épauleront dans vos recherches et vous mettront en relation avec des
              vendeurs.
            </p>
          </section>

          {/* Section 2 */}
          <section aria-labelledby="caracteristiques">
            <h2 id="caracteristiques" className="font-display text-2xl font-bold text-navy mb-6">
              Quelles sont les caractéristiques à prendre en compte pour choisir un terrain pour la construction de sa maison dans le Nord ?
            </h2>

            <div className="space-y-10">

              <div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">
                  La superficie du terrain dans le Nord
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  De combien de mètres carrés aurez-vous besoin pour votre future
                  acquisition ? Si vous n&apos;en avez aucune idée, vous pouvez vous
                  demander si vous souhaitez plutôt un grand terrain ou un petit
                  jardin, qui ne demandera pas trop d&apos;entretien. Si vous envisagez
                  de faire un potager, avoir une piscine, que vos enfants puissent
                  jouer au foot dessus, etc. Bref, faites le listing de vos désirs
                  en matière d&apos;extérieur, cela conditionnera la taille de votre terrain.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  En fonction de votre recherche (ville ou campagne), vous serez
                  susceptible de trouver des superficies plus ou moins grandes. Si
                  vous êtes avide de grands espaces, il vous faudra probablement
                  sortir des grosses agglomérations. En lotissement, vous ne trouverez
                  que des terrains de <strong className="text-navy">400-500 m²</strong>,
                  en moyenne.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Et bien sûr, la superficie de votre terrain à bâtir aura un coût
                  sur votre projet global de construction, c&apos;est donc un critère de
                  sélection à ne pas négliger.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">
                  La situation du terrain à vendre dans le Nord
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vous allez devoir vous poser de nombreuses questions afin de choisir
                  un terrain pour la construction de votre maison dans le Nord. Parmi
                  ces interrogations, se pose celle de la situation :
                </p>
                <ul className="space-y-3 mb-4">
                  {[
                    "préférez-vous vivre à la campagne ou à la ville ?",
                    "votre recherche se porte-t-elle plutôt sur un terrain en diffus ou en lotissement ? (il y a des avantages et des inconvénients pour chacun d'eux)",
                    "quels temps de trajet êtes-vous prêt à faire quotidiennement pour amener vos enfants à l'école et vous rendre à votre travail ?",
                    "quelle est la qualité de l'environnement : nuisances sonores éventuelles (route passante à proximité, train, couloir aérien, etc.), sécurité du quartier, proximité d'industries polluantes…",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-gold font-bold shrink-0">—</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Si vous convoitez déjà un terrain, vous pouvez vous demander :
                </p>
                <ul className="space-y-3">
                  {[
                    "s'il est proche des commodités, des commerces, des transports en commun, etc. ?",
                    "si l'accès et le stationnement seront faciles : le terrain est-il facilement accessible de la route ? Existe-t-il un droit de passage ? Un espace réservé au stationnement est-il possible sur le terrain ?",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-gold font-bold shrink-0">—</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Le principal étant d&apos;arriver à trouver un bon équilibre entre un
                  aspect pratique au quotidien et votre future qualité de vie.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">
                  La configuration du terrain
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La forme, la taille et la topographie de votre terrain sont autant
                  d&apos;éléments à prendre en compte pour bien choisir un terrain pour
                  la construction de sa maison dans le Nord.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Un terrain rectangulaire, carré, en L, soumis à des servitudes
                  publiques ou privées conditionneront l&apos;architecture de votre maison.
                  Une maison cubique, à étage ou une maison contemporaine avec plusieurs
                  volumes, s&apos;adapteront facilement à différentes configurations de
                  terrain. Pour une maison à ossature bois ou une maison passive,
                  l&apos;exposition sera à privilégier et tous les terrains n&apos;offrent pas
                  forcément les bonnes conditions de construction.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Par ailleurs, vous pourrez aisément construire une maison de
                  plain-pied sur un terrain plat, alors qu&apos;une construction sur
                  sous-sol ou demi-sous-sol sera plus appropriée sur un terrain en pente.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">
                  Terrain dans le Nord viabilisé ou non
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La viabilisation est un critère important à prendre en compte pour
                  choisir un terrain pour la construction de sa maison dans le Nord.
                  Qu&apos;est-ce qu&apos;un terrain à bâtir viabilisé ? Il s&apos;agit d&apos;une parcelle
                  déjà raccordée aux différents réseaux : assainissement, eau potable,
                  électricité, téléphone, gaz naturel, le cas échéant.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le coût d&apos;un terrain viabilisé est donc plus onéreux que celui d&apos;un
                  terrain n&apos;étant pas encore viabilisé. Mais attention, le coût d&apos;une
                  viabilisation peut s&apos;élever à plusieurs milliers d&apos;euros, surtout
                  en fonction du type d&apos;assainissement exigé par le SPANC (Service
                  Public d&apos;Assainissement Non Collectif), en cas d&apos;installation
                  d&apos;assainissement non collectif. Il faudra vous conformer à la
                  réglementation et aux recommandations de cet organisme public,
                  ce qui peut avoir un impact sur le budget de votre construction.
                  Le plus souvent, les terrains viabilisés se trouvent en lotissement.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  En campagne, il vous faudra penser à la viabilisation de votre
                  parcelle. Nos partenaires constructeurs de maison dans le
                  Nord-Pas-de-Calais sont à même de chiffrer le coût de ces travaux,
                  afin d&apos;éviter les mauvaises surprises.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-navy mb-3">
                  Le prix du terrain à vendre dans le Nord
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Le prix d&apos;un terrain à vendre dans le Nord est impacté par tous
                  les paramètres cités précédemment : superficie, situation,
                  configuration et viabilisation. Avant de choisir un terrain pour
                  la construction de votre maison dans le Nord, vous pouvez vérifier
                  son prix moyen qui aura un impact conséquent sur le budget de votre
                  construction.
                </p>
              </div>

            </div>
          </section>

          {/* Section 3 */}
          <section aria-labelledby="avant-de-decider">
            <h2 id="avant-de-decider" className="font-display text-2xl font-bold text-navy mb-6">
              Que faut-il faire avant de vous décider définitivement ?
            </h2>
            <div className="space-y-8">

              {[
                {
                  titre: "Revenir voir le terrain",
                  texte: "Si vous pouvez, retournez voir les lieux plusieurs fois et dans des situations variées : à différents moments de la journée, dans la semaine, le week-end, lorsqu'il fait beau, mais aussi en temps de pluie. Cela vous donnera une idée des nuisances sonores éventuelles, des conditions de circulation aux abords selon les heures, de l'ensoleillement (et donc de l'exposition de votre future maison), etc. Faites connaissance avec le voisinage et interrogez-les sur l'ambiance qui règne dans le quartier, sur les avantages et les inconvénients de l'environnement proche.",
                },
                {
                  titre: "Prenez connaissance du certificat d'urbanisme (CU)",
                  texte: "Le CU vous permettra de connaître les règles d'urbanisme applicables à la parcelle, les servitudes d'utilité publique, les règles d'architectures éventuelles imposées par les Bâtiments de France, le droit de préemption de la mairie et les diverses taxes. C'est donc un document à se procurer impérativement avant de construire sa maison et même d'acquérir son terrain. L'ensemble des éléments du certificat d'urbanisme sont garantis pendant 18 mois, après la délivrance du document.",
                },
                {
                  titre: "Consultez le Plan Local d'Urbanisme (PLU) de votre future commune",
                  texte: "Il vous donnera des indications concernant les évolutions à venir au niveau des aménagements et le projet d'urbanisme pour les années futures. Ainsi, si vous convoitez un terrain en pleine campagne, mais que vous avez peur qu'il y ait de nombreuses habitations qui se construisent à l'avenir, le PLU vous renseignera, entre autres, sur la constructibilité des parcelles voisines.",
                },
                {
                  titre: "Essayez de prévoir les dépenses futures inhérentes à votre construction",
                  texte: "Lorsque vous allez choisir un terrain pour la construction de votre maison dans le Nord, interrogez-vous sur le coût des taxes à payer dans l'avenir. En fonction du lieu de votre logement, les impôts locaux (taxe foncière et taxe d'habitation) peuvent varier de façon conséquente.",
                },
                {
                  titre: "Considérez la revente de votre bien immobilier",
                  texte: "Eh oui, avant même d'acheter, pensez à la revente ! Même si vous vous projetez dans votre future maison durant de nombreuses années, il arrive parfois qu'il faille déménager plus rapidement que prévu. Bien que tout le monde n'ait pas les mêmes attentes, il est fort à parier qu'un terrain au bord d'une autoroute ou dans un couloir aérien ne conviendra pas à de nombreuses personnes. Même si le coût d'une telle parcelle semble intéressant au départ, pensez à l'avenir.",
                },
                {
                  titre: "Ne soyez pas pressés pour votre terrain",
                  texte: "Dans l'euphorie du moment, on a tendance à vouloir précipiter les choses, mais c'est une erreur. Prenez le temps de bien peser les avantages et les inconvénients de votre futur achat. Avant de choisir un terrain pour la construction de votre maison dans le Nord, discutez-en avec votre constructeur, prenez conseil auprès de lui, posez-lui toutes les questions qui vous viennent à l'esprit. Et surtout accordez-vous quelques jours de réflexion avant de vous engager. Pour de tels investissements, la prudence est de mise.",
                },
              ].map((item) => (
                <div key={item.titre} className="border-l-2 border-gold pl-6">
                  <h3 className="font-display text-lg font-bold text-navy mb-2">
                    {item.titre}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.texte}</p>
                </div>
              ))}

            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <p className="text-gray-700 leading-relaxed">
              Le terrain idéal est celui qui vous correspondra le mieux, il faut
              donc prendre le soin de bien tout étudier avant de vous lancer dans
              l&apos;aventure. Choisir un terrain pour la construction de sa maison dans
              le Nord est parfois plus difficile que ce que l&apos;on pense. Faire appel
              à un constructeur peut alors s&apos;avérer être une excellente solution. Ce
              professionnel sait où trouver des terrains à vendre, vous aidera dans
              votre choix et pourra chiffrer au mieux votre projet de construction.
            </p>
          </section>

        </div>
      </article>

      {/* CTA */}
      <section className="bg-navy py-16 px-4" aria-labelledby="cta-title">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="cta-title" className="font-display text-2xl font-bold text-white mb-4">
            Vous cherchez un terrain pour faire construire dans le Nord ?
          </h2>
          <p className="text-white/70 mb-8">
            Prenez contact avec nous, nous vous mettrons en relation avec des
            constructeurs de maisons individuelles du Nord, soigneusement choisis
            pour leur sérieux et leurs compétences.
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
