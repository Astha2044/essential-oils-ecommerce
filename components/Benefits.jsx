import { FaFaceSmile, FaDroplet, FaWind, FaSun, FaClock, FaHeartPulse } from "react-icons/fa6";
import styles from "../styles/BenefitsHero.module.css";

const leftBenefits = [
  {
    title: "Revitalize The Skin",
    desc: "Reduces wrinkles and prevents dryness.",
    icon: <FaFaceSmile />
  },
  {
    title: "Deep Hydration",
    desc: "Locks in moisture to prevent dryness.",
    icon: <FaDroplet />
  },
  {
    title: "Improves Skin Texture",
    desc: "Reduces rough patches and blemishes.",
    icon: <FaWind />
  }
];

const rightBenefits = [
  {
    title: "Enhances Skin Glow",
    desc: "Provides a natural, healthy glow.",
    icon: <FaSun />
  },
  {
    title: "Anti-Aging Benefits",
    desc: "Rejuvenates fine lines and wrinkles.",
    icon: <FaClock />
  },
  {
    title: "Great for Massages",
    desc: "Enhances massage experience by providing smooth application.",
    icon: <FaHeartPulse />
  }
];

export default function Benefits() {
  return (
    <section className={styles.benefitsContainer}>
      <div className={styles.header}>
        <h2 className={styles.mainTitle}>What are The Benefits of Using This Product</h2>
        <p className={styles.mainSubtitle}>
          Because of its numerous benefits for the physical overall well-being, here are some main advantages of using essential oil.
        </p>
      </div>

      <div className={styles.contentWrapper}>
        <div className={`${styles.column} ${styles.columnLeft}`}>
          {leftBenefits.map((item, idx) => (
            <div
              key={idx}
              className={styles.benefitItem}
              style={{ animationDelay: `${0.2 * idx}s` }}
            >
              <div className={styles.iconCircle}>
                {item.icon}
              </div>
              <h3 className={styles.benefitTitle}>{item.title}</h3>
              <p className={styles.benefitText}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className={styles.centerColumn}>
          <div className={styles.imageBox}>
            <img
              src="/images/ref.jpeg"
              alt="Peppermint Essential Oil"
              className={styles.centerImage}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className={`${styles.column} ${styles.columnRight}`}>
          {rightBenefits.map((item, idx) => (
            <div
              key={idx}
              className={styles.benefitItem}
              style={{ animationDelay: `${0.2 * (idx + 3)}s` }}
            >
              <div className={styles.iconCircle}>
                {item.icon}
              </div>
              <h3 className={styles.benefitTitle}>{item.title}</h3>
              <p className={styles.benefitText}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}