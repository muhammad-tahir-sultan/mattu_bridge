"use client";

import Link from "next/link";
import {
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
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { images } from "@/data/images";
import { useLanguage } from "@/context/LanguageContext";

export default function JobsContent() {
  const { t, locale } = useLanguage();
  const isDe = locale === "de";

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
    </div>
  );
}
