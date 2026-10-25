"use client";

import { Mail, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/forms/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import { siteConfig } from "@/data/content";
import { images } from "@/data/images";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactContent() {
  const { t, locale } = useLanguage();

  return (
    <div>
      <PageHeader
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        description={t.contact.description}
        imageUrl={images.frankfurt}
        heroImage={images.modernOffice}
        heroImageAlt="Mattu Bridge communications and advisory desk in Germany"
        heroBadge={locale === "de" ? "📍 Büro Deutschland" : "📍 Germany Desk"}
        secondaryImage={images.advisoryDesk}
        secondaryTitle={locale === "de" ? "Direkter Austausch" : "Direct Advisory"}
        secondarySubtitle={locale === "de" ? "E-Mail & WhatsApp" : "Email & WhatsApp Desk"}
        actionButtons={
          <>
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn-primary !py-3 !px-5 text-sm font-bold shadow-lg shadow-primary-900/40"
            >
              <Mail className="h-4 w-4" />
              <span>{siteConfig.email}</span>
            </a>
            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary !border-emerald-400/40 !bg-emerald-500/10 !text-emerald-300 hover:!bg-emerald-500/20 !py-3 !px-5 text-sm font-semibold"
            >
              <MessageCircle className="h-4 w-4 text-emerald-400" />
              <span>WhatsApp: {siteConfig.whatsapp}</span>
            </a>
          </>
        }
        trustHighlights={[
          { text: locale === "de" ? "Antwort in 1–2 Tagen" : "1–2 Day Response" },
          { text: locale === "de" ? "Zentral in Deutschland" : "Based in Germany" },
          { text: locale === "de" ? "DSGVO-geschützt" : "GDPR Protected" },
        ]}
      />

      <section className="section-padding bg-gray-50/70">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Details & Info */}
            <div className="space-y-6">
              <div>
                <p className="heading-eyebrow mb-2">{t.contact.channelsEyebrow}</p>
                <h2 className="heading-3 mb-4">{t.contact.channelsTitle}</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {t.contact.channelsDesc}
                </p>
              </div>

              {/* Email Card */}
              <div className="card border-primary-100 hover:border-primary-300">
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {t.contact.officialEmail}
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-bold text-gray-900 hover:text-primary-700 text-sm"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {t.contact.emailResponseNotice}
                </p>
              </div>

              {/* WhatsApp Card */}
              <div className="card border-emerald-100 hover:border-emerald-300 bg-emerald-50/20">
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {t.contact.verifiedWhatsApp}
                    </p>
                    <a
                      href={siteConfig.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-gray-900 hover:text-emerald-700 text-sm"
                    >
                      {siteConfig.whatsapp}
                    </a>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {t.contact.whatsappNotice}
                </p>
              </div>

              {/* Operating Hours & Location */}
              <div className="card">
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {t.contact.businessHours}
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      {t.contact.hoursValue}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {t.contact.hoursNotice}
                </p>
              </div>

              {/* Social Channels Quick Box */}
              <div className="card border-primary-100 bg-gradient-to-br from-white to-primary-50/30">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  {t.common.socialChannels}
                </p>
                <p className="text-xs text-gray-600 mb-3.5 leading-relaxed">
                  {t.contact.socialChannelsDesc}
                </p>
                <SocialLinks variant="mobile" />
              </div>
            </div>

            {/* Main Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>

          {/* Social Channels Showcase Cards */}
          <div className="mt-16 rounded-3xl border border-primary-100 bg-white p-8 lg:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100">
              <div>
                <p className="heading-eyebrow mb-1">{t.common.followUs}</p>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-display">
                  {t.contact.socialChannelsTitle}
                </h3>
                <p className="text-sm text-gray-600 mt-1 max-w-xl">
                  {t.contact.socialChannelsDesc}
                </p>
              </div>
            </div>
            <SocialLinks variant="cards" />
          </div>
        </div>
      </section>
    </div>
  );
}
