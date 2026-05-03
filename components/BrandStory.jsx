import styles from "../styles/BrandStory.module.css";
import Image from "next/image";
import { FaLeaf, FaShieldHeart, FaHandsHoldingCircle } from "react-icons/fa6";

export default function BrandStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          
          {/* Image Column */}
          <div className={styles.imageColumn}>
            <div className={styles.imageFrame}>
              <Image 
                src="/images/lavender_bottle.png" 
                alt="Brand Story" 
                width={600} 
                height={700}
                className={styles.image}
              />
              <div className={styles.imageDecoration}></div>
            </div>
            <div className={styles.glassBadge}>
              <strong>100% Pure</strong>
              <span>Nature's Essence</span>
            </div>
          </div>

          {/* Text Column */}
          <div className={styles.textColumn}>
            <span className={styles.preTitle}>Our Heritage</span>
            <h2 className={styles.title}>From Soil to Soul: Our Botanical Journey</h2>
            
            <p className={styles.description}>
              Every drop of our essential oil tells a story of devotion to purity. We partner with local farmers who respect the earth, ensuring that our plants are harvested at their peak potency.
            </p>

            <div className={styles.featureList}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}><FaLeaf /></div>
                <div className={styles.featureInfo}>
                  <h4>Sustainable Sourcing</h4>
                  <p>Respecting the environment through ethical farming.</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}><FaShieldHeart /></div>
                <div className={styles.featureInfo}>
                  <h4>Certified Purity</h4>
                  <p>Rigorous testing for therapeutic-grade quality.</p>
                </div>
              </div>
            </div>

            <button className={styles.discoverBtn} suppressHydrationWarning>
              Discover Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
