import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── Pages principales ────────────────────────────────────────────
      {
        source: "/budget-construction-maison-nord",
        destination: "/budget",
        permanent: true,
      },
      {
        source: "/faq-construction-maison-nord",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/etapes-construction-maison-nord",
        destination: "/etapes-construction",
        permanent: true,
      },

      // ── Maison traditionnelle — villes ───────────────────────────────
      {
        source: "/constructeur-maison-traditionnelle-lille",
        destination: "/constructeur-maison-traditionnelle-nord/lille",
        permanent: true,
      },
      {
        source: "/constructeur-maison-traditionnelle-arras",
        destination: "/constructeur-maison-traditionnelle-nord/arras",
        permanent: true,
      },
      {
        source: "/constructeur-maison-traditionnelle-douai",
        destination: "/constructeur-maison-traditionnelle-nord/douai",
        permanent: true,
      },
      {
        source: "/constructeur-maison-traditionnelle-valenciennes",
        destination: "/constructeur-maison-traditionnelle-nord/valenciennes",
        permanent: true,
      },
      {
        source: "/constructeur-maison-traditionnelle-bethune",
        destination: "/constructeur-maison-traditionnelle-nord/bethune",
        permanent: true,
      },
      {
        source: "/constructeur-maison-traditionnelle-villeneuve-dascq",
        destination: "/constructeur-maison-traditionnelle-nord/villeneuve-dascq",
        permanent: true,
      },

      // ── Maison contemporaine — villes ────────────────────────────────
      {
        source: "/constructeur-de-maison-contemporaine-lille",
        destination: "/constructeur-de-maison-contemporaine-nord/lille",
        permanent: true,
      },
      {
        source: "/constructeur-maison-contemporaine-arras",
        destination: "/constructeur-de-maison-contemporaine-nord/arras",
        permanent: true,
      },
      {
        source: "/constructeur-maison-contemporaine-douai",
        destination: "/constructeur-de-maison-contemporaine-nord/douai",
        permanent: true,
      },
      {
        source: "/constructeur-de-maison-contemporaine-valenciennes",
        destination: "/constructeur-de-maison-contemporaine-nord/valenciennes",
        permanent: true,
      },
      {
        source: "/constructeur-maison-contemporaine-bethune",
        destination: "/constructeur-de-maison-contemporaine-nord/bethune",
        permanent: true,
      },
      {
        source: "/constructeur-de-maison-contemporaine-villeneuve-d-ascq",
        destination: "/constructeur-de-maison-contemporaine-nord/villeneuve-dascq",
        permanent: true,
      },

      // ── Maison cubique — villes ──────────────────────────────────────
      {
        source: "/constructeur-maison-cubique-lille",
        destination: "/constructeur-maison-cubique-nord/lille",
        permanent: true,
      },
      {
        source: "/constructeur-maison-cubique-arras",
        destination: "/constructeur-maison-cubique-nord/arras",
        permanent: true,
      },
      {
        source: "/constructeur-maison-cubique-douai",
        destination: "/constructeur-maison-cubique-nord/douai",
        permanent: true,
      },
      {
        source: "/constructeur-maison-cubique-valenciennes",
        destination: "/constructeur-maison-cubique-nord/valenciennes",
        permanent: true,
      },
      {
        source: "/constructeur-maison-cubique-villeneuve-d-ascq",
        destination: "/constructeur-maison-cubique-nord/villeneuve-dascq",
        permanent: true,
      },

      // ── Ossature bois — villes ───────────────────────────────────────
      {
        source: "/constructeur-maison-ossature-bois-lille",
        destination: "/constructeur-maison-bois-nord/lille",
        permanent: true,
      },
      {
        source: "/constructeur-maison-ossature-bois-arras",
        destination: "/constructeur-maison-bois-nord/arras",
        permanent: true,
      },
      {
        source: "/constructeur-maison-ossature-bois-douai",
        destination: "/constructeur-maison-bois-nord/douai",
        permanent: true,
      },
      {
        source: "/constructeur-maison-ossature-bois-valenciennes",
        destination: "/constructeur-maison-bois-nord/valenciennes",
        permanent: true,
      },
      {
        source: "/constructeur-maison-ossature-bois-villeneuve-ascq",
        destination: "/constructeur-maison-bois-nord/villeneuve-dascq",
        permanent: true,
      },

      // ── Plain-pied — villes ──────────────────────────────────────────
      {
        source: "/constructeur-maison-plain-pied-lille",
        destination: "/constructeur-maison-plain-pied-nord/lille",
        permanent: true,
      },
      {
        source: "/constructeur-maison-plain-pied-arras",
        destination: "/constructeur-maison-plain-pied-nord/arras",
        permanent: true,
      },
      {
        source: "/constructeur-maison-plain-pied-douai",
        destination: "/constructeur-maison-plain-pied-nord/douai",
        permanent: true,
      },
      {
        source: "/constructeur-maison-plain-pied-valenciennes",
        destination: "/constructeur-maison-plain-pied-nord/valenciennes",
        permanent: true,
      },
      {
        source: "/constructeur-maison-plain-pied-bethune",
        destination: "/constructeur-maison-plain-pied-nord/bethune",
        permanent: true,
      },
      {
        source: "/constructeur-maison-plain-pied-lens",
        destination: "/constructeur-maison-plain-pied-nord/lens",
        permanent: true,
      },

      // ── Maison passive — villes ──────────────────────────────────────
      {
        source: "/constructeur-maison-passive-lille",
        destination: "/constructeur-nord-maison-passive/lille",
        permanent: true,
      },
      {
        source: "/constructeur-maison-passive-arras",
        destination: "/constructeur-nord-maison-passive/arras",
        permanent: true,
      },
      {
        source: "/constructeur-maison-passive-douai",
        destination: "/constructeur-nord-maison-passive/douai",
        permanent: true,
      },
      {
        source: "/construction-maison-passive-valenciennes",
        destination: "/constructeur-nord-maison-passive/valenciennes",
        permanent: true,
      },
      {
        source: "/constructeur-maison-passive-lens",
        destination: "/constructeur-nord-maison-passive/lens",
        permanent: true,
      },
      {
        source: "/constructeur-maison-passive-bethune",
        destination: "/constructeur-nord-maison-passive/bethune",
        permanent: true,
      },

      // ── Maison individuelle — villes ─────────────────────────────────
      {
        source: "/constructeur-maison-individuelle-lille",
        destination: "/constructeur-maison-individuelle-nord/lille",
        permanent: true,
      },
      {
        source: "/constructeur-maison-individuelle-arras",
        destination: "/constructeur-maison-individuelle-nord/arras",
        permanent: true,
      },
      {
        source: "/constructeur-maison-individuelle-douai",
        destination: "/constructeur-maison-individuelle-nord/douai",
        permanent: true,
      },
      {
        source: "/constructeur-maison-individuelle-valenciennes",
        destination: "/constructeur-maison-individuelle-nord/valenciennes",
        permanent: true,
      },
      {
        source: "/constructeur-maison-individuelle-villeneuve-dascq",
        destination: "/constructeur-maison-individuelle-nord/villeneuve-dascq",
        permanent: true,
      },

    ];
  },
};

export default nextConfig;
