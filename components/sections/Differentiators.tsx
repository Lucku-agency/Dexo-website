"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { UserCheck, Percent } from "lucide-react";

export default function Differentiators() {
  const t = useTranslations("diff");

  const cards = [
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: t("d1_t"),
      desc: t("d1_d"),
      accent: "purple",
    },
    {
      icon: <Percent className="w-8 h-8" />,
      title: t("d2_t"),
      desc: t("d2_d"),
      accent: "cyan",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-cyan mb-6">
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text">
            {t("headline")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative overflow-hidden rounded-2xl p-8 border ${
                card.accent === "purple"
                  ? "border-purple/30 bg-purple/5"
                  : "border-cyan/30 bg-cyan/5"
              }`}
            >
              <div
                className={`absolute top-0 right-0 w-40 h-40 rounded-full blur-[80px] pointer-events-none ${
                  card.accent === "purple" ? "bg-purple/20" : "bg-cyan/20"
                }`}
              />
              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    card.accent === "purple"
                      ? "bg-purple/20 text-purple"
                      : "bg-cyan/20 text-cyan"
                  }`}
                >
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
