import type { Metadata } from "next";
import ContactForm from "@/app/_components/ContactForm";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Contact — Ma Maison dans le Nord",
  description:
    "Contactez l'équipe de Ma Maison dans le Nord pour toute question sur votre projet de construction de maison individuelle dans les Hauts-de-France.",
  alternates: { canonical: "/contact" },
  openGraph: buildOpenGraph("/contact", "website"),
};

const infos = [
  {
    label: "Zone d'intervention",
    value: "Nord, Pas-de-Calais\nHauts-de-France",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    label: "Délai de réponse",
    value: "24 à 48h ouvrées",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-24 px-4" aria-label="En-tête">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
            Nous sommes à votre écoute
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Contactez-nous
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Une question sur votre projet de construction ? Notre équipe vous
            répond dans les 24 à 48h.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4" aria-label="Coordonnées et formulaire de contact">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Infos */}
            <aside className="lg:col-span-2 space-y-8 order-2 lg:order-1" aria-labelledby="infos-title">
              {/* Illustration */}
              <div className="flex justify-center lg:justify-start" aria-hidden="true">
                <svg viewBox="0 0 180 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-44 h-auto">
                  {/* House body */}
                  <rect x="20" y="72" width="100" height="72" rx="2" fill="#0d1b2e" fillOpacity="0.06"/>
                  {/* Roof */}
                  <polygon points="10,72 70,22 130,72" fill="#0d1b2e" fillOpacity="0.10"/>
                  {/* Roof ridge line */}
                  <polyline points="10,72 70,22 130,72" stroke="#0d1b2e" strokeWidth="2" strokeOpacity="0.3" strokeLinejoin="round" fill="none"/>
                  {/* Chimney */}
                  <rect x="90" y="34" width="14" height="22" rx="1" fill="#0d1b2e" fillOpacity="0.12"/>
                  {/* Door */}
                  <rect x="52" y="105" width="36" height="39" rx="3" fill="#c8922a" fillOpacity="0.75"/>
                  <circle cx="84" cy="126" r="2.5" fill="white" fillOpacity="0.8"/>
                  {/* Left window */}
                  <rect x="26" y="83" width="26" height="20" rx="2" fill="#c8922a" fillOpacity="0.35"/>
                  <line x1="39" y1="83" x2="39" y2="103" stroke="white" strokeWidth="1.5" strokeOpacity="0.6"/>
                  <line x1="26" y1="93" x2="52" y2="93" stroke="white" strokeWidth="1.5" strokeOpacity="0.6"/>
                  {/* Right window */}
                  <rect x="88" y="83" width="26" height="20" rx="2" fill="#c8922a" fillOpacity="0.35"/>
                  <line x1="101" y1="83" x2="101" y2="103" stroke="white" strokeWidth="1.5" strokeOpacity="0.6"/>
                  <line x1="88" y1="93" x2="114" y2="93" stroke="white" strokeWidth="1.5" strokeOpacity="0.6"/>
                  {/* Speech bubble */}
                  <rect x="108" y="8" width="62" height="46" rx="10" fill="#c8922a"/>
                  <polygon points="118,54 132,54 120,66" fill="#c8922a"/>
                  {/* Envelope in bubble */}
                  <rect x="118" y="18" width="42" height="26" rx="3" fill="white" fillOpacity="0.2"/>
                  <polyline points="118,18 139,32 160,18" stroke="white" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                  <line x1="118" y1="44" x2="132" y2="44" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round"/>
                  <line x1="118" y1="38" x2="145" y2="38" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round"/>
                </svg>
              </div>

              <h2
                id="infos-title"
                className="font-display text-xl font-bold text-navy"
              >
                Nos coordonnées
              </h2>
              {infos.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-gold shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    <p className="text-navy whitespace-pre-line leading-relaxed">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}

              <div className="bg-gray-50 rounded-xl p-6 mt-8">
                <h3 className="font-display font-bold text-navy mb-3">
                  Vous préférez un devis ?
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Pour une demande de mise en relation avec un constructeur,
                  utilisez notre formulaire dédié.
                </p>
                <a
                  href="/devis"
                  className="inline-block px-5 py-2.5 bg-gold text-white text-sm font-semibold rounded-lg hover:bg-gold-400 transition-colors"
                >
                  Formulaire de devis
                </a>
              </div>
            </aside>

            {/* Formulaire */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <h2 className="font-display text-xl font-bold text-navy mb-8">
                Envoyez-nous un message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
