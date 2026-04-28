import Link from "next/link";

const maisonLinks = [
  { label: "Maison traditionnelle", href: "/constructeur-maison-traditionnelle-nord" },
  { label: "Maison contemporaine", href: "/constructeur-de-maison-contemporaine-nord" },
  { label: "Maison cubique", href: "/constructeur-maison-cubique-nord" },
  { label: "Ossature bois", href: "/constructeur-maison-bois-nord" },
  { label: "Plain-pied", href: "/constructeur-maison-plain-pied-nord" },
  { label: "Maison passive", href: "/constructeur-nord-maison-passive" },
  { label: "Maison individuelle", href: "/constructeur-maison-individuelle-nord" },
];

const serviceLinks = [
  { label: "Budget de construction", href: "/budget" },
  { label: "Étapes de construction", href: "/etapes-construction" },
  { label: "Demander un devis", href: "/devis" },
];

const infoLinks = [
  { label: "À propos", href: "/a-propos" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Pied de page
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-xl font-bold text-white">
                Ma Maison{" "}
                <span className="text-gold">dans le Nord</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Votre spécialiste de la mise en relation avec les meilleurs
              constructeurs de maisons individuelles des Hauts-de-France.
            </p>
          </div>

          {/* Maisons */}
          <div>
            <h3 className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
              Types de maisons
            </h3>
            <ul className="space-y-2">
              {maisonLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
              Nos services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-gold text-xs font-semibold uppercase tracking-widest mb-4 mt-8">
              Informations
            </h3>
            <ul className="space-y-2">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
              Votre projet
            </h3>
            <p className="text-white/60 text-sm mb-6 leading-relaxed">
              Prêt à construire votre maison dans le Nord ? Obtenez une mise en
              relation gratuite avec nos constructeurs partenaires.
            </p>
            <Link
              href="/devis"
              className="inline-block px-6 py-3 bg-gold text-white text-sm font-semibold rounded-md hover:bg-gold-400 transition-colors"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Ma Maison dans le Nord. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="text-white/40 hover:text-white/60 text-xs transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-white/40 hover:text-white/60 text-xs transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
