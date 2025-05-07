
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
}

const MoodTracker: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  
  const moods: MoodOption[] = [
    { 
      value: "happy", 
      label: "Happy", 
      icon: <Smile className="w-5 h-5" />, 
      color: "bg-journal-green text-white" 
    },
    { 
      value: "content", 
      label: "Content", 
      icon: <Heart className="w-5 h-5" />, 
      color: "bg-journal-blue text-white" 
    },
    { 
      value: "neutral", 
      label: "Neutral", 
      icon: <Meh className="w-5 h-5" />, 
      color: "bg-journal-yellow text-white" 
    },
    { 
      value: "sad", 
      label: "Sad", 
      icon: <Frown className="w-5 h-5" />, 
      color: "bg-journal-purple text-white" 
    }
  ];

  return (
    <Card className="shadow-sm hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">How do you feel today?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between gap-2 mt-2">
          {moods.map((mood) => (
            <Button
              key={mood.value}
              variant="outline"
              className={cn(
                "flex flex-col items-center gap-1 h-auto py-3 transition-all duration-300 hover:scale-105",
                selectedMood === mood.value ? mood.color : "hover:bg-muted/60"
              )}
              onClick={() => setSelectedMood(mood.value)}
            >
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center",
                selectedMood === mood.value ? "bg-white/20" : "bg-muted/40"
              )}>
                {mood.icon}
              </div>
              <span className="text-xs font-medium">{mood.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MoodTracker;
