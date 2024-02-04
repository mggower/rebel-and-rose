import { useMaxScreen } from '@/hooks'
import { BOOKER_URL } from '@/utils/constants'
import { book } from '@/utils/icons'
import { css } from '@emotion/react'
import Icon from '../Shared/Icon'
import Link from '../Shared/Link'
import theme from '@/styles/theme'

const styles = {
  component: css({
    left: 0,
    position: 'fixed',
    top: theme.spacing(14),
    zIndex: theme.zIndex.overlay,
    [theme.screen.md]: {
      top: theme.spacing(28),
    },
  }),
  link: css({
    writingMode: 'vertical-rl',
    textOrientation: 'upright',
    textTransform: 'uppercase',
    width: theme.spacing(8),
    height: theme.spacing(8),
    padding: theme.spacing(0),
    borderTopLeftRadius: theme.rounded.none,
    borderBottomLeftRadius: theme.rounded.none,
    borderLeft: 'none',
    fontSize: theme.typography.fontSize[100],
    [theme.screen.md]: {
      padding: theme.style.box(4, 0),
      fontSize: theme.typography.fontSize[200],
      width: theme.spacing(12),
      height: 'unset',
    },
  }),
}

export default function BookNow() {
  const mobile = useMaxScreen('md')

  return (
    <div css={styles.component}>
      <Link external variant='button' to={BOOKER_URL} css={styles.link}>
        {mobile ? <Icon icon={book} /> : <>Book Now</>}
      </Link>
    </div>
  )
}
