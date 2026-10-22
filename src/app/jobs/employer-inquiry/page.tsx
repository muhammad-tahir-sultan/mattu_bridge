import type { Metadata } from "next";
import EmployerInquiryContent from "@/components/pages/EmployerInquiryContent";

export const metadata: Metadata = {
  title: "Employer Job Submission & Recruitment Enquiry | Mattu Bridge",
  description:
    "Employers can submit vacancies for review or discuss recruitment cooperation agreements with Mattu Bridge.",
};

export default function EmployerInquiryPage() {
  return <EmployerInquiryContent />;
}
