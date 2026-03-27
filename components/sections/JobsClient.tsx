"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, Calendar, X, CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import { getActiveJobs, getDaysRemaining, type Job } from "@/lib/jobs-data";

export default function JobsClient() {
  const t = useTranslations("jobs_page");
  const locale = useLocale();
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showForm, setShowForm] = useState(false);

  const activeJobs = getActiveJobs();

  const getTitle = (job: Job) => locale === "pt" ? job.title_pt : job.title_en;
  const getDesc = (job: Job) => locale === "pt" ? job.description_pt : job.description_en;
  const getRequirements = (job: Job) => locale === "pt" ? job.requirements_pt : job.requirements_en;
  const getResponsibilities = (job: Job) => locale === "pt" ? job.responsibilities_pt : job.responsibilities_en;
  const getNiceToHave = (job: Job) => locale === "pt" ? (job.niceToHave_pt || []) : (job.niceToHave_en || []);

  const formatDate = (iso: string) => {
    return new Date(iso).toLocaleDateString(locale === "pt" ? "pt-BR" : "en-US", {
      year: "numeric", month: "short", day: "numeric"
    });
  };

  return (
    <>
      <section className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-cyan mb-6">
              <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
              {t("badge")}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold gradient-text mb-4">{t("headline")}</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t("sub")}</p>
          </motion.div>

          {/* Job listings */}
          {activeJobs.length === 0 ? (
            <div className="text-center text-gray-500 py-20">{t("no_jobs")}</div>
          ) : (
            <div className="space-y-4">
              {activeJobs.map((job, i) => {
                const daysLeft = getDaysRemaining(job.postedAt);
                return (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="glass-card p-6 hover:border-purple/30 transition-all duration-200 cursor-pointer group"
                    onClick={() => { setSelectedJob(job); setShowForm(false); }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h2 className="text-xl font-bold text-white group-hover:text-purple-light transition-colors">
                            {getTitle(job)}
                          </h2>
                          {daysLeft <= 7 && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                              {daysLeft}d
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-3">
                          <span className="flex items-center gap-1"><Clock size={14} />{job.type}</span>
                          <span className="flex items-center gap-1"><MapPin size={14} />{job.location}</span>
                          <span className="flex items-center gap-1"><Calendar size={14} />{t("posted")}: {formatDate(job.postedAt)}</span>
                          <span className="text-gray-500">{t("expires_in")}: {daysLeft} {t("days")}</span>
                        </div>
                        {/* Skill bubbles */}
                        <div className="flex flex-wrap gap-1.5">
                          {job.skills.map((skill, si) => (
                            <span
                              key={si}
                              className="px-2.5 py-1 rounded-full text-xs font-medium"
                              style={{
                                background: "rgba(124,58,237,0.1)",
                                border: "1px solid rgba(124,58,237,0.25)",
                                color: "#A78BFA",
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={(e) => { e.stopPropagation(); setSelectedJob(job); setShowForm(false); }}
                          className="flex items-center gap-2 text-sm text-gray-300 hover:text-white px-4 py-2 rounded-lg border border-white/10 hover:border-white/30 transition-all"
                        >
                          {t("apply")} <ChevronRight size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Job Detail Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(9,12,20,0.85)", backdropFilter: "blur(8px)" }}
            onClick={() => setSelectedJob(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10"
              style={{ background: "#1A2340" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="sticky top-0 z-10 flex items-start justify-between p-6 border-b border-white/8" style={{ background: "#1A2340" }}>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">{getTitle(selectedJob)}</h2>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1"><Clock size={13} />{selectedJob.type}</span>
                    <span className="flex items-center gap-1"><MapPin size={13} />{selectedJob.location}</span>
                    <span className="text-gray-500">{getDaysRemaining(selectedJob.postedAt)} {t("days")} {t("expires_in").toLowerCase()}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5 flex-shrink-0 ml-4"
                >
                  <X size={20} />
                </button>
              </div>

              {!showForm ? (
                <div className="p-6 space-y-6">
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">{getDesc(selectedJob)}</p>

                  {/* Requirements */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="w-1 h-5 bg-purple rounded-full" />
                      {t("requirements")}
                    </h3>
                    <ul className="space-y-2">
                      {getRequirements(selectedJob).map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <CheckCircle2 size={15} className="text-cyan mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="w-1 h-5 bg-cyan rounded-full" />
                      {t("responsibilities")}
                    </h3>
                    <ul className="space-y-2">
                      {getResponsibilities(selectedJob).map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <ArrowRight size={14} className="text-purple-light mt-0.5 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Nice to have */}
                  {getNiceToHave(selectedJob).length > 0 && (
                    <div>
                      <h3 className="text-base font-semibold text-gray-300 mb-3">
                        {locale === "pt" ? "Diferenciais" : "Nice to Have"}
                      </h3>
                      <ul className="space-y-2">
                        {getNiceToHave(selectedJob).map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Apply button */}
                  <div className="pt-2">
                    <button
                      onClick={() => setShowForm(true)}
                      className="w-full bg-purple hover:bg-purple-light text-white font-semibold py-4 rounded-xl transition-all glow-purple flex items-center justify-center gap-2"
                    >
                      {t("apply_now")}
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6">
                  <button
                    onClick={() => setShowForm(false)}
                    className="flex items-center gap-1 text-sm text-gray-400 hover:text-white mb-4 transition-colors"
                  >
                    &larr; {locale === "pt" ? "Voltar a vaga" : "Back to job"}
                  </button>
                  <div className="w-full" style={{ minHeight: "600px" }}>
                    <iframe
                      className="clickup-embed clickup-dynamic-height w-full"
                      src="https://forms.clickup.com/90171069955/f/2kz9ung3-737/TSSGMCH1XCTHUWDHZV"
                      width="100%"
                      height="600"
                      style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px" }}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
