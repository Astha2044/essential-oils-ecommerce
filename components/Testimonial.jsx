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

    // Inject High-Priority Desktop & Responsive Global Styles to Eliminate Speech Bubble Seams
    const styleId = "elfsight-desktop-tail-fix";
    let styleEl = document.getElementById(styleId);
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = styleId;
      document.head.appendChild(styleEl);
    }

    styleEl.innerHTML = `
      /* --- DESKTOP & UNIVERSAL FIX FOR ELFSIGHT SPEECH BUBBLE TAIL SEAM --- */
      
      /* 1. Remove border, outline, & gap from card containers on all devices */
      div[class*="ReviewBackground"],
      div[class*="es-review-background-container"],
      div[class*="es-review-bubble"],
      div[class*="es-review-card"],
      div[class*="BubbleComponent"] {
        border: none !important;
        border-color: transparent !important;
        outline: none !important;
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04) !important;
        background-color: #fbf8f3 !important;
      }

      /* 2. Tail Wrapper Container - Transparent & Forced Deep Overlap */
      div[class*="Arrow"],
      div[class*="arrow"],
      div[class*="Tip"],
      div[class*="tip"],
      div[class*="Tail"],
      div[class*="tail"],
      div[class*="Corner"],
      div[class*="corner"],
      [class*="es-review-arrow"],
      [class*="es-review-tail"] {
        background: transparent !important;
        background-color: transparent !important;
        border: none !important;
        border-color: transparent !important;
        box-shadow: none !important;
        filter: none !important;
        outline: none !important;
        margin-top: -3px !important;
        transform: translateY(-2px) !important;
        position: relative !important;
        z-index: 10 !important;
      }

      /* 3. Desktop High-DPI Scaling Fix (125%/150% Laptop Display Scaling) */
      @media (min-width: 768px) {
        div[class*="Arrow"],
        div[class*="arrow"],
        div[class*="Tip"],
        div[class*="tip"],
        div[class*="Tail"],
        div[class*="tail"],
        div[class*="Corner"],
        div[class*="corner"],
        [class*="es-review-arrow"],
        [class*="es-review-tail"] {
          margin-top: -3.5px !important;
          transform: translateY(-2.5px) !important;
        }

        [class*="Arrow"] svg,
        [class*="arrow"] svg,
        [class*="Tip"] svg,
        [class*="tip"] svg,
        [class*="Tail"] svg,
        [class*="tail"] svg,
        [class*="Corner"] svg,
        [class*="corner"] svg,
        svg[class*="arrow"],
        svg[class*="tail"],
        svg[class*="tip"] {
          stroke-width: 2.5px !important;
        }
      }

      /* 4. Tail SVG & Path Fill - Thick Stroke matching card color to eliminate subpixel green line */
      [class*="Arrow"] svg,
      [class*="arrow"] svg,
      [class*="Tip"] svg,
      [class*="tip"] svg,
      [class*="Tail"] svg,
      [class*="tail"] svg,
      [class*="Corner"] svg,
      [class*="corner"] svg,
      svg[class*="arrow"],
      svg[class*="tail"],
      svg[class*="tip"] {
        fill: #fbf8f3 !important;
        stroke: #fbf8f3 !important;
        stroke-width: 2px !important;
        stroke-linejoin: round !important;
        stroke-linecap: round !important;
        shape-rendering: geometricPrecision !important;
        filter: none !important;
        box-shadow: none !important;
        outline: none !important;
        background: transparent !important;
        background-color: transparent !important;
      }

      [class*="Arrow"] path,
      [class*="arrow"] path,
      [class*="Tip"] path,
      [class*="tip"] path,
      [class*="Tail"] path,
      [class*="tail"] path,
      [class*="Corner"] path,
      [class*="corner"] path,
      div[class*="ReviewBackground"] svg path,
      div[class*="liveWidgetFrame"] svg path {
        fill: #fbf8f3 !important;
        stroke: #fbf8f3 !important;
        stroke-width: 2px !important;
        stroke-linejoin: round !important;
        stroke-linecap: round !important;
        shape-rendering: geometricPrecision !important;
        filter: none !important;
        box-shadow: none !important;
        outline: none !important;
      }

      /* 5. Remove pseudo-element borders & shadow bars across all containers */
      div[class*="ReviewBackground"]::after,
      div[class*="ReviewBackground"]::before,
      div[class*="BubbleComponent"]::after,
      div[class*="BubbleComponent"]::before,
      [class*="Arrow"]::before,
      [class*="Arrow"]::after,
      [class*="Tail"]::before,
      [class*="Tail"]::after {
        background: transparent !important;
        border: none !important;
        box-shadow: none !important;
        filter: none !important;
        content: none !important;
      }
    `;
  }, []);

  return (
    <section className={styles.section} suppressHydrationWarning>
      <div className={styles.container}>
        <div className={styles.darkBanner}>

          {/* Main Title */}
          <h2 className={styles.mainTitle}>What Our Customers Say</h2>

          {/* Direct 100% Live Elfsight Google Reviews Widget */}
          <div className={styles.liveWidgetFrame}>
            <div
              className="elfsight-app-3cfff90e-c703-4e6f-bf14-6e4f51c03dbc"
              data-elfsight-app-lazy
            ></div>
          </div>

        </div>
      </div>
    </section>
  );
}