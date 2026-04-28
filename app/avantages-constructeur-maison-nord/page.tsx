import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Pourquoi choisir un constructeur de maison individuelle dans le Nord ?",
  description: "7 bonnes raisons de faire appel à un constructeur de maison individuelle dans le Nord : sur-mesure, accompagnement, délais, prix, terrain et plus.",
  alternates: { canonical: "/avantages-constructeur-maison-nord" },
  openGraph: buildOpenGraph("/avantages-constructeur-maison-nord", "article"),
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

const avantages = [
  {
    num: "1",
    title: "L'assurance d'un projet sur-mesure et personnalisé",
    content: [
      "Vous visualisez parfaitement la maison de vos rêves ? Vous avez des attentes particulières ? Faites part de vos projets à votre constructeur de maisons dans le Nord. Les professionnels que nous avons consciencieusement choisis pour vous sont à votre écoute. Vous pourrez échanger avec eux, afin de leur exposer toutes les idées concernant votre habitation dans les moindres détails. Une construction vous permettra de réaliser votre maison sur-mesure, selon les plans que vous avez établis. Vous pouvez ainsi penser les étapes de votre projet de construction de A à Z et le personnaliser à 100 %.",
      "Votre constructeur dans le Nord aura à cœur de respecter pleinement vos souhaits, en créant une résidence unique et qui vous ressemble. Il est à même de vous proposer des modèles de maisons sur plan, qu'il peut individualiser et adapter en fonction de vos besoins.",
      "Vous souhaitez des plans d'architecte ou vous en possédez déjà ? Les constructeurs sélectionnés sont à même de réaliser tous les projets, y compris ceux issus du travail d'un architecte.",
      "Si vous êtes en situation de handicap, les plans de construction respecteront les normes PMR (Personne à Mobilité Réduite). Pleinement conscient que vous avez des besoins spécifiques et qu'il existe des contraintes architecturales, votre constructeur de maison vous proposera les solutions les mieux adaptées. Ceci afin de favoriser votre autonomie et vous permettre d'accéder au confort maximal dans votre domicile.",
      "Le maître-mot des constructeurs est la satisfaction du client, en portant toute l'attention et l'individualisation nécessaire à votre projet.",
    ],
  },
  {
    num: "2",
    title: "Un accompagnement de qualité pour la construction haut de gamme",
    content: [
      "Pour des prestations haut de gamme, offrez-vous les meilleurs professionnels. Nous avons au préalable fait un choix pour vous et nous vous garantissons le sérieux de tous les prestataires spécialisés dans ce domaine. Ce sont tous des constructeurs de proximité, souvent des entreprises familiales, avec un savoir-faire traditionnel mis en pratique depuis de nombreuses années, ce qui leur confère un fort niveau de compétence. Ils sont entourés d'une équipe d'ouvriers, mais aussi de partenaires experts dans le domaine du bâtiment. La qualité des compétences est maîtrisée directement par votre constructeur de maison dans le Nord. Vous avez ainsi l'assurance d'un accompagnement à forte valeur ajoutée pour votre construction haut de gamme.",
      "Grâce à son expertise, votre constructeur sera à même de vous proposer toutes sortes de maisons d'architectes, au design élégant et personnalisé. Tout peut être imaginé pour votre résidence de prestige : du sol au plafond, en passant par la cuisine et la salle de bain, etc. Les menuiseries ne seront pas en reste, avec différentes ouvertures qui vous permettront de jouer sur la lumière intérieure et extérieure.",
      "Les matériaux les plus nobles pourront vous être proposés, des aménagements hors du commun et sur-mesure sont envisageables, pour une demeure de luxe à votre image.",
      "En résumé, votre constructeur de maison à Lille, Valenciennes, Dunkerque, Cambrai ou autres, sera un acteur incontournable dans votre projet de maison haut de gamme.",
    ],
  },
  {
    num: "3",
    title: "Constructeur dans le Nord, synonyme de professionnalisme",
    content: [
      "Faire appel à un constructeur de maison individuelle dans le Nord vous offre un certain nombre de garanties. Les professionnels auxquels nous avons accordé notre confiance ont un devoir de conseil et d'information envers vous, de respect des normes et s'engagent à vous satisfaire pleinement.",
    ],
    subsections: [
      {
        title: "Le CCMI",
        body: "Lorsque le choix de votre constructeur sera fait, vous allez signer un contrat avec lui, appelé CCMI (Contrat de Construction de Maison Individuelle). Cet accord, signé avant le commencement des travaux, a pour but de vous protéger. Il est garant des obligations suivantes : parfait achèvement des travaux ; de bon fonctionnement des éléments d'équipement dissociables de la construction (aussi appelée garantie biennale) ; décennale ; de livraison au délai et prix convenus.",
      },
      {
        title: "La RT2012",
        body: "Votre constructeur de maison dans le Nord-Pas-de-Calais est tenu au respect de la RT2012. C'est une obligation à laquelle il ne peut déroger. La Réglementation Thermique 2012 est très restrictive et doit répondre à plusieurs exigences énergétiques en matière d'éclairage, de production d'eau chaude, de chauffage, de climatisation et auxiliaires. Le bâti est également soumis à plusieurs règles telles que : l'étanchéité à l'air, le traitement des ponts thermiques, une surface minimale de baies vitrées, etc. Les habitations répondant à ces exigences (obligatoires depuis le 1er janvier 2013) peuvent se prévaloir du label BBC (Bâtiment Basse Consommation).",
      },
    ],
  },
  {
    num: "4",
    title: "Le gain de temps",
    content: [
      "Vous êtes en activité et vous n'avez pas le temps de gérer la coordination des travaux de votre future maison ? Ni de vous rendre tous les jours sur votre chantier afin d'apprécier l'avancée de la construction ? Faire appel à un constructeur de maison dans le Nord est la solution idéale pour vous décharger de ces tâches chronophages. En effet, le rôle de ce professionnel est de coordonner tous les corps de métiers qui entrent en jeu dans la construction d'une maison. Il sera votre unique interlocuteur. Ainsi, vous ne perdrez pas de temps à contacter tous les artisans, vous assurer que le travail est correctement effectué ou à organiser la venue de chaque corps d'état. Votre constructeur se chargera de ces étapes fondamentales de votre projet immobilier.",
      "Les constructeurs que nous avons sélectionnés connaissent bien les techniciens du bâtiment de la région Hauts-de-France et s'entourent des meilleurs professionnels en sous-traitance. Ils travaillent fréquemment ensemble et la communication entre eux est fluide et rapide.",
      "Alors, si vous ne souhaitez pas surcharger votre emploi du temps, déléguez les travaux de votre maison et toutes les contraintes qui en découlent à un constructeur de confiance.",
    ],
  },
  {
    num: "5",
    title: "Le prix de votre projet immobilier",
    content: [
      "Se lancer dans la construction d'une maison neuve peut parfois effrayer au niveau financier. Vous pouvez vous poser de nombreuses questions : quel sera le coût final de mon projet immobilier, devrai-je faire face à des dépenses imprévues, …? S'adjoindre les services d'un constructeur de maison individuelle vous évite les déconvenues budgétaires en cours ou à la fin du chantier. Lorsque vous signez un contrat avec un constructeur, celui-ci s'engage à exécuter les travaux pour un montant défini dès le départ. En effet, la signature du CCMI comporte : le prix définitif comprenant les plans, l'étude des sols, la fourniture des matériaux, les travaux, les diverses garanties, etc. ; et les travaux que vous souhaitez effectuer vous-même, le cas échéant.",
      "Faire construire sa maison dans le Nord en passant par un constructeur de confiance, vous permet également de bénéficier des meilleurs prix, car il négocie directement avec les artisans et les fabricants avec qui il travaille.",
      "Par ailleurs, lorsque vous avez recours à un constructeur de maison, un échéancier de paiement est établi (il s'agit d'une grille tarifaire régie par la loi). Vous connaissez à l'avance les montants à acquitter et leur date, en fonction de la progression des travaux.",
    ],
  },
  {
    num: "6",
    title: "Un accompagnement à la recherche et au choix du terrain",
    content: [
      "Le premier élément dans un projet de construction immobilière est le terrain. Vous n'en possédez pas encore et ne savez pas où chercher afin de dénicher votre futur carré de verdure ? Pas de panique ! Les professionnels de la construction que nous avons rigoureusement sélectionnés peuvent également vous apporter leur aide dans la recherche de votre terrain. Les constructeurs du Nord sont souvent en relation avec des vendeurs : agences immobilières, indépendants, lotisseurs, ou autre. Que ce soit en lotissement ou en rase campagne, ils sont donc à même de vous proposer une parcelle à acheter.",
      "Votre constructeur a aussi un rôle de conseil. Si vous êtes indécis, il vous recommandera la meilleure implantation de votre maison sur son emplacement en tenant compte de son architecture et de son exposition, vous aidera à choisir entre plusieurs terrains en fonction de votre projet, etc.",
    ],
  },
  {
    num: "7",
    title: "Garantie du respect des délais grâce au recours à un constructeur de maison individuelle dans le Nord",
    content: [
      "La livraison de votre maison doit respecter certains délais, car vous êtes actuellement locataire et devez rendre votre logement à une date précise ? Le fait de recourir à un constructeur du Nord choisi par nos soins, vous assurera un emménagement dans le temps imparti. Faire bâtir sa maison par un constructeur évite les mauvaises surprises, que l'on rencontre souvent lorsque l'on construit soi-même ou que l'on rénove un bien.",
      "Lors de la signature du contrat de construction, plusieurs éléments seront précisés : la date de début des travaux ; la durée du chantier ; et les pénalités, s'il y a retard dans la construction.",
      "Si les délais contractualisés sont dépassés, le constructeur sera alors redevable des pénalités de retard.",
      "Un projet immobilier doit être le fruit d'une mûre réflexion. Chaque futur propriétaire a des aspirations différentes et souhaite que sa résidence soit unique et réponde à tous ses critères en termes d'esthétique et de pratique. Pour cela, il faut savoir s'entourer des bons professionnels. Un constructeur sera à même de vous conseiller, vous guider et vous accompagner dans cette entreprise. Notre plus-value ? Une sélection en amont des meilleurs constructeurs du Nord : des entreprises de proximité, avec des compétences de qualité, et l'assurance d'un résultat personnalisé. Contactez-les en toute confiance !",
    ],
  },
];

export default function AvantagesConstructeurPage() {
  return (
    <>
      <section className="bg-navy py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">Votre construction dans le Nord</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">Pourquoi choisir un constructeur de maison individuelle dans le Nord ?</h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">Construire sa maison est souvent le projet d&apos;une vie. Découvrez les 7 raisons d&apos;accorder votre confiance à un constructeur de maison individuelle dans le Nord.</p>
          <Link href="/devis" className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors">Demander un devis gratuit</Link>
        </div>
      </section>

      <section className="px-4 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/maison-individuelle-2.jpg" alt="Avantages de faire construire avec un constructeur dans le Nord" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" priority />
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed">Vous avez un projet immobilier et vous hésitez encore entre faire appel à un constructeur, bâtir vous-même votre maison ou opter pour l&apos;achat d&apos;un bien à rénover ? Dans le cas d&apos;une construction, vous ne savez pas vers quel professionnel vous tourner ? Nous allons vous accompagner dans vos prises de décision. Construire sa maison est souvent le projet d&apos;une vie. Elle ne doit donc pas être prise à la légère. Ainsi, avoir un professionnel expert dans ce domaine à ses côtés peut se révéler rassurant. Le choix de votre constructeur va être primordial dans cette aventure qui va durer plusieurs mois. Découvrez sept raisons d&apos;accorder votre confiance à un constructeur de maison individuelle dans le Nord.</p>
        </div>
      </section>

      {avantages.map((avantage, idx) => (
        <section key={avantage.num} className={`py-16 px-4 ${idx % 2 === 0 ? "bg-gray-50" : ""}`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6">
              <span className="w-12 h-12 rounded-full bg-navy flex items-center justify-center shrink-0">
                <span className="text-gold font-display font-bold text-lg">{avantage.num}</span>
              </span>
              <div className="flex-1">
                <h2 className="font-display text-2xl font-bold text-navy mb-5">{avantage.title}</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {avantage.content.map((p, i) => <p key={i}>{p}</p>)}
                  {avantage.subsections?.map((sub) => (
                    <div key={sub.title} className="border-l-4 border-gold pl-6 mt-6">
                      <h3 className="font-semibold text-navy mb-2">{sub.title}</h3>
                      <p>{sub.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-navy py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Votre projet commence ici</h2>
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
