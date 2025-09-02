import './index.css'
import { useChat } from './hooks/UseChat'
import { useState } from 'react';
import ChatHeader from './components/ChatHeader'

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const {
		clearChat
	} = useChat();

	const toggleTheme = () => {
    	setIsDarkMode(!isDarkMode);
	};

return (
		<div className={`min-h-screen transition-colors duration-300 ${
        	isDarkMode 
            ? 'bg-gray-900 text-gray-100' 
            : 'bg-gray-50 text-gray-900'
        }`}>
			<ChatHeader 
				isDarkMode={isDarkMode}
				onToggleTheme={toggleTheme}
				onClearChat={clearChat}
			/>
		</div>
	);
}

export default App