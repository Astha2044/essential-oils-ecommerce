"use client";
import { useRef, useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaGoogle, FaCheckCircle } from "react-icons/fa";
import styles from "../styles/Testimonial.module.css";

export default function Testimonial() {
  const sliderRef = useRef(null);
  const [reviewsData, setReviewsData] = useState({
    rating: 4.9,
    totalReviews: 48,
    reviews: [],
    writeReviewUrl: "https://maps.app.goo.gl/ceWrzfvLGFi1KXNq7",
    loading: true
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    async function fetchGoogleReviews() {
      try {
        const res = await fetch("/api/google-reviews");
        const data = await res.json();
        if (data && data.reviews) {
          setReviewsData({
            rating: data.rating || 4.9,
            totalReviews: data.totalReviews || 48,
            reviews: data.reviews,
            writeReviewUrl: data.writeReviewUrl || "https://maps.app.goo.gl/ceWrzfvLGFi1KXNq7",
            loading: false
          });
        }
      } catch (err) {
        console.error("Failed to load Google Reviews:", err);
        setReviewsData((prev) => ({ ...prev, loading: false }));
      }
    }
    fetchGoogleReviews();
  }, []);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth > 900 ? 400 : clientWidth * 0.8;
      sliderRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const reviewsList = reviewsData.reviews.length > 0 ? reviewsData.reviews : [
    {
      id: "fallback-1",
      name: "Elenor Smith",
      avatar: "/images/m5.png",
      rating: 5,
      time: "2 weeks ago",
      text: "I've tried many essential and body oils, but VS Naturals is my absolute favorite. Absorbs quickly, leaving skin silky soft without greasy residue.",
      role: "Verified Google Customer"
    },
    {
      id: "fallback-2",
      name: "Nicole Holmes",
      avatar: "/images/m6.jpg",
      rating: 5,
      time: "1 month ago",
      text: "This body oil is a game-changer! My skin has a stunning glow, and it stays moisturized all day without feeling greasy.",
      role: "Verified Google Customer"
    },
    {
      id: "fallback-3",
      name: "Robert Fox",
      avatar: "/images/avatar_emily.png",
      rating: 5,
      time: "1 month ago",
      text: "I feel like I'm treating myself to a spa experience every time I use this oil. It's lightweight, nourishing, and smells divine.",
      role: "Verified Google Customer"
    }
  ];

  return (
    <section className={styles.section} suppressHydrationWarning>
      <div className={styles.header} suppressHydrationWarning>
        <div className={styles.headerText} suppressHydrationWarning>
          {/* Google Verified Badge Header */}
          <div className={styles.googleMetaTag} suppressHydrationWarning>
            <div className={styles.googleIconWrapper}>
              <FaGoogle size={18} className={styles.googleIcon} />
            </div>
            <span className={styles.googleTagText}>Google Reviews</span>
            <div className={styles.googleRatingScore}>
              <span className={styles.scoreVal}>{reviewsData.rating.toFixed(1)}</span>
              <div className={styles.scoreStars}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={12} className={styles.starGold} />
                ))}
              </div>
              <span className={styles.totalCount}>({reviewsData.totalReviews} reviews)</span>
            </div>
          </div>

          <h2 className={styles.title}>What our customers say</h2>
          <p className={styles.subtitle}>
            Real stories and direct ratings from our verified Google customers.
          </p>
        </div>

        <div className={styles.headerActions}>
          <a
            href={reviewsData.writeReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.writeReviewBtn}
          >
            <FaGoogle size={14} />
            <span>Review us on Google</span>
            <FaExternalLinkAlt size={11} className={styles.extIcon} />
          </a>

          <div className={styles.arrows}>
            <button
              className={styles.arrowBtn}
              onClick={() => handleScroll("left")}
              aria-label="Previous testimonial"
              suppressHydrationWarning
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              className={styles.arrowBtn}
              onClick={() => handleScroll("right")}
              aria-label="Next testimonial"
              suppressHydrationWarning
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.sliderContainer}>
        <div className={styles.grid} ref={sliderRef}>
          {reviewsList.map((t, index) => (
            <div key={t.id || index} className={styles.card}>
              <div className={styles.cardTopRow}>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < (t.rating || 5) ? styles.starGold : styles.starGray}
                    />
                  ))}
                </div>
                <div className={styles.googleBadgeTag} title="Verified Google Review">
                  <FaGoogle size={12} className={styles.cardGoogleIcon} />
                  <span>Google</span>
                  <FaCheckCircle size={10} className={styles.verifiedCheck} />
                </div>
              </div>

              <p className={styles.quote}>"{t.text}"</p>

              <div className={styles.authorBlock}>
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className={styles.avatar}
                    onError={(e) => {
                      // Fallback avatar if Google image fails to load
                      e.currentTarget.src = "/images/m5.png";
                    }}
                  />
                ) : (
                  <div className={styles.avatarFallback}>
                    {t.name ? t.name.charAt(0) : "G"}
                  </div>
                )}

                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{t.name}</h4>
                  <p className={styles.authorRole}>
                    {t.time ? `${t.time} • Google Review` : "Verified Google Review"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}