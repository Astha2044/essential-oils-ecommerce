"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
// import CTASection from "../../components/CTASection";
import { ALL_PRODUCTS } from "../../data/products";
import styles from "../../styles/Products.module.css";
import { FaLeaf, FaShieldHeart, FaHandsHoldingCircle, FaFlask } from "react-icons/fa6";

const CATEGORIES = ["All", "Essential Oils", "Blends", "Roll-Ons"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setShowNewsletterPopup(true);
    setNewsletterEmail("");
    setTimeout(() => {
      setShowNewsletterPopup(false);
    }, 4000);
  };

  const filteredProducts = activeCategory === "All"
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className={styles.productsPage}>
      <Navbar />

      {/* Shop Hero Section */}
      <header className={styles.shopHero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>The Collection</div>
          <h1 className={styles.heroTitle}>The Essence of Pure Botanical Rituals</h1>
          <p className={styles.heroSubtitle}>
            Discover our meticulously curated collection of therapeutic-grade essential oils, hand-harvested and distilled at the peak of potency.
          </p>
        </div>
      </header>

      <main className={styles.mainContainer}>
        <section className={styles.catalogSection}>
          {/* Floating Toolbar */}
          <div className={styles.toolbar}>
            <div className={styles.categoryBar}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={`${styles.categoryBtn} ${activeCategory === cat ? styles.active : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className={styles.resultsInfo}>
              Showing <span>{filteredProducts.length}</span> results
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className={styles.productsGrid}>
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>No products found in this category.</p>
              <button className={styles.resetBtn} onClick={() => setActiveCategory("All")}>
                View All Products
              </button>
            </div>
          )}
        </section>
      </main>

      <section className={styles.premiumWhySection}>
        <div className={styles.whyBackground}></div>
        <div className={styles.mainContainer}>
          <div className={styles.whyHeader}>
            <span className={styles.sectionBadge}>Our Philosophy</span>
            <h2 className={styles.sectionTitle}>The Ritual of Quality</h2>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyItem}>
              <div className={styles.iconWrapper}><FaLeaf /></div>
              <h3>Ethically Sourced</h3>
              <p>Direct partnerships with family-owned botanical farms worldwide.</p>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.iconWrapper}><FaFlask /></div>
              <h3>GC/MS Tested</h3>
              <p>Every single batch verified for absolute therapeutic purity.</p>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.iconWrapper}><FaShieldHeart /></div>
              <h3>Small Batch</h3>
              <p>Slow-distilled to preserve the most delicate aromatic molecules.</p>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.iconWrapper}><FaHandsHoldingCircle /></div>
              <h3>Zero Additives</h3>
              <p>100% pure botanical essence with zero synthetic fillers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Statement Break */}
      <section className={styles.statementSection}>
        <div className={styles.statementContent}>
          <p>"Nature doesn't hurry, yet everything is accomplished. Our oils are a testament to the patient art of botanical extraction."</p>
          <span className={styles.statementAuthor}>- VS Naturals & Essentials</span>
        </div>
      </section>

      {/* Enhanced Trust Section */}
      <section className={styles.premiumTrustSection}>
        <div className={styles.mainContainer}>
          <div className={styles.trustGrid}>
            <div className={styles.trustCard}>
              <div className={styles.trustArchedImage}>
                <img src="/images/img1.png" alt="Purity" />
              </div>
              <div className={styles.trustContent}>
                <h3>Organic Harvest</h3>
                <p>Pure plants, grown without pesticides in their native soil.</p>
              </div>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustArchedImage}>
                <img src="/images/img4.png" alt="Purity" />
              </div>
              <div className={styles.trustContent}>
                <h3>Botanical Integrity</h3>
                <p>Zero compromises on potency, from seed to seal.</p>
              </div>
            </div>
            <div className={styles.trustCard}>
              <div className={styles.trustArchedImage}>
                <img src="/images/img7.jpg" alt="Purity" />
              </div>
              <div className={styles.trustContent}>
                <h3>Eco Conscious</h3>
                <p>Sustainable glass and 100% plastic-free packaging.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Newsletter Section */}
      <section className={styles.premiumNewsletterSection}>
        <div className={styles.mainContainer}>
          <div className={styles.newsletterCard}>
            <div className={styles.newsletterImageOverlay}></div>
            <div className={styles.newsletterContent}>
              <h2 className={styles.newsletterTitle}>Elevate Your Botanical Ritual</h2>
              <p className={styles.newsletterText}>Join our exclusive circle to receive botanical guides and priority access to rare distillations.</p>
              <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    placeholder="Your botanical sanctuary email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className={styles.newsletterInput}
                  />
                  <button type="submit" className={styles.newsletterSubmit}>
                    Join the Circle
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <CTASection /> */}
      <Footer />

      {/* Success Popup */}
      {showNewsletterPopup && (
        <div className={styles.popup}>
          Welcome to the Circle! Successfully Subscribed.
        </div>
      )}
    </div>
  );
}
