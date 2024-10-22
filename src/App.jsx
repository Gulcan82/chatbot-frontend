import React from 'react';
import './App.css';
import Chatbot from './components/chatbot.jsx';  // Chatbot-Komponente
import Robot from './components/Robot.jsx';  // Robot-Komponente

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Intelligenter Chatbot-Support</h1>
        <p className="App-subtitle">Ihr zuverlässiger Assistent, jederzeit und überall</p>

        {/* Füge das animierte Bild hier hinzu */}
        <img src={`${process.env.PUBLIC_URL}/animated_bot.gif`} alt="Chatbot" className="chatbot-animation" />

        <nav className="App-nav">
          <button className="App-button">Hilfe</button>
          <button className="App-button">Einstellungen</button>
          <button className="App-button">Über uns</button>
        </nav>
      </header>

      {/* Chatbot und Robot-Komponente zusammen in einem Container */}
      <div className="Chatbot-container">
        <Chatbot />  {/* Hier wird der Chatbot angezeigt */}
        <Robot />    {/* Hier wird die Robot-Komponente angezeigt */}
        
        <div className="Chatbot-actions">
          <button className="App-button Chatbot-action">Schnelle Antwort 1</button>
          <button className="App-button Chatbot-action">Schnelle Antwort 2</button>
        </div>
      </div>
    </div>
  );
}

export default App;
