import styles from "../styles/Hero.module.css";
import { FaLeaf, FaDroplet, FaSpa, FaFlask } from "react-icons/fa6";
import { FiArrowRight } from "react-icons/fi";
import { PiPlantLight } from "react-icons/pi"; // For the decorative icon if needed

export default function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.textContent}>
        <h1 className={styles.title}>
          Pure Peppermint<br />Essential Oil
        </h1>

        <div className={styles.divider}>
          <div className={styles.line}></div>
          <PiPlantLight className={styles.decorativeIcon} />
          <div className={styles.line}></div>
        </div>

        <p className={styles.subtitle}>
          Refresh your senses and revitalize your everyday with the natural goodness of peppermint.
        </p>

        <div className={styles.features}>
          <div className={styles.featureItem}>
            <div className={styles.iconCircle}><FaLeaf /></div>
            <span>100% Pure<br />& Natural</span>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.iconCircle}><FaDroplet /></div>
            <span>Steam<br />Distilled</span>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.iconCircle}><FaSpa /></div>
            <span>Therapeutic<br />Grade</span>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.iconCircle}><FaFlask /></div>
            <span>No Additives<br />or Fillers</span>
          </div>
        </div>

        <div className={styles.buttons}>
          <button className={styles.primaryBtn} suppressHydrationWarning>
            SHOP NOW <FiArrowRight className={styles.btnIcon} />
          </button>

          <button className={styles.secondaryBtn} suppressHydrationWarning>
            Learn More
          </button>
        </div>

        {/* <p className={styles.infoText}>
          Detailed information about our extraction process.
        </p> */}
      </div>

    </section>
  );
}