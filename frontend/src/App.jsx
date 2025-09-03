import './index.css'
import { useChat } from './hooks/UseChat'
import { useState } from 'react';
import ChatHeader from './components/ChatHeader'
import ChatMessages from './components/ChatMessages'
import ChatInput from './components/ChatInput'

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const {
		messages,
		currentMessage,
		setCurrentMessage,
		loading,
		sendMessage,
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

			<ChatMessages 
				messages={messages}
				loading={loading}
				isDarkMode={isDarkMode}
			/>
			<ChatInput 
				currentMessage={currentMessage}
				setCurrentMessage={setCurrentMessage}
				onSendMessage={sendMessage}
				loading={loading}
				isDarkMode={isDarkMode}
			/> 
		</div>
	);
}

export default App