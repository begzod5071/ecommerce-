/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1a4b75",
        secondary: "#82868b",
        success: "#28CD41",
        danger: "#ea5455",
        warning: "#ff9f43",
        info: "#9333EA",
        dark: "#2D2D2D",
        darkLayoutStorm: "#283046",
        darkLayoutMain: "#171D32",
        darkSecondary: "#4F5E75",
      },
      boxShadow: {
        badgeShadow: "0 0 10px",
        buttonShadow: "0px 8px 25px -8px",
      },
    },
  },
  plugins: [],
};

