"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const BLOCKS = {
  industries: {
    items_en: ["Fintech & Banking", "Healthcare Technology", "E-Commerce & Retail", "Cloud & SaaS", "Enterprise Software", "Startups & Scale-ups"],
    items_pt: ["Fintech & Finanças", "Tecnologia na Saúde", "E-Commerce & Varejo", "Cloud & SaaS", "Software Corporativo", "Startups & Scale-ups"],
    href_en: "/en/about#industries",
    href_pt: "/pt/about#industries",
  },
  services: {
    items_en: ["Permanent Placement", "Contract Staffing", "Team Outsourcing", "Technical Vetting", "Talent Strategy", "Onboarding Support"],
    items_pt: ["Contratação Permanente", "Contratação por Contrato", "Outsourcing de Times", "Triagem Técnica", "Estratégia de Talentos", "Suporte ao Onboarding"],
    href_en: "/en/about#services",
    href_pt: "/pt/about#services",
  },
  solutions: {
    items_en: ["DEXO Match Engine", "DEXO Vetting System", "DEXO Talent Pool", "DEXO Fast Track", "DEXO Global Network", "DEXO Partnership"],
    items_pt: ["DEXO Match Engine", "DEXO Vetting System", "DEXO Talent Pool", "DEXO Fast Track", "DEXO Global Network", "DEXO Partnership"],
    href_en: "/en/about#solutions",
    href_pt: "/pt/about#solutions",
  },
};

export default function IndustriesSection() {
  const t = useTranslations("industries_section");
  const locale = useLocale();
  const isPt = locale === "pt";

  const blocks = [
    {
      key: "industries",
      title: t("tab_industries"),
      desc: t("ind_desc"),
      explore: t("ind_explore"),
      items: isPt ? BLOCKS.industries.items_pt : BLOCKS.industries.items_en,
      href: isPt ? BLOCKS.industries.href_pt : BLOCKS.industries.href_en,
    },
    {
      key: "services",
      title: t("tab_services"),
      desc: t("svc_desc"),
      explore: t("svc_explore"),
      items: isPt ? BLOCKS.services.items_pt : BLOCKS.services.items_en,
      href: isPt ? BLOCKS.services.href_pt : BLOCKS.services.href_en,
    },
    {
      key: "solutions",
      title: t("tab_solutions"),
      desc: t("sol_desc"),
      explore: t("sol_explore"),
      items: isPt ? BLOCKS.solutions.items_pt : BLOCKS.solutions.items_en,
      href: isPt ? BLOCKS.solutions.href_pt : BLOCKS.solutions.href_en,
    },
  ];

  return (
    <section
      className="w-full"
      style={{
        background: "#0D1830",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="grid grid-cols-1 lg:grid-cols-3"
          style={{ borderLeft: "1px solid rgba(255,255,255,0.08)" }}
        >
          {blocks.map((block, bi) => (
            <motion.div
              key={block.key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: bi * 0.1 }}
              className="flex flex-col gap-5 px-8 py-10"
              style={{
                borderRight: "1px solid rgba(255,255,255,0.08)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Title */}
              <h3 className="text-base font-bold text-white tracking-wide uppercase" style={{ letterSpacing: "0.08em" }}>
                {block.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {block.desc}
              </p>

              {/* Pills */}
              <div className="flex flex-wrap gap-2 mt-1">
                {block.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-default select-none"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#94A3B8",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.background = "rgba(124,58,237,0.12)";
                      (e.currentTarget as HTMLSpanElement).style.borderColor = "rgba(124,58,237,0.4)";
                      (e.currentTarget as HTMLSpanElement).style.color = "#E2E8F0";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.background = "rgba(255,255,255,0.05)";
                      (e.currentTarget as HTMLSpanElement).style.borderColor = "rgba(255,255,255,0.1)";
                      (e.currentTarget as HTMLSpanElement).style.color = "#94A3B8";
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Explore CTA */}
              <Link
                href={block.href}
                className="flex items-center gap-1.5 text-xs font-semibold mt-auto pt-3 group w-fit"
                style={{ color: "#22D3EE" }}
              >
                <span className="group-hover:underline">{block.explore}</span>
                <ArrowRight
                  size={13}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
