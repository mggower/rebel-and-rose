/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { css } from '@emotion/react'
import theme from '@/styles/theme'
import library from '@/styles/library'
import assets from '@/utils/assets'
import Heading from './Heading'
import { useBoxSizing } from '@/hooks/useBoxSizing'
import { cssVars, pixel } from '@/utils'

interface Props {
  variant?: 'one' | 'two'
  children: string
}

const HEADER_PREFIX = '[the]'
const paper = theme.attr.custom<'one' | 'two'>('paper')

const styles = {
  component: css({
    display: 'flex',
    placeItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'var(--paper)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'var(--size, 200px)',
    [paper.eq('one')]: {
      '--paper': `url("${assets.scrapbook.paper[1]}")`,
      '& > hgroup': {
        transform: `translateY(8px)`,
      },
    },
    [paper.eq('two')]: {
      '--paper': `url("${assets.scrapbook.paper[2]}")`,
    },
  }),
  header: css({
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    alignItems: 'baseline',
    textTransform: 'uppercase',
    padding: theme.box(8, 12),
    boxSizing: 'border-box',
    gap: theme.spacing[2],
  }),
}

export default function Scrapbook({ variant = 'one', children }: Props) {
  const [ref, { width = 200 }] = useBoxSizing({ handleHeight: false })
  return (
    <div css={styles.component} data-paper={variant} style={cssVars({ size: pixel(width) })}>
      <hgroup ref={ref} css={styles.header}>
        <Heading family='serif' tracking='extreme' weight='normal' fontSize='min'>
          {HEADER_PREFIX}
        </Heading>
        <Heading family='serif' fontSize='lg' tracking='widest' weight='normal'>
          {children}
        </Heading>
      </hgroup>
    </div>
  )
}
