/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { css } from '@emotion/react'
import theme from '@/styles/theme'
import library from '@/styles/library'
import Heading from './Heading'
import { useBoxSizing } from '@/hooks/useBoxSizing'
import { pixel } from '@/utils'
import paper1 from '@/assets/textures/paper-1.png'
import paper2 from '@/assets/textures/paper-2.png'
// import { cssVars } from '@/utils'

interface Props {
  variant?: 'one' | 'two'
  children: string
}

const HEADER_PREFIX = '[the]'
const paper = theme.attr.create<'one' | 'two'>('paper')

const styles = {
  component: css({
    display: 'flex',
    placeItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'var(--paper)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'var(--size, 200px)',
    filter: `drop-shadow(3px 3px 6px ${theme.style.alpha(theme.palette.ink[800], 0.12)})`,
    [paper.eq('one')]: {
      '--paper': `url("${paper1}")`,
      '& > hgroup': {
        transform: `translateY(8px)`,
      },
    },
    [paper.eq('two')]: {
      '--paper': `url("${paper2}")`,
    },
  }),
  header: css({
    flexWrap: 'nowrap',
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    alignItems: 'baseline',
    textTransform: 'uppercase',
    padding: theme.style.box(8, 12),
    boxSizing: 'border-box',
    gap: theme.spacing(2),
  }),
}

export default function Scrapbook({ variant = 'one', children }: Props) {
  const [ref, { width = 200 }] = useBoxSizing({ handleHeight: false })
  return (
    <div
      css={styles.component}
      data-paper={variant}
      style={theme.style.vars({ size: theme.utils.pixel(width) })}>
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
