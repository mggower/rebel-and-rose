import { animated, config, easings, useSpring } from '@react-spring/web'
import { useLocation, useNavigate } from 'react-router-dom'
import { useBoxSizing } from '@/hooks/useBoxSizing'
import { BOOKER_URL } from '@/utils/constants'
import { useState } from 'react'
import { bars } from '@/utils/icons'
import { css } from '@emotion/react'
import Button from '@/components/Shared/Button'
import Icon from '@/components/Shared/Icon'
import buttons from '@/styles/buttons'
import library from '@/styles/library'
import theme from '@/styles/theme'
import routes from '@/utils/routes'

const MENU_WIDTH = 124

const styles = {
  component: css({
    right: 0,
    position: 'fixed',
    top: theme.spacing[4],
  }),
  container: css({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  }),
  tab: css(
    {
      width: theme.spacing[8],
      height: theme.spacing[8],
      padding: theme.spacing[0],
      marginTop: theme.spacing[3],
      borderRightWidth: theme.spacing[0],
      [theme.screen.md]: {
        width: theme.spacing[12],
        height: theme.spacing[12],
      },
    },
    library.rounded.right.none,
  ),
  content: css(
    {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: theme.spacing[1],
      borderRadius: theme.rounded.sm,
      backgroundColor: theme.palette.earth[300],
      border: `1px solid ${theme.palette.earth[600]}`,
      borderRightColor: 'transparent',
      padding: theme.spacing[1],
    },
    library.rounded.right.none,
    library.shadow,
  ),
  link: css(buttons.button, {
    marginLeft: '1px',
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

/**
 * TODO -> use floating ui to manage focus state and list navigation
 * TODO -> merge styles with social media component
 */
export default function Navigation() {
  const navigate = useNavigate()
  const pathname = useLocation().pathname
  const [closed, setClosed] = useState(true)

  const [ref, { width = MENU_WIDTH }] = useBoxSizing<HTMLDivElement>({ handleHeight: false })

  const { x, opacity } = useSpring({
    from: { opacity: 0, x: width },
    to: { opacity: closed ? 0 : 1, x: closed ? width : 0 },
    config: { ...config.stiff, easing: easings.easeOutCubic, duration: 300 },
  })

  const onToggle = () => setClosed((prev) => !prev)
  const onNavigate = (route: string) => () => {
    navigate(route)
    setClosed(true)
  }

  return (
    <div css={styles.component}>
      <animated.div css={styles.container} style={{ x }}>
        <Button css={styles.tab} onClick={onToggle} buttonTheme='secondary'>
          <Icon icon={bars} />
        </Button>

        <div ref={ref} css={styles.content}>
          {routes.list.map(({ route, label }) => (
            <animated.button
              key={label}
              css={styles.link}
              style={{ opacity }}
              onClick={onNavigate(route)}
              data-font-tracking='widest'
              data-button-theme='tertiary'
              data-selected={routes.match(route, pathname)}>
              {label}
            </animated.button>
          ))}

          <animated.a
            key='booker'
            target='_blank'
            rel='noreferrer'
            style={{ opacity }}
            href={BOOKER_URL}
            data-button-theme='primary'
            data-font-tracking='widest'
            css={[styles.link, styles.booker]}>
            Book Now
          </animated.a>
        </div>
      </animated.div>
    </div>
  )
}
