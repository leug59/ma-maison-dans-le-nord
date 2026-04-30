import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison individuelle à Villeneuve-d'Ascq",
  description:
    "Maison individuelle à Villeneuve-d'Ascq, technopole scientifique entre Lille et Roubaix. INSERM, CNRS, Mines-Télécom. Constructeurs sélectionnés. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-individuelle-nord/villeneuve-dascq" },
  openGraph: buildOpenGraph("/constructeur-maison-individuelle-nord/villeneuve-dascq", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Individuelle",
  maisonTypeHref: "/constructeur-maison-individuelle-nord",
  city: "Villeneuve-d'Ascq",
  h1: "Constructeur de maison individuelle à Villeneuve d'Ascq",
  subtitle:
    "Technopole verte entre Lille et Roubaix, Villeneuve-d'Ascq héberge l'INSERM, l'INRIA, le CNRS et les meilleures grandes écoles du Nord — un cadre idéal pour votre maison.",
  openingIntro:
    "Vous vous posez encore des questions concernant votre éventuelle installation à Villeneuve d'Ascq ? Cette ville des Hauts-de-France correspondra-t-elle à vos attentes ? Et surtout, comment trouver un constructeur de maison individuelle dans le Nord ? Voici les réponses de Ma Maison dans le Nord.",
  intro:
    "Villeneuve-d'Ascq est désignée « technopole verte » pour la concentration d'entreprises et de centres de recherche : Haute-Borne scientific park, INSERM, INRIA, CNRS. Pour les familles avec étudiants, la ville offre de nombreuses opportunités : campus Pont-de-Bois, Cité Scientifique, École nationale supérieure Mines-Télécom Lille-Douai, et bien d'autres établissements. Un environnement dynamique et innovant pour s'installer durablement.",
  whyBuild:
    "Faire construire votre maison individuelle à Villeneuve-d'Ascq, c'est investir dans un territoire d'avenir, bien desservi par les transports (métro, bus, TER) et proche de toutes les commodités de la métropole lilloise. Nos constructeurs partenaires écoutent vos besoins et respectent votre budget pour réaliser la maison qui vous correspond.",
  constructorAdvice:
    "Ma Maison dans le Nord vous met en relation avec des constructeurs de maisons individuelles à Villeneuve-d'Ascq qui ont été personnellement sélectionnés pour leur fiabilité. Remplissez notre formulaire en ligne en précisant votre projet et vos contraintes budgétaires — nous vous recontactons rapidement avec le professionnel le plus adapté.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-individuelle-nord/lille" },
    { label: "Douai", href: "/constructeur-maison-individuelle-nord/douai" },
    { label: "Arras", href: "/constructeur-maison-individuelle-nord/arras" },
    { label: "Valenciennes", href: "/constructeur-maison-individuelle-nord/valenciennes" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-maison-individuelle-nord/villeneuve-dascq" />;
}
