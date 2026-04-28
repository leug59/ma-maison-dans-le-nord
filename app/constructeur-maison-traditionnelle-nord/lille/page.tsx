import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison traditionnelle à Lille — Architecture flamande",
  description:
    "Maison traditionnelle à Lille : briques rouges, toits pentus, chiens assis — l'architecture flamande emblématique du Nord. Constructeurs qualifiés. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-traditionnelle-nord/lille" },
  openGraph: buildOpenGraph("/constructeur-maison-traditionnelle-nord/lille", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Traditionnelle",
  maisonTypeHref: "/constructeur-maison-traditionnelle-nord",
  city: "Lille",
  h1: "Constructeur de maison traditionnelle à Lille",
  subtitle:
    "Le Vieux Lille et son architecture flamande — briques rouges, toits pentus, hautes menuiseries, chiens assis — incarnent l'identité de la construction traditionnelle nordiste.",
  intro:
    "Lille est la référence emblématique de l'architecture traditionnelle nordiste. Le quartier de la Vieille Lille illustre parfaitement le style flamand caractéristique de la région : briques rouges, toits pentus, menuiseries toutes en hauteur et souvent des chiens assis. Ce style architectural se retrouve dans les villes et communes alentour comme Haubourdin, Lesquin, Lambersart et Marcq-en-Barœul.",
  whyBuild:
    "Construire une maison traditionnelle à Lille, c'est exprimer son attachement au patrimoine architectural du Nord-Pas-de-Calais. Cette architecture chaleureuse et intemporelle s'intègre parfaitement dans le tissu urbain et résidentiel lillois. Elle offre une valorisation à la revente éprouvée et répond à l'aspiration profonde de nombreuses familles nées dans la région à habiter une maison typique de leur terroir.",
  constructorAdvice:
    "Ma Maison dans le Nord sélectionne ses constructeurs de maisons traditionnelles à Lille sur des critères stricts : professionnalisme, fiabilité, qualité d'écoute, excellence du conseil, respect des délais et des budgets. Complétez notre formulaire en ligne pour être mis en relation avec le professionnel le plus adapté à votre projet.",
  relatedCities: [
    { label: "Béthune", href: "/constructeur-maison-traditionnelle-nord/bethune" },
    { label: "Arras", href: "/constructeur-maison-traditionnelle-nord/arras" },
    { label: "Douai", href: "/constructeur-maison-traditionnelle-nord/douai" },
    { label: "Valenciennes", href: "/constructeur-maison-traditionnelle-nord/valenciennes" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-maison-traditionnelle-nord/villeneuve-dascq" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} />;
}
