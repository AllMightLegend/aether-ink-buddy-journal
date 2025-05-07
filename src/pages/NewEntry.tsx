
import React, { useState } from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Smile, Tag, Calendar, Clock, Image, Sparkle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const moods = [
  { value: "happy", label: "Happy", color: "bg-journal-green text-white" },
  { value: "peaceful", label: "Peaceful", color: "bg-journal-blue text-white" },
  { value: "optimistic", label: "Optimistic", color: "bg-journal-yellow text-black" },
  { value: "thoughtful", label: "Thoughtful", color: "bg-journal-purple text-white" },
  { value: "stressed", label: "Stressed", color: "bg-journal-red text-white" },
];

const tags = [
  "Work", "Family", "Health", "Friends", "Goals", "Ideas", "Personal"
];

const NewEntry: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { toast } = useToast();
  
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleSave = () => {
    if (!content.trim()) {
      toast({
        title: "Empty entry",
        description: "Please write something before saving.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Entry saved!",
      description: "Your journal entry has been saved successfully.",
    });

    // Reset form
    setContent("");
    setSelectedMood(null);
    setSelectedTags([]);
  };

  const handleAIAssist = () => {
    toast({
      title: "AI Assistant",
      description: "Let me help you reflect on your day...",
    });
    
    // Simulate AI assistance by adding a prompt
    const aiPrompt = "\n\nSome reflection questions to consider:\n- What was the highlight of your day?\n- Did anything surprise you today?\n- What are you grateful for right now?";
    setContent(content + aiPrompt);
  };

  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit'
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container py-6 px-4 sm:px-6">
        <Card className="max-w-4xl mx-auto border shadow-sm hover:shadow-md transition-all duration-300">
          <CardHeader className="border-b bg-muted/30">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
              <CardTitle className="text-2xl font-bold">New Journal Entry</CardTitle>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{currentDate}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>{currentTime}</span>
                </div>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6 p-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">How are you feeling today?</label>
              <div className="flex flex-wrap gap-2">
                {moods.map((mood) => (
                  <Badge
                    key={mood.value}
                    variant="outline"
                    className={cn(
                      "cursor-pointer transition-all duration-200 hover:scale-105",
                      selectedMood === mood.value ? mood.color : ""
                    )}
                    onClick={() => setSelectedMood(mood.value)}
                  >
                    <Smile className="mr-1 h-3.5 w-3.5" />
                    {mood.label}
                  </Badge>
                ))}
              </div>
            </div>
            
            <Textarea 
              placeholder="Write your thoughts here..." 
              className="min-h-[300px] text-base p-4 resize-none focus:ring-1 focus:ring-primary transition-shadow"
              value={content}
              onChange={handleContentChange}
            />

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  Tags
                </label>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleAIAssist}
                  className="text-primary gap-1.5 hover:bg-primary/10"
                >
                  <Sparkle className="h-4 w-4" />
                  AI Assist
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className={cn(
                      "cursor-pointer hover:bg-secondary/80 transition-colors",
                      selectedTags.includes(tag) ? "bg-secondary text-secondary-foreground" : ""
                    )}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />
            
            <div className="flex justify-between items-center">
              <Button 
                variant="outline" 
                className="gap-1.5"
              >
                <Image className="h-4 w-4" />
                Add Image
              </Button>
              
              <div className="flex gap-2">
                <Button variant="outline">Save Draft</Button>
                <Button onClick={handleSave}>Save Entry</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default NewEntry;
