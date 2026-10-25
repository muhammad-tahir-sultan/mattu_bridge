"use client";

import Image from "next/image";
import {
  GraduationCap,
  BookOpen,
  Award,
  Compass,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import StudentEnquiryForm from "@/components/forms/StudentEnquiryForm";
import { images } from "@/data/images";
import { useLanguage } from "@/context/LanguageContext";

export default function EducationContent() {
  const { t, locale } = useLanguage();
  const isDe = locale === "de";

  const pathwayIcons = [
    GraduationCap,
    Compass,
    BookOpen,
    Award,
    CheckCircle2,
    Clock,
  ];

  const guidanceSteps = isDe
    ? [
        {
          step: "01",
          title: "Erstberatung & Profilanalyse",
          text: "Wir prüfen Ihren Bildungshintergrund, Ihre Ziele und Länderpräferenzen – ohne verpflichtenden Dokumentenupload.",
        },
        {
          step: "02",
          title: "Wegwahl & Studienoptionen",
          text: "Wir ermitteln realistische Bildungswege (Bachelor, Master, duale Ausbildung oder Studienkolleg), die zu Ihrem Profil passen.",
        },
        {
          step: "03",
          title: "Unterlagen & Nachweise",
          text: "Orientierung bei der Zusammenstellung von Zeugnissen, beglaubigten Übersetzungen und Sprachzertifikaten.",
        },
        {
          step: "04",
          title: "Bewerbungsbegleitung",
          text: "Begleitung durch die offiziellen Bewerbungsverfahren (z. B. Uni-Assist oder direkte Hochschulportale).",
        },
      ]
    : [
        {
          step: "01",
          title: "Initial Profile Review",
          text: "We review your academic background, educational goals, and country preferences without forcing document uploads.",
        },
        {
          step: "02",
          title: "Pathway Exploration",
          text: "We identify realistic study routes (Bachelor's, Master's, Ausbildung, or Studienkolleg) that match your credentials.",
        },
        {
          step: "03",
          title: "Documentation Organization",
          text: "We advise on organizing required transcripts, certified translations, and official language certifications.",
        },
        {
          step: "04",
          title: "Application Submission",
          text: "We guide you through the institutional application platforms (e.g. Uni-Assist, direct university portals).",
        },
      ];

  return (
    <div>
      <PageHeader
        eyebrow={t.education.eyebrow}
        title={t.education.title}
        description={t.education.description}
        imageUrl={images.campus}
        heroImage={images.studentsGroup}
        heroImageAlt="International students studying in European university"
        heroBadge={isDe ? "🎓 Hochschulen & Ausbildung" : "🎓 Degrees & Ausbildung"}
        secondaryImage={images.graduationCaps}
        secondaryTitle={isDe ? "Anerkannte Abschlüsse" : "Accredited Degrees"}
        secondarySubtitle={isDe ? "Deutschland & Europa" : "Germany & Across Europe"}
        actionButtons={
          <>
            <a
              href="#enquiry-form"
              className="btn-primary !py-3 !px-5 text-sm font-bold shadow-lg shadow-primary-900/40"
            >
              <GraduationCap className="h-4 w-4" />
              <span>{isDe ? "Studienanfrage einreichen" : "Submit Study Enquiry"}</span>
            </a>
            <a
              href="#pathways"
              className="btn-secondary !border-white/30 !bg-transparent !text-white hover:!bg-white/10 !py-3 !px-5 text-sm"
            >
              <span>{isDe ? "Bildungswege ansehen" : "Explore Pathways"}</span>
            </a>
          </>
        }
        trustHighlights={[
          { text: isDe ? "Anerkannte Programme" : "Accredited Programs" },
          { text: isDe ? "Uni-Assist Beratung" : "Uni-Assist Guidance" },
          { text: isDe ? "DSGVO-konform" : "GDPR-compliant" },
        ]}
      />

      {/* Intro Overview & Integrity Notice */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center">
            <div className="relative">
              <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={images.graduation}
                  alt="Graduation celebration in Europe"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent" />
              </div>
            </div>

            <div>
              <p className="heading-eyebrow mb-3">
                {isDe ? "Zugang zu europäischer Bildung" : "Accessible European Education"}
              </p>
              <h2 className="heading-2 mb-6">
                {isDe ? "Ihr Bildungsweg beginnt hier" : "Your Academic Pathway Starts Here"}
              </h2>
              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p>
                  {isDe
                    ? "Europäische Hochschulen bieten erstklassige Qualifikationen, moderne Forschungseinrichtungen und hervorragende berufliche Perspektiven. Die Vielzahl an Zulassungsvoraussetzungen, Sprachnachweisen und Fristen erfordert jedoch fundierte Orientierung."
                    : "European institutions provide world-class academic qualifications, cutting-edge research facilities, and rewarding career prospects. However, navigating differing entry requirements, language criteria, and application portals can be challenging."}
                </p>
                <p>
                  {isDe
                    ? "Mattu Bridge bietet Ihnen strukturierte Unterstützung, damit Sie Ihre Optionen klar verstehen, fundierte Entscheidungen treffen und vollständige Bewerbungen einreichen können."
                    : "Mattu Bridge provides structured guidance to help you understand your options, make informed decisions, and submit thorough applications."}
                </p>
              </div>

              <div className="mt-8">
                <a href="#enquiry-form" className="btn-primary">
                  <span>{isDe ? "Studienanfrage einreichen" : "Submit Study Enquiry"}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways Grid */}
      <section className="section-padding bg-gray-50 border-y border-gray-100">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="heading-eyebrow mb-2">{t.education.overviewEyebrow}</p>
            <h2 className="heading-2">{t.education.overviewTitle}</h2>
            <p className="mt-3 text-sm md:text-base text-gray-600">
              {t.education.overviewSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.education.pathways.map((item, index) => {
              const Icon = pathwayIcons[index % pathwayIcons.length];
              return (
                <div key={item.title} className="card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700 mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Guidance Process */}
      <section className="section-padding bg-primary-950 text-white">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="heading-eyebrow !text-primary-300 mb-3">
              {isDe ? "Strukturierter Ablauf" : "Structured Guidance"}
            </p>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              {isDe ? "Unser 4-Schritte-Beratungsprozess" : "Our 4-Step Educational Process"}
            </h2>
            <p className="mt-4 text-base text-gray-400">
              {isDe
                ? "Ein transparenter Fahrplan von der ersten Orientierung bis zur vollständigen Bewerbung."
                : "A transparent, step-by-step roadmap from initial inquiry to application."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guidanceSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <span className="font-display text-4xl font-bold text-primary-400/50">
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Enquiry Form Section */}
      <section id="enquiry-form" className="section-padding bg-gray-50 scroll-mt-20">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="heading-eyebrow mb-2">{t.education.formEyebrow}</p>
            <h2 className="heading-2">{t.education.formTitle}</h2>
            <p className="mt-3 text-base text-gray-600">
              {t.education.formSubtitle}
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <StudentEnquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
