"use client";

import { useEffect } from "react";
import { FaStar, FaExternalLinkAlt, FaGoogle } from "react-icons/fa";
import styles from "../styles/Testimonial.module.css";

export default function Testimonial() {
  const defaultLocationLink = process.env.NEXT_PUBLIC_GOOGLE_LOCATION_LINK || "https://share.google/S9AoDFRkzoOCADefs";

  useEffect(() => {
    // Load Featurable script for 100% Live Auto-Syncing Google Reviews
    const existingScript = document.querySelector('script[src="https://cdn.featurable.com/widget/v2/embed.js"]');
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://cdn.featurable.com/widget/v2/embed.js";
      script.defer = true;
      script.charset = "UTF-8";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className={styles.section} suppressHydrationWarning>
      <div className={styles.container}>
        <div className={styles.darkBanner}>

          {/* Main Title */}
          <h2 className={styles.mainTitle}>What Our Customers Say</h2>

          {/* Top Rating Summary Banner */}
          <div className={styles.summaryBanner}>
            <div className={styles.summaryLeft}>
              <span className={styles.scoreNumber}>5.0</span>
              <div className={styles.scoreMeta}>
                <div className={styles.starsRow}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={15} className={styles.starGold} />
                  ))}
                </div>
                <div className={styles.googleBrandLabel}>
                  <span className={styles.googleBrandText}>Google</span> Rating
                </div>
              </div>
              <span className={styles.reviewCountText}>Live Google Reviews</span>
            </div>

            <a
              href={defaultLocationLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.writeReviewBtn}
            >
              <FaGoogle size={14} style={{ color: "#4285F4" }} />
              <span>Review us on Google</span>
              <FaExternalLinkAlt size={11} />
            </a>
          </div>

          {/* Direct 100% Live Google Reviews Widget Styled into Theme */}
          <div className={styles.liveWidgetFrame}>
            <div id="featurable-264d6a37-4f02-4872-ba5b-54b7701d4df3" data-featurable-async></div>
          </div>

        </div>
      </div>
    </section>
  );
}