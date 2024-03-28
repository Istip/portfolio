import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        dark: "#111111",
        primary: "#3EEA8D",
        primaryDark: "#2BAA65",
        primaryLight: "#CCF4DE",
        light: "#F9F9F9",
      },
      height: {
        hero: "calc(100vh - 80px)",
      },
    },
  },
  plugins: [],
};
export default config;
