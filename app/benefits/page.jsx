"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/BenefitsPage.module.css";
import { 
  FaFaceSmile, 
  FaMagnifyingGlass, 
  FaHeadSideVirus, 
  FaLeaf, 
  FaBolt, 
  FaWind 
} from "react-icons/fa6";

const BENEFITS_DATA = [
  { 
    title: "Relieves Stress", 
    text: "Helps calm the mind and reduces stress.", 
    icon: <FaFaceSmile /> 
  },
  { 
    title: "Improves Focus", 
    text: "Enhances concentration and mental clarity.", 
    icon: <FaMagnifyingGlass /> 
  },
  { 
    title: "Relieves Headaches", 
    text: "Soothes tension and reduces headache discomfort.", 
    icon: <FaHeadSideVirus /> 
  },
  { 
    title: "Supports Digestion", 
    text: "Promotes healthy digestion and soothes discomfort.", 
    icon: <FaLeaf /> 
  },
  { 
    title: "Boosts Energy", 
    text: "Naturally energizes the body and reduces fatigue.", 
    icon: <FaBolt /> 
  },
  { 
    title: "Supports Respiratory", 
    text: "Clears nasal passages and supports easy breathing.", 
    icon: <FaWind /> 
  }
];

export default function BenefitsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.pageWrapper}>
        <div className={styles.container}>
          {/* Header Section */}
          <div className={styles.header}>
            <h1 className={styles.title}>Benefits of Peppermint Oil</h1>
            <div className={styles.decoration}>🌿</div>
          </div>

          {/* Perfect Grid Section */}
          <div className={styles.grid}>
            {BENEFITS_DATA.map((item, idx) => (
              <div 
                key={idx} 
                className={styles.benefitItem}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={styles.iconWrapper}>
                  {item.icon}
                </div>
                <h3 className={styles.benefitTitle}>{item.title}</h3>
                <p className={styles.benefitText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
