import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
import styles from "../../styles/HowItWorks.module.css";
import { FaWind, FaHandSparkles, FaLungs } from "react-icons/fa6";

export const metadata = {
  title: "How It Works | VS Naturals",
  description: "Discover the process behind our pure essential oils, from soil to soul.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* How It Works Hero */}
        <section className={styles.howHero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>Usage Guide</div>
            <h1 className={styles.heroTitle}>From Nature to You</h1>
            <p className={styles.heroSubtitle}>
              Learn the best ways to incorporate our pure, therapeutic-grade essential oils into your daily wellness ritual.
            </p>
          </div>
        </section>

        {/* The 3-Step Journey */}
        <section className={styles.stepsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>How to Experience</h2>
              <p className={styles.sectionSubtitle}>Simple ways to experience the power of botanicals.</p>
            </div>

            <div className={styles.stepsWrapper}>
              <div className={styles.stepItem} style={{ animationDelay: "0.2s" }}>
                <div className={styles.iconCircle}>
                  <FaWind />
                </div>
                <h3 className={styles.stepTitle}>Aromatic Diffusion</h3>
                <p className={styles.stepDescription}>
                  Add 3–5 drops to your diffuser to refresh your space and create a calming, aromatic atmosphere.
                </p>
              </div>

              <div className={styles.stepItem} style={{ animationDelay: "0.4s" }}>
                <div className={styles.iconCircle}>
                  <FaHandSparkles />
                </div>
                <h3 className={styles.stepTitle}>Direct Application</h3>
                <p className={styles.stepDescription}>
                  Apply a small amount directly to temples, wrists, or the back of the neck for a soothing and refreshing effect.
                </p>
              </div>

              <div className={styles.stepItem} style={{ animationDelay: "0.6s" }}>
                <div className={styles.iconCircle}>
                  <FaLungs />
                </div>
                <h3 className={styles.stepTitle}>Inhalation</h3>
                <p className={styles.stepDescription}>
                  Place a drop on your palms, gently rub together, and inhale deeply to uplift your mood and boost energy instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Detail Section */}
        <section className={styles.qualitySection}>
          <div className={styles.container}>
            <div className={styles.qualityGrid}>
              <div className={styles.qualityText}>
                <h2 className={styles.sectionTitle}>The Gold Standard of Steam Distillation</h2>
                <p>
                  Unlike mass-produced oils that use high-heat or chemical solvents, our slow-steam process protects the complex molecular structure of each botanical. This results in an oil that isn't just fragrant, but truly therapeutic.
                </p>
                <div className={styles.checkList}>
                  <div className={styles.checkItem}>✓ No Synthetic Fillers</div>
                  <div className={styles.checkItem}>✓ Ethically Harvested</div>
                  <div className={styles.checkItem}>✓ GC/MS Lab Tested</div>
                </div>
              </div>
              <div className={styles.imageWrapper}>
                <img src="/images/img1.png" alt="Distillation" className={styles.mainImage} />
                <div className={styles.imageDecoration}></div>
                <div className={styles.glassBadge}>
                  <strong>Pure Essence</strong>
                  <span>Nature's Choice</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
