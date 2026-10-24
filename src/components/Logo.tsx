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
    <Link href="/" className={`group flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0 ${className}`}>
      <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-md shadow-primary-700/20 transition-transform duration-200 group-hover:scale-105 flex-shrink-0">
        <Landmark className="h-5 w-5 sm:h-6 sm:w-6 text-white" strokeWidth={2.2} />
      </div>
      <div className="flex flex-col leading-tight flex-shrink-0">
        <span
          className={`font-display text-base sm:text-xl font-bold tracking-tight whitespace-nowrap transition-colors ${
            isDark ? "text-white" : "text-gray-950 group-hover:text-primary-700"
          }`}
        >
          Mattu Bridge
        </span>
        {showSubtitle && (
          <span
            className={`text-[8px] sm:text-[10px] font-semibold uppercase tracking-wider whitespace-nowrap ${
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
