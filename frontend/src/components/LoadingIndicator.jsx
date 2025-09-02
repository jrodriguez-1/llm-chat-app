import { Bot } from 'lucide-react';

function LoadingIndicator() {
    return (
        <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                <Bot className="w-4 h-4 text-blue-500" />
            </div>
            <div className="inline-block p-4 rounded-2xl rounded-bl-md bg-white dark:bg-gray-800 shadow-sm">
                <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                        <div 
                        className="w-2 h-2 rounded-full animate-pulse bg-gray-400 dark:bg-gray-500" 
                        style={{animationDelay: '0ms'}}
                        ></div>
                        <div 
                        className="w-2 h-2 rounded-full animate-pulse bg-gray-400 dark:bg-gray-500" 
                        style={{animationDelay: '150ms'}}
                        ></div>
                        <div 
                        className="w-2 h-2 rounded-full animate-pulse bg-gray-400 dark:bg-gray-500" 
                        style={{animationDelay: '300ms'}}
                        ></div>
                    </div>
                    <span className="text-sm text-gray-400 dark:text-gray-500">
                        Thinking...
                    </span>
                </div>
            </div>
        </div>
    );
}

export default LoadingIndicator;