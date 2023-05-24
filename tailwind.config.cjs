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
      'main-gradient': 'linear-gradient(45deg, #25292C 34%, #3F4242 100%);',
      'gradient-body':
        'linear-gradient(203deg, rgba(90,91,89,1) 0%, rgba(32,36,40,1) 64%, rgba(32,35,39,1) 66%, rgba(23,25,29,1) 100%);',
      'gradient-card-1': 'linear-gradient(45deg, #26292D 34%, #424344 100%);',
      'gradient-card-2':
        'linear-gradient(27deg, rgba(40,43,43,1) 26%, rgba(65,68,68,1) 60%, rgba(84,85,85,1) 84%, rgba(101,102,101,1) 100%);',
      'gradient-button-1':
        'linear-gradient(0deg, rgba(26,176,78,1) 0%, rgba(119,255,203,1) 100%)',
    },
    dropShadow: {
      '3xl': ['-5px 7px 3px #262726', '6px -6px 7px #5f605f'],
      '4xl': ['-18px 23px 9px #16181b', '9px -35px 20px #4A4B49'],
      'dark-4xl': ['-22px 18px 13px #16181b', '4px -22px 20px #40413F'],
      '5xl': ['-5px 5px 8px #282b2b', '6px -6px 4px #5f605f'],
      '6xl': ['-5px 5px 8px #262726', '6px -6px 4px #565755'],
      'btn-xl-green': '0px 2px 8px #55CC00',
      'btn-hover-xl-green': '0px 0px 5px #339900',
      'btn-xl-gold': '0px -2px 3px #EAC033',
      'btn-xl-gold-disabled': '0px 2px 8px #99790F',
      'btn-hover-xl-gold': '0px 0px 5px #785F0C',
    },
    colors: {
      green: {
        50: '#E9FFE5',
        100: '#D5FFCC',
        200: '#B3FF99',
        300: '#99FF66',
        400: '#88FF33',
        500: '#7EFC00',
        600: '#55CC00',
        700: '#339900',
        800: '#1A6600',
        900: '#093300',
        950: '#031900',
      },
      'green-gray': {
        50: '#EDEDED',
        100: '#D9D9D8',
        200: '#C2C3C1',
        300: '#A8A9A7',
        400: '#858683',
        500: '#565755',
        600: '#4F504E',
        700: '#4A4B49',
        800: '#40413F',
        900: '#383937',
        950: '#262726',
      },
      gold: {
        50: '#F9EEC7',
        100: '#F8E8B5',
        200: '#F3DB8B',
        300: '#EFCE61',
        400: '#EAC033',
        500: '#DBAD16',
        600: '#B99213',
        700: '#99790F',
        800: '#785F0C',
        900: '#584609',
        950: '#4A3B07',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#55CC00',
          'neutral-content': 'red',
        },
      },
    ],
  },
}
