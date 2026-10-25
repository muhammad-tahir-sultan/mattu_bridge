"use client";

import Link from "next/link";
import { Mail, MessageCircle, ShieldCheck } from "lucide-react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { siteConfig } from "@/data/content";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, locale } = useLanguage();

  return (
    <footer className="border-t border-primary-900 bg-primary-950 text-white">
      {/* Upper Footer: Main columns */}
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo isDark={true} />
            <p className="text-sm leading-relaxed text-gray-300 max-w-sm">
              {t.footer.description}
            </p>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="font-display text-base font-semibold text-white tracking-wide mb-4">
              {t.footer.coreServices}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/education"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {t.footer.educationLink}
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {t.footer.jobsLink}
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs/listings"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {t.nav.jobListings}
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {t.footer.eventsLink}
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs/job-seeker-registration"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {t.footer.jobSeekerLink}
                </Link>
              </li>
              <li>
                <Link
                  href="/jobs/employer-inquiry"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {t.footer.employerLink}
                </Link>
              </li>
            </ul>
          </div>

          {/* Organization & About */}
          <div>
            <h4 className="font-display text-base font-semibold text-white tracking-wide mb-4">
              {t.footer.organization}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {t.footer.aboutLink}
                </Link>
              </li>
              <li>
                <Link
                  href="/about#director-message"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {t.footer.directorLink}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {t.footer.contactLink}
                </Link>
              </li>
              <li>
                <Link
                  href="/admin"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {t.common.adminPortal}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance (German DDG / GDPR) */}
          <div>
            <h4 className="font-display text-base font-semibold text-white tracking-wide mb-4">
              {t.footer.legalCompliance}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {t.footer.impressum}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-300 hover:text-white hover:underline transition-colors"
                >
                  {t.footer.cookiePolicy}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Official Contact & Connect / Follow Us in One Unified Line */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Official Contact */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-200">
              {t.footer.officialContact}:
            </span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-2 text-xs text-primary-200 hover:text-white transition-all shadow-sm"
            >
              <Mail className="h-3.5 w-3.5 text-primary-400 flex-shrink-0" />
              <span>{siteConfig.email}</span>
            </a>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-2 text-xs text-emerald-300 hover:text-white transition-all shadow-sm"
            >
              <MessageCircle className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
              <span>WhatsApp: {siteConfig.whatsapp}</span>
            </a>
          </div>

          {/* Connect & Follow Us */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary-200">
              {t.footer.followUs}:
            </span>
            <SocialLinks variant="footer" showLabels={true} />
          </div>
        </div>

        {/* Regulatory Compliance Disclaimer */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-2.5 text-xs text-gray-400 leading-relaxed">
          <ShieldCheck className="h-4 w-4 text-primary-400 flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-gray-300 font-semibold">{t.footer.importantInfo}:</strong>{" "}
            {t.footer.disclaimer}
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-primary-950/80 py-6 text-xs text-gray-400">
        <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>{t.footer.copyright}</p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link href="/privacy-policy" className="hover:text-white">
              {locale === "de" ? "Datenschutz" : "Privacy Policy"}
            </Link>
            <span>·</span>
            <Link href="/impressum" className="hover:text-white">
              Impressum
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white">
              {locale === "de" ? "AGB" : "Terms"}
            </Link>
            <span>·</span>
            <Link href="/cookie-policy" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
