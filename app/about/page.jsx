import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
import styles from "../../styles/About.module.css";
import { FaLeaf, FaDroplet, FaSpa, FaHeart } from "react-icons/fa6";
import { PiPlantLight } from "react-icons/pi";

export const metadata = {
  title: "About Us | VS Naturals",
  description: "Learn about our journey, mission, and the philosophy behind VS Naturals & Essentials.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* About Hero Section */}
        <section className={styles.aboutHero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>Our Journey</div>
            <h1 className={styles.heroTitle}>Crafting Nature's Purest Essence</h1>
            <p className={styles.heroSubtitle}>
              Dedicated to bringing the therapeutic power of botanicals into your home through purity and passion.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className={styles.storySection}>
          <div className={styles.container}>
            <div className={styles.storyGrid}>
              <div className={styles.storyText}>
                <h2 className={styles.sectionTitle}>Our Story</h2>
                <p>
                  VS Naturals & Essentials was started by a young generation with a passion for natural wellness and pure essential oils. What began as our very first venture turned into a journey of creating products that bring nature, self-care, and positivity into everyday life.                </p>
                <p>
                  Our goal is to inspire a healthier and more refreshing lifestyle through carefully crafted natural essentials made with passion and purpose.                </p>
                <div className={styles.signature}>
                  <span>— The Young Founders of VS Naturals & Essentials</span>
                </div>
              </div>
              <div className={styles.storyImageWrapper}>
                <img src="/images/ref.jpeg" alt="Natural Distillation" className={styles.storyImage} />
                <div className={styles.imageDecoration}></div>
                {/* <div className={styles.glassBadge}>
                  <span>100%</span>
                  <strong>Organic</strong>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values Grid */}
        <section className={styles.featuresSection}>
          <div className={styles.container}>
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <div className={styles.iconCircle}><FaLeaf /></div>
                <h3 className={styles.featureTitle}>Our Mission</h3>
                <p className={styles.featureText}>
                  To create high-quality essential oils that help people relax, recharge, and enjoy a more balanced daily routine through the natural essence of botanicals.                </p>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.iconCircle}><FaDroplet /></div>
                <h3 className={styles.featureTitle}>Our Promise</h3>
                <p className={styles.featureText}>
                  We believe in creating essential oils with care, consistency, and a genuine passion for natural wellness. Every bottle is thoughtfully made to bring a refreshing and comforting experience into your daily routine.                </p>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.iconCircle}><FaHeart /></div>
                <h3 className={styles.featureTitle}>Our Values</h3>
                <p className={styles.featureText}>
                  Sustainability is at our heart. We prioritize ethical sourcing and eco-friendly packaging to ensure we give back to the Earth as much as we take.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Distillation Process Section */}
        {/* <section className={styles.processSection}>
          <div className={styles.container}>
            <h2 className={styles.centeredTitle}>The Art of Distillation</h2>
            <div className={styles.processGrid}>
              <div className={styles.processItem}>
                <div className={styles.processStep}>01</div>
                <h4>Ethical Harvest</h4>
                <p>We pick our botanicals at the peak of their potency, respecting natural cycles.</p>
              </div>
              <div className={styles.processItem}>
                <div className={styles.processStep}>02</div>
                <h4>Slow Distillation</h4>
                <p>Low-pressure steam extraction preserves the delicate aromatic compounds.</p>
              </div>
              <div className={styles.processItem}>
                <div className={styles.processStep}>03</div>
                <h4>Purity Testing</h4>
                <p>Every batch is GC/MS tested to ensure zero additives or synthetic fillers.</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Pure Potency Section */}
        {/* <section className={styles.philosophySection}>
          <div className={styles.container}>
            <div className={styles.philosophyContent}>
              <h2 className={styles.sectionTitle}>The Philosophy of Pure Potency</h2>
              <p className={styles.philosophyText}>
                Our "Pure Potency" standard isn't just a marketing slogan—it's our scientific commitment. By using slow-steam distillation and cold-pressing, we preserve the delicate aromatic compounds that make essential oils so effective for the mind, body, and spirit.
              </p>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Organic Sourcing</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>50+</div>
                  <div className={styles.statLabel}>Pure Botanicals</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>0</div>
                  <div className={styles.statLabel}>Synthetic Additives</div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

      </main>
      <CTASection />
      <Footer />
    </>
  );
}
