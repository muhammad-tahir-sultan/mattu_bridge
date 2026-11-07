"use client";

import { useState } from "react";
import Link from "next/link";
import {
  UserCheck,
  Building,
  Building2,
  MapPin,
  X,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Search,
  Truck,
  HeartPulse,
  Hotel,
  Cpu,
  ChevronRight,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { images } from "@/data/images";
import { initialJobListings, JobListing } from "@/data/jobsData";
import { useLanguage } from "@/context/LanguageContext";

export default function JobsContent() {
  const { t, locale } = useLanguage();
  const isDe = locale === "de";
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);

  const sectors = isDe
    ? [
        {
          title: "Logistik, Transport & Lager",
          description: "Berufskraftfahrer (Klasse CE / Ziffer 95), Güterkraftverkehr, Staplerfahrer und moderne Lagerlogistik.",
          icon: Truck,
        },
        {
          title: "Gesundheits- & Pflegebereich",
          description: "Pflegefach- und Hilfskräfte, Betreuungskräfte in der Alten- und Krankenpflege für Kliniken und Senioreneinrichtungen.",
          icon: HeartPulse,
        },
        {
          title: "Gastronomie & Hotellerie",
          description: "Empfang, Gastservice, Küchenfachpersonal und Veranstaltungsservice in europäischen Gastbetrieben.",
          icon: Hotel,
        },
        {
          title: "Technik & Fachhandwerk",
          description: "Industriemechaniker, Elektroniker, Mechatroniker, Instandhalter und handwerkliche Spezialisten.",
          icon: Cpu,
        },
      ]
    : [
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

  return (
    <div>
      <PageHeader
        eyebrow={t.jobs.eyebrow}
        title={t.jobs.title}
        description={t.jobs.description}
        imageUrl={images.frankfurt}
        heroImage={images.truck}
        heroImageAlt="Commercial transport and vocational employment in Europe"
        heroBadge={isDe ? "🚛 Europäische Arbeitsvermittlung" : "🚛 European Placement"}
        secondaryImage={images.healthcareNurse}
        secondaryTitle={isDe ? "Geprüfte Arbeitgeber" : "Verified Employers"}
        secondarySubtitle={isDe ? "Logistik, Pflege & Technik" : "Logistics, Healthcare & Tech"}
        actionButtons={
          <>
            <Link
              href="/jobs/job-seeker-registration"
              className="btn-primary !py-3 !px-5 text-sm font-bold shadow-lg shadow-primary-900/40"
            >
              <UserCheck className="h-4 w-4" />
              <span>{isDe ? "Als Bewerber registrieren" : "Register as Candidate"}</span>
            </Link>
            <Link
              href="/jobs/listings"
              className="btn-secondary !border-white/30 !bg-transparent !text-white hover:!bg-white/10 !py-3 !px-5 text-sm"
            >
              <Search className="h-4 w-4" />
              <span>{isDe ? "Stellenmarkt ansehen" : "Browse Job Board"}</span>
            </Link>
          </>
        }
        trustHighlights={[
          { text: isDe ? "Direktvermittlung" : "Direct Placement" },
          { text: isDe ? "Geprüfte Arbeitgeber" : "Vetted EU Employers" },
          { text: isDe ? "Rechtlich konform" : "Legally Compliant" },
        ]}
      />

      {/* Two Prominent Action Cards */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="heading-eyebrow mb-2">{t.jobs.overviewEyebrow}</p>
            <h2 className="heading-2">{t.jobs.overviewTitle}</h2>
            <p className="mt-3 text-base text-gray-600">
              {t.jobs.overviewSubtitle}
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
                  {t.jobs.forCandidatesTitle}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  {t.jobs.forCandidatesDesc}
                </p>
                <ul className="space-y-2.5 text-sm text-gray-700 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>{isDe ? "Strukturierte Registrierung für Bewerber" : "Structured intake for job seekers"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>{isDe ? "Kein verpflichtender Dokumentenupload für Interessenbekundung" : "No document upload mandatory to express interest"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>{isDe ? "Strikter Datenschutz und Einwilligung vor Weiterleitung" : "Strict data privacy and candidate consent"}</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-100">
                <Link
                  href="/jobs/job-seeker-registration"
                  className="btn-primary flex-1 justify-center text-sm font-bold"
                >
                  <span>{t.jobs.candidateCta}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/jobs/listings"
                  className="btn-secondary flex-1 justify-center text-sm font-semibold"
                >
                  <Search className="h-4 w-4" />
                  <span>{isDe ? "Stellen durchsuchen" : "Browse Vacancies"}</span>
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
                  {t.jobs.forEmployersTitle}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  {t.jobs.forEmployersDesc}
                </p>
                <ul className="space-y-2.5 text-sm text-gray-700 mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>{isDe ? "Prüfung jeder Stellenanzeige vor Veröffentlichung" : "Submit vacancies for administrator review"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>{isDe ? "Strukturierte Vorauswahl passender Bewerberprofile" : "Pre-screened international candidate referrals"}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>{isDe ? "Rechtssichere Kooperationsvereinbarungen" : "Recruitment cooperation agreements"}</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <Link
                  href="/jobs/employer-inquiry"
                  className="btn-primary w-full justify-center text-sm font-bold"
                >
                  <span>{t.jobs.employerCta}</span>
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
            <p className="heading-eyebrow mb-2">
              {isDe ? "Schwerpunktbranchen" : "Key Industries"}
            </p>
            <h2 className="heading-2">
              {isDe ? "Wichtige Wirtschaftsbereiche" : "Primary Sectors We Serve"}
            </h2>
            <p className="mt-3 text-base text-gray-600">
              {isDe
                ? "Fokus auf gefragte Beschäftigungsfelder, die zuverlässige und qualifizierte Fachkräfte suchen."
                : "Focusing on in-demand employment sectors requiring dependable, qualified professionals."}
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

      {/* Current Verified Employment Opportunities */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="heading-eyebrow mb-2">{t.home.featuredJobsEyebrow}</p>
              <h2 className="heading-2">{t.home.featuredJobsTitle}</h2>
              <p className="mt-2 text-sm text-gray-600">
                {t.home.featuredJobsSubtitle}
              </p>
            </div>
            <Link
              href="/jobs/listings"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
            >
              <span>{t.home.viewAllJobs}</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initialJobListings.map((job) => (
              <div key={job.id} className="card flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="inline-block rounded-md bg-primary-100 px-2.5 py-1 text-xs font-semibold text-primary-800 mb-2">
                        {job.category}
                      </span>
                      <h3 className="font-display text-xl font-bold text-gray-900">
                        {job.title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                      {job.type}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2 mt-2">
                    {job.description}
                  </p>

                  {job.salaryRange && (
                    <p className="mt-3 text-xs font-semibold text-gray-900">
                      {isDe ? "Vergütung:" : "Compensation:"} {job.salaryRange}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                  <span className="text-xs text-gray-400">
                    {isDe ? "Veröffentlicht:" : "Posted:"} {job.datePosted}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(job)}
                      className="btn-secondary !py-2 !px-3 text-xs font-semibold"
                    >
                      {isDe ? "Details" : "View Details"}
                    </button>
                    <Link
                      href={`/jobs/job-seeker-registration?jobRef=${job.id}&jobTitle=${encodeURIComponent(
                        job.title
                      )}`}
                      className="btn-primary !py-2 !px-3 text-xs font-bold"
                    >
                      <span>{isDe ? "Bewerben" : "Apply Now"}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Job Details */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6 md:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedJob(null)}
              className="absolute right-5 top-5 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>

            <span className="inline-block rounded-md bg-primary-100 px-3 py-1 text-xs font-bold text-primary-800 uppercase tracking-wider mb-2">
              {selectedJob.category}
            </span>
            <h2 className="font-display text-2xl font-bold text-gray-950">
              {selectedJob.title}
            </h2>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                <Building2 className="h-3.5 w-3.5 text-primary-600" />
                <span>{selectedJob.employer}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                <MapPin className="h-3.5 w-3.5 text-primary-600" />
                <span>{selectedJob.location} ({selectedJob.country})</span>
              </span>
              <span className="inline-flex items-center font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                {selectedJob.type}
              </span>
            </div>

            {selectedJob.salaryRange && (
              <div className="mt-4 rounded-xl bg-primary-50/70 p-3 text-xs">
                <span className="font-semibold text-primary-900">
                  {isDe ? "Vergütung: " : "Compensation: "}
                </span>
                <span className="text-gray-800">{selectedJob.salaryRange}</span>
              </div>
            )}

            <div className="mt-6 space-y-4 text-sm text-gray-700 leading-relaxed">
              <div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">
                  {isDe ? "Stellenübersicht" : "Vacancy Overview"}
                </h4>
                <p>{selectedJob.description}</p>
              </div>

              {selectedJob.responsibilities && (
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    {isDe ? "Hauptaufgaben" : "Key Responsibilities"}
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
                    {selectedJob.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedJob.qualifications && (
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    {isDe ? "Erforderliche Qualifikationen" : "Required Qualifications"}
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
                    {selectedJob.qualifications.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedJob.languages && (
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    {isDe ? "Sprachanforderungen" : "Language Requirements"}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {selectedJob.languages.join(", ")}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                {isDe ? "Bewerbungsfrist: " : "Deadline: "}
                {selectedJob.deadline || (isDe ? "Fortlaufend besetzbar" : "Open until filled")}
              </span>
              <Link
                href={`/jobs/job-seeker-registration?jobRef=${selectedJob.id}&jobTitle=${encodeURIComponent(
                  selectedJob.title
                )}`}
                className="btn-primary !py-2.5 !px-6 text-sm font-bold"
              >
                <span>{isDe ? "Für diese Stelle bewerben" : "Apply for this Position"}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
