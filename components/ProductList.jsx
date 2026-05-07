"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { ALL_PRODUCTS } from "../data/products";
import styles from "../styles/Product.module.css";

export default function ProductList() {
  const [activeCategory, setActiveCategory] = useState("Shop All");
  const categories = ["Shop All", "Lavender", "Jasmine", "Peppermint", "Sandalwood", "Mogra"];

  const filteredProducts = activeCategory === "Shop All"
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter(product => product.name.toLowerCase().includes(activeCategory.toLowerCase()));


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
        {filteredProducts.slice(0, 4).map((p, i) => (
          <ProductCard key={i} id={p.id} name={p.name} price={p.price} image={p.image} />
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

