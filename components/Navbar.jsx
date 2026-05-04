'use client';

import { useState } from "react";
import Link from "next/link";
import { FiSearch, FiShoppingCart, FiHeart, FiMenu, FiX } from "react-icons/fi";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>

      <div className={styles.logoContainer}>
        <img src="/images/logo.png" alt="VS Naturals Logo" className={styles.logoIcon} />
      </div>

      <div className={styles.mobileMenuBtn} onClick={toggleMenu}>
        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileOverlay} onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
        <Link href="/" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link href="/about" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
        <Link href="/products" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
        <Link href="/benefits" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Benefits</Link>
        <Link href="/how-it-works" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>How it works</Link>
        <Link href="/blog" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
        <Link href="/contact" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

        <div className={styles.mobileActions}>
          <button className={styles.signInBtn} suppressHydrationWarning>
            Sign In
          </button>
        </div>
      </div>

      <div className={styles.actions}>
        <div className={styles.iconBtn}><FiSearch /></div>
        <div className={styles.iconBtn}><FiShoppingCart /></div>
        <div className={styles.iconBtn}><FiHeart /></div>
        <button className={styles.signInBtn} suppressHydrationWarning>Sign In</button>
      </div>

    </nav>
  );
}