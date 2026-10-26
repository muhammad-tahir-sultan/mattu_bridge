import type { Metadata } from "next";
import { AlertCircle, Scale, Shield, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/data/content";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Impressum — German Legal Notice",
  description:
    "Impressum and statutory provider identification for Mattu Bridge pursuant to German Telecommunications and Digital Services Act (DDG / TMG §5).",
};

export default function ImpressumPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Rechtliche Hinweise"
        title="Impressum"
        description="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) / ehemals Telemediengesetz (TMG) für Mattu Bridge."
        imageUrl={images.viennaBuilding}
      />

      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl">
          {/* Regulatory Notice Banner */}
          <div className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 text-xs text-emerald-950 leading-relaxed flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-emerald-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1">
                Gewerberechtlicher Status gemäß § 14 GewO:
              </p>
              <p>
                Mattu Bridge ist ein ordnungsgemäß angemeldetes Einzelunternehmen mit Sitz in Weyhe, Deutschland, registriert gemäß § 14 der deutschen Gewerbeordnung (GewO).
              </p>
            </div>
          </div>

          <div className="space-y-8 text-sm text-gray-700 leading-relaxed">
            {/* 1. Angaben zum Diensteanbieter */}
            <div className="border-b border-gray-100 pb-6">
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">
                1. Diensteanbieter / Service Provider
              </h2>
              <div className="space-y-1.5">
                <p className="font-semibold text-gray-950">{siteConfig.name}</p>
                <p>Rechtsform: Einzelunternehmen (Sole Proprietorship)</p>
                <p>Gewerbeanmeldung: Registriert gemäß § 14 GewO (Gewerbeordnung)</p>
                <p>Unternehmenssitz: Weyhe, Deutschland (Germany)</p>
              </div>
            </div>

            {/* 2. Vertretungsberechtigte Person */}
            <div className="border-b border-gray-100 pb-6">
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">
                2. Vertretungsberechtigte Person / Authorized Representative
              </h2>
              <p className="font-semibold text-gray-900">{siteConfig.director}</p>
              <p className="text-gray-600">{siteConfig.directorTitle}</p>
            </div>

            {/* 3. Kontaktaufnahme */}
            <div className="border-b border-gray-100 pb-6">
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">
                3. Kontaktaufnahme / Contact
              </h2>
              <div className="space-y-1">
                <p>
                  <strong>E-Mail:</strong>{" "}
                  <a href={`mailto:${siteConfig.email}`} className="text-primary-700 underline">
                    {siteConfig.email}
                  </a>
                </p>
                <p>
                  <strong>WhatsApp / Telefon:</strong> {siteConfig.whatsapp}
                </p>
                <p>
                  <strong>Internetseite:</strong> {siteConfig.domain}
                </p>
              </div>
            </div>

            {/* 4. Umsatzsteuer & Register */}
            <div className="border-b border-gray-100 pb-6">
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">
                4. Registereintrag &amp; Umsatzsteuer-Identifikationsnummer
              </h2>
              <p className="text-gray-600">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz bzw.
                Handelsregistereintrag: Wird nach Zuteilung durch die zuständigen
                Finanz- und Registerbehörden an dieser Stelle veröffentlicht.
              </p>
            </div>

            {/* 5. Streitbeilegung */}
            <div className="border-b border-gray-100 pb-6">
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">
                5. Verbraucherstreitbeilegung / Dispute Resolution
              </h2>
              <p className="mb-2">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-700 underline font-medium"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="text-gray-600">
                Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht
                bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            {/* 6. Haftung für Inhalte */}
            <div className="border-b border-gray-100 pb-6">
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">
                6. Haftung für Inhalte / Liability for Content
              </h2>
              <p className="text-gray-600">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG / TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 DDG / TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach Umständen
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt.
              </p>
            </div>

            {/* 7. Haftung für Links */}
            <div className="border-b border-gray-100 pb-6">
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">
                7. Haftung für Links / Liability for Links
              </h2>
              <p className="text-gray-600">
                Unser Angebot enthält ggf. Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte
                der verlinkten Seiten ist stets der jeweilige Anbieter oder
                Betreiber der Seiten verantwortlich.
              </p>
            </div>

            {/* 8. Urheberrecht */}
            <div>
              <h2 className="font-display text-xl font-bold text-gray-900 mb-3">
                8. Urheberrecht / Copyright
              </h2>
              <p className="text-gray-600">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
                Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
