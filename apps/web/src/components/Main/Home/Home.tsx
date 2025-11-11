import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useBoxSizing } from '@/hooks/useBoxSizing'
import { useMinScreen } from '@/hooks'
import { accelerate } from '@/utils/parallax'
import { css } from '@emotion/react'
import Footer from '@/components/Footer'
import PinkBoquet from './Content/PinkBoquet'
import RedBoquet from './Content/RedBoquet'
import PageOne from './Content/Page1'
import PageTwo from './Content/Page2'
import PageThree from './Content/Page3'
import { library } from '@rebel/components'
import theme from '@rebel/theme'

const styles = {
  component: css(library.flex.column, library.flex.itemsCenter, {
    height: '100%',
    width: '100vw',
    '&::before': {
      content: '" "',
      position: 'absolute',
      background: `linear-gradient(${theme.palette.wheat[100]} 5%, transparent)`,
      height: theme.spacing(4),
      zIndex: theme.zIndex.layer,
      width: '100vw',
      left: 0,
      top: 0,
    },
  }),
  parallax: css({
    padding: theme.style.box(2, 0),
    [theme.screen.md]: {
      padding: theme.style.box(4, 0),
    },
  }),
}

export default function Home() {
  const desktop = useMinScreen('md')

  const [ref, { height = window.innerHeight - 200 }] = useBoxSizing({ handleWidth: false })

  return (
    <div ref={ref} css={styles.component}>
      <Parallax pages={4.8} css={styles.parallax}>
        <PageOne.Decorations space={height} />
        <PageTwo.Decorations space={height} />
        <PageThree.Decorations />

        <ParallaxLayer offset={desktop ? 1.2 : 1.5} speed={accelerate(1)}>
          <PinkBoquet />
        </ParallaxLayer>

        <ParallaxLayer offset={desktop ? 2.25 : 2.8} speed={accelerate(1)}>
          <RedBoquet />
        </ParallaxLayer>

        <ParallaxLayer offset={2.9} factor={0.6}></ParallaxLayer>

        <PageOne.Content desktop={desktop} />
        <PageTwo.Content />
        <PageThree.Content />

        <ParallaxLayer offset={3.8} factor={1}>
          <Footer height={height} />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
