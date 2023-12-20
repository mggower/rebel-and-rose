import { FloatingPortal } from '@floating-ui/react'
import { cssVars, pixel } from '@/utils'
import { useMaxScreen } from '@/hooks'
import { BOOKER_URL } from '@/utils/constants'
import { book } from '@/utils/icons'
import { css } from '@emotion/react'
import Icon from './Shared/Icon'
import Link from './Shared/Link'
import theme from '@/styles/theme'

interface Props {
  top: number
}

const styles = {
  component: css({
    left: 0,
    position: 'fixed',
    top: 'calc(var(--top, 200px) + 2rem)',
    [theme.screen.md]: {
      top: 'var(--top, 200px)',
    },
  }),
  link: css({
    writingMode: 'vertical-rl',
    textOrientation: 'upright',
    textTransform: 'uppercase',
    width: theme.spacing[8],
    height: theme.spacing[8],
    padding: theme.spacing[0],
    borderTopLeftRadius: theme.rounded.none,
    borderBottomLeftRadius: theme.rounded.none,
    [theme.screen.md]: {
      padding: `${theme.spacing[4]} 0`,
      width: theme.spacing[12],
      height: 'unset',
    },
  }),
}

export default function BookNow({ top }: Props) {
  const mobile = useMaxScreen('md')

  return (
    <FloatingPortal id='portal'>
      <div css={styles.component} style={cssVars({ top: pixel(top) })}>
        <Link external variant='button' to={BOOKER_URL} css={styles.link}>
          {mobile ? <Icon icon={book} /> : <>Book Now</>}
        </Link>
      </div>
    </FloatingPortal>
  )
}
