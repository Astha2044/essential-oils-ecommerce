import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      
      {/* Text Content Overlay */}
      <div className={styles.textContent}>
        <h1 className={styles.title}>
          PURE ESSENCES<br />for a Restorative You
        </h1>

        <p className={styles.subtitle}>
          Experience the purest response of nature for a healthier, more vibrant you. Nourishing, authentic, and crafted for your complete well-being.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primaryBtn} suppressHydrationWarning>
            Shop Now
          </button>

          <button className={styles.secondaryBtn} suppressHydrationWarning>
            Learn More
          </button>
        </div>

        <p className={styles.infoText}>
          Detailed information about our extraction process.
        </p>
      </div>

    </section>
  );
}