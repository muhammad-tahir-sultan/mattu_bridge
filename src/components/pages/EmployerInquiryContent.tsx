"use client";

import PageHeader from "@/components/PageHeader";
import EmployerEnquiryForm from "@/components/forms/EmployerEnquiryForm";
import { images } from "@/data/images";
import { useLanguage } from "@/context/LanguageContext";

export default function EmployerInquiryContent() {
  const { locale } = useLanguage();
  const isDe = locale === "de";

  return (
    <div>
      <PageHeader
        eyebrow={isDe ? "Arbeitgeber-Portal" : "Employer Portal"}
        title={isDe ? "Stellenangebot aufgeben & Personalbedarf mitteilen" : "Post a Job or Submit Recruitment Requirements"}
        description={
          isDe
            ? "Verbinden Sie sich mit qualifizierten Fachkräften in ganz Europa. Alle übermittelten Stellenangebote werden vor Veröffentlichung geprüft."
            : "Connect with qualified candidates across Europe. All submitted vacancies undergo review prior to public listing."
        }
        imageUrl={images.frankfurt}
        heroImage={images.businessMeeting}
        heroImageAlt="Corporate recruitment and talent acquisition in Europe"
        heroBadge={isDe ? "🏢 Arbeitgeber-Service" : "🏢 Employer Solutions"}
        secondaryImage={images.handshake}
        secondaryTitle={isDe ? "Rechtssichere Vermittlung" : "Legally Compliant"}
        secondarySubtitle={isDe ? "Geprüfte Fachkräfte · Europaweit" : "Screened Candidates · Pan-Europe"}
        trustHighlights={[
          { text: isDe ? "Vorprüfung der Bewerber" : "Pre-vetted applicants" },
          { text: isDe ? "Direkter Ansprechpartner" : "Dedicated Germany Desk" },
          { text: isDe ? "Transparente Konditionen" : "Transparent terms" },
        ]}
      />

      <section className="section-padding bg-gray-50/70">
        <div className="section-container max-w-4xl">
          <EmployerEnquiryForm />
        </div>
      </section>
    </div>
  );
}
