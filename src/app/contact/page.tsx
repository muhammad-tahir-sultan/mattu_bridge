import type { Metadata } from "next";
import ContactContent from "@/components/pages/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Mattu Bridge",
  description:
    "Get in touch with Mattu Bridge for education consultancy, employment placement, recruitment enquiries, and international cooperation in Germany and Europe.",
};

export default function ContactPage() {
  return <ContactContent />;
}
