import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison cubique à Douai — Projet 100 % sur mesure",
  description:
    "Faites construire votre maison cubique à Douai et dans l'agglomération Douai-Lens. Architecture contemporaine, projet 100 % personnalisé. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-cubique-nord/douai" },
  openGraph: buildOpenGraph("/constructeur-maison-cubique-nord/douai", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Cubique",
  maisonTypeHref: "/constructeur-maison-cubique-nord",
  city: "Douai",
  h1: "Constructeur de maison cubique à Douai : projet 100 % sur mesure",
  subtitle:
    "Dans l'agglomération Douai-Lens (67 communes), trouvez le constructeur qui transforme votre projet de maison cubique en réalité.",
  openingIntro:
    "Votre projet de maison à Douai peut prendre forme, grâce à un constructeur de maison cubique dans le Nord. Mais pour cela, il faut faire appel au bon professionnel, celui qui saura vous conseiller au mieux et qui réalisera la demeure que vous avez imaginée. Voici comment nous pouvons vous aider.",
  intro:
    "Douai fait partie de l'agglomération Douai-Lens, qui regroupe 67 communes dont Hénin-Beaumont, Liévin, Avion et Carvin. La ville est riche en culture : le Musée de la Chartreuse, la proximité du Musée du Louvre-Lens, et de nombreux espaces verts comme le Jardin des plantes, le Parc Bertin et la réserve naturelle régionale de Wagnonville. Ce cadre de vie alliant culture et nature attire de plus en plus de familles souhaitant construire dans la région.",
  whyBuild:
    "La maison cubique s'inscrit parfaitement dans la dynamique de croissance immobilière de l'agglomération Douaisienne. Son architecture aux volumes géométriques, sa toiture terrasse et ses grandes baies vitrées créent une résidence lumineuse et résolument contemporaine. La communauté urbaine offre un cadre établi avec toutes les commodités, idéal pour une construction neuve de qualité.",
  constructorAdvice:
    "Ma Maison dans le Nord sélectionne avec soin des spécialistes qualifiés, attentifs et reconnus dans la construction de maisons individuelles. Notre processus de mise en relation tient compte de votre projet, de vos contraintes et de votre budget pour vous connecter avec le constructeur le plus adapté — de la recherche de terrain jusqu'à la livraison de votre maison cubique.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-cubique-nord/lille" },
    { label: "Arras", href: "/constructeur-maison-cubique-nord/arras" },
    { label: "Valenciennes", href: "/constructeur-maison-cubique-nord/valenciennes" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-maison-cubique-nord/villeneuve-dascq" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-maison-cubique-nord/douai" />;
}
