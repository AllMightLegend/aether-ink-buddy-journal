
import React from 'react';
import { cn } from "@/lib/utils";

interface AnimatedSVGProps {
  type: 'journal' | 'writing' | 'thinking' | 'celebration';
  className?: string;
}

const AnimatedSVG: React.FC<AnimatedSVGProps> = ({ type, className }) => {
  // SVG illustrations with animations
  const renderSVG = () => {
    switch (type) {
      case 'journal':
        return (
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" 
            className={cn("animate-float", className)}>
            <path d="M30 20H90C93.3137 20 96 22.6863 96 26V94C96 97.3137 93.3137 100 90 100H30C26.6863 100 24 97.3137 24 94V26C24 22.6863 26.6863 20 30 20Z" fill="var(--primary-light, #E5DEFF)" />
            <path d="M40 35H80" stroke="var(--primary, #9b87f5)" strokeWidth="3" strokeLinecap="round" />
            <path d="M40 50H70" stroke="var(--primary, #9b87f5)" strokeWidth="3" strokeLinecap="round" />
            <path d="M40 65H75" stroke="var(--primary, #9b87f5)" strokeWidth="3" strokeLinecap="round" />
            <path d="M40 80H60" stroke="var(--primary, #9b87f5)" strokeWidth="3" strokeLinecap="round" />
            <circle cx="85" cy="80" r="8" fill="var(--primary, #9b87f5)" className="animate-pulse-gentle" />
          </svg>
        );
      case 'writing':
        return (
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={cn("animate-float", className)}>
            <path d="M35 35L85 35C87.7614 35 90 37.2386 90 40V80C90 82.7614 87.7614 85 85 85H35C32.2386 85 30 82.7614 30 80V40C30 37.2386 32.2386 35 35 35Z" fill="var(--primary-light, #E5DEFF)" />
            <path className="animate-write" d="M90 25L70 45M90 25L90 35L80 35M90 25L100 25" stroke="var(--primary, #9b87f5)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M45 50H75" stroke="var(--primary, #9b87f5)" strokeWidth="2" strokeLinecap="round" />
            <path d="M45 60H65" stroke="var(--primary, #9b87f5)" strokeWidth="2" strokeLinecap="round" />
            <path d="M45 70H70" stroke="var(--primary, #9b87f5)" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 'thinking':
        return (
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={cn("animate-float", className)}>
            <circle cx="60" cy="60" r="25" fill="var(--primary-light, #E5DEFF)" />
            <path d="M50 60C50 60 55 55 60 55C65 55 70 60 70 60" stroke="var(--primary, #9b87f5)" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="45" cy="45" r="5" fill="var(--primary, #9b87f5)" className="animate-pulse-gentle" />
            <circle cx="75" cy="45" r="5" fill="var(--primary, #9b87f5)" className="animate-pulse-gentle" />
            <path d="M35 30C35 30 42 40 60 40C78 40 85 30 85 30" stroke="var(--primary, #9b87f5)" strokeWidth="2" strokeLinecap="round" className="animate-pulse-gentle" />
          </svg>
        );
      case 'celebration':
        return (
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={cn("animate-float", className)}>
            <path d="M60 30V50" stroke="var(--primary, #9b87f5)" strokeWidth="3" strokeLinecap="round" className="animate-pulse-gentle" />
            <path d="M75 35L70 55" stroke="var(--primary, #9b87f5)" strokeWidth="3" strokeLinecap="round" className="animate-pulse-gentle" />
            <path d="M45 35L50 55" stroke="var(--primary, #9b87f5)" strokeWidth="3" strokeLinecap="round" className="animate-pulse-gentle" />
            <circle cx="60" cy="70" r="20" fill="var(--primary-light, #E5DEFF)" />
            <path d="M50 70C50 70 55 75 60 75C65 75 70 70 70 70" stroke="var(--primary, #9b87f5)" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="50" cy="65" r="2.5" fill="var(--primary, #9b87f5)" />
            <circle cx="70" cy="65" r="2.5" fill="var(--primary, #9b87f5)" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      {renderSVG()}
    </div>
  );
};

export default AnimatedSVG;
