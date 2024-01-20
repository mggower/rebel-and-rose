import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { accelerate } from '@/utils/parallax'
import { useBoxSizing } from '@/hooks/useBoxSizing'
import { css } from '@emotion/react'
import Footer from '@/components/Footer/Footer'
import PageOne from './Content/PageOne'
import PageTwo from './Content/PageTwo'
import Florals from './Content/Florals'
import library from '@/styles/library'
import theme from '@/styles/theme'
import { useMinScreen } from '@/hooks'

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
  layer: css(library.flex.column, library.flex.itemsCenter),
  salon: css({
    backgroundColor: `${theme.palette.earth[800]}8F`,
  }),
}

export default function Home() {
  const desktop = useMinScreen('md')
  const [ref, { height = window.innerHeight - 200 }] = useBoxSizing({ handleWidth: false })

  return (
    <div ref={ref} css={styles.component}>
      <Parallax pages={4} css={styles.parallax}>
        <PageOne space={height} />
        <PageTwo space={height} />

        <ParallaxLayer offset={desktop ? 1.2 : 1.5} speed={accelerate(1)}>
          <Florals />
        </ParallaxLayer>

        <ParallaxLayer offset={2.9} factor={0.6}></ParallaxLayer>
        <ParallaxLayer offset={3.5} factor={0.5}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
