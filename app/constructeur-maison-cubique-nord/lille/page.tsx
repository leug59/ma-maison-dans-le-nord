import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison cubique à Lille — Projet sur mesure",
  description:
    "Trouvez votre constructeur de maison cubique à Lille et dans la métropole. Architecture moderne à toit plat, cubes emboîtés, grandes baies vitrées. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-cubique-nord/lille" },
  openGraph: buildOpenGraph("/constructeur-maison-cubique-nord/lille", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Cubique",
  maisonTypeHref: "/constructeur-maison-cubique-nord",
  city: "Lille",
  h1: "Constructeur de maison cubique à Lille",
  subtitle:
    "Architecture contemporaine à toit plat et volumes géométriques — dans la métropole lilloise et les communes périphériques comme Lesquin, Marcq-en-Barœul et Roubaix.",
  intro:
    "La métropole lilloise offre de belles opportunités pour la construction de maisons cubiques. Si le centre historique de Vieux Lille est peu propice à ce style architectural, les communes périphériques comme Lesquin, Marcq-en-Barœul et Roubaix accueillent de plus en plus cette architecture contemporaine aux volumes géométriques et aux toits plats. Le terrain relativement plat de la région favorise ce type de construction.",
  whyBuild:
    "La maison cubique s'intègre parfaitement dans le paysage résidentiel de la périphérie lilloise. Son architecture aux lignes épurées, ses grandes surfaces vitrées et ses volumes emboîtés séduisent de plus en plus de familles souhaitant se démarquer du bâti traditionnel tout en profitant de la proximité de la métropole. Avant de lancer votre projet, vérifiez le certificat d'urbanisme de votre parcelle : certaines communes imposent des règles architecturales spécifiques.",
  constructorAdvice:
    "Construire une maison cubique requiert un constructeur maîtrisant les spécificités de l'architecture contemporaine : toiture terrasse, étanchéité renforcée, grandes menuiseries aluminium. Chez Ma Maison dans le Nord, nous vous mettons en relation avec des professionnels sélectionnés pour leur expertise dans ce domaine, leur connaissance des réglementations locales (PLU) et leur capacité à vous accompagner de la conception des plans jusqu'à la remise des clés.",
  relatedCities: [
    { label: "Arras", href: "/constructeur-maison-cubique-nord/arras" },
    { label: "Douai", href: "/constructeur-maison-cubique-nord/douai" },
    { label: "Valenciennes", href: "/constructeur-maison-cubique-nord/valenciennes" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-maison-cubique-nord/villeneuve-dascq" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-maison-cubique-nord/lille" />;
}
