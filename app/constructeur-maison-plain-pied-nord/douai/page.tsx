import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison plain-pied à Douai — Projet personnalisé",
  description:
    "Construisez votre maison plain-pied à Douai dans un cadre de vie idyllique. Facile à chauffer et entretenir dans le climat du Nord. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-plain-pied-nord/douai" },
  openGraph: buildOpenGraph("/constructeur-maison-plain-pied-nord/douai", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Plain-pied",
  maisonTypeHref: "/constructeur-maison-plain-pied-nord",
  city: "Douai",
  h1: "Constructeur de maison plain-pied à Douai",
  subtitle:
    "Dans un cadre de vie idyllique entre nature et culture, Douai accueille votre projet de maison plain-pied — facile à vivre et économique à chauffer.",
  openingIntro:
    "La construction de sa propre maison est un projet de vie pour de nombreux individus partout dans le monde, notamment à Douai qui est une ville avec beaucoup d'atouts dans le département du Nord.",
  intro:
    "Douai offre un cadre de vie où les résidents profitent d'espaces extérieurs de qualité. La ville et son agglomération proposent de nombreux parcs et espaces naturels, ainsi qu'une vie culturelle riche. La réserve naturelle de Wagnonville et les parcs urbains permettent de passer du temps en plein air tout au long de l'année.",
  whyBuild:
    "Dans le contexte climatique du Nord, les températures plus fraîches et les conditions hivernales rendent la maison plain-pied particulièrement adaptée. Toutes les pièces étant sur un seul niveau, la chaleur se distribue uniformément et rapidement, réduisant les coûts énergétiques. Ce type de maison convient aussi bien aux familles avec enfants qu'aux personnes âgées ou à mobilité réduite.",
  constructorAdvice:
    "Un constructeur de maison plain-pied à Douai doit concevoir des plans parfaitement adaptés à votre terrain et à votre mode de vie. Il sélectionne des matériaux de qualité, propose des aménagements sur mesure et vous guide tout au long du chantier. Ma Maison dans le Nord vous connecte avec des professionnels locaux reconnus pour leur sérieux et leur écoute.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-plain-pied-nord/lille" },
    { label: "Arras", href: "/constructeur-maison-plain-pied-nord/arras" },
    { label: "Valenciennes", href: "/constructeur-maison-plain-pied-nord/valenciennes" },
    { label: "Lens", href: "/constructeur-maison-plain-pied-nord/lens" },
    { label: "Béthune", href: "/constructeur-maison-plain-pied-nord/bethune" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-maison-plain-pied-nord/douai" />;
}
