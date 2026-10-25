"use client";

import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Briefcase,
  Globe,
  ArrowRight,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import DirectorMessage from "@/components/DirectorMessage";
import { images } from "@/data/images";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutContent() {
  const { t, locale } = useLanguage();
  const isDe = locale === "de";

  return (
    <div>
      <PageHeader
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        description={t.about.description}
        imageUrl={images.frankfurtRiver}
        heroImage={images.corporateWorkshop}
        heroImageAlt="Mattu Bridge strategic vision and consultation"
        heroBadge={isDe ? "🤝 Unsere Vision" : "🤝 Our Vision"}
        secondaryImage={images.viennaBuilding}
        secondaryTitle={isDe ? "Brücke nach Europa" : "Bridge to Europe"}
        secondarySubtitle={isDe ? "Bildung, Beruf & Initiativen" : "Education, Careers & Society"}
        actionButtons={
          <>
            <a
              href="#director-message"
              className="btn-primary !py-3 !px-5 text-sm font-bold shadow-lg shadow-primary-900/40"
            >
              <span>{isDe ? "Grußwort der Geschäftsleitung" : "Director's Message"}</span>
            </a>
            <Link
              href="/contact"
              className="btn-secondary !border-white/30 !bg-transparent !text-white hover:!bg-white/10 !py-3 !px-5 text-sm"
            >
              <span>{isDe ? "Kontakt aufnehmen" : "Contact Us"}</span>
            </Link>
          </>
        }
        trustHighlights={[
          { text: isDe ? "Sitz in Deutschland" : "Based in Germany" },
          { text: isDe ? "Transparente Führung" : "Transparent Governance" },
          { text: isDe ? "Strikte DSGVO-Konformität" : "Full GDPR Compliance" },
        ]}
      />

      {/* Purpose & Approach */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center">
            <div>
              <p className="heading-eyebrow mb-3">{t.about.missionEyebrow}</p>
              <h2 className="heading-2 mb-6">
                {t.about.missionTitle}
              </h2>
              <div className="space-y-4 text-base text-gray-700 leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/education" className="btn-primary !py-2.5 !px-5 text-sm">
                  <span>{isDe ? "Bildungsberatung ansehen" : "Educational Services"}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/jobs" className="btn-secondary !py-2.5 !px-5 text-sm">
                  <span>{isDe ? "Personalvermittlung ansehen" : "Recruitment Services"}</span>
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
                  {isDe ? "Verantwortungsvolle Beratung" : "Responsible Consulting"}
                </p>
                <p className="text-xs text-gray-600">
                  {isDe
                    ? "Geprüfte Informationen, transparente Kommunikation und verlässliche Standards."
                    : "Strictly verified data, clear communication, and zero fabricated claims."}
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
            <p className="heading-eyebrow mb-3">
              {isDe ? "Unsere drei Tätigkeitsfelder" : "Our Three Fields of Activity"}
            </p>
            <h2 className="heading-2">
              {isDe ? "Was wir tun" : "What We Do"}
            </h2>
            <p className="mt-4 text-base text-gray-600">
              {isDe
                ? "Jeder Bereich agiert fokussiert und profitiert gleichzeitig von einem starken europäischen Netzwerk."
                : "Each category operates with dedicated focus while benefiting from a unified international network."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700 mb-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                1. {t.home.pillarEducationTitle}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {isDe
                  ? "Begleitung von Studieninteressierten zu anerkannten akademischen Chancen in Deutschland und Europa. Wir unterstützen bei Studienwahl, Bewerbungsunterlagen und Fristen für Bachelor, Master, Ausbildung und Studienkolleg."
                  : "Guiding students toward recognized academic opportunities in Germany and Europe. We assist with course research, application document organisation, and intake timelines for undergraduate, postgraduate, vocational Ausbildung, and preparatory foundation courses."}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700 mb-4">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                2. {t.home.pillarJobsTitle}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {isDe
                  ? "Strukturierte Bewerberregistrierung und Vakanzenprüfung unter Einhaltung deutscher Arbeits- und Sozialstandards. Verbindung qualifizierter Fachkräfte mit Unternehmen in Logistik, Pflege, Technik und Gastgewerbe."
                  : "Providing candidate registration and employer vacancy submission under professional German labor standards. Connecting motivated job seekers with verified enterprise needs in logistics, transport, healthcare, hospitality, and technical fields."}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="card">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700 mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                3. {t.home.pillarEventsTitle}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {isDe
                  ? "Organisation und Förderung von Seminaren, Fachkonferenzen und Dialogforen mit Fokus auf Bildungszugang, Menschenrechte, Jugendförderung und interkulturellen Austausch über europäische Grenzen hinweg."
                  : "Initiating and supporting seminars, conferences, and collaborative forums focused on education, human rights awareness, youth empowerment, and intercultural exchange across European and international boundaries."}
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
            <p className="heading-eyebrow mb-2">
              {isDe ? "Unsere Arbeitsstandards" : "Our Operating Standards"}
            </p>
            <h2 className="heading-2">
              {isDe ? "Was uns auszeichnet" : "What Sets Us Apart"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6">
              <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                {isDe ? "Datensparsamkeit & Datenschutz" : "Data Minimization & Privacy First"}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {isDe
                  ? "Wir erfassen nur diejenigen personenbezogenen Angaben, die zur Prüfung Ihrer Anfrage erforderlich sind. Das Hochladen sensibler Dokumente wie Reisepässen ist in der Erstphase rein optional."
                  : "We collect only the personal information required to evaluate your inquiry. Document uploads such as passports and academic transcripts are strictly optional at initial stages."}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6">
              <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                {isDe ? "Ethische & transparente Beratung" : "Ethical & Transparent Consulting"}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {isDe
                  ? "Wir stehen für seriöse, werteorientierte Zusammenarbeit. Wir begleiten Studierende und Fachkräfte mit fundierter Fachberatung, realistischen Perspektiven und verlässlicher Unterstützung."
                  : "We stand for authentic, value-driven collaboration. We guide students and professionals with sound advisory, realistic pathways, and dependable institutional support."}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6">
              <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                {isDe ? "Nur geprüfte Vakanzen" : "Verified Vacancies Only"}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {isDe
                  ? "Wir veröffentlichen keine ungeprüften Stellenanzeigen. Jede Arbeitgeberanfrage wird individuell gesichtet, um faire und gesetzeskonforme Arbeitsbedingungen zu gewährleisten."
                  : "We do not automatically publish unverified job advertisements. Every employer inquiry is reviewed to ensure legitimate employment terms."}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6">
              <h3 className="font-display text-lg font-bold text-gray-900 mb-2">
                {isDe ? "Fokus auf Kernkompetenzen" : "Focused Core Expertise"}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {isDe
                  ? "Wir konzentrieren uns gezielt auf unsere Stärken: hochwertige Bildungsberatung, strukturierte Arbeitsvermittlung und internationale Kooperationen."
                  : "We focus dedicatedly on our core strengths: high-quality educational guidance, structured employment matching, and international cooperation."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
