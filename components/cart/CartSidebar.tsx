"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Trash2, ArrowRight, Plus, Minus, MessageCircle } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { CartItem } from "@/types";

// Nomor WhatsApp tujuan (format internasional tanpa +)
const WA_NUMBER = "6285133460271";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  total: number;
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, qty: number) => void;
}

function buildWhatsAppMessage(items: CartItem[], total: number): string {
  const line = "─".repeat(28);

  const header = `🚀 *OPENHELP — ORDER BARU*\n${line}\n\n`;

  const itemList = items
    .map(
      (item, i) =>
        `*${i + 1}. ${item.service.title}*\n` +
        `   • Qty       : ${item.quantity}x\n` +
        `   • Harga     : ${formatPrice(item.service.price)} / unit\n` +
        `   • Subtotal  : ${formatPrice(item.service.price * item.quantity)}`
    )
    .join("\n\n");

  const footer =
    `\n\n${line}\n` +
    `💰 *TOTAL: ${formatPrice(total)}*\n` +
    `${line}\n\n` +
    `📋 *Detail project:*\n_(Ceritakan kebutuhan kamu di sini)_\n\n` +
    `📅 *Deadline:*\n_(Isi jika ada target waktu)_\n\n` +
    `💳 *Metode pembayaran:*\n_(Transfer / GoPay / OVO / DANA)_\n\n` +
    `${line}\n` +
    `Halo kak, saya ingin memesan layanan di atas.\n` +
    `Mohon konfirmasi ketersediaan & detail selanjutnya, terima kasih! 🙏`;

  return encodeURIComponent(header + itemList + footer);
}

export default function CartSidebar({
  isOpen, onClose, items, total, onRemove, onUpdateQty,
}: CartSidebarProps) {
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${buildWhatsAppMessage(items, total)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[420px] z-50 flex flex-col"
            style={{
              background: "linear-gradient(180deg, rgba(13, 0, 25, 0.98) 0%, rgba(5, 5, 5, 0.98) 100%)",
              borderLeft: "1px solid rgba(255, 0, 255, 0.25)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neon-pink/15">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-5 h-5 text-neon-pink" />
                <span className="font-heading font-bold text-white tracking-wide">KERANJANG</span>
                {items.length > 0 && (
                  <span className="px-2 py-0.5 bg-neon-pink/20 border border-neon-pink/40 font-mono text-xs text-neon-pink clip-cyber-sm">
                    {items.length}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 text-white/40 hover:text-neon-pink hover:bg-neon-pink/10 clip-cyber-sm transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingCart className="w-12 h-12 text-white/15 mx-auto mb-4" />
                  <p className="font-mono text-sm text-white/30">Keranjang kosong.</p>
                  <p className="font-body text-xs text-white/20 mt-2">
                    Tambahkan layanan yang kamu butuhkan.
                  </p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.service.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="p-4 border border-white/10 clip-cyber-sm hover:border-neon-pink/25 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="font-heading font-semibold text-sm text-white mb-1">
                          {item.service.title}
                        </div>
                        <div className="font-mono text-[11px] text-white/40">
                          {formatPrice(item.service.price)} / unit
                        </div>
                      </div>
                      <button
                        onClick={() => onRemove(item.service.id)}
                        className="text-white/30 hover:text-red-400 transition-colors"
                        aria-label="Hapus dari keranjang"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQty(item.service.id, item.quantity - 1)}
                          className="w-7 h-7 border border-white/20 clip-cyber-sm flex items-center justify-center text-white/50 hover:border-neon-pink hover:text-neon-pink transition-all"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-mono text-sm text-white w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQty(item.service.id, item.quantity + 1)}
                          className="w-7 h-7 border border-white/20 clip-cyber-sm flex items-center justify-center text-white/50 hover:border-neon-pink hover:text-neon-pink transition-all"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <div className="font-heading font-bold text-neon-pink text-sm">
                        {formatPrice(item.service.price * item.quantity)}
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-neon-pink/15 space-y-4">
                {/* Summary */}
                <div className="flex items-center justify-between py-2 border-b border-white/5">
                  <div>
                    <span className="font-mono text-[10px] text-white/30 uppercase tracking-wider block mb-0.5">
                      {items.reduce((a, i) => a + i.quantity, 0)} unit · {items.length} layanan
                    </span>
                    <span className="font-mono text-sm text-white/55 uppercase tracking-wide">
                      Total Estimasi
                    </span>
                  </div>
                  <span className="font-heading font-black text-2xl text-neon-pink text-glow-pink">
                    {formatPrice(total)}
                  </span>
                </div>

                {/* Checkout Button → WhatsApp */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="btn-cyber-primary w-full flex items-center justify-center gap-3 px-6 py-4 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Checkout via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="font-mono text-[10px] text-white/25 text-center leading-relaxed">
                  Pesan WA sudah terisi otomatis dengan ringkasan order.
                  <br />
                  Kamu tinggal isi detail project & kirim ✓
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}