/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

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
    screens: {
      //xs: [{ min: '537px', max: '639px639px' }, { max: '536px' } ],
      xs: { max: '537px' },
      ...defaultTheme.screens,
    },
    backgroundImage: {
      'head-principal':
        'url(https://res.cloudinary.com/ivanrice-c/image/upload/q_90/a_-90/v1679549797/Frontend/photo-lamp-3d/1_gkcgii.webp)',
      'head-title':
        'linear-gradient(0deg,  rgba(136,246,254,1) 0%, rgba(195,240,252,1) 29%, rgba(212,238,251,1) 68%, rgba(223,236,255,1) 100%);',
    },
    colors: {
      neonBlue: {
        50: '#EBEFFF',
        100: '#D6DFFF',
        200: '#B3C3FF',
        300: '#8AA3FE',
        400: '#6788FE',
        500: '#4069FE',
        600: '#0138FE',
        700: '#0129BC',
        800: '#011C7F',
        900: '#000D3D',
      },
      celeste: {
        50: '#F5F9FF',
        100: '#F0F7FF',
        200: '#E6F4FF',
        300: '#D7F3FF',
        400: '#D9FAFF',
        500: '#B6F7FE',
        600: '#88F6FE',
        700: '#3AC3FD',
        800: '#119BFD',
        900: '#026BE4',
      },
      purple: {
        50: '#FCFCFD',
        100: '#F5F4FA',
        200: '#DFDCF4',
        300: '#C5C0F2',
        400: '#ABA3F5',
        500: '#8278FA',
        600: '#7568EE',
        700: '#6556DC',
        800: '#5544C5',
        900: '#3F3578',
      },
    },
  },
  plugins: [],
}
