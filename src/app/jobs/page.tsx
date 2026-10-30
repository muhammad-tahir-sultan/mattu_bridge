import type { Metadata } from "next";
import JobsContent from "@/components/pages/JobsContent";

export const metadata: Metadata = {
  title: "Jobs & Recruitment — Employment Placement Germany",
  description:
    "Mattu Bridge Consultancy connects job seekers with employment opportunities and employers with qualified candidates across Germany and Europe.",
};

export default function JobsPage() {
  return <JobsContent />;
}
