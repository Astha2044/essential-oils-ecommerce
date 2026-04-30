import styles from "../styles/Product.module.css";

export default function ProductCard({ name, price, image }) {
  return (
    <div className={styles.card}>
      
      <div className={styles.imageContainer}>
        {image ? (
          <img src={image} alt={name} className={styles.image} />
        ) : (
          <div className={styles.placeholder}></div>
        )}
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>${price.toFixed(2)}</p>
      </div>

      <div className={styles.actions}>
        <button className={styles.addToCartBtn} suppressHydrationWarning>Add to Cart</button>
        <a href="#" className={styles.shopNowLink}>Shop Now</a>
      </div>

    </div>
  );
}