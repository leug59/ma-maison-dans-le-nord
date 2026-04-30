import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "5 erreurs à éviter quand on fait construire dans le Nord",
  description:
    "Mauvais constructeur, budget sous-estimé, terrain mal étudié… Ces 5 erreurs coûtent cher aux futurs propriétaires nordistes. Comment les éviter avant de signer.",
  alternates: { canonical: "/erreurs-construction-maison-nord" },
  openGraph: buildOpenGraph("/erreurs-construction-maison-nord", "article"),
};

const erreurs = [
  {
    numero: "01",
    titre: "Choisir un constructeur uniquement sur le prix",
    contenu: [
      "C'est l'erreur la plus fréquente et souvent la plus coûteuse. Face à des devis allant parfois du simple au double, la tentation de retenir l'offre la moins chère est forte. Pourtant, un prix très bas cache presque toujours des prestations réduites, des matériaux de moindre qualité, ou — pire — un constructeur en difficulté financière.",
      "Avant de signer, vérifiez systématiquement : les références de chantiers récents dans votre secteur, la garantie de livraison à prix et délais convenus (GAPD), la garantie décennale et la responsabilité civile professionnelle, et la solidité financière du constructeur (bilan disponible sur société.com ou infogreffe.fr).",
      "Un constructeur sérieux vous invitera à visiter des maisons déjà réalisées et vous mettra en contact avec d'anciens clients. S'il refuse, passez votre chemin.",
    ],
  },
  {
    numero: "02",
    titre: "Sous-estimer le budget réel de son projet",
    contenu: [
      "Le prix affiché dans un contrat de construction (CCMI) correspond à la construction seule. De nombreux frais annexes s'y ajoutent et peuvent représenter 25 000 à 45 000 € supplémentaires, souvent oubliés lors du montage du dossier bancaire.",
      "Les postes à ne pas négliger : frais de notaire sur le terrain (7-8 %), taxe d'aménagement (3 000-8 000 €), raccordements aux réseaux (3 000-8 000 €), assurance dommages-ouvrage (3-5 % du coût construction), étude de sol G2 (1 500-3 000 €), et les aménagements extérieurs (clôture, terrasse, allée).",
      "Prévoyez également une réserve de 5 à 10 % du budget total pour les imprévus et les travaux modificatifs en cours de construction.",
    ],
  },
  {
    numero: "03",
    titre: "Négliger l'étude géotechnique du terrain",
    contenu: [
      "Dans le Nord-Pas-de-Calais, les sols argileux, les anciennes zones minières et les terres marécageuses sont fréquents. Un terrain apparemment plat et constructible peut réserver de mauvaises surprises si l'étude de sol n'a pas été réalisée.",
      "Depuis le 1er octobre 2020, une étude géotechnique de type G1 est obligatoire lors de la vente d'un terrain en zone exposée au retrait-gonflement des argiles (classement disponible sur géorisques.gouv.fr). L'étude G2 — plus précise et recommandée avant tout projet — permet au constructeur d'adapter les fondations et peut éviter des surcoûts de 5 000 à 20 000 € une fois le chantier ouvert.",
      "Dans les secteurs de l'ancien bassin minier (Lens, Douai, Valenciennes), une étude spécifique sur les risques d'effondrement ou de subsidence peut également s'avérer nécessaire.",
    ],
  },
  {
    numero: "04",
    titre: "Construire sans assurance dommages-ouvrage",
    contenu: [
      "L'assurance dommages-ouvrage (DO) est une obligation légale depuis la loi Spinetta de 1978. Elle vous protège pendant 10 ans après la réception des travaux contre les désordres touchant à la solidité de l'ouvrage ou le rendant impropre à sa destination, sans avoir à attendre un jugement de responsabilité.",
      "Son coût — 3 à 5 % du montant de la construction — peut sembler élevé. Mais en cas de sinistre (fissures structurelles, infiltrations majeures, affaissement de fondations), elle déclenche les travaux de réparation en quelques mois, là où une procédure judiciaire prend souvent 3 à 7 ans.",
      "Refuser cette assurance pour économiser quelques milliers d'euros est une prise de risque considérable, d'autant que la revente d'une maison sans DO est très difficile.",
    ],
  },
  {
    numero: "05",
    titre: "Multiplier les modifications en cours de chantier",
    contenu: [
      "Une fois le permis de construire déposé et le CCMI signé, toute modification du plan initial — qu'on appelle Travaux Modificatifs Acquéreur (TMA) — génère des coûts supplémentaires et des délais additionnels. Chaque changement doit faire l'objet d'un avenant au contrat, avec réévaluation du prix.",
      "La règle d'or : prenez le temps nécessaire pour finaliser votre projet AVANT la signature. Visitez des maisons témoins, consultez un architecte ou un conseiller, testez l'agencement en maquette 3D si votre constructeur le propose. Un mois de réflexion supplémentaire en amont vaut mieux que 6 mois de retard et 10 000 € de TMA.",
      "Si des modifications sont inévitables en cours de chantier, regroupez-les dans un seul avenant plutôt que de les multiplier au fil des semaines.",
    ],
  },
];

export default function ErreursConstruireNordPage() {
  return (
    <>
      <section className="bg-navy py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">Blog — Construction dans le Nord</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">5 erreurs à éviter quand on fait construire dans le Nord</h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">Mauvais constructeur, budget sous-estimé, terrain mal étudié… Ces erreurs coûtent cher. Voici comment les éviter avant de signer votre CCMI.</p>
          <Link href="/devis" className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors">Demander un devis gratuit</Link>
        </div>
      </section>

      <section className="px-4 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/maison-individuelle.jpg" alt="Construction de maison individuelle dans le Nord" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" priority />
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed">Faire construire sa maison dans le Nord est un projet de vie — souvent le plus grand investissement financier d&apos;une vie. Et pourtant, chaque année, des centaines de futurs propriétaires nordistes commettent des erreurs évitables qui leur coûtent du temps, de l&apos;argent, et parfois des années de procédures. Voici les cinq pièges les plus fréquents et, surtout, comment les contourner.</p>
        </div>
      </section>

      <section className="py-4 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {erreurs.map((erreur) => (
            <div key={erreur.numero} className="flex gap-6 sm:gap-10">
              <div className="shrink-0">
                <span className="font-display text-5xl font-bold text-gold/20 leading-none">{erreur.numero}</span>
              </div>
              <div className="border-l-4 border-gold pl-8">
                <h2 className="font-display text-2xl font-bold text-navy mb-5">{erreur.titre}</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  {erreur.contenu.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy rounded-2xl p-8 sm:p-10">
            <h2 className="font-display text-2xl font-bold text-white mb-4">Le bon réflexe : s&apos;entourer de professionnels de confiance</h2>
            <p className="text-white/70 leading-relaxed mb-6">La meilleure façon d&apos;éviter ces cinq erreurs, c&apos;est de s&apos;appuyer sur un réseau de constructeurs sérieux, sélectionnés pour leur fiabilité et leur connaissance du marché nordiste. Ma Maison dans le Nord vous met en relation gratuitement avec des constructeurs partenaires vérifiés — garanties solides, références locales, transparence sur les prix.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/devis" className="px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors text-center">Demander un devis gratuit</Link>
              <Link href="/avantages-constructeur-maison-nord" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white hover:bg-white/5 transition-colors text-center">Pourquoi faire appel à un constructeur ?</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lire aussi */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-xl font-bold text-navy mb-6">Lire aussi</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog" className="px-5 py-2.5 bg-white border-2 border-gray-200 text-navy font-medium rounded-lg hover:border-gold hover:text-gold transition-colors text-sm">← Tous les articles</Link>
            <Link href="/budget" className="px-5 py-2.5 bg-white border-2 border-gray-200 text-navy font-medium rounded-lg hover:border-gold hover:text-gold transition-colors text-sm">Budget construction</Link>
            <Link href="/delais-construction-maison-nord" className="px-5 py-2.5 bg-white border-2 border-gray-200 text-navy font-medium rounded-lg hover:border-gold hover:text-gold transition-colors text-sm">Délais de construction</Link>
            <Link href="/etapes-construction" className="px-5 py-2.5 bg-white border-2 border-gray-200 text-navy font-medium rounded-lg hover:border-gold hover:text-gold transition-colors text-sm">Étapes de construction</Link>
          </div>
        </div>
      </section>
    </>
  );
}
