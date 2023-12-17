import { FontAwesomeIcon, FontAwesomeIconProps as Props } from '@fortawesome/react-fontawesome'
import { forwardRef } from 'react'
import { css } from '@emotion/react'
import theme from '@/styles/theme'

const styles = {
  icon: css({
    color: theme.palette.ink.main,
  }),
}

const Icon = forwardRef<SVGSVGElement, Props>(function Icon(props, ref) {
  return <FontAwesomeIcon ref={ref} {...props} css={styles.icon} />
})

export default Icon
