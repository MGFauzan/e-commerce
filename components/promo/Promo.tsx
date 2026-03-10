"use client";

import { motion } from "framer-motion";
import { Tag, Zap, Copy } from "lucide-react";
import { PROMOS } from "@/constants/data";
import { formatPrice } from "@/lib/utils";
import { useState } from "react";

export default function Promo() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="promo" className="relative py-24 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-r from-deep-purple/40 via-pitch-black to-deep-purple/20" />
      <div className="absolute inset-0 cyber-grid-bg opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neon-pink/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-yellow/10 border border-cyber-yellow/30 clip-cyber-sm mb-6">
            <Zap className="w-3 h-3 text-cyber-yellow" />
            <span className="font-mono text-[11px] text-cyber-yellow tracking-widest uppercase">
              04 // Penawaran Spesial
            </span>
          </div>
          <h2 className="font-heading font-black text-display-lg text-white mb-4">
            PROMO{" "}
            <span className="text-cyber-yellow text-glow-yellow">LIMITED</span>
          </h2>
          <p className="font-body text-white/50">
            Bundle hemat untuk kamu yang butuh lebih dari satu layanan.
          </p>
        </motion.div>

        {/* Promo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROMOS.map((promo, i) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative overflow-hidden"
              style={{
                clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))",
                background: "linear-gradient(135deg, rgba(13, 0, 25, 0.95) 0%, rgba(45, 0, 75, 0.7) 100%)",
                border: "1px solid rgba(240, 237, 14, 0.25)",
              }}
            >
              {/* Animated border gradient */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, #F0ED0E, #FF00FF, #00FFFF, #F0ED0E)",
                  backgroundSize: "300% 300%",
                  animation: "borderFlow 4s linear infinite",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  padding: "1px",
                }}
              />

              <div className="p-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-yellow/15 border border-cyber-yellow/40 clip-cyber-sm font-mono text-[11px] text-cyber-yellow tracking-widest mb-6">
                  <Tag className="w-3 h-3" />
                  {promo.badge}
                </div>

                <h3 className="font-heading font-black text-2xl text-white mb-3">
                  {promo.title}
                </h3>
                <p className="font-body text-white/60 mb-6 text-sm leading-relaxed">
                  {promo.description}
                </p>

                {/* Price */}
                <div className="flex items-end gap-4 mb-6">
                  <div>
                    <div className="font-mono text-sm text-white/30 line-through">
                      {formatPrice(promo.originalPrice)}
                    </div>
                    <div className="font-heading font-black text-3xl text-cyber-yellow text-glow-yellow">
                      {formatPrice(promo.finalPrice)}
                    </div>
                  </div>
                  <div className="mb-1 px-3 py-1 bg-neon-pink/20 border border-neon-pink/50 clip-cyber-sm">
                    <span className="font-heading font-black text-neon-pink text-sm">
                      -{promo.discount}%
                    </span>
                  </div>
                </div>

                {/* Promo Code */}
                {promo.code && (
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-1 flex items-center gap-2 px-4 py-2 bg-pitch-black border border-cyber-yellow/30 clip-cyber-sm font-mono text-sm text-cyber-yellow tracking-widest">
                      <span className="text-white/30 text-xs">KODE:</span>
                      {promo.code}
                    </div>
                    <button
                      onClick={() => copyCode(promo.code!)}
                      className="p-2 border border-white/20 text-white/50 hover:border-cyber-yellow hover:text-cyber-yellow clip-cyber-sm transition-all"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    {copiedCode === promo.code && (
                      <span className="font-mono text-[10px] text-matrix-green">✓ Copied!</span>
                    )}
                  </div>
                )}

                <a
                  href="#contact"
                  className="btn-cyber-primary w-full px-6 py-3 text-sm text-center block"
                >
                  Klaim Promo Ini
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
