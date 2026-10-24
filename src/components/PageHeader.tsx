import Image from "next/image";
import React from "react";
import { CheckCircle } from "lucide-react";

export interface PageHeaderProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  imageUrl?: string; // background atmospheric image (e.g. Frankfurt river, campus, etc.)
  heroImage?: string; // Main high-res featured photo card
  heroImageAlt?: string;
  heroBadge?: string; // e.g. "🎓 Study in Europe"
  secondaryImage?: string; // Overlapping bottom-left photo card
  secondaryTitle?: string; // e.g. "Careers & Jobs"
  secondarySubtitle?: string; // e.g. "Logistics & Professionals"
  actionButtons?: React.ReactNode; // Optional CTA buttons
  trustHighlights?: { text: string }[]; // Optional trust points
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  imageUrl,
  heroImage,
  heroImageAlt,
  heroBadge,
  secondaryImage,
  secondaryTitle,
  secondarySubtitle,
  actionButtons,
  trustHighlights,
}: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-primary-950 py-16 md:py-24 text-white">
      {/* Background image if provided */}
      {imageUrl && (
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={typeof title === "string" ? title : "Mattu Bridge"}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/80 via-primary-950/85 to-primary-950" />
        </div>
      )}

      {/* Ambient gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div
          className={
            heroImage
              ? "grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
              : "max-w-3xl"
          }
        >
          {/* Text & Content Column */}
          <div className={heroImage ? "lg:col-span-7" : ""}>
            {eyebrow && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-primary-200 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{eyebrow}</span>
              </div>
            )}

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
              {title}
            </h1>

            {description && (
              <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-300 max-w-2xl">
                {description}
              </p>
            )}

            {actionButtons && (
              <div className="mt-7 flex flex-wrap items-center gap-3">
                {actionButtons}
              </div>
            )}

            {trustHighlights && trustHighlights.length > 0 && (
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10 text-xs text-gray-300">
                {trustHighlights.map((t, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span>{t.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Hero Photo Composition (Just like Home Page) */}
          {heroImage && (
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
              <div className="relative w-full max-w-[420px]">
                {/* Main Featured Photo Card */}
                <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-gray-900 group">
                  <Image
                    src={heroImage}
                    alt={
                      heroImageAlt ||
                      (typeof title === "string" ? title : "Hero Photo")
                    }
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Badge */}
                  {heroBadge && (
                    <div className="absolute top-4 right-4 rounded-full bg-primary-950/85 px-3 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-md border border-white/15 shadow-lg">
                      {heroBadge}
                    </div>
                  )}
                </div>

                {/* Overlapping Inset Secondary Photo Card at bottom-left */}
                {secondaryImage && (
                  <div className="absolute -bottom-6 -left-6 z-20 rounded-2xl bg-white p-2.5 shadow-2xl border-2 border-white/95 max-w-[210px] transform hover:scale-105 transition-all">
                    <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-xl overflow-hidden shadow-inner">
                      <Image
                        src={secondaryImage}
                        alt={secondaryTitle || "Mattu Bridge Opportunity"}
                        fill
                        sizes="128px"
                        className="object-cover"
                      />
                    </div>
                    {(secondaryTitle || secondarySubtitle) && (
                      <div className="pt-2 px-1">
                        {secondaryTitle && (
                          <div className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            <p className="text-xs font-bold text-gray-900">
                              {secondaryTitle}
                            </p>
                          </div>
                        )}
                        {secondarySubtitle && (
                          <p className="text-[10px] text-gray-500 mt-0.5">
                            {secondarySubtitle}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
