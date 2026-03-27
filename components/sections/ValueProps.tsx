"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Star,
  DollarSign,
  Zap,
  ShieldCheck,
  ListChecks,
  HeadphonesIcon,
} from "lucide-react";

export default function ValueProps() {
  const t = useTranslations("value");

  const items = [
    { icon: <Star className="w-6 h-6" />, t: t("i1_t"), d: t("i1_d") },
    { icon: <DollarSign className="w-6 h-6" />, t: t("i2_t"), d: t("i2_d") },
    { icon: <Zap className="w-6 h-6" />, t: t("i3_t"), d: t("i3_d") },
    { icon: <ShieldCheck className="w-6 h-6" />, t: t("i4_t"), d: t("i4_d") },
    { icon: <ListChecks className="w-6 h-6" />, t: t("i5_t"), d: t("i5_d") },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      t: t("i6_t"),
      d: t("i6_d"),
    },
  ];

  return (
    <section id="why" className="py-24 px-6 bg-surface/50">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card p-6 hover:border-white/15 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-purple/15 flex items-center justify-center text-purple mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.t}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
