import { GIFT_CARD_URL } from '@/utils/constants'
import { useMinScreen } from '@/hooks'
import { css } from '@emotion/react'
import Scrapbook from '@/components/Shared/Scrapbook'
import Paragraph from '@/components/Shared/Paragraph'
import Link from '../Shared/Link'
import library from '@/styles/library'
import classes from '../Main/Home/Content/styles'
import theme from '@/styles/theme'
import assets from '@/utils/assets'
import GiftCard from './GiftCard'

const styles = {
  background: {
    base: css({
      position: 'absolute',
      width: '100vw',
      height: '100%',
      top: 0,
      left: 0,
    }),
    color: css({
      backgroundColor: theme.palette.russet.main,
    }),
    texture: css({
      backgroundImage: `url(${assets.scrapbook.text[1]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat-y',
      opacity: 0.125,
    }),
  },
  container: css(library.flex.column, library.flex.center, {
    padding: theme.style.box(8, 4),
    position: 'relative',
  }),
  component: css(library.contain, {
    zIndex: theme.zIndex.layer,
    display: 'grid',
    gap: theme.spacing(8),
    [theme.screen.md]: {
      gap: theme.spacing(16),
      gridTemplateColumns: '1fr 1fr',
    },
  }),
  details: {
    container: css(library.flex.column, library.flex.start, {
      gap: theme.spacing(6),
    }),
    paragraph: css({
      color: theme.palette.wheat[100],
    }),
  },
}

export default function GiftCardBanner() {
  const desktop = useMinScreen()

  return (
    <div css={styles.container}>
      <div css={[styles.background.base, styles.background.color]}></div>
      <div css={[styles.background.base, styles.background.texture]}></div>

      <div css={classes.layer}>
        <div css={styles.component}>
          <GiftCard />

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
            <Link
              external
              uppercase
              variant='button'
              buttonTheme='secondary'
              family='serif'
              to={GIFT_CARD_URL}>
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
