"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Globe,
  Building2,
  GraduationCap,
  ShieldCheck,
  Maximize2,
  X,
  ChevronRight,
  Download,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function EuropeMap() {
  const { locale } = useLanguage();
  const isDe = locale === "de";

  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  return (
    <section id="europe-map" className="section-padding bg-slate-50/70 border-b border-gray-200 scroll-mt-20">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 pb-6 border-b border-gray-200 gap-4">
          <div className="max-w-3xl">
            <p className="heading-eyebrow mb-2">
              {isDe ? "EUROPÄISCHES NETZWERK & SCHENGEN-RAUM" : "EUROPEAN PRESENCE & SCHENGEN MOBILITY"}
            </p>
            <h2 className="heading-2">
              {isDe ? (
                <>
                  Schengen- & Mobilitätskarte:{" "}
                  <span className="text-primary-700">Europa im Überblick</span>
                </>
              ) : (
                <>
                  Schengen & Mobility Map:{" "}
                  <span className="text-primary-700">Europe at a Glance</span>
                </>
              )}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
              {isDe
                ? "Originale geografische Übersicht der europäischen Länder und des Schengen-Raums. Mattu Bridge begleitet Studierende, Fachkräfte und Institutionen auf legalen, transparenten Bildungswegen und Karrierepfaden in ganz Europa."
                : "Original vector geographic overview of European and Schengen Area member states. Mattu Bridge connects students, qualified professionals, and partner institutions through transparent, legal education and career pathways across Europe."}
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3.5 py-2 text-xs font-semibold text-gray-700 hover:text-primary-700 hover:border-primary-300 shadow-sm transition-all"
            >
              <Maximize2 className="h-3.5 w-3.5" />
              <span>{isDe ? "Vollbildansicht" : "Inspect Full Map"}</span>
            </button>
            <Link
              href="/education"
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary-700 hover:text-primary-800 transition-colors"
            >
              <span>{isDe ? "Programme ansehen" : "Explore Programmes"}</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Central Master Vector Map Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl border border-sky-100 bg-white p-4 sm:p-6 lg:p-7 shadow-xl shadow-slate-900/5 overflow-hidden">
            {/* Map Top Ambient Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 text-xs">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <Compass className="h-4 w-4 text-primary-700" />
                <span>
                  {isDe
                    ? "Offizielle europäische Schengen- & Länderkarte (Vektorgrafik)"
                    : "Official European & Schengen Mobility Map (Vector Design)"}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-[10.5px]">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200/60 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-[#0060ba]" />
                  Schengen (EU)
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-[#46a032]" />
                  Schengen (Non-EU)
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-[#f9a21b]" />
                  Non-Schengen (EU)
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-[#94a3b8]" />
                  Non-Schengen (Non-EU)
                </span>
              </div>
            </div>

            {/* The Authentic 100% Vector Schengen Map Container */}
            <div className="relative w-full aspect-[480/475] max-h-[820px] rounded-2xl overflow-hidden bg-[#eaf4fd] border border-sky-200/70 select-none shadow-inner mx-auto">
              <Image
                src="/images/schengen-europe-vector.svg"
                alt="Original Vector Map of Schengen and European Countries - Mattu Bridge"
                fill
                sizes="(max-width: 1024px) 100vw, 920px"
                className="object-contain"
                priority
              />
            </div>

            {/* Map Bottom Information Footer */}
            <div className="mt-4 pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
              <span className="flex items-center gap-1.5">
                <Globe className="h-3.5 w-3.5 text-primary-700" />
                <span>
                  {isDe
                    ? "Europäische Union & Schengen-Raum: Freizügigkeit für Bildung, Wissenschaft & Beschäftigung"
                    : "European Union & Schengen Area: Free movement for education, academics & employment"}
                </span>
              </span>
              <span className="font-semibold text-slate-700">
                {isDe
                  ? "Zentraler Hauptsitz: Frankfurt am Main, Deutschland"
                  : "Central Operations: Frankfurt am Main, Germany"}
              </span>
            </div>
          </div>
        </div>

        {/* 4 Bottom Assurance Cards */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:border-primary-200 transition-colors">
            <Building2 className="h-5 w-5 text-primary-700 mb-2" />
            <h4 className="text-xs font-bold text-gray-900">
              {isDe ? "Deutscher Hauptsitz" : "German Headquarters"}
            </h4>
            <p className="text-[11px] text-gray-600 mt-0.5">
              {isDe
                ? "Frankfurt am Main – europäisches Finanz- & Rechtszentrum."
                : "Frankfurt am Main – Europe's financial & legal hub."}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:border-primary-200 transition-colors">
            <Globe className="h-5 w-5 text-primary-700 mb-2" />
            <h4 className="text-xs font-bold text-gray-900">
              {isDe ? "Schengen-Mobilität" : "Schengen Mobility"}
            </h4>
            <p className="text-[11px] text-gray-600 mt-0.5">
              {isDe
                ? "Grenzenloses Reisen und Studienaufenthalte im gesamten EU-Raum."
                : "Unrestricted travel and study exchange across member states."}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:border-primary-200 transition-colors">
            <GraduationCap className="h-5 w-5 text-primary-700 mb-2" />
            <h4 className="text-xs font-bold text-gray-900">
              {isDe ? "Anerkannte Abschlüsse" : "Accredited Degrees"}
            </h4>
            <p className="text-[11px] text-gray-600 mt-0.5">
              {isDe
                ? "Bologna-konforme Bachelor-, Master- & Medizinabschlüsse."
                : "Bologna-compliant Bachelor, Master & Medical qualifications."}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:border-primary-200 transition-colors">
            <ShieldCheck className="h-5 w-5 text-primary-700 mb-2" />
            <h4 className="text-xs font-bold text-gray-900">
              {isDe ? "Rechtssicherheit" : "Legal Transparency"}
            </h4>
            <p className="text-[11px] text-gray-600 mt-0.5">
              {isDe
                ? "100% DSGVO-konform, keine versteckten Gebühren oder Scheinversprechen."
                : "100% GDPR compliant, zero hidden charges or fake promises."}
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full Resolution Map Inspection */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] bg-white rounded-3xl p-4 sm:p-6 overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
              <div className="flex items-center gap-2">
                <Compass className="h-5 w-5 text-primary-700" />
                <h3 className="font-bold text-base text-gray-900">
                  {isDe
                    ? "Europäische Schengen- & Mobilitätskarte (Original Vektor)"
                    : "European Schengen & Mobility Geographic Map (Original Vector)"}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative flex-1 min-h-[450px] sm:min-h-[580px] w-full rounded-2xl overflow-hidden bg-[#eaf4fd]">
              <Image
                src="/images/schengen-europe-vector.svg"
                alt="Schengen European Countries Geographic Vector Map - Full View"
                fill
                sizes="(max-width: 1024px) 100vw, 850px"
                className="object-contain"
                priority
              />
            </div>

            <div className="pt-3 mt-3 border-t border-gray-100 flex flex-wrap items-center justify-between text-xs text-gray-500 gap-2">
              <span>
                {isDe
                  ? "Schengen-Raum & Europäische Union: Bildung, Mobilität & Arbeitsmarktzugang"
                  : "Schengen Area & European Union: Education, Mobility & Legal Employment Pathways"}
              </span>
              <span className="font-semibold text-primary-700">Mattu Bridge · Frankfurt am Main</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
