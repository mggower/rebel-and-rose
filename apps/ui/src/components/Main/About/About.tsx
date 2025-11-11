import { css } from '@emotion/react'
import Heading from '@/components/Shared/Heading'
import Paragraph from '@/components/Shared/Paragraph'
import library from '@/styles/library'
import theme from '@/styles/theme'
import womanPortrait from '@/assets/images/image-5.jpg'
import Footer from '@/components/Footer'

const styles = {
  component: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: theme.style.box(4, 0),
    [theme.screen.md]: {
      margin: theme.style.box(8, 4),
    },
  }),
  container: css(library.contain, {
    display: 'grid',
    gridTemplateColumns: 'auto',
    gap: theme.spacing(4),
  }),
  about: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.style.box(4, 0),
    gap: theme.spacing(4),
  }),
  imageContainer: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  image: css({
    width: '500px',
    height: 'auto',
    borderRadius: theme.rounded.sm,
  }),
}

export default function About() {
  return (
    <>
      <div css={styles.component}>
        <div css={styles.container}>
          <div css={styles.about}>
            <Heading element='h2' family='dark' tracking='wide'>
              About us
            </Heading>

            <Paragraph italic fontSize='xl' weight='semibold'>
              Drawing a parallel to history
            </Paragraph>

            <Paragraph prose family='serif' tracking='wide'>
              Concord, Massachusetts is rooted in the heroic and the prolific. From the noble
              battles fought here, to it’s expressive literary culture, Concord was home to many
              brave, passionate and creative souls who have earned their place in American history.
            </Paragraph>

            <Paragraph prose family='serif' tracking='wide'>
              It is in their honor that we chose the name Rebel & Rose. “Rebel” celebrating those
              who went to battle to defend our new nation and the “Rose” to represent the creative
              and expressive writers who inspired so many to blossom.
            </Paragraph>
          </div>
          <div css={styles.imageContainer}>
            <img src={womanPortrait} css={styles.image} alt='woman portrait' />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
