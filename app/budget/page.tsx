import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Quel budget pour une construction de maison dans le Nord ?",
  description: "Prix moyen terrain et construction dans le Nord, variables qui font fluctuer le budget : terrain, architecture, superficie, matériaux, chauffage, finitions.",
  alternates: { canonical: "/budget" },
  openGraph: buildOpenGraph("/budget", "website"),
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
            <Image src="/images/budget-maison.png" alt="Estimation du coût de construction d'une maison neuve dans le Nord" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" priority />
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Quel est le coût actuel d&apos;une construction dans la région Nord-Pas-de-Calais ?</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>L&apos;un des premiers soucis que rencontrent les futurs propriétaires est la question financière. Afin de négocier un prêt immobilier avec votre banquier, vous devez savoir quelle enveloppe budgétaire consacrer à votre projet. Alors, comment estimer au mieux le coût de votre futur logement ? Quels sont les paramètres qui peuvent faire varier le chiffrage d&apos;une construction ? Dans cet article, nous vous donnons des éléments de réponse, afin d&apos;apprécier au mieux quel budget allouer à une construction de maison dans le Nord.</p>
            <p>Les prix des terrains et de la construction ont significativement évolué depuis 2020. En 2026, l&apos;inflation des matériaux, la mise en œuvre de la RE2020 et la tension foncière dans les agglomérations nordistes ont poussé les prix à la hausse. Dans la région Hauts-de-France, le coût de construction a progressé d&apos;environ 25 % en 5 ans, avec des disparités importantes selon les secteurs.</p>
          </div>
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {[
              {
                label: "Prix moyen d'un terrain (600 m²)", value: "72 000 €", sub: "soit 120 € le m² en moyenne",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                label: "Prix moyen d'une maison (120 m²)", value: "210 000 €", sub: "soit 1 750 € le m² en moyenne",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
              {
                label: "Budget total moyen", value: "282 000 €", sub: "terrain + construction (hors frais)",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((stat) => (
              <div key={stat.label} className="bg-navy rounded-xl p-6 text-center">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gold mx-auto mb-3">
                  {stat.icon}
                </div>
                <p className="text-white/60 text-sm mb-2">{stat.label}</p>
                <p className="font-display text-3xl font-bold text-gold mb-1">{stat.value}</p>
                <p className="text-white/50 text-xs">{stat.sub}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-500 text-sm">Estimations 2026 basées sur les prix constatés dans la région Nord-Pas-de-Calais. Ces chiffres varient selon la commune, les prestations et le type de construction choisi.</p>
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
                icon: (
                  <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: "L'architecture de la maison",
                body: "On n'y pense pas forcément, mais l'architecture d'un bâtiment a des répercussions plus ou moins importantes sur son prix. Par exemple, une maison cubique aura un coût de construction moindre par rapport à une villa combinant plusieurs volumes. Pour cette dernière, le prix des façades, des divers matériaux et de la main d'œuvre seront plus élevés. De même, une maison sur sous-sol ou à étages vous coûtera plus cher qu'une maison de plain-pied. Le standing de votre demeure, constitue lui aussi une variable dans votre futur budget de construction de maison dans le Nord. En effet, vous n'aurez pas les mêmes coûts, si vous choisissez une habitation classique ou un logement haut de gamme, avec des matériaux et des équipements de luxe.",
                icon: (
                  <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
              },
              {
                title: "La superficie de la maison",
                body: "Pour connaître le prix total de votre construction, le calcul est simple : il suffit de multiplier le nombre de mètres carrés par le prix au m². Bien sûr, plus la maison sera grande, plus le coût des travaux sera important. L'intérêt de faire appel à un constructeur de maison dans le Nord prend ici tout son sens. En effet, lors de la phase d'étude de votre projet, ce professionnel va examiner vos besoins réels, qu'il mettra en lien avec votre budget. Il ne va pas forcément vous proposer d'augmenter la surface de votre logement, mais vous permettra plutôt d'optimiser tous les espaces et de positionner les différentes pièces et les équipements, afin d'économiser chaque mètre carré.",
                icon: (
                  <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                ),
              },
              {
                title: "Les matériaux utilisés",
                body: "Outre l'esthétique de votre logement, il vous faut considérer les matériaux qui seront utilisés pour la construction, car ils auront une incidence sur le prix final. Si vous optez pour une maison en bois dans le Nord, elle vous coûtera un peu plus cher qu'une construction traditionnelle. En revanche, le temps de montage est beaucoup moins long, ce qui peut vous permettre de faire quelques mois d'économies de loyer. Par ailleurs, les économies d'énergie réalisées dans le futur, grâce aux propriétés calorifuges du bois auront des retombées financières positives. La couverture a aussi un poids important dans le budget d'une maison : le prix d'un toit plat en bac acier ne sera pas le même que celui d'un toit deux pentes en tuiles, par exemple.",
                icon: (
                  <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-gold pl-8">
                <div className="flex items-start gap-2 mb-3">
                  {item.icon}
                  <h3 className="font-display text-xl font-bold text-navy">{item.title}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-gold pl-8 mb-10">
            <div className="flex items-start gap-2 mb-3">
              <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
              <h3 className="font-display text-xl font-bold text-navy">Le mode de chauffage choisi</h3>
            </div>
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
                    ["Pompe à chaleur air/eau", "225 000 €", "1 875 €"],
                    ["Tout électrique (radiateurs)", "200 000 €", "1 667 €"],
                    ["Gaz naturel", "195 000 €", "1 625 €"],
                    ["Électricité + bois en appoint", "190 000 €", "1 583 €"],
                    ["Énergies renouvelables (solaire+PAC)", "240 000 €", "2 000 €"],
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
            <div className="flex items-start gap-2 mb-3">
              <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
              <h3 className="font-display text-xl font-bold text-navy">Les prestations intérieures</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">Votre budget peut également être impacté par le choix des matériaux intérieurs, comme les sols, par exemple. Carrelage, parquet massif, stratifié, etc., n&apos;ont pas le même coût en achat de matière première, ni en prix de main d&apos;œuvre pour la pose. De même, la gamme de matériau que vous allez choisir (basique, milieu de gamme ou haut de gamme), aura des conséquences sur le prix. Ainsi, vous pourrez trouver un carrelage à 15-20 €/m² en entrée de prix, alors qu&apos;il vous en coûtera plus de 200 €/m² pour un carrelage haut de gamme. Les équipements tels que la cuisine peuvent également vite faire gonfler une facture.</p>
          </div>

          <div className="border-l-4 border-gold pl-8">
            <div className="flex items-start gap-2 mb-3">
              <svg className="w-5 h-5 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
              <h3 className="font-display text-xl font-bold text-navy">Les finitions souhaitées</h3>
            </div>
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
                    ["Maison totalement terminée", "240 000 €", "2 000 €"],
                    ["Prête à décorer", "210 000 €", "1 750 €"],
                    ["Hors d'eau hors d'air", "185 000 €", "1 542 €"],
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

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-4">Les frais annexes à ne pas oublier dans votre budget</h2>
          <p className="text-gray-700 leading-relaxed mb-8">Le prix du terrain et le coût de construction ne constituent pas la totalité de votre budget. De nombreux frais annexes s&apos;ajoutent et peuvent représenter 25 000 à 45 000 € supplémentaires. Les anticiper dès le départ vous évitera de mauvaises surprises lors de la négociation de votre prêt immobilier.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg">Poste de dépense</th>
                  <th className="text-right px-4 py-3 rounded-tr-lg">Fourchette estimée</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Frais de notaire (acte de vente terrain)", "7 à 8 % du prix du terrain"],
                  ["Taxe d'aménagement (commune + département)", "3 000 – 8 000 €"],
                  ["Raccordements eau, électricité, assainissement", "3 000 – 8 000 €"],
                  ["Assurance dommages-ouvrage (obligatoire)", "3 à 5 % du coût de construction"],
                  ["Étude de sol G2 (obligatoire depuis 2020)", "1 500 – 3 000 €"],
                  ["Garantie bancaire (caution ou hypothèque)", "1 à 2 % du montant emprunté"],
                  ["Branchement gaz / fibre / télécom", "500 – 2 000 €"],
                  ["Aménagements extérieurs (clôture, terrasse, allée)", "5 000 – 15 000 €"],
                ].map(([poste, montant], i) => (
                  <tr key={poste} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-gray-700">{poste}</td>
                    <td className="px-4 py-3 text-right text-navy font-semibold">{montant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-5 bg-gold/10 border border-gold/30 rounded-xl">
            <p className="text-gray-700 text-sm leading-relaxed"><strong className="text-navy">Bon à savoir :</strong> l&apos;assurance dommages-ouvrage est une obligation légale (loi Spinetta 1978). Elle vous couvre pendant 10 ans sur les désordres structurels, sans attendre un jugement de responsabilité. Ne jamais construire sans elle.</p>
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
