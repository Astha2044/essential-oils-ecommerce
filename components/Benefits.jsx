import { FaDroplet, FaWind, FaSun, FaClock, FaLeaf, FaShieldHeart } from "react-icons/fa6";
import styles from "../styles/Benefits.module.css";

const benefits = [
  {
    title: "Deep Hydration",
    desc: "Keep your skin hydrated and glowing all day long with our nutrient-rich formulas.",
    icon: <FaDroplet size={24} />
  },
  {
    title: "Calming Effect",
    desc: "Relieve stress and tension with the soothing power of pure aromatherapy.",
    icon: <FaWind size={24} />
  },
  {
    title: "Natural Glow",
    desc: "Achieve a healthy, radiant complexion naturally with botanical extracts.",
    icon: <FaSun size={24} />
  },
  {
    title: "Anti-Aging",
    desc: "Reduce the appearance of fine lines and wrinkles with powerful antioxidants.",
    icon: <FaClock size={24} />
  },
  {
    title: "Pure & Organic",
    desc: "No harsh chemicals, only 100% pure and organic botanical extracts for your skin.",
    icon: <FaLeaf size={24} />
  },
  {
    title: "Quick Absorption",
    desc: "Our non-greasy formula absorbs quickly, leaving your skin soft and smooth.",
    icon: <FaShieldHeart size={24} />
  }
];

export default function Benefits() {
  // Split benefits for layout: 3 on left, 3 on right
  const leftBenefits = benefits.slice(0, 3);
  const rightBenefits = benefits.slice(3, 6);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>What are The Benefits of Using This Product</h2>
        <p className={styles.subtitle}>
          Discover the natural power of our essential oils and how they can transform your daily self-care routine.
        </p>
      </div>

      <div className={styles.content}>
        {/* Left Column */}
        <div className={styles.column}>
          {leftBenefits.map((item, idx) => (
            <div key={idx} className={styles.benefitItem}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <div className={styles.itemText}>
                <h4 className={styles.itemTitle}>{item.title}</h4>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className={styles.centerColumn}>
          <div className={styles.imageWrapper}>
            <img src="/images/eucalyptus_bottle.png" alt="Essential Oil Bottle" className={styles.centerImage} />
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.column}>
          {rightBenefits.map((item, idx) => (
            <div key={idx} className={styles.benefitItem}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <div className={styles.itemText}>
                <h4 className={styles.itemTitle}>{item.title}</h4>
                <p className={styles.itemDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}