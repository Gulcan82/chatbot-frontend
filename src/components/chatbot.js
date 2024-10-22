// src/components/chatbot.js

import React, { useState } from 'react';

function Chatbot() {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log('Message sent: ', message);
    setMessage(''); // Leert das Eingabefeld nach dem Senden
  };

  return (
    <div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={handleInputChange}
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Chatbot;
