import styles from './Scrapbook.module.scss'

interface Props {
  variant: 'one' | 'two'
  children: string
  style?: React.CSSProperties
}

function Scrapbook({ variant, children, style }: Props) {
  return (
    <div className={styles.scrapbook} data-variant={variant} style={style}>
      <hgroup>
        <h5>{`[the]`}</h5>
        <h3>{children}</h3>
      </hgroup>
    </div>
  )
}

export default Scrapbook
