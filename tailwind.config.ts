import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#080808",
        surface: "#111111",
        "surface-hi": "#1C1C1E",
        border: "#2C2C2E",
        "accent-green": "#30D158",
        "accent-yellow": "#FFD60A",
        "accent-red": "#FF453A",
        "text-primary": "#FFFFFF",
        "text-secondary": "#8E8E93",
        "text-muted": "#48484A",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Syne", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        mobile: "480px",
        page: "1200px",
      },
      borderRadius: {
        phone: "44px",
      },
    },
  },
  plugins: [],
};

export default config;
