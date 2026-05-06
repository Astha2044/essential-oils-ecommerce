"use client";
import { useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import styles from "../../../styles/ProductDetail.module.css";
import { FaStar, FaLeaf, FaDroplet, FaFlask, FaSpa, FaPlus, FaMinus } from "react-icons/fa6";

const PRODUCT_DATA = {
  id: 1,
  name: "Peppermint Essential Oil",
  price: 14.99,
  rating: 4.8,
  reviews: 120,
  description: "100% pure peppermint essential oil. Steam distilled for maximum purity and therapeutic benefits. Perfect for aromatherapy, massages, and natural home care.",
  features: [
    { icon: <FaLeaf />, label: "100% Pure & Natural" },
    { icon: <FaDroplet />, label: "Steam Distilled" },
    { icon: <FaSpa />, label: "Therapeutic Grade" },
    { icon: <FaFlask />, label: "No Additives or Fillers" },
  ],
  sizes: ["5ml", "10ml", "15ml"],
  images: ["/images/product_1.png", "/images/img10.png", "/images/product_3.png", "/images/product_4.png"]
};

export default function ProductDetailPage() {
  const [activeImg, setActiveImg] = useState(PRODUCT_DATA.images[0]);
  const [activeSize, setActiveSize] = useState(PRODUCT_DATA.sizes[1]);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <Navbar />
      <main className={styles.productDetailContainer}>
        <div className={styles.wrapper}>
          {/* Image Section */}
          <div className={styles.imageSection}>
            <div className={styles.mainImageWrapper}>
              <img src={activeImg} alt={PRODUCT_DATA.name} className={styles.mainImage} />
            </div>
            <div className={styles.thumbnails}>
              {PRODUCT_DATA.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`${styles.thumb} ${activeImg === img ? styles.active : ""}`}
                  onClick={() => setActiveImg(img)}
                >
                  <img src={img} alt={`View ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className={styles.infoSection}>
            <h1 className={styles.title}>{PRODUCT_DATA.name}</h1>

            <div className={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < Math.floor(PRODUCT_DATA.rating) ? "#FBBF24" : "#D1D5DB"} />
              ))}
              <span className={styles.ratingCount}>({PRODUCT_DATA.reviews} Reviews)</span>
            </div>

            <div className={styles.price}>${PRODUCT_DATA.price}</div>

            <p className={styles.description}>{PRODUCT_DATA.description}</p>

            <div className={styles.featuresList}>
              {PRODUCT_DATA.features.map((f, i) => (
                <div key={i} className={styles.feature}>
                  <span className={styles.featureIcon}>{f.icon}</span>
                  <span>{f.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.selectors}>
              <div className={styles.sizeSelector}>
                <span className={styles.selectorLabel}>Size</span>
                <div className={styles.sizeOptions}>
                  {PRODUCT_DATA.sizes.map(size => (
                    <button
                      key={size}
                      className={`${styles.sizeBtn} ${activeSize === size ? styles.active : ""}`}
                      onClick={() => setActiveSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.qtySelector}>
                <span className={styles.selectorLabel}>Quantity</span>
                <div className={styles.quantitySelector}>
                  <button className={styles.qtyBtn} onClick={() => setQuantity(Math.max(1, quantity - 1))}><FaMinus /></button>
                  <div className={styles.qtyDisplay}>{quantity}</div>
                  <button className={styles.qtyBtn} onClick={() => setQuantity(quantity + 1)}><FaPlus /></button>
                </div>
              </div>
            </div>

            <div className={styles.actions}>
              <button className={styles.addBtn}>Add to Cart</button>
              <button className={styles.buyBtn}>Buy Now</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
