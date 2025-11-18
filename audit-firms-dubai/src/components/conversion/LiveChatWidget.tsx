'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

/**
 * Live Chat Widget
 * Fixed bottom-right chat widget with online indicator
 * Features:
 * - Online/offline status indicator
 * - Expandable chat interface
 * - Quick contact form
 * - Tooltip on hover
 * - Mobile responsive
 */

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm here to help you with your audit needs. How can I assist you today?",
      sender: 'agent',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate agent response
    setTimeout(() => {
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your message! An audit specialist will respond shortly. You can also call us at +971 4 XXX XXXX for immediate assistance.",
        sender: 'agent',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, agentResponse]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:right-8 z-50 w-[90vw] max-w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl border border-neutral-200 flex flex-col animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                {isOnline && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-white animate-pulse" />
                )}
              </div>
              <div>
                <div className="font-semibold">Audit Specialist</div>
                <div className="text-xs text-white/80">
                  {isOnline ? 'Online now' : 'Offline'}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Minimize chat"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'flex',
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                <div
                  className={cn(
                    'max-w-[75%] rounded-2xl px-4 py-2 text-sm',
                    message.sender === 'user'
                      ? 'bg-primary-600 text-white rounded-br-sm'
                      : 'bg-white text-neutral-900 rounded-bl-sm shadow-sm'
                  )}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <Textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 min-h-[44px] max-h-[100px] resize-none"
                rows={1}
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="shrink-0"
                disabled={!inputMessage.trim()}
              >
                <Send className="w-4 h-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </div>
            <p className="text-xs text-neutral-500 mt-2">
              We typically reply within 2 minutes
            </p>
          </div>
        </div>
      )}

      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={cn(
          'fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50',
          'group relative',
          'w-14 h-14 md:w-16 md:h-16',
          'bg-primary-600 hover:bg-primary-700',
          'rounded-full shadow-lg hover:shadow-xl',
          'flex items-center justify-center',
          'transition-all duration-300',
          'hover:scale-110 active:scale-95',
          isOpen && 'scale-90 opacity-50'
        )}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />

        {/* Online Indicator */}
        {isOnline && !isOpen && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-success rounded-full border-2 border-white animate-pulse" />
        )}

        {/* Notification Badge */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-error rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white">
            1
          </span>
        )}

        {/* Tooltip */}
        {showTooltip && !isOpen && (
          <div className="absolute bottom-full right-0 mb-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="bg-neutral-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap shadow-lg">
              Chat with audit expert
              <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-neutral-900" />
            </div>
          </div>
        )}

        {/* Pulse Ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-primary-600 animate-ping opacity-20" />
        )}
      </button>
    </>
  );
}
