"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { FaLeaf, FaShieldHeart, FaHandsHoldingCircle, FaMinus, FaPlus, FaCartPlus } from "react-icons/fa6";
import styles from "../../styles/ProductDetail.module.css";

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("benefits");

  const product = {
    name: "Peppermint Essential Oil",
    price: 24.99,
    description: "Pure, therapeutic-grade peppermint oil distilled from the finest Mentha piperita leaves. Experience the cooling, invigorating aroma that clears the mind and refreshes the soul.",
    image: "/images/img4.png",
    scientificName: "Mentha Piperita",
    origin: "Italy",
    extraction: "Steam Distilled",
    benefits: [
      "Naturally cooling and refreshing for the skin",
      "Helps promote mental clarity and focus",
      "Traditional support for digestive comfort",
      "Ideal for aromatherapy and natural cleaning"
    ],
    usage: "Add 3-5 drops to a diffuser or mix with a carrier oil for topical application. Avoid contact with eyes."
  };

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
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={700}
                    className={styles.image}
                    priority
                  />
                </div>
                <div className={styles.floatingBadge}>
                  <FaLeaf /> 100% Organic
                </div>
              </div>
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

              {/* Purchase Controls */}
              <div className={styles.purchaseControls}>
                <div className={styles.quantitySelector}>
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><FaMinus /></button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}><FaPlus /></button>
                </div>
                <button className={styles.addToCartBtn}>
                  <FaCartPlus /> Add to Cart
                </button>
              </div>

              <Link href="/checkout" className={styles.buyNowBtn}>
                Buy Now
              </Link>

              {/* Tabs Section */}
              <div className={styles.tabsContainer}>
                <div className={styles.tabsHeader}>
                  <button
                    className={activeTab === "benefits" ? styles.activeTab : ""}
                    onClick={() => setActiveTab("benefits")}
                  >
                    Benefits
                  </button>
                  <button
                    className={activeTab === "usage" ? styles.activeTab : ""}
                    onClick={() => setActiveTab("usage")}
                  >
                    How to Use
                  </button>
                </div>
                <div className={styles.tabContent}>
                  {activeTab === "benefits" ? (
                    <ul className={styles.benefitList}>
                      {product.benefits.map((b, i) => (
                        <li key={i}><FaLeaf /> {b}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className={styles.usageText}>{product.usage}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
