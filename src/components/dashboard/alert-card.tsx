"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Siren, CloudRain, Wind, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const alerts = [
  {
    type: "High Alert",
    title: "Low Oxygen Levels Detected",
    description: "Oxygen levels in Zone B are critically low. Please move to an open area and await instructions. Emergency services have been notified.",
    icon: Siren,
    variant: "destructive",
  },
  {
    type: "Weather Warning",
    title: "Severe Weather Approaching",
    description: "A heavy thunderstorm is expected in 30 minutes. Please seek shelter immediately. Avoid open fields and tall structures.",
    icon: CloudRain,
    variant: "warning",
  },
  {
    type: "Accident Reported",
    title: "Accident near Main Stage",
    description: "A minor accident has been reported. Medical teams are on-site. Please keep the area clear for emergency personnel.",
    icon: AlertTriangle,
    variant: "warning",
  },
  {
    type: "High Winds Advisory",
    title: "Strong Winds Detected",
    description: "High winds may cause temporary structures to become unstable. Please be cautious and report any safety concerns.",
    icon: Wind,
    variant: "default",
  },
];

export function AlertCard() {
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentAlertIndex((prevIndex) => (prevIndex + 1) % alerts.length);
        setIsFading(false);
      }, 500);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const currentAlert = alerts[currentAlertIndex];
  const Icon = currentAlert.icon;

  const cardVariants = {
    destructive: "border-destructive/50 bg-destructive/10 text-destructive",
    warning: "border-yellow-500/50 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    default: "border-primary/50 bg-primary/10",
  };

  const iconVariants = {
    destructive: "text-destructive",
    warning: "text-yellow-500",
    default: "text-primary",
  };
  
  return (
    <Card className={cn("transition-all duration-500", isFading ? "opacity-0" : "opacity-100", cardVariants[currentAlert.variant as keyof typeof cardVariants])}>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Icon className={cn("h-8 w-8", iconVariants[currentAlert.variant as keyof typeof iconVariants])} />
          <div>
            <CardDescription className={cn(iconVariants[currentAlert.variant as keyof typeof iconVariants])}>{currentAlert.type}</CardDescription>
            <CardTitle>{currentAlert.title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80">{currentAlert.description}</p>
      </CardContent>
    </Card>
  );
}
