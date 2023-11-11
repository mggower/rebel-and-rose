import { FontAwesomeIcon, FontAwesomeIconProps as Props } from '@fortawesome/react-fontawesome'
import { forwardRef } from 'react'

const Icon = forwardRef<SVGSVGElement, Props>(function Icon(props, ref) {
  return <FontAwesomeIcon ref={ref} {...props} className={`text-ink ${props.className ?? ''}`} />
})

export default Icon
