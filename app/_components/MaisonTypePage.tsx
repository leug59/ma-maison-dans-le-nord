import Image from "next/image";
import Link from "next/link";

export interface MaisonTypeData {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  characteristics: string[];
  advantages: string[];
  inconvenients?: string[];
  idealFor: string;
  faq: { question: string; answer: string }[];
  relatedTypes: { label: string; href: string }[];
  image?: string;
  imageAlt?: string;
}

export default function MaisonTypePage({ data }: { data: MaisonTypeData }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">
            Types de constructions — Hauts-de-France
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            {data.title}
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

      {/* Image hero */}
      {data.image && (
        <section className="px-4 -mt-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={data.image}
                alt={data.imageAlt ?? data.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Description */}
      <section className={data.image ? "py-16 px-4" : "py-20 px-4"}>
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {data.description}
          </p>
          <p className="text-gray-600 leading-relaxed">{data.longDescription}</p>
        </div>
      </section>

      {/* Caractéristiques & Avantages */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`grid gap-12 ${data.inconvenients ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-8">
                Caractéristiques
              </h2>
              <ul className="space-y-4">
                {data.characteristics.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-navy flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-gold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-navy mb-8">
                Avantages
              </h2>
              <ul className="space-y-4">
                {data.advantages.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {data.inconvenients && (
              <div>
                <h2 className="font-display text-2xl font-bold text-navy mb-8">
                  Points de vigilance
                </h2>
                <ul className="space-y-4">
                  {data.inconvenients.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-gold pl-8">
            <h2 className="font-display text-2xl font-bold text-navy mb-4">
              Pour qui est-ce idéal ?
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {data.idealFor}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {data.faq.length > 0 && (
        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-navy text-center mb-12">
              Questions fréquentes
            </h2>
            <dl className="space-y-6">
              {data.faq.map((item, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
                  <dt className="font-semibold text-navy mb-3">
                    {item.question}
                  </dt>
                  <dd className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Autres types */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-navy text-center mb-10">
            Découvrir d&apos;autres types de maisons
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {data.relatedTypes.map((type) => (
              <Link
                key={type.href}
                href={type.href}
                className="px-5 py-2.5 border-2 border-navy text-navy font-medium rounded-lg hover:bg-navy hover:text-white transition-colors"
              >
                {type.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            Votre projet commence ici
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Obtenez une mise en relation gratuite avec nos constructeurs
            partenaires spécialisés dans les Hauts-de-France.
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
