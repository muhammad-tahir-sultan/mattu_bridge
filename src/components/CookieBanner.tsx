"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, Shield, Check, Settings, X } from "lucide-react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

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
    <aside aria-label="Cookie consent" className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl animate-in slide-in-from-bottom-5 duration-300">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl ring-1 ring-black/5">
        {!showPreferences ? (
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                <Cookie className="h-5 w-5" />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-gray-900">
                  Privacy &amp; Cookie Consent
                </p>
                <p className="mt-1 text-gray-600 leading-relaxed">
                  We use strictly necessary cookies to ensure the proper functionality of our website. Optional analytical cookies are disabled by default under GDPR rules. You can learn more in our{" "}
                  <Link href="/cookie-policy" className="text-primary-700 underline font-medium">
                    Cookie Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy-policy" className="text-primary-700 underline font-medium">
                    Datenschutzerklärung
                  </Link>.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-2 md:pt-0">
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="btn-secondary !py-2 !px-3.5 text-xs font-semibold"
              >
                <Settings className="h-3.5 w-3.5" />
                Customize
              </button>
              <button
                type="button"
                onClick={handleAcceptEssential}
                className="btn-secondary !py-2 !px-3.5 text-xs font-semibold"
              >
                Essential Only
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="btn-primary !py-2 !px-4 text-xs font-semibold"
              >
                <Check className="h-3.5 w-3.5" />
                Accept All
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h3 className="font-display text-lg font-bold text-gray-900 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary-700" />
                Cookie Preferences
              </h3>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="rounded-lg p-1 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3.5">
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Strictly Necessary Cookies
                  </p>
                  <p className="text-xs text-gray-500">
                    Required for security, session state, and navigation. Cannot be disabled.
                  </p>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-100 px-2.5 py-1 rounded">
                  Always Active
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-gray-200 p-3.5">
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Analytics &amp; Performance Cookies
                  </p>
                  <p className="text-xs text-gray-500">
                    Help us understand user traffic anonymously to improve user guidance.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="btn-secondary !py-2 !px-4 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSavePreferences}
                className="btn-primary !py-2 !px-4 text-xs font-semibold"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
