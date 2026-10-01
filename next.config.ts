import type { NextConfig } from "next";

// [source, destination] — slash variants are auto-generated, no need to duplicate
const REDIRECT_PAIRS: [string, string][] = [
  // Pages principales
  ["/budget-construction-maison-nord",   "/budget"],
  ["/faq-construction-maison-nord",      "/faq"],
  ["/etapes-construction-maison-nord",   "/etapes-construction"],

  // Maison traditionnelle — villes
  ["/constructeur-maison-traditionnelle-lille",             "/constructeur-maison-traditionnelle-nord/lille"],
  ["/constructeur-maison-traditionnelle-arras",             "/constructeur-maison-traditionnelle-nord/arras"],
  ["/constructeur-maison-traditionnelle-douai",             "/constructeur-maison-traditionnelle-nord/douai"],
  ["/constructeur-maison-traditionnelle-valenciennes",      "/constructeur-maison-traditionnelle-nord/valenciennes"],
  ["/constructeur-maison-traditionnelle-bethune",           "/constructeur-maison-traditionnelle-nord/bethune"],
  ["/constructeur-maison-traditionnelle-villeneuve-dascq",  "/constructeur-maison-traditionnelle-nord/villeneuve-dascq"],

  // Maison contemporaine — villes
  ["/constructeur-de-maison-contemporaine-lille",              "/constructeur-de-maison-contemporaine-nord/lille"],
  ["/constructeur-maison-contemporaine-arras",                 "/constructeur-de-maison-contemporaine-nord/arras"],
  ["/constructeur-maison-contemporaine-douai",                 "/constructeur-de-maison-contemporaine-nord/douai"],
  ["/constructeur-de-maison-contemporaine-valenciennes",       "/constructeur-de-maison-contemporaine-nord/valenciennes"],
  ["/constructeur-maison-contemporaine-bethune",               "/constructeur-de-maison-contemporaine-nord/bethune"],
  ["/constructeur-de-maison-contemporaine-villeneuve-d-ascq",  "/constructeur-de-maison-contemporaine-nord/villeneuve-dascq"],

  // Maison cubique — villes
  ["/constructeur-maison-cubique-lille",              "/constructeur-maison-cubique-nord/lille"],
  ["/constructeur-maison-cubique-arras",              "/constructeur-maison-cubique-nord/arras"],
  ["/constructeur-maison-cubique-douai",              "/constructeur-maison-cubique-nord/douai"],
  ["/constructeur-maison-cubique-valenciennes",       "/constructeur-maison-cubique-nord/valenciennes"],
  ["/constructeur-maison-cubique-villeneuve-d-ascq",  "/constructeur-maison-cubique-nord/villeneuve-dascq"],

  // Ossature bois — villes
  ["/constructeur-maison-ossature-bois-lille",             "/constructeur-maison-bois-nord/lille"],
  ["/constructeur-maison-ossature-bois-arras",             "/constructeur-maison-bois-nord/arras"],
  ["/constructeur-maison-ossature-bois-douai",             "/constructeur-maison-bois-nord/douai"],
  ["/constructeur-maison-ossature-bois-valenciennes",      "/constructeur-maison-bois-nord/valenciennes"],
  ["/constructeur-maison-ossature-bois-villeneuve-ascq",   "/constructeur-maison-bois-nord/villeneuve-dascq"],

  // Plain-pied — villes
  ["/constructeur-maison-plain-pied-lille",         "/constructeur-maison-plain-pied-nord/lille"],
  ["/constructeur-maison-plain-pied-arras",         "/constructeur-maison-plain-pied-nord/arras"],
  ["/constructeur-maison-plain-pied-douai",         "/constructeur-maison-plain-pied-nord/douai"],
  ["/constructeur-maison-plain-pied-valenciennes",  "/constructeur-maison-plain-pied-nord/valenciennes"],
  ["/constructeur-maison-plain-pied-bethune",       "/constructeur-maison-plain-pied-nord/bethune"],
  ["/constructeur-maison-plain-pied-lens",          "/constructeur-maison-plain-pied-nord/lens"],

  // Maison passive — villes
  ["/constructeur-maison-passive-lille",            "/constructeur-nord-maison-passive/lille"],
  ["/constructeur-maison-passive-arras",            "/constructeur-nord-maison-passive/arras"],
  ["/constructeur-maison-passive-douai",            "/constructeur-nord-maison-passive/douai"],
  ["/construction-maison-passive-valenciennes",     "/constructeur-nord-maison-passive/valenciennes"],
  ["/constructeur-maison-passive-lens",             "/constructeur-nord-maison-passive/lens"],
  ["/constructeur-maison-passive-bethune",          "/constructeur-nord-maison-passive/bethune"],

  // Maison individuelle — villes
  ["/constructeur-maison-individuelle-lille",            "/constructeur-maison-individuelle-nord/lille"],
  ["/constructeur-maison-individuelle-arras",            "/constructeur-maison-individuelle-nord/arras"],
  ["/constructeur-maison-individuelle-douai",            "/constructeur-maison-individuelle-nord/douai"],
  ["/constructeur-maison-individuelle-valenciennes",     "/constructeur-maison-individuelle-nord/valenciennes"],
  ["/constructeur-maison-individuelle-villeneuve-dascq", "/constructeur-maison-individuelle-nord/villeneuve-dascq"],

  // Format WordPress : /type-nord-ville → /type-nord/ville

  // Traditionnelle
  ["/constructeur-maison-traditionnelle-nord-lille",             "/constructeur-maison-traditionnelle-nord/lille"],
  ["/constructeur-maison-traditionnelle-nord-arras",             "/constructeur-maison-traditionnelle-nord/arras"],
  ["/constructeur-maison-traditionnelle-nord-douai",             "/constructeur-maison-traditionnelle-nord/douai"],
  ["/constructeur-maison-traditionnelle-nord-valenciennes",      "/constructeur-maison-traditionnelle-nord/valenciennes"],
  ["/constructeur-maison-traditionnelle-nord-bethune",           "/constructeur-maison-traditionnelle-nord/bethune"],
  ["/constructeur-maison-traditionnelle-nord-villeneuve-dascq",  "/constructeur-maison-traditionnelle-nord/villeneuve-dascq"],

  // Contemporaine
  ["/constructeur-maison-contemporaine-nord-lille",             "/constructeur-de-maison-contemporaine-nord/lille"],
  ["/constructeur-maison-contemporaine-nord-arras",             "/constructeur-de-maison-contemporaine-nord/arras"],
  ["/constructeur-maison-contemporaine-nord-douai",             "/constructeur-de-maison-contemporaine-nord/douai"],
  ["/constructeur-maison-contemporaine-nord-valenciennes",      "/constructeur-de-maison-contemporaine-nord/valenciennes"],
  ["/constructeur-maison-contemporaine-nord-bethune",           "/constructeur-de-maison-contemporaine-nord/bethune"],
  ["/constructeur-maison-contemporaine-nord-villeneuve-dascq",  "/constructeur-de-maison-contemporaine-nord/villeneuve-dascq"],

  // Cubique
  ["/constructeur-maison-cubique-nord-lille",             "/constructeur-maison-cubique-nord/lille"],
  ["/constructeur-maison-cubique-nord-arras",             "/constructeur-maison-cubique-nord/arras"],
  ["/constructeur-maison-cubique-nord-douai",             "/constructeur-maison-cubique-nord/douai"],
  ["/constructeur-maison-cubique-nord-valenciennes",      "/constructeur-maison-cubique-nord/valenciennes"],
  ["/constructeur-maison-cubique-nord-villeneuve-dascq",  "/constructeur-maison-cubique-nord/villeneuve-dascq"],

  // Ossature bois
  ["/constructeur-maison-bois-nord-lille",            "/constructeur-maison-bois-nord/lille"],
  ["/constructeur-maison-bois-nord-arras",            "/constructeur-maison-bois-nord/arras"],
  ["/constructeur-maison-bois-nord-douai",            "/constructeur-maison-bois-nord/douai"],
  ["/constructeur-maison-bois-nord-valenciennes",     "/constructeur-maison-bois-nord/valenciennes"],
  ["/constructeur-maison-bois-nord-villeneuve-dascq", "/constructeur-maison-bois-nord/villeneuve-dascq"],

  // Plain-pied
  ["/constructeur-maison-plain-pied-nord-lille",            "/constructeur-maison-plain-pied-nord/lille"],
  ["/constructeur-maison-plain-pied-nord-arras",            "/constructeur-maison-plain-pied-nord/arras"],
  ["/constructeur-maison-plain-pied-nord-douai",            "/constructeur-maison-plain-pied-nord/douai"],
  ["/constructeur-maison-plain-pied-nord-valenciennes",     "/constructeur-maison-plain-pied-nord/valenciennes"],
  ["/constructeur-maison-plain-pied-nord-lens",             "/constructeur-maison-plain-pied-nord/lens"],
  ["/constructeur-maison-plain-pied-nord-bethune",          "/constructeur-maison-plain-pied-nord/bethune"],

  // Passive
  ["/constructeur-maison-passive-nord-lille",            "/constructeur-nord-maison-passive/lille"],
  ["/constructeur-maison-passive-nord-arras",            "/constructeur-nord-maison-passive/arras"],
  ["/constructeur-maison-passive-nord-douai",            "/constructeur-nord-maison-passive/douai"],
  ["/constructeur-maison-passive-nord-valenciennes",     "/constructeur-nord-maison-passive/valenciennes"],
  ["/constructeur-maison-passive-nord-lens",             "/constructeur-nord-maison-passive/lens"],
  ["/constructeur-maison-passive-nord-bethune",          "/constructeur-nord-maison-passive/bethune"],

  // Individuelle
  ["/constructeur-maison-individuelle-nord-lille",            "/constructeur-maison-individuelle-nord/lille"],
  ["/constructeur-maison-individuelle-nord-arras",            "/constructeur-maison-individuelle-nord/arras"],
  ["/constructeur-maison-individuelle-nord-douai",            "/constructeur-maison-individuelle-nord/douai"],
  ["/constructeur-maison-individuelle-nord-valenciennes",     "/constructeur-maison-individuelle-nord/valenciennes"],
  ["/constructeur-maison-individuelle-nord-villeneuve-dascq", "/constructeur-maison-individuelle-nord/villeneuve-dascq"],
];

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: false,
  // Disables Next.js built-in trailing-slash 308 — we handle slashes explicitly below
  skipTrailingSlashRedirect: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    // Each pair generates two rules: /slug and /slug/ → same final destination (single hop)
    const explicit = REDIRECT_PAIRS.flatMap(([source, destination]) => [
      { source,            destination, statusCode: 301 as const },
      { source: `${source}/`, destination, statusCode: 301 as const },
    ]);

    return [
      ...explicit,
      // Catch-all for any other trailing slash not covered above — must stay last
      { source: "/:path+/", destination: "/:path+", statusCode: 301 as const },
    ];
  },
};

export default nextConfig;
