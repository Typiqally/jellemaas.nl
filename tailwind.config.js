/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    }
  },
  plugins: ['tailwindcss', 'autoprefixer']
}

