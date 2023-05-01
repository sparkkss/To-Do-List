/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'first-color': '#303841',
        'second-color': '#3a4750',
        'third-color': '#be3144',
        'text-color': '#d3d6db',
      }
    },
    fontFamily: {
      'title' : ['Poppins','sans-serif'],
    },
  },
  plugins: [],
}

