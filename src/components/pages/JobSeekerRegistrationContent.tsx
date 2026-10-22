"use client";

import PageHeader from "@/components/PageHeader";
import JobSeekerForm from "@/components/forms/JobSeekerForm";
import { images } from "@/data/images";
import { useLanguage } from "@/context/LanguageContext";

export default function JobSeekerRegistrationContent() {
  const { locale } = useLanguage();
  const isDe = locale === "de";

  return (
    <div>
      <PageHeader
        eyebrow={isDe ? "Bewerber-Registrierung" : "Candidate Registration"}
        title={isDe ? "Als Arbeitssuchender registrieren" : "Register as a Job Seeker"}
        description={
          isDe
            ? "Reichen Sie Ihre Berufserfahrung, Qualifikationen und Beschäftigungswünsche ein. Dokumentenuploads sind rein optional."
            : "Submit your professional experience, qualifications, and target employment preferences. Document uploads are optional."
        }
        imageUrl={images.warehouseWorkers}
      />

      <section className="section-padding bg-gray-50/70">
        <div className="section-container max-w-4xl">
          <div className="mb-8 rounded-2xl border border-primary-200 bg-primary-50/60 p-4 text-xs text-primary-950">
            <p className="font-semibold mb-1">
              {isDe ? "Datensparsamkeit & DSGVO-Schutzmaßnahmen:" : "Data Minimization & Privacy Safeguards:"}
            </p>
            <p>
              {isDe
                ? "Im Rahmen unserer DSGVO-Konformität sind Sie nicht verpflichtet, Lebenslauf oder Reisepass hochzuladen, um Ihr Interesse zu bekunden. Wir respektieren Ihre Privatsphäre und veröffentlichen niemals Kandidatenprofile öffentlich."
                : "Under our GDPR compliance framework, you are not forced to upload a CV, passport, or licence to register your interest. We respect your privacy rights and never publish candidate profiles publicly."}
            </p>
          </div>

          <JobSeekerForm />
        </div>
      </section>
    </div>
  );
}
