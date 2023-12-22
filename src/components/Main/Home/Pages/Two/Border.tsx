import { css } from '@emotion/react'
import assets from '@/utils/assets'
import theme from '@/styles/theme'

const styles = {
  wrapper: css({
    display: 'flex',
    justifyContent: 'flex-end',
  }),
  component: css({
    width: '40vw',
    display: 'grid',
    height: theme.spacing[4],
    gridTemplateColumns: '1fr 2fr 3fr',
  }),
  one: css({
    backgroundImage: `url(${assets.boho.F})`,
    backgroundSize: 'cover',
  }),
  two: css({
    backgroundImage: `url(${assets.boho.B})`,
    backgroundSize: 'cover',
  }),
  three: css({
    backgroundImage: `url(${assets.boho.D})`,
    backgroundSize: 'cover',
  }),
}
export default function Border() {
  return (
    <div css={styles.wrapper}>
      <div css={styles.component}>
        <div css={styles.one}></div>
        <div css={styles.two}></div>
        <div css={styles.three}></div>
      </div>
    </div>
  )
}
