export const siteConfig = {
  name: "Mattu Bridge",
  legalName: "Mattu Bridge",
  director: "IA Mattu",
  directorTitle: "Director, Mattu Bridge",
  email: "Info@mattubridge.de",
  whatsapp: "+49 15 905 664 369",
  whatsappLink: "https://wa.me/4915905664369",
  location: "Germany",
  servingRegion: "Germany & Across Europe",
  domain: "https://mattubridge.de",
  tagline: "Connecting Education, Careers & International Opportunities",
  description:
    "Mattu Bridge is a registered consultancy business in Germany, bringing together educational consultancy, employment placement and recruitment, and international educational and social initiatives through one professional platform. We connect people with opportunities and institutions through trust, collaboration, and equal opportunities.",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61594515052924",
    tiktok: "https://www.tiktok.com/@mattu.bridge",
    instagram: "https://www.instagram.com/mattu.bridge?xtok=MWF4b3NxbzN3d3o4Nw%3D%3D&utm_source=qr",
  },
  socialLinks: [
    {
      id: "facebook" as const,
      name: "Facebook",
      handle: "Mattu Bridge",
      url: "https://www.facebook.com/profile.php?id=61594515052924",
      colorHex: "#1877F2",
    },
    {
      id: "instagram" as const,
      name: "Instagram",
      handle: "@mattu.bridge",
      url: "https://www.instagram.com/mattu.bridge?xtok=MWF4b3NxbzN3d3o4Nw%3D%3D&utm_source=qr",
      colorHex: "#E4405F",
    },
    {
      id: "tiktok" as const,
      name: "TikTok",
      handle: "@mattu.bridge",
      url: "https://www.tiktok.com/@mattu.bridge",
      colorHex: "#000000",
    },
  ],
};

export const directorMessage = {
  heading: "Director's Welcome Message",
  paragraphs: [
    "Welcome to Mattu Bridge.",
    "My professional journey has been shaped by a longstanding commitment to human rights, education, equal opportunities, social inclusion, and the belief that every individual deserves the opportunity to build a better future.",
    "Over the past two decades, I have gained experience in human rights advocacy, modern slavery, education, community integration, and initiatives supporting marginalised and underserved communities. Through my involvement with community-based organisations and humanitarian initiatives, I have witnessed both the challenges people face and the transformative power of education, meaningful employment, and access to opportunities.",
    "My international exposure, including visits to and exploration of more than 40 countries, has broadened my understanding of different cultures, communities, educational systems, and professional environments. These experiences have strengthened my belief that connecting people with the right opportunities can create lasting and positive change.",
    "Driven by this experience and a belief in equal opportunities, I established Mattu Bridge to connect people with meaningful educational and professional pathways while fostering international cooperation.",
    "Our three core pillars — Educational Consultancy, Employment Placement/Recruitment, and International Events — reflect our commitment to empowering individuals, connecting institutions and organisations, and creating opportunities across Germany, Europe, and beyond.",
    "For me, Mattu Bridge is more than a business; it is a continuation of a journey built on purpose, inclusion, and the belief that education, meaningful employment, and international collaboration can create lasting positive change.",
    "I warmly welcome students, job seekers, employers, institutions, and partners to join us in building bridges to new opportunities.",
    "Let us connect people, opportunities, and possibilities.",
  ],
  signOff: "I.A Mattu",
  title: "Director, Mattu Bridge",
};

export const businessPillars = [
  {
    id: "education",
    title: "Educational Consultancy",
    subtitle: "Study Opportunities in Germany & Europe",
    description:
      "Explore educational opportunities in Germany and across Europe and submit your study enquiry. Guidance for university degrees, vocational Ausbildung, and foundation programmes.",
    cta: "Explore Education",
    href: "/education",
    iconName: "GraduationCap",
    color: "from-blue-600 to-indigo-700",
  },
  {
    id: "jobs",
    title: "Jobs & Recruitment",
    subtitle: "Employment Placement & Employer Services",
    description:
      "Register your interest in employment opportunities or submit recruitment requirements as an employer. Transparent matching for qualified candidates and reputable enterprises.",
    cta: "Explore Jobs & Hiring",
    secondaryCta: "Post a Job",
    href: "/jobs",
    secondaryHref: "/jobs/employer-inquiry",
    iconName: "Briefcase",
    color: "from-blue-700 to-blue-900",
  },
  {
    id: "events",
    title: "International Events",
    subtitle: "Conferences, Seminars & Cooperation",
    description:
      "Discover initiatives and opportunities related to education, human rights, youth development, seminars, and constructive international cooperation.",
    cta: "Explore International Events",
    href: "/events",
    iconName: "Globe",
    color: "from-amber-600 to-amber-700",
  },
];

export const complianceDisclaimer =
  "Mattu Bridge acts as a professional guidance and recruitment facilitator based in Germany. We do not provide admission guarantees, job interview guarantees, visa approvals, or work permits. All applications are subject to institutional criteria and applicable laws.";
