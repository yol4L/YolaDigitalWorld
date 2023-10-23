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
          400: "#1F9DFF",
          500: "#1F86FF",
        },
        ocean: {
          100: "#F2F3F7",
          300: "#9CAFCC",
          500: "#587AAB",
          700: "#435E85",
          900: "#00214E",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
