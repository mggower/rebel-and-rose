/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { css } from '@emotion/react'
import theme from '@/styles/theme'

interface Props {
  prop: unknown
}

const styles = {
  component: css({}),
}

export default function SalonSpash(props: Props) {
  return <div css={styles.component}></div>
}
