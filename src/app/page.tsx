"use client";

import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Briefcase,
  Globe,
  ArrowRight,
  Building,
  UserCheck,
  ShieldCheck,
} from "lucide-react";
import { images } from "@/data/images";
import { useLanguage } from "@/context/LanguageContext";
import EuropeMap from "@/components/EuropeMap";
import HeroSlider from "@/components/HeroSlider";

export default function HomePage() {
  const { t, locale } = useLanguage();
  const isDe = locale === "de";

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

      {/* 3. Why Mattu Bridge Section */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center">
            <div className="relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={images.campus}
                  alt="European University and Business Campus"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block rounded-2xl bg-white p-5 shadow-xl border border-gray-100 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900">
                      {isDe ? "Strikte europäische Standards" : "Strict European Compliance"}
                    </p>
                    <p className="text-[11px] text-gray-500">
                      {isDe
                        ? "Ethische Kommunikation & DSGVO-Datenschutz."
                        : "Ethical communication & GDPR privacy standards."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="heading-eyebrow mb-3">{t.home.whyChooseEyebrow}</p>
              <h2 className="heading-2 mb-6">
                {t.home.whyChooseTitle}
              </h2>
              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p>
                  {t.home.whyChooseSubtitle}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      {t.home.whyPoint1Title}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {t.home.whyPoint1Desc}
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      {t.home.whyPoint2Title}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {t.home.whyPoint2Desc}
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      {t.home.whyPoint3Title}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {t.home.whyPoint3Desc}
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      {t.home.whyPoint4Title}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {t.home.whyPoint4Desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Link href="/contact" className="btn-primary !py-2.5 !px-5 text-sm">
                  <span>{isDe ? "Direkten Kontakt aufnehmen" : "Contact Our Team"}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
