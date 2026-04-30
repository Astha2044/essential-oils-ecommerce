import styles from "../styles/PromoBanner.module.css";

export default function PromoBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Unlock Your Special Offer
          </h2>
          <p className={styles.subtitle}>
            Join our community and get exclusive access to new products and special discounts.
          </p>
        </div>
        <button className={styles.unlockBtn} suppressHydrationWarning>
          Unlock Now
        </button>
      </div>
    </section>
  );
}