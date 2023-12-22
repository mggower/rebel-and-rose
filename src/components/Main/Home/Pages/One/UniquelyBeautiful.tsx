import { forwardRef } from 'react'
import { css } from '@emotion/react'
import assets from '@/utils/assets'
import library from '@/styles/library'
import theme from '@/styles/theme'

const styles = {
  component: css(library.contain, library.flex.column, library.flex.center, {
    padding: theme.box(4, 0),
    '& > img': {
      width: '90%',
      height: 'auto',
    },
  }),
}

const UniquelyBeautiful = forwardRef<HTMLImageElement>(function UniquelyBeautiful(_, ref) {
  return (
    <div css={styles.component}>
      <img ref={ref} src={assets.logos.uniquelyBeautiful} alt='uniquely beautiful' />
    </div>
  )
})

export default UniquelyBeautiful
