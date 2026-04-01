"use client";

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export default function GlobalBanner() {
  const locale = useLocale();
  const isPt = locale === "pt";

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
          alt="Global tech network"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(9,12,22,0.92) 0%, rgba(124,58,237,0.6) 50%, rgba(9,12,22,0.88) 100%)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4">
            {isPt ? "Brasil → Estados Unidos" : "Brazil → United States"}
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {isPt ? (
              <>A ponte entre <span className="gradient-text">talentos de alto nível</span> e as empresas que estão construindo o futuro</>
            ) : (
              <>The bridge between <span className="gradient-text">world-class talent</span> and the companies building tomorrow</>
            )}
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            {isPt
              ? "Com raízes profundas no ecossistema tech brasileiro em expansão e um histórico comprovado nos mercados americanos, a DEXO oferece acesso a engenheiros, desenvolvedores e especialistas que transformam times."
              : "With deep roots in Brazil's booming tech ecosystem and a proven track record in U.S. markets, DEXO gives you access to engineers, developers, and specialists that transform teams."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
