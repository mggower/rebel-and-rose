export const pixel = (value: number) => `${value}px`
export const rem = (value: number) => `${value}rem`
export const em = (value: number) => `${value}em`
export const calcRem = (factor = 1) => 16 * factor

export const cssVars = (vars: Record<string, number | string>): React.CSSProperties => {
  const style: Record<string, string | number> = {}

  for (const [name, value] of Object.entries(vars)) {
    style[`--${name}`] = value
  }

  return style as React.CSSProperties
}

export const calcHeightFromWindow = (percentage: number) => window.innerHeight * (percentage / 100)
