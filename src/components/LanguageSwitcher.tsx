"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  variant?: "pill" | "subtle" | "banner";
  className?: string;
}

export default function LanguageSwitcher({
  variant = "pill",
  className = "",
}: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage();

  if (variant === "banner") {
    return (
      <div className={`inline-flex items-center gap-1.5 text-xs ${className}`}>
        <span className="text-primary-300 font-medium flex items-center gap-1">
          <Globe className="h-3 w-3" />
        </span>
        <button
          type="button"
          onClick={() => setLocale("en")}
          className={`px-1.5 py-0.5 rounded transition-all font-semibold ${
            locale === "en"
              ? "bg-primary-800 text-white shadow-sm ring-1 ring-white/20"
              : "text-gray-300 hover:text-white"
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
        <span className="text-gray-600">/</span>
        <button
          type="button"
          onClick={() => setLocale("de")}
          className={`px-1.5 py-0.5 rounded transition-all font-semibold ${
            locale === "de"
              ? "bg-primary-800 text-white shadow-sm ring-1 ring-white/20"
              : "text-gray-300 hover:text-white"
          }`}
          aria-label="Auf Deutsch umschalten"
        >
          DE
        </button>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center p-0.5 rounded-full border border-gray-200 bg-gray-50/90 shadow-sm text-xs ${className}`}
      role="group"
      aria-label="Language selection"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
          locale === "en"
            ? "bg-primary-900 text-white shadow-sm"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        }`}
        aria-pressed={locale === "en"}
      >
        <span className="hidden sm:inline">🇬🇧</span>
        <span>EN</span>
      </button>

      <button
        type="button"
        onClick={() => setLocale("de")}
        className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
          locale === "de"
            ? "bg-primary-900 text-white shadow-sm"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        }`}
        aria-pressed={locale === "de"}
      >
        <span className="hidden sm:inline">🇩🇪</span>
        <span>DE</span>
      </button>
    </div>
  );
}
