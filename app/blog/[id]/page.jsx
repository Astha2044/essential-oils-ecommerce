import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { BLOG_POSTS } from "../../../data/blog";
import styles from "../../../styles/BlogPost.module.css";
import Link from "next/link";
import { FiArrowLeft, FiClock, FiTag } from "react-icons/fi";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === id);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | VS Naturals Journal`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }) {
  const { id } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Editorial Hero Section */}
        <section className={styles.postHero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>{post.category}</div>
            <h1 className={styles.heroTitle}>{post.title}</h1>
            <div className={styles.heroMeta}>
              <span><FiClock /> 5 min read</span>
              <span><FiTag /> {post.date}</span>
            </div>
          </div>
        </section>

        {/* Article Body Section */}
        <section className={styles.articleSection}>
          <div className={styles.container}>
            <Link href="/blog" className={styles.backLink}>
              <FiArrowLeft /> Back to Journal
            </Link>

            <div className={styles.articleGrid}>
              <div className={styles.articleContent}>
                <div 
                  className={styles.richText}
                  dangerouslySetInnerHTML={{ __html: post.content }} 
                />
              </div>

              <div className={styles.articleSidebar}>
                <div className={styles.imageWrapper}>
                  <img src={post.image} alt={post.title} className={styles.sidebarImage} />
                  <div className={styles.imageDecoration}></div>
                  <div className={styles.glassBadge}>
                    <span>Pure</span>
                    <strong>Essence</strong>
                  </div>
                </div>

                <div className={styles.authorCard}>
                  <h4>About the Author</h4>
                  <p>Our botanical experts are dedicated to sharing the science and soul of essential oils.</p>
                  <div className={styles.signature}>VS Naturals Team</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section (Matching About Us) */}
        <section className={styles.relatedSection}>
          <div className={styles.container}>
            <div className={styles.ctaCard}>
              <h2>Begin Your Wellness Journey</h2>
              <p>Experience the therapeutic power of nature's finest extracts.</p>
              <Link href="/products" className={styles.ctaBtn}>
                Explore Catalog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
