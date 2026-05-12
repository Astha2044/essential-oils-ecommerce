"use client";

import { useState, useEffect } from "react";
import styles from "../styles/Hero.module.css";
import Link from "next/link";
import { FaLeaf, FaDroplet, FaSpa, FaShieldHeart } from "react-icons/fa6";

const slides = [
  {
    title: "Experience the Essence of Pure Botanical Oils",
    subtitle: "Nurture your mind, body, and soul with our meticulously crafted, therapeutic-grade oils sourced directly from the heart of nature.",
    image: "/images/hero_background.png",
    badge: "Natural & Pure"
  },
  {
    title: "Illuminate Your Space with Handcrafted Candles",
    subtitle: "Elevate your home with natural soy wax and pure essential oils, designed to create a serene and calming atmosphere for relaxation.",
    image: "/images/candle.png",
    badge: "Handcrafted",
    position: "bottom"
  },
  {
    title: "Indulge in the Luxury of Pure Rose Essence",
    subtitle: "Experience the delicate, floral luxury of our ethically sourced rose blends, perfect for emotional balance and enhancing natural skin radiance.",
    image: "/images/rose.png",
    badge: "Floral Luxury"
  },
  {
    title: "Revitalize Your Senses with Energizing Lemon Oil",
    subtitle: "Cold-pressed lemon essence to revitalize your senses, boost your mood, and naturally refresh your daily living space with vibrant energy.",
    image: "/images/lemon.png",
    badge: "Energizing",
    position: "bottom"
  },
  {
    title: "Inner Peace with Calming Sandalwood Rituals",
    subtitle: "Rich, woody aromas meticulously distilled for deep meditation, mindfulness, and achieving a profound sense of lasting inner peace.",
    image: "/images/sandlewood.png",
    badge: "Meditation"
  },
  {
    title: "Elevate Your Wellness with Exquisite Mogra",
    subtitle: "The divine, intoxicating fragrance of Jasmine (Mogra) designed to enhance your holistic wellness and elevate your daily self-care rituals.",
    image: "/images/New_mogra.png",
    badge: "Holistic Care"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Avoid hydration mismatch by ensuring server and first client render match
  const activeSlideIndex = mounted ? currentSlide : 0;

  return (
    <section className={styles.hero}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slideBackground} ${index === activeSlideIndex ? styles.activeSlide : ''}`}
          style={{ 
            backgroundImage: `url(${slide.image})`,
            backgroundPosition: slide.position === "bottom" ? "center bottom" : "center center"
          }}
        ></div>
      ))}

      <div className={styles.heroOverlay}></div>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.badge} key={`badge-${activeSlideIndex}`}>{slides[activeSlideIndex].badge}</div>

          <h1 className={styles.title} key={`title-${activeSlideIndex}`}>
            {slides[activeSlideIndex].title}
          </h1>

          <p className={styles.subtitle} key={`subtitle-${activeSlideIndex}`}>
            {slides[activeSlideIndex].subtitle}
          </p>

          <div className={styles.features}>
            <div className={styles.featureItem}>
              <div className={styles.iconCircle}><FaLeaf /></div>
              <span>Naturally<br />Potent</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.iconCircle}><FaDroplet /></div>
              <span>Steam<br />Distilled</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.iconCircle}><FaSpa /></div>
              <span>Therapeutic<br />Grade</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.iconCircle}><FaShieldHeart /></div>
              <span>Safe &<br />Certified</span>
            </div>
          </div>

          <div className={styles.buttons}>
            <Link href="/products" className={styles.primaryBtn}>
              Shop Collection
            </Link>
            <Link href="/benefits" className={styles.secondaryBtn}>
              Explore Benefits
            </Link>
          </div>

          <div className={styles.indicators}>
            {slides.map((_, index) => (
              <button
                key={index}
                suppressHydrationWarning
                className={`${styles.indicator} ${index === activeSlideIndex ? styles.indicatorActive : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}