"use client";

import styles from "../styles/Product.module.css";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ id, name, price, image, currency = "$" }) {

  const handleBuyNow = (e) => {
    e.preventDefault();
    const whatsappNumber = "919213638440";
    const message = `Hi, I'm interested in ${name}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };


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
          {/* 
            When the product is ready, uncomment this button and remove the "Coming Soon" button below it:
            
            <button
              className={styles.buyNowBtn}
              onClick={handleBuyNow}
              suppressHydrationWarning
            >
              Buy Now
            </button>
          */}
          <button
            className={styles.buyNowBtn}
            disabled
            suppressHydrationWarning
          >
            Coming Soon
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