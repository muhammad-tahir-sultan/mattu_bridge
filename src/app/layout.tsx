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
    default: "Mattu Bridge | Educational Consultancy, Careers & International Events",
    template: "%s | Mattu Bridge",
  },
  description:
    "Mattu Bridge is a Germany-based consultancy connecting education, careers, and international initiatives. Explore study opportunities, recruitment services, and international events in Germany and across Europe.",
  keywords: [
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/MB Logo.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Mattu Bridge | Connecting Education, Careers & International Opportunities",
    description:
      "A professional German platform bringing together educational consultancy, employment placement and recruitment, and international cooperation.",
    url: siteConfig.domain,
    siteName: "Mattu Bridge",
    locale: "en_US",
    type: "website",
  },
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
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
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
