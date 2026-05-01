"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/Product.module.css";

export default function ProductList() {
  const [activeCategory, setActiveCategory] = useState("Shop All");
  const categories = ["Shop All", "Best Sell", "Future Products", "Latest Arrival"];

  const products = [
    { name: "Calm Lavender Essential Oil", price: 38.00, image: "/images/img1.png" },
    { name: "Uplift Bergamot Essential Oil", price: 38.00, image: "/images/img2.png" },
    { name: "Soothe Roman Chamomile Oil", price: 38.00, image: "/images/img3.png" },
    { name: "Invigorate Peppermint Oil", price: 28.00, image: "/images/img4.png" },
    { name: "Balance Geranium Essential Oil", price: 26.00, image: "/images/img5.png" },
    { name: "Awaken Eucalyptus Oil", price: 28.00, image: "/images/img7.jpg" },
    { name: "Relax Frankincense Oil", price: 38.00, image: "/images/img6.jpg" },
    { name: "Ground Vetiver Essential Oil", price: 38.00, image: "/images/img8.jpg" }
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Our Product
      </h2>

      <div className={styles.categories}>
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`${styles.categoryBtn} ${activeCategory === cat ? styles.activeCategory : ''}`}
            onClick={() => setActiveCategory(cat)}
            suppressHydrationWarning
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {products.map((p, i) => (
          <ProductCard key={i} name={p.name} oldPrice={p.oldPrice} price={p.price} image={p.image} />
        ))}
      </div>
    </section>
  );
}