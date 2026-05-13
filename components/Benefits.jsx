import { FaFaceSmile, FaDroplet, FaWind, FaSun, FaClock, FaHeartPulse } from "react-icons/fa6";
import styles from "../styles/BenefitsHero.module.css";
import Image from "next/image";

const leftBenefits = [
  {
    title: "Revitalize The Skin",
    desc: "Reduces wrinkles and prevents dryness with potent botanical antioxidants.",
    icon: <FaFaceSmile />
  },
  {
    title: "Deep Hydration",
    desc: "Locks in moisture to prevent dryness and maintain a supple glow.",
    icon: <FaDroplet />
  },
  {
    title: "Refined Texture",
    desc: "Reduces rough patches and blemishes for a smooth, porcelain finish.",
    icon: <FaWind />
  }
];

const rightBenefits = [
  {
    title: "Luminous Glow",
    desc: "Provides a natural, healthy radiance that shines from within.",
    icon: <FaSun />
  },
  {
    title: "Timeless Beauty",
    desc: "Rejuvenates fine lines and restores the skin's youthful elasticity.",
    icon: <FaClock />
  },
  {
    title: "Zen Massages",
    desc: "Enhances your ritual by providing a silky, therapeutic application.",
    icon: <FaHeartPulse />
  }
];

export default function Benefits() {
  return (
    <section className={styles.benefitsContainer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.preTitle}>Our Philosophy</span>
          <h2 className={styles.mainTitle}>Botanical Wisdom for Soil & Soul</h2>
          <p className={styles.mainSubtitle}>
            Our Essentials oils are meticulously extracted to preserve nature's most potent healing properties, offering transformative benefits for your daily wellness ritual.
          </p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={`${styles.column} ${styles.columnLeft}`}>
            {leftBenefits.map((item, idx) => (
              <div
                key={idx}
                className={styles.benefitItem}
              >
                <div className={styles.iconWrapper}>
                  <div className={styles.iconDecoration}></div>
                  <div className={styles.iconArchedFrame}>
                    {item.icon}
                  </div>
                </div>
                <div className={styles.benefitTextContent}>
                  <h3 className={styles.benefitTitle}>{item.title}</h3>
                  <p className={styles.benefitText}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.centerColumn}>
            <div className={styles.imageBox}>
              <div className={styles.archedImageFrame}>
                <Image
                  src="/images/ref.jpeg"
                  alt="Peppermint Essential Oil"
                  width={500}
                  height={700}
                  className={styles.centerImage}
                />
              </div>
              <div className={styles.imageBloomingDecoration}></div>
            </div>
          </div>

          <div className={`${styles.column} ${styles.columnRight}`}>
            {rightBenefits.map((item, idx) => (
              <div
                key={idx}
                className={styles.benefitItem}
              >
                <div className={styles.iconWrapper}>
                  <div className={styles.iconDecoration}></div>
                  <div className={styles.iconArchedFrame}>
                    {item.icon}
                  </div>
                </div>
                <div className={styles.benefitTextContent}>
                  <h3 className={styles.benefitTitle}>{item.title}</h3>
                  <p className={styles.benefitText}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}