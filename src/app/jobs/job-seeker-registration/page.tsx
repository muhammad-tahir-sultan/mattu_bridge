import type { Metadata } from "next";
import JobSeekerRegistrationContent from "@/components/pages/JobSeekerRegistrationContent";

export const metadata: Metadata = {
  title: "Job Seeker Registration — Candidate Profile",
  description:
    "Register your candidate profile for employment opportunities in Germany and Europe with Mattu Bridge Consultancy. Document uploads are strictly optional.",
};

export default function JobSeekerRegistrationPage() {
  return <JobSeekerRegistrationContent />;
}
