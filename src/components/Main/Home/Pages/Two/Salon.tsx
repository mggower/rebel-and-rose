import Heading from '@/components/Shared/Heading'
import Link from '@/components/Shared/Link'
import Paragraph from '@/components/Shared/Paragraph'
import library from '@/styles/library'
import theme from '@/styles/theme'
import { BOOKER_URL } from '@/utils/constants'
import routes from '@/utils/routes'
import { css } from '@emotion/react'
import { forwardRef } from 'react'

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
    [theme.screen.md]: {
      fontSize: theme.typography.fontSize[300],
    },
  }),
  links: css({
    display: 'flex',
    alignItems: 'center',
    marginLeft: `-${theme.spacing[2]}`,
  }),
}

const Salon = forwardRef<HTMLDivElement>(function Salon(_, ref) {
  return (
    <div css={styles.wrapper}>
      <div ref={ref} css={styles.component}>
        <Heading>the SALON</Heading>

        <Paragraph prose family='serif' tracking='wider' css={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse perspiciatis fuga commodi
          cupiditate praesentium maiores. Pariatur, est numquam reprehenderit commodi quas, ipsam
          voluptates velit, doloremque explicabo ut quos saepe officiis.lorem. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Autem quod iusto iure suscipit. Hic mollitia illum
          delectus harum nihil consequuntur eos sed, fugiat laboriosam adipisci suscipit!
          Consequatur delectus dolor ex?
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
  )
})

export default Salon
