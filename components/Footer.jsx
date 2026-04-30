import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaYoutube } from "react-icons/fa";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Main Content Area */}
        <div className={styles.mainContent}>
          
          <div className={styles.leftCol}>
            <h2 className={styles.brandTitle}>VS Natural & Essentials</h2>
            
            <div className={styles.linksGrid}>
              <div className={styles.linksBlock}>
                <h4 className={styles.blockTitle}>Quick links</h4>
                <ul className={styles.list}>
                  <li><a href="#">Shop All</a></li>
                  <li><a href="#">New Arrivals</a></li>
                  <li><a href="#">Bestsellers</a></li>
                </ul>
              </div>

              <div className={styles.linksBlock}>
                <ul className={styles.list} style={{ marginTop: '1.75rem' }}>
                  <li><a href="#">Lavender Collection</a></li>
                  <li><a href="#">Peppermint Collection</a></li>
                  <li><a href="#">Bergamot Collection</a></li>
                </ul>
              </div>

              <div className={styles.linksBlock}>
                <ul className={styles.list} style={{ marginTop: '1.75rem' }}>
                  <li><a href="#">Wellness Hub</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                  {/* <li><a href="#">Privacy</a></li> */}
                </ul>
              </div>
            </div>

            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}><FaFacebookF /></a>
              <a href="#" className={styles.socialIcon}><FaInstagram /></a>
              <a href="#" className={styles.socialIcon}><FaTwitter /></a>
              <a href="#" className={styles.socialIcon}><FaPinterestP /></a>
              <a href="#" className={styles.socialIcon}><FaYoutube /></a>
            </div>
          </div>

          <div className={styles.rightCol}>
            <h4 className={styles.blockTitle}>Subscribe to our Newsletter</h4>
            <div className={styles.newsletter}>
              <input type="email" placeholder="Enter your email" className={styles.emailInput} suppressHydrationWarning />
              <button className={styles.subscribeBtn} suppressHydrationWarning>Subscribe</button>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className={styles.bottomBar}>
          <p>Copyright © 2026 VS Naturals & Essentials</p>
          <div className={styles.legalLinks}>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Guide</a>
          </div>
        </div>

      </div>
    </footer>
  );
}