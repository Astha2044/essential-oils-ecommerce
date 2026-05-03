import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import FAQ from "../components/FAQ";
import Testimonial from "../components/Testimonial";
import Benefits from "../components/Benefits";
import PromoBanner from "../components/PromoBanner";
import BrandStory from "../components/BrandStory";
import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />
      
      {/* Hero & Benefits with overlap for premium look */}
      <div className={styles.topSection}>
        <Hero />
        <div className={styles.benefitsWrapper}>
          <Benefits />
        </div>
      </div>

      <main className={styles.middleSection}>
        <ProductList />
        <BrandStory />
        <Testimonial />
        <FAQ />
      </main>

      <div className={styles.bottomSection}>
        <PromoBanner />
        <Footer />
      </div>

    </div>
  );
}
