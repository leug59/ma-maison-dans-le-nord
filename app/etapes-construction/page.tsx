import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction dans le Nord : quelles sont les étapes de votre projet ?",
  description: "De la définition du projet à la réception du chantier : découvrez en détail toutes les étapes de votre construction de maison dans le Nord.",
  alternates: { canonical: "/etapes-construction" },
};

function CheckItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center shrink-0 mt-0.5">
        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
      </span>
      <span className="text-gray-700">{text}</span>
    </li>
  );
}

export default function EtapesConstructionPage() {
  return (
    <>
      <section className="bg-navy py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">Votre construction dans le Nord</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">Construction dans le Nord : quelles sont les étapes de votre projet ?</h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">De la définition de votre projet à la remise des clés : découvrez chaque phase de votre construction accompagné de A à Z.</p>
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
          <p className="text-gray-700 text-lg leading-relaxed">Vous allez vous lancer dans la belle aventure de la construction ? Le problème est que le monde du bâtiment vous est totalement inconnu et vous ne savez pas comment vont se dérouler les différentes phases de votre projet ? Soyez rassuré, si vous faites appel à un constructeur dans le Nord, vous allez être accompagné tout au long de cette entreprise : de l&apos;élaboration du cahier des charges à la réception de votre chantier. Découvrez en détails quelles sont les étapes de votre projet de construction dans le Nord.</p>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-8">Définissez votre projet et quel budget lui sera alloué</h2>
          <p className="text-gray-700 leading-relaxed mb-8">Avant de trouver le constructeur de maison individuelle dans le Nord qui va réaliser la maison de vos rêves, vous allez devoir définir votre projet et le budget de construction de la maison dans le Nord que vous souhaitez lui consacrer. Si vous avez besoin de conseils et d&apos;être orienté pour prendre vos décisions, votre constructeur vous épaulera dans cette phase. Les entrepreneurs que nous avons sélectionnés pour vous sont experts dans leur domaine et sont à même de vous guider tout au long de votre projet.</p>
          <div className="space-y-8">
            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">Le type de construction de votre maison</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Pour que votre future demeure soit personnalisée et réponde à vos exigences, vous serez tenus de bien réfléchir à vos goûts, mais aussi à vos besoins. Préférez-vous une maison contemporaine, une maison traditionnelle, une maison cubique ou un autre type de construction ? Une maison de plain-pied ou à étages ? Combien de chambres, salles de bain sont nécessaires à votre famille et quelles doivent être leurs superficies ? Souhaitez-vous un garage, un double-garage, une buanderie ? Avez-vous une préférence pour les matériaux qui seront utilisés ? Peut-être avez-vous imaginé une maison passive comme future demeure, dans ce cas-là, quelles sont les obligations architecturales ?</p>
                <p>Au final, vous devrez vous poser de nombreuses questions afin d&apos;élaborer votre projet de construction sous le meilleur angle, et surtout, de façon totalement personnalisée.</p>
              </div>
            </div>
            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">La recherche du terrain</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Pour la recherche de votre terrain, vous devrez encore vous questionner longuement, car chaque futur propriétaire a des critères qui lui sont propres. Que vous soyez plus campagne que lotissement, ville que village, prenez le temps d&apos;étudier quelles sont vos exigences pour partir à la conquête de votre parcelle. Pour trouver le terrain idéal, prenez en compte ces différents éléments :</p>
                <ul className="space-y-3 pl-2">
                  <CheckItem text="l'emplacement (par rapport à votre travail, aux crèches ou aux écoles, etc.) est souvent un critère déterminant dans l'achat d'un terrain ;" />
                  <CheckItem text="l'accessibilité et la proximité des commerces, des soins (médecin, pharmacie et autres) et des transports en commun ;" />
                  <CheckItem text="la superficie revêt également beaucoup d'importance : aimez-vous les grands espaces ou au contraire l'entretien d'un jardin vous fait-il peur ? ;" />
                  <CheckItem text="l'orientation par rapport au soleil, au vent, mais aussi aux voisins. Il est important de penser à votre confort et à votre intimité ;" />
                  <CheckItem text="le terrain est-il viabilisé (raccordement aux réseaux d'eau, d'électricité, de gaz, de téléphone) ? Dans le cas contraire, quelles sont les exigences en matière d'assainissement individuel ? ;" />
                  <CheckItem text="quelles sont les règles d'urbanisme : distance par rapport aux propriétés voisines, couleur des façades et menuiseries, possibilité de construire un étage ou non, etc." />
                </ul>
              </div>
            </div>
            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">La détermination de votre capacité d&apos;emprunt</h3>
              <p className="text-gray-700 leading-relaxed">Si vous devez réaliser un prêt immobilier pour faire construire votre maison dans le Nord, il vous faudra définir votre capacité d&apos;emprunt. Si vous n&apos;en avez aucune idée, l&apos;idéal est de vous rapprocher de professionnels de la finance : établissements bancaires ou courtiers en prêt immobilier. Ils seront à même de calculer votre capacité d&apos;emprunt en fonction de différentes variables : taux de crédit en vigueur, votre apport personnel, vos revenus mensuels et également les aides financières auxquelles vous pouvez prétendre (prêt à taux zéro, action logement (1 % patronal), etc.).</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-8">Réalisez les démarches liées à la construction</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">À quel professionnel allez-vous accorder votre confiance ?</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Vous n&apos;envisagez pas l&apos;auto-construction et vous préférez vous adresser à des professionnels du bâtiment ? Nous avons fait pour vous le choix des meilleurs constructeurs de maison à Lille et dans toute la région du Nord.</p>
                <p>Une fois que votre projet et votre budget sont définis, voici venu le temps de vous entourer des bonnes personnes pour réaliser votre dessein, si ce n&apos;est pas encore chose faite. Un constructeur dans le Nord choisi par nos soins sera un gage de qualité. Interlocuteur unique, il vous épaulera pour concevoir votre maison, de l&apos;étude de votre projet à la livraison de votre chantier, en passant par la gestion des tâches administratives et la coordination de tous les corps de métier qui vont œuvrer pour votre construction.</p>
                <p>Dans un premier temps, vous allez rencontrer votre constructeur de maison individuelle dans le Nord, afin de définir précisément votre projet. Les professionnels que nous vous proposons sont des partenaires de proximité, qui ont à cœur de vous offrir des prestations sur-mesure et haut de gamme, le cas échéant. Cet entretien vous permettra de profiter de tous les conseils avisés en matière d&apos;architecture, de construction, de réglementations, et d&apos;établir un cahier des charges de vos attentes et de vos besoins.</p>
              </div>
            </div>
            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">L&apos;étude de votre projet</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Avant d&apos;entamer la construction, de nombreuses phases sont nécessaires, dont l&apos;étude du projet. Si vous avez déjà des plans (que ce soient vos propres plans ou des plans d&apos;architecte), votre constructeur de maison dans le Nord s&apos;adaptera à ceux-ci pour vous proposer une ébauche de projet correspondant à vos désirs. Si vous n&apos;en possédez pas, ce n&apos;est pas un souci ! Votre constructeur vous proposera une maison sur plan ou des croquis plus personnalisés, de concert avec ses dessinateurs ou des architectes.</p>
                <p>L&apos;élaboration des plans de construction, permettra à votre interlocuteur de procéder au chiffrage total de votre future réalisation.</p>
              </div>
            </div>
            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">La signature du CCMI</h3>
              <p className="text-gray-700 leading-relaxed">Lorsque votre choix de constructeur sera fait, vous allez signer un contrat de construction de maison individuelle (CCMI). Ce sera le garant du bon déroulement des travaux jusqu&apos;à la réception du chantier, du respect des délais et du budget défini en amont.</p>
            </div>
            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">Le dépôt du permis de construire</h3>
              <p className="text-gray-700 leading-relaxed">Après avoir établi tous les plans (de situation, de masse et de coupe), votre constructeur de maison dans le Nord-Pas-de-Calais, se chargera de la constitution du permis de construire et de son envoi en mairie, pour validation. Vous n&apos;avez à vous occuper de rien, votre constructeur gère toutes les formalités administratives.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-8">La construction de votre maison</h2>
          <p className="text-gray-700 leading-relaxed mb-8">Durant cette phase, qui est la plus longue, votre constructeur de maison dans le Nord, va suivre un planning précis, afin de respecter le délai de livraison du chantier défini à la signature du contrat. Il va endosser le rôle de maître d&apos;œuvre, afin d&apos;orchestrer le déroulement de votre construction dans ses moindres détails.</p>
          <div className="space-y-8">
            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">La première étape : le gros œuvre</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Le gros-œuvre consiste à créer, stabiliser et solidifier le bâtiment. Il se décompose comme suit :</p>
                <ul className="space-y-3 pl-2">
                  <CheckItem text="le piquetage : il permet de délimiter la future maison grâce à des piquets ;" />
                  <CheckItem text="le terrassement : c'est la phase de préparation du terrain. Il est décaissé afin d'accueillir les fondations et les canalisations ;" />
                  <CheckItem text="les fondations : il s'agit de couler du béton dans un coffrage ou des tranchées. La maison reposant sur les fondations, elles doivent donc être solides et suffisamment profondes ;" />
                  <CheckItem text="l'assainissement : il peut être soit collectif (tout-à-l'égout), soit autonome (fosse septique ou autre). Son rôle est d'évacuer les eaux usées ;" />
                  <CheckItem text="le soubassement : vide sanitaire, sous-sol ou hérisson. C'est la partie inférieure de la maison qui soutient la construction et assure une protection contre les remontées capillaires d'humidité ;" />
                  <CheckItem text="le dallage : il va constituer le sol de votre maison. Le plus souvent, il s'agit d'une grande plaque de béton armé ;" />
                  <CheckItem text="l'élévation des murs : les maçons vont réaliser l'ossature de la maison en montant les murs porteurs (en parpaings, briques, béton cellulaire, bois, paille, etc.) ;" />
                  <CheckItem text="la mise hors d'eau : cette phase vise à mettre en place la charpente et à la couvrir avec des ardoises, des tuiles, du zinc, … ;" />
                  <CheckItem text="la mise hors d'air : c'est la pose des menuiseries extérieures : fenêtres, volets, portes d'entrée et de garage ;" />
                  <CheckItem text="les travaux de façade : que vous choisissiez l'esthétique du crépi, du bardage, ou du parement en pierre, la fonction principale d'un revêtement de façade est d'assurer la protection des murs." />
                </ul>
              </div>
            </div>
            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">La phase suivante de votre construction : le second œuvre</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Il vise à rendre votre future demeure habitable. Plusieurs étapes sont concernées par le second œuvre :</p>
                <ul className="space-y-3 pl-2">
                  <CheckItem text="la mise en place des cloisons pour créer l'agencement des différentes pièces ;" />
                  <CheckItem text="l'isolation : elle peut suivre la pente du toit (isolation en rampant) ou être positionnée dans les combles ;" />
                  <CheckItem text="l'électricité ;" />
                  <CheckItem text="la plomberie ;" />
                  <CheckItem text="le chauffage et la climatisation, le cas échéant ;" />
                  <CheckItem text="la ventilation." />
                </ul>
                <p>Les finitions font également partie du second œuvre. Vous pouvez vous les réserver ou les confier à votre constructeur dans le Nord. Dans les deux cas, le CCMI devra spécifier qui est en charge de cette phase. Les finitions sont l&apos;ultime étape de la construction. Il s&apos;agit de l&apos;aménagement intérieur et de la décoration : revêtements de sol (carrelage, parquet, stratifié), revêtements de mur (peinture, papier peint, lambris, etc.) et menuiseries intérieures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Dernière étape de votre projet de construction dans le Nord : la réception de votre maison</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Lorsque le chantier est fini, la dernière phase de votre projet arrive enfin ! C&apos;est celle que vous attendez avec impatience : la réception de votre maison. Votre constructeur de maison individuelle dans le Nord vous aura accompagné durant toutes les étapes et sera heureux de vous remettre les clés de votre future maison. Mais avant cela, il vous faudra réaliser une visite avec votre constructeur, afin de vous assurer que tous les travaux sont conformes au CCMI que vous avez signé. Nous avons sélectionné des professionnels qui travaillent dans les règles de l&apos;art et qui seront pour vous l&apos;assurance de prestations de qualité. Nul doute qu&apos;à la livraison de fin de chantier, vous pourrez signer le procès-verbal de réception sans réserves. Si toutefois, vous constatiez des défauts ou malfaçons, votre interlocuteur sera à votre écoute pour régler les éventuels problèmes.</p>
            <p>Faire construire sa maison dans le Nord nécessite de passer par plusieurs étapes. Si vous n&apos;avez pas envie d&apos;être seul dans cette aventure et désirez être épaulé par une entreprise qualifiée, nous vous recommandons certains constructeurs de maison dans le Nord. Nous les avons sélectionnés pour leur professionnalisme, leur proximité, leur sens de l&apos;écoute et leur envie de satisfaire pleinement leurs clients. Ne vous posez plus de questions, si vous souhaitez un projet sur-mesure et personnalisé : prenez contact avec eux !</p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Prêt à démarrer votre projet ?</h2>
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
