import type { Metadata } from "next";
import { Mail, MessageCircle, Clock, ShieldCheck, CheckCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/content";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mattu Bridge for education consultancy, employment placement, recruitment enquiries, and international cooperation.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Direct Communication"
        title="Contact Mattu Bridge"
        description="We welcome enquiries from prospective students, job seekers, employers, and international organizations. Reach out to our Germany desk."
        imageUrl={images.frankfurt}
      />

      <section className="section-padding bg-gray-50/70">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Details & Info */}
            <div className="space-y-6">
              <div>
                <p className="heading-eyebrow mb-2">Direct Contact Channels</p>
                <h2 className="heading-3 mb-4">Official Channels</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  For formal communications, study enquiries, or recruitment
                  partnerships, please utilize our verified business contacts.
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
                      Official Email
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
                  Expect a response within 1–2 business days.
                </p>
              </div>

              {/* WhatsApp Card */}
              <div className="card border-emerald-100 hover:border-emerald-300">
                <div className="flex items-center gap-3.5 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Verified WhatsApp
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
                  Available for urgent candidate and applicant coordination.
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
                      Business Hours
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      Monday – Friday: 09:00 – 17:00 CET
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Coordinating from Germany · Serving clients across Europe.
                </p>
              </div>

              {/* Compliance Notice */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 text-xs text-gray-600 space-y-2">
                <div className="flex items-center gap-2 text-primary-700 font-bold">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Privacy Notice</span>
                </div>
                <p>
                  Mattu Bridge does not share your contact details with
                  unaffiliated third parties without prior consent. In accordance
                  with German consumer protection regulations, our physical address
                  for official statutory notices is provided exclusively in our{" "}
                  <a href="/impressum" className="text-primary-700 underline font-semibold">
                    Impressum
                  </a>.
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
