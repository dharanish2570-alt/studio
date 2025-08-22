import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Siren, CloudRain, Wind, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const alerts = [
  {
    id: "alert-1",
    type: "High Alert",
    title: "Low Oxygen Levels Detected",
    description: "Oxygen levels in Zone B are critically low. Please move to an open area and await instructions. Emergency services have been notified.",
    icon: Siren,
    variant: "destructive",
  },
  {
    id: "alert-2",
    type: "Weather Warning",
    title: "Severe Weather Approaching",
    description: "A heavy thunderstorm is expected in 30 minutes. Please seek shelter immediately. Avoid open fields and tall structures.",
    icon: CloudRain,
    variant: "warning",
  },
  {
    id: "alert-3",
    type: "Accident Reported",
    title: "Accident near Main Stage",
    description: "A minor accident has been reported. Medical teams are on-site. Please keep the area clear for emergency personnel.",
    icon: AlertTriangle,
    variant: "warning",
  },
  {
    id: "alert-4",
    type: "High Winds Advisory",
    title: "Strong Winds Detected",
    description: "High winds may cause temporary structures to become unstable. Please be cautious and report any safety concerns.",
    icon: Wind,
    variant: "default",
  },
];

export function AlertCard() {
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
    <Card>
      <CardHeader>
        <CardTitle>Emergency Alerts</CardTitle>
        <CardDescription>Expand to see details of active alerts.</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" className="w-full">
          {alerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <AccordionItem value={alert.id} key={alert.id} className={cn("rounded-lg px-4 mb-2", cardVariants[alert.variant as keyof typeof cardVariants])}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4">
                    <Icon className={cn("h-6 w-6", iconVariants[alert.variant as keyof typeof iconVariants])} />
                    <div className="text-left">
                      <p className={cn("text-sm font-semibold", iconVariants[alert.variant as keyof typeof iconVariants])}>{alert.type}</p>
                      <h4 className="font-bold text-foreground">{alert.title}</h4>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-foreground/80 pl-10">{alert.description}</p>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </CardContent>
    </Card>
  );
}
