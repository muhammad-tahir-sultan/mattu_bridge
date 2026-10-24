import type { Metadata } from "next";
import { AlertCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Terms & Conditions — Allgemeine Geschäftsbedingungen (AGB)",
  description:
    "Terms and conditions for utilizing Mattu Bridge services, study enquiries, job seeker registration, and employer requests.",
};

const termsSections = [
  {
    title: "1. Scope & General Provisions",
    content: `These Terms and Conditions (Allgemeine Geschäftsbedingungen – AGB) govern the use of the Mattu Bridge website and the preliminary consulting, submission, and facilitation services offered through it.

Mattu Bridge operates in three main areas:
1. Educational Consultancy: Guiding prospective students on study pathways in Germany and Europe.
2. Employment Placement & Recruitment: Facilitating candidate registrations and employer vacancy inquiries.
3. International Events: Information and registration for seminars, conferences, and collaborative forums.`,
  },
  {
    title: "2. Nature of Services & Intermediary Status",
    content: `Mattu Bridge acts solely as an independent guidance consultant, recruitment facilitator, and event coordinator.

• We provide preparatory advice, information compilation, and communication assistance based on current criteria.
• We do NOT guarantee admission to any college, university, or academic institution.
• We do NOT guarantee visa approval, residence permit issuance, or work authorizations.
• We do NOT guarantee employment placement, salary levels, or job interview invitations.
• We do NOT provide accommodation bookings, hotel leasing, or private housing arrangements.`,
  },
  {
    title: "3. Student Enquiries & Pre-Registration",
    content: `Submitting a study enquiry via our website initiates preliminary assessment only.
• The submission of an enquiry does not create an obligation on Mattu Bridge to secure university admission or enroll the student.
• The applicant remains responsible for providing accurate, truthful, and unaltered academic credentials.
• Any formal counseling agreements or third-party application processing fees (e.g. Uni-Assist, certified translations, university fees) are subject to separate formal agreements.`,
  },
  {
    title: "4. Job Seeker Registration & Employer Advertisements",
    content: `Candidate registrations and employer vacancy submissions are subject to the following rules:
• Job Seeker Registration is free of charge for candidates. Registration does not constitute an employment contract or a promise of hiring.
• Candidate profiles are reviewed for suitability. Information is shared with verified employers only upon the candidate's explicit consent.
• Employers submitting vacancies warrant that all job descriptions, terms of employment, and compensation details comply with applicable labor laws and minimum wage standards in the respective jurisdiction.
• Mattu Bridge reserves the right to decline or unpublish any job advertisement that does not meet ethical or legal criteria.`,
  },
  {
    title: "5. Accuracy of Information & User Obligations",
    content: `Users of our platform agree:
• To submit only truthful, accurate, and current information.
• Not to upload files containing viruses, malicious code, or corrupted data.
• Not to misuse contact forms for unsolicited marketing (spam) or automated scraping.`,
  },
  {
    title: "6. Limitation of Liability",
    content: `Mattu Bridge is liable without limitation for intent and gross negligence, as well as for damages arising from injury to life, body, or health in accordance with statutory German law.

In cases of slight negligence, liability shall be limited to foreseeable damages typical for the contract resulting from the breach of a material contractual obligation (cardinal obligation). Mattu Bridge is not liable for outcomes determined by sovereign immigration authorities, visa sections of embassies, or third-party university admission boards.`,
  },
  {
    title: "7. Applicable Law & Jurisdiction",
    content: `These terms shall be governed by the laws of the Federal Republic of Germany, excluding the UN Convention on Contracts for the International Sale of Goods (CISG). Where the user is a merchant, legal entity under public law, or special fund under public law, the place of jurisdiction shall be determined by the business seat of Mattu Bridge.`,
  },
];

export default function TermsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Allgemeine Geschäftsbedingungen"
        title="Terms &amp; Conditions (AGB)"
        description="Contractual framework governing website usage, educational guidance inquiries, job seeker registrations, and employer requests."
        imageUrl={images.viennaBuilding}
      />

      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl">
          <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold mb-1">Legal Review Draft:</p>
              <p>
                These Terms and Conditions have been drafted for review and adaptation
                by a German legal professional prior to full commercial execution.
              </p>
            </div>
          </div>

          <div className="space-y-10">
            {termsSections.map((sec) => (
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
