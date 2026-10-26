"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Globe,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Sparkles,
  Building2,
  Users,
} from "lucide-react";
import { images } from "@/data/images";
import { useLanguage } from "@/context/LanguageContext";

interface SlideData {
  id: string;
  badgeDe: string;
  badgeEn: string;
  badgeColor: string;
  headingDe: React.ReactNode;
  headingEn: React.ReactNode;
  subtitleDe: string;
  subtitleEn: string;
  primaryCtaTextDe: string;
  primaryCtaTextEn: string;
  primaryCtaLink: string;
  primaryCtaIcon: React.ElementType;
  primaryCtaStyle: string;
  secondaryCtaTextDe: string;
  secondaryCtaTextEn: string;
  secondaryCtaLink: string;
  secondaryCtaIcon: React.ElementType;
  tertiaryCtaTextDe: string;
  tertiaryCtaTextEn: string;
  tertiaryCtaLink: string;
  tertiaryCtaIcon: React.ElementType;
  bgImage: string;
  featuredImage: string;
  featuredAlt: string;
  cornerBadgeDe: string;
  cornerBadgeEn: string;
  bottomBannerDe: string;
  bottomBannerEn: string;
  accentGlow: string;
  indicatorColor: string;
}

const SLIDE_DURATION = 6000; // 6 seconds auto-slide

export default function HeroSlider() {
  const { locale } = useLanguage();
  const isDe = locale === "de";

  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const touchStartX = useRef<number | null>(null);

  const slides: SlideData[] = [
    {
      id: "education",
      badgeDe: "Akkreditierte Hochschulen · Europa",
      badgeEn: "Accredited Universities · Europe",
      badgeColor: "text-emerald-300 border-emerald-400/30 bg-emerald-500/10",
      headingDe: (
        <>
          Brücken bauen zu{" "}
          <span className="text-emerald-300">Bildung &</span>{" "}
          Chancen in Europa
        </>
      ),
      headingEn: (
        <>
          Building Bridges to{" "}
          <span className="text-emerald-300">Education &</span>{" "}
          Opportunities in Europe
        </>
      ),
      subtitleDe:
        "Ganzheitliche Bildungsberatung, anerkannte Universitätszulassungen und transparente Studienwege in Deutschland, Polen, Ungarn, Malta, Spanien und Portugal.",
      subtitleEn:
        "Comprehensive educational consultancy, recognized university admissions, and transparent study pathways across Germany, Poland, Hungary, Malta, Spain, and Portugal.",
      primaryCtaTextDe: "Studienchancen entdecken",
      primaryCtaTextEn: "Explore Study Opportunities",
      primaryCtaLink: "/education",
      primaryCtaIcon: GraduationCap,
      primaryCtaStyle:
        "btn-primary !py-3 !px-6 text-sm sm:text-base font-bold shadow-xl shadow-primary-900/40",
      secondaryCtaTextDe: "Schengen-Karte ansehen",
      secondaryCtaTextEn: "Explore Schengen Map",
      secondaryCtaLink: "#europe-map",
      secondaryCtaIcon: Globe,
      tertiaryCtaTextDe: "Jobchancen finden",
      tertiaryCtaTextEn: "Find Job Opportunities",
      tertiaryCtaLink: "/jobs",
      tertiaryCtaIcon: Briefcase,
      bgImage: images.campus,
      featuredImage: images.studentsGroup,
      featuredAlt: "Study in Europe - Mattu Bridge Higher Education",
      cornerBadgeDe: "🎓 Bildung in Europa",
      cornerBadgeEn: "🎓 Study in Europe",
      bottomBannerDe: "Zugelassene Bildungs- & Universitätsprogramme",
      bottomBannerEn: "Recognised Educational & University Pathways",
      accentGlow: "bg-emerald-500/25",
      indicatorColor: "bg-emerald-400",
    },
    {
      id: "careers",
      badgeDe: "Europäische Arbeitsvermittlung · Karriere",
      badgeEn: "European Placement · Skilled Careers",
      badgeColor: "text-sky-300 border-sky-400/30 bg-sky-500/10",
      headingDe: (
        <>
          Karrierewege &{" "}
          <span className="text-sky-300">Fachkräftevermittlung</span>{" "}
          in ganz Europa
        </>
      ),
      headingEn: (
        <>
          Career Pathways &{" "}
          <span className="text-sky-300">Skilled Placement</span>{" "}
          Across Europe
        </>
      ),
      subtitleDe:
        "Rechtssichere und transparente Arbeitsvermittlung für Berufskraftfahrer, medizinisches Fachpersonal, Ingenieure und qualifizierte Fachkräfte in führenden europäischen Unternehmen.",
      subtitleEn:
        "Legally secure and transparent recruitment connecting commercial drivers, healthcare specialists, engineers, and qualified talent with verified European employers.",
      primaryCtaTextDe: "Offene Stellen ansehen",
      primaryCtaTextEn: "Find Job Opportunities",
      primaryCtaLink: "/jobs",
      primaryCtaIcon: Briefcase,
      primaryCtaStyle:
        "bg-gradient-to-r from-sky-600 to-primary-600 hover:from-sky-500 hover:to-primary-500 text-white !py-3 !px-6 text-sm sm:text-base font-bold shadow-xl shadow-sky-950/40 rounded-xl inline-flex items-center gap-2 transition-all",
      secondaryCtaTextDe: "Für Arbeitgeber",
      secondaryCtaTextEn: "Employer Inquiries",
      secondaryCtaLink: "/employer-inquiry",
      secondaryCtaIcon: Building2,
      tertiaryCtaTextDe: "Kandidaten-Registrierung",
      tertiaryCtaTextEn: "Job Seeker Registration",
      tertiaryCtaLink: "/jobs/job-seeker-registration",
      tertiaryCtaIcon: Users,
      bgImage: images.frankfurt,
      featuredImage: images.careerProfessional,
      featuredAlt: "European Career Placement & Skilled Employment - Mattu Bridge",
      cornerBadgeDe: "💼 Europäische Karriere",
      cornerBadgeEn: "💼 European Careers",
      bottomBannerDe: "Direkte Verträge mit geprüften europäischen Arbeitgebern",
      bottomBannerEn: "Direct Contracts with Verified European Employers",
      accentGlow: "bg-sky-500/25",
      indicatorColor: "bg-sky-400",
    },
    {
      id: "events",
      badgeDe: "Internationale Konferenzen · B2B-Foren",
      badgeEn: "International Events · B2B Forums",
      badgeColor: "text-amber-300 border-amber-400/30 bg-amber-500/10",
      headingDe: (
        <>
          Internationale{" "}
          <span className="text-amber-300">Konferenzen &</span>{" "}
          Wirtschaftsforen
        </>
      ),
      headingEn: (
        <>
          Fostering International{" "}
          <span className="text-amber-300">Conferences &</span>{" "}
          Academic Forums
        </>
      ),
      subtitleDe:
        "Förderung des globalen Dialogs zwischen Hochschulen, Wirtschaftsdelegationen und Fachkräften durch hochkarätige Kongresse, Symposien und Partnerschaftsforen in Europa.",
      subtitleEn:
        "Fostering global dialogue between universities, commercial delegations, and professionals through premier conferences, academic symposiums, and partnership forums in Europe.",
      primaryCtaTextDe: "Veranstaltungen entdecken",
      primaryCtaTextEn: "Explore Global Events",
      primaryCtaLink: "/events",
      primaryCtaIcon: Globe,
      primaryCtaStyle:
        "bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 !py-3 !px-6 text-sm sm:text-base font-bold shadow-xl shadow-amber-950/40 rounded-xl inline-flex items-center gap-2 transition-all",
      secondaryCtaTextDe: "Kontakt & Partner",
      secondaryCtaTextEn: "Contact & Partners",
      secondaryCtaLink: "/contact",
      secondaryCtaIcon: Sparkles,
      tertiaryCtaTextDe: "Studienprogramme",
      tertiaryCtaTextEn: "Study Programmes",
      tertiaryCtaLink: "/education",
      tertiaryCtaIcon: GraduationCap,
      bgImage: images.conference,
      featuredImage: images.eventStage,
      featuredAlt: "International Conferences and Forums in Europe - Mattu Bridge",
      cornerBadgeDe: "🌍 Globale Foren & Delegationen",
      cornerBadgeEn: "🌍 Global Forums & Summits",
      bottomBannerDe: "Verbindet Universitäten, Unternehmen & Führungskräfte",
      bottomBannerEn: "Connecting Universities, Industry & Global Leaders",
      accentGlow: "bg-amber-500/25",
      indicatorColor: "bg-amber-400",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Clean Auto-Slide Timer (every 6s, pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="relative overflow-hidden bg-primary-950 text-white select-none group/hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Mattu Bridge Hero Showcase"
    >
      {/* 
        Horizontal Slider Track: 
        Moves the ENTIRE SCREEN (Background, Typography, Cards & Lighting) in unison! 
      */}
      <div
        className="flex w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className="w-full min-w-full flex-shrink-0 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Full Slide Background Image with European View & Gradients */}
            <div className="absolute inset-0">
              <Image
                src={slide.bgImage}
                alt={slide.featuredAlt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover opacity-30 scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/70 to-primary-950" />
            </div>

            {/* Slide Ambient Glow Orbs */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className={`absolute -right-24 top-20 h-96 w-96 rounded-full blur-3xl ${slide.accentGlow}`}
              />
              <div className="absolute -left-24 bottom-10 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl" />
            </div>

            {/* Main Content Layout for this Banner */}
            <div className="relative z-10 w-full max-w-[98rem] mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 py-14 sm:py-16 lg:py-20 xl:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch min-h-[480px]">
                {/* Left Column: Text & Actions */}
                <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Pill Badge */}
                    <div
                      className={`mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md self-start ${slide.badgeColor}`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{isDe ? slide.badgeDe : slide.badgeEn}</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] xl:text-[3.55rem] font-bold leading-[1.14] tracking-tight text-white">
                      {isDe ? slide.headingDe : slide.headingEn}
                    </h1>

                    {/* Supporting Text */}
                    <p className="mt-5 text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 max-w-3xl font-normal">
                      {isDe ? slide.subtitleDe : slide.subtitleEn}
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <Link href={slide.primaryCtaLink} className={slide.primaryCtaStyle}>
                        <slide.primaryCtaIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span>{isDe ? slide.primaryCtaTextDe : slide.primaryCtaTextEn}</span>
                      </Link>

                      <Link
                        href={slide.secondaryCtaLink}
                        className="btn-secondary !border-white/30 !bg-transparent !text-white hover:!bg-white/10 !py-3 !px-6 text-sm sm:text-base font-semibold backdrop-blur-md inline-flex items-center gap-2"
                      >
                        <slide.secondaryCtaIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span>{isDe ? slide.secondaryCtaTextDe : slide.secondaryCtaTextEn}</span>
                      </Link>

                      <Link
                        href={slide.tertiaryCtaLink}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 sm:px-5 py-3 text-sm sm:text-base font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-all backdrop-blur-md"
                      >
                        <slide.tertiaryCtaIcon className="h-4 w-4" />
                        <span>{isDe ? slide.tertiaryCtaTextDe : slide.tertiaryCtaTextEn}</span>
                      </Link>
                    </div>
                  </div>

                  {/* 4 Trust Highlights Grid */}
                  <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md flex items-center gap-2.5">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-white">
                          {isDe ? "Sitz in Deutschland" : "Based in Germany"}
                        </p>
                        <p className="text-[10.5px] text-gray-300">
                          {isDe ? "Frankfurt am Main" : "Frankfurt am Main"}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md flex items-center gap-2.5">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-white">
                          {isDe ? "6 europäische Ziele" : "6 European Hubs"}
                        </p>
                        <p className="text-[10.5px] text-gray-300">
                          {isDe ? "DE, PL, MT, ES, PT, HU" : "DE, PL, MT, ES, PT, HU"}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md flex items-center gap-2.5">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-white">
                          {isDe ? "Verifizierte Chancen" : "Verified Pathways"}
                        </p>
                        <p className="text-[10.5px] text-gray-300">
                          {isDe ? "Studium & Arbeitsmarkt" : "Education & Careers"}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md flex items-center gap-2.5">
                      <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-white">
                          {isDe ? "100% DSGVO-konform" : "100% GDPR Compliant"}
                        </p>
                        <p className="text-[10.5px] text-gray-300">
                          {isDe ? "Datensparsamkeit" : "Data Minimization"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Featured Banner Photo Card */}
                <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-end mt-8 lg:mt-0 h-full">
                  <div className="relative w-full h-full min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] xl:min-h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-gray-900 group">
                    <Image
                      src={slide.featuredImage}
                      alt={slide.featuredAlt}
                      fill
                      priority={idx === 0}
                      sizes="(max-width: 1024px) 100vw, 620px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/20 to-transparent pointer-events-none" />

                    {/* Corner Badge */}
                    <div className="absolute top-4 right-4 rounded-full bg-primary-950/85 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md border border-white/15 shadow-lg">
                      {isDe ? slide.cornerBadgeDe : slide.cornerBadgeEn}
                    </div>

                    {/* Bottom Pathway Banner */}
                    <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-primary-950/85 p-4 backdrop-blur-md border border-white/15 shadow-xl flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                        <p className="text-xs font-semibold text-white">
                          {isDe ? slide.bottomBannerDe : slide.bottomBannerEn}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 
        Horizontal Arrow-Like Navigation Pointers (Left and Right Floating Buttons) 
      */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous Banner"
        className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-md border border-white/20 shadow-2xl hover:scale-110 active:scale-95 transition-all group/btn"
      >
        <ChevronLeft className="h-5 w-5 sm:h-7 sm:w-7 transition-transform group-hover/btn:-translate-x-1" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next Banner"
        className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-md border border-white/20 shadow-2xl hover:scale-110 active:scale-95 transition-all group/btn"
      >
        <ChevronRight className="h-5 w-5 sm:h-7 sm:w-7 transition-transform group-hover/btn:translate-x-1" />
      </button>

      {/* 
        Bottom Horizontal Position Indicator Pointers 
      */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-slate-950/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide ? `w-8 ${slide.indicatorColor}` : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to banner ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
