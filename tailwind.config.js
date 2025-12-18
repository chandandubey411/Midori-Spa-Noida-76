/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // tailwind.config.js
  theme: {
    extend: {
      colors: {
        pink: {
          600: "#ff0a6c",
          700: "#e6005c",
        },
      },
    },
  },

  plugins: [],
};
