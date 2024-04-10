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

        primary: "#b8b8ff",

        primaryDark: "#9381ff",
        primaryLight: "#ffeedd",
        light: "#F4F3EE",

        // OLD COLORS:
        // primary: "#3EEA8D",
        // primaryDark: "#2BAA65",
        // primaryLight: "#CCF4DE",
      },
      height: {
        hero: "calc(100vh - 82px - 36px - 36px)",
      },
    },
  },
  plugins: [],
};
export default config;
