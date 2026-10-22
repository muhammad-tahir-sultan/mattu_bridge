import type { Metadata } from "next";
import JobsContent from "@/components/pages/JobsContent";

export const metadata: Metadata = {
  title: "Jobs & Recruitment — Employment Placement Germany | Mattu Bridge",
  description:
    "Mattu Bridge connects job seekers with employment opportunities and employers with qualified candidates across Germany and Europe.",
};

export default function JobsPage() {
  return <JobsContent />;
}
