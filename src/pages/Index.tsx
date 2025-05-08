
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import WelcomeBanner from '../components/WelcomeBanner';
import JournalStats from '../components/JournalStats';
import RecentEntries from '../components/RecentEntries';
import ThemeCustomizer from '../components/ThemeCustomizer';
import MoodTracker from '../components/MoodTracker';
import FloatingActionButton from '../components/FloatingActionButton';
import CollapsibleCard from '../components/CollapsibleCard';
import EntryCategories from '../components/EntryCategories';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, ArrowRight, CalendarDays, Sparkle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleNewEntry = () => {
    navigate('/new-entry');
  };

  const showAIInsight = () => {
    toast({
      title: "AI Insight",
      description: "Based on your recent entries, you tend to feel more optimistic on days when you exercise in the morning.",
      action: (
        <a href="/analysis" className="text-primary text-sm hover:underline">
          View Analysis
        </a>
      )
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container py-6 px-4 sm:px-6 space-y-8">
        <WelcomeBanner userName="Srinjoy" onNewEntry={handleNewEntry} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <JournalStats />
            
            <CollapsibleCard 
              title="Today's Writing Prompt" 
              icon={<Lightbulb className="h-5 w-5" />}
              defaultOpen={true}
            >
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-4 rounded-lg">
                <p className="text-md font-medium">What's something you're looking forward to?</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Taking a moment to anticipate positive events can boost your mood and give you something to look forward to.
                </p>
                <div className="flex justify-end mt-4">
                  <button 
                    onClick={handleNewEntry}
                    className="text-primary flex items-center text-sm font-medium hover:underline"
                  >
                    Start writing
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </CollapsibleCard>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <MoodTracker />
              <EntryCategories />
            </div>
            
            <RecentEntries />
          </div>
          
          <div className="md:col-span-1 space-y-6">
            <Tabs defaultValue="customize" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="customize">Customize</TabsTrigger>
                <TabsTrigger value="insights">Insights</TabsTrigger>
              </TabsList>
              <TabsContent value="customize" className="pt-4">
                <ThemeCustomizer />
              </TabsContent>
              <TabsContent value="insights" className="pt-4">
                <Card className="border p-4 rounded-lg bg-gradient-to-br from-journal-purple/5 to-background">
                  <div className="flex items-start space-x-3">
                    <div className="h-8 w-8 rounded-full bg-journal-purple/20 flex items-center justify-center flex-shrink-0">
                      <Sparkle className="h-4 w-4 text-journal-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium">AI Insights</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        Your journal entries show a positive trend this week. You've mentioned "work" 14 times, and your overall sentiment is optimistic.
                      </p>
                      <div className="mt-3 flex items-center">
                        <CalendarDays className="h-4 w-4 text-muted-foreground mr-1.5" />
                        <span className="text-xs text-muted-foreground">Based on entries from May 1-7</span>
                      </div>
                      <button 
                        className="mt-3 text-xs text-primary flex items-center hover:underline"
                        onClick={showAIInsight}
                      >
                        Get more insights
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="mt-2">
                    <h4 className="text-sm font-medium">Top Mentioned Topics</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <div className="text-xs bg-journal-blue/10 text-journal-blue px-2 py-1 rounded-full">work (14)</div>
                      <div className="text-xs bg-journal-green/10 text-journal-green px-2 py-1 rounded-full">exercise (8)</div>
                      <div className="text-xs bg-journal-purple/10 text-journal-purple px-2 py-1 rounded-full">family (6)</div>
                      <div className="text-xs bg-journal-yellow/10 text-journal-yellow px-2 py-1 rounded-full">goals (5)</div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
            
            <CollapsibleCard title="Weekly Summary">
              <div className="space-y-3">
                <div>
                  <h3 className="text-sm font-medium">Total Entries: 5</h3>
                  <p className="text-xs text-muted-foreground">That's 2 more than last week!</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Average Mood: Positive</h3>
                  <div className="w-full bg-muted h-2 rounded-full mt-1.5">
                    <div className="bg-journal-green h-2 rounded-full relative" style={{ width: '75%' }}>
                      <div className="absolute -right-1 -top-2 h-6 w-1 bg-journal-green rounded-full" />
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Negative</span>
                    <span>Positive</span>
                  </div>
                </div>
                <Separator className="my-2" />
                <div>
                  <h3 className="text-sm font-medium">Most Productive Day</h3>
                  <div className="grid grid-cols-7 gap-1 mt-2">
                    {['M','T','W','T','F','S','S'].map((day, i) => (
                      <div 
                        key={day + i} 
                        className={`h-8 rounded flex items-center justify-center text-xs
                          ${i === 2 ? 'bg-primary/20 text-primary font-medium' : 'bg-muted/50 text-muted-foreground'}
                        `}
                      >
                        {day}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Wednesday with 2 entries</p>
                </div>
              </div>
            </CollapsibleCard>
            
            <div className="bg-gradient-to-br from-journal-yellow/10 to-journal-orange/5 p-4 rounded-lg border border-journal-yellow/20 animate-pulse-gentle" style={{animationDuration: "10s"}}>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-journal-yellow/20 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-4 w-4 text-journal-yellow" />
                </div>
                <h3 className="font-medium">Journal streak challenge</h3>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Write an entry for 7 consecutive days to earn your first streak badge!
              </p>
              <div className="flex justify-between mt-3 items-center">
                <div className="text-xs">5/7 days</div>
                <button 
                  onClick={handleNewEntry}
                  className="text-xs bg-journal-yellow/20 hover:bg-journal-yellow/30 text-journal-yellow px-3 py-1 rounded-full transition-colors"
                >
                  Write today
                </button>
              </div>
              <div className="w-full bg-white/30 h-2 rounded-full mt-2">
                <div className="bg-journal-yellow h-2 rounded-full" style={{ width: '71%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FloatingActionButton />
    </div>
  );
};

export default Index;
