"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, MessageSquare, Mail, Github, Instagram, Linkedin } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/validation";
import { SOCIAL_LINKS } from "@/constants/data";

const SOCIAL_ITEMS = [
  { icon: MessageSquare, label: "WhatsApp", href: SOCIAL_LINKS.whatsapp, color: "#25D366" },
  { icon: Instagram, label: "Instagram", href: SOCIAL_LINKS.instagram, color: "#E1306C" },
  { icon: Linkedin, label: "LinkedIn", href: SOCIAL_LINKS.linkedin, color: "#0077B5" },
  { icon: Github, label: "GitHub", href: SOCIAL_LINKS.github, color: "#9B9B9B" },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (json.success) {
        setStatus("success");
        setMessage(json.message);
        reset();
      } else {
        setStatus("error");
        setMessage(json.message || "Gagal mengirim pesan.");
      }
    } catch {
      setStatus("error");
      setMessage("Server error. Coba lagi nanti.");
    }
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-pitch-black via-deep-purple/10 to-pitch-black" />
      <div className="absolute inset-0 cyber-grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-pink/10 border border-neon-pink/30 clip-cyber-sm mb-6">
            <span className="font-mono text-[11px] text-neon-pink tracking-widest uppercase">
              07 // Kontak
            </span>
          </div>
          <h2 className="font-heading font-black text-display-lg text-white mb-4">
            HUBUNGI{" "}
            <span className="gradient-text">KAMI</span>
          </h2>
          <p className="font-body text-white/50 max-w-lg mx-auto">
            Ceritakan project-mu. Kami reply dalam 1 jam di jam kerja.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Email */}
            <div className="flex items-start gap-4 p-5 card-cyber">
              <div className="p-3 bg-neon-pink/10 clip-cyber-sm border border-neon-pink/30">
                <Mail className="w-5 h-5 text-neon-pink" />
              </div>
              <div>
                <div className="font-mono text-[11px] text-white/40 uppercase tracking-wider mb-1">Email</div>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="font-body text-sm text-white hover:text-neon-pink transition-colors">
                  {SOCIAL_LINKS.email}
                </a>
              </div>
            </div>

            {/* Social */}
            <div>
              <div className="font-mono text-[11px] text-white/40 uppercase tracking-wider mb-4">Sosial Media</div>
              <div className="grid grid-cols-2 gap-3">
                {SOCIAL_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 border border-white/10 clip-cyber-sm hover:border-white/30 group transition-all"
                  >
                    <item.icon
                      className="w-4 h-4 transition-colors"
                      style={{ color: item.color }}
                    />
                    <span className="font-mono text-xs text-white/50 group-hover:text-white/80 transition-colors">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="p-5 border border-cyber-yellow/20 bg-cyber-yellow/5 clip-cyber-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-matrix-green animate-pulse" />
                <span className="font-mono text-[11px] text-matrix-green uppercase tracking-widest">
                  Live Support
                </span>
              </div>
              <p className="font-body text-sm text-white/60">
                Senin–Sabtu, 08.00–22.00 WIB.
                <br />
                Response time &lt; 1 jam.
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="card-cyber p-8 relative">
              <div className="hud-corner hud-corner-tl border-neon-pink" />
              <div className="hud-corner hud-corner-tr border-cyber-cyan" />

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                {/* Honeypot - hidden from humans */}
                <input
                  {...register("honeypot")}
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ display: "none" }}
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block font-mono text-[11px] text-white/50 uppercase tracking-wider mb-2">
                      Nama <span className="text-neon-pink">*</span>
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="John Doe"
                      className={`input-cyber w-full px-4 py-3 text-sm ${errors.name ? "border-red-500/60" : ""}`}
                    />
                    {errors.name && (
                      <p className="mt-1 font-mono text-[10px] text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-mono text-[11px] text-white/50 uppercase tracking-wider mb-2">
                      Email <span className="text-neon-pink">*</span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="john@example.com"
                      className={`input-cyber w-full px-4 py-3 text-sm ${errors.email ? "border-red-500/60" : ""}`}
                    />
                    {errors.email && (
                      <p className="mt-1 font-mono text-[10px] text-red-400">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block font-mono text-[11px] text-white/50 uppercase tracking-wider mb-2">
                    Subject <span className="text-neon-pink">*</span>
                  </label>
                  <input
                    {...register("subject")}
                    type="text"
                    placeholder="Pembuatan Website Landing Page..."
                    className={`input-cyber w-full px-4 py-3 text-sm ${errors.subject ? "border-red-500/60" : ""}`}
                  />
                  {errors.subject && (
                    <p className="mt-1 font-mono text-[10px] text-red-400">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-[11px] text-white/50 uppercase tracking-wider mb-2">
                    Pesan / Detail Project <span className="text-neon-pink">*</span>
                  </label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder="Ceritakan detail project kamu: tujuan, fitur, deadline, budget..."
                    className={`input-cyber w-full px-4 py-3 text-sm resize-none ${errors.message ? "border-red-500/60" : ""}`}
                  />
                  {errors.message && (
                    <p className="mt-1 font-mono text-[10px] text-red-400">{errors.message.message}</p>
                  )}
                </div>

                {/* Status Message */}
                {status !== "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 clip-cyber-sm font-mono text-sm border
                      ${status === "success" ? "border-matrix-green/40 bg-matrix-green/10 text-matrix-green" : ""}
                      ${status === "loading" ? "border-cyber-cyan/40 bg-cyber-cyan/10 text-cyber-cyan" : ""}
                      ${status === "error" ? "border-red-500/40 bg-red-500/10 text-red-400" : ""}
                    `}
                  >
                    {status === "loading" && "⏳ Mengirim pesan..."}
                    {status === "success" && `✓ ${message}`}
                    {status === "error" && `✗ ${message}`}
                  </motion.div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-cyber-primary w-full flex items-center justify-center gap-3 px-8 py-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {status === "loading" ? "Mengirim..." : "Kirim Pesan Sekarang"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
