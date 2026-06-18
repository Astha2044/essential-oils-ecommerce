'use client';

import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import styles from '../styles/FAQ.module.css';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const faqs = [
    {
      q: "What are the benefits of using essential oils?",
      a: "Essential oils provide deep hydration, nourish the skin, improve elasticity, and give a natural glow. They also help lock in moisture, making the skin feel soft and smooth, while offering aromatherapy benefits to calm the mind."
    },
    {
      q: "Which essential oil is best for dry skin?",
      a: "Lavender and rose oils are excellent for dry skin. They are highly moisturizing, soothing, and help repair the skin barrier without clogging pores."
    },
    {
      q: "Are essential oils suitable for all skin types?",
      a: "Yes, but they should be properly diluted with a carrier oil. Always perform a patch test first, especially if you have sensitive skin."
    },
    {
      q: "How should I apply essential oils for the best results?",
      a: "Add 3–4 ml to your diffuser, bath, skincare routine, or massage blend to enjoy its natural aroma and refreshing feel."
    },
    {
      q: "Can I use essential oils on my face?",
      a: "Certain oils like tea tree and frankincense are great for the face when heavily diluted. Avoid using citrus oils on your face before sun exposure as they can cause photosensitivity."
    },
    {
      q: "What is the best way to store essential oils?",
      a: "Store them in dark glass bottles, tightly sealed, in a cool, dry place away from direct sunlight to maintain their potency and prevent oxidation."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <div className={styles.leftColumn}>
          <h2 className={styles.title}>Frequently Asked<br />Questions</h2>
          <p className={styles.subtitle}>
            Frequently asked questions (FAQ) provide answers to common inquiries about our natural essential oils.
          </p>

          <div className={styles.imageWrapper}>
            <div className={styles.imageBg}></div>
            <img src="/images/sandalwood.png" alt="Essential Oil Bottle" className={styles.image} />
            <div className={styles.floatingTag}>
              <strong>Pure Essence</strong>
              <span>Nature's Choice</span>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.accordion}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${styles.accordionItem} ${activeIndex === index ? styles.active : ''}`}
              >
                <div
                  className={styles.accordionHeader}
                  onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                >
                  <h4 className={styles.question}>{faq.q}</h4>
                  <span className={styles.icon}>
                    {activeIndex === index ? <FaMinus size={14} /> : <FaPlus size={14} />}
                  </span>
                </div>
                <div className={`${styles.accordionBody} ${activeIndex === index ? styles.show : ''}`}>
                  <p className={styles.answer}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
