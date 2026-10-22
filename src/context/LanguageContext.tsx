"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { Locale, TranslationSchema, translations } from "@/data/translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: TranslationSchema;
  isGerman: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check saved preference in localStorage or cookie
    try {
      const savedLocale = localStorage.getItem("mattu_locale") as Locale | null;
      if (savedLocale === "en" || savedLocale === "de") {
        setLocaleState(savedLocale);
        document.documentElement.lang = savedLocale;
      } else {
        // Check browser language
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith("de")) {
          setLocaleState("de");
          document.documentElement.lang = "de";
        }
      }
    } catch {
      // ignore
    }
    setMounted(true);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem("mattu_locale", newLocale);
      document.cookie = `mattu_locale=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
      document.documentElement.lang = newLocale;
    } catch {
      // ignore
    }
  };

  const toggleLocale = () => {
    const next = locale === "en" ? "de" : "en";
    setLocale(next);
  };

  const t = useMemo(() => {
    return translations[locale] || translations.en;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t,
      isGerman: locale === "de",
    }),
    [locale, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Graceful fallback for non-provider renders
    return {
      locale: "en" as Locale,
      setLocale: () => {},
      toggleLocale: () => {},
      t: translations.en,
      isGerman: false,
    };
  }
  return context;
}
