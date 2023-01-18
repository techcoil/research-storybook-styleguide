/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{jsx,js}",
  ],  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--scheme-primary)",
        secondary: "var(--scheme-secondary)",
      },
      colors: {
        danger: "var(--scheme-danger)",
      }
    },
  },
  plugins: [],
}
