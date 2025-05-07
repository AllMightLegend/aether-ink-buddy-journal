
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import WelcomeBanner from '../components/WelcomeBanner';
import JournalStats from '../components/JournalStats';
import RecentEntries from '../components/RecentEntries';
import ThemeCustomizer from '../components/ThemeCustomizer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
            <RecentEntries />
          </div>
          
          <div className="md:col-span-1">
            <Tabs defaultValue="customize">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="customize">Customize</TabsTrigger>
                <TabsTrigger value="insights">Insights</TabsTrigger>
              </TabsList>
              <TabsContent value="customize">
                <div className="pt-4">
                  <ThemeCustomizer />
                </div>
              </TabsContent>
              <TabsContent value="insights" className="pt-4">
                <div className="p-6 border rounded-lg bg-muted/40 text-center">
                  <h3 className="font-medium">AI Insights</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Your journal entries show a positive trend this week. You've mentioned "work" 14 times, and your overall sentiment is optimistic.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
