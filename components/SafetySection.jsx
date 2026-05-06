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
            <h2 className={styles.title}>Safety & Precautions</h2>
          </div>
          
          <p className={styles.description}>
            While our oils are 100% pure, they are highly potent botanical extracts. We prioritize your well-being through education and transparent safety guidelines.
          </p>

          <div className={styles.grid}>
            <div className={styles.item}>
              <div className={styles.itemIcon}><FaCircleInfo /></div>
              <div className={styles.itemText}>
                <h4>Dilution is Key</h4>
                <p>Always dilute with a carrier oil before skin application.</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.itemIcon}><FaUserDoctor /></div>
              <div className={styles.itemText}>
                <h4>Professional Advice</h4>
                <p>Consult a specialist for medical or pregnancy concerns.</p>
              </div>
            </div>
          </div>

          <div className={styles.footer}>
            <span className={styles.disclaimer}>* For External Use Only. Keep out of reach of children.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
