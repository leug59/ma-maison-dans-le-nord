import { MetadataRoute } from "next";

const baseUrl = "https://www.ma-maison-dans-le-nord.fr";

const typeUrls: Record<string, string> = {
  traditionnelle: "/constructeur-maison-traditionnelle-nord",
  contemporaine: "/constructeur-de-maison-contemporaine-nord",
  cubique: "/constructeur-maison-cubique-nord",
  "ossature-bois": "/constructeur-maison-bois-nord",
  "plain-pied": "/constructeur-maison-plain-pied-nord",
  passive: "/constructeur-nord-maison-passive",
  individuelle: "/constructeur-maison-individuelle-nord",
};

const cityPages: { type: string; cities: string[] }[] = [
  { type: "cubique", cities: ["lille", "arras", "douai", "valenciennes", "villeneuve-dascq", "lens"] },
  { type: "plain-pied", cities: ["lille", "arras", "douai", "valenciennes", "lens", "bethune"] },
  { type: "ossature-bois", cities: ["lille", "arras", "douai", "villeneuve-dascq", "valenciennes", "lens"] },
  { type: "passive", cities: ["lille", "douai", "arras", "valenciennes", "lens", "bethune"] },
  { type: "individuelle", cities: ["lille", "douai", "arras", "valenciennes", "villeneuve-dascq", "lens"] },
  { type: "contemporaine", cities: ["lille", "bethune", "arras", "douai", "valenciennes", "villeneuve-dascq", "lens"] },
  { type: "traditionnelle", cities: ["lille", "bethune", "arras", "douai", "valenciennes", "villeneuve-dascq", "lens"] },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/types-construction-maison-nord`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...Object.values(typeUrls).map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...cityPages.flatMap(({ type, cities }) =>
      cities.map((city) => ({
        url: `${baseUrl}${typeUrls[type]}/${city}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }))
    ),
    {
      url: `${baseUrl}/budget`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/etapes-construction`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/devis`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/avantages-constructeur-maison-nord`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/duree-vie-maison-ossature-bois-nord`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/construction-maison-connectee`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/choisir-terrain-a-vendre-nord`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/chauffage-construction-maison-neuve-nord`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
