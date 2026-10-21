import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import JobSeekerForm from "@/components/forms/JobSeekerForm";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Job Seeker Registration — Candidate Profile",
  description:
    "Register your candidate profile for employment opportunities in Germany and Europe. Document uploads are strictly optional.",
};

export default function JobSeekerRegistrationPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Candidate Registration"
        title="Register as a Job Seeker"
        description="Submit your professional experience, qualifications, and target employment preferences. Document uploads are optional."
        imageUrl={images.warehouseWorkers}
      />

      <section className="section-padding bg-gray-50/70">
        <div className="section-container max-w-4xl">
          <div className="mb-8 rounded-2xl border border-primary-200 bg-primary-50/60 p-4 text-xs text-primary-950">
            <p className="font-semibold mb-1">
              Data Minimization &amp; Privacy Safeguards:
            </p>
            <p>
              Under our GDPR compliance framework, you are not forced to upload
              a CV, passport, or licence to register your interest. We respect your
              privacy rights and never publish candidate profiles publicly.
            </p>
          </div>

          <JobSeekerForm />
        </div>
      </section>
    </div>
  );
}
