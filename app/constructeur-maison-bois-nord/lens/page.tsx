import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison ossature bois à Lens — Écologique et performant",
  description:
    "Maison à ossature bois à Lens, au cœur du bassin minier UNESCO. Construction légère, adaptée aux sols de la région, écologique et économe en énergie. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-bois-nord/lens" },
  openGraph: buildOpenGraph("/constructeur-maison-bois-nord/lens", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Ossature bois",
  maisonTypeHref: "/constructeur-maison-bois-nord",
  city: "Lens",
  h1: "Constructeur de maison à ossature bois à Lens",
  subtitle:
    "Lens, au cœur du bassin minier UNESCO, offre des terrains accessibles pour votre maison à ossature bois — légère, écologique et parfaitement adaptée aux sols de la région.",
  openingIntro:
    "Vous souhaitez faire construire une maison à ossature bois à Lens ? Cette ville du Louvre-Lens, en pleine reconversion et renouveau urbain, offre des opportunités foncières intéressantes pour votre projet de maison écologique.",
  intro:
    "Lens est une ville du Pas-de-Calais d'environ 32 000 habitants, au cœur du bassin minier classé au Patrimoine mondial de l'UNESCO en 2012. La fermeture progressive des houillères a libéré de nombreuses parcelles qui font aujourd'hui l'objet de programmes de réhabilitation et de construction neuve. Le Louvre-Lens, inauguré en 2012, a transformé l'image de la ville en la propulsant sur la carte culturelle internationale. La gare de Lens dessert Arras en 20 minutes et Lille en 30 minutes par TER, offrant une mobilité régionale optimale.",
  whyBuild:
    "Le bassin minier de Lens se caractérise par des sols argileux et parfois remaniés par l'exploitation historique du charbon. La maison à ossature bois présente l'avantage d'une structure légère qui s'adapte mieux à ces types de terrains que le béton traditionnel. Elle offre également des performances thermiques excellentes — particulièrement appréciables dans le climat nordiste — et des délais de construction sensiblement réduits. Un atout de poids dans un secteur où l'offre foncière évolue rapidement.",
  constructorAdvice:
    "Ma Maison dans le Nord sélectionne rigoureusement ses constructeurs partenaires spécialisés en ossature bois dans l'agglomération Lens-Liévin. Chaque professionnel est choisi pour sa maîtrise technique de la construction bois, sa connaissance du PLU lensois et ses références vérifiées dans la région. Contactez-nous pour une mise en relation sans engagement.",
  relatedCities: [
    { label: "Arras", href: "/constructeur-maison-bois-nord/arras" },
    { label: "Douai", href: "/constructeur-maison-bois-nord/douai" },
    { label: "Lille", href: "/constructeur-maison-bois-nord/lille" },
    { label: "Valenciennes", href: "/constructeur-maison-bois-nord/valenciennes" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-maison-bois-nord/lens" />;
}
