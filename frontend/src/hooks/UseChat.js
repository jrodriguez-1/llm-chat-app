import { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000/chat';

export function useChat() {
    const [messages, setMessages] = useState([]);
    const [currentMessage, setCurrentMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!currentMessage.trim() || loading) return;

        const userMessage = {
        id: Date.now(),
        role: 'user',
        content: currentMessage.trim(),
        timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const messageToSend = currentMessage.trim();
        setCurrentMessage('');
        setLoading(true);

        try {
        const response = await axios.post(API_URL, {
            prompt: messageToSend
        }, {
            timeout: 30000,
            headers: {
            'Content-Type': 'application/json'
            }
        });

        const botMessage = {
            id: Date.now() + 1,
            role: 'assistant',
            content: response.data.response || response.data.error,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);

        } catch (error) {
        console.error('Error:', error);
        
        let errorMsg = 'Error contacting backend.';
        
        if (error.code === 'ECONNREFUSED') {
            errorMsg = 'Cannot connect to backend server. Make sure it\'s running.';
        } else if (error.response?.status) {
            errorMsg = `Server returned ${error.response.status} error.`;
        } else if (error.message) {
            errorMsg = `Connection error: ${error.message}`;
        }
        
        const errorMessage = {
            id: Date.now() + 1,
            role: 'assistant',
            content: errorMsg,
            timestamp: new Date(),
            isError: true
        };
        
        setMessages(prev => [...prev, errorMessage]);
        } finally {
        setLoading(false);
        }
    };

    const clearChat = () => {
        setMessages([]);
    };

    return {
        messages,
        currentMessage,
        setCurrentMessage,
        loading,
        sendMessage,
        clearChat
    };
}