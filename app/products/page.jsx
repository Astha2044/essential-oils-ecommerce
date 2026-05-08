"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import { ALL_PRODUCTS } from "../../data/products";
import styles from "../../styles/Products.module.css";

const CATEGORIES = ["All", "Essential Oils", "Candles"];

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState(categoryParam || "All");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [showNewsletterPopup, setShowNewsletterPopup] = useState(false);

  // Sync activeCategory when URL param changes
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

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

      <header className={styles.shopHero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>The Collection</div>
          <h1 className={styles.heroTitle}>The Essence of Pure Botanical Rituals</h1>
          <p className={styles.heroSubtitle}>
            Discover our meticulously curated collection of therapeutic-grade essential oils and hand-poured botanical candles.
          </p>
        </div>
      </header>

      <main className={styles.mainContainer}>
        <section className={styles.catalogSection}>
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

      <section className={styles.statementSection}>
        <div className={styles.statementContent}>
          <p>"Nature doesn't hurry, yet everything is accomplished. Our collection is a testament to the patient art of botanical preservation."</p>
          <span className={styles.statementAuthor}>- VS Naturals & Essentials</span>
        </div>
      </section>

      <section className={styles.premiumNewsletterSection}>
        <div className={styles.mainContainer}>
          <div className={styles.newsletterCard}>
            <div className={styles.newsletterImageOverlay}></div>
            <div className={styles.newsletterContent}>
              <h2 className={styles.newsletterTitle}>Elevate Your Botanical Ritual</h2>
              <p className={styles.newsletterText}>Join our exclusive circle to receive botanical guides and priority access to rare collections.</p>
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
                    Embrace the Essence
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {showNewsletterPopup && (
        <div className={styles.popup}>
          Welcome to the Circle! Successfully Subscribed.
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading collection...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
