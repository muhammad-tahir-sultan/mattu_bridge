"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, Check, Settings2, X, SlidersHorizontal, Lock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const { t, locale } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("mattu_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      "mattu_cookie_consent",
      JSON.stringify({ essential: true, analytics: true, date: new Date().toISOString() })
    );
    setShowBanner(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem(
      "mattu_cookie_consent",
      JSON.stringify({ essential: true, analytics: false, date: new Date().toISOString() })
    );
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem(
      "mattu_cookie_consent",
      JSON.stringify({ essential: true, analytics: analyticsEnabled, date: new Date().toISOString() })
    );
    setShowPreferences(false);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <aside
      aria-label="Cookie consent"
      className="fixed bottom-3 left-3 right-3 sm:bottom-6 sm:right-6 sm:left-auto z-50 sm:max-w-md md:max-w-lg w-auto transition-all animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="relative rounded-2xl border border-slate-200/90 bg-white/95 backdrop-blur-xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(15,31,61,0.20)] ring-1 ring-black/[0.04] text-slate-800">
        {!showPreferences ? (
          <div>
            {/* Header: Icon, Title, Compliance Badge & Close */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-primary-100/70 border border-primary-200/60 text-primary-700 shadow-sm">
                  <Cookie className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-sm sm:text-base text-slate-900 tracking-tight">
                      {t.cookies.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      <ShieldCheck className="h-3 w-3 text-emerald-600" />
                      <span>{locale === "de" ? "DSGVO / BDSG" : "GDPR Compliant"}</span>
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {locale === "de" ? "Transparente Datensparsamkeit" : "Privacy & Data Minimization"}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleAcceptEssential}
                title={locale === "de" ? "Schließen & nur notwendige akzeptieren" : "Close & use essential only"}
                className="rounded-lg p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label={t.cookies.close}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Description */}
            <p className="mt-3 text-xs text-slate-600 leading-relaxed">
              {t.cookies.desc}{" "}
              <Link
                href="/cookie-policy"
                className="text-primary-700 hover:text-primary-900 underline underline-offset-2 font-semibold transition-colors"
              >
                {t.cookies.cookiePolicyLink}
              </Link>{" "}
              &amp;{" "}
              <Link
                href="/privacy-policy"
                className="text-primary-700 hover:text-primary-900 underline underline-offset-2 font-semibold transition-colors"
              >
                {locale === "de" ? "Datenschutzerklärung" : "Privacy Policy"}
              </Link>.
            </p>

            {/* Actions: Reorganized with clear visual hierarchy */}
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-primary-800 hover:bg-primary-50/60 py-2 px-2.5 rounded-xl transition-all order-3 sm:order-1"
              >
                <Settings2 className="h-3.5 w-3.5 text-slate-400" />
                <span>{t.cookies.customize}</span>
              </button>

              <div className="flex items-center gap-2 order-1 sm:order-2">
                <button
                  type="button"
                  onClick={handleAcceptEssential}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:text-slate-900 font-semibold py-2.5 px-3.5 text-xs transition-all border border-slate-200/90 active:scale-[0.98]"
                >
                  {t.cookies.essentialOnly}
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 hover:from-primary-800 hover:to-primary-700 text-white font-semibold py-2.5 px-4 text-xs shadow-md shadow-primary-950/20 hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  <Check className="h-3.5 w-3.5" />
                  <span>{t.cookies.acceptAll}</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Preferences Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                  <SlidersHorizontal className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900">
                    {t.cookies.customize}
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    {locale === "de" ? "Individuelle Einstellungen anpassen" : "Manage specific consent options"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="rounded-lg p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label={t.cookies.close}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Cookies Options List */}
            <div className="space-y-2.5">
              {/* Essential Cookies */}
              <div className="rounded-xl bg-slate-50/80 border border-slate-200/60 p-3.5 flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Lock className="h-3.5 w-3.5 text-slate-500" />
                    <p className="text-xs font-bold text-slate-900">
                      {t.cookies.essentialTitle}
                    </p>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {t.cookies.essentialDesc}
                  </p>
                </div>
                <span className="flex-shrink-0 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 border border-emerald-200 px-2 py-1 rounded-md">
                  {locale === "de" ? "Erforderlich" : "Required"}
                </span>
              </div>

              {/* Analytics Cookies */}
              <div className="rounded-xl border border-slate-200/80 bg-white p-3.5 flex items-start justify-between gap-3 hover:border-slate-300 transition-colors">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-900">
                    {t.cookies.analyticsTitle}
                  </p>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {t.cookies.analyticsDesc}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-0.5">
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-700"></div>
                </label>
              </div>
            </div>

            {/* Preferences Footer Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="text-xs font-medium text-slate-500 hover:text-slate-800 py-2 px-3 rounded-xl hover:bg-slate-100 transition-colors"
              >
                {locale === "de" ? "Zurück" : "Back"}
              </button>
              <button
                type="button"
                onClick={handleSavePreferences}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-primary-900 hover:bg-primary-800 text-white font-semibold py-2 px-4 text-xs shadow-md transition-all active:scale-[0.98]"
              >
                <Check className="h-3.5 w-3.5" />
                <span>{t.cookies.savePreferences}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
