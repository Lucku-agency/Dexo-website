"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2, Server, Layers, Cloud, Database, Brain, Users, FileCheck, ShieldCheck, Target, Headphones, Building2, Globe, MonitorSmartphone, DollarSign, Zap } from "lucide-react";

type Tab = "domains" | "services" | "approach";

const domainIcons = [Code2, Server, Layers, Cloud, Database, Brain];
const serviceIcons = [Users, FileCheck, Layers, ShieldCheck, Target, Headphones];
const approachIcons = [Building2, Globe, MonitorSmartphone, DollarSign, ShieldCheck, Zap];

export default function ExpertiseSection() {
  const t = useTranslations("expertise");
  const [activeTab, setActiveTab] = useState<Tab>("domains");

  const tabs: { key: Tab; label: string }[] = [
    { key: "domains", label: t("tab_domains") },
    { key: "services", label: t("tab_services") },
    { key: "approach", label: t("tab_approach") },
  ];

  const domainItems = [t("d1"), t("d2"), t("d3"), t("d4"), t("d5"), t("d6")];
  const serviceItems = [t("s1"), t("s2"), t("s3"), t("s4"), t("s5"), t("s6")];
  const approachItems = [t("a1"), t("a2"), t("a3"), t("a4"), t("a5"), t("a6")];

  const getItems = () => {
    if (activeTab === "domains") return { items: domainItems, icons: domainIcons, desc: t("domains_desc"), explore: t("explore_domains") };
    if (activeTab === "services") return { items: serviceItems, icons: serviceIcons, desc: t("services_desc"), explore: t("explore_services") };
    return { items: approachItems, icons: approachIcons, desc: t("approach_desc"), explore: t("explore_approach") };
  };

  const { items, icons, desc, explore } = getItems();

  return (
    <section className="py-20 border-t border-white/5" style={{ background: "linear-gradient(180deg, #0F1629 0%, #162040 50%, #0F1629 100%)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Tab navigation */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div className="flex gap-1 bg-white/5 border border-white/10 rounded-xl p-1 w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.key
                    ? "bg-purple text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab + "_desc"}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 text-sm max-w-md hidden md:block"
            >
              {desc}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Item grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8"
          >
            {items.map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group glass-card p-4 flex flex-col items-center gap-3 text-center cursor-pointer hover:border-purple/40 hover:bg-purple/5 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center group-hover:bg-purple/20 transition-all">
                    <Icon size={18} className="text-purple-light" />
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors leading-tight">
                    {item}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Explore CTA */}
        <div className="flex justify-start">
          <button className="flex items-center gap-2 text-cyan text-sm font-medium hover:gap-3 transition-all duration-200 group">
            {explore}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
