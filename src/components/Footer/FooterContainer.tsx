import { css } from '@emotion/react'
import GiftCardBanner from './GiftCardBanner'
import Footer from './Footer'

interface Props {
  height: number
}

const styles = {
  component: css({
    display: 'grid',
    gridTemplateRows: 'auto min-content',
  }),
}

export default function FooterContainer({ height }: Props) {
  return (
    <div css={styles.component} style={{ height }}>
      <GiftCardBanner />
      <Footer />
    </div>
  )
}
