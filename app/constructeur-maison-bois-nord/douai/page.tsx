import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison ossature bois à Douai — 100 % sur mesure",
  description:
    "Maison à ossature bois à Douai, ville dynamique à 20 min de Lille. Construction écologique avec garantie de prix et de délais. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-bois-nord/douai" },
  openGraph: buildOpenGraph("/constructeur-maison-bois-nord/douai", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Ossature bois",
  maisonTypeHref: "/constructeur-maison-bois-nord",
  city: "Douai",
  h1: "Constructeur de maison à ossature bois à Douai : projet 100 % sur mesure",
  subtitle:
    "Douai, ville dynamique à 20 min de Lille en TER et 1h20 de Paris en TGV, réunit toutes les conditions pour accueillir votre maison à ossature bois.",
  intro:
    "Douai est une ville dynamique du Nord, excellemment connectée : 20 minutes de Lille par TER et 1 heure 20 de Paris en TGV. Ses quartiers — Frais-Marais, Faubourg de Béthune, Résidence Gayant — offrent des cadres de vie variés. La ville est reconnue comme un endroit où il fait bon vivre dans les Hauts-de-France, avec des équipements culturels, sportifs et de loisirs de qualité.",
  whyBuild:
    "La maison à ossature bois est une solution écologique, économique et durable parfaitement adaptée à Douai. Les constructeurs engagent contractuellement un prix ferme et des délais respectés, protégeant ainsi votre budget contre les dérapages. La légèreté du bois est aussi un avantage sur les terrains parfois argileux de l'agglomération douaisienne.",
  constructorAdvice:
    "Nos partenaires constructeurs d'ossature bois à Douai garantissent l'équilibre financier de votre projet tout en assurant la qualité de la construction. Ils s'engagent contractuellement sur les prix et les délais, vous évitant les mauvaises surprises souvent associées aux chantiers immobiliers. Contactez-nous pour être mis en relation avec le professionnel adapté à votre projet.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-bois-nord/lille" },
    { label: "Arras", href: "/constructeur-maison-bois-nord/arras" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-maison-bois-nord/villeneuve-dascq" },
    { label: "Valenciennes", href: "/constructeur-maison-bois-nord/valenciennes" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-maison-bois-nord/douai" />;
}
