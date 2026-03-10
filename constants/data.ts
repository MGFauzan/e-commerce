import type { Service, Testimonial, FAQ, Promo, NavLink } from "@/types";

// ─── Navigation ──────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: "Layanan", href: "#services" },
  { label: "Katalog", href: "#catalog" },
  { label: "Promo", href: "#promo" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#contact" },
];

// ─── Services ────────────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    id: "svc-001",
    slug: "pembuatan-website",
    title: "Pembuatan Website",
    shortDesc: "Website profesional dari scratch. Modern, cepat, SEO-ready.",
    description:
      "Kami membangun website profesional yang bukan sekadar tampil bagus — tapi konversi tinggi, load cepat, dan SEO-ready dari hari pertama. Mulai dari landing page, company profile, hingga web app full-stack.",
    features: [
      "Next.js / React / Vue / Laravel",
      "Responsive & Mobile-First",
      "SEO On-Page Optimization",
      "Deploy ke Vercel / Cloudflare / VPS",
      "Dark Mode & Accessibility",
      "Performance Score > 90",
      "Source code + dokumentasi",
    ],
    price: 350000,
    priceLabel: "Mulai Rp 350.000",
    category: "website",
    badge: "BEST SELLER",
    popular: true,
    icon: "Globe",
    color: "cyan",
    deliveryDays: 7,
    revisions: 3,
  },
  {
    id: "svc-002",
    slug: "joki-tugas",
    title: "Joki Tugas Coding",
    shortDesc: "Deadline mepet? Tenang. Kami siap handle tugas coding kamu.",
    description:
      "Tugas kuliah, bootcamp project, atau coding test kerja — kami kerjakan dengan kualitas tinggi dan tepat waktu. Python, Java, JavaScript, C++, PHP, dan lebih banyak lagi.",
    features: [
      "Python, Java, C++, JS, PHP",
      "Algoritma & Struktur Data",
      "Web Dev Assignment",
      "Database & SQL Tasks",
      "Machine Learning Basic",
      "Revisi sampai ACC",
      "Pengerjaan express 24 jam",
    ],
    price: 50000,
    priceLabel: "Mulai Rp 50.000",
    category: "tugas",
    badge: "FAST DELIVERY",
    icon: "Terminal",
    color: "yellow",
    deliveryDays: 1,
    revisions: 5,
  },
  {
    id: "svc-003",
    slug: "refactoring-code",
    title: "Refactoring & Debug",
    shortDesc: "Code kamu berantakan? Kita bersihkan & optimalkan.",
    description:
      "Code legacy, bug misterius, performa lambat — semua bisa diperbaiki. Kami melakukan code review menyeluruh, refactoring clean code, debug tuntas, dan optimasi performa.",
    features: [
      "Code Review & Audit Menyeluruh",
      "Refactor ke Clean Architecture",
      "Bug Hunting & Fix",
      "Performance Optimization",
      "TypeScript Migration",
      "Unit Test Coverage",
      "Laporan perubahan detail",
    ],
    price: 200000,
    priceLabel: "Mulai Rp 200.000",
    category: "refactoring",
    badge: "RECOMMENDED",
    icon: "Wrench",
    color: "pink",
    deliveryDays: 3,
    revisions: 3,
  },
  {
    id: "svc-004",
    slug: "opensource-modding",
    title: "Open Source Modding",
    shortDesc: "Kustomisasi plugin, tema, atau library open source sesuai kebutuhan.",
    description:
      "Butuh fitur tambahan di plugin WordPress, kustomisasi tema, atau modifikasi library open source? Kami berpengalaman contribute ke ekosistem open source dan tahu cara mengubahnya sesuai kebutuhanmu.",
    features: [
      "WordPress Plugin Development",
      "Theme Customization",
      "Library Forking & Modification",
      "API Integration",
      "Custom Hooks & Extensions",
      "Documentation Update",
      "PR-ready code quality",
    ],
    price: 150000,
    priceLabel: "Mulai Rp 150.000",
    category: "opensource",
    icon: "GitBranch",
    color: "green",
    deliveryDays: 5,
    revisions: 3,
  },
  {
    id: "svc-005",
    slug: "fullstack-webapp",
    title: "Full-Stack Web App",
    shortDesc: "Aplikasi web kompleks dengan backend, database, dan auth system.",
    description:
      "Dari SaaS micro-tool hingga platform skala menengah — kami membangun full-stack web app dengan arsitektur solid, auth system, API RESTful/GraphQL, dan database relasional maupun NoSQL.",
    features: [
      "Next.js + Node.js / Django",
      "PostgreSQL / MongoDB",
      "Auth: JWT, OAuth, NextAuth",
      "REST API / GraphQL",
      "Admin Dashboard",
      "Payment Gateway Integration",
      "Docker & CI/CD setup",
    ],
    price: 800000,
    priceLabel: "Mulai Rp 800.000",
    category: "website",
    badge: "PREMIUM",
    icon: "Layers",
    color: "cyan",
    deliveryDays: 14,
    revisions: 5,
  },
  {
    id: "svc-006",
    slug: "konsultasi-arsitektur",
    title: "Konsultasi Teknis",
    shortDesc: "Tech stack bingung? Arsitektur blur? Kita diskusi & roadmap bersama.",
    description:
      "Sesi konsultasi 1-on-1 untuk mendiskusikan arsitektur sistem, pilihan tech stack, scalability, atau sekadar code review project kamu. Cocok untuk startup, developer junior, atau tim yang stuck.",
    features: [
      "Sesi 60 menit via Google Meet",
      "System Architecture Review",
      "Tech Stack Recommendation",
      "Scalability Planning",
      "Security Audit Brief",
      "Roadmap & Timeline",
      "Follow-up notes & resources",
    ],
    price: 100000,
    priceLabel: "Rp 100.000 / sesi",
    category: "opensource",
    icon: "MessageSquare",
    color: "yellow",
    deliveryDays: 1,
    revisions: 0,
  },
];

// ─── Bundle / Promo ───────────────────────────────────────────────
export const PROMOS: Promo[] = [
  {
    id: "promo-001",
    title: "STARTER BUNDLE",
    description: "Website profesional + konsultasi teknis gratis. Combo terbaik untuk startup & UMKM yang baru mulai digitalisasi.",
    discount: 30,
    originalPrice: 450000,
    finalPrice: 315000,
    validUntil: "2025-12-31",
    services: ["svc-001", "svc-006"],
    code: "CYBER30",
    badge: "🔥 HEMAT 30%",
  },
  {
    id: "promo-002",
    title: "CLEAN CODE BUNDLE",
    description: "Refactoring total + debugging full project. Bersihkan technical debt sekarang sebelum makin parah.",
    discount: 25,
    originalPrice: 400000,
    finalPrice: 300000,
    validUntil: "2025-12-31",
    services: ["svc-003"],
    code: "CLEAN25",
    badge: "⚡ LIMITED",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testi-001",
    name: "Raka Pradipta",
    role: "Founder",
    company: "TechKita.id",
    review:
      "OpenHelp bikin landing page company kami dalam 5 hari. Hasilnya? Conversion rate naik 3x lipat. Desainnya sick banget, load speed juga ngebut. Highly recommended!",
    rating: 5,
    service: "Pembuatan Website",
    date: "2024-11",
    avatar: "/images/avatar-1.jpg",
  },
  {
    id: "testi-002",
    name: "Dina Maharani",
    role: "Mahasiswa Informatika",
    company: "Universitas Brawijaya",
    review:
      "Deadline tugas Algorithm 8 jam lagi, minta tolong OpenHelp. Bukan cuma selesai tepat waktu, kodenya juga rapi banget sampai dosen tanya saya belajar dari mana.",
    rating: 5,
    service: "Joki Tugas Coding",
    date: "2024-10",
    avatar: "/images/avatar-2.jpg",
  },
  {
    id: "testi-003",
    name: "Budi Santoso",
    role: "Lead Developer",
    company: "Fintech Startup",
    review:
      "Codebase kami sudah 3 tahun nggak disentuh, penuh technical debt. Setelah refactoring sama OpenHelp, load time turun 60% dan bug production hilang total. Worth every rupiah.",
    rating: 5,
    service: "Refactoring & Debug",
    date: "2024-12",
    avatar: "/images/avatar-3.jpg",
  },
  {
    id: "testi-004",
    name: "Siti Nurhaliza",
    role: "Product Manager",
    company: "EdTech Platform",
    review:
      "Full-stack app kami dari 0 sampai deploy dalam 2 minggu. Auth system, dashboard admin, payment gateway — semua ada. Tim kecil tapi output-nya enterprise level.",
    rating: 5,
    service: "Full-Stack Web App",
    date: "2024-09",
    avatar: "/images/avatar-4.jpg",
  },
  {
    id: "testi-005",
    name: "Ahmad Fauzi",
    role: "WordPress Developer",
    review:
      "Plugin custom yang saya butuhkan untuk client sudah 2 bulan macet. OpenHelp selesaikan dalam 3 hari. Kodenya clean, documented, dan compatible sama semua versi WP.",
    rating: 4,
    service: "Open Source Modding",
    date: "2024-11",
    avatar: "/images/avatar-5.jpg",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────
export const FAQS: FAQ[] = [
  {
    id: "faq-001",
    question: "Berapa lama waktu pengerjaan?",
    answer:
      "Tergantung jenis layanan. Joki tugas bisa 24 jam, website landing page 3-7 hari, web app kompleks 14-30 hari. Kami selalu kasih estimasi waktu di awal sebelum mulai kerja.",
    category: "waktu",
  },
  {
    id: "faq-002",
    question: "Ada garansi dan revisi nggak?",
    answer:
      "Ya! Setiap layanan sudah include revisi sesuai paket (lihat detail layanan). Kalau hasil akhir tidak sesuai dengan brief yang disepakati, kami redo gratis sampai kamu puas.",
    category: "garansi",
  },
  {
    id: "faq-003",
    question: "Metode pembayaran apa saja yang diterima?",
    answer:
      "Transfer bank (BCA, Mandiri, BNI, BSI), GoPay, OVO, DANA, dan ShopeePay. Untuk project besar, kami terapkan sistem DP 50% di awal dan pelunasan setelah selesai.",
    category: "pembayaran",
  },
  {
    id: "faq-004",
    question: "Apakah source code akan diberikan?",
    answer:
      "Untuk semua layanan pembuatan website dan aplikasi, source code full diberikan ke client setelah pelunasan. Kamu memiliki hak penuh atas project yang kami kerjakan.",
    category: "technical",
  },
  {
    id: "faq-005",
    question: "Bisa minta custom stack / teknologi tertentu?",
    answer:
      "Tentu! Kami bekerja dengan berbagai tech stack. Sebutkan preferensimu di form order dan kami akan konfirmasi apakah kami support tech tersebut. Biasanya jawab dalam 1 jam.",
    category: "technical",
  },
  {
    id: "faq-006",
    question: "Bagaimana cara memulai order?",
    answer:
      "Klik tombol 'Pesan Sekarang' di layanan yang kamu inginkan, isi form dengan detail project, lalu kami akan follow up via WhatsApp/email dalam 1x24 jam untuk diskusi lebih lanjut.",
    category: "order",
  },
  {
    id: "faq-007",
    question: "Apakah bisa untuk kebutuhan perusahaan / tim?",
    answer:
      "Absolutely. Kami handle project skala startup hingga enterprise. Ada harga khusus untuk project volume besar atau kontrak jangka panjang. Hubungi kami langsung untuk negosiasi.",
    category: "order",
  },
];

// ─── Social Links ─────────────────────────────────────────────────
export const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/6285133460271", 
  instagram: "https://instagram.com/openhelp.dev",
  linkedin: "https://linkedin.com/company/openhelp",
  github: "https://github.com/mgfauzan",
  email: "openhelp011@gmail.com",
};

// ─── Stats ────────────────────────────────────────────────────────
export const STATS = [
  { label: "Project Selesai", value: "500+", color: "cyan" as const },
  { label: "Client Puas", value: "98%", color: "pink" as const },
  { label: "Response Time", value: "<1 Jam", color: "yellow" as const },
  { label: "Tahun Pengalaman", value: "5+", color: "green" as const },
];
