import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import styles from "../../styles/Contact.module.css";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <div className={styles.main}>
      <Navbar />

      {/* Contact Hero Section */}
      <section className={styles.contactHero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>Get in Touch</div>
          <h1 className={styles.heroTitle}>Connect with Nature's Essence</h1>
          <p className={styles.heroSubtitle}>
            Whether you need help selecting the perfect blend, have questions about our organic extraction process, or require order assistance, our wellness experts are here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactWrapper}>

            {/* Info Column */}
            <div className={styles.infoColumn}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Contact Information</h2>
                <p className={styles.sectionSubtitle}>
                  Reach out through any of these channels. We are here to help.
                </p>
              </div>

              <div className={styles.contactList}>
                {/* Email */}
                <a href="mailto:contact@vsnaturalsandessentials.com" className={styles.contactItem}>
                  <div className={styles.iconCircle}>
                    <FaEnvelope />
                  </div>
                  <div className={styles.itemText}>
                    <h4>Email Us</h4>
                    <p>contact@vsnaturalsandessentials.com</p>
                  </div>
                </a>

                {/* Phone */}
                <a href="tel:+919213638440" className={styles.contactItem}>
                  <div className={styles.iconCircle}>
                    <FaPhone />
                  </div>
                  <div className={styles.itemText}>
                    <h4>Call Us</h4>
                    <p>+91 92136 38440</p>
                  </div>
                </a>

                {/* Location */}
                <a
                  href={process.env.NEXT_PUBLIC_GOOGLE_LOCATION_LINK || "https://share.google/S9AoDFRkzoOCADefs"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactItem}
                >
                  <div className={styles.iconCircle}>
                    <FaLocationDot />
                  </div>
                  <div className={styles.itemText}>
                    <h4>Our Address</h4>
                    <p>
                      3rd floor, B/14 Navrang society,<br />
                      opp. Savliya pumping station,<br />
                      Mai Mandir Road, Nadiad
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Form Column */}
            <div className={styles.formColumn}>
              <div className={styles.formCard}>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}