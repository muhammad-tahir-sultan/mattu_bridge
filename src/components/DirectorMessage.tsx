"use client";

import { Quote, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface DirectorMessageProps {
  id?: string;
}

export default function DirectorMessage({ id = "director-message" }: DirectorMessageProps) {
  const { t } = useLanguage();
  const messageData = t.directorMessage;

  return (
    <section id={id} className="section-padding bg-gradient-to-b from-white via-primary-50/50 to-white">
      <div className="section-container">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-primary-100 bg-white p-8 md:p-12 shadow-xl shadow-primary-900/5">
            {/* Ambient Background Accents */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-primary-100/60 blur-3xl" />
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-accent-100/50 blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-700 text-white shadow-md">
                  <Quote className="h-6 w-6" />
                </div>
                <div>
                  <p className="heading-eyebrow !text-primary-600 mb-0.5">
                    {messageData.eyebrow}
                  </p>
                  <h2 className="font-display text-2xl font-bold text-gray-900 md:text-3xl">
                    {messageData.heading}
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
                {messageData.paragraphs.map((p, idx) => (
                  <p key={idx} className={idx === 0 ? "font-semibold text-gray-900" : ""}>
                    {p}
                  </p>
                ))}
              </div>

              {/* Signature Block */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="font-display text-xl font-bold text-gray-950">
                    {messageData.signOff}
                  </div>
                  <div className="text-sm font-medium text-primary-700">
                    {messageData.title}
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-xs text-gray-600">
                  <Sparkles className="h-3.5 w-3.5 text-primary-600" />
                  <span>{messageData.badge}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
