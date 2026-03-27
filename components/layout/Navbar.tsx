"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    window.location.href = segments.join("/");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F1629]/95 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center">
          <Image
            src="/logo.png"
            alt="Dexo - Global Tech Talent"
            width={140}
            height={48}
            className="object-contain"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href={`/${locale}`}
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            {t("home")}
          </Link>
          <Link
            href={`/${locale}/jobs`}
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            {t("jobs")}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            {t("about")}
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm">
            <button
              onClick={() => switchLocale("en")}
              className={`px-2 py-1 rounded transition-colors ${
                locale === "en"
                  ? "text-white font-semibold"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              EN
            </button>
            <span className="text-gray-600">|</span>
            <button
              onClick={() => switchLocale("pt")}
              className={`px-2 py-1 rounded transition-colors ${
                locale === "pt"
                  ? "text-white font-semibold"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              PT
            </button>
          </div>
          <a
            href="#contact"
            className="bg-purple hover:bg-purple-light text-white text-sm font-medium px-5 py-2 rounded-lg transition-all glow-purple"
          >
            {t("hire")}
          </a>
        </div>

        <button
          className="md:hidden text-gray-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          <Link
            href={`/${locale}`}
            className="text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            {t("home")}
          </Link>
          <Link
            href={`/${locale}/jobs`}
            className="text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            {t("jobs")}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="text-gray-300 hover:text-white"
            onClick={() => setMenuOpen(false)}
          >
            {t("about")}
          </Link>
          <div className="flex gap-3">
            <button
              onClick={() => switchLocale("en")}
              className={
                locale === "en" ? "text-white font-bold" : "text-gray-500"
              }
            >
              EN
            </button>
            <button
              onClick={() => switchLocale("pt")}
              className={
                locale === "pt" ? "text-white font-bold" : "text-gray-500"
              }
            >
              PT
            </button>
          </div>
          <a
            href="#contact"
            className="bg-purple text-white text-sm font-medium px-5 py-2 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            {t("hire")}
          </a>
        </div>
      )}
    </nav>
  );
}
