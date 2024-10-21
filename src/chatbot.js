import React, { useState } from 'react'; // Importing useState hook from React
import axios from 'axios';

const Chatbot = () => {
  // Defining state variables using useState
  const [input, setInput] = useState(''); // State for user input
  const [messages, setMessages] = useState([]); // State for storing chat messages

  const handleSend = async () => {
    if (!input.trim()) return; // Prevent sending empty messages

    const userMessage = { message: input }; // Construct user message object
    setMessages([...messages, { sender: 'user', text: input }]); // Add user message to the messages state

    try {
      const response = await axios.post('https://<your-api-endpoint>/chat', userMessage);
      // Add the bot's response to the messages state
      setMessages([...messages, { sender: 'user', text: input }, { sender: 'bot', text: response.data.reply }]);
    } catch (error) {
      console.error('Error sending message:', error); // Handle errors
    }

    setInput(''); // Clear the input field after sending
  };

  return (
    <div>
      {/* Add your chat UI here */}
    </div>
  );
};

export default Chatbot;
