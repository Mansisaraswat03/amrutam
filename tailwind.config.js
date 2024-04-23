
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:"#fff7e2",
        green:"#3A643B",
        light:"#FFFBF2",
        grey:"#DCDCDC",
        bg:"#F4F7EC",
        shade :"#F7F7FC",
        leafyGreen :"#D8FAD9",
        circle:"#CFEBCF",
        card:"#FFF7E2",
      }
    },
  },
  plugins: [],
}

