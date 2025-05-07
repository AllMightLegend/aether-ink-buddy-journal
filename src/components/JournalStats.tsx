
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, BookOpen, Heart } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, description, icon }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

const JournalStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <StatsCard
        title="Entries"
        value={27}
        description="Total journal entries"
        icon={<BookOpen className="h-4 w-4" />}
      />
      <StatsCard
        title="Streak"
        value="5 days"
        description="Current writing streak"
        icon={<CalendarDays className="h-4 w-4" />}
      />
      <StatsCard
        title="Mood"
        value="Positive"
        description="Your overall mood trend"
        icon={<Heart className="h-4 w-4" />}
      />
    </div>
  );
};

export default JournalStats;
