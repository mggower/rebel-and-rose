export const pixel = (value: number) => `${value}px`

export const createCssVariable = (...vars: [name: string, value: string | number][]) => {
  return vars.reduce(
    (acc, [name, value]) => {
      acc[`--${name}`] = value
      return acc
    },
    {} as Record<string, string | number>,
  ) as React.CSSProperties
}

export const calcHeightFromWindow = (percentage: number) => window.innerHeight * (percentage / 100)
