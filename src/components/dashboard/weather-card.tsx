import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sun, Cloud, Wind, Thermometer } from "lucide-react";

export function WeatherCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Weather</CardTitle>
        <CardDescription>Live conditions for your area.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-around text-center bg-secondary p-4 rounded-lg">
          <div>
            <Sun className="h-12 w-12 text-primary mx-auto" />
            <p className="text-3xl font-bold mt-2">24°C</p>
            <p className="text-muted-foreground">Sunny</p>
          </div>
          <div className="w-px bg-border h-20" />
           <div>
            <Wind className="h-10 w-10 text-primary mx-auto" />
            <p className="text-xl font-bold mt-2">12 km/h</p>
            <p className="text-muted-foreground">Wind</p>
          </div>
        </div>
        
        <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center justify-between">
                <span>Feels Like</span>
                <span className="font-medium text-foreground">25°C</span>
            </li>
            <li className="flex items-center justify-between">
                <span>Humidity</span>
                <span className="font-medium text-foreground">45%</span>
            </li>
            <li className="flex items-center justify-between">
                <span>UV Index</span>
                <span className="font-medium text-foreground">High</span>
            </li>
        </ul>
      </CardContent>
    </Card>
  );
}
