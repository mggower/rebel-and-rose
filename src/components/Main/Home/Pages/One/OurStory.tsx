import routes from '@/utils/routes'
import { css } from '@emotion/react'
import library from '@/styles/library'
import theme from '@/styles/theme'
import Heading from '@/components/Shared/Heading'
import Paragraph from '@/components/Shared/Paragraph'
import Link from '@/components/Shared/Link'

const styles = {
  wrapper: css(library.contain, {
    [theme.screen.md]: {
      paddingLeft: '32vw',
    },
  }),
  component: css(library.flex.column, {
    boxSizing: 'border-box',
    alignItems: 'flex-start',
    margin: theme.box(8, 4),
    gap: theme.spacing[8],
    [theme.screen.md]: {
      margin: theme.box(12, 8),
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
  link: css({
    marginLeft: `-${theme.spacing[2]}`,
  }),
}

export default function OurStory() {
  return (
    <div css={styles.wrapper}>
      <div css={styles.component}>
        <Heading element='h2' family='dark' tracking='wider' css={styles.header}>
          Welcome to Rebel & Rose
        </Heading>

        <Paragraph prose family='serif' tracking='wider' css={styles.paragraph}>
          We are a full service hair studio and spa featuring luxury services for all of your beauty
          needs. We strive to create an atmosphere where all are welcome and encouraged to celebrate
          what makes them uniquely beautiful.
        </Paragraph>

        <Link uppercase underline family='serif' to={routes.about} css={styles.link}>
          Our Story
        </Link>
      </div>
    </div>
  )
}
