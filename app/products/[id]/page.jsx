"use client";

import { useState, use } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FaLeaf, FaShieldHeart, FaHandsHoldingCircle, FaMinus, FaPlus, FaCartPlus, FaEnvelope } from "react-icons/fa6";
import { ALL_PRODUCTS } from "../../../data/products";
import ProductCard from "../../../components/ProductCard";
import styles from "../../../styles/ProductDetail.module.css";

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("benefits");

  const product = ALL_PRODUCTS.find(p => p.id === productId);

  if (!product) {
    return (
      <div className={styles.errorContainer}>
        <h1>Product Not Found</h1>
        <Link href="/products">Back to Products</Link>
      </div>
    );
  }



  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Breadcrumbs */}
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span className={styles.separator}>/</span>
            <Link href="/products">Products</Link>
            <span className={styles.separator}>/</span>
            <span className={styles.current}>{product.name}</span>
          </nav>

          <div className={styles.productGrid}>
            {/* Left: Image Section */}
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <div className={styles.imageDecoration}></div>
                <div className={styles.archedFrame}>
                  <Image
                    src={product.images ? product.images[activeImage] : product.image}
                    alt={product.name}
                    width={500}
                    height={600}
                    className={styles.image}
                    priority
                  />
                </div>
                {/* <div className={styles.floatingBadge}>
                  <FaLeaf /> 100% Organic
                </div> */}
              </div>

              {/* Thumbnails */}
              {product.images && (
                <div className={styles.thumbnails}>
                  {product.images.map((img, idx) => (
                    <div
                      key={idx}
                      className={`${styles.thumbnail} ${activeImage === idx ? styles.active : ""}`}
                      onClick={() => setActiveImage(idx)}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className={styles.thumbImage} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Content Section */}
            <div className={styles.contentColumn}>
              <span className={styles.category}>{product.scientificName} • {product.origin}</span>
              <h1 className={styles.title}>{product.name}</h1>

              <div className={styles.priceSection}>
                <span className={styles.price}>${product.price.toFixed(2)}</span>
                <span className={styles.stockBadge}>In Stock</span>
              </div>

              <p className={styles.description}>{product.description}</p>

              <div className={styles.quickFeatures}>
                <div className={styles.qFeature}>
                  <FaShieldHeart />
                  <span>Pure Grade</span>
                </div>
                <div className={styles.qFeature}>
                  <FaHandsHoldingCircle />
                  <span>Ethical</span>
                </div>
              </div>

              <div className={styles.buttonGroup}>
                <a
                  href={`https://wa.me/1234567890?text=Hi, I'm interested in ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.buyNowBtn}
                >
                  Buy Now
                </a>
                <a
                  href={`https://wa.me/1234567890?text=Hi, I have an inquiry about ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.inquiryBtn}
                >
                  Message Us
                </a>
              </div>

              {/* Tabs Section */}
              <div className={styles.tabsContainer}>
                <div className={styles.tabsHeader}>
                  <button
                    className={activeTab === "benefits" ? styles.activeTab : ""}
                    onClick={() => setActiveTab("benefits")}
                    suppressHydrationWarning
                  >
                    Benefits
                  </button>
                  <button
                    className={activeTab === "details" ? styles.activeTab : ""}
                    onClick={() => setActiveTab("details")}
                    suppressHydrationWarning
                  >
                    Information
                  </button>
                  <button
                    className={activeTab === "usage" ? styles.activeTab : ""}
                    onClick={() => setActiveTab("usage")}
                    suppressHydrationWarning
                  >
                    How to Use
                  </button>
                  <button
                    className={activeTab === "experience" ? styles.activeTab : ""}
                    onClick={() => setActiveTab("experience")}
                    suppressHydrationWarning
                  >
                    How to Experience
                  </button>
                </div>
                <div className={styles.tabContent}>
                  {activeTab === "benefits" && (
                    <ul className={styles.benefitList}>
                      {product.benefits.map((b, i) => (
                        <li key={i}><FaLeaf /> {b}</li>
                      ))}
                    </ul>
                  )}
                  {activeTab === "details" && (
                    <div className={styles.specGrid}>
                      <div className={styles.specItem}>
                        <span className={styles.specLabel}>Botanical Name</span>
                        <span className={styles.specValue}>{product.scientificName}</span>
                      </div>
                      <div className={styles.specItem}>
                        <span className={styles.specLabel}>Extraction</span>
                        <span className={styles.specValue}>{product.extraction}</span>
                      </div>
                      <div className={styles.specItem}>
                        <span className={styles.specLabel}>Aromatic Note</span>
                        <span className={styles.specValue}>{product.note}</span>
                      </div>
                      <div className={styles.specItem}>
                        <span className={styles.specLabel}>Plant Part</span>
                        <span className={styles.specValue}>{product.plantPart}</span>
                      </div>
                      <div className={styles.specItem}>
                        <span className={styles.specLabel}>Purity</span>
                        <span className={styles.specValue}>{product.purity}</span>
                      </div>
                      <div className={styles.specItem}>
                        <span className={styles.specLabel}>Origin</span>
                        <span className={styles.specValue}>{product.origin}</span>
                      </div>
                    </div>
                  )}
                  {activeTab === "usage" && (
                    <p className={styles.usageText}>{product.usage}</p>
                  )}
                  {activeTab === "experience" && (
                    <div className={styles.usageContainer}>
                      <div className={styles.usageMethod}>
                        <h4 className={styles.usageMethodTitle}>Aromatic Diffusion</h4>
                        <p className={styles.usageTextSmall}>Add 3–5 drops to your diffuser to refresh your space and create a calming, aromatic atmosphere.</p>
                      </div>

                      <div className={styles.usageMethod}>
                        <h4 className={styles.usageMethodTitle}>Direct Application</h4>
                        <p className={styles.usageTextSmall}>Apply a small amount directly to temples, wrists, or the back of the neck for a soothing and refreshing effect.</p>
                      </div>

                      <div className={styles.usageMethod}>
                        <h4 className={styles.usageMethodTitle}>Inhalation</h4>
                        <p className={styles.usageTextSmall}>Place a drop on your palms, gently rub together, and inhale deeply to uplift your mood and boost energy instantly.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Suggested Products Section */}
        <section className={styles.suggestionsSection}>
          <div className={styles.container}>
            <div className={styles.suggestionHeader}>
              <h2 className={styles.suggestionTitle}>You May Also Like</h2>
              <div className={styles.suggestionDivider}></div>
            </div>

            <div className={styles.suggestionGrid}>
              {ALL_PRODUCTS
                .filter(p => p.id !== productId)
                .slice(0, 4)
                .map(p => (
                  <ProductCard
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    price={p.price}
                    image={p.image}
                  />
                ))
              }
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
