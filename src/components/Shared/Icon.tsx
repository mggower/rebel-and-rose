import { FontAwesomeIcon, FontAwesomeIconProps as Props } from '@fortawesome/react-fontawesome'
import { forwardRef } from 'react'
import { css } from '@emotion/react'
import palette from '@/styles/palette'

const styles = {
  icon: css({
    color: palette.ink.main,
  }),
}

const Icon = forwardRef<SVGSVGElement, Props>(function Icon(props, ref) {
  return <FontAwesomeIcon ref={ref} {...props} css={styles.icon} />
})

export default Icon
