import type { Metadata } from "next";
import Link from "next/link";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "FAQ de la construction de maison dans le Nord",
  description: "Toutes les réponses à vos questions sur la construction de maison dans le Nord : constructeur, budget, terrain, types de maisons, démarches.",
  alternates: { canonical: "/faq" },
  openGraph: buildOpenGraph("/faq", "website"),
};

const faqCategories = [
  {
    id: "constructeur",
    titre: "Choisir un constructeur",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      {
        question: "Puis-je avoir une maison sur-mesure avec un constructeur du Nord ?",
        answer: "Bien sûr et c'est le but ! Avec nos partenaires, constructeurs de maisons dans le Nord, vous êtes certain d'avoir une maison unique et personnalisée.",
      },
      {
        question: "Quels sont les avantages à faire appel à un constructeur de maison individuelle dans le Nord ?",
        answer: "Ils sont nombreux : le respect de votre projet personnalisé et sur-mesure ; les constructeurs sélectionnés par nos soins sont qualifiés dans leur domaine et leur professionnalisme n'est plus à prouver ; un coût de construction calculé au plus juste et respectant votre budget ; des propositions de terrains et une aide au choix final, selon votre projet ; la garantie d'une construction finie dans les temps.",
      },
      {
        question: "Pourquoi choisir un constructeur de maison individuelle dans le Nord plutôt qu'opter pour l'auto-construction ?",
        answer: "Ces deux modes de constructions sont différents et il faut bien avoir en tête que l'auto-construction ne convient pas à tout le monde. Voici les avantages de faire appel à un constructeur de maison, plutôt que de se lancer soi-même : la garantie d'achèvement des travaux dans les temps (le constructeur est tenu de respecter des délais) ; la maîtrise de votre budget, puisque tout est calculé en amont de votre projet. Pas de mauvaises surprises comme c'est parfois le cas dans l'auto-construction, où on ne pense pas toujours à tout budgétiser ; tout est fait par des professionnels, vous n'avez à vous occuper de rien (ce qui est idéal si vous êtes très occupé et/ou si vous ne vous y connaissez pas en construction).",
      },
      {
        question: "Comment choisir le meilleur constructeur de maison dans le Nord-Pas-de-Calais ?",
        answer: "Cela dépend de votre projet : du type de construction que vous souhaitez, de votre budget, et encore d'autres paramètres. Si vous avez besoin d'aide, contactez-nous. Nous vous accompagnerons dans le choix du meilleur constructeur de maison dans le Nord, celui qui respectera totalement vos souhaits.",
      },
      {
        question: "Qui contacter pour faire construire sa maison dans le Nord ?",
        answer: "Si vous n'avez pas le temps ni l'envie de passer des heures à aller voir plusieurs constructeurs, leur expliquer votre projet et attendre des semaines des devis et des plans, nous avons la solution. Vous nous expliquez vos attentes et nous nous chargeons de vous aiguiller vers le professionnel qui correspond le mieux à votre budget. Vous aurez ainsi un interlocuteur unique : nous ! Nous nous chargeons de faire le travail de recherche du constructeur idéal, à votre place.",
      },
    ],
  },
  {
    id: "terrain",
    titre: "Terrain & localisation",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      {
        question: "Comment trouver un terrain à acheter dans le Nord ?",
        answer: "Bien sûr il y a les annonces sur Internet, les agences immobilières de votre secteur, les mairies, les notaires. Mais vous pouvez aussi vous adresser à un constructeur de maison du Nord, qui pourra vous proposer des terrains adaptés à votre projet et vous aider à sélectionner celui qu'il vous faut.",
      },
      {
        question: "Comment choisir mon futur terrain dans la région Nord-Pas-de-Calais ?",
        answer: "Plusieurs paramètres entrent en compte dans le choix de votre terrain dans le Nord : la situation, la superficie, le prix, la configuration, le fait qu'il soit viabilisé ou non.",
      },
      {
        question: "Que faire avant de choisir définitivement son terrain ?",
        answer: "Consultez le PLU, le CU, revenez voir le terrain dans différentes situations, interrogez le voisinage, prévoyez le coût des impôts locaux et surtout, prenez votre temps avant de vous décider !",
      },
    ],
  },
  {
    id: "budget",
    titre: "Budget & financement",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    items: [
      {
        question: "Quel est le budget à prévoir pour la construction de ma maison dans le Nord ?",
        answer: "En 2026, le prix moyen d'un terrain dans le Nord est d'environ 120 € le m² (soit 72 000 € pour 600 m²) et celui d'une maison neuve d'environ 1 750 € le m² (soit 210 000 € pour 120 m²). Le budget global moyen se situe autour de 282 000 € hors frais annexes.",
      },
      {
        question: "Quels sont les éléments qui vont faire varier le coût de ma construction ?",
        answer: "Le type de maison souhaitée, sa superficie, le prix du terrain, les matériaux utilisés, les finitions choisies, les prestations intérieures ainsi que le mode de chauffage, sont autant de paramètres qui peuvent faire fluctuer le budget de votre construction.",
      },
    ],
  },
  {
    id: "demarches",
    titre: "Démarches & processus",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    items: [
      {
        question: "Quelles sont les démarches à faire lors d'une construction dans le Nord ?",
        answer: "Tout d'abord : trouver le bon constructeur ! Pour cela, n'hésitez pas à nous contacter, nous sommes là pour vous aider. Ensuite, viendront : l'étude de votre projet (plans, devis) ; le démarchage des banques pour un prêt immobilier, le cas échéant ; la signature du contrat de construction de maison individuelle (CCMI) ; le dépôt du permis de construire. Après obtention de ce dernier, les travaux pourront débuter.",
      },
      {
        question: "Comment se déroule la construction d'une maison ?",
        answer: "Il y a trois grandes phases dans la construction d'une maison : le gros œuvre, le second œuvre et la réception de votre maison.",
      },
    ],
  },
  {
    id: "types",
    titre: "Types de maisons",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    items: [
      {
        question: "Quels sont les différents types de constructions dans le Nord ?",
        answer: "Pour votre type de maison dans le Nord, vous pouvez choisir : une construction traditionnelle, contemporaine, cubique, à ossature bois ou passive.",
      },
      {
        question: "Qu'est-ce qu'une maison traditionnelle du Nord ?",
        answer: "Une construction typique du Nord se définit comme suit : une façade en briques rouges ; un toit très pentu ; avec un étage, très souvent ; des menuiseries foncées verticales et étroites ; la présence de chien assis, la plupart du temps.",
      },
      {
        question: "Quels sont les avantages de faire construire une maison traditionnelle dans le Nord ?",
        answer: "Ils sont à la fois esthétiques : continuer à faire vivre l'architecture locale, et se veulent dans le respect de l'environnement : avoir une habitation qui s'inscrit parfaitement dans le paysage nordiste.",
      },
      {
        question: "Qu'est-ce qu'une maison contemporaine ?",
        answer: "Une maison contemporaine est le mariage de lignes design et de matériaux dernière génération. Elle est habillée d'un enduit clair, de bardage bois ou métallique et pourvue d'un toit plat, le plus souvent. Côté menuiseries : châssis fixes cubiques, fenêtres rectangulaires horizontales ou verticales, grandes baies vitrées et porte d'entrée stylisée sont à l'honneur.",
      },
      {
        question: "Pourquoi choisir une maison contemporaine dans le Nord ?",
        answer: "Pour sa modularité en termes de matériaux, forme, revêtements de façade, etc. Elle laisse libre cours à votre imagination. C'est aussi un logement respectueux de l'environnement et économique.",
      },
      {
        question: "Qu'est-ce qu'une maison cubique ?",
        answer: "Ce n'est pas qu'un simple cube, mais une juxtaposition de plusieurs modules, que vous aurez tout le loisir de combiner à l'infini. Les lignes de la maison cubique sont épurées au maximum, il est possible de jouer avec les différents revêtements de façade, sur chacun des modules. L'uniformité que l'on retrouve dans ses formes, contraste avec le mélange des matériaux et des couleurs.",
      },
      {
        question: "Pourquoi faire construire une maison cubique dans le Nord-Pas-de-Calais ?",
        answer: "Pour son esthétique et son originalité, dans un premier temps. Mais aussi, pour les possibilités infinies d'aménagement intérieur et extérieur, grâce notamment aux toits-terrasses (qui peuvent être végétalisés ou servir de solarium).",
      },
      {
        question: "Quels sont les avantages d'une maison à ossature bois dans le Nord ?",
        answer: "Une construction en ossature bois dans le Nord offre de nombreux atouts : c'est une maison écologique ; elle permet de faire des économies d'énergie, ce qui a un impact positif sur votre budget ; le temps des travaux est réduit (elle permet un gain de 3-4 mois par rapport à une construction maçonnée) ; les cloisons étant plus minces, il est possible de gagner jusqu'à 10 % d'espace habitable.",
      },
    ],
  },
  {
    id: "passive",
    titre: "Maison passive & énergie",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    items: [
      {
        question: "Comment fonctionne une maison passive ?",
        answer: "Grâce aux matériaux utilisés, à son exposition au soleil et à sa conception, la maison passive accumule et stocke les sources énergétiques (rayons du soleil, chaleur des habitants, des appareils électroménagers et électriques) à l'intérieur de l'habitation en hiver. En été, l'étanchéité du bâti, son pouvoir isolant et la présence d'une VMC à échangeur thermique permettent de maintenir une température agréable dans la maison.",
      },
      {
        question: "Une maison passive : est-ce vraiment avantageux dans la région Nord ?",
        answer: "Oui, elle permet de réaliser de belles économies d'énergie et de gagner en confort. En plus, en optant pour ce type de construction, vous faites un joli geste écologique.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-navy py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">Vos questions, nos réponses</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">FAQ de la construction de maison dans le Nord</h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">Toutes les réponses à vos questions sur la construction de maison dans le Nord.</p>
          <Link href="/devis" className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors">Demander un devis gratuit</Link>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-16">Vous avez un projet de construction et vous vous questionnez sur le choix de votre futur constructeur de maison individuelle dans le Nord, sur le type d&apos;habitation que vous pouvez faire construire ou vous ne savez pas comment trouver un terrain ? Voici toutes les réponses à vos questions, organisées par thème.</p>

          <div className="space-y-16">
            {faqCategories.map((cat) => (
              <div key={cat.id}>
                <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-gray-100">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center text-gold shrink-0">
                    {cat.icon}
                  </div>
                  <h2 className="font-display text-2xl font-bold text-navy">{cat.titre}</h2>
                </div>
                <dl className="space-y-4">
                  {cat.items.map((item, i) => (
                    <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                      <dt className="px-6 py-5">
                        <p className="font-semibold text-navy text-base">{item.question}</p>
                      </dt>
                      <dd className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">{item.answer}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </div>

          <p className="mt-16 text-gray-700 leading-relaxed">Notre équipe est à votre écoute pour vous accompagner dans votre projet de construction de maison individuelle dans le Nord. Osez sauter le pas : contactez-nous !</p>
        </div>
      </section>

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
