import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        background: "#0D1117",   // Dark navy - overall background
        surface: "#161B22",      // Section / card background
        primary: "#00E0FF",      // Futuristic cyan
        secondary: "#6C63FF",    // AI purple
        accent: "#08E95E",       // Bright emerald green (tumhara pehla accent)
        textMain: "#E6E6E6",     // Main text
        textMuted: "#A1A1AA",    // Muted / secondary text
      },
    },
  },
  plugins: [],
};

export default config;
