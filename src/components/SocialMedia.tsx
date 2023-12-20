import { animated, config, easings, useSpring } from '@react-spring/web'
import { FACEBOOK_URL, INSTAGRAM_URL } from '@/utils/constants'
import { FloatingPortal } from '@floating-ui/react'
import { useBoxSizing } from '@/hooks/useBoxSizing'
import { useState } from 'react'
import { css } from '@emotion/react'
import Button from './Shared/Button'
import Icon from '@/components/Shared/Icon'
import library from '@/styles/library'
import buttons from '@/styles/buttons'
import theme from '@/styles/theme'
import * as icons from '@/utils/icons'

const MENU_WIDTH = 72
const SOCIALS = ['facebook', 'instagram' /**, 'tiktok'  */] as const
const urls = { facebook: FACEBOOK_URL, instagram: INSTAGRAM_URL }

const styles = {
  component: css({
    left: 0,
    position: 'fixed',
    top: theme.spacing[4],
  }),
  container: css({
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flexDirection: 'row-reverse',
  }),
  tab: css(
    {
      width: theme.spacing[12],
      height: theme.spacing[12],
      padding: theme.spacing[0],
      marginTop: theme.spacing[3],
      borderLeftWidth: theme.spacing[0],
    },
    library.roundedLeftNone,
  ),
  content: css(
    {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      gap: theme.spacing[1],
      borderRadius: theme.rounded.sm,
      backgroundColor: theme.palette.wheat[200],
      border: `1px solid ${theme.palette.earth[600]}`,
      padding: theme.spacing[3],
      borderLeftColor: 'transparent',
    },
    library.roundedLeftNone,
    library.shadow,
  ),
  links: css({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: theme.spacing[2],
    gap: theme.spacing[2],
  }),
  social: css(buttons.button, {
    marginRight: '1px',
    width: theme.spacing[10],
    height: theme.spacing[10],
    padding: theme.spacing[0],
  }),
}

export default function SocialMedia() {
  const [closed, setClosed] = useState(true)

  const [ref, { width = MENU_WIDTH }] = useBoxSizing<HTMLDivElement>({ handleHeight: false })

  const { x, opacity } = useSpring({
    from: { opacity: 0, x: -width },
    to: { opacity: closed ? 0 : 1, x: closed ? -width : 0 },
    config: { ...config.stiff, easing: easings.easeOutCubic, duration: 300 },
  })

  const onToggle = () => setClosed((prev) => !prev)

  return (
    <FloatingPortal id='portal'>
      <div css={styles.component}>
        <animated.div css={styles.container} style={{ x }}>
          <Button css={styles.tab} onPointerDown={onToggle} buttonTheme='secondary'>
            <Icon icon={icons.plus} />
          </Button>

          <div ref={ref} css={styles.content}>
            {SOCIALS.map((social) => (
              <animated.a
                key={social}
                target='_blank'
                rel='noreferrer'
                style={{ opacity }}
                href={urls[social]}
                css={styles.social}
                data-button-theme='tertiary'>
                <Icon icon={icons[social]} />
              </animated.a>
            ))}
          </div>
        </animated.div>
      </div>
    </FloatingPortal>
  )
}
