import { Bot } from 'lucide-react';

function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="p-4 rounded-2xl mb-6 bg-white dark:bg-gray-800 shadow-sm">
                <Bot className="w-12 h-12 text-blue-500 mx-auto" />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-400">
                How can I help you today?
            </h2>
        </div>
    );
}

export default EmptyState;