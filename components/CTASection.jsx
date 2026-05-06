import styles from "../styles/CTASection.module.css";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.preTitle}>Join Our Community</span>
          <h2 className={styles.title}>Unlock the Power of Nature</h2>
          <p className={styles.description}>
            Experience the therapeutic benefits of pure botanical oils. Subscribe to our newsletter for exclusive offers and wellness tips.
          </p>
          <div className={styles.btnGroup}>
            <Link href="/products" className={styles.primaryBtn}>
              Shop Collection
            </Link>
            <Link href="/contact" className={styles.secondaryBtn}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
