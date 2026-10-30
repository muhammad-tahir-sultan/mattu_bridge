import type { Metadata } from "next";
import EmployerInquiryContent from "@/components/pages/EmployerInquiryContent";

export const metadata: Metadata = {
  title: "Employer Job Submission & Recruitment Enquiry",
  description:
    "Employers can submit vacancies for review or discuss recruitment cooperation agreements with Mattu Bridge Consultancy.",
};

export default function EmployerInquiryPage() {
  return <EmployerInquiryContent />;
}
