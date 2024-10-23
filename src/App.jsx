
import React, { useState } from 'react';

import React from 'react';

import './App.css';
import Chatbot from './components/chatbot.jsx';  // Chatbot-Komponente
import Robot from './components/Robot.jsx';  // Robot-Komponente


// Neue Komponente für die Bewertung
const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="rating-container">
      <h3>Bitte bewerten Sie Ihren Chatbot-Assistenten:</h3>
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="star">&#9733;</span> {/* Stern-Symbol */}
            </button>
          );
        })}
      </div>
      <p>Bewertung: {rating} von 5 Sternen</p>
    </div>
  );
};



function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1 className="App-title">Intelligenter Smart Chatbot-Support</h1>
        <p className="App-subtitle">Ihr zuverlässiger Assistent, jederzeit und überall</p>


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

        <Robot /> {/* Hier wird die Robot-Komponente angezeigt */}


        <Chatbot />  {/* Hier wird der Chatbot angezeigt */}
        <Robot />    {/* Hier wird die Robot-Komponente angezeigt */}
        

        <div className="Chatbot-actions">
          <button className="App-button Chatbot-action">Schnelle Antwort 1</button>
          <button className="App-button Chatbot-action">Schnelle Antwort 2</button>
        </div>


        {/* Bewertungskomponente hinzufügen */}
        <Rating /> {/* Die Sterne-Bewertung */}

      </div>
    </div>
  );
}

export default App;
