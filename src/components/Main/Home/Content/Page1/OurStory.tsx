import { ParallaxLayer } from '@react-spring/parallax'
import { accelerate } from '@/utils/parallax'
import { useScreen } from '@/hooks'
import { Tracking } from '@/styles/typography'
import { css } from '@emotion/react'
import Paragraph from '@/components/Shared/Paragraph'
import Heading from '@/components/Shared/Heading'
import Link from '@/components/Shared/Link'
import library from '@/styles/library'
import routes from '@/utils/routes'
import theme from '@/styles/theme'
import classes from '../styles'

const styles = {
  wrapper: css(library.contain, {
    [theme.screen.md]: {
      paddingLeft: '32vw',
    },
  }),
  component: css(library.flex.column, {
    boxSizing: 'border-box',
    alignItems: 'flex-start',
    margin: theme.style.box(8, 4),
    gap: theme.spacing(8),
    [theme.screen.md]: {
      margin: theme.style.box(12, 8),
    },
  }),
  headerContainer: css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.screen.md]: {
      justifyContent: 'flex-start',
    },
  }),
  header: css({
    fontSize: theme.typography.fontSize[300],
    [theme.screen.md]: {
      fontSize: theme.typography.fontSize[400],
    },
  }),
  paragraph: css({
    fontSize: theme.typography.fontSize[200],
    [theme.screen.md]: {
      fontSize: theme.typography.fontSize[300],
    },
  }),
}

export default function OurStory() {
  const { offset, factor, tracking } = useScreen<{
    offset: number
    factor: number
    tracking: Tracking
  }>(
    (desktop) => ({
      offset: desktop ? 1.1 : 0.85,
      factor: desktop ? 0.9 : 1.15,
      tracking: desktop ? 'wider' : 'wide',
    }),
    [],
  )
  return (
    <ParallaxLayer offset={offset} factor={factor} speed={accelerate(2)}>
      <div css={classes.layer}>
        <div css={styles.wrapper}>
          <div css={styles.component}>
            <div css={styles.headerContainer}>
              <Heading element='h2' family='dark' tracking={tracking} css={styles.header}>
                Welcome to&nbsp;
              </Heading>
              <Heading element='h2' family='dark' tracking={tracking} css={styles.header}>
                Rebel & Rose
              </Heading>
            </div>

            <Paragraph prose family='serif' tracking={tracking} css={styles.paragraph}>
              We are a full service hair studio and spa featuring luxury services for all of your
              beauty needs. We strive to create an atmosphere where all are welcome and encouraged
              to celebrate what makes them uniquely beautiful.
            </Paragraph>

            <Link
              uppercase
              underline
              variant='button'
              buttonTheme='secondary'
              buttonSize='narrow'
              family='serif'
              tracking={tracking}
              to={routes.about}>
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </ParallaxLayer>
  )
}
