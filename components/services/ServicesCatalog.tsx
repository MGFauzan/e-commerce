"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe, Terminal, Wrench, GitBranch, Layers, MessageSquare,
  ShoppingCart, ArrowRight, Star, Clock, RefreshCw,
} from "lucide-react";
import { SERVICES } from "@/constants/data";
import { formatPrice, getNeonClasses } from "@/lib/utils";
import type { Service, ServiceCategory } from "@/types";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe, Terminal, Wrench, GitBranch, Layers, MessageSquare,
};

const CATEGORIES: { label: string; value: ServiceCategory | "all" }[] = [
  { label: "Semua", value: "all" },
  { label: "Website", value: "website" },
  { label: "Refactoring", value: "refactoring" },
  { label: "Open Source", value: "opensource" },
  { label: "Tugas", value: "tugas" },
];

interface ServiceCardProps {
  service: Service;
  onAddToCart: (service: Service) => void;
  isInCart: boolean;
  index: number;
}

function ServiceCard({ service, onAddToCart, isInCart, index }: ServiceCardProps) {
  const Icon = ICONS[service.icon] ?? Globe;
  const neon = getNeonClasses(service.color);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={`card-cyber relative overflow-hidden group`}
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] ${neon.bg} bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}
        style={{ background: `linear-gradient(90deg, transparent, ${service.color === 'pink' ? '#FF00FF' : service.color === 'cyan' ? '#00FFFF' : service.color === 'yellow' ? '#F0ED0E' : '#00FF41'}, transparent)` }}
      />

      <div className="p-6">
        {/* Badge */}
        {service.badge && (
          <div className={`inline-flex badge-cyber border text-[10px] mb-4 ${neon.badge}`}>
            {service.badge}
          </div>
        )}

        {/* Icon + Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`flex-shrink-0 p-3 ${neon.bg} clip-cyber-sm border ${neon.border} border-opacity-30`}>
            <Icon className={`w-5 h-5 ${neon.text}`} />
          </div>
          <div>
            <h3 className="font-heading font-bold text-white text-lg leading-tight mb-1">
              {service.title}
            </h3>
            <p className="font-body text-sm text-white/50">{service.shortDesc}</p>
          </div>
        </div>

        {/* Features list */}
        <ul className="space-y-1.5 mb-6">
          {service.features.slice(0, 4).map((feat, i) => (
            <li key={i} className="flex items-start gap-2 font-mono text-[11px] text-white/60">
              <span className={`mt-0.5 ${neon.text}`}>▸</span>
              {feat}
            </li>
          ))}
          {service.features.length > 4 && (
            <li className="font-mono text-[11px] text-white/30 pl-4">
              +{service.features.length - 4} fitur lainnya...
            </li>
          )}
        </ul>

        {/* Meta info */}
        <div className="flex items-center gap-4 mb-5 font-mono text-[10px] text-white/40">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{service.deliveryDays}d delivery</span>
          </div>
          {service.revisions > 0 && (
            <div className="flex items-center gap-1">
              <RefreshCw className="w-3 h-3" />
              <span>{service.revisions}x revisi</span>
            </div>
          )}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <div className={`font-heading font-black text-xl ${neon.text}`}>
              {formatPrice(service.price)}
            </div>
            <div className="font-mono text-[10px] text-white/30">starting price</div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onAddToCart(service)}
              className={`btn-cyber flex items-center gap-2 px-4 py-2 text-xs border transition-all
                ${isInCart
                  ? `${neon.border} ${neon.text} ${neon.bg}`
                  : "border-white/20 text-white/60 hover:border-current hover:text-current"
                } ${neon.text}`}
            >
              <ShoppingCart className="w-3 h-3" />
              {isInCart ? "Ditambah" : "Tambah"}
            </button>
            <a
              href="#contact"
              className={`btn-cyber flex items-center gap-2 px-4 py-2 text-xs border ${neon.border} ${neon.text} ${neon.bg} hover:shadow-lg transition-all`}
            >
              Pesan
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface ServicesCatalogProps {
  onAddToCart: (service: Service) => void;
  isInCart: (id: string) => boolean;
}

export default function ServicesCatalog({ onAddToCart, isInCart }: ServicesCatalogProps) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | "all">("all");
  const [sortBy, setSortBy] = useState<"default" | "price-asc" | "price-desc">("default");

  const filtered = SERVICES
    .filter((s) => activeCategory === "all" || s.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return 0;
    });

  return (
    <section id="catalog" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 cyber-grid-bg-sm opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neon-pink/10 border border-neon-pink/30 clip-cyber-sm mb-6">
            <span className="font-mono text-[11px] text-neon-pink tracking-widest uppercase">
              02 // Katalog Layanan
            </span>
          </div>
          <h2 className="font-heading font-black text-display-lg text-white mb-4">
            PILIH{" "}
            <span className="gradient-text">LAYANANMU</span>
          </h2>
          <p className="font-body text-white/50 max-w-xl mx-auto">
            Dari tugas mepet deadline hingga web app enterprise. Kami punya solusinya.
          </p>
        </motion.div>

        {/* Filter & Sort Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 items-start sm:items-center justify-between">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`font-mono text-[11px] tracking-widest uppercase px-4 py-2 clip-cyber-sm border transition-all
                  ${activeCategory === cat.value
                    ? "border-neon-pink bg-neon-pink/15 text-neon-pink"
                    : "border-white/15 text-white/40 hover:border-white/30 hover:text-white/60"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="input-cyber px-4 py-2 font-mono text-[11px] uppercase tracking-wider cursor-pointer"
          >
            <option value="default">Sort: Default</option>
            <option value="price-asc">Harga: Terendah</option>
            <option value="price-desc">Harga: Tertinggi</option>
          </select>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              onAddToCart={onAddToCart}
              isInCart={isInCart(service.id)}
              index={i}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 font-mono text-white/30">
            <div className="text-4xl mb-4">∅</div>
            <p>Tidak ada layanan di kategori ini.</p>
          </div>
        )}
      </div>
    </section>
  );
}
