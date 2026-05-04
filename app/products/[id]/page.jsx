"use client";

import { useState, use } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaLeaf, FaShieldHeart, FaHandsHoldingCircle, FaMinus, FaPlus, FaCartPlus } from "react-icons/fa6";
import { ALL_PRODUCTS } from "../../../data/products";
import styles from "../../../styles/ProductDetail.module.css";

export default function ProductDetailPage({ params }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("benefits");
  const router = useRouter();

  // Find the specific product based on the ID in the URL
  const product = ALL_PRODUCTS.find(p => p.id === productId);

  // If product not found, show a simple error or redirect
  if (!product) {
    return (
      <div className={styles.errorContainer}>
        <h1>Product Not Found</h1>
        <Link href="/products">Back to Products</Link>
      </div>
    );
  }

  const handleBuyNow = (e) => {
    e.preventDefault();
    router.push("/checkout");
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

              <button onClick={handleBuyNow} className={styles.buyNowBtn}>
                Buy Now
              </button>

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
