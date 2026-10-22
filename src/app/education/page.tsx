import type { Metadata } from "next";
import EducationContent from "@/components/pages/EducationContent";

export const metadata: Metadata = {
  title: "Education Consultancy — Study in Germany & Across Europe | Mattu Bridge",
  description:
    "Explore educational opportunities in Germany and Europe. Guidance for Undergraduate, Master's, Vocational Training (Ausbildung), and Foundation pathways.",
};

export default function EducationPage() {
  return <EducationContent />;
}
