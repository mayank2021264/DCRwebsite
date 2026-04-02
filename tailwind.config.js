/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dcr-navy': '#0D1B2A',
        'dcr-slate': '#1E293B',
        'dcr-blue': '#29ABE2',
        'dcr-purple': '#4A3FA0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}