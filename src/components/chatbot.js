import React, { useState } from 'react';
import { TextField, Button, Paper, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    // Nachricht hinzufügen
    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    try {
      // Anfrage an Cloud-Chatbot (z.B. Dialogflow) senden
      const response = await axios.post('https://api.chatbot.cloud/', {
        message: input,
      });

      const botMessage = { sender: 'bot', text: response.data.reply };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    setInput(''); // Eingabefeld leeren
  };

  return (
    <Paper style={{ padding: '20px', maxWidth: '600px', margin: '20px auto' }}>
      <List style={{ height: '300px', overflowY: 'scroll', marginBottom: '10px' }}>
        {messages.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={msg.sender === 'user' ? 'You' : 'Bot'}
              secondary={msg.text}
            />
          </ListItem>
        ))}
      </List>
      <TextField
        fullWidth
        variant="outlined"
        label="Type your message"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSend}
        style={{ marginTop: '10px' }}
      >
        Send
      </Button>
    </Paper>
  );
};

export default Chatbot;
