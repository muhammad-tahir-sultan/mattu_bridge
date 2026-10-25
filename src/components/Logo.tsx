import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  isDark?: boolean;
  showSubtitle?: boolean;
  variant?: "brand" | "full" | "mark-only";
}

export default function Logo({
  className = "",
  isDark = false,
  showSubtitle = true,
  variant = "brand",
}: LogoProps) {
  // Full official logo image lockup (used when full badge is requested)
  if (variant === "full") {
    return (
      <Link
        href="/"
        className={`group inline-flex items-center flex-shrink-0 min-w-0 transition-transform duration-200 hover:scale-[1.02] ${className}`}
        aria-label="Mattu Bridge Home"
      >
        <div
          className={`relative flex items-center justify-center overflow-hidden rounded-xl transition-all duration-200 ${
            isDark
              ? "bg-white p-2 shadow-md shadow-black/25 ring-1 ring-white/20"
              : "bg-white p-1"
          }`}
        >
          <Image
            src="/MB Logo.png"
            alt="Mattu Bridge - Your Bridge to Success"
            width={240}
            height={208}
            priority
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
          />
        </div>
      </Link>
    );
  }

  // Mark-only icon
  if (variant === "mark-only") {
    return (
      <Link
        href="/"
        className={`group inline-flex items-center flex-shrink-0 min-w-0 transition-transform duration-200 hover:scale-105 ${className}`}
        aria-label="Mattu Bridge Home"
      >
        <div
          className={`relative flex items-center justify-center overflow-hidden rounded-xl transition-all duration-200 ${
            isDark
              ? "bg-white p-1.5 shadow-md shadow-black/25 ring-1 ring-white/20"
              : "bg-white p-1 shadow-sm border border-gray-100"
          }`}
        >
          <Image
            src="/mb-mark.png"
            alt="Mattu Bridge"
            width={120}
            height={80}
            priority
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </div>
      </Link>
    );
  }

  // Standard brand lockup: Official MB Mark emblem + high-legibility brand typography
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 sm:gap-3 flex-shrink-0 min-w-0 transition-transform duration-200 hover:opacity-95 ${className}`}
      aria-label="Mattu Bridge Home"
    >
      <div
        className={`relative flex items-center justify-center flex-shrink-0 overflow-hidden rounded-xl transition-all duration-200 group-hover:scale-105 ${
          isDark
            ? "bg-white p-1.5 shadow-md shadow-black/25 ring-1 ring-white/20"
            : "bg-white p-1 shadow-sm border border-gray-100/80"
        }`}
      >
        <Image
          src="/mb-mark.png"
          alt="Mattu Bridge"
          width={120}
          height={80}
          priority
          className="h-8 sm:h-9 md:h-10 w-auto object-contain"
        />
      </div>
      <div className="flex flex-col leading-tight flex-shrink-0">
        <span
          className={`font-display text-base sm:text-lg md:text-xl font-bold tracking-tight whitespace-nowrap transition-colors ${
            isDark ? "text-white" : "text-gray-950 group-hover:text-primary-700"
          }`}
        >
          Mattu Bridge
        </span>
        {showSubtitle && (
          <span
            className={`text-[8px] sm:text-[9.5px] font-semibold uppercase tracking-wider whitespace-nowrap ${
              isDark ? "text-primary-200" : "text-primary-700"
            }`}
          >
            Education &amp; Employment
          </span>
        )}
      </div>
    </Link>
  );
}


