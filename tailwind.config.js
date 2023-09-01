/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary: "#0B3229",
        secondary: "#C5542A"
      }
    },
    fontFamily:{
      'sans': ['Montserrat', 'sans-serif'],
      'script': ['Dancing Script', 'cursive'],
      'slabo':['Slabo 27px', 'serif'],
      'hanuman': ['Hanuman', 'serif'],
      'inknut': ['Inknut Antiqua', 'serif'],
    }
  },
  plugins: [],
}

