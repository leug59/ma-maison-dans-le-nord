import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildOpenGraph } from "@/app/_lib/og";


export const metadata: Metadata = {
  title: "Maison connectée : quelle domotique prévoir pour sa construction dans le Nord ?",
  description: "Volets, gestion énergie, éclairages, sécurité, contrôle d'accès : tout sur la domotique pour la construction de votre maison connectée dans le Nord.",
  alternates: { canonical: "/construction-maison-connectee" },
  openGraph: buildOpenGraph("/construction-maison-connectee", "article"),
};

export default function MaisonConnecteePage() {
  return (
    <>
      <section className="bg-navy py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-4">Blog — Construction dans le Nord</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">Maison connectée : quelle domotique prévoir pour la construction de sa maison dans le Nord ?</h1>
          <p className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">Confort, sécurité et autonomie supplémentaire : pilotez à distance votre chauffage, vos éclairages, vos volets et bien plus encore.</p>
          <Link href="/devis" className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors">Demander un devis gratuit</Link>
        </div>
      </section>

      <section className="px-4 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image src="/images/maison-moderne.jpg" alt="Maison connectée dans le Nord" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1024px" priority />
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed">Vous avez en tête un projet de construction de maison dans le Nord, mais avez-vous pensé à intégrer la domotique ? Avoir une maison intelligente, signifie s&apos;offrir du confort, de la sécurité et de l&apos;autonomie supplémentaire. Grâce aux nouvelles technologies, pilotez à distance vos chauffages, climatisation, éclairages, volets, portes, portails, appareils électriques et bien d&apos;autres équipements encore !</p>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-12">

          <div className="border-l-4 border-gold pl-8">
            <h2 className="font-display text-2xl font-bold text-navy mb-4">Le contrôle des volets roulants motorisés</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Quel plaisir d&apos;ouvrir ou fermer ses volets roulants en appuyant sur un simple bouton ! À moins que vous ne préfériez les commander de votre smartphone, de votre tablette, de votre ordinateur ou grâce à votre voix ! Une maison intelligente vous offre un gain de temps et de confort. Petit plus proposé par les nouvelles technologies : la programmation des heures d&apos;ouverture et de fermeture de vos stores. Et cela ne s&apos;arrête pas là. L&apos;intelligence de vos volets peut même aller au-delà : ils s&apos;adaptent à la météo. Grâce à des capteurs spécifiques, ils s&apos;abaissent si le soleil tape trop fort ou s&apos;ils détectent de la pluie.</p>
              <p>L&apos;intérêt de ces volets connectés ? En plus du côté pratique, ils vous permettent de réaliser des économies caloriques. Votre consommation en climatisation sera moindre si vos volets sont fermés. Autre atout non négligeable : la sécurité. En effet, simulez une présence, en programmant une ouverture et une fermeture des volets roulants, couplée à un éclairage aléatoire, lorsque vous n&apos;êtes pas chez vous. Cela dissuadera les intrus à coup sûr !</p>
            </div>
          </div>

          <div className="border-l-4 border-gold pl-8">
            <h2 className="font-display text-2xl font-bold text-navy mb-4">Gestion des sources d&apos;énergie dans votre maison connectée dans le Nord</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>L&apos;économie d&apos;énergie est une de vos préoccupations ? La domotique vous offre la possibilité de gérer correctement et d&apos;optimiser les consommations énergétiques de votre foyer. Vous maîtrisez votre budget, tout en maintenant votre confort thermique. C&apos;est aussi simple que ça !</p>
              <p>Les nouvelles technologies vous permettent de programmer votre chauffage et votre climatisation à l&apos;avance, ou de les commander à distance, en temps réel. Ainsi, vous pouvez :</p>
              <ul className="space-y-3 pl-2">
                {[
                  "choisir des températures différentes pour chaque pièce de la maison ou en fonction des zones à chauffer (coin jour et coin nuit) ;",
                  "contrôler vos systèmes de chauffage et de climatisation, en fonction des heures de la journée, de la météo, de la présence ou non d'un membre de votre famille à domicile, etc. ;",
                  "augmenter ou diminuer la température de votre domicile avant votre retour, pour que la température soit optimale lorsque vous arrivez.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-gold flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>Nos partenaires, constructeurs de maisons individuelles dans le Nord, sauront vous conseiller sur les équipements de chauffage et de climatisation domotisés qui correspondent le mieux à vos attentes.</p>
            </div>
          </div>

          <div className="border-l-4 border-gold pl-8">
            <h2 className="font-display text-2xl font-bold text-navy mb-4">Domotique : contrôle des éclairages intérieurs et extérieurs</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Éteignez et allumez l&apos;ensemble des lumières de votre maison connectée ou d&apos;une zone en particulier (coin jour, coin nuit, éclairage extérieur, ou autres), via un simple bouton ou en utilisant votre tablette, votre téléphone portable ou votre ordinateur. Créez des ambiances lumineuses au sein de votre domicile ou dans votre jardin, en jouant sur l&apos;intensité de la lumière, la couleur, et même en y ajoutant de la musique.</p>
              <p>Vous vous levez souvent la nuit pour aller aux toilettes ? La domotique a la solution pour vous ! Installez des détecteurs de lumière qui se déclencheront à votre passage.</p>
              <p>Vous vous intéressez à la chronobiologie ? Les nouvelles technologies également. Profitez d&apos;une lumière qui s&apos;intensifie progressivement au réveil, et qui se tamise en soirée, ceci afin de respecter votre rythme biologique.</p>
              <p>Et si vous avez oublié d&apos;éteindre la lumière en partant de chez vous, pas de panique ! Commandez à distance l&apos;extinction de toutes vos lampes.</p>
            </div>
          </div>

          <div className="border-l-4 border-gold pl-8">
            <h2 className="font-display text-2xl font-bold text-navy mb-4">La sécurité avant tout dans votre construction dans le Nord</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>Si vous vous demandez comment sécuriser votre domicile, alors la domotique est une excellente solution. Soyez alerté lorsqu&apos;un risque important menace votre logement : tentative d&apos;intrusion, incendie ou autres. Vous disposez de plusieurs systèmes domotiques pour améliorer votre sécurité et celle de vos proches.</p>
              <p>Tout d&apos;abord, les systèmes d&apos;alarme. Ils regroupent les détecteurs d&apos;ouverture de portes, de fenêtres, de bris de glace, mais aussi les détecteurs de mouvement. Ils sont souvent couplés à une sirène d&apos;alerte. Positionnée sur la façade de votre domicile, elle se déclenche lors d&apos;une intrusion, en plus d&apos;avoir un rôle dissuasif. Et si vous avez oublié d&apos;enclencher votre alarme, vous avez la possibilité de la contrôler à distance, via votre smartphone ou votre tablette.</p>
              <p>Grâce aux caméras de télésurveillance, visionnez à distance et en temps réel tout ce qui se déroule au sein de votre maison connectée. Vous pouvez ainsi vous assurer que tout est en ordre : qu&apos;il n&apos;y a pas d&apos;intrusion ou de départ de feu, par exemple.</p>
              <p>Notre conseil : pensez à intégrer ces équipements de sécurité, directement dans votre budget de construction de maison dans le Nord.</p>
            </div>
          </div>

          <div className="border-l-4 border-gold pl-8">
            <h2 className="font-display text-2xl font-bold text-navy mb-4">Contrôle d&apos;accès de votre maison connectée à distance</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>La domotique intégrée dans la construction de votre maison dans le Nord, vous permet également de contrôler l&apos;accès de votre domicile, sans forcément être sur place.</p>
              <p>Que ce soit dans une maison contemporaine, ou plutôt une maison traditionnelle du Nord, il n&apos;est pas rare de trouver des portails ou portes de garage motorisés, avec commande à distance. Ces installations domotiques sont maintenant courantes. Mais savez-vous quels autres équipements pilotables à distance peuvent également vous être utiles ?</p>
              <p>Vous souhaitez voir qui sonne à votre portail d&apos;entrée ou à votre porte, avant d&apos;ouvrir ? Installez un visiophone, afin de vérifier l&apos;identité de votre visiteur, en toute sécurité. Vous pourrez ainsi identifier la personne, lui parler et actionner l&apos;ouverture de votre porte ou de votre portail à distance.</p>
              <p>Vous êtes hors de votre domicile et vous devez autoriser l&apos;accès à votre maison à une tierce personne (votre enfant qui a oublié ses clés, par exemple) ? C&apos;est possible, en contrôlant directement l&apos;ouverture de votre habitation, via votre smartphone ou votre tablette.</p>
            </div>
          </div>

        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>Vous l&apos;avez bien compris, les maisons de demain seront intelligentes et remplies d&apos;objets connectés. Que vous souhaitiez simuler une présence, déclencher l&apos;arrosage automatique, piloter votre thermostat à l&apos;aide d&apos;un écran tactile ou encore faire des économies d&apos;énergie, les avantages de la domotique sont nombreux. Les constructeurs de maisons individuelles dans le Nord avec qui nous travaillons, ont été sélectionnés pour leur professionnalisme, leur sérieux, mais aussi leurs connaissances dans le domaine de la domotique.</p>
            <p>Alors, si vous aussi vous souhaitez une maison connectée, prenez contact avec nous !</p>
          </div>
        </div>
      </section>

      {/* Lire aussi */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-xl font-bold text-navy mb-6">Lire aussi</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/blog" className="px-5 py-2.5 bg-white border-2 border-gray-200 text-navy font-medium rounded-lg hover:border-gold hover:text-gold transition-colors text-sm">← Tous les articles</Link>
            <Link href="/constructeur-de-maison-contemporaine-nord" className="px-5 py-2.5 bg-white border-2 border-gray-200 text-navy font-medium rounded-lg hover:border-gold hover:text-gold transition-colors text-sm">Maison contemporaine</Link>
            <Link href="/constructeur-maison-individuelle-nord" className="px-5 py-2.5 bg-white border-2 border-gray-200 text-navy font-medium rounded-lg hover:border-gold hover:text-gold transition-colors text-sm">Maison individuelle</Link>
            <Link href="/constructeur-maison-cubique-nord" className="px-5 py-2.5 bg-white border-2 border-gray-200 text-navy font-medium rounded-lg hover:border-gold hover:text-gold transition-colors text-sm">Maison cubique</Link>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-4">Construisez votre maison connectée dans le Nord</h2>
          <p className="text-white/70 text-lg mb-8">Vous êtes décidés à faire construire votre maison ? Nous vous mettrons rapidement en contact avec le constructeur qu&apos;il vous faut !</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/devis" className="px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-400 transition-colors">Demander un devis gratuit</Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white hover:bg-white/5 transition-colors">Nous contacter</Link>
          </div>
        </div>
      </section>
    </>
  );
}
