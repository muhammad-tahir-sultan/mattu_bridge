import Link from "next/link";
import { Landmark } from "lucide-react";

interface LogoProps {
  className?: string;
  isDark?: boolean;
  showSubtitle?: boolean;
}

export default function Logo({
  className = "",
  isDark = false,
  showSubtitle = true,
}: LogoProps) {
  return (
    <Link href="/" className={`group flex items-center gap-2 sm:gap-2.5 flex-shrink-0 min-w-0 ${className}`}>
      <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-md shadow-primary-700/20 transition-transform duration-200 group-hover:scale-105 flex-shrink-0">
        <Landmark className="h-4 w-4 sm:h-5 sm:w-5 text-white" strokeWidth={2.2} />
      </div>
      <div className="flex flex-col leading-tight flex-shrink-0">
        <span
          className={`font-display text-sm sm:text-base md:text-lg font-bold tracking-tight whitespace-nowrap transition-colors ${
            isDark ? "text-white" : "text-gray-950 group-hover:text-primary-700"
          }`}
        >
          Mattu Bridge
        </span>
        {showSubtitle && (
          <span
            className={`text-[7.5px] sm:text-[9px] font-semibold uppercase tracking-wider whitespace-nowrap ${
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
