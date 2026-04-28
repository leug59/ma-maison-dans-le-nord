import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison traditionnelle à Villeneuve-d'Ascq",
  description:
    "Maison traditionnelle à Villeneuve-d'Ascq, née de la fusion d'Ascq, Flers et Annappes. Constructeurs multi-générationnels, architecture régionale. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-traditionnelle-nord/villeneuve-dascq" },
  openGraph: buildOpenGraph("/constructeur-maison-traditionnelle-nord/villeneuve-dascq", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Traditionnelle",
  maisonTypeHref: "/constructeur-maison-traditionnelle-nord",
  city: "Villeneuve-d'Ascq",
  h1: "Constructeur de maison traditionnelle à Villeneuve d'Ascq",
  subtitle:
    "Née à la fin des années 1960 de la fusion d'Ascq, Flers-lez-Lille et Annappes, Villeneuve-d'Ascq est aujourd'hui une agglomération complète avec toutes les commodités.",
  intro:
    "Villeneuve-d'Ascq a émergé à la fin des années 1960 comme réponse à la croissance démographique de Lille. Formée de la fusion de trois communes — Ascq, Flers-lez-Lille et Annappes — elle constitue aujourd'hui une agglomération complète dotée de nombreuses écoles, équipements sportifs, espaces de loisirs, et d'un patrimoine architectural et naturel remarquable.",
  whyBuild:
    "Construire une maison traditionnelle à Villeneuve-d'Ascq, c'est choisir un style architectural ancré dans l'histoire de la région tout en bénéficiant de toutes les performances énergétiques et techniques des constructions neuves. Le style traditionnel nordiste s'intègre harmonieusement dans les quartiers résidentiels de la ville.",
  constructorAdvice:
    "Certains de nos partenaires constructeurs à Villeneuve-d'Ascq exercent depuis plusieurs générations. Ils possèdent une expertise profonde de l'architecture traditionnelle régionale et ont à cœur d'écouter chaque client, de respecter les budgets définis et de livrer une maison qui correspond exactement aux attentes. Remplissez notre questionnaire en ligne — nous vous recontacterons rapidement.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-traditionnelle-nord/lille" },
    { label: "Béthune", href: "/constructeur-maison-traditionnelle-nord/bethune" },
    { label: "Arras", href: "/constructeur-maison-traditionnelle-nord/arras" },
    { label: "Douai", href: "/constructeur-maison-traditionnelle-nord/douai" },
    { label: "Valenciennes", href: "/constructeur-maison-traditionnelle-nord/valenciennes" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-maison-traditionnelle-nord/villeneuve-dascq" />;
}
