"use client";

import styles from "../styles/Product.module.css";
import Image from "next/image";
import Link from "next/link";
import { ALL_PRODUCTS } from "../data/products";

export default function ProductCard({ id, name, price, image, category, currency = "$" }) {

  const handleBuyNow = (e) => {
    e.preventDefault();
    const whatsappNumber = "919213638440";
    const message = `Hi, I'm interested in ${name}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    const newWindow = window.open(url, "_blank");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      window.location.href = url;
    }
  };

  const productCategory = category || ALL_PRODUCTS.find(p => p.id === id)?.category;
  const isCandle = productCategory === "Candles";

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageDecoration}></div>
        <div className={styles.archedFrame}>
          {image ? (
            <Image
              src={image}
              alt={name}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className={styles.placeholder}></div>
          )}
        </div>


        <div className={styles.hoverActions}>
          <Link href={`/products/${id}`} className={styles.actionBtn} suppressHydrationWarning>
            View Details
          </Link>
        </div>

      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>{currency}{price ? price.toFixed(2) : "0.00"}</p>

        <div className={styles.footer}>
          <button
            className={styles.buyNowBtn}
            onClick={handleBuyNow}
            suppressHydrationWarning
          >
            Buy Now
          </button>
          <Link
            href="/contact"
            className={styles.contactBtn}
            suppressHydrationWarning
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}