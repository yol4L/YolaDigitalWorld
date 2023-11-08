import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: [
          "Merriweather",
          "Noto Serif",
          "Times New Roman",
          ...defaultTheme.fontFamily.serif,
        ],
      },
      colors: {
        cerulean: {
          100: "#E5F4FF",
          200: "#C3E5FF",
          300: "#8DCEFF",
          400: "#52B3FD",
          500: "#1F9DFF",
          600: "#1F86FF",
          700: "#0E62FB",
          800: "#054AC8",
          900: "#004AA6",
        },
        ocean: {
          100: "#F2F3F7",
          200: "#C7D2E3",
          300: "#9CAFCC",
          400: "#728EB9",
          500: "#587AAB",
          600: "#4C6B98",
          700: "#3F587D",
          800: "#324664",
          900: "#00214E",
        },
        brick: {
          100: "#CAB19D",
          200: "#B9A090",
          300: "#CB997E",
          400: "#C8966D",
          500: "#BB7C66",
          600: "#BC7751",
          700: "#A15C44",
          800: "#995A38",
          900: "#6F4026",
        },
      },
      backgroundImage: {
        "animated-scroll-light":
          "linear-gradient(to bottom, rgba(30, 41, 59, 0) 0%, #1e293b 75%, #1e293b 100%);",
        "animated-scroll-dark":
          "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        drop: "drop 2s 0s forwards infinite linear",
        lineUp: "lineUp 1.5s ease-in-out",
        slideLeft: "slideLeft 2s ease-in-out",
        slideRight: "slideRight 2s ease-in-out",
        slideUp: "slideUp 1.5s ease-in-out",
        slideDown: "slideDown 1.5s ease-in-out",
        fadeIn: "fadeIn 1.5s linear",
      },
      keyframes: {
        drop: {
          "0%": { top: "-50%" },
          "100%": { top: "110%" },
        },
        lineUp: {
          "0%": { opacity: "0", transform: "translateY(60%)" },
          "20%": { opacity: "0" },
          "70%": { opacity: "1", transform: "translateY(0%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(30%)" },
          "20%": { opacity: "0" },
          "50%": { opacity: "1", transform: "translateX(0%)" },
          "100%": { opacity: "1", transform: "translateX(0%)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-30%)" },
          "20%": { opacity: "0" },
          "50%": { opacity: "1", transform: "translateX(0%)" },
          "100%": { opacity: "1", transform: "translateX(0%)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(60%)" },
          "20%": { opacity: "0" },
          "50%": { opacity: "1", transform: "translateY(0%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-60%)" },
          "20%": { opacity: "0" },
          "50%": { opacity: "1", transform: "translateY(0%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  darkMode: "class",
};
export default config;
