import { css } from '@emotion/react'
import GiftCardAdvertisement from './GiftCardAdvertisement'
import Footer from './Footer'

interface Props {
  height?: number
}

const styles = {
  component: css({
    display: 'grid',
    gridTemplateRows: 'auto min-content',
    width: '100vw',
  }),
}

export default function FooterContainer({ height }: Props) {
  return (
    <div css={styles.component} style={{ height }}>
      <GiftCardAdvertisement />
      <Footer />
    </div>
  )
}
