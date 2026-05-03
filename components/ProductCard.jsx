import styles from "../styles/Product.module.css";
import Image from "next/image";
import { FiShoppingCart, FiEye } from "react-icons/fi";

export default function ProductCard({ name, price, image }) {
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
          <button className={styles.actionBtn} title="Quick View" suppressHydrationWarning><FiEye /></button>
          <button className={styles.actionBtn} title="Add to Cart" suppressHydrationWarning><FiShoppingCart /></button>
        </div>
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.footer}>
          <p className={styles.price}>${price ? price.toFixed(2) : "0.00"}</p>
          <button className={styles.buyNowBtn} suppressHydrationWarning>Buy Now</button>
        </div>
      </div>
    </div>
  );
}