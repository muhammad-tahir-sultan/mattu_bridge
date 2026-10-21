export interface InternationalEvent {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  format: "In-Person" | "Online / Webinar" | "Hybrid";
  location: string;
  organizers: string;
  description: string;
  highlights: string[];
  registrationDeadline: string;
  status: "Upcoming" | "Announced" | "Planning";
}

export const internationalEvents: InternationalEvent[] = [
  {
    id: "evt-01",
    title: "European Higher Education & Career Pathways Seminar",
    category: "Educational Seminars & Conferences",
    date: "2026-05-18",
    time: "14:00 - 17:30 CET",
    format: "Hybrid",
    location: "Frankfurt am Main, Germany & Virtual Zoom Stream",
    organizers: "Mattu Bridge in cooperation with European Academic Advisors",
    description:
      "A comprehensive seminar exploring modern admission routes, vocational Ausbildung qualifications, and cross-border academic recognition across European institutions.",
    highlights: [
      "Overview of public universities vs applied science universities (Fachhochschulen)",
      "Understanding German language certification levels (TestDaF, Goethe-Zertifikat)",
      "Q&A session with alumni and academic counsellors",
    ],
    registrationDeadline: "2026-05-10",
    status: "Upcoming",
  },
  {
    id: "evt-02",
    title: "Youth Development & Equal Educational Opportunities Forum",
    category: "Youth Development & Engagement",
    date: "2026-06-25",
    time: "10:00 - 16:00 CET",
    format: "Online / Webinar",
    location: "Virtual Interactive Forum",
    organizers: "Mattu Bridge International Initiatives",
    description:
      "Focused dialogue on empowering international youth through accessible vocational pathways, skills development, and intercultural exchange initiatives.",
    highlights: [
      "Keynote address on equal opportunity and education as a fundamental right",
      "Interactive breakout rooms for prospective students and young professionals",
      "Guidance on building verified international credentials",
    ],
    registrationDeadline: "2026-06-18",
    status: "Upcoming",
  },
  {
    id: "evt-03",
    title: "Cross-Border Employment & Fair Recruitment Practices Workshop",
    category: "Workshops & Knowledge-Sharing",
    date: "2026-07-14",
    time: "15:00 - 18:00 CET",
    format: "Online / Webinar",
    location: "Virtual Conference Room",
    organizers: "Mattu Bridge Employment Division",
    description:
      "For employers and talent scouts discussing ethical recruitment standards, compliance with German labor legislation, and transparent onboarding for international specialists.",
    highlights: [
      "Navigating the German Skilled Immigration Act (Fachkräfteeinwanderungsgesetz)",
      "Best practices for transparent employer-employee matching",
      "Legal safeguards against exploitative hiring",
    ],
    registrationDeadline: "2026-07-05",
    status: "Planning",
  },
];

export const eventCategories = [
  "All Categories",
  "Educational Seminars & Conferences",
  "Human Rights Awareness",
  "Youth Development & Engagement",
  "Workshops & Knowledge-Sharing",
  "Community Dialogue & Cooperation",
];
