import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      mainFont: ["var(--font-youngserif)", ...fontFamily.sans],
      secondFont: ["var(--font-bebas)", ...fontFamily.sans],
    },
  },
  plugins: [],
};
export default config;
