'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 150 && !isMobileMenuOpen) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${isHidden ? styles.hidden : ''}`}>

      <div className={styles.logoContainer}>
        <img src="/images/logo.png" alt="VS Naturals Logo" className={styles.logoIcon} />
      </div>

      <div className={styles.mobileHeaderRight}>
        <div className={styles.iconBtn}><FiSearch /></div>
        <div className={styles.mobileMenuBtn} onClick={toggleMenu}>
          <FiMenu size={24} />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileOverlay} onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
        <div className={styles.mobileDrawerHeader}>
          <img src="/images/logo.png" alt="VS Naturals Logo" className={styles.mobileDrawerLogo} />
          <div className={styles.closeBtn} onClick={() => setIsMobileMenuOpen(false)}>
            <FiX size={24} />
          </div>
        </div>
        <div className={styles.navLinksInner}>
          <Link href="/" className={`${styles.navLink} ${isActive('/') ? styles.navLinkActive : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className={`${styles.navLink} ${isActive('/about') ? styles.navLinkActive : ''}`} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link href="/products" className={`${styles.navLink} ${isActive('/products') ? styles.navLinkActive : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
          <Link href="/benefits" className={`${styles.navLink} ${isActive('/benefits') ? styles.navLinkActive : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Benefits</Link>
          <Link href="/how-it-works" className={`${styles.navLink} ${isActive('/how-it-works') ? styles.navLinkActive : ''}`} onClick={() => setIsMobileMenuOpen(false)}>How it works</Link>
          <Link href="/blog" className={`${styles.navLink} ${isActive('/blog') ? styles.navLinkActive : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
        </div>
        <div className={styles.mobileActions}>
          <Link href="/contact" className={styles.signInBtnMobile} onClick={() => setIsMobileMenuOpen(false)} suppressHydrationWarning>
            Contact Us
          </Link>
        </div>
      </div>

      <div className={styles.actions}>
        <div className={styles.iconBtn}><FiSearch /></div>
        <Link href="/contact" className={styles.signInBtn} suppressHydrationWarning>Contact Us</Link>
      </div>

    </nav>
  );
}