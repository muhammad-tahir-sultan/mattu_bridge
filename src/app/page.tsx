"use client";

import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Briefcase,
  Globe,
  ArrowRight,
  CheckCircle,
  Building,
  UserCheck,
  Calendar,
  ChevronRight,
} from "lucide-react";
import DirectorMessage from "@/components/DirectorMessage";
import { images } from "@/data/images";
import { initialJobListings } from "@/data/jobsData";
import { internationalEvents } from "@/data/eventsData";
import { useLanguage } from "@/context/LanguageContext";

export default function HomePage() {
  const { t, locale } = useLanguage();

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-primary-950 text-white">
        {/* Background Image with European Cityscape & Gradients */}
        <div className="absolute inset-0">
          <Image
            src={images.frankfurtRiver}
            alt="European Bridge and City Skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/70 to-primary-950" />
        </div>

        {/* Ambient Gradient Glow Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-primary-500/25 blur-3xl" />
          <div className="absolute -left-24 bottom-10 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl" />
        </div>

        <div className="section-container relative z-10 py-10 sm:py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Text & Actions */}
            <div className="lg:col-span-7">
              {/* Pill Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-primary-200 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.home.badge}</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-[2.65rem] text-white">
                {locale === "de" ? (
                  <>
                    Brücken bauen zu{" "}
                    <span className="text-emerald-300">Bildung &</span>{" "}
                    Chancen in Europa
                  </>
                ) : (
                  <>
                    Building Bridges to{" "}
                    <span className="text-emerald-300">Education &</span>{" "}
                    Opportunities in Europe
                  </>
                )}
              </h1>

              {/* Supporting Text */}
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-300 max-w-2xl">
                {t.home.subtitle}
              </p>

              {/* Primary Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                <Link href="/education" className="btn-primary !py-2.5 !px-5 text-xs sm:text-sm shadow-xl shadow-primary-900/30">
                  <GraduationCap className="h-4 w-4" />
                  <span>{locale === "de" ? "Studienchancen entdecken" : "Explore Study Opportunities"}</span>
                </Link>
                <Link
                  href="/jobs"
                  className="btn-secondary !border-white/30 !bg-transparent !text-white hover:!bg-white/10 !py-2.5 !px-5 text-xs sm:text-sm"
                >
                  <Briefcase className="h-4 w-4" />
                  <span>{locale === "de" ? "Jobchancen finden" : "Find Job Opportunities"}</span>
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-amber-400/40 bg-amber-500/10 px-4 py-2 text-xs sm:text-sm font-semibold text-amber-200 hover:bg-amber-500/20 transition-all"
                >
                  <Globe className="h-3.5 w-3.5" />
                  <span>{t.home.ctaEvents}</span>
                </Link>
              </div>

              {/* Transparency Trust Highlights */}
              <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>{locale === "de" ? "DSGVO-konform" : "GDPR-compliant"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>{locale === "de" ? "6 europäische Ziele" : "6 European destinations"}</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <span>{locale === "de" ? "Transparent & menschlich" : "Transparent & human"}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Photo Composition (Educator + Overlapping Driver Inset) */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
              <div className="relative w-full max-w-[440px]">
                {/* Main Teacher Image Card with Blackboard formulas */}
                <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-gray-900 group">
                  <Image
                    src={images.heroTeacher}
                    alt="Education & Opportunities in Europe - Mattu Bridge"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 440px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Badge */}
                  <div className="absolute top-4 right-4 rounded-full bg-primary-950/80 px-3 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-md border border-white/10 shadow-lg">
                    🎓 {locale === "de" ? "Bildung in Europa" : "Study in Europe"}
                  </div>
                </div>

                {/* Overlapping Inset Driver Photo Card at bottom-left */}
                <div className="absolute -bottom-6 -left-6 z-20 rounded-2xl bg-white p-2.5 shadow-2xl border-2 border-white/95 max-w-[210px] transform hover:scale-105 transition-all">
                  <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-xl overflow-hidden shadow-inner">
                    <Image
                      src={images.heroDriver}
                      alt="Employment Placement & Professional Careers - Mattu Bridge"
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <div className="pt-2 px-1">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <p className="text-xs font-bold text-gray-900">
                        {locale === "de" ? "Arbeit & Karriere" : "Careers & Jobs"}
                      </p>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-0.5">
                      {locale === "de" ? "Fachkräfte & Logistik" : "Logistics & Professionals"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Three Principal Business Categories */}
      <section className="section-padding bg-gray-50/70 border-b border-gray-100">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="heading-eyebrow mb-3">{t.home.pillarsEyebrow}</p>
            <h2 className="heading-2">{t.home.pillarsTitle}</h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
              {t.home.pillarsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Educational Consultancy */}
            <div className="card flex flex-col justify-between group hover:border-primary-300">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-700 mb-6 group-hover:bg-primary-700 group-hover:text-white transition-colors">
                  <GraduationCap className="h-7 w-7" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-1">
                  Pillar 01
                </p>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">
                  {t.home.pillarEducationTitle}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 mb-6">
                  {t.home.pillarEducationDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="/education"
                  className="btn-primary w-full justify-center !py-2.5 text-xs font-bold"
                >
                  <span>{t.home.pillarEducationCta}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Card 2: Jobs & Recruitment */}
            <div className="card flex flex-col justify-between group hover:border-primary-300">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-700 mb-6 group-hover:bg-primary-700 group-hover:text-white transition-colors">
                  <Briefcase className="h-7 w-7" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary-600 mb-1">
                  Pillar 02
                </p>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">
                  {t.home.pillarJobsTitle}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 mb-6">
                  {t.home.pillarJobsDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-2">
                <Link
                  href="/jobs/job-seeker-registration"
                  className="btn-secondary flex-1 justify-center !py-2.5 text-xs font-semibold"
                >
                  <UserCheck className="h-3.5 w-3.5" />
                  <span>{t.common.registerJobSeeker}</span>
                </Link>
                <Link
                  href="/jobs/employer-inquiry"
                  className="btn-primary flex-1 justify-center !py-2.5 text-xs font-semibold"
                >
                  <Building className="h-3.5 w-3.5" />
                  <span>{t.home.pillarJobsSecondaryCta}</span>
                </Link>
              </div>
            </div>

            {/* Card 3: International Events */}
            <div className="card flex flex-col justify-between group hover:border-amber-300">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Globe className="h-7 w-7" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">
                  Pillar 03
                </p>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-3">
                  {t.home.pillarEventsTitle}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 mb-6">
                  {t.home.pillarEventsDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="/events"
                  className="btn-accent w-full justify-center !py-2.5 text-xs font-bold"
                >
                  <span>{t.home.pillarEventsCta}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Six European Destinations Section (From Study Europe Preview) */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="heading-eyebrow mb-2">
                {locale === "de" ? "WO SIE STUDIEREN KÖNNEN" : "WHERE YOU CAN STUDY"}
              </p>
              <h2 className="heading-2">
                {locale === "de" ? "Sechs europäische Reiseziele" : "Six European destinations"}
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                {locale === "de"
                  ? "Entdecken Sie akademische Wege und erstklassige Bildungsstandorte in ganz Europa."
                  : "Explore academic pathways across top-tier education hubs across Europe."}
              </p>
            </div>
            <Link
              href="/education"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
            >
              <span>{locale === "de" ? "Alle Programme ansehen" : "View all programmes"}</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                country: "Germany",
                countryDe: "Deutschland",
                tag: "Economy & Tech Leader",
                tagDe: "Wirtschafts- & MINT-Spitzenreiter",
                image: images.destinations.germany,
              },
              {
                country: "Poland",
                countryDe: "Polen",
                tag: "Academic Excellence & Value",
                tagDe: "Exzellenz & bezahlbare Studiengebühren",
                image: images.destinations.poland,
              },
              {
                country: "Malta",
                countryDe: "Malta",
                tag: "English-Speaking Hub",
                tagDe: "Englischsprachige EU-Insel",
                image: images.destinations.malta,
              },
              {
                country: "Spain",
                countryDe: "Spanien",
                tag: "World-Class Business Schools",
                tagDe: "Internationale Top-Wirtschaftsuniversitäten",
                image: images.destinations.spain,
              },
              {
                country: "Portugal",
                countryDe: "Portugal",
                tag: "Innovation & Tech Campus",
                tagDe: "Innovationscampus & Atlantikküste",
                image: images.destinations.portugal,
              },
              {
                country: "Hungary",
                countryDe: "Ungarn",
                tag: "Affordable EU Degrees & Medicine",
                tagDe: "Bezahlbare EU-Abschlüsse & Medizin",
                image: images.destinations.hungary,
              },
            ].map((dest, i) => (
              <Link
                key={i}
                href="/education"
                className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                  <Image
                    src={dest.image}
                    alt={`${dest.country} - Study with Mattu Bridge`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-gray-900 backdrop-blur-md shadow-sm">
                    {locale === "de" ? "STUDIEREN IN" : "STUDY IN"}
                  </div>
                </div>

                <div className="p-5 flex items-center justify-between bg-white border-t border-gray-100">
                  <div>
                    <h3 className="font-display text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                      {locale === "de" ? dest.countryDe : dest.country}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {locale === "de" ? dest.tagDe : dest.tag}
                    </p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-700 group-hover:bg-primary-700 group-hover:text-white transition-all">
                    <ArrowRight className="h-4 w-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Director's Welcome Message Section */}
      <DirectorMessage />

      {/* 4. Featured Job Vacancies Preview */}
      <section className="section-padding bg-gray-50/70 border-b border-gray-100">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initialJobListings.slice(0, 2).map((job) => (
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
                      <p className="text-xs text-gray-500 mt-1">
                        {job.employer} · {job.location} ({job.country})
                      </p>
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
                      {locale === "de" ? "Vergütung:" : "Compensation:"} {job.salaryRange}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {locale === "de" ? "Veröffentlicht:" : "Posted:"} {job.datePosted}
                  </span>
                  <Link
                    href={`/jobs/job-seeker-registration?jobRef=${job.id}`}
                    className="btn-primary !py-2 !px-4 text-xs font-bold"
                  >
                    <span>{locale === "de" ? "Jetzt bewerben" : "Apply Now"}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Upcoming International Events Preview */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="heading-eyebrow mb-2">{t.home.upcomingEventsEyebrow}</p>
              <h2 className="heading-2">{t.home.upcomingEventsTitle}</h2>
              <p className="mt-2 text-sm text-gray-600">
                {t.home.upcomingEventsSubtitle}
              </p>
            </div>
            <Link
              href="/events"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
            >
              <span>{t.home.viewAllEvents}</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internationalEvents.slice(0, 2).map((evt) => (
              <div key={evt.id} className="card flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{evt.date} · {evt.time}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                    {evt.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-3">
                    {locale === "de" ? "Format:" : "Format:"} {evt.format} · {locale === "de" ? "Ort:" : "Location:"} {evt.location}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {evt.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {locale === "de" ? "Anmeldeschluss:" : "Registration by:"} {evt.registrationDeadline}
                  </span>
                  <Link
                    href={`/events?eventId=${evt.id}#register`}
                    className="btn-secondary !py-2 !px-4 text-xs font-bold"
                  >
                    <span>{locale === "de" ? "Für Event anmelden" : "Register Interest"}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
