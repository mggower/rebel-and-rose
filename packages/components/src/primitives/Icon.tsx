import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { forwardRef } from 'react'

export type IconProps = FontAwesomeIconProps

export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(props, ref) {
  return <FontAwesomeIcon ref={ref} {...props} />
})

export default Icon
