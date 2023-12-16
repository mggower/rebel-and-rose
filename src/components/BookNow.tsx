import { useMaxScreen } from '@/hooks'
import { BOOKER_URL } from '@/utils/constants'
import { pixel } from '@/utils'
import { book } from '@/utils/icons'
import { css } from '@emotion/react'
import Icon from './Shared/Icon'
import library from '@/styles/library'
import theme from '@/styles/theme'

interface Props {
  top: number
}

const styles = {
  link: css({
    left: 0,
    zIndex: 20,
    top: '2.5rem',
    display: 'flex',
    position: 'fixed',
    placeItems: 'center',
    justifyContent: 'center',
    writingMode: 'vertical-rl',
    textOrientation: 'upright',
    borderTopLeftRadius: theme.rounded.none,
    borderBottomLeftRadius: theme.rounded.none,
    padding: '0.75rem 0.25rem 0.75rem 0.5rem',
    [theme.screen.lg]: {
      padding: '1rem',
    },
    [theme.screen.md]: {
      top: '3rem',
    },
  }),
}

export default function BookNow({ top }: Props) {
  const mobile = useMaxScreen('md')

  return (
    <a
      target='_blank'
      rel='noreferrer'
      href={BOOKER_URL}
      css={[library.button, styles.link]}
      style={{ transform: `translateY(${pixel(top)})` }}>
      {mobile ? <Icon icon={book} className='text-wheat-100' /> : <>Book Now</>}
    </a>
  )
}
