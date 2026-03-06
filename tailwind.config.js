/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          DEFAULT: '#4a7585',
          dark: '#3a5e6e',
          light: '#6a95a5',
        },
        cream: {
          DEFAULT: '#f2edd8',
          dark: '#e8e0c5',
        },
        navy: '#1a2f3a',
        gold: '#c9b97a',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        jost: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
