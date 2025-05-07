
import React from 'react';
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { cn } from "@/lib/utils";
import { Home, BookOpen, PenLine, LineChart, LogOut, Bot } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: "Home", icon: <Home className="h-5 w-5" />, path: "/" },
    { label: "New Entry", icon: <PenLine className="h-5 w-5" />, path: "/new-entry" },
    { label: "Journal", icon: <BookOpen className="h-5 w-5" />, path: "/journal" },
    { label: "Analysis", icon: <LineChart className="h-5 w-5" />, path: "/analysis" },
    { label: "Assistant", icon: <Bot className="h-5 w-5" />, path: "/assistant" },
  ];

  return (
    <header className="w-full py-3 px-4 sm:px-6 bg-background/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">J</span>
          </div>
          <h1 className="text-xl font-bold text-foreground hidden sm:block">
            <span className="text-primary">Journal</span> Buddy
          </h1>
        </div>

        <nav className="flex-1 max-w-md mx-4 sm:mx-8">
          <ul className="flex justify-center space-x-1 sm:space-x-2 md:space-x-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Button
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "gap-1.5",
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  )}
                  onClick={() => navigate(item.path)}
                >
                  {item.icon}
                  <span className="hidden sm:inline-block">{item.label}</span>
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button variant="ghost" size="sm" className="text-foreground gap-1.5">
            <span className="font-medium text-primary hidden sm:inline-block">Srinjoy</span>
          </Button>
          <Button variant="outline" size="sm" className="text-destructive gap-1.5">
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline-block">Logout</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
