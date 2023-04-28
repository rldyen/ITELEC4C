/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'firewatch': "url('./src/assets/firewatch.jpg')",
        'firewatch-night': "url('./src/assets/firewatch_night.jpg')",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
  },
  plugins: [],
  }
}

