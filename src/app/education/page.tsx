import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Award,
  Compass,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import StudentEnquiryForm from "@/components/forms/StudentEnquiryForm";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Education Consultancy — Study in Germany & Across Europe",
  description:
    "Explore educational opportunities in Germany and Europe. Guidance for Undergraduate, Master's, Vocational Training (Ausbildung), and Foundation pathways.",
};

const pathways = [
  {
    title: "Study in Germany",
    description:
      "Germany is renowned worldwide for its tuition-free or low-cost public universities, engineering excellence, and dual vocational training. We help you explore suitable academic institutions and intake requirements.",
    icon: GraduationCap,
  },
  {
    title: "Study in Other European Countries",
    description:
      "Explore diverse English-taught undergraduate and graduate degrees across Austria, the Netherlands, France, and other European destinations.",
    icon: Compass,
  },
  {
    title: "Undergraduate Study (Bachelor's)",
    description:
      "Guidance on secondary school qualification recognition (Abitur equivalence), university entrance requirements, and preparatory pathways.",
    icon: BookOpen,
  },
  {
    title: "Postgraduate Study (Master's & PhD)",
    description:
      "Support for graduates seeking international specialization, research opportunities, and career-oriented Master of Science / Arts degrees.",
    icon: Award,
  },
  {
    title: "Dual Vocational Training (Ausbildung)",
    description:
      "Germany's unique paid apprenticeship framework combining classroom theory with hands-on company training in logistics, healthcare, IT, and hospitality.",
    icon: CheckCircle2,
  },
  {
    title: "Preparatory Studies (Studienkolleg)",
    description:
      "Guidance for international applicants who require a one-year preparatory foundation course before qualifying for direct German university matriculation.",
    icon: Clock,
  },
];

const guidanceSteps = [
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

export default function EducationPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Educational Consultancy"
        title="Study Opportunities in Germany &amp; Across Europe"
        description="Comprehensive, ethical guidance for prospective international students seeking higher education, vocational training (Ausbildung), and foundation programmes."
        imageUrl={images.campusStairs}
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
              <p className="heading-eyebrow mb-3">Accessible European Education</p>
              <h2 className="heading-2 mb-6">Your Academic Pathway Starts Here</h2>
              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p>
                  European institutions provide world-class academic qualifications,
                  cutting-edge research facilities, and rewarding career prospects.
                  However, navigating differing entry requirements, language criteria,
                  and application portals can be challenging.
                </p>
                <p>
                  Mattu Bridge provides structured guidance to help you understand
                  your options, make informed decisions, and submit thorough
                  applications.
                </p>

                {/* Important Disclaimer Alert */}
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
                  <ShieldAlert className="h-5 w-5 text-amber-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-0.5">Ethical Guidance Notice:</p>
                    <p>
                      Mattu Bridge presents educational opportunities honestly. We do
                      not guarantee university admission, scholarship grants, or visa
                      issuance. Admission decisions rest exclusively with the respective
                      colleges and universities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a href="#enquiry-form" className="btn-primary">
                  <span>Submit Study Enquiry</span>
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
            <p className="heading-eyebrow mb-2">Programmes &amp; Routes</p>
            <h2 className="heading-2">Educational Pathways We Guide</h2>
            <p className="mt-3 text-sm md:text-base text-gray-600">
              Explore proposed study routes in Germany and across European partner countries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pathways.map((item) => {
              const Icon = item.icon;
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
            <p className="heading-eyebrow !text-primary-300 mb-3">Structured Guidance</p>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Our 4-Step Educational Process
            </h2>
            <p className="mt-4 text-base text-gray-400">
              A transparent, step-by-step roadmap from initial inquiry to application.
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
            <p className="heading-eyebrow mb-2">Student Application Portal</p>
            <h2 className="heading-2">Submit Your Study Enquiry</h2>
            <p className="mt-3 text-base text-gray-600">
              Submit your academic preferences and contact information. Document
              uploads are completely optional.
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
