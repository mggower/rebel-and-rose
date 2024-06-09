import styles from './header.module.sass'

export default function Header() {
  return (
    <header className={styles.header}>
      <button>Follow Us</button>
      <h1>Rebel & Rose</h1>
      <button>Menu</button>
    </header>
  )
}
