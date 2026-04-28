import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Constructeur de maison individuelle dans le Nord | Ma Maison dans le Nord",
  description:
    "Ma Maison dans le Nord sélectionne les meilleurs constructeurs de maisons individuelles des Hauts-de-France. Projets 100% sur mesure à Lille, dans le Nord et le Pas-de-Calais. Devis gratuit.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Ma Maison dans le Nord",
      description:
        "Mise en relation avec les meilleurs constructeurs de maisons individuelles des Hauts-de-France.",
      url: "https://www.ma-maison-dans-le-nord.fr",
      address: {
        "@type": "PostalAddress",
        streetAddress: "17 rue du Plouick",
        addressLocality: "Phalempin",
        postalCode: "59133",
        addressCountry: "FR",
      },
      areaServed: ["Lille", "Nord", "Pas-de-Calais", "Hauts-de-France"],
      serviceType: "Construction de maisons individuelles",
    },
    {
      "@type": "WebSite",
      name: "Ma Maison dans le Nord",
      url: "https://www.ma-maison-dans-le-nord.fr",
    },
  ],
};

const stats = [
  { value: "15+", label: "Constructeurs partenaires" },
  { value: "300+", label: "Familles accompagnées" },
  { value: "7", label: "Types de maisons" },
  { value: "100%", label: "Sur mesure" },
];

const engagements = [
  {
    title: "Un projet 100% sur mesure",
    description:
      "Comme la construction d'une maison dans le nord est un projet de toute une vie, nous souhaitons qu'elle réponde parfaitement à vos attentes. Les plans de construction proposés sont uniques.",
  },
  {
    title: "Accompagnement de A à Z",
    description:
      "La construction d'une maison dans le nord requiert de nombreuses étapes et un savoir-faire approfondi. Nous vous accompagnons du début à la fin de votre projet.",
  },
  {
    title: "Une expertise",
    description:
      "Grâce à notre expertise dans le secteur, nous accompagnons depuis longtemps des particuliers dans la recherche d'un constructeur de maisons de qualité et d'un terrain constructible dans le nord.",
  },
];

const maisonTypes = [
  {
    label: "Maison traditionnelle",
    href: "/constructeur-maison-traditionnelle-nord",
    image: "/images/maison-traditionnelle.jpg",
    description: "Façade en briques rouges, toit pentu, charme nordiste authentique.",
  },
  {
    label: "Maison contemporaine",
    href: "/constructeur-de-maison-contemporaine-nord",
    image: "/images/maison-contemporaine.jpg",
    description: "Lignes design, matériaux dernière génération, luminosité optimisée.",
  },
  {
    label: "Maison cubique",
    href: "/constructeur-maison-cubique-nord",
    image: "/images/maison-cubique.jpg",
    description: "Architecture épurée, toits-terrasses, esthétique ultra-moderne.",
  },
  {
    label: "Ossature bois",
    href: "/constructeur-maison-bois-nord",
    image: "/images/maison-bois.jpg",
    description: "Écologique, économe en énergie, jusqu'à 10% d'espace habitable supplémentaire.",
  },
  {
    label: "Plain-pied",
    href: "/constructeur-maison-plain-pied-nord",
    image: "/images/maison-plain-pied.jpg",
    description: "Accessibilité totale, vie pratique, idéale pour toute la famille.",
  },
  {
    label: "Maison passive",
    href: "/constructeur-nord-maison-passive",
    image: "/images/maison-passive.jpg",
    description: "Performances énergétiques exceptionnelles, chauffage quasi nul.",
  },
  {
    label: "Maison individuelle",
    href: "/constructeur-maison-individuelle-nord",
    image: "/images/maison-individuelle.jpg",
    description: "Votre projet unique, libre de toute contrainte de lotissement.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Demande de mise en relation",
    description: "Remplissez notre formulaire et décrivez votre projet en quelques minutes.",
  },
  {
    num: "02",
    title: "Étude de vos besoins",
    description: "Notre équipe analyse votre projet, votre budget et vos contraintes.",
  },
  {
    num: "03",
    title: "Mise en relation",
    description: "Nous vous connectons avec le constructeur régional le mieux adapté.",
  },
  {
    num: "04",
    title: "Construction & suivi",
    description: "Votre constructeur gère l'intégralité du chantier jusqu'à la remise des clés.",
  },
];

const faqPreview = [
  {
    q: "Puis-je avoir une maison 100% sur mesure ?",
    a: "Oui, et c'est précisément notre raison d'être. Nos constructeurs partenaires conçoivent chaque projet de manière entièrement personnalisée, selon vos souhaits et votre budget.",
  },
  {
    q: "Quel budget prévoir pour construire dans le Nord ?",
    a: "En 2024, le prix moyen d'un terrain dans le Nord est d'environ 80 € le m² et celui d'une maison neuve de 1 350 € le m². Ces chiffres varient selon la commune, le type de maison et les finitions.",
  },
  {
    q: "Comment se déroule la construction ?",
    a: "La construction se divise en trois grandes phases : le gros œuvre (fondations, murs, toiture), le second œuvre (isolation, menuiseries, plomberie, électricité), puis les finitions et la réception.",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-navy overflow-hidden" aria-label="En-tête">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full border border-white/5"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texte */}
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-6">
                Constructeur de maison — Hauts-de-France
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight sm:leading-[1.1]">
                Construisez la maison
                <br className="hidden sm:inline" />
                <span className="text-gold"> de vos rêves</span>
                <br className="hidden sm:inline" />
                {" "}dans le Nord
              </h1>
              <p className="text-white/70 text-lg sm:text-xl mb-10 leading-relaxed">
                Ma Maison dans le Nord sélectionne et met en relation les
                meilleurs constructeurs régionaux pour votre projet de maison
                individuelle, 100% personnalisé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/devis"
                  className="px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors text-lg text-center"
                >
                  Demander un devis gratuit
                </Link>
                <Link
                  href="/types-construction-maison-nord"
                  className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:border-white/50 hover:bg-white/5 transition-colors text-lg text-center"
                >
                  Nos types de maisons
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="hidden lg:block">
              <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-maison-nord.jpg"
                  alt="Maison individuelle dans le Nord construite par nos partenaires"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 50vw, 600px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100 py-12" aria-label="Chiffres clés">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-4xl font-bold text-navy mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="engagements-title">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Pourquoi nous choisir
            </p>
            <h2
              id="engagements-title"
              className="font-display text-3xl sm:text-4xl font-bold text-navy"
            >
              Nos engagements
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {engagements.map((e) => (
              <article
                key={e.title}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div
                  className="w-12 h-1 bg-gold rounded-full mb-6"
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl font-bold text-navy mb-4">
                  {e.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{e.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Types de maisons */}
      <section className="bg-gray-50 py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="maisons-title">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Des styles pour tous les goûts
            </p>
            <h2
              id="maisons-title"
              className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4"
            >
              Nos types de maisons
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les différents styles de construction proposés par nos
              partenaires dans les Hauts-de-France.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {maisonTypes.map((type) => (
              <Link
                key={type.href}
                href={type.href}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gold hover:shadow-md transition-all"
                aria-label={`Découvrir ${type.label}`}
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={type.image}
                    alt={type.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                <h3 className="font-display font-bold text-navy text-lg mb-2 group-hover:text-gold transition-colors">
                  {type.label}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {type.description}
                </p>
                <span className="text-gold text-sm font-semibold inline-flex items-center gap-1">
                  Découvrir
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="process-title">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Comment ça marche
            </p>
            <h2
              id="process-title"
              className="font-display text-3xl sm:text-4xl font-bold text-navy"
            >
              Un accompagnement simple et efficace
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < processSteps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-7 left-full w-full h-px bg-gray-200 -translate-x-4 z-0"
                    aria-hidden="true"
                  />
                )}
                <div className="font-display text-5xl font-bold text-gold/20 mb-4">
                  {step.num}
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/etapes-construction"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors"
            >
              Voir toutes les étapes en détail
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* À propos teaser */}
      <section className="bg-navy py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="about-title">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Qui sommes-nous
          </p>
          <h2
            id="about-title"
            className="font-display text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Constructeur de maison dans le Nord — Notre philosophie
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-6">
            Ma Maison dans le Nord est composée d&apos;une équipe de spécialistes
            passionnés par la construction de maisons individuelles dans les
            Hauts-de-France. Forts d&apos;une expérience personnelle et
            d&apos;une parfaite connaissance de la région, nous sélectionnons
            rigoureusement nos constructeurs partenaires.
          </p>
          <p className="text-white/60 leading-relaxed mb-10">
            Chaque constructeur retenu doit répondre à des critères stricts :
            réactivité, proximité géographique, réputation d&apos;excellence et
            capacité à livrer des projets haut de gamme et personnalisés.
          </p>
          <Link
            href="/a-propos"
            className="inline-block px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white hover:bg-white/5 transition-colors"
          >
            En savoir plus sur nous
          </Link>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="faq-title">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Vos questions
            </p>
            <h2
              id="faq-title"
              className="font-display text-3xl sm:text-4xl font-bold text-navy"
            >
              Questions fréquentes
            </h2>
          </div>
          <div className="space-y-5 mb-10">
            {faqPreview.map((item) => (
              <div
                key={item.q}
                className="border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-semibold text-navy mb-3">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold transition-colors"
            >
              Voir toutes les questions
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Ressources */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="ressources-title">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">Nos guides</p>
            <h2 id="ressources-title" className="font-display text-3xl sm:text-4xl font-bold text-navy">
              Tout ce qu&apos;il faut savoir avant de construire
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <Link href="/blog" className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-gold hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-navy text-lg mb-2 group-hover:text-gold transition-colors">Blog construction</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Terrain, chauffage, domotique, ossature bois : nos guides pratiques pour tout comprendre avant de vous lancer.</p>
            </Link>
            <Link href="/budget" className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-gold hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-navy text-lg mb-2 group-hover:text-gold transition-colors">Budget de construction</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Estimez le coût de votre projet : terrain, gros œuvre, finitions, frais annexes. Budgétez sereinement.</p>
            </Link>
            <Link href="/contact" className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-gold hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-navy text-lg mb-2 group-hover:text-gold transition-colors">Nous contacter</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Une question sur votre projet dans le Nord ? Notre équipe vous répond rapidement et sans engagement.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section
        className="bg-gold py-20 px-4 sm:px-6 lg:px-8"
        aria-labelledby="cta-title"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2
            id="cta-title"
            className="font-display text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Votre projet commence aujourd&apos;hui
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Obtenez une mise en relation gratuite avec un constructeur
            sélectionné près de chez vous dans les Hauts-de-France.
          </p>
          <Link
            href="/devis"
            className="inline-block px-10 py-4 bg-white text-gold font-bold rounded-lg hover:bg-navy hover:text-white transition-colors text-lg"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  );
}
