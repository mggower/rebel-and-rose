const SPEED_VALUES = {
  [1]: 0.125,
  [2]: 0.25,
  [3]: 0.375,
  [4]: 0.5,
  [5]: 0.625,
  [6]: 0.75,
  [7]: 0.875,
  [8]: 1,
}

export const accelerate = (speed: keyof typeof SPEED_VALUES, base = 0) => SPEED_VALUES[speed] + base
export const decelerate = (speed: keyof typeof SPEED_VALUES, base = 0) =>
  -(SPEED_VALUES[speed] + base)
