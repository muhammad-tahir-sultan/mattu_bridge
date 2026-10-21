export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Education Consultancy",
    href: "/education",
    children: [
      {
        label: "Study Opportunities",
        href: "/education",
        description: "Explore higher education & Ausbildung in Germany & Europe",
      },
      {
        label: "Submit Study Enquiry",
        href: "/education#enquiry-form",
        description: "Submit preferences with or without documents",
      },
    ],
  },
  {
    label: "Jobs & Recruitment",
    href: "/jobs",
    children: [
      {
        label: "Recruitment Overview",
        href: "/jobs",
        description: "Employment placement & employer solutions",
      },
      {
        label: "Register as Job Seeker",
        href: "/jobs/job-seeker-registration",
        description: "Submit your professional profile & skills",
      },
      {
        label: "Post a Job / Employer Enquiry",
        href: "/jobs/employer-inquiry",
        description: "Submit vacancies & recruitment requests",
      },
      {
        label: "Job Listings",
        href: "/jobs/listings",
        description: "Browse approved vacancies and opportunities",
      },
    ],
  },
  { label: "International Events", href: "/events" },
  { label: "Contact Us", href: "/contact" },
];

export const footerLinks = {
  pillars: [
    { label: "Education Consultancy", href: "/education" },
    { label: "Jobs & Recruitment", href: "/jobs" },
    { label: "Job Listings", href: "/jobs/listings" },
    { label: "International Events", href: "/events" },
    { label: "Job Seeker Registration", href: "/jobs/job-seeker-registration" },
    { label: "Employer Job Submission", href: "/jobs/employer-inquiry" },
  ],
  company: [
    { label: "About Mattu Bridge", href: "/about" },
    { label: "Director's Welcome", href: "/about#director-message" },
    { label: "Contact & Enquiries", href: "/contact" },
    { label: "Admin Dashboard", href: "/admin" },
  ],
  legal: [
    { label: "Privacy Policy (Datenschutz)", href: "/privacy-policy" },
    { label: "Legal Notice (Impressum)", href: "/impressum" },
    { label: "Terms & Conditions (AGB)", href: "/terms" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
};
