"use client";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/Contact.module.css";
import { FaLocationDot, FaEnvelope, FaPhone, FaClock } from "react-icons/fa6";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <main className={styles.contactContainer}>
        <h1 className={styles.heading}>Contact Us</h1>
        
        <div className={styles.contactWrapper}>
          <div className={styles.infoSection}>
            <h2>Get In Touch</h2>
            <p>We'd love to hear from you! Whether you have a question about our products, shipping, or just want to say hello, we're here to help.</p>
            
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <div className={styles.iconCircle}><FaLocationDot /></div>
                <div className={styles.itemText}>
                  <h4>Our Address</h4>
                  <p>123 Natural Way, Wellness City, 10001</p>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.iconCircle}><FaEnvelope /></div>
                <div className={styles.itemText}>
                  <h4>Email Us</h4>
                  <p>info@vsnaturals.com</p>
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
                  <h4>Business Hours</h4>
                  <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label>Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Message</label>
                <textarea 
                  rows="5" 
                  placeholder="How can we help you?" 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
          </div>
        </div>
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

