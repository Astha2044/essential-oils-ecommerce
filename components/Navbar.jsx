'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { ALL_PRODUCTS } from "../data/products";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Transition to scrolled state after 20px
      const isScrolled = currentScrollY > 20;
      setScrolled(isScrolled);

      // Smart Hide/Show logic (prevent hiding if dropdown is open)
      if (isScrolled && !isProductsDropdownOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 150) {
          setIsVisible(false); // Scrolling down
        } else {
          setIsVisible(true); // Scrolling up
        }
      } else {
        setIsVisible(true); // Always visible at the top or when interacting with dropdown
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isProductsDropdownOpen]);



  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${isVisible ? '' : styles.hidden}`}>
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

            <div
              className={styles.dropdown}
              onMouseEnter={() => {
                if (window.innerWidth >= 1024) setIsProductsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 1024) setIsProductsDropdownOpen(false);
              }}
            >
              <div className={styles.navItemWrapper}>
                {/* Desktop View: Original Structure */}
                <Link
                  href="/products"
                  className={`${styles.navLink} ${styles.desktopOnly} ${isActive('/products') ? styles.navLinkActive : ''}`}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsProductsDropdownOpen(false);
                  }}
                >
                  Products <FiChevronDown className={`${styles.arrow} ${isProductsDropdownOpen ? styles.arrowActive : ''}`} />
                </Link>

                {/* Mobile View: Dual Interaction Structure */}
                <div className={`${styles.dropdownLinkWrapper} ${styles.mobileOnly}`}>
                  <Link
                    href="/products"
                    className={`${styles.navLink} ${isActive('/products') ? styles.navLinkActive : ''}`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsProductsDropdownOpen(false);
                    }}
                  >
                    Products
                  </Link>
                  <div 
                    className={`${styles.arrowToggle} ${isProductsDropdownOpen ? styles.arrowActive : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsProductsDropdownOpen(!isProductsDropdownOpen);
                    }}
                  >
                    <FiChevronDown className={styles.arrow} />
                  </div>
                </div>
              </div>

              {isProductsDropdownOpen && (
                <div className={styles.menu}>
                  <div className={styles.list}>
                    <Link
                      href="/products"
                      className={styles.item}
                      style={{ borderBottom: '1px solid rgba(0,0,0,0.05)', fontWeight: '600' }}
                      onClick={() => {
                        setIsProductsDropdownOpen(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Shop All Products
                    </Link>
                    {ALL_PRODUCTS.slice(0, 10).map((product) => (
                      <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className={styles.item}
                        onClick={() => {
                          setIsProductsDropdownOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {product.name.replace(" Essential Oil", "")}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/benefits" className={`${styles.navLink} ${isActive('/benefits') ? styles.navLinkActive : ''}`} onClick={() => setIsMobileMenuOpen(false)}>Benefits</Link>
            {/* <Link href="/how-it-works" className={`${styles.navLink} ${isActive('/how-it-works') ? styles.navLinkActive : ''}`} onClick={() => setIsMobileMenuOpen(false)}>How it works</Link> */}
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
              />
              <FiX className={styles.closeSearch} onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }} />
            </div>

            {searchQuery && (
              <div className={styles.searchResults}>
                {ALL_PRODUCTS.filter(p =>
                  p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  p.benefits.some(b => b.toLowerCase().includes(searchQuery.toLowerCase())) ||
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
                  p.benefits.some(b => b.toLowerCase().includes(searchQuery.toLowerCase())) ||
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