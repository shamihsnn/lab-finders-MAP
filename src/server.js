import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

// Add middleware for parsing JSON
app.use(express.json());

// Serve static files from public directory
app.use(express.static('public'));

// Initialize ratings storage
const ratings = {};

// Rating API endpoints
app.post('/api/ratings', (req, res) => {
    const { labName, rating, review } = req.body;
    try {
        if (!ratings[labName]) {
            ratings[labName] = [];
        }
        ratings[labName].push({ rating, review, date: new Date() });
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save rating' });
    }
});

app.get('/api/ratings/:labName', (req, res) => {
    const { labName } = req.params;
    try {
        const labRatings = ratings[labName] || [];
        res.json(labRatings);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch ratings' });
    }
});

// Existing routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

app.get('/video', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/video.html'));
});

app.get('/chatbot', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/chatbot.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
