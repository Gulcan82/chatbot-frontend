import React from 'react';
import { Link } from 'react-router-dom'; // Link importieren

const Help = () => {
  return (
    <div className="help-page">
      <h2>Hilfe</h2>
      <p>
        Willkommen auf der Hilfeseite. Hier finden Sie alle Informationen, die Ihnen bei der Nutzung unseres Chatbot-Supports weiterhelfen.
      </p>
      
      <ul>
        {/* Interner Link zu "Wie man den Chatbot benutzt" */}
        <li>
          <Link to="/how-to-use-chatbot" className="help-link">
            Bedienung des Chatbots
          </Link>
        </li>

        {/* Interner Link zu FAQ */}
        <li>
          <Link to="/faq" className="help-link">
            Häufig gestellte Fragen (FAQ)
          </Link>
        </li>

        {/* Interner Link zum Kontaktformular oder zur Support-Seite */}
        <li>
          <Link to="/contact-support" className="help-link">
            Kontaktieren Sie unseren Support
          </Link>
        </li>

       
      </ul>
    </div>
  );
};

export default Help;
