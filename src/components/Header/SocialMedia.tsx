import { animated, config, easings, useSpring } from '@react-spring/web'
import { FACEBOOK_URL, INSTAGRAM_URL } from '@/utils/constants'
import { useBoxSizing } from '@/hooks/useBoxSizing'
import { useState } from 'react'
import { css } from '@emotion/react'
import Button from '../Shared/Button'
import Icon from '@/components/Shared/Icon'
import theme from '@/styles/theme'
import styles from './styles'
import * as icons from '@/utils/icons'

const MENU_WIDTH = 72
const SOCIALS = ['facebook', 'instagram'] as const
const urls = { facebook: FACEBOOK_URL, instagram: INSTAGRAM_URL }

const classes = {
  link: css(styles.link, {
    width: theme.spacing[8],
    height: theme.spacing[8],
    padding: theme.spacing[0],
    fontSize: theme.typography.fontSize[100],
    [theme.screen.md]: {
      width: theme.spacing[10],
      height: theme.spacing[10],
      fontSize: theme.typography.fontSize[300],
    },
  }),
}

export default function SocialMedia() {
  const [isOpen, setOpen] = useState(false)

  const [ref, { width = MENU_WIDTH }] = useBoxSizing<HTMLDivElement>({ handleHeight: false })

  const { x, opacity } = useSpring({
    from: { opacity: 0, x: -width },
    to: isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -width },
    config: { ...config.stiff, easing: easings.easeOutCubic, duration: 300 },
  })

  return (
    <div data-left css={styles.wrapper}>
      <animated.div data-left css={styles.container} style={{ x }}>
        <Button
          data-left
          fontSize='lg'
          css={styles.tab}
          buttonTheme='secondary'
          onClick={() => setOpen((prev) => !prev)}>
          <Icon icon={icons.plus} />
        </Button>

        <div data-left ref={ref} css={styles.content}>
          {SOCIALS.map((social) => (
            <animated.a
              key={social}
              target='_blank'
              rel='noreferrer'
              style={{ opacity }}
              href={urls[social]}
              css={classes.link}
              tabIndex={isOpen ? 0 : -1}
              data-button-theme='tertiary'>
              <Icon icon={icons[social]} />
            </animated.a>
          ))}
        </div>
      </animated.div>
    </div>
  )
}
