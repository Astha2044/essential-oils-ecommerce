import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/About.module.css";
import { FaLeaf, FaDroplet, FaSpa, FaHeart } from "react-icons/fa6";
import { PiPlantLight } from "react-icons/pi";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={styles.aboutContainer}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>About Us</h1>
          
          <div className={styles.divider}>
            <div className={styles.line}></div>
            <PiPlantLight className={styles.leafIcon} />
            <div className={styles.line}></div>
          </div>

          <p className={styles.description}>
            At VS Naturals, we believe in the power of nature. Our essential oils are carefully 
            crafted to bring purity, balance, and wellness to your everyday life. We are dedicated 
            to sourcing the finest botanicals to ensure every drop is as nature intended.
          </p>

          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.iconCircle}><FaLeaf /></div>
              <h3 className={styles.featureTitle}>Our Mission</h3>
              <p className={styles.featureText}>
                100% Pure & Natural oils for healthy lifestyle.
              </p>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.iconCircle}><FaDroplet /></div>
              <h3 className={styles.featureTitle}>Our Promise</h3>
              <p className={styles.featureText}>
                Steam Distilled quality in every drop.
              </p>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.iconCircle}><FaSpa /></div>
              <h3 className={styles.featureTitle}>Our Values</h3>
              <p className={styles.featureText}>
                Therapeutic Grade integrity and care.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
