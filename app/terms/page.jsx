import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/Legal.module.css";

export const metadata = {
  title: "Terms of Service | VS Naturals",
  description: "Terms and conditions for using VS Naturals & Essentials",
};

export default function TermsPage() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />

      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>Terms of Service</h1>
      </header>

      <main className={styles.contentWrapper}>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using VS Naturals & Essentials, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this service.</p>

        <h2>2. Use of Our Products</h2>
        <p>Our essential oils are pure and highly concentrated. They are intended for external use and aromatherapy only. Always dilute properly before applying to the skin. VS Naturals is not responsible for adverse reactions caused by improper use of our products.</p>

        <h2>3. Purchasing and Payment</h2>
        <p>All prices are subject to change without notice. We reserve the right to refuse or cancel any order. If your order is canceled after your payment has been processed, we will issue a full refund.</p>

        <h2>4. Returns and Exchanges</h2>
        <p>Due to the nature of our products, we accept returns only for unopened and unused bottles within 30 days of purchase. Return shipping costs are the responsibility of the customer.</p>

        <h2>5. Intellectual Property</h2>
        <p>All content on this site, including text, graphics, logos, and images, is the property of VS Naturals & Essentials and is protected by intellectual property laws. You may not reproduce or use our content without explicit permission.</p>
      </main>

      <Footer />
    </div>
  );
}
