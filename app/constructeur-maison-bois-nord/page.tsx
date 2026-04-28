import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Construction en ossature bois dans le Nord : avantages et inconvénients",
  description: "Maison à ossature bois dans le Nord : caractéristiques, avantages (énergie, écologie, délais) et inconvénients. Trouvez votre constructeur MOB.",
  alternates: { canonical: "/constructeur-maison-bois-nord" },
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

export default function MaisonBoisPage() {
  return (
    <>
      <section className="bg-navy py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">Types de constructions — Hauts-de-France</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">Construction en ossature bois dans le Nord : avantages et inconvénients</h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">Écologique, performante et rapide à construire : découvrez tout sur la maison à ossature bois dans le Nord.</p>
          <Link href="/devis" className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors">Demander un devis gratuit</Link>
        </div>
      </section>

      <section className="px-4 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/maison-bois.jpg" alt="Maison en ossature bois dans le Nord" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" priority />
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed">Pour votre future maison, vous avez pensé à une construction à ossature bois, mais vous hésitez encore… Vous craignez que ce type d&apos;habitation ne vieillisse mal, qu&apos;il ne soit pas durable dans le temps, pas assez robuste, etc. Intéressons-nous de plus près aux avantages et inconvénients d&apos;une maison en ossature bois dans le Nord. Vous pourrez ainsi prendre une décision en toute connaissance de cause sur ces maisons pour votre projet.</p>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Construction d&apos;une maison en bois dans le Nord : quelles sont les caractéristiques ?</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Avant d&apos;explorer les avantages et inconvénients d&apos;une maison en bois, il convient de mieux connaître les spécificités de cette construction. Certaines étapes de la construction bois dans le Nord diffèrent des étapes de la construction traditionnelle :</p>
            <ul className="space-y-4 pl-2">
              {[
                "les fondations : alors que le béton est traditionnellement utilisé, pour une maison bois, plus légère, il est possible de trouver des solutions alternatives. Grâce à son expertise, votre constructeur de maison dans le Nord pourra vous renseigner sur les solutions qui s'offrent à vous, en fonction de votre projet et de votre terrain constructible ;",
                "le plancher : dans une construction maçonnée, le plancher bas (en rez-de-chaussée) est une dalle en béton et le plancher d'étage, peut être constitué en béton, bois ou fer. Dans une construction à ossature bois, tous les planchers (bas et étage) peuvent être fabriqués en bois. Ce qui assure une légèreté à la structure ;",
                "les murs : c'est la partie de la maison bois qui se démarque le plus de la maison traditionnelle. En effet, les murs d'une MOB (Maison à ossature bois) sont constitués de montants en bois composant le squelette de l'habitation. Les murs sont généralement préfabriqués en atelier (à l'abri des intempéries), pour être ensuite directement positionnés sur le chantier. Les matériaux isolants de ces maisons (naturels tels que la laine de bois, la ouate de cellulose, la paille, le chanvre, ou des isolants minéraux tels que la laine de verre, la laine de roche, etc.) sont placés sur cette structure, entre les montants. L'ossature est ensuite recouverte à l'intérieur et à l'extérieur. Pour l'intérieur, le placo est le plus souvent utilisé. L'extérieur peut être classique (briques par exemple dans la région Nord), ou plus contemporaine (crépi), mais pour une finition tout bois, il vous faudra alors privilégier le bardage bois.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-10">Quels sont les atouts d&apos;une maison à ossature bois ?</h2>
          <p className="text-gray-700 leading-relaxed mb-10">Si les futurs propriétaires plébiscitent de plus en plus les MOB pour leur habitat, c&apos;est pour plusieurs raisons. En effet, les constructions en bois ont des atouts non-négligeables qui pourront peut-être vous amener à privilégier ce type de maison.</p>
          <div className="space-y-10">
            {[
              {
                title: "L'économie d'énergie",
                content: [
                  "Avoir recours au bois pour faire construire sa maison dans le Nord est un gage de performance énergétique, grâce au pouvoir isolant ce matériau naturel. Une construction à ossature bois présente une isolation thermique accrue par rapport à une maison maçonnée. En effet, pour une épaisseur de paroi moins épaisse (environ 25 cm, pour 33 cm pour une paroi en maçonnerie), le bois présente de meilleures performances isolantes. Ce qui permet de réaliser de belles économies d'énergie.",
                  "Le bois a également une capacité de régulation de l'hygrométrie. Il permet d'équilibrer le taux d'humidité dans une maison et donc la sensation de froid. Le confort des habitants est plus important et nécessite moins de chauffage. Vous aurez ainsi des dépenses moindres en termes de consommation de chauffage.",
                  "Enfin, avec une construction à ossature bois, il est possible de réaliser une double isolation : par l'intérieur et par l'extérieur, ce qui permet de répondre aux critères d'une maison Bepos (Bâtiment à énergie positive). Votre habitation offrira ainsi l'avantage de produire davantage d'énergie qu'elle n'en consomme.",
                ],
              },
              {
                title: "Une maison écologique",
                content: [
                  "Une maison en bois peut être qualifiée de maison éco-respectueuse. En effet, le bois de qualité utilisé par les constructeurs de maison individuelle du Nord d'expérience que nous avons sélectionnés pour vous, est issu de forêts gérées durablement.",
                  "Les chantiers des maisons en bois sont propres et secs, ce qui évite des dépenses d'eau pour nettoyer le matériel utilisé sur votre terrain et le chantier lui-même.",
                  "Par ailleurs, opter pour une maison en ossature bois dans le Nord contribue à réduire les gaz à effet de serre, et permet donc de lutter contre le réchauffement climatique. En effet, une fois coupé et utilisé dans la conception d'une maison, ce matériau 100 % naturel poursuit le stockage du gaz carbonique absorbé lors de sa croissance (1 mètre cube de bois stocke 1 tonne de CO2).",
                  "Enfin, construire sa maison en bois, c'est faire le choix d'un matériau entièrement recyclable.",
                ],
              },
              {
                title: "Des délais de livraison réduits",
                content: [
                  "Une construction en bois permet de gagner des mois de travaux, en moyenne 3 à 4 mois par rapport à une construction maçonnée. Les constructeurs de maison en ossature bois dans le Nord que nous vous conseillons pré fabriquent et assemblent les différents éléments de la structure en atelier. La réduction de la durée des travaux est donc conséquente grâce à la fabrication en amont. L'optimisation des délais de livraison vers le terrain peut avoir un impact au niveau financier, avec des dépenses réduites, notamment si vous payez un loyer ou si vous remboursez des frais intercalaires.",
                ],
              },
              {
                title: "Le gain de place d'une maison en ossature bois dans le Nord",
                content: [
                  "Les maisons à ossature bois ont des cloisons de faible épaisseur, par rapport à une maison en maçonnerie traditionnelle. En moyenne, les cloisons des MOB font 25 cm d'épaisseur, ce qui permet d'augmenter l'espace habitable d'environ 5 à 10 %. Pour une maison de 100 m², vous pourrez ainsi gagner l'équivalent de la surface d'une chambre, ou agrandir votre pièce de vie, en fonction de vos besoins et de ceux de votre famille.",
                ],
              },
              {
                title: "Les possibilités d'aménagements et de personnalisation",
                content: [
                  "Le bois est un matériau qui convient à tous types de terrains grâce à sa légèreté. Il est très modulable et permet des constructions sur mesure dans des lieux inenvisageables pour des constructions maçonnées. Il offre une très grande souplesse architecturale, comme par exemple la possibilité de créer des ouvertures avec de grandes portances, sans nécessairement devoir renforcer le bâti. Esthétiquement, une poutre apparente en bois dans votre intérieur sera moins imposante qu'une poutre béton, pour une même portée. Un logement en bois s'adapte donc à la fois à l'environnement et à vos envies. Votre constructeur dans le Nord-Pas-de-Calais, sera à même de vous proposer une solution 100 % personnalisée pour votre projet immobilier.",
                ],
              },
            ].map((section) => (
              <div key={section.title} className="border-l-4 border-gold pl-8">
                <h3 className="font-display text-xl font-bold text-navy mb-4">{section.title}</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {section.content.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-10">Quels sont les inconvénients d&apos;une construction en bois ?</h2>
          <div className="space-y-10">
            <div className="border-l-4 border-navy/30 pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">L&apos;inertie thermique</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Il s&apos;agit de la capacité d&apos;un matériau à maintenir une température constante. L&apos;inertie thermique est recherchée dans tout logement, afin d&apos;assurer un confort climatique à ses habitants. Elle dépend, entre autres, des matériaux composants une maison : plus ils sont lourds (béton ou pierre, par exemple), plus l&apos;inertie est importante.</p>
                <p>La faible inertie thermique du bois constitue son principal désavantage, notamment en été.</p>
                <p>Mais il existe des solutions pour contourner ce problème. Les professionnels qualifiés que nous avons sélectionnés, les connaissent bien. Ils vous proposeront par exemple :</p>
                <ul className="space-y-3 pl-2">
                  <CheckItem text="la mise en place d'autres masses thermiques à l'intérieur de votre maison, comme des murs de refend en béton, du carrelage au sol, une imposante cheminée en pierre, etc. ;" />
                  <CheckItem text="une isolation végétale, afin de limiter l'influence des variations extrêmes de température." />
                </ul>
              </div>
            </div>
            <div className="border-l-4 border-navy/30 pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">L&apos;entretien d&apos;une maison en ossature bois dans le Nord</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Vous avez opté pour un bardage bois, afin de donner une esthétique naturelle à votre maison ? Le bois est un matériau vivant, qui est soumis au vieillissement. Certains aiment l&apos;aspect grisé des bardages bois obtenu au fil des ans, d&apos;autres non. Si vous faites partie de ces derniers, vous devrez donc entretenir régulièrement votre revêtement extérieur afin de conserver la couleur naturelle du bois. Dans un premier temps, il vous faudra le lasurer ou le peindre (avec une peinture microporeuse) un an après avoir installé le bardage. Puis, il convient de passer une couche de peinture ou de lasure tous les 5 à 7 ans.</p>
                <p>Si vous ne voulez pas vous astreindre à la corvée de l&apos;entretien de votre bardage, il existe plusieurs façons de contourner le problème. Choisissez par exemple un autre type de revêtement : le bardage composite, métallique, ou l&apos;enduit de façade ne demandent quasiment aucune action. En revanche, si vous êtes très attaché au bardage bois, pourquoi ne pas opter pour un bardage en bois brûlé ? Il s&apos;agit d&apos;une technique ancestrale japonaise (aussi appelée Shou Sugi Ban), qui est de plus en plus tendance.</p>
              </div>
            </div>
            <div className="border-l-4 border-navy/30 pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">Le traitement du bois de l&apos;ossature</h3>
              <p className="text-gray-700 leading-relaxed">Les termites et autres insectes xylophages sont friands de bois. Il est donc recommandé de traiter en profondeur tous les éléments constitués de ce matériau. Le traitement préventif peut être effectué par imprégnation (les structures sont trempées directement dans un bain de solution insecticide) ou par pulvérisation.</p>
            </div>
            <div className="border-l-4 border-navy/30 pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">L&apos;image de la maison bois</h3>
              <p className="text-gray-700 leading-relaxed">En France, la maison en bois n&apos;est pas encore entrée dans les mœurs, contrairement aux pays nordiques, au Canada ou encore aux États-Unis qui comptent une part importante de maisons à ossature bois. Les constructions en bois, même si elles sont en augmentation, souffrent d&apos;une mauvaise image. On les associe souvent à des cabanes de chasseurs à bas prix et à des habitations pour petits budgets. Par ailleurs, leur résistance est parfois critiquée (à tort, car le bois est un matériau robuste) et les futurs propriétaires leur préfèrent souvent une construction traditionnelle en pierre.</p>
            </div>
          </div>
          <p className="mt-10 text-gray-700 leading-relaxed">Comme pour tout type de construction, le bois présente des avantages et des inconvénients (qui, pour certains, peuvent être contournés). Que ce soit pour son côté esthétique, écologique ou économique, vous êtes séduits par une construction d&apos;une maison en ossature bois dans le Nord ? Prenez contact avec un constructeur à qui nous avons accordé notre confiance, afin de discuter de votre projet immobilier en toute sérénité.</p>
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

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-navy text-center mb-8">Pour aller plus loin</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "Constructeur maison ossature bois Lille", href: "/constructeur-maison-bois-nord/lille" },
              { label: "Constructeur maison ossature bois Arras", href: "/constructeur-maison-bois-nord/arras" },
              { label: "Constructeur maison ossature bois Douai", href: "/constructeur-maison-bois-nord/douai" },
              { label: "Constructeur maison ossature bois Valenciennes", href: "/constructeur-maison-bois-nord/valenciennes" },
              { label: "Constructeur maison ossature bois Villeneuve d'Ascq", href: "/constructeur-maison-bois-nord/villeneuve-dascq" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="px-5 py-2.5 border-2 border-navy text-navy font-medium rounded-lg hover:bg-navy hover:text-white transition-colors text-sm">{link.label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* Autres types de maisons */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-xl font-bold text-navy text-center mb-6">Découvrez aussi nos autres types de constructions</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "Maison traditionnelle", href: "/constructeur-maison-traditionnelle-nord" },
              { label: "Maison contemporaine", href: "/constructeur-de-maison-contemporaine-nord" },
              { label: "Maison cubique", href: "/constructeur-maison-cubique-nord" },
              { label: "Plain-pied", href: "/constructeur-maison-plain-pied-nord" },
              { label: "Maison passive", href: "/constructeur-nord-maison-passive" },
              { label: "Maison individuelle", href: "/constructeur-maison-individuelle-nord" },
            ].map((type) => (
              <Link key={type.href} href={type.href} className="px-5 py-2.5 bg-white border-2 border-gray-200 text-navy font-medium rounded-lg hover:border-gold hover:text-gold transition-colors text-sm">
                {type.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
