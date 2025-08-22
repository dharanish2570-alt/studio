import { AlertCard } from "@/components/dashboard/alert-card";
import { RiskAssessmentCard } from "@/components/dashboard/risk-assessment-card";
import { LocationCard } from "@/components/dashboard/location-card";
import { WeatherCard } from "@/components/dashboard/weather-card";

export default function DashboardPage() {
  return (
    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
      <div className="flex flex-col gap-4 md:gap-8">
        <AlertCard />
        <LocationCard />
      </div>
      <div className="flex flex-col gap-4 md:gap-8">
        <RiskAssessmentCard />
        <WeatherCard />
      </div>
    </div>
  );
}
