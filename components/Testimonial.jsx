"use client";

import { useEffect } from "react";
import { FaStar, FaExternalLinkAlt, FaGoogle } from "react-icons/fa";
import styles from "../styles/Testimonial.module.css";

export default function Testimonial() {
  const defaultLocationLink = process.env.NEXT_PUBLIC_GOOGLE_LOCATION_LINK || "https://share.google/S9AoDFRkzoOCADefs";

  useEffect(() => {
    // Load Elfsight Platform Script for Live Auto-Syncing Google Reviews
    const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className={styles.section} suppressHydrationWarning>
      <div className={styles.container}>
        <div className={styles.darkBanner}>

          {/* Main Title */}
          <h2 className={styles.mainTitle}>What Our Customers Say</h2>

          {/* Direct 100% Live Elfsight Google Reviews Widget */}
          <div className={styles.liveWidgetFrame}>
            <div className="elfsight-app-3cfff90e-c703-4e6f-bf14-6e4f51c03dbc" data-elfsight-app-lazy></div>
          </div>

        </div>
      </div>
    </section>
  );
}