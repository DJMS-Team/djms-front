'use client';

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
        setFormData({ name: '', email: '', subject: '', message: '' }); 
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
      <label htmlFor="name" className="text-white">Digita tu nombre (Requerido)</label>
      <input type="text" id="name" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} required />

      <label htmlFor="email" className="text-white">Digita tu email (Requerido)</label>
      <input type="email" id="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required />

      <label htmlFor="subject" className="text-white">Asunto (Requerido)</label>
      <input type="text" id="subject" name="subject" placeholder="Enter Subject" value={formData.subject} onChange={handleChange} required />

      <label htmlFor="message" className="text-white">Tu mensaje (Requerido)</label>
      <textarea id="message" name="message" placeholder="Enter Message" value={formData.message} onChange={handleChange} required />

      <div className={styles.terms}>
        <input type="checkbox" id="privacyTerms" name="privacyTerms" required />
        <label htmlFor="privacyTerms" className="text-white">Yo acepto los <a href="/privacy-terms" target="_blank">terminos de privacidad</a></label>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;
