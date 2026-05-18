"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/Contact.module.css";
import { FaLocationDot, FaEnvelope, FaPhone, FaClock } from "react-icons/fa6";
import { sendToGoogleSheet } from "../../services/newsletter";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) return;

    setIsSubmitting(true);
    const success = await sendToGoogleSheet({ 
      ...formData, 
      source: "Contact Page Form" 
    });

    setIsSubmitting(false);
    setShowPopup(true);
    
    if (success) {
      setFormData({ name: "", email: "", message: "" });
    }

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Contact Hero Section */}
        <section className={styles.contactHero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>Contact Us</div>
            <h1 className={styles.heroTitle}>Let's Connect</h1>
            <p className={styles.heroSubtitle}>
              Whether you have a question about our oils or just want to share your wellness journey, we're here to listen.
            </p>
          </div>
        </section>

        {/* Contact Content Section */}
        <section className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contactWrapper}>
              {/* Info Column */}
              <div className={styles.infoColumn} style={{ animationDelay: "0.2s" }}>
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>Get In Touch</h2>
                  <p className={styles.sectionSubtitle}>We typically respond within 24 hours.</p>
                </div>

                <div className={styles.contactList}>
                  <div className={styles.contactItem}>
                    <div className={styles.iconCircle}><FaLocationDot /></div>
                    <div className={styles.itemText}>
                      <h4>Our Sanctuary</h4>
                      <p>123 Natural Way, Wellness City, 10001</p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.iconCircle}><FaEnvelope /></div>
                    <div className={styles.itemText}>
                      <h4>Email Us</h4>
                      <p>hello@vsnaturals.com</p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.iconCircle}><FaPhone /></div>
                    <div className={styles.itemText}>
                      <h4>Call Us</h4>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className={styles.contactItem}>
                    <div className={styles.iconCircle}><FaClock /></div>
                    <div className={styles.itemText}>
                      <h4>Visiting Hours</h4>
                      <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Column */}
              <div className={styles.formColumn} style={{ animationDelay: "0.4s" }}>
                <div className={styles.formCard}>
                  <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                      <label>Your Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={styles.input}
                        suppressHydrationWarning
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={styles.input}
                        suppressHydrationWarning
                      />
                    </div>
                    <div className={styles.inputGroup}>
                      <label>Your Message</label>
                      <textarea
                        rows="5"
                        placeholder="How can we help you today?"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={styles.textarea}
                        suppressHydrationWarning
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className={styles.submitBtn}
                      disabled={isSubmitting}
                      suppressHydrationWarning
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Popup Message */}
      {showPopup && (
        <div className={styles.popup}>
          Message Sent Successfully!
        </div>
      )}
    </>
  );
}
