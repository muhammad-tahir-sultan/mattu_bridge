"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export type SocialPlatform = "facebook" | "instagram" | "tiktok";

export interface SocialItem {
  id: SocialPlatform;
  name: string;
  handle: string;
  url: string;
  description?: string;
  colorHex: string;
}

export function SocialIcon({
  platform,
  className = "w-5 h-5",
}: {
  platform: SocialPlatform | string;
  className?: string;
}) {
  switch (platform.toLowerCase()) {
    case "facebook":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "instagram":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "tiktok":
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
        </svg>
      );
    default:
      return null;
  }
}

interface SocialLinksProps {
  variant?: "footer" | "banner" | "cards" | "mobile";
  className?: string;
  showLabels?: boolean;
}

export default function SocialLinks({
  variant = "footer",
  className = "",
  showLabels = false,
}: SocialLinksProps) {
  const socials = siteConfig.socialLinks;

  if (variant === "banner") {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        {socials.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Follow Mattu Bridge on ${item.name}`}
            aria-label={`Mattu Bridge on ${item.name}`}
            className="text-gray-300 hover:text-white transition-transform hover:scale-110 p-0.5"
          >
            <SocialIcon platform={item.id} className="h-3.5 w-3.5" />
          </a>
        ))}
      </div>
    );
  }

  if (variant === "cards") {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3.5 ${className}`}>
        {socials.map((item) => {
          let brandBorder = "hover:border-primary-400";
          let brandText = "text-primary-700";
          let brandBg = "bg-primary-50";

          if (item.id === "facebook") {
            brandBorder = "hover:border-[#1877F2]/60 hover:shadow-[#1877F2]/10";
            brandText = "text-[#1877F2]";
            brandBg = "bg-[#1877F2]/10";
          } else if (item.id === "instagram") {
            brandBorder = "hover:border-[#E4405F]/60 hover:shadow-[#E4405F]/10";
            brandText = "text-[#E4405F]";
            brandBg = "bg-gradient-to-tr from-[#FFDC80]/20 via-[#E4405F]/10 to-[#833AB4]/10";
          } else if (item.id === "tiktok") {
            brandBorder = "hover:border-neutral-900/60 hover:shadow-black/10";
            brandText = "text-neutral-900";
            brandBg = "bg-neutral-100";
          }

          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-between p-3.5 rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 ${brandBorder}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${brandBg} ${brandText} transition-transform group-hover:scale-105`}
                >
                  <SocialIcon platform={item.id} className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">
                    {item.handle}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-primary-700 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === "mobile") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {socials.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Mattu Bridge on ${item.name}`}
            className="flex items-center justify-center h-9 w-9 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 hover:text-primary-700 hover:border-primary-300 transition-all shadow-sm active:scale-95"
          >
            <SocialIcon platform={item.id} className="h-4 w-4" />
          </a>
        ))}
      </div>
    );
  }

  // Default "footer" variant
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {socials.map((item) => {
        let hoverClasses =
          "hover:border-primary-400 hover:text-primary-200 hover:bg-primary-900/50";
        if (item.id === "facebook") {
          hoverClasses =
            "hover:border-[#1877F2]/60 hover:text-[#1877F2] hover:bg-[#1877F2]/10";
        } else if (item.id === "instagram") {
          hoverClasses =
            "hover:border-[#E4405F]/60 hover:text-[#E4405F] hover:bg-[#E4405F]/10";
        } else if (item.id === "tiktok") {
          hoverClasses =
            "hover:border-white/60 hover:text-white hover:bg-white/10";
        }

        return (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${item.name}: ${item.handle}`}
            aria-label={`Mattu Bridge on ${item.name}`}
            className={`group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-gray-300 transition-all ${hoverClasses}`}
          >
            <SocialIcon
              platform={item.id}
              className="h-4 w-4 flex-shrink-0 transition-transform group-hover:scale-110"
            />
            {showLabels ? (
              <span>{item.name}</span>
            ) : (
              <span className="hidden sm:inline text-xs">{item.name}</span>
            )}
          </a>
        );
      })}
    </div>
  );
}
