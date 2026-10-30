import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { LanguageProvider } from "@/context/LanguageContext";
import { siteConfig } from "@/data/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mattu Bridge Consultancy | Educational Consultancy, Careers & International Events",
    template: "%s | Mattu Bridge Consultancy",
  },
  description:
    "Mattu Bridge Consultancy is a Germany-based consultancy connecting education, careers, and international initiatives. Explore study opportunities, recruitment services, and international events in Germany and across Europe.",
  keywords: [
    "Mattu Bridge Consultancy",
    "Mattu Bridge",
    "Education Consultancy Germany",
    "Bildungsberatung Deutschland",
    "Study in Europe",
    "Study Abroad Consultant",
    "Ausbildung Germany",
    "Employment Placement Germany",
    "Personalvermittlung Deutschland",
    "Recruitment Agency Germany",
    "International Events Europe",
    "Human Rights Seminars",
  ],
  metadataBase: new URL(siteConfig.domain),
  applicationName: "Mattu Bridge Consultancy",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/MB Logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Mattu Bridge Consultancy | Connecting Education, Careers & International Opportunities",
    description:
      "A professional German platform bringing together educational consultancy, employment placement and recruitment, and international cooperation.",
    url: siteConfig.domain,
    siteName: "Mattu Bridge Consultancy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/MB Logo.png",
        width: 1200,
        height: 630,
        alt: "Mattu Bridge Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mattu Bridge Consultancy",
    description:
      "A professional German platform bringing together educational consultancy, employment placement and recruitment, and international cooperation.",
    images: ["/MB Logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteConfig.domain}/#website`,
      "url": `${siteConfig.domain}/`,
      "name": "Mattu Bridge Consultancy",
      "alternateName": [
        "Mattu Bridge",
        "mattubridge.de",
        "Mattu Bridge Germany"
      ],
      "description":
        "Mattu Bridge Consultancy is a Germany-based platform connecting educational consultancy, employment placement, and international initiatives.",
      "publisher": {
        "@id": `${siteConfig.domain}/#organization`
      },
      "inLanguage": ["en", "de"]
    },
    {
      "@type": "EducationalOrganization",
      "@id": `${siteConfig.domain}/#organization`,
      "name": "Mattu Bridge Consultancy",
      "alternateName": "Mattu Bridge",
      "url": `${siteConfig.domain}/`,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.domain}/MB%20Logo.png`,
        "width": 512,
        "height": 512,
        "caption": "Mattu Bridge Consultancy"
      },
      "image": `${siteConfig.domain}/MB%20Logo.png`,
      "email": siteConfig.email,
      "telephone": siteConfig.whatsapp,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Weyhe",
        "addressCountry": "DE"
      },
      "sameAs": [
        siteConfig.social.facebook,
        siteConfig.social.instagram,
        siteConfig.social.tiktok
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans text-gray-900 bg-white antialiased">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
