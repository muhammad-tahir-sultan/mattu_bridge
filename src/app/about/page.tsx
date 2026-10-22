import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About Us | Mattu Bridge",
  description:
    "Learn about Mattu Bridge, our purpose, European mission, and our three core pillars: Educational Consultancy, Jobs & Recruitment, and International Events.",
};

export default function AboutPage() {
  return <AboutContent />;
}
