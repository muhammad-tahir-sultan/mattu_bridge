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
  ExternalLink,
} from "lucide-react";
import { images } from "@/data/images";
import { useLanguage } from "@/context/LanguageContext";
import { EUROPE_COUNTRY_PATHS } from "@/data/europePaths";

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
  pin: { x: number; y: number };
  badgeOffset: { x: number; y: number };
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
      "Mattu Bridge’s central headquarters is based in Frankfurt am Main. Germany offers tuition-free or low-cost higher education at world-renowned public universities, world-leading engineering industries, and the renowned Dual Vocational Training (Ausbildung) system.",
    descDe:
      "Der Hauptsitz von Mattu Bridge befindet sich in Frankfurt am Main. Deutschland bietet gebührenfreie oder extrem günstige Studiengänge an renommierten staatlichen Universitäten, weltführende Industrie und das renommierte duale Ausbildungssystem.",
    image: images.destinations.germany,
    isHq: true,
    pin: { x: 298, y: 362 },
    badgeOffset: { x: 8, y: -16 },
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
    pin: { x: 412, y: 340 },
    badgeOffset: { x: 8, y: -14 },
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
    pin: { x: 349, y: 511 },
    badgeOffset: { x: 8, y: -10 },
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
    pin: { x: 155, y: 455 },
    badgeOffset: { x: 8, y: -12 },
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
    pin: { x: 118, y: 440 },
    badgeOffset: { x: -62, y: -12 },
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
    pin: { x: 368, y: 375 },
    badgeOffset: { x: 8, y: 8 },
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
];

export default function EuropeMap() {
  const { locale } = useLanguage();
  const isDe = locale === "de";

  const [selectedId, setSelectedId] = useState<string>("germany");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeDestination =
    DESTINATIONS.find((d) => d.id === selectedId) || DESTINATIONS[0];

  const hqCoord = DESTINATIONS.find((d) => d.id === "germany")!.pin;

  return (
    <section className="section-padding bg-slate-50/70 border-b border-gray-200">
      <div className="section-container">
        {/* Section Header matching site branding */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 pb-6 border-b border-gray-200 gap-4">
          <div className="max-w-3xl">
            <p className="heading-eyebrow mb-2">
              {isDe ? "EUROPÄISCHES NETZWERK & MOBILITÄT" : "EUROPEAN PRESENCE & MOBILITY"}
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
                ? "Interaktive Europakarte unserer akkreditierten Hochschul- und Arbeitgeberkooperationen. Wählen Sie ein Zielland aus, um Studienprogramme, Aufenthaltsoptionen und Karrierechancen zu erkunden."
                : "Geographic map of our verified academic pathways and employment networks across Europe. Select a destination to explore accredited degrees, student visa rights, and post-study opportunities."}
            </p>
          </div>

          <Link
            href="/education"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
          >
            <span>{isDe ? "Alle Programme ansehen" : "View all programmes"}</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Quick Country Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {DESTINATIONS.map((dest) => {
            const isSelected = dest.id === selectedId;
            return (
              <button
                key={dest.id}
                onClick={() => setSelectedId(dest.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shadow-sm border ${
                  isSelected
                    ? "bg-primary-700 text-white border-primary-700 font-bold shadow-md shadow-primary-700/25 scale-[1.02]"
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
                        : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    HQ
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Main Content Grid: Real Geographic Europe Map + Spotlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Authentic Vector Map of Europe (7 Cols) */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="relative rounded-3xl border border-gray-200/90 bg-white p-4 sm:p-6 shadow-md overflow-hidden">
              {/* Map Ambient Top Bar */}
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100 text-xs text-gray-500">
                <div className="flex items-center gap-2 font-semibold text-gray-800">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>
                    {isDe
                      ? "Mattu Bridge Mobilitätskarte"
                      : "Mattu Bridge European Mobility Map"}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[11px]">
                  <span className="flex items-center gap-1.5 text-gray-600">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    {isDe ? "Hauptsitz" : "Central HQ"}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-600">
                    <span className="h-2 w-2 rounded-full bg-primary-600" />
                    {isDe ? "Partnerland" : "Destinations"}
                  </span>
                </div>
              </div>

              {/* The Real Geographic SVG Europe Map */}
              <div className="relative w-full aspect-[4/3.1] sm:aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-50 via-sky-50/20 to-blue-50/30 border border-slate-100 flex items-center justify-center overflow-hidden">
                <svg
                  viewBox="80 140 460 410"
                  className="w-full h-full select-none"
                  style={{ filter: "drop-shadow(0 4px 12px rgba(15,23,42,0.06))" }}
                >
                  <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>

                  {/* Render ALL real European country paths */}
                  <g id="europe-countries">
                    {EUROPE_COUNTRY_PATHS.map((country) => {
                      const destMatch = DESTINATIONS.find((d) => d.code === country.id);
                      const isDest = Boolean(destMatch);
                      const isSelected = destMatch && destMatch.id === selectedId;
                      const isHovered = destMatch && destMatch.id === hoveredId;

                      // Natural, professional map color palette
                      let fill = "#cbd5e1"; // Neutral European land (slate-300)
                      let stroke = "#ffffff";
                      let strokeWidth = "0.75";

                      if (isDest) {
                        if (isSelected) {
                          fill = "#1d4ed8"; // Rich primary royal blue
                          stroke = "#1e40af";
                          strokeWidth = "1.5";
                        } else if (isHovered) {
                          fill = "#3b82f6"; // Blue 500
                          stroke = "#1d4ed8";
                          strokeWidth = "1.2";
                        } else if (destMatch?.isHq) {
                          fill = "#60a5fa"; // Bright blue for HQ
                          stroke = "#2563eb";
                          strokeWidth = "1";
                        } else {
                          fill = "#93c5fd"; // Soft sky-blue for partner destinations
                          stroke = "#3b82f6";
                          strokeWidth = "1";
                        }
                      }

                      return (
                        <path
                          key={country.id}
                          id={country.id}
                          d={country.d}
                          fill={fill}
                          stroke={stroke}
                          strokeWidth={strokeWidth}
                          strokeLinejoin="round"
                          className={`transition-colors duration-200 ${
                            isDest ? "cursor-pointer hover:opacity-90" : ""
                          }`}
                          onClick={() => {
                            if (destMatch) setSelectedId(destMatch.id);
                          }}
                          onMouseEnter={() => {
                            if (destMatch) setHoveredId(destMatch.id);
                          }}
                          onMouseLeave={() => setHoveredId(null)}
                        />
                      );
                    })}
                  </g>

                  {/* Connecting Bridge Route Arcs from Germany HQ to other destinations */}
                  {DESTINATIONS.filter((d) => !d.isHq).map((dest) => {
                    const isArcActive =
                      selectedId === dest.id || selectedId === "germany";
                    const midX = (hqCoord.x + dest.pin.x) / 2;
                    const midY = (hqCoord.y + dest.pin.y) / 2 - 25;
                    const pathD = `M ${hqCoord.x},${hqCoord.y} Q ${midX},${midY} ${dest.pin.x},${dest.pin.y}`;

                    return (
                      <path
                        key={`arc-${dest.id}`}
                        d={pathD}
                        fill="none"
                        stroke={isArcActive ? "#1d4ed8" : "#94a3b8"}
                        strokeWidth={isArcActive ? "2" : "1.2"}
                        strokeDasharray={isArcActive ? "4 3" : "2 3"}
                        strokeOpacity={isArcActive ? 0.95 : 0.45}
                        className={isArcActive ? "animate-pulse" : ""}
                      />
                    );
                  })}

                  {/* Real City Markers on the Map */}
                  {DESTINATIONS.map((dest) => {
                    const isSelected = selectedId === dest.id;
                    const isHq = dest.isHq;

                    return (
                      <g
                        key={`pin-${dest.id}`}
                        className="cursor-pointer group"
                        onClick={() => setSelectedId(dest.id)}
                        onMouseEnter={() => setHoveredId(dest.id)}
                        onMouseLeave={() => setHoveredId(null)}
                      >
                        {/* Outer Radar Pulse Ring */}
                        {isSelected && (
                          <circle
                            cx={dest.pin.x}
                            cy={dest.pin.y}
                            r="15"
                            fill="none"
                            stroke={isHq ? "#f59e0b" : "#1d4ed8"}
                            strokeWidth="1.5"
                            className="animate-ping opacity-60"
                          />
                        )}

                        {/* Mid Halo */}
                        <circle
                          cx={dest.pin.x}
                          cy={dest.pin.y}
                          r={isSelected ? "9" : "6"}
                          fill={isHq ? "#fef3c7" : isSelected ? "#dbeafe" : "#eff6ff"}
                          stroke={isHq ? "#d97706" : "#2563eb"}
                          strokeWidth={isSelected ? "2" : "1.2"}
                          className="transition-all duration-300"
                        />

                        {/* Solid Pin Core */}
                        <circle
                          cx={dest.pin.x}
                          cy={dest.pin.y}
                          r={isSelected ? "4.5" : "3"}
                          fill={isHq ? "#b45309" : "#1d4ed8"}
                        />

                        {/* City Pin Floating Badge */}
                        <g
                          transform={`translate(${dest.pin.x + dest.badgeOffset.x}, ${
                            dest.pin.y + dest.badgeOffset.y
                          })`}
                        >
                          <rect
                            x="0"
                            y="0"
                            width={dest.isHq ? 82 : 56}
                            height="16"
                            rx="4"
                            fill={isSelected ? (isHq ? "#78350f" : "#1e40af") : "#ffffff"}
                            stroke={isSelected ? (isHq ? "#d97706" : "#1d4ed8") : "#cbd5e1"}
                            strokeWidth="1"
                            style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
                          />
                          <text
                            x="5"
                            y="11"
                            fill={isSelected ? "#ffffff" : "#1e293b"}
                            fontSize="8"
                            fontWeight="bold"
                            fontFamily="system-ui, sans-serif"
                          >
                            {dest.flag} {dest.nameEn.substring(0, 3).toUpperCase()}
                            {dest.isHq ? " (HQ)" : ""}
                          </text>
                        </g>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Bottom Quick Help Info */}
              <div className="mt-3 flex flex-wrap items-center justify-between text-[11px] text-gray-500 pt-3 border-t border-gray-100 gap-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-primary-600" />
                  {isDe
                    ? "Klicken Sie auf ein Land auf der Karte oder wählen Sie die Tabs."
                    : "Click on any country pin on the map or select from the tabs."}
                </span>
                <span className="text-gray-700 font-semibold">
                  {isDe
                    ? "Zentraler Standort: Frankfurt am Main, Deutschland"
                    : "Central Operations: Frankfurt am Main, Germany"}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Dynamic Destination Spotlight Card (5 Cols) */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="rounded-3xl border border-gray-200/90 bg-white p-6 shadow-md flex flex-col justify-between">
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
                <div className="relative h-40 sm:h-44 w-full rounded-2xl overflow-hidden mb-4 border border-gray-200 shadow-inner group">
                  <Image
                    src={activeDestination.image}
                    alt={`${activeDestination.nameEn} - Mattu Bridge Europe`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/75 via-transparent to-transparent" />
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
              {isDe ? "Akkreditierte Abschlüsse" : "Accredited Degrees"}
            </h4>
            <p className="text-[11px] text-gray-600 mt-0.5">
              {isDe
                ? "Bologna-konform: Bachelor, Master, Staatsexamen & Ausbildung."
                : "Bologna-compliant: Bachelor, Master, State Exams & Dual Training."}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:border-primary-200 transition-colors">
            <ShieldCheck className="h-5 w-5 text-primary-700 mb-2" />
            <h4 className="text-xs font-bold text-gray-900">
              {isDe ? "100% DSGVO-konform" : "100% GDPR Compliant"}
            </h4>
            <p className="text-[11px] text-gray-600 mt-0.5">
              {isDe
                ? "Strengster europäischer Datenschutz und transparente Prozesse."
                : "Strict European data privacy safeguards and integrity."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
