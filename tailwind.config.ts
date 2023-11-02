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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  darkMode: "class",
};
export default config;
