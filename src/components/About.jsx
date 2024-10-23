import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <h2>Über uns</h2>
      <p>
        Willkommen auf unserer Über uns Seite! Wir sind ein Team von 6 kreativen Köpfen, die sich zusammengeschlossen haben, 
        um innovative Projekte zu entwickeln. Jeder von uns bringt einzigartige Fähigkeiten mit, die zusammen zu einem erfolgreichen Ergebnis führen.
      </p>
      
      <div className="about-images">
        {/* Bild 1 */}
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/images/person1.jpg`} alt="Emanuel Crisan" />
          <p>Emanuel Crisan</p>
        </div>
        
        {/* Bild 2 */}
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/images/person2.jpg`} alt="Oskar Herzog" />
          <p>Oskar Herzog</p>
        </div>
        
        {/* Bild 3 */}
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/images/person3.jpg`} alt="Asadul Haque" />
          <p>Asadul Haque</p>
        </div>

        {/* Bild 4 */}
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/images/person4.jpg`} alt="Person 4" />
          <p>Lyne Tayoumo</p>
        </div>

        {/* Bild 5 */}
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/images/person5.jpg`} alt="Person 5" />
          <p>Eva Billing</p>
        </div>

        {/* Bild 6 */}
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/images/person6.jpg`} alt="Person 6" />
          <p>Gülcan Kamat</p>
        </div>
      </div>
    </div>
  );
};

export default About;
