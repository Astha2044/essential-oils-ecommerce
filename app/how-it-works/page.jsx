import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/HowItWorks.module.css";
import { FaArrowRight, FaMagnifyingGlass, FaDroplet, FaHeartPulse } from "react-icons/fa6";

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className={styles.howItWorksContainer}>
        <h1 className={styles.heading}>How It Works</h1>

        <div className={styles.stepsWrapper}>
          <div className={styles.stepItem} style={{ animationDelay: "0s" }}>
            <div className={styles.iconCircle}>
              <FaMagnifyingGlass />
            </div>
            <h3 className={styles.stepTitle}>Choose</h3>
            <p className={styles.stepDescription}>
              Select your favorite essential oil from our pure collection.
            </p>
          </div>

          <FaArrowRight className={styles.arrow} />

          <div className={styles.stepItem} style={{ animationDelay: "0.2s" }}>
            <div className={styles.iconCircle}>
              <FaDroplet />
            </div>
            <h3 className={styles.stepTitle}>Use</h3>
            <p className={styles.stepDescription}>
              Add a few drops to your diffuser or apply to pulse points.
            </p>
          </div>

          <FaArrowRight className={styles.arrow} />

          <div className={styles.stepItem} style={{ animationDelay: "0.4s" }}>
            <div className={styles.iconCircle}>
              <FaHeartPulse />
            </div>
            <h3 className={styles.stepTitle}>Enjoy</h3>
            <p className={styles.stepDescription}>
              Experience the natural benefits and feel refreshed.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
