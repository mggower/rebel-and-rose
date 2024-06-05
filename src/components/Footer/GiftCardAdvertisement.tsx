// import { TypographyProps } from '@/styles/typography'
// import { useScreen } from '@/hooks'
// import Scrapbook from '@/components/Shared/Scrapbook'
// import Paragraph from '@/components/Shared/Paragraph'
// import GiftCard from './GiftCard'
// import Link from '../Shared/Link'
// import routes from '@/utils/routes'
import { css } from '@emotion/react'
import library from '@/styles/library'
import classes from '../Main/Home/Content/styles'
import theme from '@/styles/theme'
import scrapbookText from '@/assets/textures/transparent-text-1.png'

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
      backgroundImage: `url(${scrapbookText})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'repeat-y',
      opacity: 0.08,
    }),
  },
  container: css(library.flex.column, library.flex.center, {
    position: 'relative',
    padding: theme.spacing(4),
    [theme.screen.md]: {
      padding: theme.style.box(8, 4),
    },
  }),
  component: css(library.contain, {
    zIndex: theme.zIndex.layer,
    display: 'grid',
    gap: theme.spacing(6),
    [theme.screen.md]: {
      gap: theme.spacing(16),
      gridTemplateColumns: '1fr 1fr',
    },
  }),
  details: {
    container: css(library.flex.column, {
      gap: theme.spacing(6),
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    }),
    paragraph: css({
      color: theme.palette.wheat[100],
    }),
  },
}

export default function GiftCardAdvertisement() {
  // const [desktop, style] = useScreen<[desktop: boolean, style: TypographyProps]>(
  //   (desktop) => [
  //     desktop,
  //     {
  //       family: 'serif',
  //       fontSize: desktop ? 'lg' : 'sm',
  //       tracking: desktop ? 'wider' : 'normal',
  //     },
  //   ],
  //   [],
  // )

  return (
    <div css={styles.container}>
      <div css={[styles.background.base, styles.background.color]}></div>
      <div css={[styles.background.base, styles.background.texture]}></div>

      <div css={classes.layer}>
        {/* <div css={styles.component}>
          <GiftCard />

          <div css={styles.details.container}>
            {desktop && <Scrapbook variant='one'>Perfect Gift</Scrapbook>}

            <div css={[library.flex.column, library.flex.start]}>
              <Paragraph {...style} css={styles.details.paragraph}>
                Give them the gift you know they will love.
              </Paragraph>
              <Paragraph {...style} css={styles.details.paragraph}>
                Purchase your Rebel & Rose Gift Card today!
              </Paragraph>
            </div>
            <Link
              external
              uppercase
              family='serif'
              variant='button'
              tracking='wider'
              buttonTheme='secondary'
              buttonSize='narrow'
              to={routes.giftCard}>
              Buy Now
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  )
}
