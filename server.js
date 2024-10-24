const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/message', (req, res) => {
    const userMessage = req.body.message;
    const botResponse = `Received your message: ${userMessage}`;
    res.json({ message: botResponse });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
