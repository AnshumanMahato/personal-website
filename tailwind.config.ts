import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import aspectRatio from "@tailwindcss/aspect-ratio";
import typography from "@tailwindcss/typography";
import css from "styled-jsx/css";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      primary: {
        dark: "#d4d4d8",
        light: "#52525b",
      },
      secondary: {
        dark: "#a1a1aa",
        light: "#71717a",
      },
      background: {
        dark: "#18181b",
        light: "#fafafa",
      },
      accent: {
        light: "#17c964",
        dark: "#45d483",
      },
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [aspectRatio, typography()],
  darkMode: "selector",
};
export default config;
