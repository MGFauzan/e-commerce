"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Cpu, Wifi } from "lucide-react";
import { STATS } from "@/constants/data";
import { formatPrice } from "@/lib/utils";

const HUD_ITEMS = [
  { label: "SYS.STATUS", value: "ONLINE", color: "#00FF41" },
  { label: "UPTIME", value: "99.9%", color: "#00FFFF" },
  { label: "LOAD", value: "0.3ms", color: "#F0ED0E" },
  { label: "NODES", value: "24/7", color: "#FF00FF" },
];

const FLOATING_CODE = [
  "const build = async () => {",
  "  await deploy({ env: 'prod' });",
  "npm run dev // 🚀",
  "git push origin main",
  "SELECT * FROM services;",
  "docker compose up --build",
  "const roi = profit / cost * 100;",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 cyber-grid-bg opacity-60" />

      {/* Radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-deep-purple/30 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-neon-pink/5 blur-[80px] pointer-events-none" />

      {/* Floating code snippets */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {FLOATING_CODE.map((code, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs text-cyber-cyan/15"
            style={{
              left: `${(i * 17 + 5) % 90}%`,
              top: `${(i * 13 + 10) % 85}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 6 + i * 1.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>

      {/* HUD top-right panel */}
      <div className="absolute top-24 right-6 hidden lg:block pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="font-mono text-[10px] space-y-1"
        >
          {HUD_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="text-white/30">{item.label}</span>
              <span className="text-[9px]" style={{ color: item.color }}>
                ■ {item.value}
              </span>
            </div>
          ))}
          <div className="mt-2 border-t border-cyber-cyan/20 pt-2 text-white/20">
            {"// LOC: -6.9175°, 107.6191°"}
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Pre-headline badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2 px-3 py-1 bg-cyber-cyan/10 border border-cyber-cyan/30 clip-cyber-sm">
              <div className="w-2 h-2 rounded-full bg-matrix-green animate-pulse" />
              <span className="font-mono text-[11px] text-cyber-cyan tracking-widest uppercase">
                System Online // v2.0.25
              </span>
            </div>
            <span className="font-mono text-[11px] text-white/25 tracking-widest">
              [JASA CODING PROFESIONAL]
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading font-black leading-none mb-6"
          >
            <span
              className="block text-display-xl glitch gradient-text-full"
              data-text="SOLUSI JASA"
            >
              SOLUSI JASA
            </span>
            <span
              className="block text-display-xl glitch text-white"
              data-text="CODING"
            >
              CODING
            </span>
            <span
              className="block text-display-xl glitch"
              style={{
                WebkitTextStroke: "2px #FF00FF",
                color: "transparent",
                textShadow: "0 0 30px rgba(255,0,255,0.3)",
              }}
              data-text="PROFESIONAL"
            >
              PROFESIONAL
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-lg sm:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed"
          >
            Pembuatan Website, Refactoring Code, Open Source Modding, Joki Tugas.{" "}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="#catalog"
              className="btn-cyber-primary flex items-center justify-center gap-3 px-8 py-4 text-sm group"
            >
              <Cpu className="w-4 h-4" />
              <span>Lihat Layanan</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="btn-cyber-secondary flex items-center justify-center gap-3 px-8 py-4 text-sm group"
            >
              <Terminal className="w-4 h-4" />
              <span>Pesan Sekarang</span>
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {STATS.map((stat, i) => {
              const colorMap = {
                cyan: { text: "text-cyber-cyan", border: "border-cyber-cyan/30", bg: "bg-cyber-cyan/5" },
                pink: { text: "text-neon-pink", border: "border-neon-pink/30", bg: "bg-neon-pink/5" },
                yellow: { text: "text-cyber-yellow", border: "border-cyber-yellow/30", bg: "bg-cyber-yellow/5" },
                green: { text: "text-matrix-green", border: "border-matrix-green/30", bg: "bg-matrix-green/5" },
              };
              const c = colorMap[stat.color];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className={`relative p-4 border ${c.border} ${c.bg} clip-cyber-sm`}
                >
                  <div className="hud-corner hud-corner-tl" style={{ borderColor: "currentColor" }} />
                  <div className={`font-heading font-black text-2xl ${c.text}`}>
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] text-white/40 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pitch-black to-transparent pointer-events-none" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-neon-pink/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
