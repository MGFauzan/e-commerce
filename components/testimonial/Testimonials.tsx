"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/constants/data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const testi = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-purple/10 to-pitch-black" />
      <div className="absolute inset-0 cyber-grid-bg opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyber-cyan/10 border border-cyber-cyan/30 clip-cyber-sm mb-6">
            <span className="font-mono text-[11px] text-cyber-cyan tracking-widest uppercase">
              05 // Testimoni Client
            </span>
          </div>
          <h2 className="font-heading font-black text-display-lg text-white mb-4">
            APA KATA{" "}
            <span className="text-cyber-cyan text-glow-cyan">MEREKA</span>
          </h2>
        </motion.div>

        {/* Card */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.35 }}
              className="card-cyber p-8 sm:p-12 relative"
            >
              {/* HUD corners */}
              <div className="hud-corner hud-corner-tl border-cyber-cyan" />
              <div className="hud-corner hud-corner-tr border-cyber-cyan" />
              <div className="hud-corner hud-corner-bl border-neon-pink" />
              <div className="hud-corner hud-corner-br border-neon-pink" />

              {/* Quote icon */}
              <Quote className="w-10 h-10 text-neon-pink/20 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < testi.rating ? "text-cyber-yellow fill-cyber-yellow" : "text-white/20"}`}
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="font-body text-lg sm:text-xl text-white/85 leading-relaxed mb-8 italic">
                &ldquo;{testi.review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 clip-cyber-sm bg-gradient-to-br from-neon-pink/20 to-cyber-cyan/20 border border-neon-pink/30 flex items-center justify-center font-heading font-black text-lg text-neon-pink">
                    {testi.name[0]}
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white text-sm">{testi.name}</div>
                    <div className="font-mono text-[11px] text-white/40">
                      {testi.role}{testi.company ? ` @ ${testi.company}` : ""}
                    </div>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="font-mono text-[10px] text-white/30">LAYANAN:</div>
                  <div className="font-mono text-[11px] text-cyber-cyan">{testi.service}</div>
                </div>
              </div>

              {/* Counter */}
              <div className="absolute bottom-4 right-8 font-mono text-[10px] text-white/20">
                {String(current + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => go(-1)}
              className="p-3 border border-white/15 text-white/40 hover:border-neon-pink hover:text-neon-pink clip-cyber-sm transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-1 transition-all duration-300 ${
                    i === current ? "w-8 bg-neon-pink" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="p-3 border border-white/15 text-white/40 hover:border-neon-pink hover:text-neon-pink clip-cyber-sm transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
