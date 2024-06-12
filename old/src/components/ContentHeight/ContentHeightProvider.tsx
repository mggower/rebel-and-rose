import { ContentHeightContext } from './context'
import { useBoxSizing } from '@/hooks/useBoxSizing'
import { css } from '@emotion/react'
import library from '@/styles/library'

interface Props {
  children: React.ReactNode
}

const styles = {
  component: css(library.flex.column, library.flex.itemsCenter, {
    height: '100%',
    width: '100vw',
  }),
}

export default function ContentHeightProvider({ children }: Props) {
  const [ref, { height = window.innerHeight - 200 }] = useBoxSizing({ handleWidth: false })

  return (
    <ContentHeightContext.Provider value={height}>
      <div ref={ref} css={styles.component}>
        {children}
      </div>
    </ContentHeightContext.Provider>
  )
}
