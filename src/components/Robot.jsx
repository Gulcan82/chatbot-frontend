import React from 'react';
import './Robot.css'; // Wenn du eigene Styles für den Roboter hast, kannst du sie hier importieren.

const Robot = () => {
  return (
    <div className="Robot">
      {/* Passe den Bildpfad an die tatsächliche Speicherort-Struktur an */}
      <img src={`${process.env.PUBLIC_URL}/robota-image.png`} alt="Robot Assistant" className="robot-image" />
      <div className="robot-eyes"></div>
      <p>Ich bin dein Roboter-Assistent!</p>
    </div>
  );
};

export default Robot;
