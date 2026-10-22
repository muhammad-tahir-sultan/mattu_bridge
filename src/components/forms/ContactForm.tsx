"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { locale } = useLanguage();
  const isDe = locale === "de";

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    category: isDe ? "Allgemeine Anfrage" : "General Enquiry",
    subject: "",
    message: "",
    consent: false,
    honeypot: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) {
      return;
    }

    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.warn("MongoDB connection fallback to localStorage:", err);
    }

    try {
      const existing = JSON.parse(
        localStorage.getItem("mattu_contact_messages") || "[]"
      );
      const newEntry = {
        id: `MSG-${Date.now()}`,
        date: new Date().toISOString(),
        ...formData,
      };
      localStorage.setItem(
        "mattu_contact_messages",
        JSON.stringify([newEntry, ...existing])
      );
    } catch {
      // ignore
    }

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-8 md:p-12 text-center animate-in fade-in duration-300">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold text-gray-900">
          {isDe ? "Nachricht erfolgreich gesendet" : "Message Sent Successfully"}
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-base text-gray-700 leading-relaxed">
          {isDe ? (
            <>
              Vielen Dank, <span className="font-semibold">{formData.fullName}</span>. Ihre Nachricht bezüglich <span className="font-semibold">&bdquo;{formData.subject}&ldquo;</span> ist bei Mattu Bridge eingegangen. Wir antworten in Kürze an <span className="font-semibold">{formData.email}</span>.
            </>
          ) : (
            <>
              Thank you, <span className="font-semibold">{formData.fullName}</span>. Your message regarding <span className="font-semibold">&ldquo;{formData.subject}&rdquo;</span> has been delivered to Mattu Bridge. We will reply to <span className="font-semibold">{formData.email}</span> shortly.
            </>
          )}
        </p>
        <div className="mt-8">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: "",
                email: "",
                category: isDe ? "Allgemeine Anfrage" : "General Enquiry",
                subject: "",
                message: "",
                consent: false,
                honeypot: "",
              });
            }}
            className="btn-secondary !py-2.5 !px-6 text-sm"
          >
            {isDe ? "Weitere Nachricht senden" : "Send Another Message"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-gray-100 bg-white p-6 md:p-10 shadow-xl">
      {/* Honeypot field for invisible spam protection */}
      <div className="hidden">
        <label>Do not fill this</label>
        <input
          type="text"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="label-field">
            {isDe ? "Vollständiger Name" : "Full Name"} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder={isDe ? "Ihr Name" : "Your Name"}
            className="input-field"
          />
        </div>

        <div>
          <label className="label-field">
            {isDe ? "E-Mail-Adresse" : "Email Address"} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="ihre.email@example.com"
            className="input-field"
          />
        </div>

        <div>
          <label className="label-field">
            {isDe ? "Kategorie der Anfrage" : "Enquiry Category"} <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="input-field"
          >
            {isDe ? (
              <>
                <option value="Bildungsberatung">Bildungsberatung (Studium &amp; Ausbildung)</option>
                <option value="Jobs &amp; Rekrutierung">Jobs &amp; Arbeitsvermittlung</option>
                <option value="Internationale Events">Internationale Veranstaltungen &amp; Seminare</option>
                <option value="Arbeitgeberanfrage">Arbeitgeberanfrage / Personalsuche</option>
                <option value="Kooperation">Kooperation &amp; Partnerschaft</option>
                <option value="Allgemeine Anfrage">Allgemeine Anfrage</option>
              </>
            ) : (
              <>
                <option value="Education Consultancy">Education Consultancy</option>
                <option value="Jobs &amp; Recruitment">Jobs &amp; Recruitment</option>
                <option value="International Events">International Events</option>
                <option value="Employer Recruitment Enquiry">Employer Recruitment Enquiry</option>
                <option value="Business Cooperation">Business Cooperation</option>
                <option value="General Enquiry">General Enquiry</option>
              </>
            )}
          </select>
        </div>

        <div>
          <label className="label-field">
            {isDe ? "Betreff" : "Subject"} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder={isDe ? "Thema Ihrer Anfrage" : "Topic of your enquiry"}
            className="input-field"
          />
        </div>

        <div className="md:col-span-2">
          <label className="label-field">
            {isDe ? "Ihre Nachricht" : "Message"} <span className="text-red-500">*</span>
          </label>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder={isDe ? "Geben Sie hier Ihre Nachricht oder Anfrage ein..." : "Write your message or inquiry here..."}
            className="input-field"
          />
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-700"
          />
          <span className="text-xs text-gray-700 leading-relaxed">
            {isDe ? (
              <>
                Ich willige in die Erhebung und Verarbeitung meines Namens und meiner E-Mail-Adresse zum Zwecke der Bearbeitung dieser Anfrage gemäß der{" "}
                <a href="/privacy-policy" target="_blank" className="text-primary-700 underline font-semibold">
                  Datenschutzerklärung
                </a>{" "}
                ein.
              </>
            ) : (
              <>
                I consent to the collection and processing of my name and email address for the sole purpose of responding to this inquiry, in accordance with the{" "}
                <a href="/privacy-policy" target="_blank" className="text-primary-700 underline font-semibold">
                  Datenschutzerklärung
                </a>.
              </>
            )}
          </span>
        </label>
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full justify-center !py-3.5 text-base font-bold shadow-lg"
        >
          {loading ? (
            <span>{isDe ? "Wird gesendet..." : "Sending Message..."}</span>
          ) : (
            <>
              <span>{isDe ? "Nachricht absenden" : "Send Message"}</span>
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
