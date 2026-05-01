"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/Products.module.css";
import ProductCard from "../../components/ProductCard";

const ALL_PRODUCTS = [
  { id: 1, name: "Peppermint Oil", price: 14.99, image: "/images/product_1.png", category: "Essential Oils" },
  { id: 2, name: "Lavender Oil", price: 14.99, image: "/images/product_2.png", category: "Essential Oils" },
  { id: 3, name: "Tea Tree Oil", price: 14.99, image: "/images/product_3.png", category: "Essential Oils" },
  { id: 4, name: "Eucalyptus Oil", price: 14.99, image: "/images/eucalyptus_bottle.png", category: "Essential Oils" },
  { id: 5, name: "Zen Blend", price: 19.99, image: "/images/product_1.png", category: "Blends" },
  { id: 6, name: "Sleep Roll-On", price: 12.99, image: "/images/product_2.png", category: "Roll-Ons" },
  { id: 7, name: "Diffuser", price: 34.99, image: "/images/product_3.png", category: "Accessories" },
];

const CATEGORIES = ["All", "Essential Oils", "Blends", "Roll-Ons", "Accessories"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className={styles.productsContainer}>
        <h1 className={styles.heading}>Our Products</h1>

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

        <div className={styles.productsGrid}>
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
