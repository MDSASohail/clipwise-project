/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
         first:"#80d3fb",
         second:'#a8c5ff',
         outerColor:'#788F9C40',
         bottomColor:'#0A294DCC',
         tagColor:'#8a93e5'
      }
    },
  },
  plugins: [],
}