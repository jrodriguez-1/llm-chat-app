import { Bot, User } from 'lucide-react';

function MessageItem({ message }) {
    return (
        <div className={`flex gap-4 ${
            message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
        }`}
        >
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
            message.role === 'user'
            ? 'bg-blue-600 dark:bg-blue-600'
            : 'bg-gray-200 dark:bg-gray-700'
        }`}>
            {message.role === 'user' ? (
            <User className="w-4 h-4 text-white" />
            ) : (
            <Bot className="w-4 h-4 text-blue-500" />
            )}
        </div>

        {/* Message */}
        <div className={`flex-1 max-w-3xl ${
            message.role === 'user' ? 'text-right' : 'text-left'
        }`}>
            <div className={`inline-block p-4 rounded-2xl ${
            message.role === 'user'
                ? 'bg-blue-500 text-white'
                : message.isError
                ? 'bg-red-900/30 border border-red-800 text-red-300 dark:bg-red-900/30 dark:border-red-800 dark:text-red-300'
                : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'
            } ${
            message.role === 'user' ? 'rounded-br-md' : 'rounded-bl-md'
            } shadow-sm`}>
                <div className="whitespace-pre-wrap break-words">
                    {message.content}
                </div>
            </div>
            
                <div className={`text-xs mt-2 text-gray-500 dark:text-gray-500 ${
                message.role === 'user' ? 'text-right' : 'text-left'
                }`}>
                {message.timestamp.toLocaleTimeString()}
                </div>
            </div>
        </div>
    );
}

export default MessageItem;