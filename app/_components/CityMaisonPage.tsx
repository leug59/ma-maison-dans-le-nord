import Link from "next/link";
import { buildBreadcrumbSchema } from "@/app/_lib/schema";

export interface CityMaisonData {
  maisonTypeLabel: string;
  maisonTypeHref: string;
  city: string;
  h1: string;
  subtitle: string;
  openingIntro?: string;
  intro: string;
  whyBuild: string;
  constructorAdvice: string;
  relatedCities: { label: string; href: string }[];
}

export default function CityMaisonPage({
  data,
  canonicalPath,
}: {
  data: CityMaisonData;
  canonicalPath?: string;
}) {
  const breadcrumbSchema = canonicalPath
    ? buildBreadcrumbSchema([
        { name: "Accueil", url: "/" },
        { name: `Maison ${data.maisonTypeLabel}`, url: data.maisonTypeHref },
        { name: data.city, url: canonicalPath },
      ])
    : null;

  return (
    <>
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {/* Hero */}
      <section className="bg-navy py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            <Link href={data.maisonTypeHref} className="hover:underline">
              Maison {data.maisonTypeLabel}
            </Link>{" "}
            — {data.city}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            {data.h1}
          </h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            {data.subtitle}
          </p>
          <Link
            href="/devis"
            className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors"
          >
            Obtenir un devis gratuit
          </Link>
        </div>
      </section>

      {/* Opening intro */}
      {data.openingIntro && (
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">{data.openingIntro}</p>
          </div>
        </section>
      )}

      {/* Contenu principal */}
      <section className={`py-20 px-4${data.openingIntro ? " pt-4" : ""}`}>
        <div className="max-w-4xl mx-auto space-y-10">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy mb-4">
              {data.city}, ville idéale pour votre projet
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">{data.intro}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-navy mb-4">
              Pourquoi choisir une maison {data.maisonTypeLabel.toLowerCase()} à {data.city} ?
            </h2>
            <p className="text-gray-700 leading-relaxed">{data.whyBuild}</p>
          </div>
        </div>
      </section>

      {/* Conseils constructeur */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-gold pl-8">
            <h2 className="font-display text-2xl font-bold text-navy mb-4">
              Comment choisir votre constructeur à {data.city} ?
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {data.constructorAdvice}
            </p>
          </div>

          {/* 2-step process */}
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-9 h-9 rounded-full bg-gold text-white font-bold text-lg flex items-center justify-center mb-4">
                1
              </div>
              <p className="font-semibold text-navy mb-2">Remplissez notre formulaire en ligne</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Décrivez votre projet, vos envies et votre budget en quelques minutes.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="w-9 h-9 rounded-full bg-gold text-white font-bold text-lg flex items-center justify-center mb-4">
                2
              </div>
              <p className="font-semibold text-navy mb-2">Nous vous recontactons rapidement</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Un expert Ma Maison dans le Nord vous met en relation avec le constructeur idéal pour votre projet.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/devis"
              className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors"
            >
              Remplir le formulaire gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Autres villes */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-navy text-center mb-4">
            Maison {data.maisonTypeLabel} dans d&apos;autres villes du Nord
          </h2>
          <p className="text-gray-500 text-center mb-10">
            Nous intervenons dans toutes les grandes villes des Hauts-de-France.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {data.relatedCities.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className="px-5 py-2.5 border-2 border-navy text-navy font-medium rounded-lg hover:bg-navy hover:text-white transition-colors"
              >
                {city.label}
              </Link>
            ))}
            <Link
              href={data.maisonTypeHref}
              className="px-5 py-2.5 border-2 border-gold text-gold font-medium rounded-lg hover:bg-gold hover:text-white transition-colors"
            >
              Toutes les villes
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Votre maison {data.maisonTypeLabel.toLowerCase()} à {data.city} commence ici
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Mise en relation gratuite avec nos constructeurs partenaires
            spécialisés dans les Hauts-de-France.
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
