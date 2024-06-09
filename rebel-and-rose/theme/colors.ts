const WHEAT = {
  100: '#FAF8F0',
  200: '#F5EFDE',
  300: '#F0E4CC',
  400: '#E9D9BC',
  500: '#D9C29E',
  600: '#C8A881',
  700: '#B78F6A',
  800: '#AA7751',
} as const

const BLUSH = {
  100: '#FDDDCF',
  200: '#F0C0AC',
  300: '#E8A88C',
  400: '#E08668',
  500: '#D6644C',
  600: '#C24D3B',
  700: '#AA382B',
  800: '#862118',
} as const

const RUSSET = {
  100: '#EFC29C',
  200: '#DFA778',
  300: '#CF8A50',
  400: '#B67035',
  500: '#A15F27',
  600: '#874E1E',
  700: '#673A13',
  800: '#4D2909',
} as const

const EARTH = {
  100: '#E9E9E2',
  200: '#D5D7BF',
  300: '#B4B892',
  400: '#989E72',
  500: '#7D8255',
  600: '#575B38',
  700: '#46482C',
  800: '#34351D',
} as const

const INK = {
  50: '#FFFFFF',
  75: '#F4F4F4',
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
} as const

const TRANSPARENT = 'transparent'

const TOKEN = {
  transparent: TRANSPARENT,
  wheat: WHEAT[400],
  blush: BLUSH[300],
  russet: RUSSET[500],
  earth: EARTH[700],
  ink: INK[950],
  white: INK[50],
}

const colors = {
  token: TOKEN,
  wheat: WHEAT,
  blush: BLUSH,
  russet: RUSSET,
  earth: EARTH,
  ink: INK,
}

export default colors
