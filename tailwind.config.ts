import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    ".src/app/**/*.{ts,tsx}",
    ".src/components/**/*.{ts,tsx}",
    ".src/sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
