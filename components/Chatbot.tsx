import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Neo. Ask me anything about this portfolio or my skills." }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Pass last 10 messages for context window
      const historyContext = messages.slice(-10).map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(userMessage.text, historyContext);
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error. Please try again.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-neonBlue to-purpleGlow text-white shadow-[0_0_20px_rgba(79,140,255,0.5)]"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[380px] h-[500px] max-h-[70vh] flex flex-col bg-white dark:bg-[#0e0f14] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-3xl"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-neonBlue/10 to-purpleGlow/10 border-b border-white/5 flex items-center gap-3">
              <div className="p-2 bg-neonBlue/20 rounded-full text-neonBlue">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm">Neo Assistant</h3>
                <p className="text-xs text-green-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Online
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-neonBlue text-white rounded-br-none' 
                        : 'bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200 rounded-bl-none border border-transparent dark:border-white/5'
                    } ${msg.isError ? 'bg-red-500/10 text-red-500 border-red-500/20' : ''}`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex justify-start">
                   <div className="bg-gray-100 dark:bg-white/10 p-3 rounded-2xl rounded-bl-none">
                     <Loader2 size={16} className="animate-spin text-neonBlue" />
                   </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-white/5 rounded-full px-4 py-2 border border-transparent focus-within:border-neonBlue transition-colors">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about my projects..."
                  className="flex-1 bg-transparent outline-none text-sm text-gray-900 dark:text-white placeholder-gray-500"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-1.5 bg-neonBlue rounded-full text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;