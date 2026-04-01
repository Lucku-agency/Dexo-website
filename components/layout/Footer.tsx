"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import LGPDModal from "@/components/sections/LGPDModal";

// LinkedIn SVG inline (lucide-react version doesn't export Linkedin)
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();

  return (
    <footer className="bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-12" style={{ background: "#162040" }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image src="/logo.png" width={110} height={38} alt="Dexo" className="object-contain" />
            <p className="text-gray-500 text-sm mt-2">{t("tagline")}</p>
          </div>

          <div className="flex flex-col gap-2">
            <Link
              href={`/${locale}`}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              {nav("home")}
            </Link>
            <Link
              href={`/${locale}/jobs`}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              {nav("jobs")}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              {t("about")}
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <a
              href="https://www.linkedin.com/company/dexo-br/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <LinkedInIcon />
              {t("linkedin")}
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center flex flex-col items-center gap-3">
          <LGPDModal />
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} DEXO. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
