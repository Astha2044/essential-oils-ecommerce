"use client";
import { useState } from "react";
import styles from "../styles/Contact.module.css";
import { sendToGoogleSheet } from "../services/newsletter";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) return;

    setIsSubmitting(true);
    const success = await sendToGoogleSheet({ 
      ...formData, 
      source: "Contact Form" 
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
          ></textarea>
        </div>
        <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Popup Message */}
      {showPopup && (
        <div className={styles.popup}>
          Message Sent Successfully!
        </div>
      )}
    </>
  );
}
