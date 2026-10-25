"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Globe,
  Building2,
  ShieldCheck,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { images } from "@/data/images";
import { useLanguage } from "@/context/LanguageContext";

interface DestinationData {
  id: string;
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
  highlightsEn: string[];
  highlightsDe: string[];
  educationLink: string;
  jobsLink: string;
}

const DESTINATIONS: DestinationData[] = [
  {
    id: "germany",
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
      "Mattu Bridge’s central headquarters is located in Frankfurt am Main. Germany offers tuition-free or low-cost higher education at world-renowned public universities, world-leading automotive & engineering industries, and the renowned Dual Vocational Training (Ausbildung) system.",
    descDe:
      "Der Hauptsitz von Mattu Bridge befindet sich in Frankfurt am Main. Deutschland bietet gebührenfreie oder extrem günstige Studiengänge an renommierten staatlichen Universitäten, weltführende Industrie und das renommierte duale Ausbildungssystem.",
    image: images.destinations.germany,
    isHq: true,
    pin: { x: 420, y: 310 },
    highlightsEn: [
      "Tuition-free public universities for international students",
      "18-month post-study work visa for graduates",
      "Direct pathway to German permanent residency (Niederlassungserlaubnis)",
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
      "Poland is one of Europe's fastest-growing economies and educational centres. It offers internationally accredited English-taught degrees in medicine, technology, and business at very affordable living and tuition costs.",
    descDe:
      "Polen zählt zu den wachstumsstärksten Volkswirtschaften und Bildungszentren Europas. Es bietet international akkreditierte englischsprachige Studiengänge in Medizin, Technologie und Wirtschaft bei sehr moderaten Lebenshaltungs- und Studienkosten.",
    image: images.destinations.poland,
    pin: { x: 540, y: 285 },
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
      "As an English-speaking European Union member state, Malta is an exceptionally attractive gateway for international students and professionals seeking British-style qualifications in a sunny, safe Mediterranean environment.",
    descDe:
      "Als englischsprachiges EU-Mitglied ist Malta das ideale Sprungbrett für internationale Studierende und Fachkräfte, die britisch geprägte Abschlüsse in einem sicheren Mittelmeerraum anstreben.",
    image: images.destinations.malta,
    pin: { x: 458, y: 550 },
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
      "Spain hosts some of the world's most prestigious, top-ranked business schools (IE, ESADE, IESE) and leading universities. It combines academic rigor with an unmatched lifestyle and extensive global alumni networks.",
    descDe:
      "Spanien beheimatet einige der weltbesten Business Schools (IE, ESADE, IESE) und Spitzenuniversitäten. Es verbindet erstklassige akademische Ausbildung mit hoher Lebensqualität und weltweitem Netzwerk.",
    image: images.destinations.spain,
    pin: { x: 235, y: 485 },
    highlightsEn: [
      "Consistently ranked among the top 10 global MBA & Master's programs",
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
      "Portugal has rapidly established itself as Europe's premier startup and tech hub, hosting the Web Summit and boasting state-of-the-art university research facilities with warm hospitality and high English proficiency.",
    descDe:
      "Portugal hat sich rasant als führender europäischer Startup- und Tech-Standort etabliert (Host des Web Summit) und überzeugt mit modernsten Universitäten, exzellenter Gastfreundschaft und hoher englischer Sprachkompetenz.",
    image: images.destinations.portugal,
    pin: { x: 135, y: 495 },
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
      "Hungary has a centuries-old tradition of higher education and is globally renowned for top-quality English-language medical, dental, and veterinary degrees that are fully accredited and recognized across the European Union.",
    descDe:
      "Ungarn blickt auf eine jahrhundertealte Bildungstradition zurück und ist weltweit renommiert für hochwertige englischsprachige Medizin-, Zahnmedizin- und Ingenieurabschlüsse mit EU-weiter Anerkennung.",
    image: images.destinations.hungary,
    pin: { x: 540, y: 390 },
    highlightsEn: [
      "World-class medical & health science faculties in English",
      "Fully accredited EU diplomas accepted across Germany & worldwide",
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

// Stylized Geographic Coordinates for Europe vector map
// viewBox: 0 0 850 640
const COUNTRY_PATHS = [
  // Portugal
  {
    id: "portugal",
    name: "Portugal",
    d: "M 120,465 L 148,460 L 152,488 L 148,532 L 122,536 L 115,502 Z",
    isDestination: true,
  },
  // Spain
  {
    id: "spain",
    name: "Spain",
    d: "M 152,460 L 225,432 L 285,432 L 295,465 L 290,505 L 248,548 L 195,555 L 152,532 L 152,488 Z",
    isDestination: true,
  },
  // France
  {
    id: "france",
    name: "France",
    d: "M 225,430 L 265,372 L 275,340 L 320,332 L 348,348 L 365,392 L 350,435 L 295,465 L 285,432 Z",
    isDestination: false,
  },
  // Germany
  {
    id: "germany",
    name: "Germany",
    d: "M 368,262 L 418,245 L 438,262 L 452,305 L 445,348 L 410,365 L 372,368 L 355,335 L 368,295 Z",
    isDestination: true,
  },
  // Poland
  {
    id: "poland",
    name: "Poland",
    d: "M 442,260 L 532,242 L 568,268 L 565,315 L 512,335 L 452,318 L 442,285 Z",
    isDestination: true,
  },
  // Czech Republic & Slovakia
  {
    id: "czech_slovakia",
    name: "Czechia & Slovakia",
    d: "M 435,325 L 505,320 L 545,342 L 535,365 L 458,362 L 435,340 Z",
    isDestination: false,
  },
  // Austria & Switzerland
  {
    id: "austria_swiss",
    name: "Austria & Switzerland",
    d: "M 355,385 L 458,370 L 485,382 L 472,408 L 388,415 L 352,405 Z",
    isDestination: false,
  },
  // Hungary
  {
    id: "hungary",
    name: "Hungary",
    d: "M 488,382 L 548,375 L 568,405 L 522,425 L 482,408 Z",
    isDestination: true,
  },
  // Italy
  {
    id: "italy",
    name: "Italy",
    d: "M 365,405 L 405,405 L 420,442 L 452,475 L 480,500 L 465,520 L 435,490 L 408,450 L 378,425 Z",
    isDestination: false,
  },
  // Sicily
  {
    id: "sicily",
    name: "Sicily",
    d: "M 435,510 L 465,510 L 452,532 Z",
    isDestination: false,
  },
  // Malta
  {
    id: "malta",
    name: "Malta",
    d: "M 454,545 L 466,545 L 464,556 L 452,556 Z",
    isDestination: true,
  },
  // United Kingdom
  {
    id: "uk",
    name: "United Kingdom",
    d: "M 252,228 L 285,225 L 295,285 L 265,322 L 235,302 L 248,260 Z",
    isDestination: false,
  },
  // Ireland
  {
    id: "ireland",
    name: "Ireland",
    d: "M 205,258 L 232,255 L 228,295 L 198,288 Z",
    isDestination: false,
  },
  // Scandinavia (Norway & Sweden)
  {
    id: "scandinavia",
    name: "Nordics",
    d: "M 395,95 L 465,85 L 505,130 L 475,235 L 438,230 L 405,190 L 378,145 Z",
    isDestination: false,
  },
  // Denmark
  {
    id: "denmark",
    name: "Denmark",
    d: "M 405,208 L 428,205 L 422,238 L 402,235 Z",
    isDestination: false,
  },
  // Benelux (Netherlands & Belgium)
  {
    id: "benelux",
    name: "Benelux",
    d: "M 338,295 L 368,285 L 365,335 L 332,328 Z",
    isDestination: false,
  },
  // Romania & Balkans
  {
    id: "romania_balkans",
    name: "Southeastern Europe",
    d: "M 548,375 L 635,372 L 642,425 L 575,445 L 525,425 Z M 482,410 L 535,428 L 542,495 L 498,465 Z",
    isDestination: false,
  },
  // Greece
  {
    id: "greece",
    name: "Greece",
    d: "M 532,495 L 572,492 L 565,555 L 528,542 Z",
    isDestination: false,
  },
  // Baltics
  {
    id: "baltics",
    name: "Baltic States",
    d: "M 515,195 L 565,190 L 565,245 L 515,240 Z",
    isDestination: false,
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
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-[#0a1628] to-gray-950 py-16 sm:py-24 text-white border-y border-white/10">
      {/* Background Decorative Grid & Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a5f_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary-600/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-white/10 gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-md mb-3">
              <Globe className="h-3.5 w-3.5 text-emerald-400 animate-pulse" />
              <span>
                {isDe
                  ? "EUROPÄISCHE PRÄSENZ & NETZWERK"
                  : "EUROPEAN PRESENCE & NETWORK"}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white leading-tight">
              {isDe ? (
                <>
                  Unser europäisches Netzwerk:{" "}
                  <span className="text-emerald-300">
                    6 Kernländer im Überblick
                  </span>
                </>
              ) : (
                <>
                  Our European Network:{" "}
                  <span className="text-emerald-300">
                    6 Core Study & Career Hubs
                  </span>
                </>
              )}
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-gray-300 leading-relaxed">
              {isDe
                ? "Interaktive Europakarte unserer verifizierten Hochschul- und Arbeitgeberkooperationen. Wählen Sie ein Zielland aus, um Studienprogramme, Aufenthaltsoptionen und Karrierechancen zu erkunden."
                : "Interactive map of our verified academic pathways and employment networks across Europe. Select a destination to explore accredited degrees, student visa rights, and post-study opportunities."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/education"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-white/20 backdrop-blur-md transition-all shadow-md"
            >
              <GraduationCap className="h-4 w-4 text-emerald-300" />
              <span>{isDe ? "Alle Studiengänge" : "All Study Programmes"}</span>
              <ChevronRight className="h-3.5 w-3.5 opacity-70" />
            </Link>
          </div>
        </div>

        {/* Quick Country Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {DESTINATIONS.map((dest) => {
            const isSelected = dest.id === selectedId;
            return (
              <button
                key={dest.id}
                onClick={() => setSelectedId(dest.id)}
                className={`flex items-center gap-2.5 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shadow-sm border ${
                  isSelected
                    ? "bg-emerald-500 text-gray-950 border-emerald-400 font-bold shadow-emerald-500/20 scale-[1.03]"
                    : "bg-white/5 text-gray-200 border-white/10 hover:bg-white/15 hover:text-white"
                }`}
              >
                <span className="text-base">{dest.flag}</span>
                <span>{isDe ? dest.nameDe : dest.nameEn}</span>
                {dest.isHq && (
                  <span
                    className={`rounded px-1.5 py-0.5 text-[9.5px] uppercase font-bold tracking-wider ${
                      isSelected
                        ? "bg-gray-950 text-emerald-300"
                        : "bg-emerald-500/20 text-emerald-300"
                    }`}
                  >
                    HQ
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Main Content Grid: Interactive Europe Map + Spotlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Vector Map (7 Cols) */}
          <div className="lg:col-span-7 xl:col-span-7">
            <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-gray-900/90 via-primary-950/60 to-gray-950/90 p-4 sm:p-6 backdrop-blur-xl shadow-2xl overflow-hidden">
              {/* Map Ambient Top Bar */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-semibold text-gray-200">
                    {isDe
                      ? "Mattu Bridge Mobilitätsnetzwerk"
                      : "Mattu Bridge Mobility Network"}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    {isDe ? "Hauptsitz" : "Central HQ"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    {isDe ? "Partnerland" : "Destinations"}
                  </span>
                </div>
              </div>

              {/* The SVG Europe Map */}
              <div className="relative w-full aspect-[4/3.1] sm:aspect-[4/3] flex items-center justify-center">
                <svg
                  viewBox="80 65 630 535"
                  className="w-full h-full select-none"
                  style={{ filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.4))" }}
                >
                  <defs>
                    {/* Glowing filter */}
                    <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>

                    {/* Gradient for Connecting Arcs */}
                    <linearGradient id="bridgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>

                  {/* Connecting Bridge Route Arcs from Germany HQ to other destinations */}
                  {DESTINATIONS.filter((d) => !d.isHq).map((dest) => {
                    const isArcActive =
                      selectedId === dest.id || selectedId === "germany";
                    // Calculate a curved quadratic bezier control point
                    const midX = (hqCoord.x + dest.pin.x) / 2;
                    const midY = (hqCoord.y + dest.pin.y) / 2 - 35;
                    const pathD = `M ${hqCoord.x},${hqCoord.y} Q ${midX},${midY} ${dest.pin.x},${dest.pin.y}`;

                    return (
                      <g key={`arc-${dest.id}`}>
                        <path
                          d={pathD}
                          fill="none"
                          stroke={isArcActive ? "#34d399" : "#38bdf8"}
                          strokeWidth={isArcActive ? "2" : "1.2"}
                          strokeDasharray={isArcActive ? "4 4" : "2 4"}
                          strokeOpacity={isArcActive ? 0.9 : 0.3}
                          className={isArcActive ? "animate-pulse" : ""}
                        />
                      </g>
                    );
                  })}

                  {/* Render Country SVG Polygons */}
                  {COUNTRY_PATHS.map((c) => {
                    const isSelected = selectedId === c.id;
                    const isHovered = hoveredId === c.id;
                    const isDest = c.isDestination;

                    let fill = "#1e293b"; // Default slate
                    let stroke = "#334155";
                    let strokeWidth = "1";

                    if (isDest) {
                      fill = isSelected
                        ? "#065f46" // Emerald-800
                        : isHovered
                        ? "#0f766e"
                        : "#134e4a"; // Teal-900
                      stroke = isSelected ? "#34d399" : "#2dd4bf";
                      strokeWidth = isSelected ? "2" : "1.2";
                    }

                    return (
                      <path
                        key={c.id}
                        d={c.d}
                        fill={fill}
                        stroke={stroke}
                        strokeWidth={strokeWidth}
                        filter={isSelected ? "url(#mapGlow)" : undefined}
                        className={`transition-colors duration-300 ${
                          isDest ? "cursor-pointer hover:brightness-125" : ""
                        }`}
                        onClick={() => {
                          if (isDest) setSelectedId(c.id);
                        }}
                        onMouseEnter={() => isDest && setHoveredId(c.id)}
                        onMouseLeave={() => setHoveredId(null)}
                      />
                    );
                  })}

                  {/* Glowing Destination Pins & City Markers */}
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
                            r="18"
                            fill="none"
                            stroke={isHq ? "#fbbf24" : "#34d399"}
                            strokeWidth="1.5"
                            className="animate-ping opacity-60"
                          />
                        )}

                        {/* Mid Halo */}
                        <circle
                          cx={dest.pin.x}
                          cy={dest.pin.y}
                          r={isSelected ? "11" : "7"}
                          fill={isHq ? "#d97706" : isSelected ? "#059669" : "#0f766e"}
                          fillOpacity="0.45"
                          stroke={isHq ? "#f59e0b" : "#34d399"}
                          strokeWidth={isSelected ? "2" : "1"}
                          className="transition-all duration-300"
                        />

                        {/* Solid Pin Core */}
                        <circle
                          cx={dest.pin.x}
                          cy={dest.pin.y}
                          r={isSelected ? "5" : "3.5"}
                          fill={isHq ? "#fef08a" : "#6ee7b7"}
                          stroke="#022c22"
                          strokeWidth="1.5"
                        />

                        {/* City Pin Floating Badge */}
                        <g transform={`translate(${dest.pin.x + 8}, ${dest.pin.y - 12})`}>
                          <rect
                            x="0"
                            y="0"
                            width={dest.isHq ? 86 : 64}
                            height="18"
                            rx="5"
                            fill="#020617"
                            fillOpacity="0.88"
                            stroke={isSelected ? (isHq ? "#fbbf24" : "#34d399") : "#475569"}
                            strokeWidth={isSelected ? "1.5" : "0.75"}
                          />
                          <text
                            x="6"
                            y="12"
                            fill="#f8fafc"
                            fontSize="8.5"
                            fontWeight={isSelected ? "bold" : "600"}
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
              <div className="mt-3 flex flex-wrap items-center justify-between text-[11px] text-gray-400 pt-3 border-t border-white/10 gap-2">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                  {isDe
                    ? "Klicken Sie auf ein Land auf der Karte oder wählen Sie die Tabs."
                    : "Click on any country pin on the map or select from the tabs."}
                </span>
                <span className="text-gray-300 font-medium">
                  {isDe
                    ? "Frankfurt am Main ↔ Ganz Europa vernetzt"
                    : "Frankfurt am Main ↔ European Mobility"}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Dynamic Destination Spotlight Card (5 Cols) */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-primary-950/95 p-6 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
              <div>
                {/* Header with Flag & Role */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{activeDestination.flag}</span>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {isDe ? activeDestination.nameDe : activeDestination.nameEn}
                      </h3>
                      {activeDestination.isHq && (
                        <span className="rounded-md border border-amber-400/30 bg-amber-500/15 px-2 py-0.5 text-[10.5px] font-bold text-amber-300">
                          {isDe ? "HAUPTSITZ" : "HEADQUARTERS"}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-emerald-400 mt-1 flex items-center gap-1">
                      <MapPin className="h-3 w-3 flex-shrink-0" />
                      <span>{isDe ? activeDestination.cityDe : activeDestination.cityEn}</span>
                    </p>
                  </div>

                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold text-gray-200 border border-white/10 backdrop-blur-md">
                    {isDe ? activeDestination.tagDe : activeDestination.tagEn}
                  </span>
                </div>

                {/* Country Photo Preview */}
                <div className="relative h-36 sm:h-44 w-full rounded-2xl overflow-hidden mb-4 border border-white/15 shadow-inner group">
                  <Image
                    src={activeDestination.image}
                    alt={`${activeDestination.nameEn} - Mattu Bridge Europe`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/85 via-gray-950/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white/90 drop-shadow">
                    {isDe ? activeDestination.roleDe : activeDestination.roleEn}
                  </div>
                </div>

                {/* Overview Description */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
                  {isDe ? activeDestination.descDe : activeDestination.descEn}
                </p>

                {/* Key Highlights Checklist */}
                <div className="space-y-2 mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    {isDe ? "Schlüsselvorteile & Profil" : "Key Advantages & Eligibility"}
                  </p>
                  {(isDe
                    ? activeDestination.highlightsDe
                    : activeDestination.highlightsEn
                  ).map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-gray-200"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row gap-2.5">
                <Link
                  href={activeDestination.educationLink}
                  className="btn-primary flex-1 justify-center !py-2.5 text-xs font-bold shadow-lg shadow-primary-900/40"
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
                  className="btn-secondary !border-white/20 !bg-white/10 !text-white hover:!bg-white/20 flex-1 justify-center !py-2.5 text-xs font-semibold"
                >
                  <Briefcase className="h-4 w-4" />
                  <span>{isDe ? "Karrierechancen" : "Job Opportunities"}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Assurance Cards */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
            <Building2 className="h-5 w-5 text-emerald-400 mb-2" />
            <h4 className="text-xs font-bold text-white">
              {isDe ? "Deutscher Hauptsitz" : "German Headquarters"}
            </h4>
            <p className="text-[11px] text-gray-400 mt-0.5">
              {isDe
                ? "Frankfurt am Main – europäisches Finanz- & Rechtszentrum."
                : "Frankfurt am Main – Europe's financial & legal hub."}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
            <Globe className="h-5 w-5 text-emerald-400 mb-2" />
            <h4 className="text-xs font-bold text-white">
              {isDe ? "Schengen-Mobilität" : "Schengen Mobility"}
            </h4>
            <p className="text-[11px] text-gray-400 mt-0.5">
              {isDe
                ? "Grenzenloses Reisen und Studienaufenthalte im gesamten EU-Raum."
                : "Unrestricted travel and study exchange across member states."}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
            <GraduationCap className="h-5 w-5 text-emerald-400 mb-2" />
            <h4 className="text-xs font-bold text-white">
              {isDe ? "Akkreditierte Abschlüsse" : "Accredited Degrees"}
            </h4>
            <p className="text-[11px] text-gray-400 mt-0.5">
              {isDe
                ? "Bologna-konform: Bachelor, Master, Staatsexamen & Ausbildung."
                : "Bologna-compliant: Bachelor, Master, State Exams & Dual Training."}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
            <ShieldCheck className="h-5 w-5 text-emerald-400 mb-2" />
            <h4 className="text-xs font-bold text-white">
              {isDe ? "100% DSGVO-konform" : "100% GDPR Compliant"}
            </h4>
            <p className="text-[11px] text-gray-400 mt-0.5">
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
