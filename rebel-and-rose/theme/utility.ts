import { DataType, Properties } from 'csstype'
import appUtils from '@/utils/app-utils'
import logger from '@/utils/logger'
import * as Utility from '@/types/utility-types'
import * as Style from '@/types/style-types'

const REM_BASE = 16
const SPACING_BASE = 0.25

const warnInvalidPercentage = (key: 'vh' | 'vw', percentage: number, value: number) => {
  logger.warning(`${key} value ${percentage} is out of bounds. Clamped to ${value}`)
}

const size = {
  pixel(value: number): Style.Pixel {
    return `${value}px`
  },
  rem(value: number): Style.Rem {
    return `${value}rem`
  },
  em(value: number): Style.Em {
    return `${value}em`
  },
  vh(percentage: number): Style.Vh {
    const value = appUtils.boundNumber(percentage, 0, 100)

    if (value !== percentage) {
      warnInvalidPercentage('vh', percentage, value)
    }

    return `${value}vh`
  },
  vw(percentage: number): Style.Vw {
    const value = appUtils.boundNumber(percentage, 0, 100)

    if (value !== percentage) {
      warnInvalidPercentage('vw', percentage, value)
    }

    return `${value}vw`
  },
}

const calc = {
  rem(factor = 1) {
    return REM_BASE * factor
  },
  vh(percentage: number) {
    const value = appUtils.boundNumber(percentage, 0, 100)

    if (value !== percentage) {
      warnInvalidPercentage('vh', percentage, value)
    }

    return window.innerHeight * (value / 100)
  },
  vw(percentage: number) {
    const value = appUtils.boundNumber(percentage, 0, 100)

    if (value !== percentage) {
      warnInvalidPercentage('vw', percentage, value)
    }

    return window.innerWidth * (percentage / 100)
  },
}

const cssVariables = {
  apply(vars: Record<string, number | string>): React.CSSProperties {
    const style: Record<string, string | number> = {}

    for (const name in vars) {
      style[`--${name}`] = vars[name]
    }

    return style satisfies React.CSSProperties
  },
  set<TName extends string, TDefault extends Utility.Primitive | undefined>(
    name: TName,
    defaultValue: TDefault,
  ): Style.CssVar<TName, TDefault> {
    if (defaultValue === undefined) {
      return `var(--${name})` as Style.CssVar<TName, TDefault>
    } else {
      return `var(--${name}, ${defaultValue})` as Style.CssVar<TName, TDefault>
    }
  },
}

const spacingFormula = (index: number) => size.rem(index * SPACING_BASE)

const createBoxSpacing = (...values: number[]) => values.slice(0, 4).map(spacingFormula).join(' ')

const hexColorOpacity = (color: string, opacity: number) => {
  return color.concat(
    Math.round(opacity * 255)
      .toString(16)
      .padStart(2, '0'),
  )
}

const setCssUrl = <TPath extends string>(pathname: TPath): Style.CssUrl<TPath> => `url(${pathname})`

const createBorderStyle = (
  borderStyle: DataType.LineStyle,
  borderWidth: DataType.LineWidth<Style.CssSize<'px' | 'rem' | 'em'>>,
  borderColor: DataType.Color,
  scope?: 'top' | 'right' | 'bottom' | 'left' | 'x' | 'y' | null,
): Properties => {
  switch (scope) {
    case 'top':
      return {
        borderTopStyle: borderStyle,
        borderTopWidth: borderWidth,
        borderTopColor: borderColor,
      }
    case 'right':
      return {
        borderRightStyle: borderStyle,
        borderRightWidth: borderWidth,
        borderRightColor: borderColor,
      }
    case 'bottom':
      return {
        borderBottomStyle: borderStyle,
        borderBottomWidth: borderWidth,
        borderBottomColor: borderColor,
      }
    case 'left':
      return {
        borderLeftStyle: borderStyle,
        borderLeftWidth: borderWidth,
        borderLeftColor: borderColor,
      }
    case 'x':
      return {
        ...createBorderStyle(borderStyle, borderWidth, borderColor, 'left'),
        ...createBorderStyle(borderStyle, borderWidth, borderColor, 'right'),
      }
    case 'y':
      return {
        ...createBorderStyle(borderStyle, borderWidth, borderColor, 'top'),
        ...createBorderStyle(borderStyle, borderWidth, borderColor, 'bottom'),
      }
    default:
      return { borderStyle, borderWidth, borderColor }
  }
}

export const attributeSelector = <
  TScope extends string,
  TType extends Utility.Primitive = Utility.Primitive,
>(
  scope: TScope,
) => {
  const attribute = `data-${scope}`

  return {
    attribute,
    eq: <TValue extends TType>(value: TValue) =>
      `&[${attribute}="${value}"]` as Style.CssAttribute<TScope, TValue, true>,
    not: <TValue extends TType>(value: TValue) =>
      `&:not([${attribute}="${value}"])` as Style.CssAttribute<TScope, TValue, false>,
  }
}

const utility = {
  size,
  calc,
  url: setCssUrl,
  var: cssVariables,
  box: createBoxSpacing,
  alpha: hexColorOpacity,
  border: createBorderStyle,
  attr: attributeSelector,
}

export default utility
