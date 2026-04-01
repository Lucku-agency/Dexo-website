"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { X, Shield } from "lucide-react";

export default function LGPDModal() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const isPt = locale === "pt";

  const trigger = isPt ? "Política de Privacidade (LGPD)" : "Privacy Policy (LGPD)";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-gray-500 hover:text-gray-300 text-sm transition-colors underline underline-offset-2"
      >
        {trigger}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(9,12,20,0.88)", backdropFilter: "blur(8px)" }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/10"
              style={{ background: "#1A2340" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-white/8" style={{ background: "#1A2340" }}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.25)" }}>
                    <Shield size={16} style={{ color: "#8B5CF6" }} />
                  </div>
                  <h2 className="text-lg font-bold text-white">
                    {isPt ? "Política de Privacidade — LGPD" : "Privacy Policy — LGPD"}
                  </h2>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-5 text-sm text-gray-300 leading-relaxed">
                {isPt ? (
                  <>
                    <p className="text-gray-400 text-xs">
                      Última atualização: Janeiro de 2025
                    </p>

                    <div>
                      <h3 className="text-white font-semibold mb-2">1. Quem somos</h3>
                      <p>A DEXO é uma consultoria de recrutamento global que conecta empresas americanas a profissionais de tecnologia brasileiros. Levamos a privacidade dos seus dados muito a sério e nos comprometemos a cumprir a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2">2. Dados coletados</h3>
                      <p>Ao preencher nossos formulários de contato, coletamos informações como nome, e-mail, empresa, cargo e descrição da sua necessidade de contratação. Candidatos podem fornecer adicionalmente currículo, LinkedIn e informações de experiência profissional.</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2">3. Finalidade do tratamento</h3>
                      <p>Utilizamos seus dados exclusivamente para: (i) responder às suas solicitações de contato; (ii) apresentar perfis de candidatos adequados; (iii) conduzir processos de recrutamento; (iv) enviar comunicações relacionadas aos nossos serviços, mediante consentimento.</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2">4. Base legal</h3>
                      <p>O tratamento dos seus dados é realizado com base no consentimento (art. 7º, I, LGPD), na execução de contrato ou procedimentos preliminares (art. 7º, V) e no legítimo interesse da DEXO (art. 7º, IX).</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2">5. Compartilhamento</h3>
                      <p>Não vendemos nem alugamos seus dados. Podemos compartilhá-los com empresas parceiras diretamente envolvidas no processo de recrutamento, sempre com o seu conhecimento e consentimento prévio.</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2">6. Seus direitos</h3>
                      <p>Nos termos da LGPD, você tem direito a: confirmar a existência de tratamento, acessar seus dados, corrigir dados incompletos, solicitar anonimização, bloqueio ou eliminação, revogar consentimento e solicitar portabilidade. Para exercer esses direitos, entre em contato conosco.</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2">7. Retenção de dados</h3>
                      <p>Mantemos seus dados pelo tempo necessário para a prestação dos serviços ou conforme exigido por lei. Candidatos não selecionados têm seus dados mantidos por até 24 meses para futuras oportunidades, salvo solicitação de exclusão.</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2">8. Contato</h3>
                      <p>Para dúvidas, solicitações ou exercício dos seus direitos, entre em contato pelo e-mail: <span className="text-cyan">contato@dexo.com.br</span></p>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-gray-400 text-xs">
                      Last updated: January 2025
                    </p>

                    <div>
                      <h3 className="text-white font-semibold mb-2">1. Who we are</h3>
                      <p>DEXO is a global recruitment consultancy connecting U.S. companies with Brazilian tech professionals. We take your data privacy seriously and are committed to complying with Brazil's General Data Protection Law (LGPD — Law No. 13.709/2018).</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2">2. Data collected</h3>
                      <p>When you fill out our contact forms, we collect information such as name, email, company, job title, and a description of your hiring needs. Candidates may additionally provide a résumé, LinkedIn profile, and professional experience details.</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2">3. Purpose of processing</h3>
                      <p>We use your data exclusively to: (i) respond to your contact requests; (ii) present suitable candidate profiles; (iii) conduct recruitment processes; (iv) send communications related to our services, with your consent.</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2">4. Legal basis</h3>
                      <p>Data processing is carried out based on consent (LGPD Art. 7, I), execution of a contract or preliminary procedures (Art. 7, V), and DEXO's legitimate interest (Art. 7, IX).</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2">5. Data sharing</h3>
                      <p>We do not sell or rent your data. We may share it with partner companies directly involved in the recruitment process, always with your prior knowledge and consent.</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2">6. Your rights</h3>
                      <p>Under the LGPD, you have the right to: confirm the existence of processing, access your data, correct incomplete data, request anonymization, blocking or deletion, revoke consent, and request data portability. To exercise these rights, please contact us.</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2">7. Data retention</h3>
                      <p>We retain your data for as long as necessary to provide services or as required by law. Unsuccessful candidates have their data retained for up to 24 months for future opportunities, unless deletion is requested.</p>
                    </div>

                    <div>
                      <h3 className="text-white font-semibold mb-2">8. Contact</h3>
                      <p>For questions, requests, or to exercise your rights, contact us at: <span className="text-cyan">contact@dexo.com</span></p>
                    </div>
                  </>
                )}
              </div>

              {/* Footer */}
              <div className="px-6 pb-6">
                <button
                  onClick={() => setOpen(false)}
                  className="w-full py-3 rounded-xl text-sm font-medium text-gray-300 hover:text-white transition-colors border border-white/10 hover:border-white/25"
                >
                  {isPt ? "Fechar" : "Close"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
