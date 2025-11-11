/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

const createAssetUrl = (path) => `url('@/assets/${path}')`

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      mono: defaultTheme.fontFamily.mono,
      sans: ['"Myriad Pro"', ...defaultTheme.fontFamily.sans],
      serif: ['"American Typewriter"', ...defaultTheme.fontFamily.serif],
      block: ['"Nickson One"', ...defaultTheme.fontFamily.serif],
      cursive: ['Bandoeng', 'cursive'],
      calder: ['calder-lc', 'serif'],
      dark: ['calder-dark', 'serif'],
    },
    data: {
      active: 'active="true"',
      selected: 'selected="true"',
      primary: 'palette="primary"',
      secondary: 'palette="secondary"',
      light: 'theme="light"',
      dark: 'theme="dark"',
      open: 'open="true"',
    },
    extend: {
      colors: {
        wheat: {
          DEFAULT: '#E9D9BC',
          100: '#FAF8F0',
          200: '#F5EFDE',
          300: '#F0E4CC',
          400: '#E9D9BC',
          500: '#D9C29E',
          600: '#C8A881',
          700: '#B78F6A',
          800: '#AA7751',
        },
        blush: {
          DEFAULT: '#E8A88C',
          100: '#FDDDCF',
          200: '#F0C0AC',
          300: '#E8A88C',
          400: '#E08668',
          500: '#D6644C',
          600: '#C24D3B',
          700: '#AA382B',
          800: '#862118',
        },
        russet: {
          DEFAULT: '#A15F27',
          100: '#EFC29C',
          200: '#DFA778',
          300: '#CF8A50',
          400: '#B67035',
          500: '#A15F27',
          600: '#874E1E',
          700: '#673A13',
          800: '#4D2909',
        },
        earth: {
          DEFAULT: '#46482C',
          100: '#E9E9E2',
          200: '#D5D7BF',
          300: '#B4B892',
          400: '#989E72',
          500: '#7D8255',
          600: '#575B38',
          700: '#46482C',
          800: '#34351D',
        },
        ink: {
          DEFAULT: '#1B1B1B',
          50: '#F4F4F4',
          100: '#E8E8E8',
          200: '#D2D2D2',
          300: '#B3B3B3',
          400: '#949292',
          500: '#7B7979',
          600: '#646262',
          700: '#545252',
          800: '#414040',
          900: '#302F2F',
          950: '#1B1B1B',
        },
      },
      backgroundImage: {
        ['boho-folk-e']: createAssetUrl('textures/boho-folk-E.jpg'),
        ['image-2']: createAssetUrl('images/image-2.jpg'),
        ['image-7']: createAssetUrl('images/image-7.jpg'),
      },
      letterSpacing: {
        extreme: '0.3em',
      },
    },
  },
  plugins: [],
}
