
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        LightRed:"#de5d5b",
        Purple:"#9451e0",
        LightGreen:"#71e1b5"
      },
      backgroundImage: theme => ({
        'home': "url('/src/assets/Home.jpg')",
        'homie': "url('/src/assets/homie.png')",
        'back':"url('/src/assets/back.png')",
        'style':"url('/src/assets/style.jpg')",
        'style1':"url('/src/assets/style1.jpg')",
        'fac':"url('/src/assets/ima.jpg')"
      }),
    },
  },
  plugins: [],
}