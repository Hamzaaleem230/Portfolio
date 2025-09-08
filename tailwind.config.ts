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
        background: "#0D1117",   // Dark navy - main background
        surface: "#161B22",      // Card/section background
        primary: "#00E0FF",      // Futuristic cyan
        secondary: "#6C63FF",    // Purple accent
        accent: "#08E95E",       // Emerald green (primary accent)
        textMain: "#E6E6E6",     // Main text (light gray/white)
        textMuted: "#A1A1AA",    // Secondary / muted text
      },
    },
  },
  plugins: [],
};

export default config;
