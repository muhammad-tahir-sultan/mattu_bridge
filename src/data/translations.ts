export type Locale = "en" | "de";

export interface TranslationSchema {
  common: {
    brandName: string;
    tagline: string;
    director: string;
    directorTitle: string;
    topBannerText: string;
    adminPortal: string;
    contactUs: string;
    registerJobSeeker: string;
    postJob: string;
    exploreEducation: string;
    jobsAndRecruitment: string;
    internationalEvents: string;
    viewAll: string;
    exploreMore: string;
    learnMore: string;
    submitEnquiry: string;
    verifiedWhatsApp: string;
    whatsappSupport: string;
    whatsappChatPrompt: string;
    whatsappOnline: string;
    gdprCompliant: string;
    germanCompliance: string;
    zeroGuarantees: string;
    servingNotice: string;
    followUs: string;
    socialChannels: string;
  };
  nav: {
    home: string;
    about: string;
    education: string;
    studyOpportunities: string;
    studyOpportunitiesDesc: string;
    submitStudyEnquiry: string;
    submitStudyEnquiryDesc: string;
    jobs: string;
    recruitmentOverview: string;
    recruitmentOverviewDesc: string;
    registerJobSeekerDesc: string;
    postJobDesc: string;
    jobListings: string;
    jobListingsDesc: string;
    events: string;
    contact: string;
    adminDashboard: string;
    language: string;
  };
  footer: {
    description: string;
    gdprNotice: string;
    coreServices: string;
    organization: string;
    legalCompliance: string;
    officialContact: string;
    importantInfo: string;
    disclaimer: string;
    copyright: string;
    privacy: string;
    impressum: string;
    terms: string;
    cookiePolicy: string;
    educationLink: string;
    jobsLink: string;
    eventsLink: string;
    jobSeekerLink: string;
    employerLink: string;
    aboutLink: string;
    directorLink: string;
    contactLink: string;
    followUs: string;
  };
  cookies: {
    title: string;
    desc: string;
    cookiePolicyLink: string;
    acceptAll: string;
    essentialOnly: string;
    customize: string;
    savePreferences: string;
    close: string;
    essentialTitle: string;
    essentialDesc: string;
    analyticsTitle: string;
    analyticsDesc: string;
  };
  directorMessage: {
    eyebrow: string;
    heading: string;
    badge: string;
    paragraphs: string[];
    signOff: string;
    title: string;
  };
  home: {
    badge: string;
    title: string;
    subtitle: string;
    ctaEducation: string;
    ctaJobs: string;
    ctaEvents: string;
    trust1: string;
    trust2: string;
    trust3: string;
    pillarsEyebrow: string;
    pillarsTitle: string;
    pillarsSubtitle: string;
    pillarEducationTitle: string;
    pillarEducationSubtitle: string;
    pillarEducationDesc: string;
    pillarEducationCta: string;
    pillarJobsTitle: string;
    pillarJobsSubtitle: string;
    pillarJobsDesc: string;
    pillarJobsCta: string;
    pillarJobsSecondaryCta: string;
    pillarEventsTitle: string;
    pillarEventsSubtitle: string;
    pillarEventsDesc: string;
    pillarEventsCta: string;
    whyChooseEyebrow: string;
    whyChooseTitle: string;
    whyChooseSubtitle: string;
    whyPoint1Title: string;
    whyPoint1Desc: string;
    whyPoint2Title: string;
    whyPoint2Desc: string;
    whyPoint3Title: string;
    whyPoint3Desc: string;
    whyPoint4Title: string;
    whyPoint4Desc: string;
    featuredJobsEyebrow: string;
    featuredJobsTitle: string;
    featuredJobsSubtitle: string;
    viewAllJobs: string;
    upcomingEventsEyebrow: string;
    upcomingEventsTitle: string;
    upcomingEventsSubtitle: string;
    viewAllEvents: string;
    contactBannerEyebrow: string;
    contactBannerTitle: string;
    contactBannerDesc: string;
    contactBannerCta: string;
    whatsappBannerCta: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    missionEyebrow: string;
    missionTitle: string;
    p1: string;
    p2: string;
    p3: string;
    coreValuesEyebrow: string;
    coreValuesTitle: string;
    value1Title: string;
    value1Desc: string;
    value2Title: string;
    value2Desc: string;
    value3Title: string;
    value3Desc: string;
    value4Title: string;
    value4Desc: string;
    complianceTitle: string;
    complianceDesc: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    channelsEyebrow: string;
    channelsTitle: string;
    channelsDesc: string;
    officialEmail: string;
    emailResponseNotice: string;
    verifiedWhatsApp: string;
    whatsappNotice: string;
    businessHours: string;
    hoursValue: string;
    hoursNotice: string;
    privacyNoticeTitle: string;
    privacyNoticeDesc: string;
    socialChannelsTitle: string;
    socialChannelsDesc: string;
    formTitle: string;
    formDesc: string;
  };
  education: {
    eyebrow: string;
    title: string;
    description: string;
    overviewEyebrow: string;
    overviewTitle: string;
    overviewSubtitle: string;
    formEyebrow: string;
    formTitle: string;
    formSubtitle: string;
    pathways: {
      title: string;
      description: string;
    }[];
    disclaimerTitle: string;
    disclaimerDesc: string;
  };
  jobs: {
    eyebrow: string;
    title: string;
    description: string;
    overviewEyebrow: string;
    overviewTitle: string;
    overviewSubtitle: string;
    forCandidatesTitle: string;
    forCandidatesDesc: string;
    candidateCta: string;
    forEmployersTitle: string;
    forEmployersDesc: string;
    employerCta: string;
    viewListingsCta: string;
    complianceTitle: string;
    complianceDesc: string;
  };
  events: {
    eyebrow: string;
    title: string;
    description: string;
    upcomingEyebrow: string;
    upcomingTitle: string;
    upcomingSubtitle: string;
    registerNow: string;
    viewDetails: string;
    formatHybrid: string;
    formatOnline: string;
    formatInPerson: string;
    deadline: string;
    keyHighlights: string;
  };
}

export const translations: Record<Locale, TranslationSchema> = {
  en: {
    common: {
      brandName: "Mattu Bridge",
      tagline: "Connecting Education, Careers & International Opportunities",
      director: "IA Mattu",
      directorTitle: "Director, Mattu Bridge",
      topBannerText: "Germany-Based Consultancy · Connecting Europe & Beyond",
      adminPortal: "Admin Portal",
      contactUs: "Contact Us",
      registerJobSeeker: "Job Seeker Registration",
      postJob: "Post a Job / Employer Enquiry",
      exploreEducation: "Explore Education Opportunities",
      jobsAndRecruitment: "Jobs & Recruitment",
      internationalEvents: "International Events",
      viewAll: "View All",
      exploreMore: "Explore More",
      learnMore: "Learn More",
      submitEnquiry: "Submit Enquiry",
      verifiedWhatsApp: "Verified WhatsApp",
      whatsappSupport: "WhatsApp Support",
      whatsappChatPrompt: "Chat with our Germany Team",
      whatsappOnline: "Online & Active",
      gdprCompliant: "GDPR Data Minimization",
      germanCompliance: "German Legal Notice Compliance",
      zeroGuarantees: "Verified German Advisory",
      servingNotice: "Operating from Germany · Serving Europe & International Applicants",
      followUs: "Follow Us",
      socialChannels: "Social Media Channels",
    },
    nav: {
      home: "Home",
      about: "About Us",
      education: "Education Consultancy",
      studyOpportunities: "Study Opportunities",
      studyOpportunitiesDesc: "Explore higher education & Ausbildung in Germany & Europe",
      submitStudyEnquiry: "Submit Study Enquiry",
      submitStudyEnquiryDesc: "Submit preferences with or without documents",
      jobs: "Jobs & Recruitment",
      recruitmentOverview: "Recruitment Overview",
      recruitmentOverviewDesc: "Employment placement & employer solutions",
      registerJobSeekerDesc: "Submit your professional profile & skills",
      postJobDesc: "Submit vacancies & recruitment requests",
      jobListings: "Job Listings",
      jobListingsDesc: "Browse approved vacancies and opportunities",
      events: "International Events",
      contact: "Contact Us",
      adminDashboard: "Admin Dashboard",
      language: "Language",
    },
    footer: {
      description:
        "Mattu Bridge is a registered consultancy business in Germany, bringing together educational consultancy, employment placement and recruitment, and international educational and social initiatives through one professional platform. We connect people with opportunities and institutions through trust, collaboration, and equal opportunities.",
      gdprNotice:
        "Operating in Germany with a strict commitment to transparent communication, GDPR compliance, and verifiable services.",
      coreServices: "Core Services",
      organization: "Organization",
      legalCompliance: "Legal & Compliance",
      officialContact: "Official Contact",
      importantInfo: "Important Information:",
      disclaimer:
        "Mattu Bridge acts as a professional guidance and recruitment facilitator based in Germany. We do not provide admission guarantees, job interview guarantees, visa approvals, or work permits. All applications are subject to institutional criteria and applicable laws.",
      copyright: "© 2026 Mattu Bridge. All rights reserved. Germany.",
      privacy: "Privacy Policy (Datenschutz)",
      impressum: "Legal Notice (Impressum)",
      terms: "Terms & Conditions (AGB)",
      cookiePolicy: "Cookie Policy",
      educationLink: "Education Consultancy",
      jobsLink: "Jobs & Recruitment",
      eventsLink: "International Events",
      jobSeekerLink: "Job Seeker Registration",
      employerLink: "Employer Job Submission",
      aboutLink: "About Mattu Bridge",
      directorLink: "Director's Welcome",
      contactLink: "Contact & Enquiries",
      followUs: "Connect & Follow Us",
    },
    cookies: {
      title: "Privacy & Cookie Consent",
      desc: "We use strictly necessary cookies to ensure the proper functionality of our website. Optional analytical cookies are disabled by default under GDPR rules. You can learn more in our",
      cookiePolicyLink: "Cookie Policy",
      acceptAll: "Accept All Cookies",
      essentialOnly: "Essential Only",
      customize: "Customize Preferences",
      savePreferences: "Save Preferences",
      close: "Close",
      essentialTitle: "Strictly Necessary Cookies",
      essentialDesc: "Required for core security, network management, and accessibility. Cannot be switched off.",
      analyticsTitle: "Analytics & Usage Cookies",
      analyticsDesc: "Helps us anonymously understand how visitors interact with our consultancy services.",
    },
    directorMessage: {
      eyebrow: "Leadership & Vision",
      heading: "Director's Welcome Message",
      badge: "Bridging Education, Employment & Cooperation",
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
    },
    home: {
      badge: "Germany-based · Serving Europe & Beyond",
      title: "Connecting Education, Careers & International Opportunities",
      subtitle:
        "Mattu Bridge is a registered consultancy business in Germany, bringing together educational consultancy, employment placement and recruitment, and international educational and social initiatives through one professional platform. We connect people with opportunities and institutions through trust, collaboration, and equal opportunities.",
      ctaEducation: "Explore Education Opportunities",
      ctaJobs: "Jobs & Recruitment",
      ctaEvents: "International Events",
      trust1: "GDPR Data Minimization",
      trust2: "German Legal Notice Compliance",
      trust3: "Direct German Advisory",
      pillarsEyebrow: "Our Three Core Pillars",
      pillarsTitle: "Professional European Gateway",
      pillarsSubtitle:
        "Mattu Bridge provides a single, structured point of contact for students, candidates, employers, and organizations seeking verified pathways.",
      pillarEducationTitle: "Educational Consultancy",
      pillarEducationSubtitle: "Study Opportunities in Germany & Europe",
      pillarEducationDesc:
        "Explore educational opportunities in Germany and across Europe and submit your study enquiry. Guidance for university degrees, vocational Ausbildung, and foundation programmes.",
      pillarEducationCta: "Explore Education",
      pillarJobsTitle: "Jobs & Recruitment",
      pillarJobsSubtitle: "Employment Placement & Employer Services",
      pillarJobsDesc:
        "Register your interest in employment opportunities or submit recruitment requirements as an employer. Transparent matching for qualified candidates and reputable enterprises.",
      pillarJobsCta: "Explore Jobs & Hiring",
      pillarJobsSecondaryCta: "Post a Job",
      pillarEventsTitle: "International Events",
      pillarEventsSubtitle: "Conferences, Seminars & Cooperation",
      pillarEventsDesc:
        "Discover initiatives and opportunities related to education, human rights, youth development, seminars, and constructive international cooperation.",
      pillarEventsCta: "Explore International Events",
      whyChooseEyebrow: "Why Mattu Bridge",
      whyChooseTitle: "Professionalism, Integrity & German Compliance",
      whyChooseSubtitle:
        "We operate under strict German commercial and data protection standards, delivering honest counsel without deceptive claims.",
      whyPoint1Title: "Established in Germany",
      whyPoint1Desc:
        "Located in Germany, operating with local regulatory adherence, verifiable corporate standards, and direct European institutional knowledge.",
      whyPoint2Title: "Authentic & Objective Guidance",
      whyPoint2Desc:
        "We provide thorough, realistic evaluations and dependable counsel tailored to your qualifications and career aspirations.",
      whyPoint3Title: "Strict GDPR Data Protection",
      whyPoint3Desc:
        "Your data is processed in accordance with European General Data Protection Regulations. Data minimization is strictly practiced.",
      whyPoint4Title: "Multi-Disciplinary Expertise",
      whyPoint4Desc:
        "Bridging academia, industry recruitment, and international civic cooperation for students, professionals, and corporate partners.",
      featuredJobsEyebrow: "Verified Opportunities",
      featuredJobsTitle: "Current Employment Opportunities in Germany",
      featuredJobsSubtitle:
        "Browse verified listings with transparent conditions, European legal compliance, and structured employer matching.",
      viewAllJobs: "View All Job Listings",
      upcomingEventsEyebrow: "International Initiatives",
      upcomingEventsTitle: "Upcoming Seminars & International Forums",
      upcomingEventsSubtitle:
        "Join academic dialogues, cross-border youth initiatives, and professional conferences organized by Mattu Bridge.",
      viewAllEvents: "View All Events & Conferences",
      contactBannerEyebrow: "Get in Touch",
      contactBannerTitle: "Ready to Discuss Your Educational or Professional Future?",
      contactBannerDesc:
        "Whether you are an aspiring student, experienced professional, or German employer, our team is ready to provide transparent assistance.",
      contactBannerCta: "Send Direct Enquiry",
      whatsappBannerCta: "Chat on WhatsApp (+49 15 905 664 369)",
    },
    about: {
      eyebrow: "Our Story & Purpose",
      title: "About Mattu Bridge",
      description:
        "A professional platform established in Germany to connect educational pathways, career opportunities, and constructive international dialogue.",
      missionEyebrow: "Our Mission & Foundation",
      missionTitle: "Creating Meaningful Connections Between People & Opportunities",
      p1: "Mattu Bridge was founded with a clear objective: to provide an accessible, transparent, and legally compliant European platform for students, job seekers, employers, and social initiatives.",
      p2: "Operating from Germany, our philosophy is rooted in equal opportunity, human dignity, and verified information. Rather than making unrealistic promises or advertising unverified agreements, we focus on genuine guidance, data minimization, and professional communication.",
      p3: "Whether guiding an international student through the complexities of higher education applications or helping a company identify qualified personnel, we adhere strictly to high standards of service and applicable German regulations.",
      coreValuesEyebrow: "Core Values",
      coreValuesTitle: "Principles That Guide Every Engagement",
      value1Title: "Integrity & Honesty",
      value1Desc: "Transparent, reliable guidance built on honest communication, verified information, and professional ethics.",
      value2Title: "Data Protection & Privacy",
      value2Desc: "Full GDPR compliance. Data is treated confidentially and never commercialized.",
      value3Title: "Equal Opportunity",
      value3Desc: "Empowering talent across borders regardless of background, promoting human rights and fair access.",
      value4Title: "European Excellence",
      value4Desc: "High German quality standards applied across educational counselling and recruitment services.",
      complianceTitle: "Legal Status & Compliance",
      complianceDesc:
        "Mattu Bridge operates as a consultancy registered in Germany. We adhere to the German Digital Services Act (DDG) and General Data Protection Regulation (GDPR).",
    },
    contact: {
      eyebrow: "Direct Communication",
      title: "Contact Mattu Bridge",
      description:
        "We welcome enquiries from prospective students, job seekers, employers, and international organizations. Reach out to our Germany desk.",
      channelsEyebrow: "Direct Contact Channels",
      channelsTitle: "Official Channels",
      channelsDesc:
        "For formal communications, study enquiries, or recruitment partnerships, please utilize our verified business contacts.",
      officialEmail: "Official Email",
      emailResponseNotice: "Expect a response within 1–2 business days.",
      verifiedWhatsApp: "Verified WhatsApp",
      whatsappNotice: "Available for direct applicant and partner coordination.",
      businessHours: "Business Hours",
      hoursValue: "Monday – Friday: 09:00 – 17:00 CET",
      hoursNotice: "Coordinating from Germany · Serving clients across Europe.",
      privacyNoticeTitle: "Privacy Notice",
      privacyNoticeDesc:
        "Your message is transmitted securely. We only collect details necessary to address your enquiry in line with GDPR guidelines.",
      socialChannelsTitle: "Social Media Channels",
      socialChannelsDesc: "Follow Mattu Bridge on Facebook, Instagram, and TikTok for the latest updates, opportunities, and international event announcements.",
      formTitle: "Send Us an Inquiry",
      formDesc: "Fill in the fields below and our representative will respond promptly.",
    },
    education: {
      eyebrow: "Educational Pathway Advisory",
      title: "Education Consultancy in Germany & Europe",
      description:
        "Comprehensive guidance for higher education, vocational training (Ausbildung), and preparatory courses across German and European universities.",
      overviewEyebrow: "Educational Spectrum",
      overviewTitle: "Structured Academic & Vocational Pathways",
      overviewSubtitle:
        "Navigate application prerequisites, language requirements, and degree structures with transparent, step-by-step counsel.",
      formEyebrow: "Student Advisory Form",
      formTitle: "Submit Your Educational Enquiry",
      formSubtitle: "Provide your academic background and preferred fields of study to receive tailored guidance.",
      pathways: [
        {
          title: "Study in Germany",
          description:
            "Germany is renowned worldwide for its tuition-free or low-cost public universities, engineering excellence, and dual vocational training. We help you explore suitable academic institutions and intake requirements.",
        },
        {
          title: "Study in Other European Countries",
          description:
            "Explore diverse English-taught undergraduate and graduate degrees across Austria, the Netherlands, France, and other European destinations.",
        },
        {
          title: "Undergraduate Study (Bachelor's)",
          description:
            "Guidance on secondary school qualification recognition (Abitur equivalence), university entrance requirements, and preparatory pathways.",
        },
        {
          title: "Postgraduate Study (Master's & PhD)",
          description:
            "Support for graduates seeking international specialization, research opportunities, and career-oriented Master of Science / Arts degrees.",
        },
        {
          title: "Dual Vocational Training (Ausbildung)",
          description:
            "Germany's unique paid apprenticeship framework combining classroom theory with hands-on company training in logistics, healthcare, IT, and hospitality.",
        },
        {
          title: "Preparatory Studies (Studienkolleg)",
          description:
            "Guidance for international applicants who require a one-year preparatory foundation course before qualifying for direct German university matriculation.",
        },
      ],
      disclaimerTitle: "Important Advisory Disclaimer",
      disclaimerDesc:
        "Mattu Bridge provides consultancy and application facilitation. We do NOT guarantee admission or visa issuance. Final admission decisions rest exclusively with university admissions offices and German diplomatic representations.",
    },
    jobs: {
      eyebrow: "Employment & Human Capital Solutions",
      title: "Jobs & Recruitment Facilitation",
      description:
        "Connecting qualified candidates with European employers through transparent recruitment processes and compliant employment frameworks.",
      overviewEyebrow: "Services for Both Sides",
      overviewTitle: "Structured Matching for Candidates & Employers",
      overviewSubtitle:
        "We serve job seekers seeking opportunities in Germany, as well as European businesses looking for motivated international talent.",
      forCandidatesTitle: "For Job Seekers",
      forCandidatesDesc:
        "Register your CV, professional certifications, and language proficiency to be considered for verified vacancies in logistics, healthcare, tech, and skilled trades.",
      candidateCta: "Register as Job Seeker",
      forEmployersTitle: "For Employers & Enterprises",
      forEmployersDesc:
        "Submit staffing requirements. We facilitate transparent screening, qualification checks, and smooth candidate introductions.",
      employerCta: "Post a Job / Employer Enquiry",
      viewListingsCta: "Browse Current Job Listings",
      complianceTitle: "Compliance & Ethical Recruitment Notice",
      complianceDesc:
        "Mattu Bridge strictly abides by European fair recruitment guidelines. We do not demand unlawful recruitment fees from candidates, nor do we promise guaranteed employment.",
    },
    events: {
      eyebrow: "International Cooperation & Dialogue",
      title: "International Events, Seminars & Conferences",
      description:
        "Initiatives advancing education access, human rights dialogue, youth skill development, and constructive international partnership.",
      upcomingEyebrow: "Event Calendar",
      upcomingTitle: "Upcoming Seminars & International Forums",
      upcomingSubtitle:
        "Engage with experts, academic mentors, and community leaders through our in-person and hybrid sessions.",
      registerNow: "Register for Event",
      viewDetails: "View Details",
      formatHybrid: "Hybrid (In-Person & Virtual)",
      formatOnline: "Online / Webinar",
      formatInPerson: "In-Person Event",
      deadline: "Registration Deadline:",
      keyHighlights: "Key Session Highlights:",
    },
  },
  de: {
    common: {
      brandName: "Mattu Bridge",
      tagline: "Bildung, Karriere & internationale Chancen verbinden",
      director: "IA Mattu",
      directorTitle: "Geschäftsführer, Mattu Bridge",
      topBannerText: "Beratungsagentur mit Sitz in Deutschland · Verbindet Europa & die Welt",
      adminPortal: "Admin-Portal",
      contactUs: "Kontakt aufnehmen",
      registerJobSeeker: "Als Fachkraft registrieren",
      postJob: "Stellenangebot aufgeben / Arbeitgeberanfrage",
      exploreEducation: "Bildungschancen entdecken",
      jobsAndRecruitment: "Jobs & Rekrutierung",
      internationalEvents: "Internationale Events",
      viewAll: "Alle ansehen",
      exploreMore: "Mehr erfahren",
      learnMore: "Details ansehen",
      submitEnquiry: "Anfrage einreichen",
      verifiedWhatsApp: "Verifiziertes WhatsApp",
      whatsappSupport: "WhatsApp-Support",
      whatsappChatPrompt: "Direktkontakt mit unserem deutschen Team",
      whatsappOnline: "Online & Aktiv",
      gdprCompliant: "DSGVO-konforme Datensparsamkeit",
      germanCompliance: "Deutsches Impressum & Rechtskonformität",
      zeroGuarantees: "Geprüfte Beratung aus Deutschland",
      servingNotice: "Tätig aus Deutschland · Für Klienten in ganz Europa & weltweit",
      followUs: "Folgen Sie uns",
      socialChannels: "Soziale Medien",
    },
    nav: {
      home: "Startseite",
      about: "Über uns",
      education: "Bildungsberatung",
      studyOpportunities: "Studienmöglichkeiten",
      studyOpportunitiesDesc: "Hochschulbildung & Ausbildung in Deutschland & Europa entdecken",
      submitStudyEnquiry: "Studienanfrage einreichen",
      submitStudyEnquiryDesc: "Präferenzen mit oder ohne Unterlagen einreichen",
      jobs: "Jobs & Rekrutierung",
      recruitmentOverview: "Übersicht Personalvermittlung",
      recruitmentOverviewDesc: "Arbeitsvermittlung & Arbeitgeberlösungen",
      registerJobSeekerDesc: "Reichen Sie Ihr berufliches Profil & Qualifikationen ein",
      postJobDesc: "Vakanzen & Rekrutierungsbedarf mitteilen",
      jobListings: "Stellenangebote",
      jobListingsDesc: "Geprüfte Vakanzen & Positionen durchsuchen",
      events: "Internationale Events",
      contact: "Kontakt",
      adminDashboard: "Admin-Dashboard",
      language: "Sprache",
    },
    footer: {
      description:
        "Mattu Bridge ist ein in Deutschland registriertes Beratungsunternehmen, das Bildungsberatung, Personal- und Arbeitsvermittlung sowie internationale Bildungs- und Sozialinitiativen auf einer professionellen Plattform vereint. Wir verbinden Menschen mit Chancen und Institutionen auf der Grundlage von Vertrauen, Zusammenarbeit und Chancengleichheit.",
      gdprNotice:
        "Tätig in Deutschland mit striktem Bekenntnis zu transparenter Kommunikation, DSGVO-Konformität und überprüfbaren Dienstleistungen.",
      coreServices: "Zentrale Leistungen",
      organization: "Organisation",
      legalCompliance: "Rechtliches & Compliance",
      officialContact: "Offizieller Kontakt",
      importantInfo: "Wichtige Information:",
      disclaimer:
        "Mattu Bridge agiert als professionelle Orientierungs- und Vermittlungsplattform mit Sitz in Deutschland. Wir erteilen keine Zulassungsgarantien, Vorstellungsgesprächsgarantien, Visa-Genehmigungen oder Arbeitserlaubnisse. Alle Bewerbungen unterliegen den individuellen Kriterien der Institutionen und dem geltenden Recht.",
      copyright: "© 2026 Mattu Bridge. Alle Rechte vorbehalten. Deutschland.",
      privacy: "Datenschutzerklärung (Privacy Policy)",
      impressum: "Impressum (Legal Notice)",
      terms: "Allgemeine Geschäftsbedingungen (AGB)",
      cookiePolicy: "Cookie-Richtlinie",
      educationLink: "Bildungsberatung",
      jobsLink: "Jobs & Rekrutierung",
      eventsLink: "Internationale Events",
      jobSeekerLink: "Bewerber-Registrierung",
      employerLink: "Stellenausschreibung für Arbeitgeber",
      aboutLink: "Über Mattu Bridge",
      directorLink: "Grußwort der Geschäftsleitung",
      contactLink: "Kontakt & Anfragen",
      followUs: "Verbinden & Folgen",
    },
    cookies: {
      title: "Datenschutz & Cookie-Einwilligung",
      desc: "Wir verwenden technisch notwendige Cookies, um den sicheren Betrieb der Website zu gewährleisten. Optionale Analyse-Cookies sind gemäß DSGVO standardmäßig deaktiviert. Mehr dazu in unserer",
      cookiePolicyLink: "Cookie-Richtlinie",
      acceptAll: "Alle Cookies akzeptieren",
      essentialOnly: "Nur notwendige Cookies",
      customize: "Einstellungen anpassen",
      savePreferences: "Auswahl speichern",
      close: "Schließen",
      essentialTitle: "Technisch notwendige Cookies",
      essentialDesc: "Erforderlich für grundlegende Sicherheits-, Netzwerk- und Navigationsfunktionen. Können nicht deaktiviert werden.",
      analyticsTitle: "Statistik- & Analyse-Cookies",
      analyticsDesc: "Ermöglicht uns, die Nutzung unserer Angebote anonymisiert zu verstehen und zu optimieren.",
    },
    directorMessage: {
      eyebrow: "Führung & Vision",
      heading: "Grußwort der Geschäftsleitung",
      badge: "Bildung, Beschäftigung & Kooperation verbinden",
      paragraphs: [
        "Herzlich willkommen bei Mattu Bridge.",
        "Mein beruflicher Weg ist geprägt von einem langjährigen Engagement für Menschenrechte, Bildung, Chancengleichheit, soziale Teilhabe und der festen Überzeugung, dass jeder Mensch die Chance verdient, sich eine bessere Zukunft aufzubauen.",
        "In den vergangenen zwei Jahrzehnten habe ich umfassende Erfahrungen in der Menschenrechtsarbeit, der Bekämpfung moderner Sklaverei, im Bildungswesen, bei der gesellschaftlichen Integration sowie in Initiativen zur Unterstützung marginalisierter und benachteiligter Gemeinschaften gesammelt. Durch mein Engagement in gemeinschaftsbasierten Organisationen und humanitären Projekten habe ich sowohl die realen Herausforderungen erlebt als auch die transformative Kraft von Bildung, sinnerfüllter Beschäftigung und dem Zugang zu echten Chancen erfahren.",
        "Meine internationalen Erfahrungen – darunter Reisen und der Austausch in mehr als 40 Ländern – haben mein Verständnis für unterschiedliche Kulturen, Gemeinschaften, Bildungssysteme und Arbeitsmärkte vertieft. Diese Begegnungen haben meinen Glauben bestärkt, dass die Verbindung von Menschen mit den richtigen Chancen nachhaltige und positive Veränderungen bewirken kann.",
        "Geleitet von diesen Erfahrungen und dem Glauben an Chancengleichheit habe ich Mattu Bridge gegründet, um Menschen mit zukunftsfähigen Bildungs- und Berufswegen zu verbinden und zugleich die internationale Zusammenarbeit zu fördern.",
        "Unsere drei Kernbereiche – Bildungsberatung, Personal- und Arbeitsvermittlung sowie Internationale Events – spiegeln unser Bestreben wider, Einzelne zu stärken, Institutionen und Organisationen zu vernetzen und Perspektiven in Deutschland, Europa und darüber hinaus zu schaffen.",
        "Für mich ist Mattu Bridge mehr als nur ein Unternehmen; es ist die Fortführung eines Weges, der auf Sinnhaftigkeit, Inklusion und der Überzeugung basiert, dass Bildung, qualifizierte Beschäftigung und internationale Zusammenarbeit dauerhaft positive Werte schaffen.",
        "Ich heiße Studierende, Fachkräfte, Arbeitgeber, Bildungseinrichtungen und Partner herzlich willkommen, gemeinsam mit uns Brücken zu neuen Chancen zu bauen.",
        "Lassen Sie uns Menschen, Chancen und neue Möglichkeiten miteinander verbinden.",
      ],
      signOff: "I.A Mattu",
      title: "Geschäftsführer, Mattu Bridge",
    },
    home: {
      badge: "Sitz in Deutschland · Für Europa & weltweit",
      title: "Bildung, Karriere & internationale Chancen verbinden",
      subtitle:
        "Mattu Bridge ist ein in Deutschland registriertes Beratungsunternehmen, das Bildungsberatung, Personal- und Arbeitsvermittlung sowie internationale Bildungs- und Sozialinitiativen auf einer professionellen Plattform vereint. Wir verbinden Menschen mit Chancen und Institutionen auf der Grundlage von Vertrauen, Zusammenarbeit und Chancengleichheit.",
      ctaEducation: "Bildungschancen entdecken",
      ctaJobs: "Jobs & Rekrutierung",
      ctaEvents: "Internationale Events",
      trust1: "DSGVO-konforme Datensparsamkeit",
      trust2: "Deutsches Impressum & Rechtskonformität",
      trust3: "Direkte Beratung aus Deutschland",
      pillarsEyebrow: "Unsere drei Kernbereiche",
      pillarsTitle: "Professionelles europäisches Tor",
      pillarsSubtitle:
        "Mattu Bridge bietet eine einheitliche, strukturierte Anlaufstelle für Studierende, Fachkräfte, Arbeitgeber und Organisationen auf der Suche nach verifizierten Wegen.",
      pillarEducationTitle: "Bildungsberatung",
      pillarEducationSubtitle: "Studienchancen in Deutschland & Europa",
      pillarEducationDesc:
        "Entdecken Sie Bildungschancen in Deutschland und ganz Europa. Begleitung für universitäre Abschlüsse, duale Ausbildung und Vorbereitungskurse.",
      pillarEducationCta: "Bildungsberatung ansehen",
      pillarJobsTitle: "Jobs & Personalvermittlung",
      pillarJobsSubtitle: "Arbeitsvermittlung & Unternehmensservice",
      pillarJobsDesc:
        "Registrieren Sie sich für berufliche Chancen oder übermitteln Sie als Arbeitgeber Ihren Personalbedarf. Transparente Vermittlung für Fachkräfte und Unternehmen.",
      pillarJobsCta: "Jobs & Karriere ansehen",
      pillarJobsSecondaryCta: "Stellenangebot aufgeben",
      pillarEventsTitle: "Internationale Veranstaltungen",
      pillarEventsSubtitle: "Konferenzen, Seminare & Dialog",
      pillarEventsDesc:
        "Entdecken Sie Initiativen und Veranstaltungen in den Bereichen Bildung, Menschenrechte, Jugendförderung und internationale Zusammenarbeit.",
      pillarEventsCta: "Events entdecken",
      whyChooseEyebrow: "Warum Mattu Bridge",
      whyChooseTitle: "Professionalität, Integrität & Deutsche Standards",
      whyChooseSubtitle:
        "Wir arbeiten nach strengen deutschen Rechts- und Datenschutzstandards und bieten ehrliche Beratung ohne irreführende Behauptungen.",
      whyPoint1Title: "Ansässig in Deutschland",
      whyPoint1Desc:
        "Standort in Deutschland mit strikter Einhaltung gesetzlicher Vorgaben, verifizierbaren Standards und direktem Wissen über europäische Institutionen.",
      whyPoint2Title: "Verlässliche & objektive Beratung",
      whyPoint2Desc:
        "Fundierte, realistische Einschätzungen und professionelle Begleitung, individuell abgestimmt auf Ihre Qualifikationen und Ziele.",
      whyPoint3Title: "Strenger DSGVO-Datenschutz",
      whyPoint3Desc:
        "Ihre Daten werden streng nach der europäischen Datenschutz-Grundverordnung verarbeitet. Datensparsamkeit wird konsequent umgesetzt.",
      whyPoint4Title: "Interdisziplinäre Expertise",
      whyPoint4Desc:
        "Brückenschlag zwischen akademischer Bildung, Arbeitsmarktrekrutierung und internationalem zivilgesellschaftlichem Dialog.",
      featuredJobsEyebrow: "Geprüfte Positionen",
      featuredJobsTitle: "Aktuelle Stellenangebote in Deutschland",
      featuredJobsSubtitle:
        "Durchsuchen Sie geprüfte Stellenangebote mit transparenten Konditionen, europäischer Rechtskonformität und strukturierter Vermittlung.",
      viewAllJobs: "Alle Stellenangebote durchsuchen",
      upcomingEventsEyebrow: "Internationale Initiativen",
      upcomingEventsTitle: "Kommende Seminare & Internationale Foren",
      upcomingEventsSubtitle:
        "Nehmen Sie an akademischen Fachgesprächen, grenzüberschreitenden Jugendinitiativen und Konferenzen von Mattu Bridge teil.",
      viewAllEvents: "Alle Veranstaltungen anzeigen",
      contactBannerEyebrow: "Kontaktieren Sie uns",
      contactBannerTitle: "Möchten Sie Ihre Bildungs- oder Karrierepläne besprechen?",
      contactBannerDesc:
        "Ob Studieninteressierte, qualifizierte Fachkraft oder deutsches Unternehmen – unser Team steht Ihnen mit transparenter Beratung zur Seite.",
      contactBannerCta: "Direkte Anfrage senden",
      whatsappBannerCta: "Auf WhatsApp schreiben (+49 15 905 664 369)",
    },
    about: {
      eyebrow: "Unsere Geschichte & Zielsetzung",
      title: "Über Mattu Bridge",
      description:
        "Eine in Deutschland gegründete professionelle Plattform zur Verbindung von Bildungswegen, Karrierechancen und konstruktivem internationalem Dialog.",
      missionEyebrow: "Unsere Mission & Grundlagen",
      missionTitle: "Bedeutsame Brücken zwischen Menschen & Chancen schaffen",
      p1: "Mattu Bridge wurde mit einem klaren Ziel ins Leben gerufen: eine zugängliche, transparente und rechtskonforme europäische Plattform für Studierende, Arbeitssuchende, Arbeitgeber und gesellschaftliche Initiativen bereitzustellen.",
      p2: "Ausgehend von Deutschland beruht unsere Philosophie auf Chancengleichheit, Menschenwürde und geprüften Informationen. Anstelle unrealistischer Versprechungen setzen wir auf fundierte Orientierung, Datensparsamkeit und professionelle Kommunikation.",
      p3: "Ob bei der Begleitung internationaler Studierender durch Hochschulbewerbungen oder bei der Unterstützung von Unternehmen bei der Suche nach Fachkräften – wir halten stets höchste Servicestandards und deutsches Recht ein.",
      coreValuesEyebrow: "Grundwerte",
      coreValuesTitle: "Prinzipien, die jedes Handeln leiten",
      value1Title: "Integrität & Ehrlichkeit",
      value1Desc: "Transparente, verlässliche Beratung auf Basis geprüfter Fakten, ethischer Grundsätze und offener Kommunikation.",
      value2Title: "Datenschutz & Vertraulichkeit",
      value2Desc: "Volle DSGVO-Konformität. Daten werden vertraulich behandelt und keinesfalls veräußert.",
      value3Title: "Chancengleichheit",
      value3Desc: "Förderung von Talenten über Grenzen hinweg für fairen Bildungs- und Arbeitsmarktzugang.",
      value4Title: "Europäische Exzellenz",
      value4Desc: "Hohe deutsche Qualitätsmaßstäbe bei der Bildungsberatung und Arbeitsvermittlung.",
      complianceTitle: "Rechtsstatus & Konformität",
      complianceDesc:
        "Mattu Bridge agiert als in Deutschland registrierte Beratung. Wir erfüllen das Digitale-Dienste-Gesetz (DDG) und die Datenschutz-Grundverordnung (DSGVO).",
    },
    contact: {
      eyebrow: "Direkte Kommunikation",
      title: "Kontakt zu Mattu Bridge",
      description:
        "Wir begrüßen Anfragen von Studieninteressierten, Fachkräften, Arbeitgebern und internationalen Organisationen. Kontaktieren Sie unser deutsches Büro.",
      channelsEyebrow: "Direkte Kontaktkanäle",
      channelsTitle: "Offizielle Kanäle",
      channelsDesc:
        "Für formelle Anfragen, Studienberatung oder Kooperationsanfragen nutzen Sie bitte unsere verifizierten Kontaktdaten.",
      officialEmail: "Offizielle E-Mail",
      emailResponseNotice: "Antwort in der Regel innerhalb von 1–2 Werktagen.",
      verifiedWhatsApp: "Verifiziertes WhatsApp",
      whatsappNotice: "Direkter Austausch für Bewerber, Partner und Interessenten.",
      businessHours: "Bürozeiten",
      hoursValue: "Montag – Freitag: 09:00 – 17:00 Uhr MEZ",
      hoursNotice: "Koordination aus Deutschland · Für Klienten in ganz Europa.",
      privacyNoticeTitle: "Datenschutzhinweis",
      privacyNoticeDesc:
        "Ihre Nachricht wird verschlüsselt übertragen. Wir erfassen nur Angaben, die zur Bearbeitung Ihrer Anfrage gemäß DSGVO notwendig sind.",
      socialChannelsTitle: "Soziale Netzwerke & Kanäle",
      socialChannelsDesc: "Folgen Sie Mattu Bridge auf Facebook, Instagram und TikTok für Neuigkeiten, Karrierechancen und internationale Bildungsinitiativen.",
      formTitle: "Nachricht an uns senden",
      formDesc: "Füllen Sie das Formular aus, unser Team meldet sich zeitnah bei Ihnen.",
    },
    education: {
      eyebrow: "Beratung zu Bildungswegen",
      title: "Bildungsberatung in Deutschland & Europa",
      description:
        "Umfassende Orientierung für Hochschulbildung, duale Ausbildung und Vorbereitungskurse an deutschen und europäischen Bildungseinrichtungen.",
      overviewEyebrow: "Bildungsspektrum",
      overviewTitle: "Strukturierte akademische & berufliche Wege",
      overviewSubtitle:
        "Orientierung bei Zulassungsvoraussetzungen, Sprachnachweisen und Studienstrukturen mit transparenter Schritt-für-Schritt-Beratung.",
      formEyebrow: "Studienberatungsformular",
      formTitle: "Studienanfrage übermitteln",
      formSubtitle: "Teilen Sie uns Ihren Bildungshintergrund und Wunschfachbereiche mit, um gezielte Beratung zu erhalten.",
      pathways: [
        {
          title: "Studium in Deutschland",
          description:
            "Deutschland ist weltweit bekannt für gebührenfreie bzw. kostengünstige staatliche Universitäten, Spitzenforschung und hervorragende duale Ausbildung. Wir helfen Ihnen, passende Hochschulen und Bewerbungsfristen zu finden.",
        },
        {
          title: "Studium im europäischen Ausland",
          description:
            "Entdecken Sie vielfältige englischsprachige Bachelor- und Masterstudiengänge in Österreich, den Niederlanden, Frankreich und weiteren europäischen Ländern.",
        },
        {
          title: "Bachelorstudium (Undergraduate)",
          description:
            "Beratung zur Anerkennung schulischer Vorbildungsnachweise (Abitur-Gleichwertigkeit), Hochschulzugangsberechtigung und Vorbereitungskursen.",
        },
        {
          title: "Masterstudium & Promotion (Postgraduate)",
          description:
            "Unterstützung für Hochschulabsolventen bei Spezialisierungen, forschungsorientierten Masterprogrammen und Promotionsvorhaben.",
        },
        {
          title: "Duale Berufsausbildung (Ausbildung)",
          description:
            "Das bewährte deutsche Ausbildungsmodell mit Ausbildungsvergütung, das praktische Betriebserfahrung in Logistik, Pflege, IT und Handwerk mit Berufsschulunterricht vereint.",
        },
        {
          title: "Vorbereitungsstudium (Studienkolleg)",
          description:
            "Begleitung für internationale Bewerber, die vor dem regulären Fachstudium das einjährige Studienkolleg zur Feststellungsprüfung (FSP) absolvieren müssen.",
        },
      ],
      disclaimerTitle: "Wichtiger Beratungshinweis",
      disclaimerDesc:
        "Mattu Bridge erbringt Orientierungs- und Beratungsleistungen. Wir garantieren KEINE Zulassung oder Visa-Erteilung. Die verbindliche Entscheidung obliegt allein den Zulassungsstellen der Hochschulen sowie den zuständigen deutschen Auslandsvertretungen.",
    },
    jobs: {
      eyebrow: "Arbeitsmarkt- & Personallösungen",
      title: "Jobs & Personalvermittlung",
      description:
        "Verbindung qualifizierter Fachkräfte mit europäischen Arbeitgebern durch transparente Vermittlungsprozesse und faire Arbeitsstandards.",
      overviewEyebrow: "Lösungen für beide Seiten",
      overviewTitle: "Strukturierte Vermittlung für Bewerber & Arbeitgeber",
      overviewSubtitle:
        "Wir unterstützen Arbeitssuchende bei Karriereschritten in Deutschland sowie europäische Betriebe bei der gezielten Personalgewinnung.",
      forCandidatesTitle: "Für Bewerber & Fachkräfte",
      forCandidatesDesc:
        "Hinterlegen Sie Ihren Lebenslauf, Qualifikationen und Sprachkenntnisse, um für geprüfte Stellen in Logistik, Pflege, Technik und Fachberufen berücksichtigt zu werden.",
      candidateCta: "Als Bewerber registrieren",
      forEmployersTitle: "Für Arbeitgeber & Unternehmen",
      forEmployersDesc:
        "Übermitteln Sie Ihren Personalbedarf. Wir unterstützen bei strukturierter Vorauswahl, Zeugnisprüfung und reibungsloser Kontaktaufnahme.",
      employerCta: "Stellenangebot aufgeben",
      viewListingsCta: "Aktuelle Stellenangebote durchsuchen",
      complianceTitle: "Faire Personalvermittlung & Rechtskonformität",
      complianceDesc:
        "Mattu Bridge bekennt sich strikt zu den Grundsätzen fairer und ethischer Personalvermittlung. Wir erheben keine unrechtmäßigen Gebühren von Bewerbern und geben keine unseriösen Arbeitsplatzgarantien ab.",
    },
    events: {
      eyebrow: "Internationale Kooperation & Dialog",
      title: "Internationale Events, Seminare & Konferenzen",
      description:
        "Initiativen zur Förderung des Bildungszugangs, des Menschenrechtsdialogs, der Jugendförderung und konstruktiver grenzüberschreitender Zusammenarbeit.",
      upcomingEyebrow: "Veranstaltungskalender",
      upcomingTitle: "Kommende Seminare & Internationale Foren",
      upcomingSubtitle:
        "Tauschen Sie sich mit Experten, akademischen Beratern und Akteuren aus Wissenschaft und Praxis in Präsenz- und Hybrid-Formaten aus.",
      registerNow: "Für Event anmelden",
      viewDetails: "Details ansehen",
      formatHybrid: "Hybrid (Präsenz & Online-Stream)",
      formatOnline: "Online / Webinar",
      formatInPerson: "Präsenzveranstaltung",
      deadline: "Anmeldeschluss:",
      keyHighlights: "Schwerpunkte der Veranstaltung:",
    },
  },
};
