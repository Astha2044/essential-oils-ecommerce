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
      
      {/* Logo */}
      <div className={styles.logoContainer}>
        <img src="/images/logo.png" alt="VS Naturals Logo" className={styles.logoIcon} />
      </div>

      {/* Hamburger Menu Icon (Mobile Only) */}
      <div className={styles.mobileMenuBtn} onClick={toggleMenu}>
        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={styles.mobileOverlay} onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Centered Links (Desktop + Mobile overlay) */}
      <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
        <Link href="/" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <Link href="/about" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
        <Link href="/products" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
        <Link href="/help" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Help</Link>
        <Link href="/contact" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        
        {/* Actions for Mobile inside menu */}
        <div className={styles.mobileActions}>
          <button className={styles.signInBtn} suppressHydrationWarning>
            Sign In
          </button>
        </div>
      </div>

      {/* Actions (Desktop Right) */}
      <div className={styles.actions}>
        <div className={styles.iconBtn}><FiSearch /></div>
        <div className={styles.iconBtn}><FiShoppingCart /></div>
        <div className={styles.iconBtn}><FiHeart /></div>
        <button className={styles.signInBtn} suppressHydrationWarning>Sign In</button>
      </div>

    </nav>
  );
}