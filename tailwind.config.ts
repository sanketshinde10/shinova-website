import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0E1A2B",
        teal: "#00C2B8",
        soft: "#F5F7FA",

        textPrimary: "#0E1A2B",
        textSecondary: "#5E6B7A",
        textMuted: "#8A94A6",
      },
    },
  },
  plugins: [],
};

export default config;
