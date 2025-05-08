
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile, Heart, Frown, Meh, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MoodOption {
  value: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  animation: string;
}

const MoodTracker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [moodStreak, setMoodStreak] = useState(3); // Example streak count
  
  const moods: MoodOption[] = [
    { 
      value: "happy", 
      label: "Happy", 
      icon: <Smile className="w-5 h-5" />, 
      color: "bg-journal-green text-white",
      gradient: "from-journal-green/20 to-journal-green/5",
      animation: "animate-float"
    },
    { 
      value: "content", 
      label: "Content", 
      icon: <Heart className="w-5 h-5" />, 
      color: "bg-journal-blue text-white",
      gradient: "from-journal-blue/20 to-journal-blue/5",
      animation: "animate-pulse-gentle"
    },
    { 
      value: "neutral", 
      label: "Neutral", 
      icon: <Meh className="w-5 h-5" />, 
      color: "bg-journal-yellow text-white",
      gradient: "from-journal-yellow/20 to-journal-yellow/5",
      animation: "animate-pulse-gentle"
    },
    { 
      value: "sad", 
      label: "Sad", 
      icon: <Frown className="w-5 h-5" />, 
      color: "bg-journal-purple text-white",
      gradient: "from-journal-purple/20 to-journal-purple/5",
      animation: "animate-pulse-gentle"
    }
  ];

  return (
    <Card className="shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative bg-gradient-to-br from-card to-muted/5">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-transparent to-muted/20 rounded-full transform translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-transparent to-muted/10 rounded-full transform -translate-x-16 translate-y-16"></div>
      
      <CardHeader className="pb-2 relative z-10">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium flex items-center gap-2">
            <span className="relative">
              How do you feel today?
              <svg className="absolute -top-6 -right-6 h-4 w-4 text-journal-yellow animate-float opacity-70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L14.5 8.5L21 9.5L16.5 14L18 20.5L12 17.5L6 20.5L7.5 14L3 9.5L9.5 8.5L12 3Z" fill="currentColor"/>
              </svg>
            </span>
          </CardTitle>
          
          {/* Mood streak indicator */}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center gap-1 bg-muted/40 px-2 py-1 rounded-full text-xs text-muted-foreground">
                  <Star className="h-3 w-3 text-journal-yellow" />
                  <span>{moodStreak} day streak</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>You've tracked your mood for {moodStreak} days in a row!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between gap-2 mt-2">
          {moods.map((mood, index) => (
            <Button
              key={mood.value}
              variant="outline"
              className={cn(
                "flex flex-col items-center gap-1 h-auto py-3 transition-all duration-300 hover:scale-105 animate-fade-in btn-ripple relative overflow-hidden",
                selectedMood === mood.value ? mood.color : "hover:bg-muted/60",
                selectedMood === mood.value ? "ring-2 ring-offset-2 ring-offset-background" : ""
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedMood(mood.value)}
            >
              {selectedMood === mood.value && (
                <div className="absolute inset-0 bg-gradient-to-br opacity-20 animate-pulse-gentle"></div>
              )}
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                selectedMood === mood.value ? "bg-white/20" : "bg-muted/40",
                selectedMood === mood.value && mood.animation
              )}>
                {mood.icon}
                {selectedMood === mood.value && (
                  <div className="absolute inset-0 rounded-full border-2 border-white/30 scale-110 animate-ping opacity-60" style={{animationDuration: '2s'}}></div>
                )}
              </div>
              <span className="text-xs font-medium mt-1">{mood.label}</span>
            </Button>
          ))}
        </div>

        {selectedMood && (
          <div className={cn(
            "mt-4 p-3 rounded-lg bg-gradient-to-r animate-fade-in relative overflow-hidden", 
            moods.find(m => m.value === selectedMood)?.gradient
          )}>
            {/* Decorative mood bubbles */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-primary/10 animate-float" style={{animationDuration: '3s'}}></div>
              <div className="absolute bottom-2 left-6 w-3 h-3 rounded-full bg-primary/20 animate-float" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
              <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-primary/15 animate-pulse-gentle" style={{animationDuration: '5s'}}></div>
            </div>
            
            <p className="text-sm text-foreground/80 relative z-10">
              {selectedMood === "happy" && "Great to hear you're feeling happy! What made your day special?"}
              {selectedMood === "content" && "Contentment is a wonderful feeling. What are you grateful for today?"}
              {selectedMood === "neutral" && "Taking note of your neutral mood helps track your emotional patterns."}
              {selectedMood === "sad" && "It's okay to feel sad sometimes. Consider writing about what's on your mind."}
            </p>
            
            <div className="mt-3 flex justify-end">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-xs px-2 py-1 h-auto bg-white/20 hover:bg-white/30 text-foreground/90"
                onClick={() => navigate('/new-entry')}
              >
                Write about it
              </Button>
            </div>
          </div>
        )}
        
        {!selectedMood && (
          <div className="mt-4 p-3 rounded-lg bg-muted/20 border border-border/30 flex items-center justify-center">
            <p className="text-sm text-muted-foreground text-center">
              Select a mood to track how you're feeling today
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MoodTracker;
