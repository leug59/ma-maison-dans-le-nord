import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison individuelle à Valenciennes — Sur mesure",
  description:
    "Maison individuelle à Valenciennes : 17 écoles, 6 collèges, 7 lycées, grandes écoles. Constructeurs sélectionnés. Tous styles. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-individuelle-nord/valenciennes" },
  openGraph: buildOpenGraph("/constructeur-maison-individuelle-nord/valenciennes", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Individuelle",
  maisonTypeHref: "/constructeur-maison-individuelle-nord",
  city: "Valenciennes",
  h1: "Constructeur de maison individuelle à Valenciennes",
  subtitle:
    "Valenciennes et son agglomération (Beuvrages, Petite-Forêt, Marly, Anzin…) offrent toutes les conditions pour réussir votre projet de maison individuelle.",
  openingIntro:
    "Votre projet immobilier n'est pas encore bien défini ? Vous ne savez pas encore si vous allez vous implanter à Valenciennes ou dans une ville aux alentours ?",
  intro:
    "Valenciennes dispose d'une infrastructure éducative complète : 17 écoles primaires (dont Saint-Exupéry, Jean Mineur et Françoise Badar), 6 collèges, 7 lycées, ainsi que des établissements d'enseignement supérieur comme Polytechnique Hauts-de-France et Rubika. Les communes avoisinantes de Beuvrages, Petite-Forêt, La Sentinelle, Aulnoy-lez-Valenciennes, Saint-Saulve, Marly, Anzin et Sambre offrent le même niveau de qualité de vie tout en proposant souvent plus d'espace pour construire.",
  whyBuild:
    "Votre maison individuelle à Valenciennes est 100 % personnalisable : style traditionnel ou contemporain, cubique ou ossature bois, plain-pied ou avec étage, avec garage ou non, avec bureau ou chambre supplémentaire, avec accès PMR si nécessaire. L'équipe de Ma Maison dans le Nord est là pour vous aider à définir votre projet et trouver le constructeur idéal.",
  constructorAdvice:
    "Nos partenaires constructeurs de maisons individuelles à Valenciennes ont été sélectionnés pour leur écoute, leur professionnalisme et leur respect des budgets. Ils vous accompagnent de la conception des plans jusqu'à la remise des clés, en incluant la recherche de terrain si nécessaire.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-individuelle-nord/lille" },
    { label: "Douai", href: "/constructeur-maison-individuelle-nord/douai" },
    { label: "Arras", href: "/constructeur-maison-individuelle-nord/arras" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-maison-individuelle-nord/villeneuve-dascq" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-maison-individuelle-nord/valenciennes" />;
}
