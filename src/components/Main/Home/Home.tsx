import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useBoxSizing } from '@/hooks/useBoxSizing'
import { useMinScreen } from '@/hooks'
import { accelerate } from '@/utils/parallax'
import { css } from '@emotion/react'
import Footer from '@/components/Footer/Footer'
import PinkBoquet from './Content/PinkBoquet'
import RedBoquet from './Content/RedBoquet'
import PageOne from './Content/Page1'
import PageTwo from './Content/Page2'
import PageThree from './Content/Page3'
import PageFour from './Content/Page4'
import library from '@/styles/library'
import theme from '@/styles/theme'

const styles = {
  component: css(library.flex.column, library.flex.itemsCenter, {
    height: '100%',
    width: '100vw',
    '&::before': {
      content: '" "',
      position: 'absolute',
      background: `linear-gradient(${theme.palette.wheat[100]} 5%, transparent)`,
      height: theme.spacing[4],
      zIndex: theme.zIndex.layer,
      width: '100vw',
      left: 0,
      top: 0,
    },
  }),
  parallax: css({
    padding: theme.box(2, 0),
    [theme.screen.md]: {
      padding: theme.box(4, 0),
    },
  }),
  footer: css({
    // TODO: fit layer to footer height
    backgroundColor: theme.palette.ink[800],
  }),
}

export default function Home() {
  const desktop = useMinScreen('md')
  const [ref, { height = window.innerHeight - 200 }] = useBoxSizing({ handleWidth: false })

  return (
    <div ref={ref} css={styles.component}>
      <Parallax pages={5.1} css={styles.parallax}>
        <PageOne.Decorations space={height} />
        <PageTwo.Decorations space={height} />
        <PageThree.Decorations />
        <PageFour.Decorations />

        <ParallaxLayer offset={desktop ? 1.2 : 1.5} speed={accelerate(1)}>
          <PinkBoquet />
        </ParallaxLayer>

        <ParallaxLayer offset={desktop ? 2.25 : 2.8} speed={accelerate(1)}>
          <RedBoquet />
        </ParallaxLayer>

        <ParallaxLayer offset={2.9} factor={0.6}></ParallaxLayer>

        <PageOne.Content />
        <PageTwo.Content />
        <PageThree.Content />
        <PageFour.Content />
        <ParallaxLayer offset={4.6} factor={0.5} css={styles.footer}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
