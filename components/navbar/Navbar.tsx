"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, Zap } from "lucide-react";
import { NAV_LINKS } from "@/constants/data";

interface NavbarProps {
  cartCount?: number;
  onCartOpen?: () => void;
}

export default function Navbar({ cartCount = 0, onCartOpen }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-pitch-black/90 backdrop-blur-md border-b border-neon-pink/20"
          : "bg-transparent"
      }`}
    >
      {/* Top accent bar */}
      <div className="h-[2px] bg-gradient-to-r from-neon-pink via-cyber-cyan to-cyber-yellow" />

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-neon-pink/20 clip-cyber-sm" />
              <Zap className="w-4 h-4 text-neon-pink relative z-10" />
            </div>
            <span className="font-heading font-black text-lg tracking-widest">
              <span className="text-neon-pink text-glow-pink">OPEN</span>
              <span className="text-cyber-cyan text-glow-cyan">HELP</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 font-mono text-xs tracking-widest uppercase text-white/60 hover:text-cyber-cyan transition-colors duration-200 group"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-x-4 bottom-0 h-px bg-cyber-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <button
              onClick={onCartOpen}
              className="relative p-2 text-white/60 hover:text-neon-pink transition-colors group"
              aria-label="Keranjang"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-neon-pink text-black text-[10px] font-black font-mono rounded-none clip-cyber-sm flex items-center justify-center"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden sm:flex btn-cyber-primary px-5 py-2 text-xs cursor-pointer"
            >
              Mulai Sekarang
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white/60 hover:text-neon-pink transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-pitch-black/95 backdrop-blur-md border-t border-neon-pink/20"
          >
            <div className="px-4 py-4 space-y-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 font-mono text-xs tracking-widest uppercase text-white/60 hover:text-cyber-cyan transition-colors border-l-2 border-transparent hover:border-cyber-cyan"
                >
                  <span className="text-cyber-cyan/40">//</span>
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-cyber-primary w-full px-4 py-3 text-xs text-center mt-4 block"
              >
                Mulai Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
