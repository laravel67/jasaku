/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        brigtBg:"#FDF8EE",
        brigtGreen:"#539165",
        lightText:"#959595",
      }
    },
  },
  plugins: [],
}

