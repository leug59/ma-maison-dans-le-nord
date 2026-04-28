"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
    setLoading(false);
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg
            className="w-7 h-7 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-display text-xl font-bold text-navy mb-2">
          Message envoyé !
        </h3>
        <p className="text-gray-600 text-sm">
          Nous vous répondrons dans les meilleurs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="contact-nom"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Nom complet <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="contact-nom"
            name="nom"
            required
            autoComplete="name"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-navy"
            placeholder="Jean Dupont"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-navy mb-1.5"
          >
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            autoComplete="email"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-navy"
            placeholder="jean@exemple.fr"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-telephone"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          Téléphone
        </label>
        <input
          type="tel"
          id="contact-telephone"
          name="telephone"
          autoComplete="tel"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-navy"
          placeholder="06 12 34 56 78"
        />
      </div>

      <div>
        <label
          htmlFor="contact-objet"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          Objet <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="contact-objet"
          name="objet"
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-navy"
          placeholder="Question sur mon projet de construction"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-navy mb-1.5"
        >
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-navy resize-none"
          placeholder="Décrivez votre demande..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="contact-rgpd"
          name="rgpd"
          required
          className="mt-1 accent-gold"
        />
        <label htmlFor="contact-rgpd" className="text-sm text-gray-600">
          J&apos;accepte le traitement de mes données conformément à la{" "}
          <a
            href="/politique-confidentialite"
            className="text-gold hover:underline"
          >
            politique de confidentialité
          </a>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="px-8 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Envoi…" : "Envoyer le message"}
      </button>
    </form>
  );
}
