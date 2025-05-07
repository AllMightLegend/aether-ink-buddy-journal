
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
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lightbulb, ArrowRight, CalendarDays } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleNewEntry = () => {
    navigate('/new-entry');
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
            
            <MoodTracker />
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
                <Card className="border p-4 rounded-lg bg-muted/40">
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="h-5 w-5 text-journal-yellow mt-0.5" />
                    <div>
                      <h3 className="font-medium">AI Insights</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        Your journal entries show a positive trend this week. You've mentioned "work" 14 times, and your overall sentiment is optimistic.
                      </p>
                      <div className="mt-3 flex items-center">
                        <CalendarDays className="h-4 w-4 text-muted-foreground mr-1.5" />
                        <span className="text-xs text-muted-foreground">Based on entries from May 1-7</span>
                      </div>
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
                    <div className="bg-journal-green h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium">Most Productive Day</h3>
                  <p className="text-xs text-muted-foreground">Wednesday with 2 entries</p>
                </div>
              </div>
            </CollapsibleCard>
          </div>
        </div>
      </main>
      
      <FloatingActionButton />
    </div>
  );
};

export default Index;
