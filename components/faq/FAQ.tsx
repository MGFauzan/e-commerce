"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/constants/data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg opacity-20" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-matrix-green/10 border border-matrix-green/30 clip-cyber-sm mb-6">
            <span className="font-mono text-[11px] text-matrix-green tracking-widest uppercase">
              06 // FAQ
            </span>
          </div>
          <h2 className="font-heading font-black text-display-lg text-white mb-4">
            PERTANYAAN{" "}
            <span className="text-matrix-green" style={{ textShadow: "0 0 20px rgba(0,255,65,0.5)" }}>
              UMUM
            </span>
          </h2>
          <p className="font-body text-white/50">
            Masih ada yang bikin bingung? Mungkin sudah kami jawab di bawah.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`border transition-all duration-300 clip-cyber-sm overflow-hidden
                ${openId === faq.id
                  ? "border-matrix-green/40 bg-matrix-green/5"
                  : "border-white/10 bg-card hover:border-white/20"
                }`}
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between p-5 text-left group"
                aria-expanded={openId === faq.id}
              >
                <span className={`font-body font-medium text-sm pr-4 transition-colors
                  ${openId === faq.id ? "text-matrix-green" : "text-white/80 group-hover:text-white"}`}
                >
                  <span className="font-mono text-[10px] text-white/30 mr-3">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-7 h-7 clip-cyber-sm border flex items-center justify-center transition-all
                  ${openId === faq.id
                    ? "border-matrix-green bg-matrix-green/15 text-matrix-green"
                    : "border-white/20 text-white/40"
                  }`}
                >
                  {openId === faq.id
                    ? <Minus className="w-3 h-3" />
                    : <Plus className="w-3 h-3" />
                  }
                </div>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-5 pb-5 border-t border-matrix-green/10">
                      <p className="font-body text-sm text-white/60 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA below FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="font-body text-white/40 text-sm mb-4">
            Masih ada pertanyaan lain?
          </p>
          <a href="#contact" className="btn-cyber-secondary px-8 py-3 text-sm inline-flex items-center gap-2">
            Hubungi Kami Langsung
          </a>
        </motion.div>
      </div>
    </section>
  );
}
