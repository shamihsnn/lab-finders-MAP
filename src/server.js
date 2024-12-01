import * as dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import fetch from 'node-fetch';
import crypto from 'crypto';
import { GoogleGenerativeAI } from '@google/generative-ai';
import multer from 'multer';

// Log environment details
console.log('Current working directory:', process.cwd());
console.log('.env file path:', path.join(process.cwd(), '.env'));

// Configure environment

console.log('API Key loaded:', process.env.GEMINI_API_KEY ? 'Yes' : 'No');

// Add this after dotenv.config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const conversationHistory = new Map();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// Middleware
app.use(express.json());
app.use(express.static('public'));
app.use('/video', express.static('video'));
// Add this with your other middleware configurations
app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/images', express.static(path.join(__dirname, '../public/images')));



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

// Add this route to your existing Express server
app.get('/ambulance-loader.svg', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/ambulance-loader.svg'));
});



// Add this route for the medical chatbot
// Update the medical chatbot route
app.post('/api/medicalchatbot', async (req, res) => {
    const { message, imageData, sessionId } = req.body;
    
    try {
        // Get or initialize conversation history
        let history = conversationHistory.get(sessionId) || [];
        
        // Handle image analysis
        // Inside your /api/medicalchatbot route
// Inside your /api/medicalchatbot route, update the image analysis section
if (imageData) {
    const visionModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const base64Data = imageData.replace(/^data:image\/\w+;base64,/, '');
    
    const prompt = {
        contents: [{
            parts: [{
                text: `You are a medical professional. Please analyze this medical image and provide detailed insights about any visible conditions, abnormalities, or notable features. Context: ${message}`
            }, {
                inlineData: {
                    mimeType: "image/jpeg",
                    data: base64Data
                }
            }]
        }]
    };

    try {
        const result = await visionModel.generateContent(prompt);
        const response = await result.response;
        const reply = response.text();
        
        history.push({ role: "user", content: `${message} [Image Analysis Request]` });
        history.push({ role: "assistant", content: reply });
        
        conversationHistory.set(sessionId, history);
        return res.json({ success: true, reply });
    } catch (imageError) {
        console.error('Vision Model Error:', imageError);
        
        // Fallback to text-only response if image analysis fails
        const textModel = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
        const fallbackResult = await textModel.generateContent({
            contents: [{
                parts: [{
                    text: `I received an image but couldn't analyze it. How else can I help you with your medical question: ${message}`
                }]
            }]
        });
        
        const fallbackReply = fallbackResult.response.text();
        return res.json({ success: true, reply: fallbackReply });
    }
}
// Regular text conversation with memory
// Regular text conversation with memory
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

// Format history correctly for Gemini API - map 'assistant' role to 'model'
const formattedHistory = history.map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }]
}));

const chat = model.startChat({
    history: formattedHistory,
    generationConfig: {
        maxOutputTokens: 2048,
    },
});

const result = await chat.sendMessage(message);
const response = await result.response;
const reply = response.text();

// Store history with 'assistant' role for consistency
history.push({ role: "user", content: message });
history.push({ role: "assistant", content: reply });

// Keep last 20 messages for memory efficiency
if (history.length > 20) {
    history = history.slice(-20);
}

conversationHistory.set(sessionId, history);

res.json({ 
    reply,
    success: true 
});


    } catch (error) {
        console.error('Gemini API Error:', error);
        res.status(500).json({ 
            error: 'Failed to get response from AI',
            details: error.message,
            success: false 
        });
    }
});

app.get('/medicalchatbot', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/medicalchatbot.html'));
});