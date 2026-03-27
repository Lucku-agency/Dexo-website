"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function CompanyForm() {
  const t = useTranslations("form");

  return (
    <section id="contact" className="py-24 px-6" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.05) 50%, transparent 100%)" }}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-cyan mb-6">
            {t("badge")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            {t("headline")}
          </h2>
          <p className="text-gray-400 text-lg">{t("sub")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-card p-2 overflow-hidden"
          style={{ minHeight: "600px" }}
        >
          <iframe
            className="clickup-embed clickup-dynamic-height w-full"
            src="https://forms.clickup.com/90171069955/f/2kz9ung3-737/TSSGMCH1XCTHUWDHZV"
            width="100%"
            height="600"
            style={{ background: "transparent", border: "none", borderRadius: "10px" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
