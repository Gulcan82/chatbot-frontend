import React, { useState } from 'react';
import './Faq.css'; // Füge das CSS für die Stile hinzu

const Faq = () => {
  // State, um die geöffneten Antworten zu verwalten
  const [openIndex, setOpenIndex] = useState(null);

  // Funktion, um eine Frage zu öffnen/schließen
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h2>Häufig gestellte Fragen (FAQ)</h2>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(1)}>
          Wie verwende ich den Chatbot? <span>{openIndex === 1 ? '▲' : '▼'}</span>
        </div>
        {openIndex === 1 && (
          <div className="faq-answer">
            Sie können den Chatbot verwenden, indem Sie auf das Symbol unten rechts klicken.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(2)}>
          Wie funktioniert der Chatbot? <span>{openIndex === 2 ? '▲' : '▼'}</span>
        </div>
        {openIndex === 2 && (
          <div className="faq-answer">
            Der Chatbot verwendet moderne Technologien, um Ihre Anfragen zu analysieren und darauf zu antworten.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(3)}>
          Welche Art von Fragen kann ich dem Chatbot stellen? <span>{openIndex === 3 ? '▲' : '▼'}</span>
        </div>
        {openIndex === 3 && (
          <div className="faq-answer">
            Sie können Fragen zu unseren Dienstleistungen, Produkten oder allgemeinen Informationen stellen.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(4)}>
          Ist der Chatbot immer verfügbar? <span>{openIndex === 4 ? '▲' : '▼'}</span>
        </div>
        {openIndex === 4 && (
          <div className="faq-answer">
            Ja, unser Chatbot ist 24 Stunden am Tag, 7 Tage die Woche für Sie verfügbar.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(5)}>
          Was passiert, wenn der Chatbot meine Frage nicht beantworten kann? <span>{openIndex === 5 ? '▲' : '▼'}</span>
        </div>
        {openIndex === 5 && (
          <div className="faq-answer">
            Wenn der Chatbot Ihre Frage nicht beantworten kann, wird er Ihnen helfen, einen Mitarbeiter zu kontaktieren.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(6)}>
          Kann der Chatbot meine Daten speichern? <span>{openIndex === 6 ? '▲' : '▼'}</span>
        </div>
        {openIndex === 6 && (
          <div className="faq-answer">
            Nein, der Chatbot speichert keine persönlichen Daten ohne Ihre Zustimmung.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(7)}>
          In welchen Sprachen kann ich mit dem Chatbot kommunizieren? <span>{openIndex === 7 ? '▲' : '▼'}</span>
        </div>
        {openIndex === 7 && (
          <div className="faq-answer">
            Der Chatbot unterstützt derzeit Deutsch und Englisch. Weitere Sprachen werden bald hinzugefügt.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(8)}>
          Wie lange dauert es, bis der Chatbot eine Antwort gibt? <span>{openIndex === 8 ? '▲' : '▼'}</span>
        </div>
        {openIndex === 8 && (
          <div className="faq-answer">
            Der Chatbot gibt in der Regel sofort eine Antwort auf Ihre Anfrage.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(9)}>
          Kann ich dem Chatbot eine E-Mail schicken? <span>{openIndex === 9 ? '▲' : '▼'}</span>
        </div>
        {openIndex === 9 && (
          <div className="faq-answer">
            Nein, der Chatbot funktioniert über Textinteraktionen. Sie können jedoch unsere Support-E-Mail für komplexe Anfragen nutzen.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(10)}>
          Was mache ich, wenn der Chatbot meine Frage falsch versteht? <span>{openIndex === 10 ? '▲' : '▼'}</span>
        </div>
        {openIndex === 10 && (
          <div className="faq-answer">
            Sie können die Frage erneut stellen oder spezifischer formulieren, um eine präzisere Antwort zu erhalten.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(11)}>
          Kann der Chatbot mir bei technischen Problemen helfen? <span>{openIndex === 11 ? '▲' : '▼'}</span>
        </div>
        {openIndex === 11 && (
          <div className="faq-answer">
            Ja, der Chatbot kann Ihnen bei allgemeinen technischen Problemen helfen oder Sie an den technischen Support weiterleiten.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(12)}>
          Kann ich den Chatbot auf meinem Mobilgerät verwenden? <span>{openIndex === 12 ? '▲' : '▼'}</span>
        </div>
        {openIndex === 12 && (
          <div className="faq-answer">
            Ja, der Chatbot ist sowohl auf Desktop- als auch auf Mobilgeräten vollständig funktionsfähig.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(13)}>
          Wie sicher ist die Kommunikation mit dem Chatbot? <span>{openIndex === 13 ? '▲' : '▼'}</span>
        </div>
        {openIndex === 13 && (
          <div className="faq-answer">
            Die Kommunikation mit dem Chatbot erfolgt über sichere Verbindungen und alle Daten werden gemäß den Datenschutzrichtlinien behandelt.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(14)}>
          Kann der Chatbot Bestellungen aufgeben? <span>{openIndex === 14 ? '▲' : '▼'}</span>
        </div>
        {openIndex === 14 && (
          <div className="faq-answer">
            Ja, der Chatbot kann Sie durch den Bestellprozess führen und Bestellungen für Sie aufgeben.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(15)}>
          Kann ich dem Chatbot Feedback geben? <span>{openIndex === 15 ? '▲' : '▼'}</span>
        </div>
        {openIndex === 15 && (
          <div className="faq-answer">
            Ja, Sie können dem Chatbot Feedback geben, indem Sie ihm direkt sagen, ob er hilfreich war oder nicht.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(16)}>
          Welche Technologien verwendet der Chatbot? <span>{openIndex === 16 ? '▲' : '▼'}</span>
        </div>
        {openIndex === 16 && (
          <div className="faq-answer">
            Der Chatbot verwendet künstliche Intelligenz, maschinelles Lernen und natürliche Sprachverarbeitung, um Ihre Anfragen zu verstehen.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(17)}>
          Kann der Chatbot Rechnungen anzeigen? <span>{openIndex === 17 ? '▲' : '▼'}</span>
        </div>
        {openIndex === 17 && (
          <div className="faq-answer">
            Ja, der Chatbot kann Ihnen Ihre letzten Rechnungen anzeigen, wenn Sie angemeldet sind.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(18)}>
          Wie kann ich den Chatbot zurücksetzen? <span>{openIndex === 18 ? '▲' : '▼'}</span>
        </div>
        {openIndex === 18 && (
          <div className="faq-answer">
            Sie können den Chatbot jederzeit neu starten, indem Sie das Chat-Fenster schließen und wieder öffnen.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(19)}>
          Kann ich eine Unterhaltung mit dem Chatbot speichern? <span>{openIndex === 19 ? '▲' : '▼'}</span>
        </div>
        {openIndex === 19 && (
          <div className="faq-answer">
            Derzeit gibt es keine Möglichkeit, Chats zu speichern. Sie können jedoch den Inhalt manuell kopieren.
          </div>
        )}
      </div>

      <div className="faq-item">
        <div className="faq-question" onClick={() => toggleFaq(20)}>
          Kann der Chatbot menschliche Mitarbeiter ersetzen? <span>{openIndex === 20 ? '▲' : '▼'}</span>
        </div>
        {openIndex === 20 && (
          <div className="faq-answer">
            Der Chatbot unterstützt unsere Mitarbeiter, ersetzt sie aber nicht vollständig. Für komplexe Anfragen steht Ihnen unser Support-Team zur Verfügung.
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;
