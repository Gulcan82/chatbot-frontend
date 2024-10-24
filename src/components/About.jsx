import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [hoveredPerson, setHoveredPerson] = useState(null); // State für die Person unter der Maus

  const handleMouseEnter = (name) => {
    setHoveredPerson(name); // Setze die Person, wenn die Maus über das Bild schwebt
  };

  const handleMouseLeave = () => {
    setHoveredPerson(null); // Entferne die Person, wenn die Maus das Bild verlässt
  };

  const getDescription = (name) => {
    switch (name) {
      case 'Emanuel Crisan':
        return 'Emanuel ist für die Frontend-Entwicklung zuständig und sorgt dafür, dass das UI reaktionsschnell und benutzerfreundlich ist.';
      case 'Oskar Herzog':
        return 'Oskar kümmert sich um die Präsentation des Projekts und sorgt dafür, dass alles organisatorisch einwandfrei abläuft.';
      case 'Asadul Haque':
        return 'Asadul ist verantwortlich für die technische Leitung des Projekts. Er kümmert sich um das Backend und die Infrastruktur, um sicherzustellen, dass alles reibungslos funktioniert.';
      case 'Lyne Tayoumo':
        return 'Lyne betreut die Kommunikation, den Kundenkontakt und ist zusätzlich für das Design verantwortlich.';
      case 'Eva Billing':
        return 'Eva ist verantwortlich für das Testing und die Qualitätssicherung. Sie stellt sicher, dass das Endprodukt fehlerfrei ist und den höchsten Qualitätsstandards entspricht.';
      case 'Gülcan Kamat':
        return 'Gülcan kümmert sich um die Finanzen des Projekts. Sie stellt sicher, dass das Projekt im Budget bleibt und Ressourcen effizient eingesetzt werden.';
      default:
        return 'Bewegen Sie die Maus über ein Teammitglied, um mehr über deren Aufgaben im Projekt zu erfahren!';
    }
  };

  return (
    <div className="about-page">
      <h2>Über uns</h2>
      <p>
        Willkommen auf unserer Über-uns-Seite! <br />
        Wir sind sechs kreative Projektkollegen, die sich zusammengeschlossen haben, um innovative Projekte zu entwickeln. Jeder von uns bringt einzigartige Fähigkeiten mit, die zusammen zu einem erfolgreichen Ergebnis führen.
      </p>
      
      <div className="about-images">
        {/* Bild 1 */}
        <div 
          className="image-container" 
          onMouseEnter={() => handleMouseEnter('Emanuel Crisan')} 
          onMouseLeave={handleMouseLeave}
        >
          <img src={`${process.env.PUBLIC_URL}/images/person1.jpg`} alt="Emanuel Crisan" className="image-button" />
          <p>Emanuel Crisan</p>
        </div>
        
        {/* Bild 2 */}
        <div 
          className="image-container" 
          onMouseEnter={() => handleMouseEnter('Oskar Herzog')} 
          onMouseLeave={handleMouseLeave}
        >
          <img src={`${process.env.PUBLIC_URL}/images/person2.jpg`} alt="Oskar Herzog" className="image-button" />
          <p>Oskar Herzog</p>
        </div>
        
        {/* Bild 3 */}
        <div 
          className="image-container" 
          onMouseEnter={() => handleMouseEnter('Asadul Haque')} 
          onMouseLeave={handleMouseLeave}
        >
          <img src={`${process.env.PUBLIC_URL}/images/person3.jpg`} alt="Asadul Haque" className="image-button" />
          <p>Asadul Haque</p>
        </div>

        {/* Bild 4 */}
        <div 
          className="image-container" 
          onMouseEnter={() => handleMouseEnter('Lyne Tayoumo')} 
          onMouseLeave={handleMouseLeave}
        >
          <img src={`${process.env.PUBLIC_URL}/images/person4.jpg`} alt="Lyne Tayoumo" className="image-button" />
          <p>Lyne Tayoumo</p>
        </div>

        {/* Bild 5 */}
        <div 
          className="image-container" 
          onMouseEnter={() => handleMouseEnter('Eva Billing')} 
          onMouseLeave={handleMouseLeave}
        >
          <img src={`${process.env.PUBLIC_URL}/images/person5.jpg`} alt="Eva Billing" className="image-button" />
          <p>Eva Billing</p>
        </div>

        {/* Bild 6 */}
        <div 
          className="image-container" 
          onMouseEnter={() => handleMouseEnter('Gülcan Kamat')} 
          onMouseLeave={handleMouseLeave}
        >
          <img src={`${process.env.PUBLIC_URL}/images/person6.jpg`} alt="Gülcan Kamat" className="image-button" />
          <p>Gülcan Kamat</p>
        </div>
      </div>

      {/* Zeige die Beschreibung basierend auf dem Hover */}
      <div className="person-description">
        <p>{getDescription(hoveredPerson)}</p>
      </div>
    </div>
  );
};

export default About;
