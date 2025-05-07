
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plus, PenLine, MessageCircleQuestion } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

const FloatingActionButton = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleNewEntry = () => {
    navigate('/new-entry');
    setExpanded(false);
  };

  const handleAskAI = () => {
    navigate('/assistant');
    setExpanded(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-2">
      {expanded && (
        <>
          <div className="flex flex-col gap-2 items-end animate-fade-in" style={{ transformOrigin: 'bottom right' }}>
            <div className="flex items-center gap-2">
              <span className="bg-white dark:bg-gray-800 text-xs font-medium px-2 py-1 rounded-md shadow-sm opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                New Entry
              </span>
              <Button
                onClick={handleNewEntry}
                size="icon"
                className="rounded-full w-12 h-12 bg-primary/90 hover:bg-primary shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: '0.1s' }}
              >
                <PenLine className="h-5 w-5" />
                <span className="sr-only">New Entry</span>
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="bg-white dark:bg-gray-800 text-xs font-medium px-2 py-1 rounded-md shadow-sm opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                AI Assistant
              </span>
              <Button
                onClick={handleAskAI}
                size="icon" 
                className="rounded-full w-12 h-12 bg-journal-purple/90 hover:bg-journal-purple shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: '0.2s' }}
              >
                <MessageCircleQuestion className="h-5 w-5" />
                <span className="sr-only">Ask AI</span>
              </Button>
            </div>
          </div>
        </>
      )}
      <Button
        onClick={toggleExpand}
        size="icon"
        className={`rounded-full w-14 h-14 bg-primary shadow-lg transition-all duration-500 hover:scale-105 ${expanded ? 'rotate-45' : ''} relative`}
      >
        <Plus className="h-6 w-6" />
        <span className="sr-only">More actions</span>
        {!expanded && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-journal-purple rounded-full animate-pulse"></span>
        )}
        <div className="absolute inset-0 rounded-full bg-primary opacity-30 animate-ping" style={{ animationDuration: '3s' }}></div>
      </Button>
    </div>
  );
};

export default FloatingActionButton;
