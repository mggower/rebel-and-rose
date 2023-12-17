import { css } from '@emotion/react'
import library from '@/styles/library'
import theme from '@/styles/theme'
import texture from '@/assets/textures/boho-folk-E.jpg'

interface Props {
  top: number
}

const styles = {
  container: css({
    zIndex: 20,
    width: '100%',
    display: 'flex',
    position: 'fixed',
    justifyContent: 'center',
    backgroundColor: theme.palette.transparent,
  }),
  banner: css({
    height: '1.5rem',
    borderRadius: theme.rounded.sm,
    backgroundImage: `url(${texture})`,
    backgroundSize: 'auto 300px',
    backgroundRepeat: 'repeat',
    [theme.screen.md]: {
      height: '2rem',
    },
  }),
}

export default function Banner({ top }: Props) {
  return (
    <div css={styles.container} style={{ top }}>
      <div css={[library.shadow, library.contain, styles.banner]} />
    </div>
  )
}
