import { Moon, Sun, Bot } from 'lucide-react';

function ChatHeader({ isDarkMode, onToggleTheme, onClearChat }) {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <Bot className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                    <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">LLM Chat App</h1>
                </div>
                </div>
                
                <div className="flex items-center gap-2">
                <button
                    onClick={onClearChat}
                    className="px-3 py-2 text-sm rounded-lg transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    Clear Chat
                </button>
                <button
                    onClick={onToggleTheme}
                    className="p-2 rounded-lg transition-colors text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                </div>
            </div>
        </header>
    );
}

export default ChatHeader;