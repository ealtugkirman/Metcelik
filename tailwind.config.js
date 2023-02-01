/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        mons: ['Montserrat', "sans-serif;"],
        robo: ["Roboto", "sans-serif"]
      },
      
      colors: {
        "first" : "#2F3091",
        "second": "#F9F7F7",
        "third": "#FFEBB7",
        "last": "#AD8E70",
      },
    },
  },
  plugins: [],
}