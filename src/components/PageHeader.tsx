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
    <section className="relative overflow-hidden bg-primary-950 py-12 sm:py-16 lg:py-20 xl:py-24 text-white">
      {/* Background image if provided */}
      {imageUrl && (
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={typeof title === "string" ? title : "Mattu Bridge"}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/75 via-primary-950/70 to-primary-950" />
        </div>
      )}

      {/* Ambient gradient glow orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-primary-500/20 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={
            heroImage
              ? "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              : "max-w-4xl lg:max-w-5xl"
          }
        >
          {/* Text & Content Column */}
          <div className={heroImage ? "lg:col-span-7 xl:col-span-7" : ""}>
            {eyebrow && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-primary-200 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{eyebrow}</span>
              </div>
            )}

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold leading-[1.15] tracking-tight text-white">
              {title}
            </h1>

            {description && (
              <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 max-w-3xl">
                {description}
              </p>
            )}

            {actionButtons && (
              <div className="mt-7 flex flex-wrap items-center gap-3">
                {actionButtons}
              </div>
            )}

            {trustHighlights && trustHighlights.length > 0 && (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/15">
                {trustHighlights.map((t, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 backdrop-blur-md"
                  >
                    <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-gray-200">{t.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Hero Photo Composition */}
          {heroImage && (
            <div className="lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-end mt-6 lg:mt-0">
              <div className="relative w-full max-w-[540px]">
                {/* Main Featured Photo Card */}
                <div className="relative aspect-[4/3.2] sm:aspect-[4/3] lg:aspect-[4/3.3] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-gray-900 group">
                  <Image
                    src={heroImage}
                    alt={
                      heroImageAlt ||
                      (typeof title === "string" ? title : "Hero Photo")
                    }
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Corner Badge */}
                  {heroBadge && (
                    <div className="absolute top-4 right-4 rounded-full bg-primary-950/85 px-3.5 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-md border border-white/15 shadow-lg">
                      {heroBadge}
                    </div>
                  )}
                </div>

                {/* Overlapping Inset Secondary Photo Card at bottom-left */}
                {secondaryImage && (
                  <div className="absolute -bottom-5 -left-5 z-20 rounded-2xl bg-white p-2 shadow-2xl border-2 border-white/95 max-w-[210px] transform hover:scale-105 transition-all">
                    <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-xl overflow-hidden shadow-inner">
                      <Image
                        src={secondaryImage}
                        alt={secondaryTitle || "Mattu Bridge Opportunity"}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    </div>
                    {(secondaryTitle || secondarySubtitle) && (
                      <div className="pt-2 px-1">
                        {secondaryTitle && (
                          <div className="flex items-center gap-1.5">
                            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            <p className="text-xs font-bold text-gray-900 line-clamp-1">
                              {secondaryTitle}
                            </p>
                          </div>
                        )}
                        {secondarySubtitle && (
                          <p className="text-[10px] text-gray-500 mt-0.5 line-clamp-1">
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
