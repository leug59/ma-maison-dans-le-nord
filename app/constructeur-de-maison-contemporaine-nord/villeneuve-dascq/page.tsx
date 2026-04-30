import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison contemporaine à Villeneuve-d'Ascq",
  description:
    "Maison contemporaine à Villeneuve-d'Ascq : LaM (Klee, Modigliani), parc du Héron, stade Pierre-Mauroy. Matériaux et couleurs sur mesure. Devis gratuit.",
  alternates: { canonical: "/constructeur-de-maison-contemporaine-nord/villeneuve-dascq" },
  openGraph: buildOpenGraph("/constructeur-de-maison-contemporaine-nord/villeneuve-dascq", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Contemporaine",
  maisonTypeHref: "/constructeur-de-maison-contemporaine-nord",
  city: "Villeneuve-d'Ascq",
  h1: "Constructeur de maison contemporaine à Villeneuve d'Ascq",
  subtitle:
    "Entre Lille et Roubaix, Villeneuve-d'Ascq avec le LaM, le parc du Héron et le stade Pierre-Mauroy offre un cadre de vie unique pour votre maison contemporaine.",
  openingIntro:
    "Villeneuve-d'Ascq, ville jeune et dynamique de la Métropole Européenne de Lille, est un cadre de choix pour faire construire une maison contemporaine. Faites confiance aux partenaires de Ma Maison dans le Nord pour concrétiser votre projet.",
  intro:
    "Villeneuve-d'Ascq est une commune résidentielle bien positionnée entre Lille et Roubaix. Elle offre une palette d'équipements remarquable : le LaM (sculpture park avec des œuvres de Klee et Modigliani), le parc du Héron avec une ferme en activité, 5 sentiers de randonnée, 6 lacs, le stade Pierre-Mauroy avec son toit rétractable, 4 marchés (Annappes, la Résidence, Flers-Bourg et Ascq) et un centre commercial.",
  whyBuild:
    "La réussite d'une maison contemporaine à Villeneuve-d'Ascq tient au soin apporté aux détails : choix des matériaux, couleurs, menuiseries, bardages extérieurs. Nos constructeurs partenaires vous accompagnent dans toutes ces décisions pour créer une maison qui reflète votre personnalité tout en s'intégrant harmonieusement dans l'environnement de la ville.",
  constructorAdvice:
    "Ma Maison dans le Nord sélectionne des constructeurs de maisons contemporaines à Villeneuve-d'Ascq reconnus pour leur écoute et leur créativité. Ils maîtrisent les réglementations locales et vous guident vers les meilleures solutions techniques pour une maison contemporaine durable et performante.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-de-maison-contemporaine-nord/lille" },
    { label: "Béthune", href: "/constructeur-de-maison-contemporaine-nord/bethune" },
    { label: "Arras", href: "/constructeur-de-maison-contemporaine-nord/arras" },
    { label: "Douai", href: "/constructeur-de-maison-contemporaine-nord/douai" },
    { label: "Valenciennes", href: "/constructeur-de-maison-contemporaine-nord/valenciennes" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-de-maison-contemporaine-nord/villeneuve-dascq" />;
}
