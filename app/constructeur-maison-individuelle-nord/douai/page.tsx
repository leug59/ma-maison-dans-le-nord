import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";

export const metadata: Metadata = {
  title: "Constructeur maison individuelle à Douai — Projet sur mesure",
  description:
    "Maison individuelle à Douai : pistes cyclables, Évéole bus, parking gratuit le samedi. Constructeurs sélectionnés sur le volet. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-individuelle-nord/douai" },
};

const data: CityMaisonData = {
  maisonTypeLabel: "Individuelle",
  maisonTypeHref: "/constructeur-maison-individuelle-nord",
  city: "Douai",
  h1: "Constructeur de maison individuelle à Douai : projet sur mesure",
  subtitle:
    "Douai, ville cyclable et bien connectée, offre d'excellentes conditions de vie pour votre maison individuelle sur mesure.",
  intro:
    "Douai mise fortement sur la mobilité douce : son programme « Douai à vélo » relie les communes voisines comme Lambres-Lez-Douai à Raches par des pistes cyclables. Le réseau de bus Évéole complète les déplacements, et la navette Binbin dessert 16 arrêts du centre-ville. La ville dispose de 2 parkings centraux (Gayant et Barlet), avec la gratuité du stationnement le samedi de midi à 16h pour favoriser le commerce local.",
  whyBuild:
    "Faire construire une maison individuelle à Douai, c'est choisir un cadre de vie complet : mobilité douce, commerces, établissements scolaires et espaces culturels. Nos constructeurs partenaires ont été présélectionnés pour leur fiabilité, leur respect des budgets et leur réactivité. Ils personnalisent votre projet en commençant par discuter de vos désirs et de vos contraintes financières.",
  constructorAdvice:
    "Ma Maison dans le Nord met à votre disposition un réseau de constructeurs triés sur le volet dans l'agglomération douaisienne. Après avoir recueilli vos besoins, nous vous connectons avec le professionnel le mieux adapté à votre projet de maison individuelle — style, surface, budget — pour un accompagnement de la conception à la remise des clés.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-individuelle-nord/lille" },
    { label: "Arras", href: "/constructeur-maison-individuelle-nord/arras" },
    { label: "Valenciennes", href: "/constructeur-maison-individuelle-nord/valenciennes" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-maison-individuelle-nord/villeneuve-dascq" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} />;
}
