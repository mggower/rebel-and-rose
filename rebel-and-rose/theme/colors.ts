const WHEAT = {
  50: '#FDF7EF',
  100: '#FDEFDB',
  200: '#F9E3C4',
  300: '#F3CFA4',
  400: '#EBBB85',
  500: '#DEA465',
  600: '#CB8845',
  700: '#AB6422',
  800: '#874609',
} as const

const BLUSH = {
  100: '#FEE7E1',
  200: '#FBCEC3',
  300: '#FBBAA9',
  400: '#F49C8A',
  500: '#E67667',
  600: '#D8473E',
  700: '#C32C27',
  800: '#AB0E0E',
} as const

const BLONDE = {
  100: '#FFE5C2',
  200: '#FFCF8F',
  300: '#FBB860',
  400: '#F5A145',
  500: '#EA8A34',
  600: '#E37A1E',
  700: '#D66A0B',
  800: '#C55D01',
} as const

const EARTH = {
  100: '#CDD9CE',
  200: '#A8BFAB',
  300: '#839F86',
  400: '#647D67',
  500: '#4A5F4D',
  600: '#354737',
  700: '#243225',
  800: '#141F15',
} as const

const LAVENDER = {
  100: '#F1E1EE',
  200: '#EBCEE7',
  300: '#DDB8D7',
  400: '#C497BD',
  500: '#B67FAD',
  600: '#A66D9D',
  700: '#96588C',
  800: '#7F3874',
} as const

const INK = {
  50: '#FFFFFF',
  100: '#F1F1F1',
  200: '#E0E0E0',
  300: '#CBCBCA',
  400: '#AAAAA8',
  500: '#838380',
  600: '#63635E',
  700: '#4A4C43',
  800: '#313328',
  900: '#1D1F13',
} as const

const TRANSPARENT = 'transparent'

const TOKEN = {
  transparent: TRANSPARENT,
  wheat: WHEAT[300],
  blush: BLUSH[300],
  russet: WHEAT[700],
  earth: EARTH[500],
  blonde: BLONDE[400],
  lavender: LAVENDER[200],
  ink: INK[900],
  white: INK[50],
}

const colors = {
  token: TOKEN,
  wheat: WHEAT,
  blush: BLUSH,
  blonde: BLONDE,
  earth: EARTH,
  lavender: LAVENDER,
  ink: INK,
}

export default colors
