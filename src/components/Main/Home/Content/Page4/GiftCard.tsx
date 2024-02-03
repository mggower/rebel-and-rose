import { ParallaxLayer } from '@react-spring/parallax'
import { accelerate } from '@/utils/parallax'
import { css } from '@emotion/react'
import library from '@/styles/library'
import classes from '../styles'
import theme from '@/styles/theme'
import assets from '@/utils/assets'
import Heading from '@/components/Shared/Heading'
import Scrapbook from '@/components/Shared/Scrapbook'
import Paragraph from '@/components/Shared/Paragraph'
import Button from '@/components/Shared/Button'
import { useMinScreen } from '@/hooks'

const styles = {
  component: css(library.contain, {
    display: 'grid',
    gap: theme.spacing[8],
    [theme.screen.md]: {
      gap: theme.spacing[16],
      gridTemplateColumns: '1fr 1fr',
    },
  }),
  card: {
    wrapper: css({
      display: 'flex',
      justifyContent: 'flex-end',
    }),
    container: css({
      maxWidth: '400px',
      display: 'flex',
      justifyContent: 'flex-end',
      borderRadius: theme.rounded.lg,
      backgroundColor: theme.palette.ink[800],
      boxShadow: theme.shadow.lg,
      padding: theme.spacing[2],
      position: 'relative',
      overflow: 'hidden',
      flexGrow: 1,
    }),
    florals: css({
      left: '-84px',
      top: '-30%',
      width: '240px',
      height: 'auto',
      position: 'absolute',
      transform: 'rotate(27deg)',
      [theme.screen.md]: {
        left: '-96px',
        top: '-28%',
        width: '300px',
      },
    }),
    logo: css({
      width: '200px',
      height: 'auto',
    }),
    header: css({
      color: theme.palette.wheat[100],
      '-webkit-text-fill-color': theme.palette.ink[800],
      '-webkit-text-stroke-width': '1px',
      '-webkit-text-stroke-color': theme.palette.wheat[200],
    }),
  },
  details: {
    container: css(library.flex.column, library.flex.start, {
      gap: theme.spacing[6],
    }),
    paragraph: css({
      color: theme.palette.wheat[100],
    }),
  },
}

export default function GiftCard() {
  const desktop = useMinScreen()

  return (
    <ParallaxLayer offset={4} factor={0.6} speed={accelerate(1)}>
      <div css={classes.layer}>
        <div css={styles.component}>
          <div css={styles.card.wrapper}>
            <div css={styles.card.container}>
              <img
                src={assets.florals.boquet[3]}
                css={styles.card.florals}
                alt='floral boquet'></img>
              <div css={[library.flex.column, library.flex.center]}>
                <img
                  src={assets.logos.rebelAndRoseGold}
                  alt='rebels and roses gold logo'
                  css={styles.card.logo}
                />
                <Heading
                  uppercase
                  fontSize='sm'
                  family='dark'
                  tracking='extreme'
                  css={styles.card.header}>
                  Gift Card
                </Heading>
              </div>
            </div>
          </div>
          <div css={styles.details.container}>
            {desktop && <Scrapbook variant='one'>Perfect Gift</Scrapbook>}

            <div css={[library.flex.column, library.flex.start]}>
              <Paragraph
                family='serif'
                fontSize={desktop ? 'lg' : 'sm'}
                tracking={desktop ? 'wider' : 'normal'}
                css={styles.details.paragraph}>
                Give them the gift you know they will love.
              </Paragraph>
              <Paragraph
                family='serif'
                fontSize={desktop ? 'lg' : 'sm'}
                tracking={desktop ? 'wider' : 'normal'}
                css={styles.details.paragraph}>
                Purchase your Rebel & Rose Gift Card today!
              </Paragraph>
            </div>

            <Button uppercase buttonTheme='secondary' family='serif'>
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </ParallaxLayer>
  )
}
