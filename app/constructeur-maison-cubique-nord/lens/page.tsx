import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison cubique à Lens — Architecture contemporaine",
  description:
    "Maison cubique à Lens, ville du Louvre-Lens et du bassin minier UNESCO. Toit plat, volumes géométriques, design ultra-moderne dans le Pas-de-Calais. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-cubique-nord/lens" },
  openGraph: buildOpenGraph("/constructeur-maison-cubique-nord/lens", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Cubique",
  maisonTypeHref: "/constructeur-maison-cubique-nord",
  city: "Lens",
  h1: "Constructeur de maison cubique à Lens",
  subtitle:
    "Lens se modernise — du Louvre-Lens aux nouvelles zones résidentielles, la maison cubique contemporaine s'inscrit parfaitement dans la reconversion et le renouveau de la ville.",
  openingIntro:
    "Lens, ville symbole du renouveau du bassin minier, est l'endroit idéal pour construire une maison cubique aux lignes résolument contemporaines. L'équipe de Ma Maison dans le Nord vous accompagne pour trouver le bon constructeur dans l'agglomération Lens-Liévin.",
  intro:
    "Lens s'est profondément transformée depuis la fermeture des houillères. La ville du Pas-de-Calais compte environ 32 000 habitants et appartient à l'agglomération Lens-Liévin qui regroupe plus de 250 000 personnes. Le Louvre-Lens — bâtiment contemporain signé SANAA — incarne le virage culturel et architectural de la ville. Des programmes immobiliers neufs se développent dans les quartiers en rénovation, avec des terrains bien exposés et adaptés à l'architecture cubique à toit plat.",
  whyBuild:
    "La maison cubique dialogue naturellement avec l'architecture du Louvre-Lens et les nouveaux projets urbains lensois. À Lens, où la reconversion industrielle a libéré de nombreuses parcelles, ce type de construction offre une grande modularité intérieure et une haute valeur esthétique. Son toit plat permet en outre l'installation de panneaux solaires ou d'un toit-terrasse, particulièrement appréciable lors des journées ensoleillées.",
  constructorAdvice:
    "Un constructeur de maison cubique à Lens doit maîtriser l'étanchéité des toits plats — point critique dans le climat nordiste — ainsi que la gestion des ouvertures et l'intégration des menuiseries aluminium. Ma Maison dans le Nord vous met en relation avec des partenaires sélectionnés pour leur expertise en maison cubique dans le Pas-de-Calais.",
  relatedCities: [
    { label: "Arras", href: "/constructeur-maison-cubique-nord/arras" },
    { label: "Douai", href: "/constructeur-maison-cubique-nord/douai" },
    { label: "Lille", href: "/constructeur-maison-cubique-nord/lille" },
    { label: "Valenciennes", href: "/constructeur-maison-cubique-nord/valenciennes" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-maison-cubique-nord/villeneuve-dascq" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-maison-cubique-nord/lens" />;
}
