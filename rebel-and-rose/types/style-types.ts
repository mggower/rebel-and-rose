import { PropertiesFallback } from 'csstype'
import * as Utility from '@/types/utility-types'

export type CssSizeType = 'px' | 'rem' | 'em' | 'vh' | 'vw'

export type CssSize<T extends CssSizeType | undefined = CssSizeType | undefined> =
  T extends undefined ? `{number}` | number : `${number}${T}`

export type Pixel = CssSize<'px'>
export type Rem = CssSize<'rem'>
export type Em = CssSize<'em'>
export type Vh = CssSize<'vh'>
export type Vw = CssSize<'vw'>

export type CssVar<
  TName extends string,
  TDefault extends Utility.Primitive | undefined,
> = TDefault extends undefined ? `var(--${TName})` : `var(--${TName}, ${TDefault})`

export type CssUrl<T extends string> = `url(${T})`

export type CssAttribute<
  TScope extends string,
  TValue extends Utility.Primitive,
  TInclude extends boolean,
> = TInclude extends true ? `&[data-{TScope}="${TValue}"]` : `&:not([data-${TScope}="${TValue}"])`

export type CustomCSS<TLength = (string & {}) | 0, TTime = string & {}> = Record<
  string,
  PropertiesFallback<TLength, TTime>
>
