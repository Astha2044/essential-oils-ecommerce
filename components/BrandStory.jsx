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
            <h2 className={styles.title}>Bringing Nature Into Everyday Living</h2>

            <p className={styles.description}>
              At VS Naturals & Essentials, we bring you high-quality essential oils and botanical aromas chosen for their rich fragrance, freshness, and everyday usability. Our focus is on quality products, refreshing aromas, and a great experience you can enjoy daily.
            </p>

            <div className={styles.featureList}>
              <div className={styles.feature}>
                <div className={styles.iconWrapper}>
                  <div className={styles.iconDecoration}></div>
                  <div className={styles.featureIcon}><FaLeaf /></div>
                </div>
                <div className={styles.featureInfo}>
                  <h4>Naturally Inspired</h4>
                  <p>Botanical aromas crafted for modern living.</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.iconWrapper}>
                  <div className={styles.iconDecoration}></div>
                  <div className={styles.featureIcon}><FaShieldHeart /></div>
                </div>
                <div className={styles.featureInfo}>
                  <h4>Quality You Can Enjoy</h4>
                  <p>Fresh, rich, and long-lasting fragrance blends.</p>
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
              <div className={styles.glassBadge}>
                <strong>Pure Essence</strong>
                <span>Nature's Choice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
