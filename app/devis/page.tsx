import type { Metadata } from "next";
import DevisForm from "@/app/_components/DevisForm";

export const metadata: Metadata = {
  title: "Demander un devis gratuit — Construction de maison dans le Nord",
  description:
    "Décrivez votre projet de maison individuelle dans les Hauts-de-France et recevez une mise en relation gratuite avec nos constructeurs partenaires. Devis sans engagement.",
  alternates: { canonical: "/devis" },
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
