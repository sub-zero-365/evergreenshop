/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "manrope": ["Manrope", 'sans-serif'],
        "bricolage": ["Bricolage Grotesque", 'sans-serif'],
      }
    },
  },
  plugins: [],
}

