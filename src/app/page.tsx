"use client";

import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Globe,
  ArrowRight,
  Building,
  UserCheck,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import EuropeMap from "@/components/EuropeMap";
import HeroSlider from "@/components/HeroSlider";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div>
      {/* 1. Hero Section Slider with 3 Auto-Sliding Banners */}
      <HeroSlider />

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
