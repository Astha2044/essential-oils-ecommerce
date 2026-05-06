import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../styles/Testimonial.module.css";

export default function Testimonial() {
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
      role: "Medical Assistant",
      avatar: "/images/m6.jpg"
    },
    {
      text: "I feel like I'm treating myself to a spa experience every time I use this oil. It's lightweight, nourishing, and smells divine. Perfect for self-care and daily hydration.",
      name: "Robert Fox",
      role: "Marketing Coordinator",
      avatar: "/images/avatar_emily.png"
    }
  ];

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
          <button className={styles.arrowBtn} suppressHydrationWarning><FaChevronLeft size={14} /></button>
          <button className={styles.arrowBtn} suppressHydrationWarning><FaChevronRight size={14} /></button>
        </div>
      </div>

      <div className={styles.grid}>
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

    </section>
  );
}