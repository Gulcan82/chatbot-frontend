import axios from 'axios';

// Service function to handle API requests to your backend
const sendMessageToBackend = async (input) => {
  try {
    const response = await axios.post('http://localhost:5000/api/chat', {
      message: input,
    });
    return response.data; // Return the bot's response
  } catch (error) {
    console.error('Error communicating with the backend:', error);
    throw error; // Re-throw the error for handling in the component
  }
};

export default sendMessageToBackend;
