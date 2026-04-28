import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";

export const metadata: Metadata = {
  title: "Constructeur maison individuelle à Lille — 100 % sur mesure",
  description:
    "Construisez votre maison individuelle à Lille : Bois-Blancs, Faubourg de Béthune, Lille-Sud, Fives… Savoir-faire local et accompagnement personnalisé. Devis gratuit.",
  alternates: { canonical: "/constructeur-maison-individuelle-nord/lille" },
};

const data: CityMaisonData = {
  maisonTypeLabel: "Individuelle",
  maisonTypeHref: "/constructeur-maison-individuelle-nord",
  city: "Lille",
  h1: "Constructeur de maison individuelle à Lille",
  subtitle:
    "Lille, métropole riche en culture, sports et commerces, offre de nombreux quartiers pour votre maison individuelle 100 % sur mesure.",
  openingIntro:
    "Vous rêvez de vous installer à Lille ? Vous avez raison : vous n'allez pas vous ennuyer !",
  intro:
    "Lille est une métropole qui offre tout : culture (musée d'histoire naturelle, palais des beaux-arts, théâtres, opéra), sports de plein air (Citadelle, Esplanade, Jardin botanique, piscine Marx Dormoy, Palais des Sports Saint-Sauveur) et shopping. La ville propose plusieurs quartiers où construire votre maison individuelle : Bois-Blancs, Faubourg de Béthune, Lille-Sud, Saint-Maurice Pellevoisin et Fives — chacun avec ses spécificités et son ambiance.",
  whyBuild:
    "Faire construire une maison individuelle à Lille, c'est bénéficier du savoir-faire de constructeurs locaux expérimentés, transmis parfois de génération en génération. La maison individuelle est 100 % sur mesure : vous choisissez le style (traditionnelle, contemporaine, cubique, ossature bois), le nombre de pièces, les matériaux et les finitions. C'est votre maison, reflétant votre personnalité et votre mode de vie.",
  constructorAdvice:
    "L'équipe de Ma Maison dans le Nord est justement là pour vous : nous prenons le temps de comprendre vos désirs, vos contraintes et votre budget, puis nous vous mettons en relation avec le constructeur de maison individuelle le plus adapté à votre projet dans la région lilloise.",
  relatedCities: [
    { label: "Douai", href: "/constructeur-maison-individuelle-nord/douai" },
    { label: "Arras", href: "/constructeur-maison-individuelle-nord/arras" },
    { label: "Valenciennes", href: "/constructeur-maison-individuelle-nord/valenciennes" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-maison-individuelle-nord/villeneuve-dascq" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} />;
}
