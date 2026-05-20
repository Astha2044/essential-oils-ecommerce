'use client';

import { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaLocationDot
} from "react-icons/fa6";
import { ALL_PRODUCTS } from "../data/products";
import styles from "../styles/Footer.module.css";
import { sendToGoogleSheet } from "../services/newsletter";

export default function Footer() {
  const [showPopup, setShowPopup] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const toggleAccordion = (index) => {
    if (window.innerWidth < 768) {
      setActiveAccordion(activeAccordion === index ? null : index);
    }
  };

  const handleSubscribe = async () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setShowPopup(true);

    const success = await sendToGoogleSheet({ 
      email, 
      source: "Footer Newsletter" 
    });

    if (success) {
      setStatus("success");
      setEmail("");
      setTimeout(() => {
        setShowPopup(false);
        setStatus("idle");
      }, 3000);
    } else {
      setStatus("error");
      setTimeout(() => setShowPopup(false), 5000);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        <div className={styles.mainContent}>
          {/* Brand + Social */}
          <div className={styles.brandCol}>
            <div className={styles.footerBrand}>
              <Link href="/">
                <img src="/images/logo.png" alt="VS Naturals Logo" className={styles.footerLogo} />
              </Link>
            </div>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/vsnaturals" className={styles.socialIcon} aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.instagram.com/vsnaturalsandessentials/" className={styles.socialIcon} aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://wa.me/919213638440" className={styles.socialIcon} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Link Blocks */}
          <div className={`${styles.linksBlock} ${activeAccordion === 0 ? styles.active : ""}`}>
            <h4 className={styles.blockTitle} onClick={() => toggleAccordion(0)}>
              <Link href="/products">Top Picks</Link>
            </h4>
            <div className={styles.accordionContent}>
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
          </div>

          <div className={`${styles.linksBlock} ${activeAccordion === 1 ? styles.active : ""}`}>
            <h4 className={styles.blockTitle} onClick={() => toggleAccordion(1)}>
              <Link href="/products">Specialties</Link>
            </h4>
            <div className={styles.accordionContent}>
              <ul className={styles.list}>
                <li><Link href="/products?category=Essential Oils">Essential Oils</Link></li>
                <li><Link href="/products?category=Fragrance Oil">Fragrance Oil</Link></li>
                <li><Link href="/products?category=Hair Oil">Hair Oil</Link></li>
                <li><Link href="/products?category=Carrier Oils">Carrier Oils</Link></li>
              </ul>
            </div>
          </div>

          <div className={`${styles.linksBlock} ${activeAccordion === 2 ? styles.active : ""}`}>
            <h4 className={styles.blockTitle} onClick={() => toggleAccordion(2)}>
              <Link href="/about">Support</Link>
            </h4>
            <div className={styles.accordionContent}>
              <ul className={styles.list}>
                <li><Link href="/about">Our Story</Link></li>
                <li><Link href="/contact">Get in Touch</Link></li>
                <li><Link href="/blog">Oil Guide</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Us (with complete dynamic address) */}
          <div className={`${styles.linksBlock} ${activeAccordion === 3 ? styles.active : ""}`}>
            <h4 className={styles.blockTitle} onClick={() => toggleAccordion(3)}>
              <Link href="/contact">Contact Us</Link>
            </h4>
            <div className={styles.accordionContent}>
              <ul className={styles.list}>
                <li>
                  <a href="mailto:contact@vsnaturalsandessentials.com" className={styles.contactItem}>
                    <span className={styles.iconWrapper}><FaEnvelope /></span>
                    <span>contact@vsnaturalsandessentials.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+919213638440" className={styles.contactItem}>
                    <span className={styles.iconWrapper}><FaPhone /></span>
                    <span>+91 92136 38440</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=3rd%20floor%2C%20B%2F14%20Navrang%20society%2C%20opp.%20Savliya%20pumping%20station%2C%20Mai%20Mandir%20Road%2C%20Nadiad" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={styles.contactItem}
                  >
                    <span className={styles.iconWrapper}><FaLocationDot /></span>
                    <span>
                      3rd floor, B/14 Navrang society,<br />
                      opp. Savliya pumping station,<br />
                      Mai Mandir Road, Nadiad
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletterCol}>
            <h4 className={styles.blockTitle}>Join our Community</h4>
            <p className={styles.newsletterText}>Subscribe for exclusive offers and natural wellness tips.</p>
            <div className={styles.newsletter}>
              <input
                type="email"
                placeholder="Enter your email"
                className={styles.emailInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                suppressHydrationWarning
              />
              <button
                className={styles.subscribeBtn}
                onClick={handleSubscribe}
                disabled={status === "loading"}
                suppressHydrationWarning
              >
                {status === "loading" ? "Joining..." : "Subscribe"}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            {/* <span className={styles.copyrightBrandMark}>VS</span> */}
            <span>
              Copyright © All rights reserved | Made with ❤️ by{" "}
              <a href="https://www.smoothsyncinnovations.com/" target="_blank" rel="noopener noreferrer" className={styles.developerLink}>
                Smoothsync Innovation
              </a>
            </span>
          </div>
          <div className={styles.legalLinks}>
            <Link href="/terms">Terms</Link>
            <span className={styles.separator}>|</span>
            <Link href="/privacy">Privacy</Link>
            <span className={styles.separator}>|</span>
            <Link href="/how-it-works">Guide</Link>
          </div>
        </div>

      </div>

      {showPopup && (
        <div className={`${styles.popup} ${status === "error" ? styles.errorPopup : ""}`}>
          {status === "loading" && "Processing..."}
          {status === "success" && "Successfully Subscribed!"}
          {status === "error" && "Oops! Something went wrong. Try again later."}
        </div>
      )}
    </footer>
  );
}