
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
    toast({
      title: "AI Assistant",
      description: "The AI chat feature will be available soon!",
    });
    setExpanded(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-2">
      {expanded && (
        <>
          <Button
            onClick={handleNewEntry}
            size="icon"
            className="rounded-full w-12 h-12 bg-primary/90 hover:bg-primary shadow-lg transition-all duration-300 hover:scale-105"
          >
            <PenLine className="h-5 w-5" />
            <span className="sr-only">New Entry</span>
          </Button>
          <Button
            onClick={handleAskAI}
            size="icon" 
            className="rounded-full w-12 h-12 bg-journal-purple/90 hover:bg-journal-purple shadow-lg transition-all duration-300 hover:scale-105"
          >
            <MessageCircleQuestion className="h-5 w-5" />
            <span className="sr-only">Ask AI</span>
          </Button>
        </>
      )}
      <Button
        onClick={toggleExpand}
        size="icon"
        className={`rounded-full w-14 h-14 bg-primary shadow-lg transition-all duration-300 hover:scale-105 ${expanded ? 'rotate-45' : ''}`}
      >
        <Plus className="h-6 w-6" />
        <span className="sr-only">More actions</span>
      </Button>
    </div>
  );
};

export default FloatingActionButton;
