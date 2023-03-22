/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      'persian-indigo': '#3D1D6Cff',
      fandango: '#B943A3ff',
      byzantium: '#84316Cff',
      melon: '#FFC6BAff',
    },
  },
  plugins: [],
}
