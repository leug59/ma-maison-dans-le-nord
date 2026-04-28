import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison cubique à Villeneuve-d'Ascq — Sur mesure",
  description:
    "Construisez votre maison cubique à Villeneuve-d'Ascq, technopole verte entre Lille et Roubaix. Architecture contemporaine personnalisée. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-cubique-nord/villeneuve-dascq" },
  openGraph: buildOpenGraph("/constructeur-maison-cubique-nord/villeneuve-dascq", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Cubique",
  maisonTypeHref: "/constructeur-maison-cubique-nord",
  city: "Villeneuve-d'Ascq",
  h1: "Constructeur de maison cubique à Villeneuve d'Ascq",
  subtitle:
    "Technopole verte entre Lille et Roubaix, Villeneuve-d'Ascq réunit toutes les conditions pour accueillir votre maison cubique contemporaine.",
  intro:
    "Villeneuve-d'Ascq est stratégiquement positionnée entre Lille et Roubaix. La commune dispose d'infrastructures pour les jeunes enfants comme pour les étudiants, et bénéficie d'un réseau de transports exceptionnel (métro, bus, TER, autoroutes). Désignée « technopole verte » pour la concentration d'entreprises et de laboratoires de recherche (INSERM, INRIA, CNRS, Haute-Borne), elle combine vie professionnelle dynamique et cadre de vie agréable.",
  whyBuild:
    "L'architecture cubique s'intègre naturellement dans l'identité moderne et tournée vers l'avenir de Villeneuve-d'Ascq. Les volumes géométriques, les toits plats et les grandes baies vitrées créent des espaces de vie ouverts et lumineux, en parfaite harmonie avec l'esprit résolument contemporain de la ville. C'est un choix idéal pour les jeunes familles et les professionnels qui veulent habiter une maison originale à proximité de Lille.",
  constructorAdvice:
    "Ma Maison dans le Nord vous accompagne de la définition de votre projet jusqu'à la mise en relation avec le constructeur le plus adapté. Décrivez-nous votre projet — terrain, budget, surface — et notre équipe sélectionne parmi nos partenaires spécialisés en architecture cubique celui qui correspond le mieux à vos attentes.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-cubique-nord/lille" },
    { label: "Arras", href: "/constructeur-maison-cubique-nord/arras" },
    { label: "Douai", href: "/constructeur-maison-cubique-nord/douai" },
    { label: "Valenciennes", href: "/constructeur-maison-cubique-nord/valenciennes" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} />;
}
