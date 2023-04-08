type Color = keyof typeof colorCodes
export function colorize(str: string, ...colors: Color[]) {
  const colorCommands = colors.map((color) => '\x1B[' + colorCodes[color] + 'm').join('')
  return colorCommands + str + '\x1B[0m'
}

const colorCodes = {
  white: 1,
  black: 30,
  blue: 34,
  magenta: 35,
  cyan: 36,

  red: 31,
  lightRed: 91,
  green: 32,
  lightGreen: 92,
  yellow: 33,
  lightYellow: 93,
  gray: 90,
  lightGray: 37,

  bgRed: 41,
  bgLightRed: 101,
  bgGreen: 42,
  bgLightGreen: 102,
  bgYellow: 43,
  bgLightYellow: 103,
  bgBlue: 44,
  bgLightBlue: 104,
  bgMagenta: 45,
  bgLightMagenta: 105,
  bgCyan: 46,
  bgLightCyan: 106,
  bgGray: 100,
  bgLightGray: 47,
  bgWhite: 107,

  underline: 4,
  inverse: 7,
  reset: 0,
}
