"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const maisonTypes = [
  { label: "Maison traditionnelle", href: "/constructeur-maison-traditionnelle-nord" },
  { label: "Maison contemporaine", href: "/constructeur-de-maison-contemporaine-nord" },
  { label: "Maison cubique", href: "/constructeur-maison-cubique-nord" },
  { label: "Ossature bois", href: "/constructeur-maison-bois-nord" },
  { label: "Plain-pied", href: "/constructeur-maison-plain-pied-nord" },
  { label: "Maison passive", href: "/constructeur-nord-maison-passive" },
  { label: "Maison individuelle", href: "/constructeur-maison-individuelle-nord" },
];

const navLinks = [
  { label: "Budget", href: "/budget" },
  { label: "Étapes", href: "/etapes-construction" },
  { label: "À propos", href: "/a-propos" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  return (
    <header className="bg-navy sticky top-0 z-50 shadow-lg">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Navigation principale"
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-white font-display text-lg font-bold leading-tight">
              Ma Maison{" "}
              <span className="text-gold">dans le Nord</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Maisons dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                  maisonTypes.some(t => pathname.startsWith(t.href)) || pathname.startsWith("/types-construction-maison-nord")
                    ? "text-gold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                Les maisons
                <svg
                  className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                  {maisonTypes.map((type) => (
                    <Link
                      key={type.href}
                      href={type.href}
                      className="block px-4 py-2.5 text-sm text-navy hover:bg-gold/10 hover:text-gold transition-colors"
                    >
                      {type.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/devis"
              className="ml-3 px-5 py-2 bg-gold text-white text-sm font-semibold rounded-md hover:bg-gold-400 transition-colors"
            >
              Demander un devis
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10 mt-1">
            <div className="pt-3 space-y-1">
              <p className="px-3 pt-1 pb-2 text-xs font-semibold text-white/40 uppercase tracking-wider">
                Types de maisons
              </p>
              {maisonTypes.map((type) => (
                <Link
                  key={type.href}
                  href={type.href}
                  className="block px-5 py-2 text-sm text-white/70 hover:text-gold transition-colors"
                >
                  {type.label}
                </Link>
              ))}
              <div className="border-t border-white/10 pt-2 mt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      pathname === link.href
                        ? "text-gold"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="px-3 pt-2">
                <Link
                  href="/devis"
                  className="block px-5 py-3 bg-gold text-white text-sm font-semibold rounded-md text-center hover:bg-gold-400 transition-colors"
                >
                  Demander un devis gratuit
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
