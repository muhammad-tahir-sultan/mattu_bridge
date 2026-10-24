import type { Metadata } from "next";
import { AlertCircle, Shield } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/data/content";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Privacy Policy — Datenschutzerklärung (GDPR)",
  description:
    "Privacy Policy and GDPR data protection notice for Mattu Bridge under European and German data privacy legislation.",
};

const policySections = [
  {
    title: "1. Data Controller Information",
    content: `Responsible for data processing on this website in accordance with Article 4(7) of the EU General Data Protection Regulation (GDPR):

Mattu Bridge
Director: IA Mattu
Email: ${siteConfig.email}
Website: ${siteConfig.domain}

For inquiries regarding our data handling or to exercise your GDPR rights, please contact our data protection coordinator via email at ${siteConfig.email}.`,
  },
  {
    title: "2. Principles of Processing & Legal Bases",
    content: `We process personal data strictly in accordance with European and German data protection regulations (GDPR and BDSG). Processing is carried out under the following legal bases:

• Art. 6(1)(a) GDPR: Where you have given explicit consent for one or more specific purposes (e.g. voluntary document upload, future vacancy matching).
• Art. 6(1)(b) GDPR: Where processing is necessary for the performance of pre-contractual measures taken at your request (e.g. evaluating a study enquiry or recruitment cooperation).
• Art. 6(1)(f) GDPR: Where processing is necessary to safeguard our legitimate interests, such as ensuring network security, preventing spam submissions, and operating our platform.`,
  },
  {
    title: "3. Categories of Data Collected",
    content: `We collect and process personal data exclusively through user-submitted inquiries:

• Student Enquiries: Full name, email address, country of residence, nationality, preferred destination, intended study level, subject of study, highest qualification, and optional information (WhatsApp number, language proficiency, optional educational transcripts or CV).
• Job Seeker Registrations: Full name, email, nationality, country of residence, target employment category, professional work experience, key skills, profile summary, and optional documents (CV, driving licences, professional certifications).
• Employer Inquiries: Company name, business contact person, email, telephone, location, sector, and vacancy details.
• Event Registrations: Full name, email, country, organization, area of interest, and participation category.
• General Inquiries: Name, email, enquiry category, subject, and message text.`,
  },
  {
    title: "4. Data Minimization & Optional Document Handling",
    content: `In accordance with Article 5(1)(c) GDPR (data minimization):

• No applicant or prospective student is forced or required to upload passports, academic degrees, or licences simply to register an interest.
• Uploaded files are stored in access-restricted storage, protected by technical security controls, and are never made publicly accessible.
• Passports and sensitive identity documents should only be submitted once formal admission or employment onboarding steps are confirmed.`,
  },
  {
    title: "5. Data Retention & Deletion",
    content: `We retain personal data only for the period necessary to fulfill the intended purpose:

• General Contact Inquiries: Retained for up to 6 months following resolution of the query.
• Study Enquiries: Retained for the duration of the educational counseling process or until consent is withdrawn.
• Candidate Registrations: Stored for up to 12 months with candidate consent for vacancy matching, after which profiles are deleted unless renewal of consent is provided.
• Statutory retention obligations under German commercial and tax law (HGB, AO) remain unaffected where applicable.`,
  },
  {
    title: "6. Your Rights Under GDPR",
    content: `As a data subject, you hold the following statutory rights under the GDPR:

• Right of Access (Art. 15 GDPR): You have the right to obtain confirmation as to whether personal data concerning you is being processed.
• Right to Rectification (Art. 16 GDPR): You may request the prompt correction of inaccurate personal data.
• Right to Erasure / 'Right to be Forgotten' (Art. 17 GDPR): You may request the deletion of your personal data.
• Right to Restriction of Processing (Art. 18 GDPR): You have the right to request restriction under statutory conditions.
• Right to Data Portability (Art. 20 GDPR): You may request to receive your personal data in a structured, machine-readable format.
• Right to Object (Art. 21 GDPR): You have the right to object at any time to processing based on Art. 6(1)(f) GDPR.
• Right to Withdraw Consent (Art. 7(3) GDPR): You may revoke granted consent at any time with effect for the future.
• Right to Lodge a Complaint: You have the right to lodge a complaint with a competent data protection supervisory authority (e.g. the Hessian Data Protection Commissioner in Germany).`,
  },
  {
    title: "7. Technical & Organizational Measures (TOM)",
    content: `To protect your data against accidental loss, unauthorized access, or alteration, we implement modern security measures:

• End-to-end SSL/TLS HTTPS encryption across the entire website.
• Role-based restricted access controls for platform administration.
• Server-side file validation and quarantine protocols for uploaded documents.
• Regular security reviews and automated backup protocols.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Legal &amp; Compliance"
        title="Privacy Policy — Datenschutzerklärung"
        description="Information regarding the collection, processing, storage, and protection of personal data in accordance with the EU General Data Protection Regulation (GDPR)."
        imageUrl={images.viennaBuilding}
      />

      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl">
          {/* Statutory Notice Card */}
          <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1">
                Data Protection Compliance Notice:
              </p>
              <p>
                This privacy policy reflects our active website configuration, form
                architecture, and data minimization policy. Specific technical hosting
                provider details and corporate register numbers are confirmed prior to
                commercial operation. Last updated: March 2026.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            {policySections.map((sec) => (
              <div key={sec.title} className="border-b border-gray-100 pb-8 last:border-b-0">
                <h2 className="font-display text-xl font-bold text-gray-950 mb-3">
                  {sec.title}
                </h2>
                <div className="space-y-3 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                  {sec.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
