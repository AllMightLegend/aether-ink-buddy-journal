
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Sun, Moon, SunMoon } from "lucide-react";

export function ModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-8 h-8 transition-all duration-300 hover:bg-primary/10"
    >
      {theme === "light" ? (
        <Sun className="h-4 w-4 text-yellow-500" />
      ) : (
        <Moon className="h-4 w-4 text-blue-400" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
