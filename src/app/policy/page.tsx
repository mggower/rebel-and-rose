import styles from './page.module.sass'

export default function Policy() {
  return (
    <main className={styles.policy}>
      <section className={styles.section}>
        <div className={styles.header}>
          <h3>Privacy Policy</h3>
        </div>
        <p>
          We may engage with third-party companies or individuals to facilitate various services,
          such as text marketing, credit card processing, scheduling software, shipping, data
          analysis and management, promotional services, etc. These entities, collectively referred
          to as Service Providers, are provided with the necessary information to carry out these
          services on behalf of our business.
        </p>
        <p>
          Rest assured, we do not disclose your personal information to third parties for their
          direct marketing endeavors. Additionally, we neither engage in the buying nor selling of
          text messaging opt-in information.
        </p>
      </section>
    </main>
  )
}
