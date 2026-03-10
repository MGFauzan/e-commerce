// ─── Service / Product Types ────────────────────────────────────
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  price: number;
  priceLabel: string;
  category: ServiceCategory;
  badge?: string;
  popular?: boolean;
  icon: string;
  color: "pink" | "cyan" | "yellow" | "green";
  deliveryDays: number;
  revisions: number;
}

export type ServiceCategory =
  | "website"
  | "refactoring"
  | "opensource"
  | "tugas"
  | "bundle";

// ─── Cart Types ──────────────────────────────────────────────────
export interface CartItem {
  service: Service;
  quantity: number;
  note?: string;
}

export interface CartState {
  items: CartItem[];
  total: number;
}

// ─── Contact / Order Form Types ──────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot?: string; // spam protection
}

export interface OrderFormData {
  name: string;
  email: string;
  phone?: string;
  serviceIds: string[];
  details: string;
  deadline?: string;
  budget?: string;
  honeypot?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

// ─── Testimonial Types ───────────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar?: string;
  review: string;
  rating: 1 | 2 | 3 | 4 | 5;
  service: string;
  date: string;
}

// ─── Promo Types ─────────────────────────────────────────────────
export interface Promo {
  id: string;
  title: string;
  description: string;
  discount: number;
  originalPrice: number;
  finalPrice: number;
  validUntil: string;
  services: string[];
  code?: string;
  badge: string;
}

// ─── FAQ Types ───────────────────────────────────────────────────
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// ─── Nav Types ───────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
  icon?: string;
}

// ─── HUD / UI Types ──────────────────────────────────────────────
export type NeonColor = "pink" | "cyan" | "yellow" | "green";

export interface GlowConfig {
  color: NeonColor;
  intensity: "sm" | "md" | "lg";
}
