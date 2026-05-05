'use client';

import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.mainContent}>

          <div className={styles.leftCol}>

            {/* Brand + Social as one unit */}
            <div className={styles.brandCol}>
              <div className={styles.footerBrand}>
                <Link href="/">
                  <img src="/images/logo.png" alt="VS Naturals Logo" className={styles.footerLogo} />
                </Link>
              </div>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon}><FaFacebookF /></a>
                <a href="#" className={styles.socialIcon}><FaInstagram /></a>
                <a href="#" className={styles.socialIcon}><FaTwitter /></a>
                <a href="#" className={styles.socialIcon}><FaWhatsapp /></a>
                <a href="#" className={styles.socialIcon}><FaYoutube /></a>
              </div>
            </div>

            {/* Links Grid beside brand */}
            <div className={styles.linksGrid}>
              <div className={styles.linksBlock}>
                <h4 className={styles.blockTitle}>Quick Links</h4>
                <ul className={styles.list}>
                  <li><Link href="/products">Shop All</Link></li>
                  <li><Link href="/products">New Arrivals</Link></li>
                  <li><Link href="/products">Bestsellers</Link></li>
                </ul>
              </div>

              <div className={styles.linksBlock}>
                <h4 className={styles.blockTitle}>Collections</h4>
                <ul className={styles.list}>
                  <li><Link href="/products">Lavender Collection</Link></li>
                  <li><Link href="/products">Peppermint Collection</Link></li>
                  <li><Link href="/products">Bergamot Collection</Link></li>
                </ul>
              </div>

              <div className={styles.linksBlock}>
                <h4 className={styles.blockTitle}>Company</h4>
                <ul className={styles.list}>
                  <li><Link href="/blog">Wellness Hub</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>

          </div>

          <div className={styles.rightCol}>
            <h4 className={styles.blockTitle}>Subscribe to our Newsletter</h4>
            <div className={styles.newsletter}>
              <input type="email" placeholder="Enter your email" className={styles.emailInput} suppressHydrationWarning />
              <button className={styles.subscribeBtn} onClick={handleSubscribe} suppressHydrationWarning>Subscribe</button>
            </div>
          </div>

        </div>

        <div className={styles.bottomBar}>
          <p>Copyright © 2026 VS Naturals & Essentials</p>
          <div className={styles.legalLinks}>
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/how-it-works">Guide</Link>
          </div>
        </div>

      </div>

      {showPopup && (
        <div className={styles.popup}>
          Successfully Subscribed!
        </div>
      )}
    </footer>
  );
}