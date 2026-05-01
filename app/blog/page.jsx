"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/Blog.module.css";
import { FiArrowRight } from "react-icons/fi";

const POSTS = [
  {
    id: 1,
    title: "Benefits of Peppermint Oil for Mind and Body",
    date: "May 10, 2024",
    category: "Wellness",
    excerpt: "Peppermint oil is a powerhouse of natural benefits. From soothing digestive issues to boosting mental clarity, learn how to harness its full potential.",
    image: "/images/product_1.png"
  },
  {
    id: 2,
    title: "How to Use Essential Oils in Daily Life",
    date: "May 5, 2024",
    category: "Lifestyle",
    excerpt: "Integrating essential oils into your routine doesn't have to be complicated. Discover our top tips for morning and evening aromatherapy.",
    image: "/images/product_2.png"
  },
  {
    id: 3,
    title: "Aromatherapy for Better Sleep",
    date: "April 28, 2024",
    category: "Rest & Recovery",
    excerpt: "Struggling to drift off? These calming essential oil blends are specifically curated to promote deep, restorative sleep and relaxation.",
    image: "/images/product_3.png"
  }
];

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setEmail("");
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <main className={styles.blogContainer}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.heading}>Our Journal</h1>
          <p className={styles.subheading}>Insights into the world of natural wellness, aromatherapy, and the power of pure botanicals.</p>
        </div>

        {/* Blog Grid */}
        <div className={styles.blogGrid}>
          {POSTS.map((post, idx) => (
            <article
              key={post.id}
              className={styles.blogCard}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className={styles.imageWrapper}>
                <span className={styles.categoryTag}>{post.category}</span>
                <img src={post.image} alt={post.title} className={styles.blogImage} />
              </div>
              <div className={styles.blogContent}>
                <span className={styles.blogDate}>{post.date}</span>
                <h3 className={styles.blogTitle}>{post.title}</h3>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <div className={styles.readMore}>
                  Read Article <FiArrowRight />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <section className={styles.newsletterSection}>
          <div className={styles.newsletterContent}>
            <h2>Stay Inspired</h2>
            <p>Join our community for exclusive wellness tips, new product launches, and natural living guides.</p>
            <form className={styles.form} onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                required
                suppressHydrationWarning
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className={styles.submitBtn}
                suppressHydrationWarning
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />

      {/* Popup Message */}
      {showPopup && (
        <div className={styles.popup}>
          Successfully Subscribed!
        </div>
      )}
    </>
  );
}


