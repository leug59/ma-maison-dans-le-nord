import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quel budget pour une construction de maison dans le Nord ?",
  description: "Prix moyen terrain et construction dans le Nord, variables qui font fluctuer le budget : terrain, architecture, superficie, matériaux, chauffage, finitions.",
  alternates: { canonical: "/budget" },
};

export default function BudgetPage() {
  return (
    <>
      <section className="bg-navy py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">Votre construction dans le Nord</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">Quel budget pour une construction de maison dans le Nord ?</h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">Prix du terrain, coût de construction, variables à prendre en compte : tout pour estimer au mieux votre projet immobilier.</p>
          <Link href="/devis" className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors">Demander un devis gratuit</Link>
        </div>
      </section>

      <section className="px-4 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/budget-maison.png" alt="Budget construction maison dans le Nord" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" priority />
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Quel est le coût actuel d&apos;une construction dans la région Nord-Pas-de-Calais ?</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>L&apos;un des premiers soucis que rencontrent les futurs propriétaires est la question financière. Afin de négocier un prêt immobilier avec votre banquier, vous devez savoir quelle enveloppe budgétaire consacrer à votre projet. Alors, comment estimer au mieux le coût de votre futur logement ? Quels sont les paramètres qui peuvent faire varier le chiffrage d&apos;une construction ? Dans cet article, nous vous donnons des éléments de réponse, afin d&apos;apprécier au mieux quel budget allouer à une construction de maison dans le Nord.</p>
            <p>Le prix des terrains et de la construction (comprenant les matériaux et la main d&apos;œuvre), ne cessent de fluctuer. La tendance nationale du coût d&apos;un terrain est à l&apos;augmentation : 1 % entre 2018 et 2019. On constate tout de même que le coût du mètre carré tend à s&apos;accroître moins rapidement depuis 3 ans. Pour la construction, la hausse est un peu plus importante : de l&apos;ordre de 2,4 % au niveau national.</p>
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {[
              { label: "Prix moyen d'un terrain (875 m²)", value: "69 885 €", sub: "soit 80 € le m²" },
              { label: "Prix moyen d'une maison (120 m²)", value: "171 275 €", sub: "soit 1 349 € le m²" },
              { label: "Budget total moyen", value: "241 160 €", sub: "terrain + construction" },
            ].map((stat) => (
              <div key={stat.label} className="bg-navy rounded-xl p-6 text-center">
                <p className="text-white/60 text-sm mb-2">{stat.label}</p>
                <p className="font-display text-3xl font-bold text-gold mb-1">{stat.value}</p>
                <p className="text-white/50 text-xs">{stat.sub}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-500 text-sm">À noter que toutes les données chiffrées mentionnées dans l&apos;article sont issues du site du Ministère de la transition écologique. Les données les plus récentes ont été publiées le 24 novembre 2020 (pour des statistiques concernant les constructions neuves de 2019).</p>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Quelles sont les variables qui peuvent faire fluctuer le budget d&apos;une construction de maison dans le Nord ?</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed mb-10">
            <p>Les prix indiqués ci-dessus ne sont que des prix indicatifs, le budget de votre projet de construction est soumis à des nombreux paramètres, qui pourront faire évoluer à la hausse ou à la baisse le prix de votre maison.</p>
            <p>Le fait de s&apos;adjoindre les services d&apos;un professionnel qualifié dans le domaine de la construction, vous permettra de prendre la pleine mesure de ces facteurs et vous aidera à faire des choix avisés. Ainsi, nous avons soigneusement sélectionné pour vous des constructeurs de maison dans le Nord experts dans leur domaine et reconnus pour leur professionnalisme.</p>
          </div>
          <div className="space-y-8">
            {[
              {
                title: "Le terrain",
                body: "Un terrain en campagne ou en pleine agglomération lilloise n'aura pas le même coût. De même que s'il est viabilisé ou non. Dans ce dernier cas, il faut penser au tarif de la viabilisation qui peut parfois être très onéreux, en fonction de la distance de votre future habitation par rapport aux réseaux. Réfléchissez-y en amont, car c'est un poste de dépense qui peut vite chiffrer et faire augmenter votre budget de construction de maison dans le Nord. En lotissement, les terrains sont souvent un peu plus chers pour des surfaces moins importantes, mais ils sont prêts à bâtir, viabilisés et dans un environnement souvent aménagé.",
              },
              {
                title: "L'architecture de la maison",
                body: "On n'y pense pas forcément, mais l'architecture d'un bâtiment a des répercussions plus ou moins importantes sur son prix. Par exemple, une maison cubique aura un coût de construction moindre par rapport à une villa combinant plusieurs volumes. Pour cette dernière, le prix des façades, des divers matériaux et de la main d'œuvre seront plus élevés. De même, une maison sur sous-sol ou à étages vous coûtera plus cher qu'une maison de plain-pied. Le standing de votre demeure, constitue lui aussi une variable dans votre futur budget de construction de maison dans le Nord. En effet, vous n'aurez pas les mêmes coûts, si vous choisissez une habitation classique ou un logement haut de gamme, avec des matériaux et des équipements de luxe.",
              },
              {
                title: "La superficie de la maison",
                body: "Pour connaître le prix total de votre construction, le calcul est simple : il suffit de multiplier le nombre de mètres carrés par le prix au m². Bien sûr, plus la maison sera grande, plus le coût des travaux sera important. L'intérêt de faire appel à un constructeur de maison dans le Nord prend ici tout son sens. En effet, lors de la phase d'étude de votre projet, ce professionnel va examiner vos besoins réels, qu'il mettra en lien avec votre budget. Il ne va pas forcément vous proposer d'augmenter la surface de votre logement, mais vous permettra plutôt d'optimiser tous les espaces et de positionner les différentes pièces et les équipements, afin d'économiser chaque mètre carré.",
              },
              {
                title: "Les matériaux utilisés",
                body: "Outre l'esthétique de votre logement, il vous faut considérer les matériaux qui seront utilisés pour la construction, car ils auront une incidence sur le prix final. Si vous optez pour une maison en bois dans le Nord, elle vous coûtera un peu plus cher qu'une construction traditionnelle. En revanche, le temps de montage est beaucoup moins long, ce qui peut vous permettre de faire quelques mois d'économies de loyer. Par ailleurs, les économies d'énergie réalisées dans le futur, grâce aux propriétés calorifuges du bois auront des retombées financières positives. La couverture a aussi un poids important dans le budget d'une maison : le prix d'un toit plat en bac acier ne sera pas le même que celui d'un toit deux pentes en tuiles, par exemple.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-gold pl-8">
                <h3 className="font-display text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-gold pl-8 mb-10">
            <h3 className="font-display text-xl font-bold text-navy mb-3">Le mode de chauffage choisi</h3>
            <p className="text-gray-700 leading-relaxed mb-6">En lien avec les matériaux utilisés pour la structure de votre logement, le mode de chauffage peut faire varier le coût de votre projet immobilier. Dans ce tableau comparatif, vous trouverez différents modes de chauffage et leur impact sur le montant de la construction d&apos;une maison dans le Nord.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-4 py-3 rounded-tl-lg">Mode de chauffage</th>
                    <th className="text-right px-4 py-3">Prix moyen (Nord)</th>
                    <th className="text-right px-4 py-3 rounded-tr-lg">Prix au m²</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Gaz", "167 996 €", "1 344 €"],
                    ["Tout électrique", "172 997 €", "1 380 €"],
                    ["Électricité et bois en appoint", "164 451 €", "1 296 €"],
                    ["Énergies renouvelables", "184 432 €", "1 368 €"],
                  ].map(([mode, prix, m2], i) => (
                    <tr key={mode} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 text-gray-700">{mode}</td>
                      <td className="px-4 py-3 text-right text-gray-700 font-medium">{prix}</td>
                      <td className="px-4 py-3 text-right text-gray-700 font-medium">{m2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="border-l-4 border-gold pl-8 mb-10">
            <h3 className="font-display text-xl font-bold text-navy mb-3">Les prestations intérieures</h3>
            <p className="text-gray-700 leading-relaxed">Votre budget peut également être impacté par le choix des matériaux intérieurs, comme les sols, par exemple. Carrelage, parquet massif, stratifié, etc., n&apos;ont pas le même coût en achat de matière première, ni en prix de main d&apos;œuvre pour la pose. De même, la gamme de matériau que vous allez choisir (basique, milieu de gamme ou haut de gamme), aura des conséquences sur le prix. Ainsi, vous pourrez trouver un carrelage à 15-20 €/m² en entrée de prix, alors qu&apos;il vous en coûtera plus de 200 €/m² pour un carrelage haut de gamme. Les équipements tels que la cuisine peuvent également vite faire gonfler une facture.</p>
          </div>

          <div className="border-l-4 border-gold pl-8">
            <h3 className="font-display text-xl font-bold text-navy mb-3">Les finitions souhaitées</h3>
            <p className="text-gray-700 leading-relaxed mb-6">Vous ne paierez pas le même prix pour une maison entièrement finie ou si vous vous chargez de réaliser des travaux, plus ou moins importants. Voici un tableau comparatif de ce que peut vous coûter votre logement en moyenne, en fonction de ses finitions.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left px-4 py-3 rounded-tl-lg">Finition souhaitée</th>
                    <th className="text-right px-4 py-3">Prix moyen (Nord)</th>
                    <th className="text-right px-4 py-3 rounded-tr-lg">Prix au m²</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Maison totalement terminée", "189 789 €", "1 418 €"],
                    ["Prête à décorer", "170 129 €", "1 353 €"],
                    ["Hors d'eau hors d'air", "149 010 €", "1 204 €"],
                  ].map(([finition, prix, m2], i) => (
                    <tr key={finition} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-4 py-3 text-gray-700">{finition}</td>
                      <td className="px-4 py-3 text-right text-gray-700 font-medium">{prix}</td>
                      <td className="px-4 py-3 text-right text-gray-700 font-medium">{m2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-gray-700 leading-relaxed">Dans le budget d&apos;une maison, le prix de la construction tient une place importante. Mais il faut également mesurer ce qu&apos;elle pourra vous coûter dans le futur. C&apos;est l&apos;ensemble de ces éléments qui doit être pris en compte et il est donc nécessaire de penser au coût d&apos;une habitation neuve dans sa globalité. Nos partenaires constructeurs de maison individuelle dans le Nord sont à même de vous accompagner de l&apos;étude de votre projet à la réalisation finale de votre logement.</p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Estimez votre projet</h2>
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
