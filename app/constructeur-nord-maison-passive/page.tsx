import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildOpenGraph } from "@/app/_lib/og";
import { buildServiceSchema } from "@/app/_lib/schema";


export const metadata: Metadata = {
  title: "Maison passive dans le Nord : tout ce qu'il faut savoir",
  description: "Fonctionnement, origines, critères de labellisation : tout sur la maison passive dans le Nord. Économies d'énergie, confort et écologie.",
  alternates: { canonical: "/constructeur-nord-maison-passive" },
  openGraph: buildOpenGraph("/constructeur-nord-maison-passive", "website"),
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

export default function MaisonPassivePage() {
  return (
    <>
      <section className="bg-navy py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">Types de constructions — Hauts-de-France</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">Maison passive dans le Nord : tout ce qu&apos;il faut savoir</h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">Économie d&apos;énergie, écologie et faible coût de chauffage : découvrez comment la construction passive transforme votre confort de vie.</p>
          <Link href="/devis" className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors">Demander un devis gratuit</Link>
        </div>
      </section>

      <section className="px-4 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/maison-passive.jpg" alt="Maison passive dans le Nord" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" priority />
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed">Vous rêvez d&apos;une maison qui allie à la fois économie d&apos;énergie, écologie et faible coût de chauffage ? C&apos;est possible, avec la construction passive. Vous ne connaissez pas vraiment ce qui se cache sous cette appellation et vous avez peur que ce type d&apos;habitation ne corresponde pas vraiment à vos attentes ? Vous allez découvrir comment et pourquoi les termes isolation, ponts thermiques, étanchéité à l&apos;air ou encore contrôle de la ventilation caractérisent une maison passive dans le Nord.</p>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Quel est le fonctionnement d&apos;un logement passif ?</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>La finalité d&apos;une maison passive est d&apos;assurer un confort maximal à ses habitants, en été comme en hiver. Comment est-ce possible ? Le concept est tout simple. Dans une construction traditionnelle, le rôle du chauffage est de compenser la déperdition de chaleur. La maison passive fonctionne de façon différente. En hiver, cette habitation recueille, accumule et conserve à l&apos;intérieur du logement toutes les sources énergétiques à sa disposition. Ces dernières proviennent de la chaleur des occupants, appareils électriques et électroménagers, mais sont également puisées à l&apos;extérieur (rayons du soleil). C&apos;est ce qui permet de ne pas avoir froid, tout en évitant au maximum le recours à un moyen de chauffage. Mais qu&apos;en est-il en été : fait-il chaud dans une maison passive ? La conception de ce type de logement est aussi pensée pour cette saison : elle permet d&apos;éviter les surchauffes, en se protégeant du rayonnement solaire (mise en place de brise-vues, par exemple). Mais aussi, et surtout, grâce au pouvoir isolant et à l&apos;étanchéité à l&apos;air du bâti, qui, couplés à une VMC à échangeur thermique, assurent une protection contre les sources de chaleur extérieures et permettent une régulation optimisée de la température intérieure.</p>
            <p>Les constructeurs du Nord à qui nous accordons notre confiance, connaissent parfaitement le fonctionnement d&apos;une habitation passive et sa mise en œuvre.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Quelles sont les origines de la construction passive ?</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Il s&apos;agit d&apos;un concept, ou plutôt d&apos;une façon de concevoir la maison relativement récente : celle d&apos;une habitation très basse consommation. C&apos;est l&apos;allemand Wolfgang Feist, visionnaire et déjà préoccupé par l&apos;écologie et l&apos;économie d&apos;énergies, qui pensa la première maison passive à la fin des années 1980.</p>
            <p>En France, c&apos;est en 1991, que fut construit le premier bâtiment passif, un immeuble de 4 étages. Ce type de construction n&apos;a cessé de croître, surtout pour les bâtiments collectifs accueillant du public (écoles, crèches, bureaux, bibliothèques, etc.). Depuis 2007, ce sont pas moins de 3 000 bâtiments passifs qui ont vu le jour en France métropolitaine. De plus en plus de constructeurs de maisons individuelles dans le Nord proposent la construction d&apos;une maison passive à leurs clients pour tous les avantages qu&apos;elle présente. Bien qu&apos;un peu plus onéreuse qu&apos;une construction traditionnelle, elle permet de réaliser de belles économies d&apos;argent au long cours.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Comment conserver la chaleur à l&apos;intérieur de votre maison passive dans le Nord ?</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>La conservation de la chaleur intérieure est la combinaison de plusieurs éléments.</p>
            <p>Tout d&apos;abord, l&apos;isolation, qui est primordiale. Afin de garder la chaleur dans une maison et d&apos;éviter de la laisser entrer en été, l&apos;isolation des parois est indispensable. En effet, ce sont à travers les parois (en premier lieu le toit, puis les murs et enfin le sol) que se produit la perte des apports calorifiques la plus importante. Les parois vitrées et les ouvrants (fenêtres et portes) ont également leur importance en matière d&apos;échanges thermiques. Le triple vitrage est ainsi recommandé pour atteindre la performance isolante préconisée pour les maisons passives dans le Nord.</p>
            <p>En complément de l&apos;isolation des parois, la notion de pont thermique doit aussi être prise en compte. Ce sont des points structurels ou ponctuels (jonction entre des parois par exemple) qui peuvent laisser passer la chaleur ou le froid. Il faut donc les supprimer pour assurer une parfaite isolation de l&apos;habitation. En pratique, il est préconisé d&apos;isoler par l&apos;extérieur pour y parvenir.</p>
            <p>Dans un bâtiment passif, l&apos;isolation à elle seule ne suffit pas. L&apos;étanchéité et la ventilation sont également indispensables. L&apos;étanchéité est assurée par un film (pare-vapeur, le plus souvent) qui englobe sans interruption toute la surface chauffée. La mise en œuvre doit être parfaite pour assurer une herméticité du bâti. Les constructeurs de maison à Lille et de tout le département du Nord que nous avons rigoureusement choisis pour vous, seront à même de vous garantir un travail soigné.</p>
            <p>Dans une maison passive, les fuites d&apos;air sont à proscrire et les échanges entre air intérieur et extérieur doivent se faire uniquement par un système de ventilation adapté. Le but étant de récupérer la chaleur de l&apos;air qui sort, afin de réchauffer l&apos;air qui entre. Par ailleurs, une ventilation double flux assure une filtration et donc une excellente qualité de l&apos;air.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Pourquoi diminuer votre consommation de chauffage ?</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Comme vous l&apos;expliquera votre constructeur de maison passive dans le Nord, les intérêts de diminuer la consommation de chauffage sont multiples :</p>
            <ul className="space-y-3 pl-2">
              <CheckItem text="pour avoir un impact positif sur la pollution : les énergies pour produire du chauffage sont plus ou moins polluantes, selon les sources. Mais elles polluent quand même… Il faut donc consommer moins, afin de réduire la pollution. Celle-ci peut être atmosphérique mais également olfactive, sonore ou visuelle, en fonction du type de chauffage utilisé ;" />
              <CheckItem text="pour l'aspect financier : le coût des différentes énergies, que ce soit le gaz, l'électricité, le fioul, ou autres, ne cesse d'augmenter. De plus, l'investissement de départ pour faire installer certains moyens de chauffage est également important. En optant pour une maison passive, vous pourrez réaliser des économies conséquentes sur ces postes de dépense ;" />
              <CheckItem text="pour votre confort : le chauffage crée des zones chaudes et par conséquent, des zones froides, ce qui accentue le sentiment d'inconfort des occupants d'une maison. Pour pallier ce problème, on a donc tendance à augmenter le chauffage… ;" />
              <CheckItem text="pour gagner en esthétique : certains systèmes de chauffage peuvent être design et même servir d'éléments de décoration intérieure, comme les cheminées. Mais d'autres le sont beaucoup moins, comme les radiateurs ou les splits de climatisation réversible, par exemple." />
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Une maison passive est-elle vraiment écologique ?</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>L&apos;économie d&apos;énergie dans un logement passif est conséquente par rapport à une habitation qui respecte la RT 2012 (Réglementation Thermique 2012). En effet, la dépense énergétique pour le chauffage est 2 fois moins importante (et 10 fois moins importante que dans un bâtiment construit antérieurement à l&apos;application de la RT 2012). L&apos;impact de la consommation énergétique d&apos;une telle construction sur l&apos;environnement est donc minime.</p>
            <p>Si en plus de la performance énergétique, la maison est conçue avec des matériaux écologiques et naturels, comme dans une construction à ossature bois, le retentissement sur l&apos;environnement n&apos;en sera que meilleur. C&apos;est d&apos;ailleurs le matériau utilisé dans 80 % des maisons passives.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Quelles sont les contraintes architecturales et esthétiques d&apos;une habitation passive ?</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Outre les obligations énergétiques imposant des caractéristiques précises en matière d&apos;isolation, de ventilation, etc., il n&apos;y a aucune contrainte pour une construction passive. La technique utilisée par votre constructeur de maison dans le Nord et l&apos;esthétique ne sont pas imposées. En fonction de vos envies, votre future maison passive pourra donc ressembler à une construction traditionnelle, moderne, ou encore à une maison cubique du Nord, et être fabriquée en béton, en briques, en bois, etc. Tout peut être envisagé pour une construction passive : votre projet demeure entièrement personnalisable.</p>
            <p>S&apos;il n&apos;y a aucune règle architecturale à respecter, l&apos;orientation de l&apos;habitation, devra toutefois être optimisée afin d&apos;obtenir un apport solaire maximal. Votre constructeur de maison passive dans le Nord, sélectionné par nos soins pour sa qualification dans ce domaine, saura vous conseiller au mieux quant au positionnement de votre maison sur son terrain.</p>
            <p>Enfin, les habitations passives ont souvent des points communs :</p>
            <ul className="space-y-3 pl-2">
              <CheckItem text="de grandes surfaces vitrées au sud, afin de profiter au maximum de l'énergie solaire et peu de fenêtres au nord, afin d'éviter les déperditions de chaleur ;" />
              <CheckItem text="une structure dense, pour avoir le moins de surface extérieure à isoler." />
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Quels sont les critères pour que ma construction soit labellisée maison passive ?</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Tous les constructeurs ne sont pas à même de vous proposer la construction d&apos;un logement passif. En effet, il doit répondre à des normes et des critères précis, qu&apos;il convient de respecter scrupuleusement. Les constructeurs de maison du Nord-Pas-de-Calais que nous vous recommandons ont une expertise reconnue dans ce domaine.</p>
            <p>Contrairement aux maisons BBC (Bâtiment Basse Consommation), qui sont soumises à la RT2012 depuis le 1er janvier 2013 pour les bâtiments résidentiels, il n&apos;y a aucune réglementation française pour la maison passive. Cette dernière est dotée d&apos;un label et est définie par un mode de construction, avec des normes spécifiques concernant les performances énergétiques (4 critères doivent être respectés). La certification de votre maison passive sera l&apos;assurance que ces éléments ont bien été respectés. En quoi consiste cette certification ? Elle va permettre de valider la conception de votre maison, calculer les consommations, tester l&apos;étanchéité à l&apos;air et suivre les consommations, selon les 4 critères suivants :</p>
            <ul className="space-y-3 pl-2">
              <CheckItem text="les besoins en chauffage doivent être inférieurs à 15 kWh/m² par an ou la puissance de chauffe doit être inférieure à 10 W/m² ;" />
              <CheckItem text="les besoins en énergie primaire totale (dont l'électroménager) ne peuvent être supérieurs à 120 kWh/m² par an ;" />
              <CheckItem text="les valeurs de l'étanchéité à l'air, selon la norme européenne n50, doivent être inférieures à 0,60 volumes/heure ;" />
              <CheckItem text="il est autorisé moins de 10 % d'heures de surchauffe annuelle (température supérieure à 25 °C)." />
            </ul>
            <p>La construction passive est séduisante par bien des aspects. Elle doit cependant être conçue par un professionnel expert dans ce domaine, qui respecte toutes les normes de ces habitations. Prenez contact avec un constructeur de maison passive dans le Nord soigneusement sélectionné par nos soins, pour avoir l&apos;assurance d&apos;un travail de qualité pour votre future demeure.</p>
          </div>
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
              { label: "Constructeur maison passive Lille", href: "/constructeur-nord-maison-passive/lille" },
              { label: "Constructeur maison passive Douai", href: "/constructeur-nord-maison-passive/douai" },
              { label: "Constructeur maison passive Arras", href: "/constructeur-nord-maison-passive/arras" },
              { label: "Constructeur maison passive Valenciennes", href: "/constructeur-nord-maison-passive/valenciennes" },
              { label: "Constructeur maison passive Lens", href: "/constructeur-nord-maison-passive/lens" },
              { label: "Constructeur maison passive Béthune", href: "/constructeur-nord-maison-passive/bethune" },
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
              { label: "Ossature bois", href: "/constructeur-maison-bois-nord" },
              { label: "Plain-pied", href: "/constructeur-maison-plain-pied-nord" },
              { label: "Maison individuelle", href: "/constructeur-maison-individuelle-nord" },
            ].map((type) => (
              <Link key={type.href} href={type.href} className="px-5 py-2.5 bg-white border-2 border-gray-200 text-navy font-medium rounded-lg hover:border-gold hover:text-gold transition-colors text-sm">
                {type.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema({
          name: "Construction de maison passive dans le Nord",
          description: metadata.description as string,
          url: "/constructeur-nord-maison-passive",
        })) }}
      />
    </>
  );
}
