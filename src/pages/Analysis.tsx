
import React from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import CollapsibleCard from '../components/CollapsibleCard';
import MoodTracker from '../components/MoodTracker';
import FloatingActionButton from '../components/FloatingActionButton';
import { Sparkle, Calendar, BookOpen, BarChart3 } from 'lucide-react';

const Analysis: React.FC = () => {
  // Sample data for the charts
  const moodData = [
    { day: 'Mon', happy: 4, neutral: 2, sad: 0 },
    { day: 'Tue', happy: 3, neutral: 3, sad: 0 },
    { day: 'Wed', happy: 2, neutral: 4, sad: 0 },
    { day: 'Thu', happy: 5, neutral: 1, sad: 0 },
    { day: 'Fri', happy: 3, neutral: 2, sad: 1 },
    { day: 'Sat', happy: 6, neutral: 0, sad: 0 },
    { day: 'Sun', happy: 4, neutral: 3, sad: 0 },
  ];

  const wordFrequencyData = [
    { word: 'work', count: 14 },
    { word: 'happy', count: 10 },
    { word: 'meeting', count: 8 },
    { word: 'family', count: 7 },
    { word: 'tired', count: 5 },
  ];

  const entryLengthData = [
    { date: '05/01', length: 240 },
    { date: '05/02', length: 320 },
    { date: '05/03', length: 280 },
    { date: '05/04', length: 350 },
    { date: '05/05', length: 290 },
    { date: '05/06', length: 400 },
    { date: '05/07', length: 320 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container py-6 px-4 sm:px-6 space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Journal Analytics</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card className="overflow-hidden border bg-card shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Mood Trends</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={moodData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="happy" fill="#4CAF50" name="Happy" />
                      <Bar dataKey="neutral" fill="#2196F3" name="Neutral" />
                      <Bar dataKey="sad" fill="#AB47BC" name="Sad" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <MoodTracker />
            
            <CollapsibleCard 
              title="AI Insights" 
              icon={<Sparkle className="h-5 w-5" />}
              defaultOpen={true}
            >
              <div className="p-4 rounded-lg bg-gradient-to-br from-journal-purple/10 to-journal-blue/10 text-foreground">
                <h3 className="font-medium mb-2">Weekly Sentiment Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Your journal entries show a positive trend this week. You've mentioned "work" 14 times, and your overall sentiment is optimistic.
                </p>
                <div className="mt-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-border/40">
                  <p className="text-xs italic">
                    "Try focusing on what made Tuesday and Wednesday less positive - there seems to be a pattern of mid-week stress in your entries."
                  </p>
                </div>
              </div>
            </CollapsibleCard>
          </div>
          
          <div className="space-y-6">
            <CollapsibleCard 
              title="Word Frequency" 
              icon={<BarChart3 className="h-5 w-5" />}
              defaultOpen={true}
            >
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart layout="vertical" data={wordFrequencyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="word" />
                    <Tooltip />
                    <Bar dataKey="count" fill="#8B5CF6" name="Mentions" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CollapsibleCard>
            
            <CollapsibleCard 
              title="Entry Length Over Time" 
              icon={<BookOpen className="h-5 w-5" />}
              defaultOpen={true}
            >
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={entryLengthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="length" stroke="#4CAF50" name="Words" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CollapsibleCard>
            
            <CollapsibleCard 
              title="Writing Streak" 
              icon={<Calendar className="h-5 w-5" />}
            >
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 28 }, (_, i) => (
                  <div 
                    key={i} 
                    className={`h-8 rounded-md ${
                      i % 3 === 0 ? 'bg-journal-green/20' : 
                      i % 7 === 0 ? 'bg-journal-red/20' : 
                      'bg-journal-blue/20'
                    } hover:opacity-80 transition-opacity cursor-pointer`} 
                    title={`May ${i + 1}, 2025`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Current streak: 5 days • Longest streak: 12 days
              </p>
            </CollapsibleCard>
          </div>
        </div>
      </main>
      
      <FloatingActionButton />
    </div>
  );
};

export default Analysis;
