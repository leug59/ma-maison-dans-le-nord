import type { Metadata } from "next";
import CityMaisonPage, { type CityMaisonData } from "@/app/_components/CityMaisonPage";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Constructeur maison contemporaine à Arras — Projet sur mesure",
  description:
    "Maison contemporaine à Arras : quartiers Baudimont, Ronville, Université, Jaurès… Architecture design, économies de délais. Devis gratuit.",
  alternates: { canonical: "/constructeur-de-maison-contemporaine-nord/arras" },
  openGraph: buildOpenGraph("/constructeur-de-maison-contemporaine-nord/arras", "website"),
};

const data: CityMaisonData = {
  maisonTypeLabel: "Contemporaine",
  maisonTypeHref: "/constructeur-de-maison-contemporaine-nord",
  city: "Arras",
  h1: "Constructeur de maison contemporaine à Arras",
  subtitle:
    "Arras et ses quartiers variés — Baudimont, Diderot, Ronville, Université, Jaurès — offrent de nombreuses opportunités pour votre maison contemporaine sur mesure.",
  intro:
    "Arras propose des quartiers aux caractéristiques bien distinctes : les quartiers ouest (Baudimont, Diderot, Saint-Pol, Bonnettes), les quartiers est (Jaurès, Ronville, Université, Rietz) et les secteurs nord autour de l'avenue Michonneau. Chaque lieu a ses atouts propres — proximité du centre, espaces verts, équipements scolaires — et les résidents trouveront partout des infrastructures adaptées à la vie de famille.",
  whyBuild:
    "Faire construire une maison contemporaine à Arras avec un professionnel plutôt que de s'y aventurer seul présente des avantages concrets : des délais réduits de plusieurs mois (économisant ainsi des mois de loyer pour les locataires actuels), une implication totale dans la personnalisation et la décoration, et un accompagnement professionnel tout en gardant le dernier mot sur chaque décision.",
  constructorAdvice:
    "Ma Maison dans le Nord met à votre disposition son réseau de partenaires de confiance à Arras. Ces constructeurs de maisons contemporaines maîtrisent les spécificités architecturales du style contemporain et les réglementations locales. Contactez-nous pour être mis en relation sans engagement avec le professionnel adapté à votre projet.",
  relatedCities: [
    { label: "Lille", href: "/constructeur-de-maison-contemporaine-nord/lille" },
    { label: "Béthune", href: "/constructeur-de-maison-contemporaine-nord/bethune" },
    { label: "Douai", href: "/constructeur-de-maison-contemporaine-nord/douai" },
    { label: "Valenciennes", href: "/constructeur-de-maison-contemporaine-nord/valenciennes" },
    { label: "Villeneuve-d'Ascq", href: "/constructeur-de-maison-contemporaine-nord/villeneuve-dascq" },
  ],
};

export default function Page() {
  return <CityMaisonPage data={data} />;
}
