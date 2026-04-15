"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";

export default function CompanyForm() {
  const t = useTranslations("form");
  const locale = useLocale();
  const isPt = locale === "pt";

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = isPt ? "Campo obrigatório" : "Required";
    if (!form.workEmail.trim() || !/\S+@\S+\.\S+/.test(form.workEmail))
      e.workEmail = isPt ? "Email inválido" : "Invalid email";
    if (!form.companyName.trim()) e.companyName = isPt ? "Campo obrigatório" : "Required";
    if (!form.phone.trim()) e.phone = isPt ? "Campo obrigatório" : "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "company", ...form }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const fields = [
    {
      key: "fullName",
      label: isPt ? "Nome Completo" : "Full Name",
      type: "text",
      placeholder: isPt ? "João Silva" : "John Smith",
    },
    {
      key: "workEmail",
      label: isPt ? "Email Corporativo" : "Work Email",
      type: "email",
      placeholder: "john@company.com",
    },
    {
      key: "companyName",
      label: isPt ? "Nome da Empresa" : "Company Name",
      type: "text",
      placeholder: isPt ? "Empresa Inc." : "Company Inc.",
    },
    {
      key: "phone",
      label: isPt ? "Telefone" : "Phone",
      type: "tel",
      placeholder: "+1 (555) 000-0000",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(124,58,237,0.05) 50%, transparent 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
          transition={{ delay: 0.15 }}
          className="glass-card p-8"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
              <CheckCircle2 size={52} style={{ color: "#22D3EE" }} />
              <h3 className="text-2xl font-bold text-white">
                {isPt ? "Mensagem enviada! 🚀" : "Message sent! 🚀"}
              </h3>
              <p className="text-gray-400">{t("status_success")}</p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setForm({ fullName: "", workEmail: "", companyName: "", phone: "" });
                }}
                className="mt-2 text-sm text-cyan hover:underline"
              >
                {isPt ? "Enviar outra mensagem" : "Send another message"}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {fields.map(({ key, label, type, placeholder }) => (
                <div key={key} className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-400">{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={form[key as keyof typeof form]}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, [key]: e.target.value }))
                    }
                    className="w-full rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: errors[key]
                        ? "1px solid rgba(248,113,113,0.5)"
                        : "1px solid rgba(255,255,255,0.1)",
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.border = "1px solid rgba(124,58,237,0.5)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.border = errors[key]
                        ? "1px solid rgba(248,113,113,0.5)"
                        : "1px solid rgba(255,255,255,0.1)")
                    }
                  />
                  {errors[key] && (
                    <span className="text-red-400 text-xs">{errors[key]}</span>
                  )}
                </div>
              ))}

              {status === "error" && (
                <div
                  className="flex items-center gap-2 text-red-400 text-sm rounded-xl px-4 py-3"
                  style={{
                    background: "rgba(248,113,113,0.08)",
                    border: "1px solid rgba(248,113,113,0.2)",
                  }}
                >
                  <AlertCircle size={16} />
                  {t("status_error")}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 mt-2 transition-opacity disabled:opacity-70 glow-purple"
                style={{
                  background: "linear-gradient(135deg, #7C3AED 0%, #6d28d9 100%)",
                }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    {t("status_loading")}
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    {isPt ? "Enviar" : "Submit"}
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
