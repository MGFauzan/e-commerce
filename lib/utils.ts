// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { NeonColor } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function getNeonClasses(color: NeonColor) {
  const map = {
    pink: {
      text: "text-neon-pink",
      border: "border-neon-pink",
      shadow: "shadow-neon-pink",
      glow: "text-glow-pink",
      bg: "bg-neon-pink/10",
      badge: "bg-neon-pink/20 text-neon-pink border-neon-pink/50",
    },
    cyan: {
      text: "text-cyber-cyan",
      border: "border-cyber-cyan",
      shadow: "shadow-neon-cyan",
      glow: "text-glow-cyan",
      bg: "bg-cyber-cyan/10",
      badge: "bg-cyber-cyan/20 text-cyber-cyan border-cyber-cyan/50",
    },
    yellow: {
      text: "text-cyber-yellow",
      border: "border-cyber-yellow",
      shadow: "shadow-neon-yellow",
      glow: "text-glow-yellow",
      bg: "bg-cyber-yellow/10",
      badge: "bg-cyber-yellow/20 text-cyber-yellow border-cyber-yellow/50",
    },
    green: {
      text: "text-matrix-green",
      border: "border-matrix-green",
      shadow: "shadow-[0_0_10px_#00FF41]",
      glow: "drop-shadow-[0_0_8px_#00FF41]",
      bg: "bg-matrix-green/10",
      badge: "bg-matrix-green/20 text-matrix-green border-matrix-green/50",
    },
  };
  return map[color];
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}
