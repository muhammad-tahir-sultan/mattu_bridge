import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  UserCheck,
  Building,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Search,
  Truck,
  HeartPulse,
  Hotel,
  Cpu,
  Boxes,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { images } from "@/data/images";
import { initialJobListings, jobCategories } from "@/data/jobsData";

export const metadata: Metadata = {
  title: "Jobs & Recruitment — Employment Placement Germany",
  description:
    "Mattu Bridge connects job seekers with employment opportunities and employers with qualified candidates across Germany and Europe.",
};

const sectors = [
  {
    title: "Logistics, Transport & Warehousing",
    description: "Commercial driving (Category CE / Code 95), freight distribution, forklift operators, and modern supply chain roles.",
    icon: Truck,
  },
  {
    title: "Healthcare & Social Care",
    description: "Nursing assistants, elderly care specialists, and clinic support personnel providing vital community welfare services.",
    icon: HeartPulse,
  },
  {
    title: "Hospitality & Gastronomy",
    description: "Hotel front office, culinary professionals, facility coordinators, and tourism staff across central European destinations.",
    icon: Hotel,
  },
  {
    title: "Technical & Skilled Trades",
    description: "Industrial mechanics, electricians, manufacturing technicians, and vocational engineering specialists.",
    icon: Cpu,
  },
];

export default function JobsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Employment Placement &amp; Recruitment"
        title="Jobs, Career Pathways &amp; Employer Solutions"
        description="Connecting ambitious job seekers with verified employers across Germany and Europe under ethical, transparent, and legally sound placement procedures."
        imageUrl={images.truck}
      />

      {/* Two Prominent Action Cards */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="heading-eyebrow mb-2">How We Can Help You</p>
            <h2 className="heading-2">Choose Your Pathway</h2>
            <p className="mt-3 text-base text-gray-600">
              Whether you are an individual seeking employment or an enterprise seeking reliable talent, we provide dedicated support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card A: Job Seekers */}
            <div className="card border-primary-100 hover:border-primary-400 p-8 flex flex-col justify-between">
              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-700 mb-6">
                  <UserCheck className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">
                  Find a Job / Candidate Registration
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  For individuals seeking employment opportunities in Germany and
                  across Europe. Register your professional profile, skills, and
                  qualifications. Document uploads (CV, licences, certificates)
                  are completely optional.
                </p>
                <ul className="space-y-2.5 text-sm text-gray-700 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Free registration for job seekers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>No document upload mandatory to express interest</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Strict data privacy and candidate consent</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-100">
                <Link
                  href="/jobs/job-seeker-registration"
                  className="btn-primary flex-1 justify-center text-sm font-bold"
                >
                  <span>Register as a Job Seeker</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/jobs/listings"
                  className="btn-secondary flex-1 justify-center text-sm font-semibold"
                >
                  <Search className="h-4 w-4" />
                  <span>Browse Vacancies</span>
                </Link>
              </div>
            </div>

            {/* Card B: Employers */}
            <div className="card border-primary-100 hover:border-primary-400 p-8 flex flex-col justify-between">
              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-100 text-primary-700 mb-6">
                  <Building className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">
                  Hire Talent / Post a Job
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  For employers, HR directors, and organizations wishing to advertise
                  vacancies or discuss recruitment requirements. Every submitted
                  vacancy is reviewed by our administration before publication.
                </p>
                <ul className="space-y-2.5 text-sm text-gray-700 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Submit vacancies for administrator review</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Pre-screened international candidate referrals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>Recruitment cooperation agreements</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <Link
                  href="/jobs/employer-inquiry"
                  className="btn-primary w-full justify-center text-sm font-bold"
                >
                  <span>Post a Job or Submit Employer Enquiry</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Industries / Sectors */}
      <section className="section-padding bg-gray-50 border-y border-gray-100">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="heading-eyebrow mb-2">Key Industries</p>
            <h2 className="heading-2">Primary Sectors We Serve</h2>
            <p className="mt-3 text-base text-gray-600">
              Focusing on in-demand employment sectors requiring dependable, qualified professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sec) => {
              const Icon = sec.icon;
              return (
                <div key={sec.title} className="card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700 mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                    {sec.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-600">
                    {sec.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legal & Compliance Safeguards (Strict Rule Compliance) */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl">
          <div className="rounded-3xl border border-primary-200 bg-primary-50/50 p-8 md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-primary-700 text-white">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-2xl font-bold text-gray-900">
                  Ethical Recruitment Standards &amp; Legal Notices
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  In compliance with German employment regulations, Mattu Bridge operates strictly as an intermediary facilitator. Please note:
                </p>
                <ul className="space-y-2 text-xs text-gray-700 list-disc pl-5">
                  <li>
                    <strong>No Guarantees:</strong> We do not guarantee employment, job interviews, visa issuance, residence permits, or specific earnings.
                  </li>
                  <li>
                    <strong>Agency Classification:</strong> Mattu Bridge does not operate as a temporary staffing or employee-leasing agency (AÜG) unless expressly authorized under statutory provisions.
                  </li>
                  <li>
                    <strong>Candidate Protection:</strong> Candidate information is never published publicly and is shared with employers only after candidate consent.
                  </li>
                  <li>
                    <strong>Employer Verification:</strong> Vacancies submitted by employers undergo review before publication on our job board.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
