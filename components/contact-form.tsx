'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './contact-form.module.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.success) {
        alert('Your feedback has been sent successfully!');
      } else {
        alert('Failed to send your feedback.');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send your feedback.');
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <h2>Send an email</h2>

      <label htmlFor="name">Enter Your Name (Required)</label>
      <input type="text" id="name" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} required />

      <label htmlFor="email">Enter Your Email (Required)</label>
      <input type="email" id="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required />

      <label htmlFor="subject">Subject (Required)</label>
      <input type="text" id="subject" name="subject" placeholder="Enter Subject" value={formData.subject} onChange={handleChange} required />

      <label htmlFor="message">Your message (Required)</label>
      <textarea id="message" name="message" placeholder="Enter Message" value={formData.message} onChange={handleChange} required />

      <div className={styles.terms}>
        <input type="checkbox" id="privacyTerms" name="privacyTerms" required />
        <label htmlFor="privacyTerms">I accept the <a href="/privacy-terms" target="_blank">Privacy Terms</a></label>
      </div>

      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
