import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sendPrompt = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:8000/chat', {prompt});
      setResponse(res.data.response || res.data.error);
    } catch(error) {
      console.error(error);
      setResponse("Error contacting backend.");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>LLM Chat App</h1>
      <textarea
        rows="6"
        cols="60"
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <br />
      <button onClick={sendPrompt} disabled={loading || !prompt}>
        {loading ? 'Thinking...' : 'Submit'}
      </button>
      <div style={{ marginTop: 20 }}>
        <h3>Response:</h3>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{response}</pre>
      </div>
    </div>
  )
}

export default App