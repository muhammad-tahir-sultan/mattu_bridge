import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Globe,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import DirectorMessage from "@/components/DirectorMessage";
import { images } from "@/data/images";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Mattu Bridge, our purpose, European mission, and our three core pillars: Educational Consultancy, Jobs & Recruitment, and International Events.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Our Story &amp; Purpose"
        title="About Mattu Bridge"
        description="A professional platform established in Germany to connect educational pathways, career opportunities, and constructive international dialogue."
        imageUrl={images.campus}
      />

      {/* Purpose & Approach */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center">
            <div>
              <p className="heading-eyebrow mb-3">Our Mission &amp; Foundation</p>
              <h2 className="heading-2 mb-6">
                Creating Meaningful Connections Between People &amp; Opportunities
              </h2>
              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p>
                  Mattu Bridge was founded with a clear objective: to provide an
                  accessible, transparent, and legally compliant European platform
                  for students, job seekers, employers, and social initiatives.
                </p>
                <p>
                  Operating from Germany, our philosophy is rooted in equal
                  opportunity, human dignity, and verified information. Rather
                  than making unrealistic promises or advertising unverified
                  agreements, we focus on genuine guidance, data minimization,
                  and professional communication.
                </p>
                <p>
                  Whether guiding an international student through the complexities
                  of higher education applications or helping a company identify
                  qualified personnel, we adhere strictly to high standards of
                  service and applicable German regulations.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/education" className="btn-primary !py-2.5 !px-5 text-sm">
                  <span>Educational Services</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/jobs" className="btn-secondary !py-2.5 !px-5 text-sm">
                  <span>Recruitment Services</span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={images.businessMeeting}
                  alt="Professional consultation at Mattu Bridge"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl bg-white p-5 shadow-xl border border-gray-100 max-w-xs">
                <p className="text-xs font-bold text-gray-900 mb-1">
                  Responsible Consulting
                </p>
                <p className="text-xs text-gray-600">
                  Strictly verified data, clear communication, and zero fabricated claims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars Detailed */}
      <section className="section-padding bg-gray-50 border-y border-gray-100">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <p className="heading-eyebrow mb-3">Our Three Fields of Activity</p>
            <h2 className="heading-2">What We Do</h2>
            <p className="mt-4 text-base text-gray-600">
              Each category operates with dedicated focus while benefiting from a unified international network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700 mb-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                1. Education Consultancy
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Guiding students toward recognized academic opportunities in Germany
                and Europe. We assist with course research, application document
                organisation, and intake timelines for undergraduate, postgraduate,
                vocational Ausbildung, and preparatory foundation courses.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700 mb-4">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                2. Employment Placement &amp; Recruitment
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Providing candidate registration and employer vacancy submission
                under professional German labor standards. Connecting motivated
                job seekers with verified enterprise needs in logistics, transport,
                healthcare, hospitality, and technical fields.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700 mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                3. International Events &amp; Cooperation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Initiating and supporting seminars, conferences, and collaborative
                forums focused on education, human rights awareness, youth empowerment,
                and intercultural exchange across European and international boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Director's Welcome Message */}
      <DirectorMessage />

      {/* Principles & Standards */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="heading-eyebrow mb-2">Our Operating Standards</p>
            <h2 className="heading-2">What Sets Us Apart</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6">
              <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                Data Minimization &amp; Privacy First
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We collect only the personal information required to evaluate your
                inquiry. Document uploads such as passports and academic transcripts
                are strictly optional at initial stages.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6">
              <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                No Outcome Guarantees
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We believe in ethical consulting. Admission decisions, visa
                grants, and employment offers rest solely with sovereign authorities
                and independent employers. We do not make deceptive promises.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6">
              <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                Verified Vacancies Only
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We do not automatically publish unverified job advertisements.
                Every employer inquiry is reviewed to ensure legitimate employment
                terms.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6">
              <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                Zero Accommodation Interference
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                To protect international applicants from housing fraud and third-party
                liabilities, Mattu Bridge does not offer or broker accommodation
                services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
