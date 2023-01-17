/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{jsx,js}",
  ],  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--color-primary)",
      },
      colors: {
        'tx-primary': "var(--text-color-primary)",
      }
    },
  },
  plugins: [],
}
