import { Heading, Paragraph, Typography } from '@rebel/components'
import styles from './styles'

export default function Hero() {
  return (
    <section css={styles.hero}>
      <div css={styles.heroInner}>
        <div css={styles.heroContent}>
          <Typography fontSize='xs' css={styles.heroBadge}>
            Rebel &amp; Rose Talent
          </Typography>

          <Heading element='h1' fontSize='xxl' family='dark' tracking='wide'>
            Artists devoted to thoughtful beauty
          </Heading>

          <Paragraph prose family='serif' tracking='wide' css={styles.heroCopy}>
            Our collective blends artistry, technique, and heart. They listen, collaborate, and craft
            experiences that help every guest feel seen. Get to know the faces behind Rebel &amp; Rose.
          </Paragraph>
        </div>
      </div>
    </section>
  )
}

