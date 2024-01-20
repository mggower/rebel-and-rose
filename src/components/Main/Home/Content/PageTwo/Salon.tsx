import { ParallaxLayer } from '@react-spring/parallax'
import { BOOKER_URL } from '@/utils/constants'
import { accelerate } from '@/utils/parallax'
import { css } from '@emotion/react'
import Paragraph from '@/components/Shared/Paragraph'
import Scrapbook from '@/components/Shared/Scrapbook'
import Link from '@/components/Shared/Link'
import library from '@/styles/library'
import routes from '@/utils/routes'
import theme from '@/styles/theme'
import classes from '../styles'

const styles = {
  wrapper: css(library.contain, {
    [theme.screen.md]: {
      paddingRight: '32vw',
    },
  }),
  component: css(library.flex.column, {
    alignItems: 'flex-start',
    boxSizing: 'border-box',
    padding: theme.box(8, 4),
    gap: theme.spacing[8],
    [theme.screen.md]: {
      padding: theme.box(12, 8),
    },
  }),
  paragraph: css({
    color: theme.palette.wheat[100],
    fontSize: theme.typography.fontSize[200],
  }),
  links: css({
    display: 'flex',
    alignItems: 'center',
    marginLeft: `-${theme.spacing[2]}`,
  }),
}

export default function Salon() {
  return (
    <ParallaxLayer offset={2.1} factor={0.8} speed={accelerate(1)}>
      <div css={classes.layer}>
        <div css={styles.wrapper}>
          <div css={styles.component}>
            <Scrapbook variant='two'>Salon</Scrapbook>

            <Paragraph prose family='serif' tracking='wider' css={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse perspiciatis fuga
              commodi cupiditate praesentium maiores. Pariatur, est numquam reprehenderit commodi
              quas, ipsam voluptates velit, doloremque explicabo ut quos saepe officiis.lorem. Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Autem quod iusto iure suscipit.
              Hic mollitia illum delectus harum nihil consequuntur eos sed, fugiat laboriosam
              adipisci suscipit! Consequatur delectus dolor ex?
            </Paragraph>

            <div css={styles.links}>
              <Link
                uppercase
                underline
                linkTheme='dark'
                linkColor='tertiary'
                family='serif'
                to={routes.salon}>
                Our Talent
              </Link>
              <Link
                external
                uppercase
                underline
                linkTheme='dark'
                linkColor='secondary'
                family='serif'
                to={BOOKER_URL}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ParallaxLayer>
  )
}
