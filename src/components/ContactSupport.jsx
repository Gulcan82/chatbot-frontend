import React from 'react';
import './ContactSupport.css'; // Stelle sicher, dass du die CSS-Datei importierst

const ContactSupport = () => {
  return (
    <div className="contact-support-page">
      <h2 class="animate__animated animate__flip">Kontaktieren Sie unseren Support</h2>
      <p class="animate__animated animate__rubberBand">Bitte füllen Sie das folgende Formular aus, um den Support zu kontaktieren:</p>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" placeholder="Ihr Name" />
        </label>
        <label>
          E-Mail:
          <input type="email" name="email" placeholder="Ihre E-Mail-Adresse" />
        </label>
        <label>
          Nachricht:
          <textarea name="message" placeholder="Beschreiben Sie Ihr Anliegen"></textarea>
        </label>
        <button type="submit">Senden</button>
      </form>
    </div>
  );
};

export default ContactSupport;
