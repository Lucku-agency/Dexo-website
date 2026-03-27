"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";

const PARTICLES = [
  { x: "10%", y: "20%", size: 3, delay: 0, duration: 8 },
  { x: "85%", y: "15%", size: 2, delay: 1, duration: 10 },
  { x: "25%", y: "70%", size: 4, delay: 2, duration: 12 },
  { x: "70%", y: "60%", size: 2, delay: 0.5, duration: 9 },
  { x: "50%", y: "30%", size: 3, delay: 1.5, duration: 11 },
  { x: "90%", y: "80%", size: 2, delay: 3, duration: 8 },
  { x: "15%", y: "85%", size: 3, delay: 2.5, duration: 13 },
  { x: "60%", y: "10%", size: 2, delay: 0.8, duration: 7 },
  { x: "40%", y: "55%", size: 4, delay: 1.2, duration: 14 },
  { x: "75%", y: "40%", size: 2, delay: 3.5, duration: 10 },
];

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple/15 rounded-full blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan/10 rounded-full blur-[120px] animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple/8 rounded-full blur-[100px] animate-float-slow" />
      </div>

      {/* Network grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(124,58,237,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size * 2,
            height: p.size * 2,
            background: i % 2 === 0 ? "rgba(124,58,237,0.6)" : "rgba(34,211,238,0.5)",
          }}
          animate={{
            y: [0, -25, 10, 0],
            x: [0, 15, -10, 0],
            opacity: [0.3, 0.7, 0.4, 0.3],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* SVG connecting lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.line x1="10%" y1="20%" x2="25%" y2="70%" stroke="#7C3AED" strokeWidth="1"
          animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 6, repeat: Infinity }} />
        <motion.line x1="85%" y1="15%" x2="70%" y2="60%" stroke="#22D3EE" strokeWidth="1"
          animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 8, repeat: Infinity, delay: 1 }} />
        <motion.line x1="50%" y1="30%" x2="70%" y2="60%" stroke="#7C3AED" strokeWidth="1"
          animate={{ opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 7, repeat: Infinity, delay: 2 }} />
        <motion.line x1="25%" y1="70%" x2="60%" y2="10%" stroke="#22D3EE" strokeWidth="1"
          animate={{ opacity: [0.15, 0.45, 0.15] }} transition={{ duration: 9, repeat: Infinity, delay: 0.5 }} />
        <motion.line x1="40%" y1="55%" x2="75%" y2="40%" stroke="#7C3AED" strokeWidth="1"
          animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 5, repeat: Infinity, delay: 3 }} />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-cyan mb-8"
        >
          <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
          {t("badge")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
        >
          <span className="gradient-text">{t("headline")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {t("sub")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-purple hover:bg-purple-light text-white font-semibold px-8 py-4 rounded-xl transition-all glow-purple text-lg"
          >
            {t("cta_hire")}
          </a>
          <Link
            href={`/${locale}/jobs`}
            className="border border-cyan text-cyan hover:bg-cyan/10 font-semibold px-8 py-4 rounded-xl transition-all text-lg"
          >
            {t("cta_jobs")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
