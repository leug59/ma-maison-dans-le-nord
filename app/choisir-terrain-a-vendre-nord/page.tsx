import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comment trouver et choisir le terrain idéal pour construire dans le Nord ?",
  description: "Superficie, situation, configuration, viabilisation, prix, CU, PLU : tous les critères pour trouver et choisir votre terrain constructible dans le Nord.",
  alternates: { canonical: "/choisir-terrain-a-vendre-nord" },
};

export default function ChoisirTerrainPage() {
  return (
    <>
      <section className="bg-navy py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">Blog — Construction dans le Nord</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">Construire sa maison dans le Nord : comment trouver et choisir le terrain idéal ?</h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">Localisation, prix, viabilisation, superficie, exposition : tous les critères pour devenir propriétaire du terrain constructible qu&apos;il vous faut.</p>
          <Link href="/devis" className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors">Demander un devis gratuit</Link>
        </div>
      </section>

      <section className="px-4 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/hero-maison-nord.jpg" alt="Terrain constructible dans le Nord" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" priority />
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed">Vous rêvez de faire construire ? Mais avant toute chose, il va falloir dénicher le terrain constructible idéal pour votre future maison. Localisation, prix, viabilisation, superficie, exposition, etc. seront autant de critères à prendre en compte avant de devenir propriétaire. Comment trouver et choisir un terrain à vendre dans le Nord pour la construction de sa maison ? Nous vous donnons ici les éléments de réponse.</p>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Où trouver un terrain à vendre dans le Nord pour votre projet immobilier ?</h2>
          <p className="text-gray-700 leading-relaxed">Dans un premier temps, avant de choisir votre terrain, il va falloir le trouver. Alors comment dénicher la perle rare, ce bout de terre qui correspondra parfaitement à vos attentes et vos besoins ? Vous avez écumé les sites internet d&apos;annonces entre particuliers, avez rencontré toutes les agences immobilières de votre secteur, vous êtes même renseigné auprès des mairies et des notaires, mais avez-vous pensé à vous adresser directement à un constructeur de maison individuelle dans le Nord ? En effet, les professionnels avec qui nous travaillons sont à même de vous proposer un terrain pour votre future construction. À l&apos;écoute de vos souhaits, de vos attentes et de votre budget, ils vous épauleront dans vos recherches et vous mettront en relation avec des vendeurs.</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-10">Quelles sont les caractéristiques à prendre en compte pour choisir un terrain pour la construction de sa maison dans le Nord ?</h2>
          <div className="space-y-10">

            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">La superficie du terrain dans le Nord</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>De combien de mètres carrés aurez-vous besoin pour votre future acquisition ? Si vous n&apos;en avez aucune idée, vous pouvez vous demander si vous souhaitez plutôt un grand terrain ou un petit jardin, qui ne demandera pas trop d&apos;entretien. Si vous envisagez de faire un potager, avoir une piscine, que vos enfants puissent jouer au foot dessus, etc. Bref, faites le listing de vos désirs en matière d&apos;extérieur, cela conditionnera la taille de votre terrain.</p>
                <p>En fonction de votre recherche (ville ou campagne), vous serez susceptible de trouver des superficies plus ou moins grandes. Si vous êtes avide de grands espaces, il vous faudra probablement sortir des grosses agglomérations. En lotissement, vous ne trouverez que des terrains de 400-500 m², en moyenne.</p>
                <p>Et bien sûr, la superficie de votre terrain à bâtir aura un coût sur votre projet global de construction, c&apos;est donc un critère de sélection à ne pas négliger.</p>
              </div>
            </div>

            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">La situation du terrain à vendre dans le Nord</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Vous allez devoir vous poser de nombreuses questions afin de choisir un terrain pour la construction de votre maison dans le Nord. Parmi ces interrogations, se pose celle de la situation :</p>
                <ul className="space-y-3 pl-2 mb-4">
                  {[
                    "préférez-vous vivre à la campagne ou à la ville ?",
                    "votre recherche se porte-t-elle plutôt sur un terrain en diffus ou en lotissement ? (il y a des avantages et des inconvénients pour chacun d'eux)",
                    "quels temps de trajet êtes-vous prêt à faire quotidiennement pour amener vos enfants à l'école et vous rendre à votre travail ?",
                    "quelle est la qualité de l'environnement : nuisances sonores éventuelles (route passante à proximité, train, couloir aérien, etc.), sécurité du quartier, proximité d'industries polluantes, …",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>Si vous convoitez déjà un terrain, vous pouvez vous demander :</p>
                <ul className="space-y-3 pl-2 mb-4">
                  {[
                    "s'il est proche des commodités, des commerces, des transports en commun, etc. ?",
                    "si l'accès et le stationnement seront faciles : le terrain est-il facilement accessible de la route ? Existe-t-il un droit de passage ? Un espace réservé au stationnement est-il possible sur le terrain ? Le cas échéant, peut-on se garer à proximité ?",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>Le principal étant d&apos;arriver à trouver un bon équilibre entre un aspect pratique au quotidien et votre future qualité de vie.</p>
              </div>
            </div>

            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">La configuration du terrain</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>La forme, la taille et la topographie de votre terrain sont autant d&apos;éléments à prendre en compte pour bien choisir un terrain pour la construction de sa maison dans le Nord.</p>
                <p>Un terrain rectangulaire, carré, en L, soumis à des servitudes publiques ou privées conditionneront l&apos;architecture de votre maison. Une maison cubique, à étage ou une maison contemporaine avec plusieurs volumes, s&apos;adapteront facilement à différentes configurations de terrain. Pour une maison à ossature bois ou une maison passive, l&apos;exposition sera à privilégier et tous les terrains n&apos;offrent pas forcément les bonnes conditions de construction.</p>
                <p>Par ailleurs, vous pourrez aisément construire une maison de plain-pied sur un terrain plat, alors qu&apos;une construction sur sous-sol ou demi-sous-sol sera plus appropriée sur un terrain en pente.</p>
                <p>N&apos;hésitez pas à discuter de ces différents critères avec votre constructeur de maison individuelle dans le Nord, qui saura vous aiguiller vers les terrains en adéquation avec votre projet, selon le style de construction que vous souhaitez.</p>
              </div>
            </div>

            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">Terrain dans le Nord viabilisé ou non ?</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>La viabilisation est un critère important à prendre en compte pour choisir un terrain pour la construction de sa maison dans le Nord. Qu&apos;est-ce qu&apos;un terrain à bâtir viabilisé ? Il s&apos;agit d&apos;une parcelle déjà raccordée aux différents réseaux : assainissement, eau potable, électricité, téléphone, gaz naturel, le cas échéant. Le coût d&apos;un terrain viabilisé est donc plus onéreux que celui d&apos;un terrain n&apos;étant pas encore viabilisé. Mais attention, le coût d&apos;une viabilisation peut s&apos;élever à plusieurs milliers d&apos;euros, surtout en fonction du type d&apos;assainissement exigé par le SPANC (Service Public d&apos;Assainissement Non Collectif), en cas d&apos;installation d&apos;assainissement non collectif. Il faudra vous conformer à la réglementation et aux recommandations de cet organisme public, ce qui peut avoir un impact sur le budget de votre construction. Le plus souvent, les terrains viabilisés se trouvent en lotissement.</p>
                <p>En campagne, il vous faudra penser à la viabilisation de votre parcelle. Nos partenaires constructeurs de maison dans le Nord-Pas-de-Calais sont à même de chiffrer le coût de ces travaux, afin d&apos;éviter les mauvaises surprises.</p>
              </div>
            </div>

            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">Le prix du terrain à vendre dans le Nord</h3>
              <p className="text-gray-700 leading-relaxed">Le prix d&apos;un terrain à vendre dans le Nord est impacté par tous les paramètres cités précédemment : superficie, situation, configuration et viabilisation. Avant de choisir un terrain pour la construction de votre maison dans le Nord, vous pouvez vérifier son prix moyen qui aura un impact conséquent sur le budget de votre construction. Cela vous donnera une idée du prix du marché dans la région.</p>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-10">Que faut-il faire avant de vous décider définitivement ?</h2>
          <div className="space-y-10">

            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">Revenir voir le terrain</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Si vous pouvez, retournez voir les lieux plusieurs fois et dans des situations variées : à différents moments de la journée, dans la semaine, le week-end, lorsqu&apos;il fait beau, mais aussi en temps de pluie. Cela vous donnera une idée des nuisances sonores éventuelles, des conditions de circulation aux abords selon les heures, de l&apos;ensoleillement (et donc de l&apos;exposition de votre future maison), etc.</p>
                <p>Faites connaissance avec le voisinage et interrogez-les sur l&apos;ambiance qui règne dans le quartier, sur les avantages et les inconvénients de l&apos;environnement proche.</p>
                <p>Explorez les alentours, pour voir si le secteur vous convient : loisirs, écoles, distance de votre travail, et autres.</p>
                <p>Les constructeurs de maisons individuelles dans le Nord à qui nous avons accordé notre confiance, vous accompagneront dans cette démarche. Ils viendront avec vous directement sur place, pour vous conseiller au mieux dans le choix de votre terrain.</p>
              </div>
            </div>

            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">Prenez connaissance du certificat d&apos;urbanisme (CU)</h3>
              <p className="text-gray-700 leading-relaxed">Le CU vous permettra de connaître les règles d&apos;urbanisme applicables à la parcelle, les servitudes d&apos;utilité publique, les règles d&apos;architectures éventuelles imposées par les Bâtiments de France, le droit de préemption de la mairie et les diverses taxes. C&apos;est donc un document à se procurer impérativement avant de construire sa maison et même d&apos;acquérir son terrain. L&apos;ensemble des éléments du certificat d&apos;urbanisme sont garantis pendant 18 mois, après la délivrance du document.</p>
            </div>

            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">Consultez le Plan Local d&apos;Urbanisme (PLU) de votre future commune</h3>
              <p className="text-gray-700 leading-relaxed">Il vous donnera des indications concernant les évolutions à venir au niveau des aménagements et le projet d&apos;urbanisme pour les années futures. Ainsi, si vous convoitez un terrain en pleine campagne, mais que vous avez peur qu&apos;il y ait de nombreuses habitations qui se construisent à l&apos;avenir, le PLU vous renseignera, entre autres, sur la constructibilité des parcelles voisines.</p>
            </div>

            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">Essayez de prévoir les dépenses futures inhérentes à votre construction</h3>
              <p className="text-gray-700 leading-relaxed">Lorsque vous allez choisir un terrain pour la construction de votre maison dans le Nord, interrogez-vous sur le coût des taxes à payer dans l&apos;avenir. En fonction du lieu de votre logement, les impôts locaux (taxe foncière et taxe d&apos;habitation) peuvent varier de façon conséquente.</p>
            </div>

            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">Considérez la revente de votre bien immobilier</h3>
              <p className="text-gray-700 leading-relaxed">Eh oui, avant même d&apos;acheter, pensez à la revente ! Même si vous vous projetez dans votre future maison durant de nombreuses années, il arrive parfois qu&apos;il faille déménager plus rapidement que prévu. Les critères de choix de votre futur terrain vous conviennent, mais seront-ils en adéquation avec ceux d&apos;autres personnes ? Bien que tout le monde n&apos;ait pas les mêmes attentes, il est fort à parier qu&apos;un terrain au bord d&apos;une autoroute ou dans un couloir aérien ne conviendra pas à de nombreuses personnes. Donc même si le coût d&apos;une telle parcelle semble intéressant au départ, pensez à l&apos;avenir. Vous pourriez peut-être vous trouver perdant à la revente…</p>
            </div>

            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">Ne soyez pas pressés pour votre terrain</h3>
              <p className="text-gray-700 leading-relaxed">Dans l&apos;euphorie du moment, on a tendance à vouloir précipiter les choses, mais c&apos;est une erreur. Prenez le temps de bien peser les avantages et les inconvénients de votre futur achat. Avant de choisir un terrain pour la construction de votre maison dans le Nord, discutez-en avec votre constructeur, prenez conseil auprès de lui, posez-lui toutes les questions qui vous viennent à l&apos;esprit. Et surtout accordez-vous quelques jours de réflexion avant de vous engager. Pour de tels investissements, la prudence est de mise, donc soyez patient et réfléchissez bien à la globalité de votre projet !</p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Le terrain idéal est celui qui vous correspondra le mieux, il faut donc prendre le soin de bien tout étudier avant de vous lancer dans l&apos;aventure. Choisir un terrain pour la construction de sa maison dans le Nord est parfois plus difficile que ce que l&apos;on pense. Faire appel à un constructeur peut alors s&apos;avérer être une excellente solution. Ce professionnel sait où trouver des terrains à vendre, vous aidera dans votre choix et pourra chiffrer au mieux votre projet de construction.</p>
            <p>Prenez contact avec nous, nous vous mettrons en relation avec des constructeurs de maisons individuelles du Nord, soigneusement choisis pour leur sérieux et leurs compétences.</p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Trouvez votre terrain idéal dans le Nord</h2>
          <p className="text-white/70 text-lg mb-8">Vous êtes décidés à faire construire votre maison ? Nous vous mettrons rapidement en contact avec le constructeur qu&apos;il vous faut !</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors">Demander un devis gratuit</Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white hover:bg-white/5 transition-colors">Nous contacter</Link>
          </div>
        </div>
      </section>
    </>
  );
}
