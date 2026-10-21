export interface JobListing {
  id: string;
  title: string;
  employer: string;
  isVerified: boolean;
  category: string;
  country: string;
  location: string;
  type: "Full-Time" | "Part-Time" | "Contract" | "Temporary";
  salaryRange?: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  languages: string[];
  datePosted: string;
  deadline?: string;
  isApproved: boolean;
}

export const initialJobListings: JobListing[] = [
  {
    id: "job-01",
    title: "Warehouse Logistics Specialist",
    employer: "Verified Partner Logistics GmbH",
    isVerified: true,
    category: "Logistics & Transport",
    country: "Germany",
    location: "Frankfurt am Main, Hesse",
    type: "Full-Time",
    salaryRange: "€2,600 – €3,200 / month gross (subject to experience)",
    description:
      "Responsible for managing incoming freight, inventory tracking using modern warehouse management systems, and ensuring timely dispatch across European distribution channels.",
    responsibilities: [
      "Operate digital inventory logging systems and barcode scanners",
      "Coordinate with incoming and outgoing transport carriers",
      "Adhere to German health and safety standards in warehouse operations",
    ],
    qualifications: [
      "Experience in logistics, supply chain, or warehousing",
      "Forklift certificate (Staplerschein) is an advantage",
      "High reliability and ability to work in team shifts",
    ],
    languages: ["German (A2-B1)", "English (Conversational)"],
    datePosted: "2026-03-15",
    deadline: "2026-05-30",
    isApproved: true,
  },
  {
    id: "job-02",
    title: "Professional Driver (Category CE / Code 95)",
    employer: "Continental Freight Services",
    isVerified: true,
    category: "Logistics & Transport",
    country: "Germany",
    location: "Bremen & Lower Saxony",
    type: "Full-Time",
    salaryRange: "€3,000 – €3,700 / month gross + overtime & allowances",
    description:
      "Long-distance and regional commercial cargo transportation within Germany and neighboring EU countries. Modern fleet equipped with latest telematics.",
    responsibilities: [
      "Safe operation of 40-ton articulated vehicles",
      "Inspection of vehicles before and after journey",
      "Ensuring proper cargo securing and delivery documentation",
    ],
    qualifications: [
      "EU Driving Licence Category CE",
      "Valid Driver Qualification Card (Code 95)",
      "Digital Tachograph Card",
      "Minimum 1 year verifiable commercial driving experience",
    ],
    languages: ["Basic German or English"],
    datePosted: "2026-03-18",
    deadline: "2026-06-15",
    isApproved: true,
  },
  {
    id: "job-03",
    title: "Healthcare Support Assistant (Pflegehelfer/in)",
    employer: "Regional Care Group Germany",
    isVerified: true,
    category: "Healthcare",
    country: "Germany",
    location: "Munich, Bavaria",
    type: "Full-Time",
    salaryRange: "€2,400 – €2,900 / month gross",
    description:
      "Assisting elderly and geriatric residents with daily care, nutrition, mobility support, and companionship in an established residential community.",
    responsibilities: [
      "Support qualified nursing staff in daily care routines",
      "Assist residents with mobility and recreation",
      "Maintain respectful and compassionate resident communication",
    ],
    qualifications: [
      "Introductory nursing training or previous caregiving experience",
      "Empathy, patience, and dedication to social welfare",
      "Willingness to undertake further qualification in Germany",
    ],
    languages: ["German (B1 minimum required)"],
    datePosted: "2026-03-22",
    deadline: "2026-07-01",
    isApproved: true,
  },
  {
    id: "job-04",
    title: "Hospitality & Front Office Coordinator",
    employer: "European Hotel & Resort Partners",
    isVerified: true,
    category: "Hospitality",
    country: "Austria",
    location: "Vienna",
    type: "Full-Time",
    salaryRange: "€2,200 – €2,700 / month gross",
    description:
      "Managing guest check-ins, reservations, international guest inquiries, and administrative liaison in a boutique central Vienna hotel.",
    responsibilities: [
      "Guest arrival greeting and room assignment",
      "Responding to international booking inquiries via email and phone",
      "Coordinating with housekeeping and dining departments",
    ],
    qualifications: [
      "Diploma or degree in hospitality management or customer service",
      "Familiarity with property management systems (PMS)",
      "Professional demeanor and customer service mindset",
    ],
    languages: ["English (Fluent)", "German (B1/B2 preferred)"],
    datePosted: "2026-03-25",
    deadline: "2026-06-30",
    isApproved: true,
  },
];

export const jobCategories = [
  "All Categories",
  "Logistics & Transport",
  "Healthcare",
  "Hospitality",
  "Engineering & Technical",
  "IT & Digital Services",
  "General Employment",
];

export const employmentCountries = ["All Countries", "Germany", "Austria", "Netherlands", "Across Europe"];
