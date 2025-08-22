"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Siren, CloudRain, Wind, AlertTriangle, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const alerts = [
  {
    id: "alert-1",
    type: "High Alert",
    title: "Low Oxygen Levels Detected",
    description: "Oxygen levels in Zone B are critically low.",
    icon: Siren,
    variant: "destructive",
  },
  {
    id: "alert-2",
    type: "Weather Warning",
    title: "Severe Weather Approaching",
    description: "A heavy thunderstorm is expected in 30 minutes.",
    icon: CloudRain,
    variant: "warning",
  },
  {
    id: "alert-3",
    type: "Accident Reported",
    title: "Accident near Main Stage",
    description: "A minor accident has been reported.",
    icon: AlertTriangle,
    variant: "warning",
  },
  {
    id: "alert-4",
    type: "High Winds Advisory",
    title: "Strong Winds Detected",
    description: "High winds may cause temporary structure instability.",
    icon: Wind,
    variant: "default",
  },
];

export function AlertCard() {
  const { toast } = useToast();

  const handleSendAlert = (alert: { title: string }) => {
    toast({
      title: "Alert Sent",
      description: `"${alert.title}" has been reported to the nearest help center.`,
    });
  };

  const cardVariants = {
    destructive: "border-destructive/50 bg-destructive/10 text-destructive-foreground",
    warning: "border-yellow-500/50 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    default: "border-primary/50 bg-primary/10",
  };

  const iconVariants = {
    destructive: "text-destructive",
    warning: "text-yellow-500",
    default: "text-primary",
  };

  const buttonVariants = {
    destructive: "bg-destructive/80 hover:bg-destructive text-destructive-foreground",
    warning: "bg-yellow-500/80 hover:bg-yellow-500 text-white",
    default: "bg-primary/80 hover:bg-primary",
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Report an Emergency</CardTitle>
        <CardDescription>Select an alert to notify the nearest help center.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <div
                key={alert.id}
                className={cn(
                  "flex items-center justify-between rounded-lg p-4 transition-all",
                  cardVariants[alert.variant as keyof typeof cardVariants]
                )}
              >
                <div className="flex items-center gap-4">
                  <Icon className={cn("h-6 w-6", iconVariants[alert.variant as keyof typeof iconVariants])} />
                  <div className="text-left">
                    <h4 className="font-bold text-card-foreground">{alert.title}</h4>
                    <p className="text-sm text-card-foreground/80">{alert.description}</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  className={cn(buttonVariants[alert.variant as keyof typeof buttonVariants])}
                  onClick={() => handleSendAlert(alert)}
                  aria-label={`Send ${alert.title} alert`}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

    