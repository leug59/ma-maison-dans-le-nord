import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'équipe de Ma Maison dans le Nord, spécialiste de la mise en relation avec les constructeurs de maisons individuelles des Hauts-de-France. Notre histoire, nos valeurs, notre réseau.",
  alternates: { canonical: "/a-propos" },
};

const valeurs = [
  {
    title: "Sélection rigoureuse",
    description:
      "Chaque constructeur intégré à notre réseau est évalué sur sa réactivité, la qualité de ses réalisations, son professionnalisme et sa connaissance du territoire.",
  },
  {
    title: "Transparence totale",
    description:
      "Nous vous informons clairement sur les délais, les coûts et les démarches. Aucune surprise, aucune commission cachée.",
  },
  {
    title: "Accompagnement personnalisé",
    description:
      "Votre projet est unique. Notre équipe prend le temps de comprendre vos besoins avant de vous orienter vers le bon interlocuteur.",
  },
  {
    title: "Ancrage local",
    description:
      "Nés et installés dans les Hauts-de-France, nous connaissons la région, ses communes, ses contraintes urbanistiques et ses savoir-faire architecturaux.",
  },
];

const criteres = [
  "Réactivité et disponibilité pour les clients",
  "Intervention dans un rayon de 30 à 40 km autour de votre terrain",
  "Réputation d'excellence et références vérifiables",
  "Capacité à livrer des projets haut de gamme et personnalisés",
  "Respect des délais et des budgets engagés",
  "Garantie décennale et assurances en règle",
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 px-4" aria-label="En-tête">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Notre histoire
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Trouvez votre constructeur de maison dans le Nord
          </h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Une équipe passionnée, ancrée dans les Hauts-de-France, au service
            de votre projet de construction.
          </p>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-24 px-4" aria-labelledby="histoire-title">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
                Qui sommes-nous
              </p>
              <h2
                id="histoire-title"
                className="font-display text-3xl font-bold text-navy mb-6"
              >
                Une expertise née de l&apos;expérience
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ma Maison dans le Nord est née d&apos;un constat simple : trouver
                le bon constructeur pour un projet de maison individuelle est
                souvent complexe, chronophage et risqué. Entre les nombreuses
                offres, les promesses non tenues et la difficulté de comparer
                des devis incomparables, beaucoup de futurs propriétaires se
                retrouvent perdus.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Forts de notre expérience personnelle dans le domaine de la
                construction et d&apos;une parfaite connaissance de la région
                Nord-Pas-de-Calais, nous avons créé ce service de mise en
                relation pour vous éviter ces écueils.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre équipe sélectionne, évalue et recommande des constructeurs
                de confiance, capables de réaliser votre maison selon vos
                attentes et dans le respect de votre budget.
              </p>
            </div>
            <div className="space-y-6">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/hero-maison-nord.jpg"
                  alt="Construction de maison individuelle dans le Nord par Ma Maison dans le Nord"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
              <blockquote>
                <p className="font-display text-xl font-medium text-navy leading-relaxed mb-6 italic">
                  &ldquo;Notre mission est simple : vous connecter avec le
                  constructeur qui réalisera la maison dont vous rêvez, dans les
                  Hauts-de-France.&rdquo;
                </p>
                <footer className="text-gray-500 text-sm">
                  — L&apos;équipe Ma Maison dans le Nord
                </footer>
              </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-gray-50 py-24 px-4" aria-labelledby="valeurs-title">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Ce qui nous guide
            </p>
            <h2
              id="valeurs-title"
              className="font-display text-3xl sm:text-4xl font-bold text-navy"
            >
              Nos valeurs
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {valeurs.map((v) => (
              <article key={v.title} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-2 h-10 bg-gold rounded-full mb-5" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-navy mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{v.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Critères de sélection */}
      <section className="py-24 px-4" aria-labelledby="criteres-title">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
                Notre réseau
              </p>
              <h2
                id="criteres-title"
                className="font-display text-3xl font-bold text-navy mb-6"
              >
                Comment nous sélectionnons nos constructeurs
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Chaque constructeur qui intègre notre réseau partenaire est
                rigoureusement évalué selon des critères précis. Nous ne
                recommandons que des professionnels que nous avons vérifiés et
                en qui nous avons confiance.
              </p>
            </div>
            <ul className="space-y-4" aria-label="Critères de sélection des constructeurs">
              {criteres.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span
                    className="w-5 h-5 rounded-full bg-navy flex items-center justify-center shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3 h-3 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 px-4" aria-labelledby="cta-title">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="cta-title"
            className="font-display text-3xl font-bold text-white mb-4"
          >
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Décrivez-nous votre projet et nous vous mettrons en relation avec le
            constructeur idéal.
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
    </>
  );
}
