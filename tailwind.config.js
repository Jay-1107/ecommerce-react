/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#d47311",
          hover: "#e88523",
        },
        background: {
          light: "#fdfbf7",
          dark: "#120f0d",
        },
        surface: {
          light: "#ffffff",
          dark: "#1c1815",
        },
        accent: {
          light: "#f3ebe3",
          dark: "#2a2420",
        },
        border: {
          light: "#e6ddd5",
          dark: "#423830",
        },
        text: {
          main: "#3e3228",
          light: "#f3ebe3",
          muted: "#a89f96",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
