"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isPt = locale === "pt";

  // 3 stats (15+ Countries removed)
  const stats = [
    { val: t("stat1_val"), label: t("stat1_label") },
    { val: t("stat2_val"), label: t("stat2_label") },
    { val: t("stat3_val"), label: t("stat3_label") },
  ];

  const checklistItems = [
    {
      en: "Validated candidates only — no guesswork",
      pt: "Profissionais pré-validados — sem tentativa e erro",
      accent: "purple",
    },
    {
      en: "U.S. market expertise since 2016",
      pt: "Experiência sólida no mercado dos EUA desde 2016",
      accent: "cyan",
    },
    {
      en: "200+ successful placements across 15+ countries",
      pt: "Mais de 200 alocações bem-sucedidas em mais de 15 países",
      accent: "purple",
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[420px] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
              alt="DEXO tech team collaborating"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.3) 0%, rgba(34,211,238,0.15) 100%)" }} />
            {/* Stats overlay bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: "linear-gradient(to top, rgba(9,12,22,0.95) 0%, transparent 100%)" }}>
              <div className="grid grid-cols-3 gap-2">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl font-bold gradient-text">{stat.val}</div>
                    <div className="text-gray-400 text-xs leading-tight">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-cyan w-fit">
              {t("badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
              {t("headline")}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {t("desc")}
            </p>
            <div className="flex flex-col gap-3 pt-2">
              {checklistItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.accent === "purple" ? "bg-purple" : "bg-cyan"}`} />
                  <span className="text-gray-300 text-sm">{isPt ? item.pt : item.en}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
