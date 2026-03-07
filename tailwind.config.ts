import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0F14",
        "ink-2": "#141920",
        "ink-3": "#1C2430",
        amber: "#E8A020",
        "amber-light": "#F5B840",
        "amber-dim": "rgba(232,160,32,0.12)",
        cream: "#F7F4EE",
        grey: "#8A95A0",
        "grey-light": "#B8C2CC",
      },
      fontFamily: {
        head: ["Barlow Condensed", "sans-serif"],
        body: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
