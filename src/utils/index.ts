export const createCssVariable = (name: string, value: string | number) => {
  return { [`--${name}`]: value } as React.CSSProperties
}
