"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const t = useTranslations("services");
  const locale = useLocale();
  const learnMore = locale === "pt" ? "Saiba mais" : "Learn more";

  const services = [
    {
      title: t("rec_title"),
      desc: t("rec_desc"),
      // Recruitment: professional woman in tech interview
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85",
      accent: "purple" as const,
      href: `/${locale}/jobs`,
    },
    {
      title: t("out_title"),
      desc: t("out_desc"),
      // Outsourcing: remote distributed team on video call
      img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=900&q=85",
      accent: "cyan" as const,
      href: `/${locale}/about#services`,
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer"
              style={{ minHeight: "320px" }}
            >
              {/* Background image */}
              <Image
                src={svc.img}
                alt={svc.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 transition-all duration-300"
                style={{
                  background:
                    svc.accent === "purple"
                      ? "linear-gradient(135deg, rgba(124,58,237,0.85) 0%, rgba(9,12,22,0.75) 100%)"
                      : "linear-gradient(135deg, rgba(9,12,22,0.8) 0%, rgba(34,211,238,0.7) 100%)",
                }}
              />
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{svc.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-5 max-w-sm">{svc.desc}</p>
                <Link
                  href={svc.href}
                  className="flex items-center gap-2 text-white text-sm font-semibold group-hover:gap-3 transition-all duration-200 w-fit"
                >
                  {learnMore}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
