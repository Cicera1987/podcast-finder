import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text:"#080b09",
        background:" #F9FAFB",
        primary:" #1DB954",
        secondary:" #91d59e",
        accent: " #65d079",
        hover: "#3da35d"
      },
    },
  },
  plugins: [],
} satisfies Config;
