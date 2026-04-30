import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison contemporaine à Lens — Design et sur mesure",
  description:
    "Maison contemporaine à Lens, ville du Louvre-Lens et du bassin minier UNESCO. Grandes baies vitrées, matériaux modernes, RE2020. Devis gratuit.",
  alternates: { canonical: "/constructeur-de-maison-contemporaine-nord/lens" },
  openGraph: buildOpenGraph("/constructeur-de-maison-contemporaine-nord/lens", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Contemporaine",
  maisonTypeHref: "/constructeur-de-maison-contemporaine-nord",
  city: "Lens",
  h1: "Constructeur de maison contemporaine à Lens",
  subtitle:
    "Lens, portée par le Louvre-Lens et la reconversion du bassin minier UNESCO, offre un cadre en pleine mutation où la maison contemporaine s'inscrit naturellement dans la dynamique du renouveau urbain.",
  openingIntro:
    "La maison contemporaine à Lens, c'est faire le choix d'un habitat moderne dans une ville qui se réinvente. Ma Maison dans le Nord vous guide vers les constructeurs les mieux adaptés à votre projet dans l'agglomération Lens-Liévin.",
  intro:
    "Lens, ville du Pas-de-Calais, compte environ 32 000 habitants et appartient à l'agglomération Lens-Liévin regroupant 250 000 personnes. La ville est célèbre pour le Louvre-Lens — musée à l'architecture contemporaine éco-conçue, inauguré en décembre 2012 — et pour le stade Bollaert-Delelis, temple du RC Lens. Les cités minières classées UNESCO coexistent aujourd'hui avec des projets de renouvellement urbain qui libèrent des terrains adaptés à la construction neuve, notamment dans les quartiers de Lens-Centre, Saint-Édouard et les communes voisines d'Avion et Liévin.",
  whyBuild:
    "À Lens, la maison contemporaine incarne le renouveau architectural d'une ville qui a su tourner la page de son passé industriel. Ses grandes baies vitrées maximisent la lumière naturelle — précieuse dans le climat du Nord — tandis que ses matériaux modernes (béton, bois, aluminium) offrent d'excellentes performances thermiques conformes à la RE2020. La maison contemporaine se valorise bien à la revente dans un marché immobilier lensois en progression continue.",
  constructorAdvice:
    "Ma Maison dans le Nord sélectionne des constructeurs de maisons contemporaines qui connaissent le PLU de Lens et les contraintes liées au secteur du bassin minier. Chacun est évalué sur sa capacité à livrer une architecture soignée dans les délais annoncés et au budget convenu. Demandez votre mise en relation sans engagement.",
  relatedCities: [
    { label: "Arras", href: "/constructeur-de-maison-contemporaine-nord/arras" },
    { label: "Béthune", href: "/constructeur-de-maison-contemporaine-nord/bethune" },
    { label: "Douai", href: "/constructeur-de-maison-contemporaine-nord/douai" },
    { label: "Lille", href: "/constructeur-de-maison-contemporaine-nord/lille" },
    { label: "Valenciennes", href: "/constructeur-de-maison-contemporaine-nord/valenciennes" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-de-maison-contemporaine-nord/lens" />;
}
