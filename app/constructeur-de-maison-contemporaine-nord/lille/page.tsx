import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison contemporaine à Lille — Satisfaction garantie",
  description:
    "Maison contemporaine à Lille, capitale européenne de la culture 2004. Lignes épurées, grandes baies vitrées, matériaux modernes. Devis gratuit.",
  alternates: { canonical: "/constructeur-de-maison-contemporaine-nord/lille" },
  openGraph: buildOpenGraph("/constructeur-de-maison-contemporaine-nord/lille", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Contemporaine",
  maisonTypeHref: "/constructeur-de-maison-contemporaine-nord",
  city: "Lille",
  h1: "Constructeur de maison contemporaine à Lille : satisfaction garantie",
  subtitle:
    "Lille, capitale européenne de la culture 2004, avec la Gare Saint-Sauveur, la Vieille Ville, le Parc Matisse et la Braderie — un écrin pour votre maison contemporaine.",
  intro:
    "Lille est la plus grande métropole du Nord et a été capitale européenne de la culture en 2004. La ville offre une richesse culturelle remarquable : la Gare Saint-Sauveur réhabilitée accueille les programmations de plus de 50 associations locales. Les habitants profitent aussi des rues de la Vieille Lille, du Parc Matisse, du Jardin des Géants, des terrasses de la Grand'Place et de la célèbre Braderie de septembre, l'un des plus grands marchés aux puces du monde.",
  whyBuild:
    "Trouver un constructeur de maison contemporaine qui comprend votre vision, respecte votre budget et opère localement — c'est « la perle rare ». Ma Maison dans le Nord facilite cette recherche en présélectionnant des professionnels selon des critères précis, vérifiant leur fiabilité pour que vous puissiez avancer sereinement dans votre projet.",
  constructorAdvice:
    "Ma Maison dans le Nord vérifie la fiabilité de chaque constructeur partenaire à Lille avant de vous mettre en relation. Vous pouvez ainsi contacter nos partenaires en toute confiance, en sachant qu'ils ont été évalués pour leur professionnalisme, leur respect des délais et leur capacité à livrer une maison contemporaine conforme à vos attentes.",
  relatedCities: [
    { label: "Béthune", href: "/constructeur-de-maison-contemporaine-nord/bethune" },
    { label: "Arras", href: "/constructeur-de-maison-contemporaine-nord/arras" },
    { label: "Douai", href: "/constructeur-de-maison-contemporaine-nord/douai" },
    { label: "Valenciennes", href: "/constructeur-de-maison-contemporaine-nord/valenciennes" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-de-maison-contemporaine-nord/villeneuve-dascq" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} />;
}
