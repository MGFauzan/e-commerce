"use client";

import { motion } from "framer-motion";
import { Zap, Heart, Github, Instagram, Linkedin } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/constants/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-neon-pink/15">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-t from-pitch-black via-deep-purple/10 to-pitch-black" />
      <div className="absolute inset-0 cyber-grid-bg opacity-15" />
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-pink to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-neon-pink/20 clip-cyber-sm" />
                <Zap className="w-4 h-4 text-neon-pink relative z-10" />
              </div>
              <span className="font-heading font-black text-lg tracking-widest">
                <span className="text-neon-pink text-glow-pink">OPEN</span>
                <span className="text-cyber-cyan text-glow-cyan">HELP</span>
              </span>
            </a>
            <p className="font-body text-sm text-white/40 leading-relaxed mb-6 max-w-xs">
              Jasa coding profesional. Dari tugas kuliah mepet deadline hingga web app production-ready.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Github, href: SOCIAL_LINKS.github },
                { Icon: Instagram, href: SOCIAL_LINKS.instagram },
                { Icon: Linkedin, href: SOCIAL_LINKS.linkedin },
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/15 clip-cyber-sm flex items-center justify-center text-white/40 hover:border-neon-pink hover:text-neon-pink transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono font-bold text-[11px] text-white/60 uppercase tracking-widest mb-5">
              // Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white/40 hover:text-cyber-cyan transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[10px] font-mono text-neon-pink/40 group-hover:text-neon-pink transition-colors">▸</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-mono font-bold text-[11px] text-white/60 uppercase tracking-widest mb-5">
              // Kontak
            </h4>
            <div className="space-y-3">
              <div className="font-mono text-sm text-white/40">
                <span className="text-neon-pink/60">EMAIL:</span>{" "}
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-neon-pink transition-colors">
                  {SOCIAL_LINKS.email}
                </a>
              </div>
              <div className="font-mono text-sm text-white/40">
                <span className="text-cyber-cyan/60">WA:</span>{" "}
                <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-cyber-cyan transition-colors">
                  +62 851-3346-0271
                </a>
              </div>
              <div className="font-mono text-sm text-white/40">
                <span className="text-cyber-yellow/60">HOURS:</span>{" "}
                <span>Mon–Sat, 08:00–22:00 WIB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-white/25">
            © {currentYear} OpenHelp. All rights reserved.
          </p>
          <div className="flex items-center gap-1 font-mono text-[11px] text-white/25">
            <span>Built with</span>
            <Heart className="w-3 h-3 text-neon-pink mx-1 fill-current" />
            <span>using Next.js + Tailwind</span>
          </div>
          <div className="font-mono text-[11px] text-white/25 hidden sm:block">
            {"// SYS: OPERATIONAL ■"}
          </div>
        </div>
      </div>
    </footer>
  );
}
