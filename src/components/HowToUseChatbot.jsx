import React from 'react';


const HowToUseChatbot = () => {
  return (
    <div className="how-to-use-chatbot-page">
      <h2>Bedienung des Chatbots</h2>

    <p>Unser Chatbot ist einfach zu bedienen und hilft Ihnen schnell bei Ihren Anliegen. Hier erfahren Sie, wie Sie ihn optimal nutzen:</p>
      
      <h3>Schritt 1: Starten des Chatbots</h3>
      <p>Klicken Sie auf das Chat-Symbol unten rechts, um den Chatbot zu öffnen. Sie können sofort mit Ihrer Anfrage beginnen.</p>
      
      <h3>Schritt 2: Stellen Sie Ihre Frage</h3>
      <p>Geben Sie Ihre Frage oder Ihr Anliegen in das Textfeld ein. Der Chatbot analysiert Ihre Anfrage und gibt sofort eine Antwort.</p>
      
      <h3>Schritt 3: Weitere Hilfe</h3>
      <p>Falls der Chatbot Ihre Anfrage nicht vollständig lösen kann, wird er Ihnen weitere Optionen anbieten, wie z. B. das Kontaktieren eines Mitarbeiters.</p>


      {/* Hier wird ein Bild eingefügt */}
      <img 
       src="/images/chatbot-start.png" 
       alt="Chatbot Start" 
       style={{ width: '100%', maxWidth: '400px', display: 'block', margin: '20px auto',  }}
     />
     
    </div>
  );
};

export default HowToUseChatbot;
