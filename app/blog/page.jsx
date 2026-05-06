"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
import styles from "../../styles/Blog.module.css";
import { FiArrowRight } from "react-icons/fi";

const POSTS = [
  {
    id: 1,
    title: "Benefits of Peppermint Oil for Mind and Body",
    date: "May 10, 2024",
    category: "Wellness",
    excerpt: "Peppermint oil is a powerhouse of natural benefits. From soothing digestive issues to boosting mental clarity, learn how to harness its full potential.",
    image: "/images/img4.png"
  },
  {
    id: 2,
    title: "How to Use Essential Oils in Daily Life",
    date: "May 5, 2024",
    category: "Lifestyle",
    excerpt: "Integrating essential oils into your routine doesn't have to be complicated. Discover our top tips for morning and evening aromatherapy.",
    image: "/images/img10.png"
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

  const featuredPost = POSTS[0];

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Blog Hero Section */}
        <section className={styles.blogHero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>Our Journal</div>
            <h1 className={styles.heroTitle}>Insights & Aromas</h1>
            <p className={styles.heroSubtitle}>
              Explore the art of natural wellness, from essential oil guides to sustainable living tips.
            </p>
          </div>
        </section>

        {/* Featured Post Section */}
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <div className={styles.featuredCard}>
              <div className={styles.featuredImageWrapper}>
                <img src={featuredPost.image} alt={featuredPost.title} className={styles.featuredImage} />
                <div className={styles.imageDecoration}></div>
                <div className={styles.glassBadge}>
                  <span>Read Journal</span>
                </div>
              </div>
              <div className={styles.featuredContent}>
                <span className={styles.categoryBadge}>{featuredPost.category}</span>
                <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
                <div className={styles.postMeta}>
                  <span>{featuredPost.date}</span>
                  <div className={styles.readMore}>
                    Read Article <FiArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className={styles.gridSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Latest Stories</h2>
            </div>
            <div className={styles.blogGrid}>
              {POSTS.map((post, idx) => (
                <article
                  key={post.id}
                  className={styles.blogCard}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className={styles.cardImageWrapper}>
                    <span className={styles.categoryTag}>{post.category}</span>
                    <img src={post.image} alt={post.title} className={styles.blogImage} />
                    <div className={styles.cardDecoration}></div>
                    <div className={styles.gridGlassBadge}>
                      <span>Read Story</span>
                    </div>
                  </div>
                  <div className={styles.blogContent}>
                    <span className={styles.blogDate}>{post.date}</span>
                    <h3 className={styles.blogTitle}>{post.title}</h3>
                    <p className={styles.blogExcerpt}>{post.excerpt}</p>
                    <div className={styles.readMore}>
                      Read Full Article <FiArrowRight />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className={styles.newsletterSection}>
          <div className={styles.container}>
            <div className={styles.newsletterCard}>
              <div className={styles.newsletterInfo}>
                <h2 className={styles.newsletterTitle}>Stay Inspired</h2>
                <p className={styles.newsletterText}>Join our botanical community for weekly wellness tips and exclusive offers.</p>
              </div>
              <form className={styles.form} onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  suppressHydrationWarning
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
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
          </div>
        </section>
      </main>
      <CTASection />
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
