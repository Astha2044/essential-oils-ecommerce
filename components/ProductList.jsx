"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { ALL_PRODUCTS } from "../data/products";
import styles from "../styles/Product.module.css";

export default function ProductList() {
  const [activeCategory, setActiveCategory] = useState("Shop All");
  const categories = ["Shop All", "Essential Oils", "Candles"];

  const oils = ALL_PRODUCTS.filter(p => p.category === "Essential Oils");
  const candles = ALL_PRODUCTS.filter(p => p.category === "Candles");

  let displayProducts = [];
  if (activeCategory === "Shop All") {
    displayProducts = [...oils.slice(0, 2), ...candles.slice(0, 2)];
  } else if (activeCategory === "Essential Oils") {
    displayProducts = oils.slice(0, 4);
  } else if (activeCategory === "Candles") {
    displayProducts = candles.slice(0, 4);
  }


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
            type="button"
            suppressHydrationWarning
          >
            {cat}
          </button>
        ))}
      </div>


      <div className={styles.grid}>
        {displayProducts.map((p, i) => (
          <ProductCard key={i} id={p.id} name={p.name} price={p.price} image={p.image} category={p.category} currency={p.currency} />
        ))}
      </div>

      <div className={styles.viewMoreContainer}>
        <Link href="/products" className={styles.viewMoreBtn}>
          Explore Our Full Collection
        </Link>
      </div>

    </section>
  );
}

