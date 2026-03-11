/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2c2c2c",
        secondary: "#8b7355",
        accent: "#d4c5b2",
        background: "#faf8f5",
        text: "#2c2c2c",
        muted: "#6b6b6b",
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
}