import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison passive à Valenciennes — Notre sélection",
  description:
    "Maison passive à Valenciennes, l'une des villes les plus dynamiques de France. Constructeurs sélectionnés, aide terrain, devis rapide. Économies garanties.",
  alternates: { canonical: "/constructeur-nord-maison-passive/valenciennes" },
  openGraph: buildOpenGraph("/constructeur-nord-maison-passive/valenciennes", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Passive",
  maisonTypeHref: "/constructeur-nord-maison-passive",
  city: "Valenciennes",
  h1: "Constructeur de maison passive à Valenciennes : notre sélection",
  subtitle:
    "Valenciennes, l'une des villes les plus dynamiques de France, combine vie urbaine animée et espaces verts — idéal pour votre maison passive sur mesure.",
  openingIntro:
    "Valenciennes est une très jolie ville des Hauts-de-France qui abrite de nombreux endroits culturels et de loisir. Vivre dans la région s'avère être très agréable, notamment pour les amoureux de la nature. Valenciennes est également connue pour ses commerces, qui lui permettent d'être l'une des villes les plus dynamiques de France. Faire construire votre maison passive dans la région serait donc une bonne idée, à condition de trouver le bon constructeur de maison passive dans le Nord.",
  intro:
    "Valenciennes abrite de nombreux endroits culturels et de loisirs qui en font l'une des villes les plus dynamiques de France. La cité du Hainaut offre une vie très animée, avec ses commerces, ses restaurants et ses équipements sportifs de premier plan — dont l'aquatic center Nungesser (6 000 m², 3 bassins, toboggan de 20 m). La ville conjugue également des quartiers calmes et verdoyants pour ceux qui recherchent la tranquillité.",
  whyBuild:
    "Choisir la maison passive à Valenciennes, c'est opter pour un habitat confortable toute l'année avec une facture énergétique quasi nulle. La ville dynamique offre un marché immobilier actif avec des opportunités de terrains à bâtir dans la commune et ses environs. Notre sélection de constructeurs vous propose un accompagnement sur mesure de la conception jusqu'à la livraison.",
  constructorAdvice:
    "Ma Maison dans le Nord propose une sélection soigneuse de constructeurs de maisons passives à Valenciennes. Chaque expert est un professionnel réglementé avec une solide expérience en construction passive. Nous vous aidons également dans la recherche de terrain et nous vous fournissons rapidement des devis de la part des constructeurs sélectionnés.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-nord-maison-passive/lille" },
    { label: "Douai", href: "/constructeur-nord-maison-passive/douai" },
    { label: "Arras", href: "/constructeur-nord-maison-passive/arras" },
    { label: "Lens", href: "/constructeur-nord-maison-passive/lens" },
    { label: "Béthune", href: "/constructeur-nord-maison-passive/bethune" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-nord-maison-passive/valenciennes" />;
}
