import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand: Teal (#4aa8b0)
        primary: {
          50:  '#edf7f8',
          100: '#d5eef0',
          200: '#aee0e4',
          300: '#86d1d6',
          400: '#63c0c6',
          500: '#4fb5bb',
          600: '#4aa8b0', // main brand color
          700: '#3f8e95',
          800: '#347279',
          900: '#28585d',
        },
        accent: {
          500: '#ffd166',
          600: '#fcbf49',
        }
      },
    },
  },
  plugins: [],
};
export default config;
