import styles from "../styles/CTASection.module.css";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.ctaWrapper}>
          <img src="/images/bgimage.jpg" alt="Botanical Background" className={styles.bgImage} />
          <div className={styles.overlay}></div>

          <div className={styles.glassCard}>
            <span className={styles.preTitle}>Pure Botanical Essence</span>
            <h2 className={styles.title}>Experience the Power of Nature</h2>
            <p className={styles.description}>
              Transform your daily ritual with our therapeutic-grade essential oils.
              Pure, potent, and ethically sourced.
            </p>
            <div className={styles.btnGroup}>
              <Link href="/products" className={styles.primaryBtn}>
                Shop Collection
              </Link>
              <Link href="/contact" className={styles.secondaryBtn}>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
