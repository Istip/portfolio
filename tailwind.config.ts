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
        primaryDark: "#9381ff",
        primary: "#b8b8ff",
        primaryLight: "#E8E8FA",

        dark: "#111111",
        light: "#F2F0EF",
      },
      height: {
        hero: "calc(100vh - 82px - 36px - 36px)",
      },
    },
  },
  plugins: [],
};
export default config;
