import React from 'react';

import './Robot.css'; // Ensure you have this file for the styles

import './Robot.css'; // Wenn du eigene Styles für den Roboter hast, kannst du sie hier importieren.


const Robot = () => {
  return (
    <div className="Robot">

    {/* Video player replacing the image */}
    <video 
      src={`${process.env.PUBLIC_URL}/Abschluss-projekt .mp4`} // Replace with your actual video file path
      autoPlay 
      loop 
      muted
      className="robot-video" // Add a class for styling purposes
    />
    <div className="robot-eyes"></div>
      <p>WIlkommen An Unsere Abschluss Projekt  </p>

      {/* Passe den Bildpfad an die tatsächliche Speicherort-Struktur an */}
      <img src={`${process.env.PUBLIC_URL}/robota-image.png`} alt="Robot Assistant" className="robot-image" />
      <div className="robot-eyes"></div>
      <p>Ich bin dein Roboter-Assistent!</p>

    </div>
  );
};

export default Robot;
