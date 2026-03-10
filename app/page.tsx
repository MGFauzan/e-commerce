"use client";

import { useState, Suspense, lazy } from "react";
import dynamic from "next/dynamic";
import { useCart } from "@/hooks/useCart";
import type { Service } from "@/types";

// Static imports for critical above-fold
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";

// Dynamic imports for below-fold sections
const ServicesCatalog = dynamic(() => import("@/components/services/ServicesCatalog"), {
  loading: () => <SectionSkeleton />,
});
const Promo = dynamic(() => import("@/components/promo/Promo"), {
  loading: () => <SectionSkeleton />,
});
const Testimonials = dynamic(() => import("@/components/testimonial/Testimonials"), {
  loading: () => <SectionSkeleton />,
});
const FAQ = dynamic(() => import("@/components/faq/FAQ"), {
  loading: () => <SectionSkeleton />,
});
const Contact = dynamic(() => import("@/components/contact/Contact"), {
  loading: () => <SectionSkeleton />,
});
const Footer = dynamic(() => import("@/components/footer/Footer"));
const CartSidebar = dynamic(() => import("@/components/cart/CartSidebar"));

function SectionSkeleton() {
  return (
    <div className="py-24 flex items-center justify-center">
      <div className="font-mono text-[11px] text-neon-pink/40 animate-pulse tracking-widest">
        // LOADING...
      </div>
    </div>
  );
}

export default function HomePage() {
  const [cartOpen, setCartOpen] = useState(false);
  const cart = useCart();

  const handleAddToCart = (service: Service) => {
    cart.addItem(service);
    // Briefly flash cart notification
  };

  return (
    <main className="min-h-screen bg-pitch-black">
      <Navbar
        cartCount={cart.itemCount}
        onCartOpen={() => setCartOpen(true)}
      />

      <Hero />

      {/* Divider */}
      <div className="divider-cyber mx-8" />

      <ServicesCatalog
        onAddToCart={handleAddToCart}
        isInCart={cart.isInCart}
      />

      <div className="divider-cyber mx-8" />

      <Promo />

      <div className="divider-cyber mx-8" />

      <Testimonials />

      <div className="divider-cyber mx-8" />

      <FAQ />

      <div className="divider-cyber mx-8" />

      <Contact />

      <Footer />

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart.items}
        total={cart.total}
        onRemove={cart.removeItem}
        onUpdateQty={cart.updateQuantity}
      />
    </main>
  );
}
