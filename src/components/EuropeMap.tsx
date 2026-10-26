"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Globe,
  Building2,
  ShieldCheck,
  ChevronRight,
  Maximize2,
  X,
  Compass,
  Sparkles,
} from "lucide-react";
import { images } from "@/data/images";
import { useLanguage } from "@/context/LanguageContext";

interface DestinationData {
  id: string;
  code: string;
  nameEn: string;
  nameDe: string;
  flag: string;
  cityEn: string;
  cityDe: string;
  roleEn: string;
  roleDe: string;
  tagEn: string;
  tagDe: string;
  descEn: string;
  descDe: string;
  image: string;
  isHq?: boolean;
  pinPercent: { left: number; top: number };
  svgCoord: { x: number; y: number };
  highlightsEn: string[];
  highlightsDe: string[];
  educationLink: string;
  jobsLink: string;
}

const DESTINATIONS: DestinationData[] = [
  {
    id: "germany",
    code: "de",
    nameEn: "Germany",
    nameDe: "Deutschland",
    flag: "🇩🇪",
    cityEn: "Frankfurt am Main (HQ) & Nationwide",
    cityDe: "Frankfurt am Main (Hauptsitz) & Bundesweit",
    roleEn: "Global Economic Engine & Engineering Powerhouse",
    roleDe: "Europas Wirtschaftsmotor & MINT-Spitzenreiter",
    tagEn: "Headquarters & Primary Hub",
    tagDe: "Hauptsitz & Primäres Zentrum",
    descEn:
      "Mattu Bridge’s central headquarters is located in Frankfurt am Main. Germany offers tuition-free or low-cost higher education at world-renowned public universities, world-leading engineering industries, and the renowned Dual Vocational Training (Ausbildung) system.",
    descDe:
      "Der Hauptsitz von Mattu Bridge befindet sich in Frankfurt am Main. Deutschland bietet gebührenfreie oder extrem günstige Studiengänge an renommierten staatlichen Universitäten, weltführende Industrie und das renommierte duale Ausbildungssystem.",
    image: images.destinations.germany,
    isHq: true,
    pinPercent: { left: 47.0, top: 57.4 },
    svgCoord: { x: 378, y: 588 },
    highlightsEn: [
      "Tuition-free public universities for international students",
      "18-month post-study work visa for graduates",
      "Direct pathway to German permanent residency",
      "High demand in IT, Engineering, Healthcare & Logistics",
    ],
    highlightsDe: [
      "Gebührenfreies Studium an staatlichen Spitzenuniversitäten",
      "18 Monate Aufenthaltserlaubnis zur Arbeitsplatzsuche nach Abschluss",
      "Direkter Weg zur deutschen Niederlassungserlaubnis",
      "Hoher Fachkräftebedarf in MINT, IT, Pflege & Logistik",
    ],
    educationLink: "/education",
    jobsLink: "/jobs",
  },
  {
    id: "poland",
    code: "pl",
    nameEn: "Poland",
    nameDe: "Polen",
    flag: "🇵🇱",
    cityEn: "Warsaw, Kraków & Wrocław",
    cityDe: "Warschau, Krakau & Breslau",
    roleEn: "Academic Excellence & Dynamic Economic Growth",
    roleDe: "Akademische Exzellenz & Dynamisches Wirtschaftswachstum",
    tagEn: "High Value EU Education",
    tagDe: "Exzellentes Preis-Leistungs-Verhältnis",
    descEn:
      "Poland is one of Europe's fastest-growing economies and academic centres. It offers accredited English-taught degrees in medicine, technology, and business at very affordable living and tuition costs.",
    descDe:
      "Polen zählt zu den wachstumsstärksten Volkswirtschaften und Bildungszentren Europas. Es bietet international akkreditierte englischsprachige Studiengänge in Medizin, Technologie und Wirtschaft bei sehr moderaten Lebenshaltungs- und Studienkosten.",
    image: images.destinations.poland,
    pinPercent: { left: 66.5, top: 53.2 },
    svgCoord: { x: 535, y: 545 },
    highlightsEn: [
      "Affordable European tuition fees and living expenses",
      "Globally recognized English-taught medical & engineering programs",
      "Vibrant international student community & tech startups",
      "Full Schengen work and travel mobility",
    ],
    highlightsDe: [
      "Sehr erschwingliche Studien- und Lebenshaltungskosten",
      "Weltweit anerkannte englischsprachige Medizin- & Ingenieurstudiengänge",
      "Lebendige internationale Studenten-Community & Tech-Hubs",
      "Volle Schengen-Arbeits- und Reisefreiheit",
    ],
    educationLink: "/education",
    jobsLink: "/jobs",
  },
  {
    id: "hungary",
    code: "hu",
    nameEn: "Hungary",
    nameDe: "Ungarn",
    flag: "🇭🇺",
    cityEn: "Budapest, Debrecen & Szeged",
    cityDe: "Budapest, Debrecen & Szeged",
    roleEn: "Prestige Medical, Dental & Engineering Degrees",
    roleDe: "Renommierte Medizin-, Zahnmedizin- & Ingenieurabschlüsse",
    tagEn: "EU Medical & Science Leader",
    tagDe: "Führend in Medizin & Naturwissenschaften",
    descEn:
      "Hungary has a centuries-old tradition of higher education and is globally renowned for top-quality English-language medical, dental, and veterinary degrees recognized across Germany and the European Union.",
    descDe:
      "Ungarn blickt auf eine jahrhundertealte Bildungstradition zurück und ist weltweit renommiert für hochwertige englischsprachige Medizin-, Zahnmedizin- und Ingenieurabschlüsse mit EU-weiter Anerkennung.",
    image: images.destinations.hungary,
    pinPercent: { left: 66.2, top: 66.4 },
    svgCoord: { x: 532, y: 680 },
    highlightsEn: [
      "World-class medical & health science faculties in English",
      "Fully accredited EU diplomas recognized across Germany & worldwide",
      "Extremely competitive cost-to-quality ratio in Central Europe",
      "Centrally situated transport hub connecting East & West Europe",
    ],
    highlightsDe: [
      "Weltklasse-Medizin- und Gesundheitsstudiengänge auf Englisch",
      "In ganz Deutschland und der EU voll anerkannte Approbationen",
      "Herausragendes Preis-Leistungs-Verhältnis in Mitteleuropa",
      "Zentraler Verkehrsknotenpunkt zwischen West- und Osteuropa",
    ],
    educationLink: "/education",
    jobsLink: "/jobs",
  },
  {
    id: "spain",
    code: "es",
    nameEn: "Spain",
    nameDe: "Spanien",
    flag: "🇪🇸",
    cityEn: "Madrid, Barcelona & Valencia",
    cityDe: "Madrid, Barcelona & Valencia",
    roleEn: "World-Class Business Schools & Cultural Crossroads",
    roleDe: "Globale Top-Wirtschaftshochschulen & Innovation",
    tagEn: "Global Business & Technology",
    tagDe: "Top-Business-Schools & Lifestyle",
    descEn:
      "Spain hosts some of the world's most prestigious, top-ranked business schools (IE, ESADE, IESE) and universities, combining high academic standards with an unmatched lifestyle and extensive global networks.",
    descDe:
      "Spanien beheimatet einige der weltbesten Business Schools (IE, ESADE, IESE) und Spitzenuniversitäten. Es verbindet erstklassige akademische Ausbildung mit hoher Lebensqualität und weltweitem Netzwerk.",
    image: images.destinations.spain,
    pinPercent: { left: 18.0, top: 81.5 },
    svgCoord: { x: 145, y: 835 },
    highlightsEn: [
      "Consistently ranked among the top 10 global MBA programs",
      "Post-graduation job-seeking residence permits",
      "Growing tech, renewable energy & digital innovation ecosystems",
      "Rich cultural life and world-renowned living standards",
    ],
    highlightsDe: [
      "Weltweit unter den Top 10 für MBA- und Managementstudiengänge",
      "Aufenthaltsrecht zur Arbeitsplatzsuche nach Studienabschluss",
      "Wachsende Ökosysteme in Tech, erneuerbaren Energien und Digitalisierung",
      "Reiche Kultur und herausragende Lebensqualität",
    ],
    educationLink: "/education",
    jobsLink: "/jobs",
  },
  {
    id: "portugal",
    code: "pt",
    nameEn: "Portugal",
    nameDe: "Portugal",
    flag: "🇵🇹",
    cityEn: "Lisbon & Porto",
    cityDe: "Lissabon & Porto",
    roleEn: "Atlantic Innovation Hub & Modern Tech Campus",
    roleDe: "Atlantischer Innovationshub & Moderner Tech-Campus",
    tagEn: "European Tech & Startup Capital",
    tagDe: "Europas Startup- & Tech-Metropole",
    descEn:
      "Portugal has rapidly established itself as Europe's premier startup and tech hub, hosting the Web Summit and boasting state-of-the-art universities with warm hospitality and high English proficiency.",
    descDe:
      "Portugal hat sich rasant als führender europäischer Startup- und Tech-Standort etabliert (Host des Web Summit) und überzeugt mit modernsten Universitäten, exzellenter Gastfreundschaft und hoher englischer Sprachkompetenz.",
    image: images.destinations.portugal,
    pinPercent: { left: 6.8, top: 79.9 },
    svgCoord: { x: 55, y: 818 },
    highlightsEn: [
      "Home of Europe's largest tech conferences and incubators",
      "Highly affordable tuition fees and moderate living expenses",
      "Ranked among the top 5 safest countries globally",
      "Welcoming immigration policies and post-study opportunities",
    ],
    highlightsDe: [
      "Zuhause führender europäischer Tech-Inkubatoren und Web Summit",
      "Sehr moderate Studiengebühren und Lebenshaltungskosten",
      "Unter den Top 5 der sichersten Länder weltweit",
      "Transparente und zukunftsorientierte Aufenthaltsmöglichkeiten",
    ],
    educationLink: "/education",
    jobsLink: "/jobs",
  },
  {
    id: "malta",
    code: "mt",
    nameEn: "Malta",
    nameDe: "Malta",
    flag: "🇲🇹",
    cityEn: "Valletta & Msida",
    cityDe: "Valletta & Msida",
    roleEn: "English-Speaking Mediterranean Academic & Business Island",
    roleDe: "Englischsprachiger Bildungs- & Wirtschaftshub im Mittelmeer",
    tagEn: "Official English Language Hub",
    tagDe: "Englischsprachiger EU-Hub",
    descEn:
      "As an English-speaking European Union member state, Malta is an exceptionally attractive gateway for international students and professionals seeking British-style qualifications in a safe Mediterranean environment.",
    descDe:
      "Als englischsprachiges EU-Mitglied ist Malta das ideale Sprungbrett für internationale Studierende und Fachkräfte, die britisch geprägte Abschlüsse in einem sicheren Mittelmeerraum anstreben.",
    image: images.destinations.malta,
    pinPercent: { left: 56.0, top: 94.2 },
    svgCoord: { x: 450, y: 965 },
    highlightsEn: [
      "English is an official language with 100% English tuition",
      "Legal part-time work rights during study terms",
      "Booming hospitality, finance, tech & maritime sectors",
      "Fast, structured Schengen student visa processing",
    ],
    highlightsDe: [
      "Englisch als offizielle Landessprache mit rein englischem Unterricht",
      "Gesetzliches Recht auf Nebenjobs während des Studiums",
      "Boomende Branchen: Hospitality, Finanzen, Tech & Logistik",
      "Strukturierte und transparente Visaverfahren",
    ],
    educationLink: "/education",
    jobsLink: "/jobs",
  },
];

export default function EuropeMap() {
  const { locale } = useLanguage();
  const isDe = locale === "de";

  const [selectedId, setSelectedId] = useState<string>("germany");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const activeDestination =
    DESTINATIONS.find((d) => d.id === selectedId) || DESTINATIONS[0];

  const hqDestination = DESTINATIONS.find((d) => d.id === "germany")!;

  return (
    <section className="section-padding bg-slate-50/70 border-b border-gray-200">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 pb-6 border-b border-gray-200 gap-4">
          <div className="max-w-3xl">
            <p className="heading-eyebrow mb-2">
              {isDe ? "EUROPÄISCHES NETZWERK & SCHENGEN-MOBILITÄT" : "EUROPEAN PRESENCE & SCHENGEN MOBILITY"}
            </p>
            <h2 className="heading-2">
              {isDe ? (
                <>
                  Unser europäisches Netzwerk:{" "}
                  <span className="text-primary-700">6 Kernstandorte</span>
                </>
              ) : (
                <>
                  Our European Network:{" "}
                  <span className="text-primary-700">6 Core Destinations</span>
                </>
              )}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
              {isDe
                ? "Akkreditierte Studien- und Beschäftigungsmöglichkeiten im Schengen-Raum und in ganz Europa. Klicken Sie auf einen Standort, um Hochschulen, Visumsrechte und Karrierechancen zu erkunden."
                : "Verified study pathways and recruitment opportunities across the Schengen Area and Europe. Select any destination to explore accredited degrees, student visa rights, and post-study opportunities."}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3.5 py-2 text-xs font-semibold text-gray-700 hover:text-primary-700 hover:border-primary-300 shadow-sm transition-all"
            >
              <Maximize2 className="h-3.5 w-3.5" />
              <span>{isDe ? "Karte vergrößern" : "Inspect Full Map"}</span>
            </button>
            <Link
              href="/education"
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary-700 hover:text-primary-800 transition-colors"
            >
              <span>{isDe ? "Alle Programme" : "All Programmes"}</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Quick Country Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {DESTINATIONS.map((dest) => {
            const isSelected = dest.id === selectedId;
            return (
              <button
                key={dest.id}
                onClick={() => setSelectedId(dest.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shadow-sm border ${
                  isSelected
                    ? "bg-primary-900 text-white border-primary-900 font-bold shadow-md shadow-primary-900/25 scale-[1.02]"
                    : "bg-white text-gray-700 border-gray-200 hover:border-primary-300 hover:bg-primary-50/40"
                }`}
              >
                <span className="text-base">{dest.flag}</span>
                <span>{isDe ? dest.nameDe : dest.nameEn}</span>
                {dest.isHq && (
                  <span
                    className={`rounded px-1.5 py-0.5 text-[9.5px] uppercase font-bold tracking-wider ${
                      isSelected
                        ? "bg-amber-400 text-gray-950 font-black"
                        : "bg-amber-100 text-amber-900"
                    }`}
                  >
                    HQ
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Main Content Grid: Schengen Map + Spotlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Authentic Schengen Europe Map with Interactive Hotspots (7 Cols) */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="relative rounded-3xl border border-sky-100 bg-white p-4 sm:p-5 shadow-xl shadow-slate-900/5 overflow-hidden">
              {/* Map Top Bar with Legend Pill Summary */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-100 text-xs">
                <div className="flex items-center gap-2 font-bold text-slate-800">
                  <Compass className="h-4 w-4 text-primary-700" />
                  <span>
                    {isDe
                      ? "Offizielle Schengen- & Europakarte"
                      : "Official Schengen & European Mobility Map"}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[10.5px]">
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200/60 font-medium">
                    <span className="h-2 w-2 rounded-full bg-[#0060ba]" />
                    Schengen (EU)
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/60 font-medium">
                    <span className="h-2 w-2 rounded-full bg-[#46a032]" />
                    Schengen (Non-EU)
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/60 font-medium">
                    <span className="h-2 w-2 rounded-full bg-[#f9a21b]" />
                    Non-Schengen (EU)
                  </span>
                </div>
              </div>

              {/* The Real Geographic Schengen Map Canvas */}
              <div className="relative w-full aspect-[804/1024] rounded-2xl overflow-hidden bg-[#e8f4fd] border border-sky-200/70 select-none shadow-inner">
                {/* Authentic Background Map Image */}
                <Image
                  src="/images/schengen-europe-map.jpg"
                  alt="Schengen and European Countries Mobility Map - Mattu Bridge"
                  fill
                  sizes="(max-width: 1024px) 100vw, 680px"
                  className="object-cover sm:object-contain object-top"
                  priority
                />

                {/* SVG Connecting Route Lines from Germany HQ */}
                <svg
                  viewBox="0 0 804 1024"
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                >
                  <defs>
                    <linearGradient id="activeRouteGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#d97706" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#1e40af" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>

                  {DESTINATIONS.filter((d) => !d.isHq).map((dest) => {
                    const isArcActive =
                      selectedId === dest.id || hoveredId === dest.id || selectedId === "germany";
                    const isDirectlySelected =
                      selectedId === dest.id || hoveredId === dest.id;

                    const midX = (hqDestination.svgCoord.x + dest.svgCoord.x) / 2;
                    const midY = (hqDestination.svgCoord.y + dest.svgCoord.y) / 2 - 35;
                    const pathD = `M ${hqDestination.svgCoord.x},${hqDestination.svgCoord.y} Q ${midX},${midY} ${dest.svgCoord.x},${dest.svgCoord.y}`;

                    return (
                      <g key={`route-${dest.id}`}>
                        {/* Glow outline when selected */}
                        {isDirectlySelected && (
                          <path
                            d={pathD}
                            fill="none"
                            stroke="#f59e0b"
                            strokeWidth="5"
                            strokeOpacity="0.35"
                            strokeLinecap="round"
                          />
                        )}
                        <path
                          d={pathD}
                          fill="none"
                          stroke={isDirectlySelected ? "#1e40af" : isArcActive ? "#2563eb" : "#64748b"}
                          strokeWidth={isDirectlySelected ? "3" : isArcActive ? "2" : "1.2"}
                          strokeDasharray={isDirectlySelected ? "6 3" : "4 4"}
                          strokeOpacity={isDirectlySelected ? 1 : isArcActive ? 0.75 : 0.35}
                          className={isDirectlySelected ? "animate-pulse" : ""}
                        />
                      </g>
                    );
                  })}
                </svg>

                {/* Interactive Destination Hotspots & Badges */}
                {DESTINATIONS.map((dest) => {
                  const isSelected = dest.id === selectedId;
                  const isHovered = dest.id === hoveredId;
                  const isHq = Boolean(dest.isHq);

                  return (
                    <div
                      key={dest.id}
                      style={{
                        left: `${dest.pinPercent.left}%`,
                        top: `${dest.pinPercent.top}%`,
                      }}
                      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                      onClick={() => setSelectedId(dest.id)}
                      onMouseEnter={() => setHoveredId(dest.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      {/* Pulsating Ring */}
                      <span
                        className={`absolute -inset-2.5 rounded-full transition-all duration-300 ${
                          isHq
                            ? "bg-amber-400/40 animate-ping"
                            : isSelected || isHovered
                            ? "bg-blue-600/40 animate-ping"
                            : "bg-blue-500/15"
                        }`}
                      />

                      {/* Pin Button */}
                      <div
                        className={`relative flex items-center gap-1 px-2 py-1 rounded-full shadow-lg border transition-all duration-200 ${
                          isHq
                            ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white border-amber-300 ring-2 ring-amber-400/50 scale-110"
                            : isSelected
                            ? "bg-primary-900 text-white border-white ring-2 ring-primary-500 scale-110"
                            : "bg-white/95 text-slate-800 border-slate-300/80 hover:bg-primary-50 hover:border-primary-400 hover:scale-105 backdrop-blur-sm"
                        }`}
                      >
                        <span className="text-xs">{dest.flag}</span>
                        <span className="text-[10px] font-bold tracking-tight whitespace-nowrap">
                          {isHq ? "Frankfurt HQ" : dest.nameEn}
                        </span>
                        {isHq && (
                          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                        )}
                      </div>

                      {/* Tooltip on Hover */}
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-2 rounded-xl bg-slate-950/95 text-white text-xs shadow-2xl backdrop-blur-md border border-white/10 pointer-events-none transition-all duration-200 ${
                          isHovered
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-1 pointer-events-none"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 font-bold text-amber-300 mb-0.5">
                          <span>{dest.flag}</span>
                          <span>{isDe ? dest.nameDe : dest.nameEn}</span>
                        </div>
                        <p className="text-[10.5px] text-gray-300 leading-tight">
                          {isDe ? dest.cityDe : dest.cityEn}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map Footer Info */}
              <div className="mt-3 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary-700" />
                  <span>
                    {isDe
                      ? "Klicken Sie auf einen Standort, um Details zu laden."
                      : "Click any country pin or tab to view verified pathways."}
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

          {/* Right: Dynamic Destination Spotlight Card (5 Cols) */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="rounded-3xl border border-gray-200/90 bg-white p-6 shadow-xl shadow-slate-900/5 flex flex-col justify-between">
              <div>
                {/* Header with Flag & Role */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{activeDestination.flag}</span>
                      <h3 className="font-display text-2xl font-bold text-gray-900 tracking-tight">
                        {isDe ? activeDestination.nameDe : activeDestination.nameEn}
                      </h3>
                      {activeDestination.isHq && (
                        <span className="rounded-md bg-amber-100 border border-amber-300 px-2 py-0.5 text-[10px] font-bold text-amber-900">
                          {isDe ? "HAUPTSITZ" : "HEADQUARTERS"}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-primary-700 mt-1 flex items-center gap-1">
                      <MapPin className="h-3 w-3 flex-shrink-0" />
                      <span>{isDe ? activeDestination.cityDe : activeDestination.cityEn}</span>
                    </p>
                  </div>

                  <span className="rounded-full bg-primary-50 px-3 py-1 text-[11px] font-bold text-primary-700 border border-primary-200/60">
                    {isDe ? activeDestination.tagDe : activeDestination.tagEn}
                  </span>
                </div>

                {/* Country Photo Preview */}
                <div className="relative h-44 sm:h-48 w-full rounded-2xl overflow-hidden mb-4 border border-gray-200 shadow-inner group">
                  <Image
                    src={activeDestination.image}
                    alt={`${activeDestination.nameEn} - Mattu Bridge Europe`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white drop-shadow">
                    {isDe ? activeDestination.roleDe : activeDestination.roleEn}
                  </div>
                </div>

                {/* Overview Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                  {isDe ? activeDestination.descDe : activeDestination.descEn}
                </p>

                {/* Key Highlights Checklist */}
                <div className="space-y-2 mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                    {isDe ? "Schlüsselvorteile & Profil" : "Key Advantages & Eligibility"}
                  </p>
                  {(isDe
                    ? activeDestination.highlightsDe
                    : activeDestination.highlightsEn
                  ).map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-gray-700 font-medium"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-2.5">
                <Link
                  href={activeDestination.educationLink}
                  className="btn-primary flex-1 justify-center !py-2.5 text-xs font-bold shadow-md shadow-primary-700/20"
                >
                  <GraduationCap className="h-4 w-4" />
                  <span>
                    {isDe
                      ? `Studium in ${activeDestination.nameDe}`
                      : `Study in ${activeDestination.nameEn}`}
                  </span>
                </Link>
                <Link
                  href={activeDestination.jobsLink}
                  className="btn-secondary flex-1 justify-center !py-2.5 text-xs font-semibold"
                >
                  <Briefcase className="h-4 w-4" />
                  <span>{isDe ? "Karrierechancen" : "Job Opportunities"}</span>
                </Link>
              </div>
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
                    ? "Europäische Schengen- & Mobilitätskarte"
                    : "European Schengen & Mobility Geographic Map"}
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

            <div className="relative flex-1 min-h-[450px] sm:min-h-[580px] w-full rounded-2xl overflow-hidden bg-[#e8f4fd]">
              <Image
                src="/images/schengen-europe-map.jpg"
                alt="Schengen European Countries Geographic Map - Full View"
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
