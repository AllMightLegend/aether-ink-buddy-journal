
import React from 'react';
import Header from '../components/Header';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const NewEntry = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container py-6 px-4 sm:px-6">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>New Journal Entry</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">This page is under construction. You'll soon be able to create new journal entries here!</p>
            <Textarea placeholder="How are you feeling today?" className="min-h-[200px]" />
            <div className="flex justify-end">
              <Button>Save Entry</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default NewEntry;
