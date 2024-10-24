import React from 'react';
import './Robot.css'; // Ensure you have this file for the styles



const Robot = () => {
  return (
    <div className="Robot"> 
    <p>Willkommen zu unserem Abschluss Projekt</p>

    {/* Video player replacing the image */}
    <video 
      src={`${process.env.PUBLIC_URL}/Abschluss-projekt.mp4`} // Replace with your actual video file path
      autoPlay
      controls
    className="robot-video" // Add a class for styling purposes
    />
     

      
    </div>
  );
};

export default Robot;