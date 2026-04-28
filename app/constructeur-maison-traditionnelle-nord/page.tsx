import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildOpenGraph } from "@/app/_lib/og";
import { buildServiceSchema } from "@/app/_lib/schema";


export const metadata: Metadata = {
  title: "Constructeur de maison traditionnelle dans le Nord : ce qu'il faut savoir",
  description:
    "Façade en briques rouges, toit pentu, menuiseries foncées : découvrez les caractéristiques d'une maison traditionnelle du Nord et comment trouver le bon constructeur.",
  alternates: { canonical: "/constructeur-maison-traditionnelle-nord" },
  openGraph: buildOpenGraph("/constructeur-maison-traditionnelle-nord", "website"),
};

export default function MaisonTraditionnellePage() {
  return (
    <>
      <section className="bg-navy py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Types de constructions — Hauts-de-France
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Constructeur de maison traditionnelle dans le Nord : ce qu&apos;il faut savoir
          </h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Futur propriétaire, découvrez les caractéristiques d&apos;une habitation typique de la Flandre française et comment trouver un constructeur de qualité.
          </p>
          <Link href="/devis" className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors">
            Demander un devis gratuit
          </Link>
        </div>
      </section>

      <section className="px-4 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/maison-traditionnelle.jpg" alt="Maison traditionnelle en briques rouges dans le Nord" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" priority />
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-5 text-gray-700 leading-relaxed">
          <p>Futur propriétaire : vous n&apos;avez pas encore porté votre choix sur le type de maison que vous souhaitez pour votre projet d&apos;habitat ? Vous hésitez encore entre construction traditionnelle, contemporaine, cubique, ou autres ? Découvrez quelles sont les caractéristiques d&apos;une habitation typique de la Flandre française et surtout, comment faire pour trouver un constructeur de maison traditionnelle dans le Nord de qualité qui répondra à vos attentes pour votre terrain à bâtir constructible.</p>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Quel constructeur de maison traditionnelle dans le Nord choisir ?</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Tous les professionnels du bâtiment ne sont pas en mesure d&apos;effectuer une construction de pure tradition. Si vous souhaitez que votre future maison traditionnelle soit réalisée selon les règles de l&apos;architecture nordiste, il vous faudra faire appel à un constructeur dans le Nord de confiance. Notre mission est de vous mettre en contact avec un professionnel qui vous donnera entièrement satisfaction et sélectionné spécialement pour vous à proximité des terrains repérés.</p>
            <p>Nos partenaires sont le plus souvent des entreprises familiales et locales, depuis parfois plusieurs générations. Ils possèdent donc une parfaite connaissance des codes architecturaux de la région. Ils sauront s&apos;adapter à vos demandes, tout en respectant les normes thermiques en vigueur et en permettant à votre future demeure de s&apos;inscrire facilement dans le PLU (Plan Local d&apos;Urbanisme).</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Qu&apos;est-ce qu&apos;une maison traditionnelle ?</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Selon les régions, chaque habitation traditionnelle a des caractéristiques qui lui sont propres. Elles peuvent différer par :</p>
            <ul className="space-y-3 pl-2">
              {[
                "la choix de la forme de la maison défini par les plans : plain-pied, maison à étage, longueur, largeur, hauteur ;",
                "le revêtement extérieur : son type, sa couleur ;",
                "le toit : pente, couleur, choix des matériaux (tuiles, ardoises…) ;",
                "les menuiseries : taille, forme, matériaux utilisés, orientation ;",
                "le prix bien sûr qui dépendra aussi de la surface de votre projet de maison et du nombre de pièces (chambres notamment) ;",
                "la qualité des matériaux de construction ;",
                "etc.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>À noter, que les contraintes de construction et les particularités architecturales sont souvent influencées par le climat de chaque région.</p>
            <p>Mais toutes les constructions de style traditionnel ont un point commun : le fait de s&apos;intégrer parfaitement à leur environnement (notamment le terrain), à l&apos;histoire et à la culture des lieux. Il existe souvent un mode de conception et un savoir-faire typique de la région, que votre futur constructeur de maison individuelle dans le Nord Pas de Calais se doit de respecter pour votre projet.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-10">Comment se définit le concept d&apos;une construction traditionnelle dans le Nord ?</h2>
          <div className="space-y-12">
            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">Par sa façade</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>C&apos;est l&apos;élément le plus significatif d&apos;une habitation traditionnelle du Nord. À l&apos;origine, les maisons flamandes sont faites de briques rouges. En effet, à l&apos;époque, les habitants se servaient des matériaux de leur région pour construire leurs maisons. Et dans le Nord, la matière première présente en abondance était l&apos;argile. C&apos;est pour cette raison, que de nos jours les maisons traditionnelles sont toujours construites en briques rouges.</p>
                <p>Pour un peu d&apos;originalité et pour que votre façade ne soit pas uniforme, votre futur constructeur de maison dans le Nord va jouer sur les nuances de rouge. Plus ou moins foncées, vous pouvez obtenir un joli camaïeu et une façade unique. D&apos;autres types de revêtements sont maintenant demandés par les propriétaires, notamment le crépi, qui donne un aspect plus moderne à la maison traditionnelle. Cependant, si vous voulez une véritable maison qui s&apos;inscrit dans le paysage du Nord, votre choix devra se porter sur les modèles en briques.</p>
              </div>
            </div>
            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">Par son toit</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Le toit le plus répandu dans cette région est adapté à son climat : pente importante, deux pans et tuiles plates. Ceci afin de permettre un écoulement des eaux optimal, en cas de pluie ou de neige.</p>
                <p>Ce toit très pentu présente un autre avantage : la possibilité d&apos;aménager les combles. C&apos;est la raison pour laquelle les maisons traditionnelles du Nord possèdent souvent un étage (même si une construction traditionnelle de type plain-pied est tout à fait envisageable également pour votre qualité de vie).</p>
                <p>Le gris et le rouge sont les couleurs de tuiles les plus fréquentes dans cette région.</p>
              </div>
            </div>
            <div className="border-l-4 border-gold pl-8">
              <h3 className="font-display text-xl font-bold text-navy mb-4">Par ses menuiseries</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Les puristes choisiront des menuiseries en bois, afin d&apos;apporter une note supplémentaire d&apos;authenticité à leur demeure. La plupart des menuiseries actuelles sont en aluminium ou en acier, de couleur foncée. Pas de blanc, qui dénoterait trop avec le charme traditionnel de la maison.</p>
                <p>Les ouvertures sont plutôt verticales et étroites, eu égard aux façades hautes. Une des particularités en termes de menuiserie est le chien assis, que l&apos;on retrouve sur de nombreuses maisons du Nord. Ces lucarnes, facilement identifiables grâce à leur esthétique unique, servent à faire entrer la lumière dans les combles aménagés des villas traditionnelles. Elles forment une saillie sur le toit de l&apos;habitation, avec un rampant en pente inverse de la toiture principale.</p>
              </div>
            </div>
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
              { label: "Constructeur maison traditionnelle Lille", href: "/constructeur-maison-traditionnelle-nord/lille" },
              { label: "Constructeur maison traditionnelle Arras", href: "/constructeur-maison-traditionnelle-nord/arras" },
              { label: "Constructeur maison traditionnelle Douai", href: "/constructeur-maison-traditionnelle-nord/douai" },
              { label: "Constructeur maison traditionnelle Valenciennes", href: "/constructeur-maison-traditionnelle-nord/valenciennes" },
              { label: "Constructeur maison traditionnelle Villeneuve d'Ascq", href: "/constructeur-maison-traditionnelle-nord/villeneuve-dascq" },
              { label: "Constructeur maison traditionnelle Béthune", href: "/constructeur-maison-traditionnelle-nord/bethune" },
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
              { label: "Maison contemporaine", href: "/constructeur-de-maison-contemporaine-nord" },
              { label: "Maison cubique", href: "/constructeur-maison-cubique-nord" },
              { label: "Ossature bois", href: "/constructeur-maison-bois-nord" },
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
    
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildServiceSchema({
          name: "Construction de maison traditionnelle dans le Nord",
          description: metadata.description as string,
          url: "/constructeur-maison-traditionnelle-nord",
        })) }}
      />
    </>
  );
}
