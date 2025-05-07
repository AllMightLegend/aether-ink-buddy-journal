
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from '../components/Header';
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Send, Lightbulb, User, RefreshCw } from "lucide-react";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

const ChatAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your Journal Buddy AI assistant. I can help you reflect on your journal entries, answer questions, or just chat. How can I assist you today?",
      role: "assistant",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    
    // Simulate AI response (in a real app, this would be an API call)
    setTimeout(() => {
      const aiResponses = [
        "Based on your recent journal entries, I notice you've been feeling more optimistic lately. That's wonderful to see!",
        "I see a pattern in your entries about work-related stress. Would you like to discuss some strategies for managing that?",
        "Your writing shows a lot of self-reflection. That's a powerful tool for personal growth.",
        "I noticed you mentioned feeling anxious in several entries. Would you like to explore some mindfulness techniques?",
        "Your journal entries show great emotional awareness. That's an important skill for well-being."
      ];
      
      const aiMessage: Message = {
        id: Date.now().toString(),
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        role: "assistant",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        content: "Hello! I'm your Journal Buddy AI assistant. I can help you reflect on your journal entries, answer questions, or just chat. How can I assist you today?",
        role: "assistant",
        timestamp: new Date()
      }
    ]);
    toast({
      title: "Chat cleared",
      description: "Your conversation has been reset."
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container py-6 px-4 sm:px-6 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-journal-purple/20 flex items-center justify-center">
              <Bot className="h-5 w-5 text-journal-purple" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Journal Assistant</h1>
              <p className="text-sm text-muted-foreground">Chat with your AI assistant about your journal entries</p>
            </div>
          </div>
          <Button variant="outline" size="sm" onClick={clearChat} className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Clear Chat
          </Button>
        </div>
        
        <Card className="flex-1 mb-4 border overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`flex gap-3 max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user' 
                      ? 'bg-primary/10 text-primary-foreground' 
                      : 'bg-muted/60 text-foreground'
                  }`}
                >
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === 'user' 
                      ? 'bg-primary/20' 
                      : 'bg-journal-purple/20'
                  }`}>
                    {message.role === 'user' 
                      ? <User className="h-4 w-4 text-primary" /> 
                      : <Bot className="h-4 w-4 text-journal-purple" />
                    }
                  </div>
                  <div className="text-sm">
                    {message.content}
                    <div className="text-xs text-muted-foreground mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-3 max-w-[80%] rounded-lg p-3 bg-muted/60">
                  <div className="h-8 w-8 rounded-full bg-journal-purple/20 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-journal-purple" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-journal-purple/60 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-journal-purple/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="h-2 w-2 bg-journal-purple/60 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4 border-t bg-card">
            <div className="flex gap-2">
              <Textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask your journal assistant..."
                className="min-h-[60px] resize-none"
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!input.trim() || isLoading}
                className="self-end"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
            
            <div className="mt-3 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-journal-yellow" />
              <span className="text-xs text-muted-foreground">
                Try asking: "What patterns do you see in my journal entries?" or "Help me reflect on my week"
              </span>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default ChatAssistant;
