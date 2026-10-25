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
        imageUrl={images.viennaBuilding}
        heroImage={images.careerCandidate}
        heroImageAlt="Candidate consultation in Germany"
        heroBadge={isDe ? "📝 Kostenfreie Registrierung" : "📝 Free Candidate Intake"}
        secondaryImage={images.warehouseWorkers}
        secondaryTitle={isDe ? "Direktvermittlung" : "Direct Placement"}
        secondarySubtitle={isDe ? "DSGVO-konform · Vertraulich" : "GDPR Compliant · Confidential"}
        trustHighlights={[
          { text: isDe ? "Keine Pflicht-Uploads" : "Optional CV upload" },
          { text: isDe ? "100% Kostenfrei" : "Zero Fees for Applicants" },
          { text: isDe ? "Datenschutz garantiert" : "Full GDPR Privacy" },
        ]}
      />

      <section className="section-padding bg-gray-50/70">
        <div className="section-container max-w-4xl">
          <JobSeekerForm />
        </div>
      </section>
    </div>
  );
}
