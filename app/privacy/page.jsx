import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";
import styles from "../../styles/Legal.module.css";

export const metadata = {
  title: "Privacy Policy | VS Naturals",
  description: "Privacy Policy for VS Naturals & Essentials",
};

export default function PrivacyPage() {
  return (
    <div className={styles.pageContainer}>
      <Navbar />

      <header className={styles.hero}>
        <h1 className={styles.heroTitle}>Privacy Policy</h1>
      </header>

      <main className={styles.contentWrapper}>
        <section className={styles.section}>
          <h2>1. Information We Collect</h2>
          <p>When you visit our site or make a purchase, we collect certain information about your device, your interaction with the site, and information necessary to process your purchases. This includes your name, billing address, shipping address, payment information, email address, and phone number.</p>
        </section>

        <section className={styles.section}>
          <h2>2. How We Use Your Information</h2>
          <p>We use the order information that we collect generally to fulfill any orders placed through the site (including processing your payment, arranging for shipping, and providing you with invoices/order confirmations).</p>
        </section>

        <section className={styles.section}>
          <h2>3. Data Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
        </section>

        <section className={styles.section}>
          <h2>4. Data Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>
        </section>

        <section className={styles.section}>
          <h2>5. Your Rights</h2>
          <p>You have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us.</p>
        </section>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
}
