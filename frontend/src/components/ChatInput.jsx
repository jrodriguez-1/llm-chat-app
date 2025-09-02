import { useEffect, useRef } from 'react';
import { Send } from 'lucide-react';

function ChatInput({ 
    currentMessage, 
    setCurrentMessage, 
    onSendMessage, 
    loading, 
}) {

    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [currentMessage]);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onSendMessage();
        }
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto p-4">
                <div className="relative rounded-2xl border border-gray-300 dark:border-gray-600 shadow-lg bg-white dark:bg-gray-800">
                    <textarea
                        ref={textareaRef}
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Message your AI assistant..."
                        className="w-full p-4 pr-12 rounded-2xl resize-none min-h-[56px] max-h-48 outline-none transition-colors bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                        rows={1}
                    />
                    
                    <button
                        onClick={onSendMessage}
                        disabled={!currentMessage.trim() || loading}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl transition-all disabled:bg-gray-700 disabled:text-gray-500 bg-blue-500 hover:bg-blue-600 text-white shadow-md hover:shadow-lg disabled:hover:bg-gray-700"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
                
                <p className="text-xs text-center mt-2 text-gray-500 dark:text-gray-500">
                Press Enter to send, Shift+Enter for new line
                </p>
            </div>
        </div>
    );
}

export default ChatInput;