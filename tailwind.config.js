/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'bgcolor': '#F9F9F9',
        'primary': '#d2f47b',
        'dark':'#4f4f4f',
      },
    },
  },
  plugins: [],
}

