"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import {
  Target, Eye, Star, Handshake, Zap, Shield,
  Users, Globe, TrendingUp, CheckCircle2, ArrowRight,
  Building2, Cpu, ShoppingCart, HeartPulse, Banknote, Rocket
} from "lucide-react";
import Image from "next/image";

const values = [
  { key: "v1", icon: Star, color: "#7C3AED" },
  { key: "v2", icon: Eye, color: "#22D3EE" },
  { key: "v3", icon: Zap, color: "#7C3AED" },
  { key: "v4", icon: Handshake, color: "#22D3EE" },
];

// Bilingual industries data
const industriesData = {
  en: [
    { icon: Banknote, label: "Fintech & Banking", desc: "Connecting quantitative engineers and fintech specialists to innovate financial products." },
    { icon: HeartPulse, label: "Healthcare Technology", desc: "Tech talent for health platforms, medical software and digital health solutions." },
    { icon: ShoppingCart, label: "E-Commerce & Retail", desc: "Frontend, backend and data specialists for e-commerce and digital retail operations." },
    { icon: Cpu, label: "Cloud & SaaS", desc: "DevOps, cloud architects and SaaS developers for scalable product companies." },
    { icon: Building2, label: "Enterprise Software", desc: "Senior developers for complex ERP, CRM and enterprise system integrations." },
    { icon: Rocket, label: "Startups & Scale-ups", desc: "Agile talent for fast-growing companies building their core product teams." },
  ],
  pt: [
    { icon: Banknote, label: "Fintech & Finanças", desc: "Conectamos engenheiros quantitativos e especialistas em fintech para inovar produtos financeiros." },
    { icon: HeartPulse, label: "Tecnologia na Saúde", desc: "Talentos tech para plataformas de saúde, software médico e soluções de saúde digital." },
    { icon: ShoppingCart, label: "E-Commerce & Varejo", desc: "Especialistas em frontend, backend e dados para operações de e-commerce e varejo digital." },
    { icon: Cpu, label: "Cloud & SaaS", desc: "DevOps, arquitetos cloud e desenvolvedores SaaS para empresas de produtos escaláveis." },
    { icon: Building2, label: "Software Corporativo", desc: "Desenvolvedores sênior para integrações complexas de ERP, CRM e sistemas enterprise." },
    { icon: Rocket, label: "Startups & Scale-ups", desc: "Talentos ágeis para empresas em crescimento acelerado que constroem seus times principais." },
  ],
};

const servicesData = {
  en: [
    { title: "Permanent Placement", desc: "End-to-end search, vetting, and placement of full-time tech professionals." },
    { title: "Contract Staffing", desc: "Flexible engagement for project-based or time-limited technology needs." },
    { title: "Team Outsourcing", desc: "Dedicated tech teams that operate as a seamless extension of your company." },
    { title: "Technical Vetting", desc: "Rigorous skills assessment — technical interviews, English testing, and culture fit." },
    { title: "Talent Strategy", desc: "Consulting on how to build, scale and retain global tech talent over time." },
    { title: "Onboarding Support", desc: "We stay with you through onboarding to ensure successful team integration." },
  ],
  pt: [
    { title: "Contratação Permanente", desc: "Busca, triagem e colocação completa de profissionais tech em tempo integral." },
    { title: "Contratação por Contrato", desc: "Engajamento flexível para necessidades de tecnologia baseadas em projetos ou com prazo definido." },
    { title: "Outsourcing de Times", desc: "Times tech dedicados que operam como extensão perfeita da sua empresa." },
    { title: "Triagem Técnica", desc: "Avaliação rigorosa de habilidades — entrevistas técnicas, teste de inglês e fit cultural." },
    { title: "Estratégia de Talentos", desc: "Consultoria sobre como construir, escalar e reter talentos tech globais ao longo do tempo." },
    { title: "Suporte ao Onboarding", desc: "Permanecemos com você durante a integração para garantir o sucesso do time." },
  ],
};

const solutionsData = {
  en: [
    { title: "DEXO Match Engine", desc: "Proprietary matching algorithm that aligns candidate profiles to role requirements with precision." },
    { title: "DEXO Vetting System", desc: "Multi-layer candidate evaluation combining technical, language, and soft-skill assessment." },
    { title: "DEXO Talent Pool", desc: "Pre-vetted database of 1,000+ Brazilian tech professionals ready to be presented." },
    { title: "DEXO Fast Track", desc: "Accelerated hiring program for urgent roles — first candidates within 5 business days." },
    { title: "DEXO Global Network", desc: "Active ecosystem of U.S. companies, Brazilian universities, and tech communities." },
    { title: "DEXO Partnership", desc: "Long-term engagement model with volume discounts and dedicated account management." },
  ],
  pt: [
    { title: "DEXO Match Engine", desc: "Algoritmo proprietário de matching que alinha perfis de candidatos aos requisitos da vaga com precisão." },
    { title: "DEXO Vetting System", desc: "Avaliação multicamada de candidatos combinando testes técnicos, de idioma e soft skills." },
    { title: "DEXO Talent Pool", desc: "Banco de dados pré-triado com mais de 1.000 profissionais tech brasileiros prontos para apresentação." },
    { title: "DEXO Fast Track", desc: "Programa acelerado de contratação para vagas urgentes — primeiros candidatos em até 5 dias úteis." },
    { title: "DEXO Global Network", desc: "Ecossistema ativo de empresas americanas, universidades e comunidades tech brasileiras." },
    { title: "DEXO Partnership", desc: "Modelo de engajamento de longo prazo com descontos por volume e gestão de conta dedicada." },
  ],
};

const whyChecklist = {
  en: [
    "Deep knowledge of the Brazilian tech market",
    "Full understanding of U.S. hiring standards",
    "Structured 4-step candidate validation",
    "Long-term partnership focus",
  ],
  pt: [
    "Profundo conhecimento do mercado tech brasileiro",
    "Total entendimento dos padrões de contratação americanos",
    "Validação estruturada de candidatos em 4 etapas",
    "Foco em parcerias de longo prazo",
  ],
};

const statsData = {
  en: [
    { value: "8+", label: "Years of Experience", icon: TrendingUp },
    { value: "200+", label: "Successful Placements", icon: Users },
    { value: "98%", label: "Client Satisfaction", icon: CheckCircle2 },
    { value: "15+", label: "Countries Served", icon: Globe },
  ],
  pt: [
    { value: "8+", label: "Anos de Experiência", icon: TrendingUp },
    { value: "200+", label: "Colocações Realizadas", icon: Users },
    { value: "98%", label: "Satisfação dos Clientes", icon: CheckCircle2 },
    { value: "15+", label: "Países Atendidos", icon: Globe },
  ],
};

export default function AboutClient() {
  const t = useTranslations("about_page");
  const locale = useLocale();
  const isPt = locale === "pt";

  const industries = isPt ? industriesData.pt : industriesData.en;
  const services = isPt ? servicesData.pt : servicesData.en;
  const solutions = isPt ? solutionsData.pt : solutionsData.en;
  const checklist = isPt ? whyChecklist.pt : whyChecklist.en;
  const stats = isPt ? statsData.pt : statsData.en;

  return (
    <div className="min-h-screen pt-28 pb-20">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt="Tech professionals collaborating"
            fill
            className="object-cover opacity-15"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(15,22,41,0.7) 0%, rgba(15,22,41,0.97) 100%)" }} />
        </div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-cyan/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-cyan mb-8"
          >
            <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
            {t("badge")}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold gradient-text mb-6"
          >
            {t("headline")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto"
          >
            {t("desc")}
          </motion.p>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <section style={{ background: "rgba(124,58,237,0.06)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <Icon size={20} style={{ color: "#22D3EE" }} />
              <span className="text-3xl font-extrabold gradient-text">{value}</span>
              <span className="text-sm text-gray-400">{label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── STORY + IMAGE ────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#22D3EE" }}>
              {isPt ? "Nossa História" : "Our Story"}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              {isPt ? (
                <><span className="gradient-text">Construída</span> para conectar dois mundos excepcionais</>
              ) : (
                <>Built to bridge two <span className="gradient-text">exceptional worlds</span></>
              )}
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {isPt
                ? "A DEXO foi fundada com uma única convicção: o Brasil produz alguns dos engenheiros de software mais talentosos do mundo, e empresas americanas merecem acesso a eles — sem a complexidade, o custo e os riscos que a contratação internacional costumava exigir."
                : "DEXO was founded on a single conviction: Brazil produces some of the world's most talented software engineers, and U.S. companies deserve access to them — without the complexity, the cost, and the risk that traditionally came with international hiring."}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {isPt
                ? "Ao longo de 8 anos, construímos os processos, a rede e a metodologia para tornar a contratação tech internacional simples e eficiente. Hoje, atuamos como uma extensão confiável dos seus times de RH e engenharia."
                : "Over 8 years, we have built the processes, the network, and the methodology to make cross-border tech hiring feel effortless. Today, we operate as a trusted extension of your HR and engineering teams."}
            </p>
            <a
              href={`/${locale}#contact`}
              className="flex items-center gap-2 text-sm font-semibold mt-2 group w-fit"
              style={{ color: "#22D3EE" }}
            >
              <span className="group-hover:underline">{isPt ? "Trabalhe com a DEXO" : "Work with us"}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-80 md:h-[440px] rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* Different image: diverse tech team */}
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
              alt={isPt ? "Time diverso de tecnologia" : "Diverse tech team"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, transparent 60%)" }} />
          </motion.div>
        </div>
      </section>

      {/* ── MISSION & VISION ─────────────────────────────── */}
      <section className="px-6 py-16" style={{ background: "linear-gradient(180deg, transparent, rgba(124,58,237,0.04), transparent)" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.25)" }}>
              <Target size={22} style={{ color: "#8B5CF6" }} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t("mission_title")}</h3>
            <p className="text-gray-400 leading-relaxed">{t("mission_desc")}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(34,211,238,0.12)", border: "1px solid rgba(34,211,238,0.2)" }}>
              <Eye size={22} style={{ color: "#22D3EE" }} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{t("vision_title")}</h3>
            <p className="text-gray-400 leading-relaxed">{t("vision_desc")}</p>
          </motion.div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────── */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-10"
          >
            {t("values_title")}
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map(({ key, icon: Icon, color }, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-6 flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                  <Icon size={20} style={{ color }} />
                </div>
                <span className="font-semibold text-white">{t(key as "v1" | "v2" | "v3" | "v4")}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────── */}
      <section id="industries" className="px-6 py-20" style={{ background: "rgba(13,24,48,0.8)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-14">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: "#22D3EE" }}>
                {isPt ? "Indústrias" : "Industries"}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                {isPt ? (
                  <>Talentos tech para cada <span className="gradient-text">setor que importa</span></>
                ) : (
                  <>Tech talent for every <span className="gradient-text">sector that matters</span></>
                )}
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {isPt
                  ? "De finanças reguladas a startups em crescimento acelerado, temos expertise profunda em colocar os perfis certos nos setores que moldam a economia digital."
                  : "From regulated finance to high-growth startups, we have deep expertise in placing the right profiles across the industries shaping the digital economy."}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-2xl overflow-hidden hidden md:block"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Unique image: financial data / trading screens */}
              <Image
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=900&q=80"
                alt={isPt ? "Telas de dados financeiros" : "Financial data screens"}
                fill
                className="object-cover opacity-70"
                sizes="50vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, transparent 70%)" }} />
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass-card p-6 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.22)" }}>
                  <Icon size={18} style={{ color: "#8B5CF6" }} />
                </div>
                <h4 className="font-semibold text-white text-sm">{label}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section id="services" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-14">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-2xl overflow-hidden hidden md:block order-last md:order-first"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Unique image: interview / talent screening */}
              <Image
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6d0?auto=format&fit=crop&w=900&q=80"
                alt={isPt ? "Processo de entrevista de talentos" : "Talent interview process"}
                fill
                className="object-cover opacity-70"
                sizes="50vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.15) 0%, transparent 70%)" }} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: "#22D3EE" }}>
                {isPt ? "Serviços" : "Services"}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                {isPt ? (
                  <>Contratação completa, <span className="gradient-text">sem fricção</span></>
                ) : (
                  <>Full-cycle hiring, <span className="gradient-text">zero friction</span></>
                )}
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {isPt
                  ? "Seja uma posição ou um time inteiro, nossos serviços cobrem cada etapa da jornada de contratação — da primeira busca à primeira semana bem-sucedida no trabalho."
                  : "Whether you need one specialist or an entire team, our services cover every stage of the hiring journey — from the first search to a successful first week on the job."}
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(({ title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass-card p-6 flex flex-col gap-2"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan inline-block" />
                  <h4 className="font-semibold text-white text-sm">{title}</h4>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ────────────────────────────────────── */}
      <section id="solutions" className="px-6 py-20" style={{ background: "rgba(13,24,48,0.8)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-14">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-xs font-bold uppercase tracking-widest mb-3 block" style={{ color: "#22D3EE" }}>
                {isPt ? "Soluções" : "Solutions"}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
                {isPt ? (
                  <>Ferramentas proprietárias que <span className="gradient-text">aceleram resultados</span></>
                ) : (
                  <>Proprietary tools that <span className="gradient-text">accelerate results</span></>
                )}
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {isPt
                  ? "A metodologia e as ferramentas internas da DEXO foram desenvolvidas para tornar a contratação tech internacional mais rápida, confiável e de menor risco."
                  : "DEXO's internal methodology and tooling are purpose-built to make international tech hiring faster, more reliable, and lower risk — for both companies and candidates."}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-64 rounded-2xl overflow-hidden hidden md:block"
              style={{ border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {/* Unique image: code / tech / algorithm */}
              <Image
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80"
                alt={isPt ? "Algoritmo e código" : "Algorithm and code"}
                fill
                className="object-cover opacity-60"
                sizes="50vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.25) 0%, transparent 70%)" }} />
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map(({ title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass-card p-6 flex flex-col gap-2"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "linear-gradient(90deg,#7C3AED,#22D3EE)" }} />
                  <h4 className="font-semibold text-white text-sm">{title}</h4>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DEXO ─────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {/* Unique image: global handshake / partnership */}
            <Image
              src="https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=900&q=80"
              alt={isPt ? "Parceria global de negócios" : "Global business partnership"}
              fill
              className="object-cover opacity-75"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.12) 0%, rgba(124,58,237,0.12) 100%)" }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(34,211,238,0.15))", border: "1px solid rgba(255,255,255,0.1)" }}>
              <Shield size={24} style={{ color: "#22D3EE" }} />
            </div>
            <h3 className="text-3xl font-bold text-white">{t("team_title")}</h3>
            <p className="text-gray-400 leading-relaxed text-base">{t("team_desc")}</p>
            <div className="flex flex-col gap-3 mt-2">
              {checklist.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={16} style={{ color: "#22D3EE", flexShrink: 0 }} />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a
              href={`/${locale}#contact`}
              className="flex items-center gap-2 text-sm font-semibold mt-3 group w-fit"
              style={{ color: "#22D3EE" }}
            >
              <span className="group-hover:underline">
                {isPt ? "Comece a contratar com a DEXO" : "Start hiring with DEXO"}
              </span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
