import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison ossature bois à Villeneuve-d'Ascq",
  description:
    "Maison à ossature bois à Villeneuve-d'Ascq (63 000 hab.), 2e commune de la MEL. Construction écologique et personnalisée. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-bois-nord/villeneuve-dascq" },
  openGraph: buildOpenGraph("/constructeur-maison-bois-nord/villeneuve-dascq", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Ossature bois",
  maisonTypeHref: "/constructeur-maison-bois-nord",
  city: "Villeneuve-d'Ascq",
  h1: "Constructeur de maison à ossature bois à Villeneuve d'Ascq",
  subtitle:
    "Deuxième commune de la Métropole Européenne de Lille avec 63 000 habitants, Villeneuve-d'Ascq est le lieu idéal pour votre maison à ossature bois.",
  openingIntro:
    "Vous souhaitez faire construire une maison à ossature bois à Villeneuve-d'Ascq ? L'équipe de Ma Maison dans le Nord vous met en relation avec les meilleurs constructeurs spécialisés de la Métropole Européenne de Lille.",
  intro:
    "Villeneuve-d'Ascq s'est formée de l'union de trois villages — Flers, Annappes et Ascq — et est aujourd'hui la deuxième commune de la Métropole Européenne de Lille avec 63 000 habitants. La ville offre des quartiers variés : Brigode, Croix de Wallers, la Haute-Borne, Triolo, la Cité Scientifique et Hempempont. Chaque quartier possède ses propres caractéristiques et attraits pour les familles.",
  whyBuild:
    "La maison à ossature bois apporte à Villeneuve-d'Ascq des avantages multiples : économies d'énergie et financières, respect de l'environnement, délais de chantier réduits, gain d'espace habitable (cloisons plus minces) et nombreuses possibilités de personnalisation. Sa légèreté est particulièrement adaptée aux terrains de la commune.",
  constructorAdvice:
    "Ma Maison dans le Nord vous connecte avec des artisans locaux de confiance qui maîtrisent les techniques de construction à ossature bois et les exigences de la réglementation RE2020. Chaque constructeur partenaire a été sélectionné pour son expertise et la satisfaction de ses clients précédents.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-bois-nord/lille" },
    { label: "Arras", href: "/constructeur-maison-bois-nord/arras" },
    { label: "Douai", href: "/constructeur-maison-bois-nord/douai" },
    { label: "Valenciennes", href: "/constructeur-maison-bois-nord/valenciennes" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-maison-bois-nord/villeneuve-dascq" />;
}
