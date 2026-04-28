import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildOpenGraph } from "@/app/_lib/og";
import { buildServiceSchema } from "@/app/_lib/schema";


export const metadata: Metadata = {
  title: "Constructeur de maison individuelle dans le Nord",
  description: "Définition, garanties, critères de choix : tout sur la construction de maison individuelle dans le Nord et comment sélectionner le bon constructeur.",
  alternates: { canonical: "/constructeur-maison-individuelle-nord" },
  openGraph: buildOpenGraph("/constructeur-maison-individuelle-nord", "website"),
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

export default function MaisonIndividuellePage() {
  return (
    <>
      <section className="bg-navy py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">Votre construction dans le Nord</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">Constructeur de maison individuelle dans le Nord</h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">Garanties, critères de choix, démarches : tout ce qu&apos;il faut savoir pour confier votre projet à un constructeur de confiance.</p>
          <Link href="/devis" className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors">Demander un devis gratuit</Link>
        </div>
      </section>

      <section className="px-4 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/maison-individuelle.jpg" alt="Constructeur maison individuelle sur mesure dans le Nord" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" priority />
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-5 text-gray-700 leading-relaxed">
          <p>La construction d&apos;un bien immobilier est un projet qui peut être envisagé de diverses manières que ce soit en l&apos;effectuant soi-même ou bien en passant par un constructeur de maison dans le Nord professionnel.</p>
          <p>Cette démarche va donc plus ou moins largement différer en fonction de la méthode adoptée, mais aussi du type de maison que vous souhaitez construire sachant que faire appel à un expert vous assure un certain confort à ce niveau-là. Nous aborderons dans ce qui suit plus spécifiquement la sélection du constructeur pour une maison individuelle dans le Nord avec les critères à privilégier ainsi que ce que cela peut comprendre comme intérêts.</p>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Définition et principaux aspects d&apos;une maison individuelle</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Il est possible de définir une construction individuelle comme tout type de conception de bien immobilier qui n&apos;est pas collectif. Il existe cependant des maisons qu&apos;on peut qualifier d&apos;individuelles bien que ces dernières impliquent plusieurs logements. En effet, le nombre de logements est une caractéristique non exclusive dans la définition globale d&apos;une maison individuelle, du moins du point de vue du plan d&apos;occupation des sols.</p>
            <p>Afin de statuer de manière précise sur l&apos;affiliation d&apos;un bien à la catégorie des constructions individuelles, la superficie et le modèle architectural seront ajoutés aux caractéristiques distinctives aux côtés du nombre de logements. En règle générale, on parle de maison individuelle pure dans le cas où un seul logement est impliqué, là où on appliquera la notion de maison individuelle groupée lorsqu&apos;il s&apos;agit de plusieurs logements uniques. Dans la définition légale, on peut intégrer comme maison individuelle l&apos;habitation ou bien l&apos;immeuble qui peut servir à une application professionnelle si celle-ci ne compte pas plus de deux biens appartenant au maître de l&apos;ouvrage.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Garanties prévues dans le cadre d&apos;une construction de maisons individuelles</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Lors de la procédure de construction d&apos;une maison individuelle dans le Nord comme pratiquement partout ailleurs, le constructeur du projet prendra en charge l&apos;intégralité du processus de mise en place de la réalisation des fondations jusqu&apos;à la dernière finition du bien. Ajoutons à cela que votre constructeur est tenu vis-à-vis de la loi de vous protéger dans le cas d&apos;un incident qui aurait lieu pendant la période des travaux sachant que cette obligation tient 10 ans. Bien entendu, ce dernier est aussi légalement lié pour fournir la maison qu&apos;il s&apos;est engagé à construire dans la marge des termes qui ont été prévus lors de la signature du contrat.</p>
            <p>Concernant les garanties qui vous couvrent dans ce cadre, on notera celle du parfait achèvement qui permet de contrer d&apos;éventuels défauts de conformité lors d&apos;une année entière. La garantie de bon fonctionnement, quant à elle, dure deux ans et concerne les défauts relatifs aux équipements possiblement dissociables de l&apos;habitation. Enfin, la garantie décennale vous protège contre les malfaçons et reste active 10 ans durant.</p>
          </div>
          <div className="mt-10 space-y-8">
            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">CCMI et RT2012</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Le contrat de maison individuelle ou CCMI est un document qui sécurise le projet des particuliers en leur permettant d&apos;éviter les hausses de prix conséquentes ou de potentielles plus-values qui pourraient être imposées par la suite. Ce dernier comprendra un certain nombre de critères et mentions essentielles pour être actif comme :</p>
                <ul className="space-y-3 pl-2">
                  <CheckItem text="Le budget de la construction dans le Nord ;" />
                  <CheckItem text="La date de départ du chantier ;" />
                  <CheckItem text="Les garanties prises en compte ;" />
                  <CheckItem text="La description du bien construit." />
                </ul>
                <p>Lorsqu&apos;il s&apos;agit d&apos;une construction de maison individuelle dans le Nord, le constructeur doit impérativement tenir compte de la RT2012 qui est une réglementation thermique impliquant plusieurs régulations et exigences en matière d&apos;énergie.</p>
              </div>
            </div>
            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">Responsabilité du constructeur</h3>
              <p className="text-gray-700 leading-relaxed">Si le constructeur ne tient pas compte des contraintes et réglementations légales comme celles du CCMI ou de la RT2012, celui-ci s&apos;expose à un risque d&apos;amende pouvant aller jusqu&apos;à 45 000 euros de même que les éventuels dégâts que peut engendrer la non-conformité de la construction. Ce dernier sera aussi tenu de réaliser en cas de manquements l&apos;intégralité des travaux de remise en conformité au sein de l&apos;habitation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Atouts fiscaux et économiques d&apos;une maison individuelle dans le Nord</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>En plus des garanties qui vous sont dues par le contrat de construction de votre maison individuelle dans le Nord, ce type de réalisation vous offre également plusieurs avantages de fiscalité. La conception d&apos;une habitation neuve va par exemple impliquer un taux d&apos;exonération plus ou moins élevé au niveau de la taxe foncière, et ce, pour deux ans.</p>
            <p>Le choix d&apos;un bien neuf signifie également que celui-ci sera construit suivant les dernières normes énergétiques en vigueur ce qui implique des économies aussi bien sur le système d&apos;isolation que sur l&apos;installation du chauffage. Il va de même pour le choix du matériau de construction qui vous reviendra et qui pourra dans la même lignée participer à cet effort d&apos;économie.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">S&apos;assurer du sérieux du constructeur de maison individuelle dans le Nord</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Depuis que les professionnels du secteur sont tenus à une obligation de résultats sur leurs travaux, le métier est devenu bien plus compliqué. En effet, l&apos;ajout de contraintes comme celle de la régulation thermique RT2012 a largement impacté les conditions de conformité et par la même occasion les critères de savoir-faire des artisans pour les constructions d&apos;habitations. Il est également devenu impératif pour les constructions de maisons individuelles dans le Nord de mettre en place une meilleure étanchéité de l&apos;air ce qui sera par ailleurs vérifié durant le test de validité assuré pendant la livraison finale du bien.</p>
          </div>
          <div className="mt-10 space-y-8">
            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">Travail des artisans</h3>
              <p className="text-gray-700 leading-relaxed">Il est utile de préciser que les consignes de résultats de même que les nouvelles contraintes du domaine vont concerner tous les corps de métiers présents sur les chantiers de construction ce qui inclut donc les maçons, les plombiers ou encore les électriciens. Dans la majorité des cas, les constructeurs ne commencent à engager des chantiers importants qu&apos;avec les entreprises avec lesquelles ils travaillent depuis au moins trois ans afin de garantir une certaine qualité de réalisation.</p>
            </div>
            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">Rigueur des procédures</h3>
              <p className="text-gray-700 leading-relaxed">En plus des exigences de plus en plus précises et pointues dans les constructions de maisons individuelles au Nord, certaines entreprises spécialisées affichent une certaine rigueur vis-à-vis de leurs sous-traitants. En effet, si ces derniers effectuent un travail moins qualitatif ou négligent des étapes ou consignes spécifiques, les constructeurs en question ne leur proposent plus de chantiers, du moins sans voir auparavant une amélioration distincte des procédures.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="font-display text-3xl font-bold text-navy mb-6">Étape de recherche d&apos;un constructeur de maison individuelle dans le Nord</h2>
            <p className="text-gray-700 leading-relaxed">Vous pouvez passer par un certain nombre de supports afin de procéder à une recherche de constructeur professionnel pour une maison individuelle dans le Nord. Le plus courant depuis plusieurs années est de réaliser ses recherches sur Internet mais il est difficile de se retrouver mais surtout de savoir en qui faire confiance. C&apos;est là qu&apos;est notre plus-value puisque nous avons effectué une sélection rigoureuse de constructeurs de maisons individuelles dans le Nord sur différents critères. N&apos;hésitez donc pas à faire une demande pour que nous vous mettions en relation avec le constructeur qu&apos;il vous faut.</p>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-navy mb-6">Vérifier la qualité de construction pour une maison individuelle au Nord</h2>
            <p className="text-gray-700 leading-relaxed">Il peut être intéressant avant de signer un contrat de construction pour la réalisation d&apos;une maison individuelle de d&apos;abord procéder à une visite de plusieurs chantiers suivis par le constructeur. Plusieurs signes indicateurs peuvent souligner la qualité d&apos;une construction comme le nombre de chantiers suivis en même temps par les conducteurs de travaux ou encore le nombre de fois où ces derniers se déplacent sur les lieux durant la semaine. Des prix de prestations trop bas par rapport à la moyenne peuvent aussi être des indicateurs sur la qualité ou la conformité des aspects du chantier que ce soit au niveau des matériaux de construction, des services complémentaires ou des équipements utilisés. Là encore, nous sommes là pour vous guider et nous avons déjà vérifié tous ces points pour vous.</p>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-navy mb-6">Caractéristiques du bon constructeur de maisons individuelles au Nord</h2>
            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>La première qualité qu&apos;on attend d&apos;un constructeur pour la prise en charge d&apos;une maison individuelle dans le Nord se trouve être sa transparence. Ce sera, en effet, la disposition du constructeur à répondre à vos interrogations en rapport avec la construction qui déterminera en grande partie à quel point vous pouvez lui faire confiance. Parmi les questions qui pourront lui être posées dans cette optique, on pourra retenir celles relatives à :</p>
              <ul className="space-y-3 pl-2">
                <CheckItem text="L'origine des matériaux ;" />
                <CheckItem text="L'état du terrain ;" />
                <CheckItem text="La durée des étapes de construction ;" />
                <CheckItem text="Le suivi du chantier." />
              </ul>
              <p>Un bon constructeur pour une maison individuelle devra également être à l&apos;écoute de son client durant toute la procédure de réalisation du projet d&apos;autant plus lors de la phase initiale qui affichera vos objectifs.</p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-navy mb-6">Consignes que peut apporter un constructeur de maison individuelle</h2>
            <p className="text-gray-700 leading-relaxed">À l&apos;écoute pour répondre à vos questions et connaisseur du domaine et de ses spécificités, le constructeur est votre première source d&apos;informations, mais aussi de conseils sur le déroulement du chantier. Vous pourrez ainsi mieux vous informer avec lui sur toutes les facettes de la construction allant de l&apos;avantage d&apos;un matériau par rapport à un autre au système de chauffage qu&apos;il faut privilégier dans une zone comme le département du Nord en passant par les nombreuses façons de personnaliser son habitation individuelle ainsi que le budget qu&apos;il faudra allouer.</p>
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
              { label: "Constructeur maison individuelle Lille", href: "/constructeur-maison-individuelle-nord/lille" },
              { label: "Constructeur maison individuelle Douai", href: "/constructeur-maison-individuelle-nord/douai" },
              { label: "Constructeur maison individuelle Arras", href: "/constructeur-maison-individuelle-nord/arras" },
              { label: "Constructeur maison individuelle Valenciennes", href: "/constructeur-maison-individuelle-nord/valenciennes" },
              { label: "Constructeur maison individuelle Villeneuve d'Ascq", href: "/constructeur-maison-individuelle-nord/villeneuve-dascq" },
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
              { label: "Maison passive", href: "/constructeur-nord-maison-passive" },
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
          name: "Construction de maison individuelle dans le Nord",
          description: metadata.description as string,
          url: "/constructeur-maison-individuelle-nord",
        })) }}
      />
    </>
  );
}
