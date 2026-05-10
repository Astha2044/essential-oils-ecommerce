'use client';

import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { ALL_PRODUCTS } from "../data/products";
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
                <a href="https://www.facebook.com/vsnaturals" className={styles.socialIcon} aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://www.instagram.com/vsnaturals" className={styles.socialIcon} aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://twitter.com/vsnaturals" className={styles.socialIcon} aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                <a href="https://wa.me/1234567890" className={styles.socialIcon} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                <a href="https://www.youtube.com/vsnaturals" className={styles.socialIcon} aria-label="YouTube" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              </div>
            </div>

            {/* Links Grid beside brand */}
            <div className={styles.linksGrid}>
              <div className={styles.linksBlock}>
                <h4 className={styles.blockTitle}>Top Picks</h4>
                <ul className={styles.list}>
                  {ALL_PRODUCTS.slice(0, 5).map((product) => (
                    <li key={product.id}>
                      <Link href={`/products/${product.id}`}>
                        {product.name.replace(" Essential Oil", "")}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.linksBlock}>
                <h4 className={styles.blockTitle}>Specialties</h4>
                <ul className={styles.list}>
                  <li><Link href="/products?category=Essential Oils">Essential Oils</Link></li>
                  <li><Link href="/products?category=Fragrance Oil">Fragrance Oil</Link></li>
                  <li><Link href="/products?category=Hair Oil">Hair Oil</Link></li>
                  <li><Link href="/products?category=Carrier Oils">Carrier Oils</Link></li>
                </ul>
              </div>

              <div className={styles.linksBlock}>
                <h4 className={styles.blockTitle}>Support</h4>
                <ul className={styles.list}>
                  <li><Link href="/about">Our Story</Link></li>
                  <li><Link href="/contact">Get in Touch</Link></li>
                  <li><Link href="/blog">Oil Guide</Link></li>
                </ul>
              </div>

              <div className={styles.linksBlock}>
                <h4 className={styles.blockTitle}>Contact</h4>
                <ul className={styles.list}>
                  <li><a href="mailto:info@vsnaturals.com" className={styles.contactLink}>info@vsnaturals.com</a></li>
                  <li><a href="tel:+911234567890" className={styles.contactLink}>+91 12345 67890</a></li>
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
          <p>
            Copyright © All rights reserved | Made with ❤️ by{" "}
            <a href="https://www.smoothsyncinnovations.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none', fontWeight: '600' }}>
              Smoothsync Innovation
            </a>
          </p>
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