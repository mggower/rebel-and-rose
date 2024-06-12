import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useContentHeight } from '@/components/ContentHeight'
import { useMinScreen } from '@/hooks'
import { useRef } from 'react'
import { css } from '@emotion/react'
import Footer from '@/components/Footer'
import PinkBoquet from './Content/PinkBoquet'
import RedBoquet from './Content/RedBoquet'
import PageOne from './Content/Page1'
import PageTwo from './Content/Page2'
import PageThree from './Content/Page3'
import theme from '@/styles/theme'

const styles = {
  parallax: css({
    padding: theme.style.box(2, 0),
    [theme.screen.md]: {
      padding: theme.style.box(4, 0),
    },
  }),
}

export default function Home() {
  const parallax = useRef<IParallax>(null)
  const height = useContentHeight()
  const desktop = useMinScreen('md')

  return (
    <Parallax ref={parallax} pages={4.8} css={styles.parallax}>
      <main>
        <PageOne.Decorations space={height} />
        <PageTwo.Decorations space={height} />
        <PageThree.Decorations />

        <ParallaxLayer offset={desktop ? 1.2 : 1.5} speed={theme.velocity.accelerate(1)}>
          <PinkBoquet />
        </ParallaxLayer>

        <ParallaxLayer offset={desktop ? 2.25 : 2.8} speed={theme.velocity.accelerate(1)}>
          <RedBoquet />
        </ParallaxLayer>

        <ParallaxLayer offset={2.9} factor={0.6}></ParallaxLayer>

        <PageOne.Content />
        <PageTwo.Content />
        <PageThree.Content />
      </main>
      <ParallaxLayer offset={3.8} factor={1}>
        <Footer height={height} />
      </ParallaxLayer>
    </Parallax>
  )
}
