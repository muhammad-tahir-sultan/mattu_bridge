"use client";

import React, { useState } from "react";
import { MessageCircle, X, ExternalLink, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/content";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, t } = useLanguage();

  const prefilledMessage =
    locale === "de"
      ? "Hallo Mattu Bridge Team, ich interessiere mich für Ihre Bildungs- und Karriereservices."
      : "Hello Mattu Bridge Team, I would like to inquire about your educational and career services.";

  const whatsappHref = `${siteConfig.whatsappLink}?text=${encodeURIComponent(
    prefilledMessage
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end print:hidden">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2rem)] rounded-2xl border border-emerald-100 bg-white p-4 shadow-2xl shadow-emerald-950/15 animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-start justify-between gap-2 border-b border-gray-100 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/25">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 leading-none">
                  Mattu Bridge WhatsApp
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs text-emerald-700 font-medium">
                    {locale === "de" ? "Aktiv & Erreichbar" : "Active & Verified"}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="my-3 space-y-2 text-xs text-gray-600 leading-relaxed">
            <p>
              {locale === "de"
                ? "Sprechen Sie direkt mit unserem Team in Deutschland für Ausbildungs-, Studien- und Jobberatung."
                : "Connect directly with our Germany office for education consultancy, vocational training, and career placement."}
            </p>
            <div className="rounded-lg bg-emerald-50/70 p-2 text-emerald-900 font-mono font-bold text-xs flex items-center justify-between border border-emerald-100">
              <span>{siteConfig.whatsapp}</span>
              <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100/80 px-1.5 py-0.5 rounded">
                DE
              </span>
            </div>
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-emerald-600/25 transition-all hover:bg-emerald-500 active:scale-[0.98]"
          >
            <MessageCircle className="h-4 w-4" />
            <span>
              {locale === "de" ? "Chat starten" : "Start WhatsApp Chat"}
            </span>
            <ExternalLink className="h-3 w-3 opacity-80" />
          </a>

          <div className="mt-2.5 flex items-center justify-center gap-1 text-[11px] text-gray-400">
            <ShieldCheck className="h-3 w-3 text-emerald-600" />
            <span>
              {locale === "de"
                ? "Offizieller deutscher WhatsApp-Kontakt"
                : "Official German verified WhatsApp"}
            </span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl shadow-emerald-700/30 transition-all duration-300 hover:scale-105 hover:bg-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-400/30"
        aria-label="Open WhatsApp Support (+49 15 905 664 369)"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-400 border-2 border-white" />
        </span>

        <MessageCircle className="h-7 w-7 transition-transform group-hover:rotate-6" />

        {/* Floating Tooltip Pill (Desktop) */}
        {!isOpen && (
          <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-xl bg-gray-900/90 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-white shadow-lg transition-opacity md:group-hover:block">
            {locale === "de"
              ? "WhatsApp: +49 15 905 664 369"
              : "WhatsApp: +49 15 905 664 369"}
          </span>
        )}
      </button>
    </div>
  );
}
