/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8',
        secondary: '#0F3749',
        accent: '#FFC107',
        roamio: '#0040c9',
      },
      fontFamily: {
        league: ['League Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}; 