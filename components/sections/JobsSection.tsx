"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Layout,
  Server,
  Layers,
  MapPin,
  Clock,
  CheckCircle,
  Send,
} from "lucide-react";

const applicationSchema = z.object({
  name: z.string().min(2, "f_required"),
  email: z.string().email("f_invalid_email"),
  linkedin: z.string().url("f_invalid_url"),
  interest: z.string().min(1, "f_required"),
});

type ApplicationData = z.infer<typeof applicationSchema>;

export default function JobsSection() {
  const t = useTranslations("jobs_page");
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationData>({
    resolver: zodResolver(applicationSchema),
  });

  const jobs = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: t("j1_title"),
      desc: t("j1_desc"),
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: t("j2_title"),
      desc: t("j2_desc"),
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: t("j3_title"),
      desc: t("j3_desc"),
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: t("j4_title"),
      desc: t("j4_desc"),
    },
  ];

  const onSubmit = async (data: ApplicationData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log("Application submitted:", data);
    setSuccess(true);
  };

  const getErrorMessage = (errorMessage: string | undefined) => {
    if (!errorMessage) return undefined;
    const key = errorMessage as
      | "f_required"
      | "f_invalid_email"
      | "f_invalid_url";
    return t(key);
  };

  return (
    <div className="space-y-24">
      {/* Job Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="glass-card p-6 hover:border-white/15 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-purple/15 flex items-center justify-center text-purple mb-4 group-hover:bg-purple/25 transition-all">
              {job.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {job.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {job.desc}
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {t("type")}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {t("location")}
              </span>
            </div>
            <a
              href="#apply"
              className="inline-block mt-4 text-sm text-purple hover:text-purple-light font-medium transition-colors"
            >
              {t("apply")} &rarr;
            </a>
          </motion.div>
        ))}
      </div>

      {/* Application Form */}
      <div id="apply" className="max-w-2xl mx-auto">
        {success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-12 text-center"
          >
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              {t("f_success")}
            </h3>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              {t("form_headline")}
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card p-8 space-y-6"
            >
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  {t("f_name")}
                </label>
                <input
                  {...register("name")}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:border-cyan/50 transition-all"
                  placeholder={t("f_name")}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {getErrorMessage(errors.name.message)}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  {t("f_email")}
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:border-cyan/50 transition-all"
                  placeholder={t("f_email")}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {getErrorMessage(errors.email.message)}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  {t("f_linkedin")}
                </label>
                <input
                  {...register("linkedin")}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:border-cyan/50 transition-all"
                  placeholder="https://linkedin.com/in/your-profile"
                />
                {errors.linkedin && (
                  <p className="text-red-400 text-sm mt-1">
                    {getErrorMessage(errors.linkedin.message)}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  {t("f_interest")}
                </label>
                <select
                  {...register("interest")}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan/50 focus:border-cyan/50 transition-all"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-gray-800">
                    {t("f_placeholder")}
                  </option>
                  <option value="salesforce" className="bg-gray-800">
                    {t("j1_title")}
                  </option>
                  <option value="frontend" className="bg-gray-800">
                    {t("j2_title")}
                  </option>
                  <option value="backend" className="bg-gray-800">
                    {t("j3_title")}
                  </option>
                  <option value="fullstack" className="bg-gray-800">
                    {t("j4_title")}
                  </option>
                </select>
                {errors.interest && (
                  <p className="text-red-400 text-sm mt-1">
                    {getErrorMessage(errors.interest.message)}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple hover:bg-purple-light text-white font-semibold py-4 rounded-xl transition-all glow-purple flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "..." : t("f_submit")}
              </button>
            </form>
          </motion.div>
        )}
      </div>
    </div>
  );
}
