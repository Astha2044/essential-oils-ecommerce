import Link from "next/link";
import { FaLeaf, FaHandHoldingHeart, FaDroplet, FaCircleExclamation } from "react-icons/fa6";
import styles from "../styles/PromoBanner.module.css";

export default function PromoBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>Premium Collection</div>
          <h2 className={styles.title}>
            Elevate Your Senses with Nature's Purest Essence
          </h2>
          <p className={styles.subtitle}>
            Our oils are steam-distilled from the finest global botanicals, ensuring the highest therapeutic grade for your aromatherapy and wellness needs.
          </p>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}><FaLeaf /></span>
              <div className={styles.featureText}>
                <strong>100% Organic</strong>
                <span>Pure plant extracts</span>
              </div>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}><FaHandHoldingHeart /></span>
              <div className={styles.featureText}>
                <strong>Ethically Sourced</strong>
                <span>Direct from farms</span>
              </div>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}><FaDroplet /></span>
              <div className={styles.featureText}>
                <strong>Therapeutic Grade</strong>
                <span>Potent & effective</span>
              </div>
            </div>
          </div>

          <div className={styles.disclaimerBox}>
            <span className={styles.disclaimerIcon}><FaCircleExclamation /></span>
            <span className={styles.disclaimerText}>Important: For External Use Only. Keep out of reach of children.</span>
          </div>

          <div className={styles.actionSection}>
            <Link href="/products" className={styles.unlockBtn}>
              Explore the Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}