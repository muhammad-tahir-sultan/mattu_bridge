import Link from "next/link";
import Image from "next/image";
import {
  GraduationCap,
  Briefcase,
  Globe,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Building,
  UserCheck,
  Calendar,
  Mail,
  MessageCircle,
  ChevronRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import DirectorMessage from "@/components/DirectorMessage";
import { images } from "@/data/images";
import { siteConfig, businessPillars, complianceDisclaimer } from "@/data/content";
import { initialJobListings } from "@/data/jobsData";
import { internationalEvents } from "@/data/eventsData";

export default function HomePage() {
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

        <div className="section-container relative z-10 py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Pill Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-primary-200 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Germany-based · Serving Europe &amp; Beyond</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl text-white">
              Connecting Education, Careers &amp; International Opportunities
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 text-lg leading-relaxed text-gray-300 md:text-xl">
              &ldquo;{siteConfig.description}&rdquo;
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link href="/education" className="btn-primary !py-3.5 !px-6 text-sm">
                <GraduationCap className="h-5 w-5" />
                <span>Explore Education Opportunities</span>
              </Link>
              <Link
                href="/jobs"
                className="btn-secondary !border-white/30 !bg-transparent !text-white hover:!bg-white/10 !py-3.5 !px-6 text-sm"
              >
                <Briefcase className="h-5 w-5" />
                <span>Jobs &amp; Recruitment</span>
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-lg border border-amber-400/40 bg-amber-500/10 px-5 py-3 text-sm font-semibold text-amber-200 hover:bg-amber-500/20 transition-all"
              >
                <Globe className="h-4 w-4" />
                <span>International Events</span>
              </Link>
            </div>

            {/* Transparency Trust Highlights */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>GDPR Data Minimization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>German Legal Notice Compliance</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>Zero Admission / Job Guarantees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Three Principal Business Categories */}
      <section className="section-padding bg-gray-50/70 border-b border-gray-100">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="heading-eyebrow mb-3">Our Three Core Pillars</p>
            <h2 className="heading-2">Professional European Gateway</h2>
            <p className="mt-4 text-base md:text-lg text-gray-600 leading-relaxed">
              Mattu Bridge provides a single, structured point of contact for students, candidates, employers, and organizations seeking verified pathways.
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
                  Education Consultancy
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 mb-6">
                  &ldquo;Explore educational opportunities in Germany and across Europe and submit your study enquiry.&rdquo; Guidance for undergraduate, postgraduate, vocational Ausbildung, and preparatory studies.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="/education"
                  className="btn-primary w-full justify-center !py-2.5 text-xs font-bold"
                >
                  <span>Explore Education</span>
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
                  Jobs &amp; Recruitment
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 mb-6">
                  &ldquo;Register your interest in employment opportunities or submit recruitment requirements as an employer.&rdquo; Connecting European employers with motivated talent under transparent procedures.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-2">
                <Link
                  href="/jobs/job-seeker-registration"
                  className="btn-secondary flex-1 justify-center !py-2.5 text-xs font-semibold"
                >
                  <UserCheck className="h-3.5 w-3.5" />
                  <span>Find a Job</span>
                </Link>
                <Link
                  href="/jobs/employer-inquiry"
                  className="btn-primary flex-1 justify-center !py-2.5 text-xs font-semibold"
                >
                  <Building className="h-3.5 w-3.5" />
                  <span>Post a Job</span>
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
                  International Events
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 mb-6">
                  &ldquo;Discover initiatives and opportunities related to education, human rights, youth development, seminars, and international cooperation.&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="/events"
                  className="btn-accent w-full justify-center !py-2.5 text-xs font-bold"
                >
                  <span>Explore International Events</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Director's Welcome Message Section */}
      <DirectorMessage />

      {/* 4. Why Mattu Bridge Section */}
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
                      Strict European Compliance
                    </p>
                    <p className="text-[11px] text-gray-500">
                      Ethical communication &amp; GDPR privacy standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="heading-eyebrow mb-3">Responsible Platform</p>
              <h2 className="heading-2 mb-6">
                Built on Integrity, Fairness &amp; Constructive Cooperation
              </h2>
              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p>
                  At Mattu Bridge, we believe that education and fair employment
                  are transformative. In accordance with strict guidelines, we do
                  not fabricate partnerships, publish unverified partner logos,
                  or promise unrealistic guarantees.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      Data Minimization
                    </h4>
                    <p className="text-xs text-gray-600">
                      Students and job seekers can submit expressions of interest
                      without having to upload private passport or certificate files.
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      Administrator Verification
                    </h4>
                    <p className="text-xs text-gray-600">
                      Employer job vacancies are reviewed manually before publication
                      to protect job seekers from unverified advertisements.
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      No Accommodation Scams
                    </h4>
                    <p className="text-xs text-gray-600">
                      We strictly do not handle accommodation bookings, ensuring
                      our focus remains on legitimate education and recruitment.
                    </p>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">
                      Transparent Guidance
                    </h4>
                    <p className="text-xs text-gray-600">
                      Honest appraisal of university admission requirements, language
                      criteria, and vocational qualifications.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Link href="/about" className="btn-primary !py-2.5 !px-5 text-sm">
                  <span>Learn More About Us</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Job Vacancies Preview */}
      <section className="section-padding bg-gray-50/70 border-b border-gray-100">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <p className="heading-eyebrow mb-2">Employment Opportunities</p>
              <h2 className="heading-2">Current Approved Vacancies</h2>
              <p className="mt-2 text-sm text-gray-600">
                Verified vacancies submitted by registered employers and approved by Mattu Bridge.
              </p>
            </div>
            <Link
              href="/jobs/listings"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
            >
              <span>Explore All Job Listings</span>
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
                      Compensation: {job.salaryRange}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    Posted: {job.datePosted}
                  </span>
                  <Link
                    href={`/jobs/job-seeker-registration?jobRef=${job.id}`}
                    className="btn-primary !py-2 !px-4 text-xs font-bold"
                  >
                    <span>Apply Now</span>
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
              <p className="heading-eyebrow mb-2">International Dialogue</p>
              <h2 className="heading-2">Seminars &amp; Cooperation</h2>
              <p className="mt-2 text-sm text-gray-600">
                Initiatives related to education, human rights awareness, and youth development.
              </p>
            </div>
            <Link
              href="/events"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
            >
              <span>View All Events</span>
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
                    Format: {evt.format} · Location: {evt.location}
                  </p>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {evt.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Registration by: {evt.registrationDeadline}
                  </span>
                  <Link
                    href={`/events?eventId=${evt.id}#register`}
                    className="btn-secondary !py-2 !px-4 text-xs font-bold"
                  >
                    <span>Register Interest</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Homepage Direct Contact Section */}
      <section className="bg-primary-950 py-20 text-white">
        <div className="section-container text-center max-w-3xl">
          <p className="heading-eyebrow !text-primary-300 mb-2">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
            Start Your Journey With Mattu Bridge
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-300 leading-relaxed">
            Whether you are a prospective student, a job seeker, an employer with recruitment needs, or an organization interested in international events, we welcome your contact.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2.5 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-primary-950 shadow-lg hover:bg-gray-100 transition-all"
            >
              <Mail className="h-4 w-4 text-primary-700" />
              <span>Email: {siteConfig.email}</span>
            </a>

            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all"
            >
              <MessageCircle className="h-4 w-4 text-emerald-400" />
              <span>Verified WhatsApp Contact</span>
            </a>

            <Link href="/contact" className="btn-accent !py-3.5 !px-6 text-sm font-bold">
              <span>Full Contact Form</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-8 text-xs text-gray-400">
            Official communications handled from Germany · Please allow 1-2 business days for structured responses.
          </p>
        </div>
      </section>
    </div>
  );
}
