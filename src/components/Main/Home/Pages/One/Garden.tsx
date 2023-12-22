import { css } from '@emotion/react'
import assets from '@/utils/assets'
import library from '@/styles/library'
import theme from '@/styles/theme'

const styles = {
  component: css(library.contain, {
    opacity: 0.1,
    [theme.screen.md]: {
      paddingLeft: '4vw',
      opacity: 1,
    },
  }),
  image: css(library.shadow, {
    width: '40vw',
    height: '48vh',
    overflow: 'hidden',
    borderRadius: theme.rounded.sm,
    backgroundImage: `url(${assets.images.womanInGarden})`,
    backgroundPositionX: '75%',
    backgroundSize: 'cover',
    [theme.screen.md]: {
      width: '28vw',
      height: '48vh',
    },
  }),
}

export default function Garden() {
  return (
    <div css={styles.component}>
      <div css={styles.image}>
        <img src={assets.images.womanInGarden} css={library.invisible} alt='woman in garden' />
      </div>
    </div>
  )
}
