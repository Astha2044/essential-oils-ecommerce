"use client";

import styles from "../styles/Product.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProductCard({ id, name, price, image }) {
  const router = useRouter();

  const handleBuyNow = (e) => {
    e.preventDefault();
    router.push("/products");
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
              width={350}
              height={400}
              className={styles.image}
            />
          ) : (
            <div className={styles.placeholder}></div>
          )}
        </div>

        <div className={styles.glassBadge}>
          <span>Best Seller</span>
        </div>

        <div className={styles.hoverActions}>
          <Link href={`/products/${id}`} className={styles.actionBtn} suppressHydrationWarning>
            View Details
          </Link>
        </div>

      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>

        <div className={styles.footer}>
          <p className={styles.price}>${price ? price.toFixed(2) : "0.00"}</p>
          <button
            onClick={handleBuyNow}
            className={styles.buyNowBtn}
            suppressHydrationWarning
          >
            Buy Now
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              router.push('/contact');
            }}
            className={styles.contactBtn}
            suppressHydrationWarning
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}