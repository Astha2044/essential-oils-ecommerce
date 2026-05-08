export const metadata = {
  title: "Therapeutic Benefits | VS Naturals",
  description: "Discover the therapeutic benefits of essential oils for mind and body.",
};

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
import styles from "../../styles/BenefitsPage.module.css";
import SafetySection from "../../components/SafetySection";
import {
  FaFaceSmile,
  FaMagnifyingGlass,
  FaHeadSideVirus,
  FaLeaf,
  FaBolt,
  FaWind,
  FaSpa
} from "react-icons/fa6";

const BENEFITS_DATA = [
  {
    title: "Relieves Stress",
    text: "Helps calm the mind and reduces stress.",
    icon: <FaFaceSmile />
  },
  {
    title: "Improves Focus",
    text: "Enhances concentration and mental clarity.",
    icon: <FaMagnifyingGlass />
  },
  {
    title: "Relieves Headaches",
    text: "Soothes tension and reduces headache discomfort.",
    icon: <FaHeadSideVirus />
  },
  {
    title: "Hair & Skin Care",
    text: "Nourishes the scalp, promotes hair growth, and rejuvenates the skin for a healthy, radiant glow.",
    icon: <FaSpa />
  },
  {
    title: "Boosts Energy",
    text: "Naturally energizes the body and reduces fatigue.",
    icon: <FaBolt />
  },
  {
    title: "Supports Respiratory",
    text: "Clears nasal passages and supports easy breathing.",
    icon: <FaWind />
  }
];

export default function BenefitsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Benefits Hero Section */}
        <section className={styles.benefitsHero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>Pure Peppermint</div>
            <h1 className={styles.heroTitle}>Nature's Most Versatile Healer</h1>
            <p className={styles.heroSubtitle}>
              Discover how a single drop of peppermint oil can transform your daily wellness routine, from mental clarity to physical relief.
            </p>
          </div>
        </section>

        {/* Benefits Grid Section */}
        <section className={styles.gridSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Therapeutic Benefits</h2>
              <p className={styles.sectionSubtitle}>Rigorously tested and steam-distilled for maximum potency.</p>
            </div>
            <div className={styles.grid}>
              {BENEFITS_DATA.map((item, idx) => (
                <div
                  key={idx}
                  className={styles.benefitItem}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className={styles.iconWrapper}>
                    {item.icon}
                  </div>
                  <h3 className={styles.benefitTitle}>{item.title}</h3>
                  <p className={styles.benefitText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className={styles.usageSection}>
          <div className={styles.container}>
            <div className={styles.usageGrid}>
              <div className={styles.usageImageWrapper}>
                <img src="/images/eucalyptus_bottle.png" alt="Usage" className={styles.usageImage} />
                <div className={styles.imageDecoration}></div>
                <div className={styles.glassBadge}>
                  <strong>Pure Essence</strong>
                  <span>Nature's Choice</span>
                </div>
              </div>
              <div className={styles.usageText}>
                <h2 className={styles.sectionTitle}>How to Experience</h2>
                <div className={styles.usageList}>
                  <div className={styles.usageItem}>
                    <h4>Aromatic Diffusion</h4>
                    <p>Add 3-5 drops to your favorite diffuser to clear the mind and refresh your living space.</p>
                  </div>
                  <div className={styles.usageItem}>
                    <h4>Topical Application</h4>
                    <p>Dilute with a carrier oil and apply to temples or back of the neck for instant cooling relief.</p>
                  </div>
                  <div className={styles.usageItem}>
                    <h4>Inhalation</h4>
                    <p>Place a single drop on your palm, rub together, and inhale deeply for an instant energy boost.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SafetySection />
      </main>
      <CTASection />
      <Footer />
    </>
  );
}
