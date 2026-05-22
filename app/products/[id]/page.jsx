"use client";

import { useState, use } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FaLeaf, FaShieldHeart, FaHandsHoldingCircle, FaCartPlus, FaEnvelope } from "react-icons/fa6";
import { ALL_PRODUCTS } from "../../../data/products";
import ProductCard from "../../../components/ProductCard";
import styles from "../../../styles/ProductDetail.module.css";

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("benefits");

  const product = ALL_PRODUCTS.find(p => p.id === productId);
  const [selectedOption, setSelectedOption] = useState(product?.options ? product.options[0] : "");

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
              <span className={styles.category}>{product.scientificName}</span>
              <h1 className={styles.title}>{product.name}</h1>

              <div className={styles.priceSection}>
                <span className={styles.price}>{product.currency || "$"}{product.price.toFixed(2)}</span>
                <span className={styles.stockBadge}>In Stock</span>
              </div>

              {(product.weight || product.packSize) && (
                <div style={{ display: "flex", gap: "1rem", color: "#6B7280", fontSize: "0.95rem", marginBottom: "1.5rem", fontWeight: 500 }}>
                  {product.packSize && <span>{product.packSize}</span>}
                  {product.weight && (
                    <>
                      <span style={{ opacity: 0.3 }}>|</span>
                      <span>{product.weight}</span>
                    </>
                  )}
                </div>
              )}

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

              {/* Custom Option / Fragrance Selector */}
              {product.options && (
                <div className={styles.selectors} style={{ marginTop: "2rem" }}>
                  <div>
                    <span className={styles.selectorLabel}>{product.optionsLabel || "Options"}</span>
                    <div className={styles.optionGrid}>
                      {product.options.map(opt => (
                        <button
                          key={opt}
                          className={`${styles.optionBtn} ${selectedOption === opt ? styles.active : ""}`}
                          onClick={() => setSelectedOption(opt)}
                          type="button"
                          suppressHydrationWarning
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className={styles.buttonGroup}>
                {/* 
                  When the product is ready, uncomment this button and remove the "Coming Soon" button below it:
                  
                  <a
                    href={`https://wa.me/919213638440?text=${encodeURIComponent(
                      `Hi, I'm interested in buying ${product.name}${
                        selectedOption ? ` (${selectedOption} Fragrance)` : ""
                      }${product.packSize ? ` - ${product.packSize}` : ""}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.buyNowBtn}
                  >
                    Buy Now
                  </a>
                */}
                <button
                  disabled
                  className={styles.buyNowBtn}
                  style={{ cursor: "not-allowed", opacity: 0.6 }}
                >
                  Coming Soon
                </button>
                <Link
                  href="/contact"
                  className={styles.inquiryBtn}
                >
                  Message Us
                </Link>
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
                        <span className={styles.specLabel}>Aromatic Note</span>
                        <span className={styles.specValue}>{product.note}</span>
                      </div>
                      <div className={styles.specItem}>
                        <span className={styles.specLabel}>Plant Part</span>
                        <span className={styles.specValue}>{product.plantPart}</span>
                      </div>
                      <div className={styles.specItem}>
                        <span className={styles.specLabel}>Grade</span>
                        <span className={styles.specValue}>{product.purity}</span>
                      </div>

                      {product.weight && (
                        <div className={styles.specItem}>
                          <span className={styles.specLabel}>Weight</span>
                          <span className={styles.specValue}>{product.weight}</span>
                        </div>
                      )}

                      {product.packSize && (
                        <div className={styles.specItem}>
                          <span className={styles.specLabel}>Pack Size</span>
                          <span className={styles.specValue}>{product.packSize}</span>
                        </div>
                      )}
                    </div>
                  )}
                  {activeTab === "usage" && (
                    <div className={styles.usageContainer}>
                      <h4 className={styles.usageMethodTitle}>Recommended Ritual</h4>
                      <p className={styles.usageText}>{product.usage}</p>
                      <p className={styles.usageNote}>* For External Use Only. Always dilute before topical application.</p>
                    </div>
                  )}
                  {activeTab === "experience" && (
                    <div className={styles.usageContainer}>
                      {product.experience ? (
                        <>
                          <div className={styles.usageMethod}>
                            <h4 className={styles.usageMethodTitle}>Aromatic Diffusion</h4>
                            <p className={styles.usageTextSmall}>{product.experience.diffusion}</p>
                          </div>

                          <div className={styles.usageMethod}>
                            <h4 className={styles.usageMethodTitle}>Topical Application</h4>
                            <p className={styles.usageTextSmall}>{product.experience.topical}</p>
                          </div>

                          <div className={styles.usageMethod}>
                            <h4 className={styles.usageMethodTitle}>Daily Ritual</h4>
                            <p className={styles.usageTextSmall}>{product.experience.ritual}</p>
                          </div>
                        </>
                      ) : (
                        <p className={styles.usageText}>Experience the pure essence of our botanical distillations through daily ritual.</p>
                      )}
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
                .sort((a, b) => {
                  if (a.category === product.category && b.category !== product.category) return -1;
                  if (a.category !== product.category && b.category === product.category) return 1;
                  return 0;
                })
                .slice(0, 4)
                .map(p => (
                  <ProductCard
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    price={p.price}
                    image={p.image}
                    currency={p.currency}
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
