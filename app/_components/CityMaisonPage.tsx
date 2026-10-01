import Link from "next/link";
import { buildBreadcrumbSchema, buildFAQSchema } from "@/app/_lib/schema";
import FAQAccordion from "@/app/_components/FAQAccordion";

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
  contentSections?: { title: string; paragraphs: string[] }[];
  pricing?: { title: string; intro: string; rows: { label: string; value: string }[]; note?: string };
  partner?: { title: string; body: string; points: string[] };
  serviceArea?: { title: string; intro: string; communes: string[] };
  faq?: { question: string; answer: string }[];
  relatedTypes?: { title: string; intro?: string; links: { label: string; href: string }[] };
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

  const faqSchema = data.faq ? buildFAQSchema(data.faq) : null;

  return (
    <>
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
          {data.contentSections?.map((section, i) => (
            <div key={i}>
              <h2 className="font-display text-2xl font-bold text-navy mb-4">{section.title}</h2>
              {section.paragraphs.map((p, j) => (
                <p key={j} className="text-gray-700 leading-relaxed mb-4 last:mb-0">{p}</p>
              ))}
            </div>
          ))}
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

      {/* Pricing */}
      {data.pricing && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-navy mb-4">{data.pricing.title}</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">{data.pricing.intro}</p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left">
                <tbody>
                  {data.pricing.rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-4 font-medium text-navy border-b border-gray-100 last:border-0">{row.label}</td>
                      <td className="px-6 py-4 text-gray-600 border-b border-gray-100 last:border-0">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {data.pricing.note && (
              <p className="text-gray-500 text-sm mt-4 italic">{data.pricing.note}</p>
            )}
          </div>
        </section>
      )}

      {/* Constructeur partenaire */}
      {data.partner && (
        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-gold/30 p-8 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-navy mb-4">{data.partner.title}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{data.partner.body}</p>
              <ul className="space-y-3 mb-8">
                {data.partner.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-gold/20 text-gold font-bold text-xs flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">✓</span>
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/devis"
                className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors"
              >
                Obtenir un devis gratuit
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Zone de service */}
      {data.serviceArea && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-navy mb-4">{data.serviceArea.title}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{data.serviceArea.intro}</p>
            <p className="text-gray-600 leading-relaxed">{data.serviceArea.communes.join(", ")}.</p>
          </div>
        </section>
      )}

      {/* Autres types de maison dans la même ville */}
      {data.relatedTypes && (
        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-navy mb-4">{data.relatedTypes.title}</h2>
            {data.relatedTypes.intro && (
              <p className="text-gray-700 leading-relaxed mb-8">{data.relatedTypes.intro}</p>
            )}
            <div className="flex flex-wrap gap-3">
              {data.relatedTypes.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-5 py-2.5 border-2 border-navy text-navy font-medium rounded-lg hover:bg-navy hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {/* FAQ */}
      {data.faq && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-navy mb-8">Questions fréquentes</h2>
            <FAQAccordion items={data.faq} />
          </div>
        </section>
      )}

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
