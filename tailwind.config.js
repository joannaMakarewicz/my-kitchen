import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        mainViolet:'#bd34fe'
      }
    },
  },
  plugins: [],
}

