/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5A2328', // Dark Burgundy
          navbar: '#3B0A0F', // Darker Burgundy for navbar
          light: '#7A3338',
          dark: '#401819',
        },
        secondary: {
          DEFAULT: '#D4AF37', // Gold
          light: '#E6C65C',
          dark: '#B39329',
        },
        neutral: '#3B0A0F', // Dark Burgundy for cards
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}