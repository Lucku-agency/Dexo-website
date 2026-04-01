"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function CompanyForm() {
  const t = useTranslations("form");
  const [loaded, setLoaded] = useState(false);

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
          className="glass-card p-2 overflow-hidden relative"
          style={{ minHeight: "620px" }}
        >
          {/* Loading state */}
          {!loaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10" style={{ background: "rgba(15,22,41,0.6)" }}>
              <Loader2 size={28} className="animate-spin" style={{ color: "#22D3EE" }} />
              <span className="text-sm text-gray-400">{t("status_loading")}</span>
            </div>
          )}
          <iframe
            className="clickup-embed clickup-dynamic-height w-full"
            src="https://forms.clickup.com/90171069955/f/2kz9ung3-737/TSSGMCH1XCTHUWDHZV"
            width="100%"
            height="620"
            style={{ background: "transparent", border: "none", borderRadius: "10px" }}
            onLoad={() => setLoaded(true)}
          />
        </motion.div>
      </div>
    </section>
  );
}
