import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
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
    "Study in Europe",
    "Study Abroad Consultant",
    "Ausbildung Germany",
    "Employment Placement Germany",
    "Recruitment Agency Germany",
    "International Events Europe",
    "Human Rights Seminars",
  ],
  metadataBase: new URL(siteConfig.domain),
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
      <body className="min-h-screen flex flex-col font-sans text-gray-900 bg-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
