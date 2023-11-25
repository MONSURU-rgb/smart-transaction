import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",
  theme: {
    fontFamily: {
      poppins: ["Poppins", "ui-sans-serif"],
    },
    extend: {
      spacing: {
        18: "clamp(12px,1.1vw,18px)",
        28: "clamp(18px,1.8vw,28px)",
        30: "clamp(18px,1.9vw,30px)",
        32: "clamp(18px,2vw,32px)",
        38: "clamp(24px,2.8vw,38px)",
        48: "clamp(30px,3.2vw,48px)",
        55: "clamp(32px,3.4vw,55px)",
        72: "clamp(48px,4.5vw,72px)",
        225: "clamp(190px,14.1vw,225px)",
      },

      colors: {
        "dark-gray": "#1F1F1F",
        platinum: "#E3E3E3",
        "chinese-black": "#121212",
        crayola: "#2F70F2",
        "light-gray": "#F7F7FF",
        cultured: "#F6F6F6",
        "malachite-green": "#4EEA7A",
        "are-blue": "#876AFE",
        "geranium-lake": "#D62C2C",
        "light-yellow": "#FFBC02",
        gray: "#A8A8A8",
      },

      letterSpacing: {
        28: "-0.28px",
        32: "-0.32px",
      },

      lineHeight: {
        130: "130%",
        150: "150%",
        160: "160%",
        168: "168%",
      },
    },
  },
  plugins: [],
};
export default config;
