"use client";
import { useRef } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../styles/Testimonial.module.css";

export default function Testimonial() {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      text: "I've tried many body oils, but this one is my absolute favorite. It quickly absorbs into the skin, leaving no greasy residue behind. The natural scent is so relaxing.",
      name: "Elenor Smith",
      role: "Businesswoman",
      avatar: "/images/m5.png"
    },
    {
      text: "This body oil is a game-changer! My skin has a stunning glow, and it stays moisturized all day without feeling greasy. I love that it's made with natural ingredients.",
      name: "Nicole Holmes",
      role: "Medical Aide",
      avatar: "/images/m6.jpg"
    },
    {
      text: "I feel like I'm treating myself to a spa experience every time I use this oil. It's lightweight, nourishing, and smells divine. Perfect for self-care and daily hydration.",
      name: "Robert Fox",
      role: "Marketer",
      avatar: "/images/avatar_emily.png"
    },
    {
      text: "The quality of these essential oils is unmatched. I've used them for aromatherapy and skincare, and the results are always consistent. Highly recommended!",
      name: "Sarah Jenkins",
      role: "Yoga Instructor",
      avatar: "/images/test1.jpg"
    },
    {
      text: "I was skeptical at first, but after using the peppermint oil for my headaches, I'm a believer. It's potent and works faster than any over-the-counter remedy.",
      name: "David Chen",
      role: "Software Developer",
      avatar: "/images/test2.jpg"
    }
  ];

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      // Scroll by approximately one card width including gap
      const scrollAmount = clientWidth > 900 ? 400 : clientWidth * 0.8;
      sliderRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className={styles.section}>

      <div className={styles.header}>
        <div className={styles.headerText}>
          <h2 className={styles.title}>What our customers say</h2>
          <p className={styles.subtitle}>
            Hear from our satisfied customers about their experiences with our services.<br />
            Real feedback speaks for itself.
          </p>
        </div>

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

      <div className={styles.sliderContainer}>
        <div className={styles.grid} ref={sliderRef}>
          {testimonials.map((t, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className={styles.quote}>"{t.text}"</p>

              <div className={styles.authorBlock}>
                <img src={t.avatar} alt={t.name} className={styles.avatar} />
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{t.name}</h4>
                  <p className={styles.authorRole}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}