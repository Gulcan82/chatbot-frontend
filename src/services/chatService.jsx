import axios from 'axios';

// Setze die Basis-URL für API-Anfragen
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/message';

export const chatService = {
  sendMessage: async (message) => {
    try {
      // Sendet eine POST-Anfrage an den Server
      const response = await axios.post(API_URL, { message });
      // Gibt die Antwortdaten zurück
      return response.data;
    } catch (error) {
      // Loggt den Fehler und wirft ihn weiter
      console.error('Error in chatService:', error);
      throw error;
    }
  },
};
