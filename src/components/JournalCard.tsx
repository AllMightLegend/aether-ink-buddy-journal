
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smile, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface JournalCardProps {
  id: string;
  date: string;
  title: string;
  preview: string;
  mood: string;
  moodColor: string;
  className?: string;
}

const JournalCard: React.FC<JournalCardProps> = ({
  date,
  title,
  preview,
  mood,
  moodColor,
  className,
}) => {
  return (
    <Card className={cn(
      "journal-entry-card cursor-pointer group transition-all duration-300 hover:shadow-lg relative overflow-hidden", 
      className
    )}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-20 h-20 -rotate-45 transform translate-x-10 -translate-y-10 bg-gradient-to-br from-transparent to-primary/5 rounded-full"></div>
      
      {/* Paper texture overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span className="text-xs">{date}</span>
          </div>
          <Badge 
            variant="outline" 
            className={cn(
              "px-2 py-0 h-6 font-normal transition-all duration-300", 
              moodColor === "green" && "bg-journal-green/10 text-journal-green border-journal-green/20 hover:bg-journal-green/20",
              moodColor === "blue" && "bg-journal-blue/10 text-journal-blue border-journal-blue/20 hover:bg-journal-blue/20",
              moodColor === "yellow" && "bg-journal-yellow/10 text-journal-yellow border-journal-yellow/30 hover:bg-journal-yellow/20",
              moodColor === "red" && "bg-journal-red/10 text-journal-red border-journal-red/20 hover:bg-journal-red/20",
              moodColor === "purple" && "bg-journal-purple/10 text-journal-purple border-journal-purple/20 hover:bg-journal-purple/20"
            )}
          >
            <Smile className="h-3.5 w-3.5 mr-1 animate-pulse-gentle" />
            {mood}
          </Badge>
        </div>
        <CardTitle className="text-lg font-medium mt-2 transition-colors group-hover:text-primary relative">
          {title}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500"></span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3 text-sm text-muted-foreground group-hover:text-foreground/90 transition-all duration-300">
          {preview}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-0 flex justify-end">
        <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">Read more</span>
      </CardFooter>
      
      {/* Corner fold effect with enhanced animation */}
      <div className="absolute bottom-0 right-0 w-8 h-8 transition-all duration-300 group-hover:w-10 group-hover:h-10 origin-bottom-right">
        <div className="absolute top-0 left-0 w-0 h-0 border-b-8 border-r-8 border-b-primary/20 border-r-transparent group-hover:border-b-12 group-hover:border-r-12 transition-all duration-300"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 bg-card rounded-tl-lg transform rotate-180"></div>
      </div>
    </Card>
  );
};

export default JournalCard;
