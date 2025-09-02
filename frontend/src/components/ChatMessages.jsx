import { useEffect, useRef } from 'react';
import MessageItem from './MessageItem';
import LoadingIndicator from './LoadingIndicator';
import EmptyState from './EmptyState';

function ChatMessages({ messages, loading, isDarkMode }) {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, loading]);

    return (
        <main className="max-w-4xl mx-auto px-4 pb-32">
        {messages.length === 0 ? (
            <EmptyState isDarkMode={isDarkMode} />
        ) : (
            <div className="py-6 space-y-6">
            {messages.map((message) => (
                <MessageItem 
                key={message.id} 
                message={message} 
                isDarkMode={isDarkMode} 
                />
            ))}
            {loading && <LoadingIndicator isDarkMode={isDarkMode} />}
            </div>
        )}
        <div ref={messagesEndRef} />
        </main>
    );
}

export default ChatMessages;