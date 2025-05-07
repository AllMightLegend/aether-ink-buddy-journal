
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "./ModeToggle";

interface ColorOption {
  name: string;
  value: string;
  className: string;
}

const ThemeCustomizer: React.FC = () => {
  const colors: ColorOption[] = [
    { name: "Red", value: "red", className: "bg-journal-red" },
    { name: "Orange", value: "orange", className: "bg-journal-orange" },
    { name: "Yellow", value: "yellow", className: "bg-journal-yellow" },
    { name: "Green", value: "green", className: "bg-journal-green" },
    { name: "Blue", value: "blue", className: "bg-journal-blue" },
    { name: "Indigo", value: "indigo", className: "bg-journal-indigo" },
    { name: "Purple", value: "purple", className: "bg-journal-purple" },
  ];

  const [activeColor, setActiveColor] = useState<string>("green");

  return (
    <Card className="w-full max-w-md mx-auto shadow-md">
      <CardHeader>
        <CardTitle className="text-xl font-medium">Customize Your Journal</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <h3 className="text-sm font-medium">Theme Color</h3>
          <div className="flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color.value}
                className={cn(
                  "color-badge",
                  color.className,
                  activeColor === color.value && "active"
                )}
                onClick={() => setActiveColor(color.value)}
                aria-label={`Select ${color.name} theme`}
              />
            ))}
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <h3 className="text-sm font-medium">Mode</h3>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <span className="text-sm">Toggle between light and dark mode</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThemeCustomizer;
