import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";

export const metadata: Metadata = {
  title: "Constructeur maison contemporaine à Béthune — Projet sur mesure",
  description:
    "Maison contemporaine à Béthune (Pas-de-Calais) : parcs, écoles, quartiers variés. Architecture design, matériaux modernes. Devis gratuit.",
  alternates: { canonical: "/constructeur-de-maison-contemporaine-nord/bethune" },
};

const data: CityMaisonData = {
  maisonTypeLabel: "Contemporaine",
  maisonTypeHref: "/constructeur-de-maison-contemporaine-nord",
  city: "Béthune",
  h1: "Constructeur de maison contemporaine à Béthune : projet sur mesure !",
  subtitle:
    "Béthune et ses parcs (Mont Sans Pareil, Perroy, Saint-Louis, Mont-Liébaut, Beuvry), ses écoles et ses quartiers variés — le bon endroit pour votre maison contemporaine.",
  intro:
    "Béthune, dans les Hauts-de-France, propose de nombreux espaces verts et parcs de loisirs : Mont Sans Pareil, Perroy, Saint-Louis, Mont-Liébaut et Beuvry. La ville dispose d'une infrastructure scolaire complète (écoles, collèges, lycées) répartie dans des quartiers variés : Beau Marais-Gare d'Eau-Espace Lafayette, Cheminots Huit Ter, Mont Liebaut, Rue de Lille Faubourg d'Arras. Un cadre de vie agréable pour les familles.",
  whyBuild:
    "La maison contemporaine requiert une expertise spécifique en matière de matériaux, de menuiseries, de colorimétrie et de distribution des pièces, différente de la construction traditionnelle. À Béthune, les constructeurs partenaires de Ma Maison dans le Nord réalisent une étude complète de vos besoins et de vos attentes pour concevoir une maison contemporaine parfaitement adaptée.",
  constructorAdvice:
    "Ma Maison dans le Nord travaille avec des professionnels reconnus de la région de Béthune pour leur sérieux et leur écoute. En nous contactant, vous bénéficiez d'une mise en relation ciblée avec le constructeur le plus adapté à votre projet de maison contemporaine — terrain, style, budget et délais.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-de-maison-contemporaine-nord/lille" },
    { label: "Arras", href: "/constructeur-de-maison-contemporaine-nord/arras" },
    { label: "Douai", href: "/constructeur-de-maison-contemporaine-nord/douai" },
    { label: "Valenciennes", href: "/constructeur-de-maison-contemporaine-nord/valenciennes" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-de-maison-contemporaine-nord/villeneuve-dascq" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} />;
}
