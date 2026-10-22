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
        imageUrl={images.businessMeeting}
      />

      <section className="section-padding bg-gray-50/70">
        <div className="section-container max-w-4xl">
          <EmployerEnquiryForm />
        </div>
      </section>
    </div>
  );
}
