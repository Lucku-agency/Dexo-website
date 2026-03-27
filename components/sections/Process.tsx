"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MessageSquare, Languages, FileCode2, Handshake } from "lucide-react";

export default function Process() {
  const t = useTranslations("process");

  const steps = [
    {
      num: t("s1_num"),
      title: t("s1_title"),
      desc: t("s1_desc"),
      icon: <MessageSquare className="w-6 h-6" />,
    },
    {
      num: t("s2_num"),
      title: t("s2_title"),
      desc: t("s2_desc"),
      icon: <Languages className="w-6 h-6" />,
    },
    {
      num: t("s3_num"),
      title: t("s3_title"),
      desc: t("s3_desc"),
      icon: <FileCode2 className="w-6 h-6" />,
    },
    {
      num: t("s4_num"),
      title: t("s4_title"),
      desc: t("s4_desc"),
      icon: <Handshake className="w-6 h-6" />,
    },
  ];

  return (
    <section id="process" className="py-24 px-6">
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
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            {t("headline")}
          </h2>
          <p className="text-gray-400 text-lg">{t("sub")}</p>
        </motion.div>

        <div className="relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-purple/0 via-purple/50 to-purple/0 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative glass-card p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-purple/20 border border-purple/30 flex items-center justify-center mx-auto mb-4 text-purple">
                  {step.icon}
                </div>
                <div className="text-xs text-cyan font-mono mb-2">
                  {step.num}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
