"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/Blog.module.css";
import { FiArrowRight } from "react-icons/fi";
import { BLOG_POSTS } from "../../data/blog";
import { sendToGoogleSheet } from "../../services/newsletter";

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    const success = await sendToGoogleSheet({
      email,
      source: "Blog Page Newsletter"
    });

    setIsSubmitting(false);
    setShowPopup(true);

    if (success) {
      setEmail("");
    }

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const featuredPost = BLOG_POSTS[0];

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
              <Link href={`/blog/${featuredPost.slug}`} className={styles.featuredImageWrapper}>
                <img src={featuredPost.image} alt={featuredPost.title} className={styles.featuredImage} />
                <div className={styles.imageDecoration}></div>
                <div className={styles.glassBadge}>
                  <span>Read Journal</span>
                </div>
              </Link>
              <div className={styles.featuredContent}>
                <span className={styles.categoryBadge}>{featuredPost.category}</span>
                <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
                <div className={styles.postMeta}>
                  <span>{featuredPost.date}</span>
                  <Link href={`/blog/${featuredPost.slug}`} className={styles.readMore}>
                    Read Article <FiArrowRight />
                  </Link>
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
              {BLOG_POSTS.map((post, idx) => (
                <article
                  key={post.id}
                  className={styles.blogCard}
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <Link href={`/blog/${post.slug}`} className={styles.cardImageWrapper}>
                    <span className={styles.categoryTag}>{post.category}</span>
                    <img src={post.image} alt={post.title} className={styles.blogImage} />
                    <div className={styles.cardDecoration}></div>
                    <div className={styles.gridGlassBadge}>
                      <span>Read Story</span>
                    </div>
                  </Link>
                  <div className={styles.blogContent}>
                    <span className={styles.blogDate}>{post.date}</span>
                    <h3 className={styles.blogTitle}>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className={styles.blogExcerpt}>{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                      Read Full Article <FiArrowRight />
                    </Link>
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
                  disabled={isSubmitting}
                  suppressHydrationWarning
                >
                  {isSubmitting ? "Joining..." : "Subscribe"}
                </button>
              </form>
            </div>
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
