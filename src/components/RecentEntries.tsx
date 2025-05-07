
import React from 'react';
import JournalCard from './JournalCard';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const recentJournalEntries = [
  {
    id: "1",
    date: "Today, 2:30 PM",
    title: "Meeting with the team",
    preview: "Today's meeting went really well. We discussed the upcoming project deadlines and assigned tasks to everyone. I'm feeling confident about our progress.",
    mood: "Optimistic",
    moodColor: "green"
  },
  {
    id: "2",
    date: "Yesterday",
    title: "A walk in the park",
    preview: "Took some time for myself today and went for a long walk in the park. The fresh air really helped clear my mind and I came back feeling refreshed.",
    mood: "Peaceful",
    moodColor: "blue"
  },
  {
    id: "3",
    date: "May 5, 2025",
    title: "Reflecting on goals",
    preview: "Spent some time thinking about my yearly goals today. I'm a bit behind on some, but I've made good progress overall. Need to refocus on the health ones.",
    mood: "Thoughtful",
    moodColor: "purple"
  }
];

const RecentEntries: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Recent Entries</h2>
        <Button variant="ghost" size="sm" className="gap-1">
          View All
          <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recentJournalEntries.map(entry => (
          <JournalCard
            key={entry.id}
            id={entry.id}
            date={entry.date}
            title={entry.title}
            preview={entry.preview}
            mood={entry.mood}
            moodColor={entry.moodColor}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentEntries;
