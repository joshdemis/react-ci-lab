// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    darkMode: "class",
    extend: {
      colors: {
        brand: {
          50: "#eef4ff",
          100: "#dbe8ff",
          200: "#b6d0ff",
          300: "#91b8ff",
          400: "#6ca0ff",
          500: "#467df2",   // primary brand color (BUTTON DEFAULT)
          600: "#3563c9",   // hover/active
          700: "#264a9c",
          800: "#1b3673",
          900: "#12254d",
        },
        surface: {
          light: "#ffffff",
          dark: "#111418",
        },
        textc: {
          light: "#111418",
          dark: "#e5e7eb",
        },
      },
    },
  },
  plugins: [],
};
