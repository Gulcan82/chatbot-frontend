import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // React Router verwenden
import './App.css';
import Chatbot from './components/chatbot.jsx';  // Chatbot-Komponente
import Robot from './components/Robot.jsx';  // Robot-Komponente
import About from './components/About.jsx';  // "Über uns"-Seite
import Help from './components/Help.jsx';    // "Hilfe"-Seite
import Settings from './components/Settings.jsx';  // "Einstellungen"-Seite


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
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Intelligenter Smart Chatbot-Support für die Cloud</h1>
          <p className="App-subtitle">Ihr zuverlässiger Assistent, jederzeit und überall</p>
          <nav className="App-nav">
            <Link to="/help">
              <button className="App-button">Hilfe</button>
            </Link>
            <Link to="/settings">
              <button className="App-button">Einstellungen</button>
            </Link>
            <Link to="/about">
              <button className="App-button">Über uns</button>
            </Link>
          </nav>
        </header>

        {/* Routes für verschiedene Seiten */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="Chatbot-container">
                  <Robot /> {/* Hier wird die Robot-Komponente angezeigt */}
                  <Chatbot /> {/* Hier wird der Chatbot angezeigt */}
                </div>

                <div className="Chatbot-actions">
                  <button className="App-button Chatbot-action">Schnelle Antwort 1</button>
                </div>

                {/* Bewertungskomponente */}
                <Rating /> {/* Die Sterne-Bewertung */}
              </>
            }
          />
          {/* Route für die "Über uns"-Seite */}
          <Route path="/about" element={<About />} />
          {/* Route für die "Hilfe"-Seite */}
          <Route path="/help" element={<Help />} />
          {/* Route für die "Einstellungen"-Seite */}
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
