/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      boxShadow: {
        'lg': '0 35px 60px 15px rgba(100, 255, 218, 0.7)',
        '3xl': '0 20px 40px 5px rgba(100, 255, 218, 0.7)',
      },
      
    },
  },
  plugins: [],
}
