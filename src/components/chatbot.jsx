import React, { useState } from 'react';
import { chatService } from '../services/chatService.jsx';
import './chatbot.css'; // Falls du CSS für den Chatbot verwendest

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Benutzer-Nachricht hinzufügen
    const userMessage = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput(''); // Eingabefeld zurücksetzen

    try {
      // Chatbot-Antwort abrufen
      const response = await chatService.sendMessage(input);
      const botMessage = { text: response, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = { text: 'Entschuldigung, es gab ein Problem bei der Anfrage.', sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  return (
    <div className="chatbot-container">
      {/* Nachrichtenanzeige */}
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>

      {/* Eingabefeld für Nachrichten */}
      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Schreibe eine Nachricht..."
          className="chat-input"
        />
        <button type="submit" className="chat-submit">
          Senden
        </button>
      </form>
    </div>
  );
}
