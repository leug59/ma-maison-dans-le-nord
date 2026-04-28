export const OG_IMAGE = {
  url: "/images/hero-maison-nord.jpg",
  width: 1200,
  height: 630,
  alt: "Constructeur de maison individuelle dans le Nord - Ma Maison dans le Nord",
};

export function buildOpenGraph(
  url: string,
  type: "website" | "article" = "website"
) {
  return {
    type,
    url,
    siteName: "Ma Maison dans le Nord" as const,
    locale: "fr_FR" as const,
    images: [OG_IMAGE],
  };
}
