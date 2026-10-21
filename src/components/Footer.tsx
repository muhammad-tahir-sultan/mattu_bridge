import Link from "next/link";
import { Mail, Phone, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { siteConfig, complianceDisclaimer } from "@/data/content";
import { footerLinks } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-primary-900 bg-primary-950 text-white">
      {/* Upper Footer: Main columns */}
      <div className="section-container py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Logo isDark={true} />
            <p className="text-sm leading-relaxed text-gray-300 max-w-sm">
              Mattu Bridge brings together educational consultancy, employment
              placement and recruitment, and international educational and
              social initiatives through one professional platform.
            </p>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="h-5 w-5 text-primary-300 flex-shrink-0 mt-0.5" />
                <p>
                  Operating in Germany with a strict commitment to transparent
                  communication, GDPR compliance, and verifiable services.
                </p>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="font-display text-base font-semibold text-white tracking-wide mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.pillars.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization & About */}
          <div>
            <h4 className="font-display text-base font-semibold text-white tracking-wide mb-4">
              Organization
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance (German DDG / GDPR) */}
          <div>
            <h4 className="font-display text-base font-semibold text-white tracking-wide mb-4">
              Legal &amp; Compliance
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="text-xs text-gray-400 mb-1">Official Contact:</div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-1.5 text-sm text-primary-300 hover:text-white"
              >
                <Mail className="h-4 w-4" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer Banner */}
        <div className="mt-12 rounded-xl border border-amber-400/20 bg-amber-500/10 p-4 text-xs leading-relaxed text-amber-200">
          <p className="font-semibold text-amber-100 mb-1">
            Important Information:
          </p>
          <p>{complianceDisclaimer}</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-primary-950/80 py-6 text-xs text-gray-400">
        <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p>
            © 2026 Mattu Bridge. All rights reserved.
            Germany.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link href="/privacy-policy" className="hover:text-white">
              Datenschutzerklärung
            </Link>
            <span>·</span>
            <Link href="/impressum" className="hover:text-white">
              Impressum
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white">
              AGB
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
