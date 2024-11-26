import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import fetch from 'node-fetch';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// ApiMedic credentials
const USERNAME = "x5NRy_GMAIL_COM_AUT";
const PASSWORD = "i5YJn4x3WPz92DaRg";
const AUTH_URL = "https://authservice.priaid.ch/login";
const BASE_URL = "https://healthservice.priaid.ch";

// Initialize ratings storage
const ratings = {};

// Generate authentication hash
function generateAuthHash() {
    const rawHash = crypto
        .createHmac('md5', PASSWORD)
        .update(AUTH_URL)
        .digest('base64');
    return rawHash;
}

async function getToken() {
    const computedHash = generateAuthHash();
    const response = await fetch(AUTH_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${USERNAME}:${computedHash}`
        }
    });
    const data = await response.json();
    return data.Token;
}

// API Routes
app.get('/api/symptoms', async (req, res) => {
    try {
        const token = await getToken();
        const response = await fetch(
            `${BASE_URL}/symptoms?token=${token}&language=en-gb`
        );
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/diagnosis', async (req, res) => {
    try {
        const { symptoms, gender, yearOfBirth } = req.body;
        const token = await getToken();
        const response = await fetch(
            `${BASE_URL}/diagnosis?symptoms=${JSON.stringify(symptoms)}&gender=${gender}&year_of_birth=${yearOfBirth}&token=${token}&language=en-gb`
        );
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

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

// Page Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

app.get('/video', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/video.html'));
});

app.get('/chatbot', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/chatbot.html'));
});

app.get('/symptoms', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/symptoms.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
