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
      <div className="section-container py-6 sm:py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-2.5">
            <Logo isDark={true} />
            <p className="text-xs leading-relaxed text-gray-300 max-w-sm">
              {t.footer.description}
            </p>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-200 mb-2">
              {t.footer.coreServices}
            </h4>
            <ul className="space-y-1 text-xs">
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
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-200 mb-2">
              {t.footer.organization}
            </h4>
            <ul className="space-y-1 text-xs">
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
            <h4 className="text-xs font-semibold uppercase tracking-wider text-primary-200 mb-2">
              {t.footer.legalCompliance}
            </h4>
            <ul className="space-y-1 text-xs">
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

        {/* Unified Line: Email, WhatsApp, and Social Links all in the SAME line */}
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center gap-2">
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-300 hover:border-primary-400 hover:text-primary-200 hover:bg-primary-900/50 transition-all shadow-sm"
          >
            <Mail className="h-3.5 w-3.5 text-primary-400 flex-shrink-0" />
            <span>{siteConfig.email}</span>
          </a>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-300 hover:border-emerald-400/60 hover:text-emerald-300 hover:bg-emerald-950/40 transition-all shadow-sm"
          >
            <MessageCircle className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
            <span>WhatsApp: {siteConfig.whatsapp}</span>
          </a>
          <SocialLinks variant="footer" showLabels={true} className="contents" />
        </div>

        {/* Regulatory Compliance Disclaimer */}
        <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center gap-2 text-[11px] text-gray-400">
          <ShieldCheck className="h-3.5 w-3.5 text-primary-400 flex-shrink-0" />
          <p className="line-clamp-1 sm:line-clamp-none">
            <strong className="text-gray-300 font-semibold">{t.footer.importantInfo}</strong>{" "}
            {t.footer.disclaimer}
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-primary-950/90 py-2.5 text-[11px] text-gray-400">
        <div className="section-container flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p>{t.footer.copyright}</p>
          <div className="flex flex-wrap items-center gap-3 text-[11px]">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              {locale === "de" ? "Datenschutz" : "Privacy Policy"}
            </Link>
            <span>·</span>
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              {locale === "de" ? "AGB" : "Terms"}
            </Link>
            <span>·</span>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
