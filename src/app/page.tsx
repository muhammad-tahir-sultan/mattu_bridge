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
  ChevronRight,
} from "lucide-react";
import { images } from "@/data/images";
import { useLanguage } from "@/context/LanguageContext";
import EuropeMap from "@/components/EuropeMap";

export default function HomePage() {
  const { t, locale } = useLanguage();

  return (
    <div>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-primary-950 text-white">
        {/* Background Image with European Cityscape & Gradients */}
        <div className="absolute inset-0">
          <Image
            src={images.frankfurtRiver}
            alt="European Bridge and City Skyline"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/75 via-primary-950/70 to-primary-950" />
        </div>

        {/* Ambient Gradient Glow Orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-primary-500/25 blur-3xl" />
          <div className="absolute -left-24 bottom-10 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 xl:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Text & Actions */}
            <div className="lg:col-span-7 xl:col-span-7">
              {/* Pill Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-primary-200 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.home.badge}</span>
              </div>

              {/* Main Heading */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-bold leading-[1.12] tracking-tight text-white">
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
              <p className="mt-5 text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 max-w-3xl font-normal">
                {t.home.subtitle}
              </p>

              {/* Primary Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/education" className="btn-primary !py-3 !px-6 text-sm sm:text-base font-bold shadow-xl shadow-primary-900/40">
                  <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>{locale === "de" ? "Studienchancen entdecken" : "Explore Study Opportunities"}</span>
                </Link>
                <Link
                  href="/jobs"
                  className="btn-secondary !border-white/30 !bg-transparent !text-white hover:!bg-white/10 !py-3 !px-6 text-sm sm:text-base font-semibold"
                >
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span>{locale === "de" ? "Jobchancen finden" : "Find Job Opportunities"}</span>
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 rounded-lg border border-amber-400/40 bg-amber-500/10 px-4 sm:px-5 py-3 text-sm sm:text-base font-semibold text-amber-200 hover:bg-amber-500/20 transition-all"
                >
                  <Globe className="h-4 w-4" />
                  <span>{t.home.ctaEvents}</span>
                </Link>
              </div>

              {/* Expansive Transparency & Trust Highlights Grid */}
              <div className="mt-9 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white">
                      {locale === "de" ? "Sitz in Deutschland" : "Based in Germany"}
                    </p>
                    <p className="text-[10.5px] text-gray-300">
                      {locale === "de" ? "Frankfurt am Main" : "Frankfurt am Main"}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white">
                      {locale === "de" ? "6 europäische Ziele" : "6 European Hubs"}
                    </p>
                    <p className="text-[10.5px] text-gray-300">
                      {locale === "de" ? "DE, PL, MT, ES, PT, HU" : "DE, PL, MT, ES, PT, HU"}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white">
                      {locale === "de" ? "Verifizierte Chancen" : "Verified Pathways"}
                    </p>
                    <p className="text-[10.5px] text-gray-300">
                      {locale === "de" ? "Studium & Arbeitsmarkt" : "Education & Careers"}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-white">
                      {locale === "de" ? "100% DSGVO-konform" : "100% GDPR Compliant"}
                    </p>
                    <p className="text-[10.5px] text-gray-300">
                      {locale === "de" ? "Datensparsamkeit" : "Data Minimization"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Photo Composition */}
            <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-end mt-6 lg:mt-0">
              <div className="relative w-full max-w-[540px] xl:max-w-[580px]">
                {/* Main Teacher Image Card with Blackboard formulas */}
                <div className="relative aspect-[4/3.4] sm:aspect-[4/3.2] lg:aspect-[4/3.4] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-gray-900 group">
                  <Image
                    src={images.heroTeacher}
                    alt="Education & Opportunities in Europe - Mattu Bridge"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Badge */}
                  <div className="absolute top-4 right-4 rounded-full bg-primary-950/85 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md border border-white/15 shadow-lg">
                    🎓 {locale === "de" ? "Bildung in Europa" : "Study in Europe"}
                  </div>

                  {/* Bottom Pathway Banner */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-primary-950/80 p-3.5 backdrop-blur-md border border-white/15 shadow-xl flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <p className="text-xs font-semibold text-white">
                        {locale === "de"
                          ? "Zugelassene Bildungs- & Karriereprogramme in Europa"
                          : "Recognised Educational & Career Pathways in Europe"}
                      </p>
                    </div>
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

      {/* 2.5 Interactive European Network & Mobility Map */}
      <EuropeMap />
    </div>
  );
}
