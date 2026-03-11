module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2c2c2c',
        secondary: '#8b7355',
        accent: '#d4c5b2',
        background: '#faf8f5',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 15s linear infinite',
      },
    },
  },
  plugins: [],
}