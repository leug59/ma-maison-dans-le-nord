import type { Metadata } from "next";
import DevisForm from "@/app/_components/DevisForm";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Demander un devis gratuit — Construction de maison dans le Nord",
  description:
    "Décrivez votre projet de maison individuelle dans les Hauts-de-France et recevez une mise en relation gratuite avec nos constructeurs partenaires. Devis sans engagement.",
  alternates: { canonical: "/devis" },
  openGraph: buildOpenGraph("/devis", "website"),
};

const avantages = [
  "Mise en relation 100% gratuite et sans engagement",
  "Réponse de notre équipe sous 24 à 48h",
  "Constructeurs sélectionnés et vérifiés",
  "Projets 100% sur mesure et personnalisés",
  "Couverture de tout le Nord et le Pas-de-Calais",
];

export default function DevisPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 px-4" aria-label="En-tête">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Gratuit et sans engagement
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Demandez votre devis gratuit
          </h1>
          <p className="text-white/70 text-lg sm:text-xl max-w-xl mx-auto">
            Décrivez votre projet en quelques minutes. Notre équipe vous met en
            relation avec le constructeur idéal dans les Hauts-de-France.
          </p>
        </div>
      </section>

      {/* Formulaire + avantages */}
      <section className="py-20 px-4" aria-label="Formulaire de demande de devis">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Sidebar avantages */}
            <aside className="order-2 lg:order-1" aria-labelledby="avantages-title">
              {/* Illustration */}
              <div className="flex justify-center mb-6" aria-hidden="true">
                <svg viewBox="0 0 180 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-44 h-auto">
                  {/* House body */}
                  <rect x="10" y="72" width="100" height="72" rx="2" fill="#0d1b2e" fillOpacity="0.06"/>
                  {/* Roof */}
                  <polygon points="0,72 60,22 120,72" fill="#0d1b2e" fillOpacity="0.10"/>
                  <polyline points="0,72 60,22 120,72" stroke="#0d1b2e" strokeWidth="2" strokeOpacity="0.3" strokeLinejoin="round" fill="none"/>
                  {/* Door */}
                  <rect x="42" y="105" width="36" height="39" rx="3" fill="#c8922a" fillOpacity="0.75"/>
                  <circle cx="74" cy="126" r="2.5" fill="white" fillOpacity="0.8"/>
                  {/* Left window */}
                  <rect x="16" y="83" width="26" height="20" rx="2" fill="#c8922a" fillOpacity="0.35"/>
                  <line x1="29" y1="83" x2="29" y2="103" stroke="white" strokeWidth="1.5" strokeOpacity="0.6"/>
                  <line x1="16" y1="93" x2="42" y2="93" stroke="white" strokeWidth="1.5" strokeOpacity="0.6"/>
                  {/* Right window */}
                  <rect x="78" y="83" width="26" height="20" rx="2" fill="#c8922a" fillOpacity="0.35"/>
                  <line x1="91" y1="83" x2="91" y2="103" stroke="white" strokeWidth="1.5" strokeOpacity="0.6"/>
                  <line x1="78" y1="93" x2="104" y2="93" stroke="white" strokeWidth="1.5" strokeOpacity="0.6"/>
                  {/* Clipboard */}
                  <rect x="112" y="28" width="58" height="78" rx="5" fill="white" stroke="#0d1b2e" strokeWidth="1.5" strokeOpacity="0.2"/>
                  <rect x="124" y="20" width="34" height="14" rx="4" fill="#0d1b2e" fillOpacity="0.15"/>
                  {/* Checklist rows */}
                  <circle cx="124" cy="52" r="5" fill="#c8922a" fillOpacity="0.25"/>
                  <path d="M121.5 52 L123.2 53.8 L126.5 50.5" stroke="#c8922a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="133" y1="52" x2="162" y2="52" stroke="#0d1b2e" strokeWidth="1.5" strokeOpacity="0.35" strokeLinecap="round"/>

                  <circle cx="124" cy="67" r="5" fill="#c8922a" fillOpacity="0.25"/>
                  <path d="M121.5 67 L123.2 68.8 L126.5 65.5" stroke="#c8922a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="133" y1="67" x2="162" y2="67" stroke="#0d1b2e" strokeWidth="1.5" strokeOpacity="0.35" strokeLinecap="round"/>

                  <circle cx="124" cy="82" r="5" fill="#c8922a" fillOpacity="0.25"/>
                  <path d="M121.5 82 L123.2 83.8 L126.5 80.5" stroke="#c8922a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="133" y1="82" x2="162" y2="82" stroke="#0d1b2e" strokeWidth="1.5" strokeOpacity="0.35" strokeLinecap="round"/>

                  <circle cx="124" cy="97" r="5" fill="#0d1b2e" fillOpacity="0.08"/>
                  <line x1="133" y1="97" x2="158" y2="97" stroke="#0d1b2e" strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round"/>
                </svg>
              </div>

              <h2
                id="avantages-title"
                className="font-display text-xl font-bold text-navy mb-6"
              >
                Pourquoi passer par nous ?
              </h2>
              <ul className="space-y-4 mb-10">
                {avantages.map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-full bg-gold flex items-center justify-center shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-3 h-3 text-white"
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
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {a}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="bg-navy rounded-xl p-6">
                <h3 className="font-display text-lg font-bold text-white mb-3">
                  Que se passe-t-il ensuite ?
                </h3>
                <ol className="space-y-3 text-sm">
                  {[
                    "Notre équipe étudie votre formulaire",
                    "Nous identifions le(s) constructeur(s) adapté(s)",
                    "Vous êtes mis en relation directement",
                    "Le constructeur vous contacte pour affiner votre projet",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="font-display font-bold text-gold shrink-0">
                        {i + 1}.
                      </span>
                      <span className="text-white/70">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            {/* Formulaire */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <DevisForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
