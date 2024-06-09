import { Primitive } from '@/types/utility-types'

const isNumber = (value: unknown): value is number => typeof value === 'number'
const isString = (value: unknown): value is string => typeof value === 'string'
const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean'

const stringify = (value: Primitive): string => (isString(value) ? value : String(value))

const boundNumber = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max)

const appUtils = {
  isNumber,
  isString,
  isBoolean,
  stringify,
  boundNumber,
}

export default appUtils
