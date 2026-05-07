import styles from "../styles/SafetySection.module.css";
import { FaShieldHeart, FaCircleInfo, FaUserDoctor } from "react-icons/fa6";

export default function SafetySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.header}>
            <div className={styles.iconCircle}>
              <FaShieldHeart />
            </div>
            <div>
              <span className={styles.subtitle}>Safety & Precautions</span>
              <h2 className={styles.title}>Safety & Care</h2>
            </div>
          </div>
          
          <div className={styles.content}>
            <p className={styles.description}>
              Our oils are pre-diluted and ready for direct use, making them gentle and easy to enjoy every day. For best experience, we recommend a quick patch test before first use to ensure it suits your skin.
            </p>
            
            <p className={styles.description}>
              Avoid contact with eyes and very sensitive areas. Use a small amount as needed for a pleasant and refreshing experience. If any mild irritation occurs, simply discontinue use.
            </p>

            <p className={styles.description}>
              Store in a cool, dry place and keep out of reach of children. If pregnant or nursing, it’s always a good idea to consult a healthcare professional before use.
            </p>
          </div>

          <div className={styles.footer}>
            <span className={styles.disclaimer}>* For External Use Only</span>
          </div>
        </div>
      </div>
    </section>
  );
}
