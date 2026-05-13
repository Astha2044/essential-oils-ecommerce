"use client";

import { useState, useEffect } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa6";
import styles from "../styles/FloatingActions.module.css";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={styles.floatingContainer}>
      {/* Scroll to Top Button (Stays at the very bottom visually) */}
      <button
        onClick={scrollToTop}
        className={`${styles.scrollTopBtn} ${isVisible ? styles.show : ""}`}
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>

      {/* WhatsApp Button (Sits above Scroll-to-Top, or at bottom if Scroll-to-Top is hidden) */}
      {/* <a
        href="https://wa.me/919213638440"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappBtn}
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp />
      </a> */}
    </div>
  );
}
