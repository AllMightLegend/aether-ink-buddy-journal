
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile, Heart, Frown, Meh } from "lucide-react";
import { cn } from "@/lib/utils";

interface MoodOption {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
}

const MoodTracker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  
  const moods: MoodOption[] = [
    { 
      value: "happy", 
      label: "Happy", 
      icon: <Smile className="w-5 h-5" />, 
      color: "bg-journal-green text-white",
      gradient: "from-journal-green/20 to-journal-green/5"
    },
    { 
      value: "content", 
      label: "Content", 
      icon: <Heart className="w-5 h-5" />, 
      color: "bg-journal-blue text-white",
      gradient: "from-journal-blue/20 to-journal-blue/5"
    },
    { 
      value: "neutral", 
      label: "Neutral", 
      icon: <Meh className="w-5 h-5" />, 
      color: "bg-journal-yellow text-white",
      gradient: "from-journal-yellow/20 to-journal-yellow/5"
    },
    { 
      value: "sad", 
      label: "Sad", 
      icon: <Frown className="w-5 h-5" />, 
      color: "bg-journal-purple text-white",
      gradient: "from-journal-purple/20 to-journal-purple/5"
    }
  ];

  return (
    <Card className="shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">How do you feel today?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between gap-2 mt-2">
          {moods.map((mood, index) => (
            <Button
              key={mood.value}
              variant="outline"
              className={cn(
                "flex flex-col items-center gap-1 h-auto py-3 transition-all duration-300 hover:scale-105 animate-fade-in btn-ripple relative overflow-hidden",
                selectedMood === mood.value ? mood.color : "hover:bg-muted/60"
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedMood(mood.value)}
            >
              {selectedMood === mood.value && (
                <div className="absolute inset-0 bg-gradient-to-br opacity-20 animate-pulse-gentle"></div>
              )}
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                selectedMood === mood.value ? "bg-white/20" : "bg-muted/40"
              )}>
                {mood.icon}
              </div>
              <span className="text-xs font-medium mt-1">{mood.label}</span>
            </Button>
          ))}
        </div>

        {selectedMood && (
          <div className={cn(
            "mt-4 p-3 rounded-lg bg-gradient-to-r animate-fade-in", 
            moods.find(m => m.value === selectedMood)?.gradient
          )}>
            <p className="text-sm text-foreground/80">
              {selectedMood === "happy" && "Great to hear you're feeling happy! What made your day special?"}
              {selectedMood === "content" && "Contentment is a wonderful feeling. What are you grateful for today?"}
              {selectedMood === "neutral" && "Taking note of your neutral mood helps track your emotional patterns."}
              {selectedMood === "sad" && "It's okay to feel sad sometimes. Consider writing about what's on your mind."}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MoodTracker;
