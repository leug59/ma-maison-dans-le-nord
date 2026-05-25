export const BASE_URL = "https://www.ma-maison-dans-le-nord.fr";

export const OG_IMAGE = {
  url: `${BASE_URL}/images/hero-maison-nord.jpg`,
  width: 1200,
  height: 630,
  alt: "Constructeur de maison individuelle dans le Nord - Ma Maison dans le Nord",
};

export function buildOpenGraph(
  path: string,
  type: "website" | "article" = "website"
) {
  return {
    type,
    url: `${BASE_URL}${path}`,
    siteName: "Ma Maison dans le Nord" as const,
    locale: "fr_FR" as const,
    images: [OG_IMAGE],
  };
}
