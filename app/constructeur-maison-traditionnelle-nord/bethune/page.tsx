import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";

export const metadata: Metadata = {
  title: "Constructeur maison traditionnelle à Béthune — Smart City",
  description:
    "Maison traditionnelle à Béthune, Smart City depuis 2016 : écologie, digital, bien-être. Constructeurs qualifiés pour un projet personnalisé. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-traditionnelle-nord/bethune" },
};

const data: CityMaisonData = {
  maisonTypeLabel: "Traditionnelle",
  maisonTypeHref: "/constructeur-maison-traditionnelle-nord",
  city: "Béthune",
  h1: "Constructeur de maison traditionnelle à Béthune",
  subtitle:
    "Béthune, Smart City depuis 2016, tourne résolument vers l'avenir tout en conservant l'âme et le charme d'une ville nordiste à taille humaine.",
  intro:
    "Béthune est une ville tournée vers l'avenir. Depuis 2016, la municipalité a lancé une initiative Smart City ambitieuse, articulée autour de l'écologie, de l'économie collaborative, du développement numérique et du bien-être des habitants. Située dans le Pas-de-Calais, Béthune se distingue comme une agglomération dynamique, innovante et attentive aux enjeux contemporains.",
  whyBuild:
    "Construire une maison traditionnelle à Béthune, c'est trouver l'équilibre parfait entre l'ancrage dans le patrimoine architectural nordiste et la modernité de la ville. La maison traditionnelle, avec ses briques rouges et ses volumes chaleureux, s'inscrit harmonieusement dans le tissu urbain de Béthune tout en bénéficiant des nouvelles normes énergétiques (RE2020).",
  constructorAdvice:
    "Ma Maison dans le Nord réalise une étude complète de vos besoins : préférences architecturales, orientation de la maison, choix des matériaux et budget. Nous vous mettons ensuite en relation avec des constructeurs de maisons traditionnelles reconnus dans la région béthunoise, qui vous proposent une proposition personnalisée et vous accompagnent jusqu'à la remise des clés.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-traditionnelle-nord/lille" },
    { label: "Arras", href: "/constructeur-maison-traditionnelle-nord/arras" },
    { label: "Douai", href: "/constructeur-maison-traditionnelle-nord/douai" },
    { label: "Valenciennes", href: "/constructeur-maison-traditionnelle-nord/valenciennes" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-maison-traditionnelle-nord/villeneuve-dascq" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} />;
}
