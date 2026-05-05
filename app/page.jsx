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
      </main>

      <div className={styles.bottomSection}>
        <PromoBanner />
        <Footer />
      </div>

    </div>

  );
}
