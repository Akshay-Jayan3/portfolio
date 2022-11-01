/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'lg': '0 35px 60px -10px rgba(100, 255, 218, 0.7)',
      }
    },
  },
  plugins: [],
}
