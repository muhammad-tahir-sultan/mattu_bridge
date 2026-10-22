"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  UserCheck,
  Building,
} from "lucide-react";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/content";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { t, locale } = useLanguage();

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const localizedNavLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.about, href: "/about" },
    {
      label: t.nav.education,
      href: "/education",
      children: [
        {
          label: t.nav.studyOpportunities,
          href: "/education",
          description: t.nav.studyOpportunitiesDesc,
        },
        {
          label: t.nav.submitStudyEnquiry,
          href: "/education#enquiry-form",
          description: t.nav.submitStudyEnquiryDesc,
        },
      ],
    },
    {
      label: t.nav.jobs,
      href: "/jobs",
      children: [
        {
          label: t.nav.recruitmentOverview,
          href: "/jobs",
          description: t.nav.recruitmentOverviewDesc,
        },
        {
          label: t.common.registerJobSeeker,
          href: "/jobs/job-seeker-registration",
          description: t.nav.registerJobSeekerDesc,
        },
        {
          label: t.common.postJob,
          href: "/jobs/employer-inquiry",
          description: t.nav.postJobDesc,
        },
        {
          label: t.nav.jobListings,
          href: "/jobs/listings",
          description: t.nav.jobListingsDesc,
        },
      ],
    },
    { label: t.nav.events, href: "/events" },
    { label: t.nav.contact, href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md transition-all">
      {/* Top Banner Notice for Germany compliance & direct reach */}
      <div className="border-b border-primary-950/10 bg-primary-950 px-4 py-1.5 text-xs text-primary-100">
        <div className="w-full max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <span className="whitespace-nowrap">{t.common.topBannerText}</span>
          </div>

          <div className="flex items-center gap-4 text-gray-300 whitespace-nowrap">
            <LanguageSwitcher variant="banner" />
            <span className="text-gray-700 hidden sm:inline">|</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hidden sm:inline hover:text-white transition-colors whitespace-nowrap"
            >
              {siteConfig.email}
            </a>
            <span className="text-gray-700 hidden sm:inline">|</span>
            <Link
              href="/admin"
              className="text-primary-300 hover:text-white transition-colors whitespace-nowrap"
            >
              {t.common.adminPortal}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="w-full max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between gap-4">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-shrink-0">
          {localizedNavLinks
            .filter((item) => item.href !== "/contact")
            .map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              if (item.children) {
                return (
                  <div
                    key={item.href}
                    className="relative group flex-shrink-0"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.label)}
                      className={`whitespace-nowrap inline-flex items-center gap-1.5 rounded-lg px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold transition-colors flex-shrink-0 ${
                        isActive
                          ? "text-primary-700 bg-primary-50"
                          : "text-gray-700 hover:text-primary-700 hover:bg-gray-50"
                      }`}
                    >
                      <span className="whitespace-nowrap">{item.label}</span>
                      <ChevronDown className="h-3.5 w-3.5 flex-shrink-0 transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 top-full pt-2 w-72 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                      <div className="rounded-xl border border-gray-100 bg-white p-2 shadow-xl ring-1 ring-black/5">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.href + sub.label}
                            href={sub.href}
                            className="block rounded-lg p-2.5 hover:bg-primary-50 transition-colors"
                          >
                            <div className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                              {sub.label}
                            </div>
                            {sub.description && (
                              <div className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                                {sub.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`whitespace-nowrap inline-flex items-center rounded-lg px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-semibold transition-colors flex-shrink-0 ${
                    isActive
                      ? "text-primary-700 bg-primary-50"
                      : "text-gray-700 hover:text-primary-700 hover:bg-gray-50"
                  }`}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                </Link>
              );
            })}
        </nav>

        {/* Action CTAs Desktop */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
          <LanguageSwitcher variant="pill" />

          <Link
            href="/jobs/job-seeker-registration"
            className="whitespace-nowrap text-xs xl:text-sm font-semibold text-gray-700 hover:text-primary-700 px-2.5 py-2 transition-colors flex-shrink-0"
          >
            <span className="whitespace-nowrap">{t.common.registerJobSeeker}</span>
          </Link>
          <Link
            href="/contact"
            className="btn-primary !py-2.5 !px-4 text-xs xl:text-sm whitespace-nowrap flex-shrink-0 inline-flex items-center gap-1.5 shadow-sm"
          >
            <span className="whitespace-nowrap">{t.common.contactUs}</span>
            <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" />
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageSwitcher variant="pill" />

          <Link
            href="/contact"
            className="btn-primary !py-1.5 !px-2.5 text-xs whitespace-nowrap"
          >
            {locale === "de" ? "Kontakt" : "Contact"}
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-gray-200 bg-white px-4 pt-2 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {t.nav.language}:
            </span>
            <LanguageSwitcher variant="pill" />
          </div>

          <div className="space-y-1">
            {localizedNavLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.href} className="py-1">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-base font-semibold ${
                      isActive
                        ? "bg-primary-50 text-primary-700"
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary-100 pl-3">
                      {item.children.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block rounded-md py-1.5 text-sm text-gray-600 hover:text-primary-700"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col gap-2.5">
            <Link
              href="/jobs/job-seeker-registration"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-secondary w-full justify-center !py-2.5 text-sm"
            >
              <UserCheck className="h-4 w-4" />
              {t.common.registerJobSeeker}
            </Link>
            <Link
              href="/jobs/employer-inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-secondary w-full justify-center !py-2.5 text-sm"
            >
              <Building className="h-4 w-4" />
              {t.common.postJob}
            </Link>
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-xs text-gray-500 py-1 hover:text-primary-700"
            >
              {t.common.adminPortal}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
