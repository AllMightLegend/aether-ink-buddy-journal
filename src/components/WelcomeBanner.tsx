
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb } from "lucide-react";
import AnimatedSVG from './AnimatedSVG';

interface WelcomeBannerProps {
  userName: string;
  onNewEntry: () => void;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ userName, onNewEntry }) => {
  // Get current time to personalize greeting
  const currentHour = new Date().getHours();
  let greeting = "Good day";
  
  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  
  // Generate a random prompt
  const prompts = [
    "How are you feeling today?",
    "What made you smile today?",
    "What's something you're looking forward to?",
    "Any small wins to celebrate?",
    "What's on your mind right now?",
    "What made today unique?",
    "What are you grateful for today?",
  ];
  
  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

  return (
    <Card className="border-0 shadow-none bg-gradient-to-r from-primary/10 via-primary/5 to-transparent overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <p className="text-lg font-medium text-muted-foreground animate-fade-in">
              {greeting},
            </p>
            <h1 className="text-3xl font-bold text-foreground animate-fade-in" style={{animationDelay: "0.1s"}}>
              {userName} <span className="inline-block animate-pulse-gentle">👋</span>
            </h1>
            <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-lg p-3 mt-4 border border-border animate-fade-in" style={{animationDelay: "0.2s"}}>
              <Lightbulb className="h-5 w-5 text-primary" />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Today's prompt:</span> {randomPrompt}
              </p>
            </div>
          </div>
          
          <div className="flex-shrink-0 flex items-center gap-4">
            <AnimatedSVG type="journal" className="hidden md:block" />
            <Button 
              onClick={onNewEntry} 
              className="group animate-fade-in hover:shadow-md transition-all duration-300"
              style={{animationDelay: "0.3s"}}
            >
              Start Writing
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeBanner;
