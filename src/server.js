import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

// Serve static files from public directory
app.use(express.static('public'));
app.use(express.static('views'));

// Update port for deployment
const PORT = process.env.PORT || 3000;

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

app.get('/video', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/video.html'));
});

app.get('/chatbot', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/chatbot.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
