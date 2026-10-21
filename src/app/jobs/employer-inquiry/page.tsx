import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EmployerEnquiryForm from "@/components/forms/EmployerEnquiryForm";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Employer Job Submission & Recruitment Enquiry",
  description:
    "Employers can submit vacancies for review or discuss recruitment cooperation agreements with Mattu Bridge.",
};

export default function EmployerInquiryPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Employer Portal"
        title="Post a Job or Submit Recruitment Requirements"
        description="Connect with qualified candidates across Europe. All submitted vacancies undergo review prior to public listing."
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
