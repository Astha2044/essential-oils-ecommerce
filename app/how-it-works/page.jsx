import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
import styles from "../../styles/HowItWorks.module.css";
import { FaMagnifyingGlass, FaDroplet, FaHeartPulse } from "react-icons/fa6";

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
            <div className={styles.badge}>Our Process</div>
            <h1 className={styles.heroTitle}>From Soil to Soul</h1>
            <p className={styles.heroSubtitle}>
              Experience the meticulous journey each botanical takes to become a pure, therapeutic-grade essential oil in your home.
            </p>
          </div>
        </section>

        {/* The 3-Step Journey */}
        <section className={styles.stepsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>The Science of Purity</h2>
              <p className={styles.sectionSubtitle}>A simplified look at our rigorous 3-step quality standard.</p>
            </div>

            <div className={styles.stepsWrapper}>
              <div className={styles.stepItem} style={{ animationDelay: "0.2s" }}>
                <div className={styles.iconCircle}>
                  <FaMagnifyingGlass />
                </div>
                <h3 className={styles.stepTitle}>Ethical Sourcing</h3>
                <p className={styles.stepDescription}>
                  We partner with organic farms worldwide to harvest botanicals at their peak potency, ensuring sustainability in every leaf.
                </p>
              </div>

              <div className={styles.stepItem} style={{ animationDelay: "0.4s" }}>
                <div className={styles.iconCircle}>
                  <FaDroplet />
                </div>
                <h3 className={styles.stepTitle}>Precision Distillation</h3>
                <p className={styles.stepDescription}>
                  Using slow-steam distillation, we preserve the delicate aromatic compounds that hold the plant's true healing essence.
                </p>
              </div>

              <div className={styles.stepItem} style={{ animationDelay: "0.6s" }}>
                <div className={styles.iconCircle}>
                  <FaHeartPulse />
                </div>
                <h3 className={styles.stepTitle}>Purity Testing</h3>
                <p className={styles.stepDescription}>
                  Every batch undergoes GC/MS testing to guarantee zero synthetic additives, pesticides, or fillers. Just 100% pure oil.
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
                  <span>Tested</span>
                  <strong>99.9% Pure</strong>
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
