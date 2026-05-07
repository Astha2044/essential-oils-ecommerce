import styles from "../styles/BrandStory.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaLeaf, FaShieldHeart, FaHandsHoldingCircle } from "react-icons/fa6";

export default function BrandStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          {/* Text Column */}
          <div className={styles.textColumn}>
            <span className={styles.preTitle}>Our Heritage</span>
            <h2 className={styles.title}>From Soil to Soul: Our Botanical Journey</h2>

            <p className={styles.description}>
              At VS Naturals, every drop is a testament to our obsession with purity. We bridge the gap between ancient botanical wisdom and modern wellness by partnering with dedicated local farmers who treat the earth with reverence, ensuring every essence is captured at its most powerful peak.
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

            {/* <Link href="/about" className={styles.discoverBtn} suppressHydrationWarning>
              Discover Our Story
            </Link> */}
          </div>

          {/* Image Column */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageDecoration}></div>
              <div className={styles.imageFrame}>
                <Image
                  src="/images/lavender_bottle.png"
                  alt="Brand Story"
                  width={600}
                  height={700}
                  className={styles.image}
                />
              </div>
            </div>
            {/* <div className={styles.glassBadge}>
              <strong>100% Pure</strong>
              <span>Nature's Essence</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
