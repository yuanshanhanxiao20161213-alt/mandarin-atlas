import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#f5efe3",
        paper: "#fffaf0",
        ink: "#171411",
        cinnabar: "#b43f24",
        jade: "#507a6a",
        lapis: "#233a59",
        brass: "#b89a5b"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "Consolas", "monospace"]
      },
      boxShadow: {
        editorial: "0 24px 80px rgba(23, 20, 17, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
