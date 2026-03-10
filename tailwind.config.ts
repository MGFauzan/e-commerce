import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-pink": "#FF00FF",
        "cyber-cyan": "#00FFFF",
        "cyber-yellow": "#F0ED0E",
        "pitch-black": "#050505",
        "deep-purple": "#2D004B",
        "glitch-red": "#FF0040",
        "matrix-green": "#00FF41",
        "hud-blue": "#0AFFEF",
        background: "#050505",
        foreground: "#E0E0E0",
        card: {
          DEFAULT: "rgba(13, 0, 25, 0.85)",
          foreground: "#E0E0E0",
        },
        border: "rgba(255, 0, 255, 0.3)",
        input: "rgba(255, 0, 255, 0.1)",
        ring: "#FF00FF",
        primary: {
          DEFAULT: "#FF00FF",
          foreground: "#050505",
        },
        secondary: {
          DEFAULT: "#00FFFF",
          foreground: "#050505",
        },
        muted: {
          DEFAULT: "rgba(255, 255, 255, 0.06)",
          foreground: "rgba(224, 224, 224, 0.5)",
        },
        accent: {
          DEFAULT: "#F0ED0E",
          foreground: "#050505",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "Courier New", "monospace"],
        heading: ["Orbitron", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 5vw, 4.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.1" }],
      },
      backgroundImage: {
        "cyber-grid": `
          linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px)
        `,
        "neon-gradient": "linear-gradient(135deg, #FF00FF 0%, #00FFFF 50%, #F0ED0E 100%)",
        "dark-gradient": "linear-gradient(180deg, #050505 0%, #2D004B 50%, #050505 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(13, 0, 25, 0.9) 0%, rgba(45, 0, 75, 0.6) 100%)",
        "hero-gradient": "radial-gradient(ellipse at 50% 50%, rgba(45, 0, 75, 0.8) 0%, rgba(5, 5, 5, 1) 70%)",
      },
      backgroundSize: {
        "grid-sm": "30px 30px",
        "grid-md": "50px 50px",
        "grid-lg": "80px 80px",
      },
      boxShadow: {
        "neon-pink": "0 0 10px #FF00FF, 0 0 30px rgba(255, 0, 255, 0.4), 0 0 60px rgba(255, 0, 255, 0.1)",
        "neon-cyan": "0 0 10px #00FFFF, 0 0 30px rgba(0, 255, 255, 0.4), 0 0 60px rgba(0, 255, 255, 0.1)",
        "neon-yellow": "0 0 10px #F0ED0E, 0 0 30px rgba(240, 237, 14, 0.4), 0 0 60px rgba(240, 237, 14, 0.1)",
        "card-glow": "0 0 40px rgba(255, 0, 255, 0.15), 0 8px 32px rgba(0, 0, 0, 0.8)",
        "inner-glow": "inset 0 0 20px rgba(255, 0, 255, 0.1)",
      },
      animation: {
        "glitch": "glitch 3s infinite",
        "scanline": "scanline 8s linear infinite",
        "flicker": "flicker 0.15s infinite",
        "neon-pulse": "neonPulse 2s ease-in-out infinite alternate",
        "float": "float 6s ease-in-out infinite",
        "grid-move": "gridMove 20s linear infinite",
        "text-glitch": "textGlitch 4s infinite",
        "border-flow": "borderFlow 3s linear infinite",
        "hud-blink": "hudBlink 1.5s step-end infinite",
      },
      keyframes: {
        glitch: {
          "0%, 90%, 100%": { transform: "translate(0)" },
          "91%": { transform: "translate(-2px, 1px)", filter: "hue-rotate(90deg)" },
          "92%": { transform: "translate(2px, -1px)", filter: "hue-rotate(-90deg)" },
          "93%": { transform: "translate(-1px, -2px)" },
          "94%": { transform: "translate(1px, 2px)" },
          "95%": { transform: "translate(0)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        neonPulse: {
          "0%": { textShadow: "0 0 7px #FF00FF, 0 0 10px #FF00FF, 0 0 21px #FF00FF" },
          "100%": { textShadow: "0 0 7px #FF00FF, 0 0 20px #FF00FF, 0 0 42px #FF00FF, 0 0 82px #FF00FF" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gridMove: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "80px 80px" },
        },
        textGlitch: {
          "0%, 95%, 100%": { clipPath: "none", transform: "none" },
          "96%": { clipPath: "polygon(0 20%, 100% 20%, 100% 40%, 0 40%)", transform: "translate(-3px, 0)" },
          "97%": { clipPath: "polygon(0 60%, 100% 60%, 100% 80%, 0 80%)", transform: "translate(3px, 0)" },
          "98%": { clipPath: "none", transform: "translate(-1px, 0)" },
          "99%": { clipPath: "none", transform: "none" },
        },
        borderFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        hudBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      clipPath: {
        "cyber": "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))",
        "cyber-sm": "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
        "cyber-lg": "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
      },
    },
  },
  plugins: [
    require("tailwindcss/plugin")(({ addUtilities, theme }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void; theme: (path: string) => Record<string, string> }) => {
      addUtilities({
        ".clip-cyber": {
          clipPath: "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))",
        },
        ".clip-cyber-sm": {
          clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
        },
        ".clip-cyber-lg": {
          clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
        },
        ".text-glow-pink": {
          textShadow: "0 0 7px #FF00FF, 0 0 20px rgba(255, 0, 255, 0.5)",
        },
        ".text-glow-cyan": {
          textShadow: "0 0 7px #00FFFF, 0 0 20px rgba(0, 255, 255, 0.5)",
        },
        ".text-glow-yellow": {
          textShadow: "0 0 7px #F0ED0E, 0 0 20px rgba(240, 237, 14, 0.5)",
        },
        ".scanlines": {
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
        },
        ".noise": {
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
        },
      });
    }),
  ],
};

export default config;
