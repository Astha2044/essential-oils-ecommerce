import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import FAQ from "../components/FAQ";
import Testimonial from "../components/Testimonial";
import Benefits from "../components/Benefits";
import PromoBanner from "../components/PromoBanner";
import BrandStory from "../components/BrandStory";
import CTASection from "../components/CTASection";
import SafetySection from "../components/SafetySection";
import styles from "../styles/page.module.css";

export const metadata = {
  title: "VS Naturals & Essentials | Premium Essential Oils",
  description: "Discover pure, potent, and beautifully crafted essential oils for wellness and aromatherapy.",
};

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />

      {/* Hero & Benefits with overlap for premium look */}
      <div className={styles.topSection}>
        <Hero />
      </div>


      <main className={styles.middleSection}>
        <section className={styles.whiteSection}>
          <Benefits />
        </section>

        <section className={styles.whiteSection}>
          <ProductList />
        </section>


        <section className={styles.beigeSection}>
          <BrandStory />
        </section>

        <section className={styles.whiteSection}>
          <Testimonial />
        </section>

        <section className={styles.beigeSection}>
          <FAQ />
        </section>
        <SafetySection />
      </main>

      <div className={styles.bottomSection}>
        <CTASection />
        <PromoBanner />
        <Footer />
      </div>

    </div>

  );
}
