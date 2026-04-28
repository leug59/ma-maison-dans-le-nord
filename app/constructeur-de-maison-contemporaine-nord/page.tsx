import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Constructeur de maison contemporaine dans le Nord : faire le bon choix",
  description:
    "Vous rêvez d'une maison moderne dans le Nord ? Trouvez votre constructeur de maison contemporaine dans le Nord-Pas-de-Calais grâce à notre réseau de partenaires locaux.",
  alternates: { canonical: "/constructeur-de-maison-contemporaine-nord" },
};

export default function MaisonContemporainePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Types de constructions — Hauts-de-France
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Constructeur de maison contemporaine dans le Nord : faire le bon choix
          </h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Vous rêvez d&apos;une maison moderne, avec une esthétique tendance et des menuiseries design ? Laissez-vous guider vers le bon constructeur.
          </p>
          <Link
            href="/devis"
            className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>

      {/* Photo */}
      <section className="px-4 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/maison-contemporaine.jpg"
              alt="Maison contemporaine moderne dans le Nord"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">
            Dénichez votre constructeur de maison contemporaine dans le Nord
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Vous rêvez d&apos;une maison moderne, avec une esthétique tendance et des menuiseries design ? Mais vous ne savez pas à qui confier votre projet immobilier spécialiste des maisons contemporaines ? Pas de panique ! Nous possédons un réseau de constructeurs partenaires parmi lesquels se trouve sans nul doute votre futur constructeur de maison contemporaine dans le Nord. Alors, laissez-vous guider pour votre ou vos futures constructions…
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">
            Comment choisir un constructeur de maison contemporaine dans le Nord ?
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Parce qu&apos;une habitation moderne doit répondre à certains critères, il est nécessaire de bien sélectionner votre constructeur de maison dans le Nord en fonction des modèles qu&apos;ils proposent. Nous sommes là pour vous aider. En effet, nous veillons à ce que chacun de nos partenaires réponde à un cahier des charges bien précis pour les maisons qu&apos;ils construisent mais aussi qu&apos;il soit local et donc à proximité (et non un constructeur présent dans toute la France) de votre terrain constructible (ou futur terrain si vous recherchez toujours des terrains).
            </p>
            <p>
              Pour une résidence contemporaine, nous ne vous orienterons pas vers un constructeur spécialisé dans les modèles de maisons en bois ou dans les demeures traditionnelles mais bel et bien vers des partenaires spécialistes des maisons contemporaines. Vers un professionnel qui garantira un rendu moderne à votre maison. Ces artisans sont des acteurs de terrain, toujours au fait des nouvelles normes en matière de construction et des tendances actuelles dans le domaine de l&apos;habitat. N&apos;hésitez pas à faire une demande de constructeur de maison contemporaine dans le Nord-Pas-de-Calais et à nous demander des exemples de réalisations.
            </p>
            <p>
              Vous pourrez ainsi profiter des conseils spécialisés de professionnels aguerris et d&apos;une écoute attentive de votre projet. La conception de votre maison sera à votre image, totalement personnalisée, avec l&apos;assurance d&apos;être dans l&apos;air du temps, à l&apos;intérieur comme à l&apos;extérieur, mais aussi avec un prix adapté à votre budget. Votre constructeur de maison dans le Nord-Pas-de-Calais vous accompagnera dans toutes les étapes de votre construction, de A à Z.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">
            Quelles sont les caractéristiques d&apos;une habitation contemporaine ?
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Une maison actuelle est le mariage d&apos;un style design et de matériaux derniers cris. Elle se veut à la fois pratique, écologique et esthétique. De forme géométrique, avec des lignes épurées, le côté tendance de ces maisons plaît en majorité aux primo-accédants. Mais pas uniquement, car elle a des atouts pouvant aussi séduire toutes les générations.
            </p>
            <p>
              Ce style de construction est à même de combiner l&apos;architecture traditionnelle du toit pentu avec une image beaucoup plus contemporaine (toit plat ou cubique par exemple). La toiture d&apos;une construction contemporaine se démarque de celle d&apos;une construction traditionnelle :
            </p>

            <ul className="space-y-3 pl-2">
              {[
                "soit par sa couleur : le plus souvent, pour ces maisons les tuiles noires sont préférées aux tuiles rouges ;",
                "soit par sa forme : un toit-terrasse a un côté plus actuel qu'un toit pentu.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              L&apos;élément qui va également apporter un aspect tendance à votre maison est la façade. Construite en briques rouges dans les habitations traditionnelles, une construction contemporaine vous offrira plus de possibilités. Enduit, bois, bardage métallique, ainsi qu&apos;un vaste panel de couleurs, donneront de la modernité à votre extérieur, en harmonie avec votre terrain.
            </p>
            <p>
              Vous pourrez aussi combiner différents types de façades : briques/enduit pour donner un style rétro dans l&apos;air du temps à votre maison, crépi/bois pour allier la modernité et le naturel, bardage métallique/enduit pour un côté industriel très tendance, etc.
            </p>
            <p>
              Les menuiseries modernes (et leur qualité) d&apos;une maison actuelle ont également toute leur importance (elles influent aussi beaucoup sur le prix). L&apos;architecture contemporaine aime les grandes baies vitrées, les fenêtres cubiques fixes ou à un vantail, les ouvertures étroites et longues, installées à la verticale ou à l&apos;horizontale. Une porte d&apos;entrée design est la signature d&apos;une maison moderne. C&apos;est elle que l&apos;on voit en premier, elle aura donc un fort impact sur l&apos;image de votre future maison. Qu&apos;elle soit en acier, en aluminium, ou en PVC, osez l&apos;originalité avec des inserts métalliques ou en verres géométriques, une poignée stylisée et préférez une couleur sombre (noir ou gris), comme pour toutes les autres menuiseries.
            </p>
            <p>
              L&apos;intérieur est à l&apos;instar de l&apos;extérieur : moderne avec de grands espaces de vie. Dans une maison contemporaine, la cuisine est une pièce que l&apos;on montre. Elle est donc généralement ouverte sur le salon et comprend des éléments soigneusement sélectionnés pour leur design. Les pièces sont grandes, très lumineuses, grâce aux larges ouvertures, et le confort y est optimal. Une cheminée aux lignes futuristes ou un poêle viennent parfois agrémenter la pièce à vivre. Elles sont le plus souvent à étage mais il est possible de construire une maison plain-pied contemporaine également.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold text-navy mb-6">
            Pourquoi faire le choix de ce style d&apos;architecture ?
          </h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Outre les critères esthétiques, une maison moderne est avant tout une maison modulable et de qualité. L&apos;intérêt est que l&apos;on peut imaginer des combinaisons à l&apos;infini pour ce type de construction. Tout est possible en termes de formes, matériaux, revêtements de façades, etc. Il n&apos;y a pas de limites. Vous pourrez façonner la maison de vos rêves, avec votre constructeur de maison individuelle dans le Nord. Le bureau d&apos;études de l&apos;entreprise élaborera les plans avec vous, afin que votre future demeure soit entièrement personnalisée.
            </p>
            <p>
              Une maison moderne, c&apos;est également une maison respectueuse de l&apos;environnement, économique et confortable. Des matériaux écologiques seront le gage d&apos;une isolation thermique et acoustique optimale. Grâce à une isolation renforcée et à l&apos;orientation bien pensée de vos baies vitrées (afin d&apos;utiliser au maximum l&apos;énergie solaire), vous allez pouvoir réaliser de belles économies et profiter de l&apos;ambiance cocooning de votre intérieur.
            </p>
            <p>
              Une habitation à l&apos;architecture actuelle présente bien des avantages. Mais il est important de choisir un professionnel qui réalisera votre future maison dans les règles de l&apos;art et vous proposera un projet sur mesure. Confiez-nous votre projet : nous vous mettrons en relation avec un constructeur de maison contemporaine dans le Nord de confiance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA principal */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Votre projet commence ici
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Vous êtes décidés à faire construire votre maison ? Nous vous mettrons rapidement en contact avec le constructeur qu&apos;il vous faut !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors"
            >
              Demander un devis gratuit
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white hover:bg-white/5 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Pages par ville */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-navy text-center mb-8">
            Pour aller plus loin
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "Constructeur maison contemporaine Lille", href: "/constructeur-de-maison-contemporaine-nord/lille" },
              { label: "Constructeur maison contemporaine Arras", href: "/constructeur-de-maison-contemporaine-nord/arras" },
              { label: "Constructeur maison contemporaine Douai", href: "/constructeur-de-maison-contemporaine-nord/douai" },
              { label: "Constructeur maison contemporaine Valenciennes", href: "/constructeur-de-maison-contemporaine-nord/valenciennes" },
              { label: "Constructeur maison contemporaine Villeneuve d'Ascq", href: "/constructeur-de-maison-contemporaine-nord/villeneuve-dascq" },
              { label: "Constructeur maison contemporaine Béthune", href: "/constructeur-de-maison-contemporaine-nord/bethune" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2.5 border-2 border-navy text-navy font-medium rounded-lg hover:bg-navy hover:text-white transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
