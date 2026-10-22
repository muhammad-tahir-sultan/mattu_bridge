"use client";

import { Mail, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/forms/ContactForm";
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

              {/* Compliance Notice */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 text-xs text-gray-600 space-y-2">
                <div className="flex items-center gap-2 text-primary-700 font-bold">
                  <ShieldCheck className="h-4 w-4" />
                  <span>{t.contact.privacyNoticeTitle}</span>
                </div>
                <p>
                  {t.contact.privacyNoticeDesc}
                </p>
                <p>
                  {locale === "de" ? (
                    <>
                      Unsere ladungsfähige Anschrift für offizielle Mitteilungen finden Sie im{" "}
                      <a href="/impressum" className="text-primary-700 underline font-semibold">
                        Impressum
                      </a>.
                    </>
                  ) : (
                    <>
                      Our statutory address for official notices is provided in our{" "}
                      <a href="/impressum" className="text-primary-700 underline font-semibold">
                        Impressum
                      </a>.
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Main Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
