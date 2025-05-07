
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { SunMoon } from "lucide-react";

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
      className="rounded-full w-8 h-8"
    >
      <SunMoon className="h-4 w-4" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
