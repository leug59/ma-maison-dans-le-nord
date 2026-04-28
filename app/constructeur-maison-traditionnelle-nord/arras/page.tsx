import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison traditionnelle à Arras — Sur mesure",
  description:
    "Maison traditionnelle à Arras : pistes cyclables, Ville amie des enfants, Charte de l'Arbre Urbain. Constructeurs fiables, budget maîtrisé. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-traditionnelle-nord/arras" },
  openGraph: buildOpenGraph("/constructeur-maison-traditionnelle-nord/arras", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Traditionnelle",
  maisonTypeHref: "/constructeur-maison-traditionnelle-nord",
  city: "Arras",
  h1: "Constructeur de maison traditionnelle à Arras",
  subtitle:
    "Arras, « Ville amie des enfants » dotée d'une Charte de l'Arbre Urbain et d'un vaste réseau cyclable, est un territoire exemplaire pour votre maison traditionnelle.",
  openingIntro:
    "Faire construire une habitation typique de la région du Nord n'est pas une mince affaire.",
  intro:
    "Arras et son agglomération ont développé un territoire dynamique avec de nombreux atouts. La ville dispose d'un réseau cyclable étendu reliant la citadelle, les Allées, la Grand'Place, la Place des Héros et la Place du Théâtre. Arras porte le label « Ville amie des enfants », reflétant son engagement pour améliorer la vie des plus jeunes. Une Charte de l'Arbre Urbain témoigne aussi de la préoccupation environnementale de la ville.",
  whyBuild:
    "Construire une maison traditionnelle à Arras répond à une aspiration profonde de nombreux ménages : habiter un logement neuf qui s'inscrit dans le style architectural régional, alliant le charme de la brique nordiste aux performances énergétiques des constructions modernes. Ma Maison dans le Nord vous aide à trouver un constructeur fiable qui respecte votre budget et vos attentes.",
  constructorAdvice:
    "Nos partenaires constructeurs à Arras partagent vos exigences : trouver un professionnel de confiance dans la région, maintenir le budget sans dérapages, bénéficier d'une transparence totale sur le processus de construction et obtenir un résultat qui correspond précisément à vos attentes. Ces critères guident notre sélection de constructeurs partenaires.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-traditionnelle-nord/lille" },
    { label: "Béthune", href: "/constructeur-maison-traditionnelle-nord/bethune" },
    { label: "Douai", href: "/constructeur-maison-traditionnelle-nord/douai" },
    { label: "Valenciennes", href: "/constructeur-maison-traditionnelle-nord/valenciennes" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-maison-traditionnelle-nord/villeneuve-dascq" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} />;
}
