import type { Metadata } from "next";
import AboutContent from "@/components/pages/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mattu Bridge Consultancy, our purpose, European mission, and our three core pillars: Educational Consultancy, Jobs & Recruitment, and International Events.",
};

export default function AboutPage() {
  return <AboutContent />;
}
