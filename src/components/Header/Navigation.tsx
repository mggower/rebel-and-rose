import { animated, config, easings, useSpring } from '@react-spring/web'
import { useLocation, useNavigate } from 'react-router-dom'
import { useBoxSizing } from '@/hooks/useBoxSizing'
import { BOOKER_URL } from '@/utils/constants'
import { useState } from 'react'
import { bars } from '@/utils/icons'
import { css } from '@emotion/react'
import Button from '@/components/Shared/Button'
import Icon from '@/components/Shared/Icon'
import theme from '@/styles/theme'
import routes from '@/utils/routes'
import styles from './styles'

const MENU_WIDTH = 124

const classes = {
  link: css(styles.link, {
    width: theme.spacing[24],
    textTransform: 'uppercase',
    justifyContent: 'flex-start',
    padding: `${theme.spacing[1]} ${theme.spacing[2]}`,
    [theme.screen.md]: {
      width: theme.spacing[32],
    },
  }),
  booker: css({
    marginTop: theme.spacing[3],
  }),
}

export default function Navigation() {
  const navigate = useNavigate()
  const pathname = useLocation().pathname
  const [isOpen, setOpen] = useState(false)

  const [ref, { width = MENU_WIDTH }] = useBoxSizing<HTMLDivElement>({ handleHeight: false })

  const { x, opacity } = useSpring({
    from: { opacity: 0, x: width },
    to: isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: width },
    config: { ...config.stiff, easing: easings.easeOutCubic, duration: 300 },
  })

  return (
    <nav>
      <div data-right css={styles.wrapper}>
        <animated.div data-right css={styles.container} style={{ x }}>
          <Button
            data-right
            css={styles.tab}
            buttonTheme='secondary'
            onClick={() => setOpen((prev) => !prev)}>
            <Icon icon={bars} />
          </Button>

          <div data-right ref={ref} css={styles.content}>
            {routes.list.map(({ route, label }) => (
              <animated.button
                key={label}
                css={classes.link}
                style={{ opacity }}
                tabIndex={isOpen ? 0 : -1}
                data-font-tracking='widest'
                data-button-theme='tertiary'
                data-selected={routes.match(route, pathname)}
                onClick={() => {
                  navigate(route)
                  setOpen(false)
                }}>
                {label}
              </animated.button>
            ))}

            <animated.a
              key='booker'
              target='_blank'
              rel='noreferrer'
              style={{ opacity }}
              href={BOOKER_URL}
              tabIndex={isOpen ? 0 : -1}
              data-button-theme='primary'
              data-font-tracking='widest'
              css={[classes.link, classes.booker]}
              onClick={() => setOpen(false)}>
              Book Now
            </animated.a>
          </div>
        </animated.div>
      </div>
    </nav>
  )
}
