import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison individuelle à Lens — Projet 100% sur mesure",
  description:
    "Construisez votre maison individuelle à Lens et dans l'agglomération Lens-Liévin (250 000 hab.). Prix du foncier accessibles, renouveau urbain du bassin minier. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-individuelle-nord/lens" },
  openGraph: buildOpenGraph("/constructeur-maison-individuelle-nord/lens", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Individuelle",
  maisonTypeHref: "/constructeur-maison-individuelle-nord",
  city: "Lens",
  h1: "Constructeur de maison individuelle à Lens",
  subtitle:
    "Lens et l'agglomération Lens-Liévin (250 000 habitants) offrent un cadre de vie en pleine mutation et des prix du foncier accessibles — idéal pour votre maison individuelle sur mesure.",
  openingIntro:
    "Construire votre maison individuelle à Lens, c'est miser sur une ville en plein renouveau, portée par le Louvre-Lens et la reconversion réussie du bassin minier. L'équipe de Ma Maison dans le Nord est là pour vous accompagner à chaque étape.",
  intro:
    "Lens appartient au vaste bassin de vie de l'agglomération Lens-Liévin, forte de plus de 250 000 habitants répartis sur 36 communes. La ville bénéficie d'une gare bien connectée — Arras à 20 minutes, Lille à 30 minutes en TER — et d'un réseau de bus structurant le territoire. Le Louvre-Lens, le stade Bollaert-Delelis et les cités minières classées UNESCO en 2012 constituent les principaux repères d'une ville qui réinvente son identité post-industrielle tout en valorisant son patrimoine unique.",
  whyBuild:
    "La maison individuelle à Lens vous offre la liberté de personnaliser entièrement votre projet — style architectural, agencement des pièces, matériaux, jardin. Dans l'agglomération Lens-Liévin, les prix du foncier restent accessibles comparativement à Lille ou Arras, offrant un excellent rapport surface/budget. Faire construire plutôt qu'acheter dans l'ancien, c'est aussi bénéficier des normes RE2020 et de toutes les garanties légales de la construction neuve.",
  constructorAdvice:
    "Ma Maison dans le Nord travaille avec des constructeurs implantés dans le bassin Lens-Liévin qui connaissent les spécificités locales : contraintes d'urbanisme en secteur à patrimoine minier, caractéristiques des sols et procédures en zone ZPPAUP. Chaque partenaire est sélectionné pour sa fiabilité et sa capacité à réaliser votre projet sur mesure dans les délais annoncés.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-maison-individuelle-nord/lille" },
    { label: "Arras", href: "/constructeur-maison-individuelle-nord/arras" },
    { label: "Douai", href: "/constructeur-maison-individuelle-nord/douai" },
    { label: "Valenciennes", href: "/constructeur-maison-individuelle-nord/valenciennes" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} canonicalPath="/constructeur-maison-individuelle-nord/lens" />;
}
