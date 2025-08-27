const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

console.log('🚀 Starting server...');

app.use(cors());
app.use(express.json());

const OLLAMA_API_URL = process.env.NODE_ENV === 'production' 
    ? "http://host.docker.internal:11434/api/generate"
    : "http://localhost:11434/api/generate";
const MODEL_NAME = "phi3";

app.get('/', (req, res) => {
    console.log('📊 Health check requested');
    res.json({ status: 'Server is running!', timestamp: new Date() });
});

app.post('/chat', async (req, res) => {
    try {
        const { prompt = "" } = req.body;
        
        const response = await axios.post(OLLAMA_API_URL, {
            model: MODEL_NAME,
            prompt: prompt,
            stream: false
        }, {
            timeout: 30000
        });
        
        res.json({ response: response.data.response });
        
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: `Connection error: ${error.message}` });
    }
});

const PORT = 8000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🌐 Server running on http://localhost:${PORT}`);
    console.log('✅ Server ready to accept requests');
});