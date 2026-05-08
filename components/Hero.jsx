import styles from "../styles/Hero.module.css";
import Link from "next/link";
import { FaLeaf, FaDroplet, FaSpa, FaShieldHeart } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { PiPlantLight } from "react-icons/pi";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}></div>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>

          <div className={styles.badge} suppressHydrationWarning>Natural & Pure</div>

          <h1 className={styles.title} suppressHydrationWarning>
            Experience the Essence of <br className={styles.desktopOnly} />
            Pure Botanical Oils
          </h1>

          <p className={styles.subtitle} suppressHydrationWarning>
            Nurture your body and soul with our meticulously crafted, therapeutic-grade essential oils. Ethically sourced, and pure.
          </p>

          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.iconCircle}><FaLeaf /></div>
              <span>Naturally<br />Potent</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.iconCircle}><FaDroplet /></div>
              <span>Steam<br />Distilled</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.iconCircle}><FaSpa /></div>
              <span>Therapeutic<br />Grade</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.iconCircle}><FaShieldHeart /></div>
              <span>Safe &<br />Certified</span>
            </div>
          </div>

          <div className={styles.buttons}>
            <Link href="/products" className={styles.primaryBtn} suppressHydrationWarning>
              Shop Collection
            </Link>
            <Link href="/benefits" className={styles.secondaryBtn} suppressHydrationWarning>
              Explore Benefits
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}