"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";

export default function CandidateForm({ jobTitle }: { jobTitle?: string }) {
  const locale = useLocale();
  const isPt = locale === "pt";

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedinUrl: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = isPt ? "Campo obrigatório" : "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = isPt ? "Email inválido" : "Invalid email";
    if (!form.phone.trim()) e.phone = isPt ? "Campo obrigatório" : "Required";
    if (!form.linkedinUrl.trim()) e.linkedinUrl = isPt ? "Campo obrigatório" : "Required";
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
        body: JSON.stringify({ type: "candidate", jobTitle, ...form }),
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
      key: "email",
      label: "Email",
      type: "email",
      placeholder: "joao@email.com",
    },
    {
      key: "phone",
      label: isPt ? "Telefone" : "Phone",
      type: "tel",
      placeholder: "+55 (11) 99999-9999",
    },
    {
      key: "linkedinUrl",
      label: "LinkedIn URL",
      type: "url",
      placeholder: "https://linkedin.com/in/seu-perfil",
    },
  ];

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
        <CheckCircle2 size={52} style={{ color: "#22D3EE" }} />
        <h3 className="text-xl font-bold text-white">
          {isPt ? "Candidatura enviada! 🚀" : "Application sent! 🚀"}
        </h3>
        <p className="text-gray-400 text-sm">
          {isPt
            ? "Entraremos em contato em breve."
            : "We'll be in touch soon."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {jobTitle && (
        <div
          className="text-xs font-medium px-3 py-2 rounded-lg mb-1 text-purple-light"
          style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.2)" }}
        >
          {isPt ? "Aplicando para:" : "Applying for:"} {jobTitle}
        </div>
      )}

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
          {isPt ? "Erro ao enviar. Tente novamente." : "Error sending. Please try again."}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 mt-1 transition-opacity disabled:opacity-70 glow-purple"
        style={{ background: "linear-gradient(135deg, #7C3AED 0%, #6d28d9 100%)" }}
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            {isPt ? "Enviando..." : "Sending..."}
          </>
        ) : (
          <>
            <Send size={16} />
            {isPt ? "Enviar Candidatura" : "Submit Application"}
          </>
        )}
      </button>
    </form>
  );
}
