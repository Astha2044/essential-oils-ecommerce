'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { FiSearch, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { ALL_PRODUCTS } from "../data/products";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 150 && !isMobileMenuOpen && !isProductsDropdownOpen) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    setMounted(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen, isProductsDropdownOpen]);

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
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logoContainer} onClick={() => setIsMobileMenuOpen(false)}>
          <img src="/images/logo.png" alt="VS Naturals Logo" className={styles.logoIcon} />
          <div className={styles.logoTextWrapper}>
            <span className={styles.logoTitle}>VS Naturals</span>
            <span className={styles.logoSubtitle}>Pure Botanic Essence</span>
          </div>
        </Link>

        <div className={styles.mobileHeaderRight}>
          <div className={styles.iconBtn} onClick={() => setIsSearchOpen(true)}><FiSearch /></div>
          <div className={styles.mobileMenuBtn} onClick={toggleMenu}>
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className={styles.mobileOverlay} onClick={() => setIsMobileMenuOpen(false)} />
        )}

        <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
          <div className={styles.mobileMenuClose} onClick={() => setIsMobileMenuOpen(false)}>
            <FiX size={24} />
          </div>

          <div className={styles.navLinksInner}>
            <Link href="/" className={`${styles.navLink} ${isActive('/') ? styles.navLinkActive : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" className={`${styles.navLink} ${isActive('/about') ? styles.navLinkActive : ''}`} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>

            {/* Products Dropdown */}
            <div
              className={styles.dropdown}
              onMouseEnter={() => { if (window.innerWidth >= 1024) setIsProductsDropdownOpen(true); }}
              onMouseLeave={() => { if (window.innerWidth >= 1024) setIsProductsDropdownOpen(false); }}
            >
              <div className={styles.dropdownHeader}>
                {mounted && window.innerWidth >= 1024 ? (
                  <div className={`${styles.navLink} ${styles.dropdownToggle} ${isActive('/products') ? styles.navLinkActive : ''}`}>
                    <Link href="/products" className={styles.desktopLink} onClick={() => { setIsMobileMenuOpen(false); setIsProductsDropdownOpen(false); }}>
                      <span>Products</span>
                      <FiChevronDown className={`${styles.arrow} ${isProductsDropdownOpen ? styles.arrowActive : ''}`} />
                    </Link>
                  </div>
                ) : (
                  <div className={styles.mobileDropdownToggle}>
                    <Link 
                      href="/products" 
                      className={`${styles.navLink} ${isActive('/products') ? styles.navLinkActive : ''}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Products
                    </Link>
                    <button 
                      className={`${styles.mobileArrowToggle} ${isProductsDropdownOpen ? styles.arrowActive : ''} ${isActive('/products') ? styles.activeArrow : ''}`}
                      onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                      suppressHydrationWarning
                    >
                      <FiChevronDown />
                    </button>
                  </div>
                )}
              </div>

              {isProductsDropdownOpen && (
                <div className={styles.menu}>
                  <div className={styles.list}>
                    <Link
                      href="/products?category=Essential%20Oils"
                      className={styles.item}
                      onClick={() => {
                        setIsProductsDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Essential Oils
                    </Link>
                    <Link
                      href="/products?category=Candles"
                      className={styles.item}
                      onClick={() => {
                        setIsProductsDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Candles
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/benefits" className={`${styles.navLink} ${isActive('/benefits') ? styles.navLinkActive : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Benefits</Link>
            <Link href="/blog" className={`${styles.navLink} ${isActive('/blog') ? styles.navLinkActive : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
          </div>

          <div className={styles.mobileActions}>
            <Link href="/contact" className={styles.signInBtnMobile} onClick={() => setIsMobileMenuOpen(false)} suppressHydrationWarning>
              Contact Us
            </Link>
          </div>
        </div>

        <div className={styles.actions}>
          <div className={styles.iconBtn} onClick={() => setIsSearchOpen(true)}><FiSearch /></div>
          <Link href="/contact" className={styles.signInBtn} suppressHydrationWarning>Contact Us</Link>
        </div>
      </div>

      {isSearchOpen && (
        <div className={styles.searchOverlay}>
          <div className={styles.searchContainer}>
            <div className={styles.searchInputWrapper}>
              <FiSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search for oils, blends, or benefits..."
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                suppressHydrationWarning
              />
              <FiX className={styles.closeSearch} onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }} />
            </div>

            {searchQuery && (
              <div className={styles.searchResults}>
                {ALL_PRODUCTS.filter(p =>
                  p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  p.note.toLowerCase().includes(searchQuery.toLowerCase())
                ).slice(0, 5).map(p => (
                  <Link href={`/products/${p.id}`} key={p.id} className={styles.searchResultItem} onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}>
                    <img src={p.image} alt={p.name} className={styles.searchResultImage} />
                    <div className={styles.searchResultInfo}>
                      <h4>{p.name}</h4>
                      <p>{p.note}</p>
                    </div>
                  </Link>
                ))}
                {ALL_PRODUCTS.filter(p =>
                  p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  p.note.toLowerCase().includes(searchQuery.toLowerCase())
                ).length === 0 && (
                    <div className={styles.noResults}>No products found for "{searchQuery}"</div>
                  )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}