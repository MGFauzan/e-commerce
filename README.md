# OpenHelp — Cyberpunk E-Commerce Jasa Coding

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-F38020?logo=cloudflare)](https://pages.cloudflare.com)

> Jasa coding profesional: website, joki tugas, refactoring, open source modding. Cyberpunk edition. ⚡

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.local.example .env.local
# Edit .env.local dengan API key kamu

# Development
npm run dev

# Build production
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
openhelp/
├── app/
│   ├── api/contact/route.ts    # Email API
│   ├── layout.tsx              # Root layout + SEO
│   ├── page.tsx                # Main page
│   └── globals.css             # Global styles + cyberpunk effects
├── components/
│   ├── navbar/                 # Fixed nav + mobile menu
│   ├── hero/                   # Hero + glitch + HUD
│   ├── services/               # Catalog + filter + sort
│   ├── promo/                  # Promo bundles
│   ├── testimonial/            # Slider testimonials
│   ├── faq/                    # Accordion FAQ
│   ├── contact/                # Form + social + email API
│   ├── cart/                   # Cart sidebar
│   └── footer/                 # Footer + links
├── hooks/useCart.ts            # Cart state management
├── lib/utils.ts                # Utilities
├── lib/validation.ts           # Zod schemas
├── constants/data.ts           # Services, FAQs, Promos, Testimonials
└── types/index.ts              # TypeScript types
```

## ☁️ Deploy ke Cloudflare Pages

### Via Cloudflare Dashboard

1. Push project ke GitHub/GitLab
2. Login ke [Cloudflare Pages](https://pages.cloudflare.com)
3. Create a new project → Connect to Git → Pilih repo
4. Build settings:
   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Build output directory:** `.next`
5. Environment Variables:
   - `RESEND_API_KEY` = your key
   - `CONTACT_EMAIL` = your email
6. Deploy!

### Via Wrangler CLI

```bash
npm install -g wrangler
wrangler pages deploy .next --project-name openhelp
```

## 🎨 Design System

| Token | Value |
|-------|-------|
| `--neon-pink` | `#FF00FF` |
| `--cyber-cyan` | `#00FFFF` |
| `--cyber-yellow` | `#F0ED0E` |
| `--pitch-black` | `#050505` |
| `--deep-purple` | `#2D004B` |

### Fonts
- **Heading:** Orbitron (futuristic)
- **Mono:** JetBrains Mono (techy)
- **Body:** Space Grotesk (readable)

## 📧 Email Setup

Daftar di [resend.com](https://resend.com) → Create API Key → Tambahkan ke `.env.local`:
```
RESEND_API_KEY=re_xxxxx
CONTACT_EMAIL=kamu@domain.com
```

Verifikasi domain kamu di Resend untuk kirim email dengan alamat custom.

## 🔒 Security Features

- ✅ CSP Headers
- ✅ HSTS
- ✅ X-Frame-Options
- ✅ Honeypot spam protection
- ✅ Zod validation (client + server)
- ✅ Input sanitization

## ⚡ Performance

- Dynamic imports untuk code splitting
- Lazy loading components below-fold
- AVIF/WebP image support
- JSON-LD structured data
- Metadata + OpenGraph SEO

---

Made with ❤️ + ⚡ by OpenHelp Team
