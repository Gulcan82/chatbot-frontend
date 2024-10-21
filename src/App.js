import React from 'react';
import './App.css';
import Chatbot from './components/chatbot.js';
import Robot from './components/Robot'; // Ensure the path is correct and matches your project structure

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Intelligenter Chatbot-Support</h1>
        <p className="App-subtitle">Ihr zuverlässiger Assistent, jederzeit und überall</p>
        <nav className="App-nav">
          <button className="App-button">Hilfe</button>
          <button className="App-button">Einstellungen</button>
          <button className="App-button">Über uns</button>
        </nav>
      </header>
      <div className="Chatbot-container">
        <Chatbot />
        <Robot /> {/* Using the Robot component here */}
        <div className="Chatbot-actions">
          <button className="App-button Chatbot-action">Schnelle Antwort 1</button>
          <button className="App-button Chatbot-action">Schnelle Antwort 2</button>
        </div>
      </div>
    </div>
  );
}

export default App;
