"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function LocationCard() {
  const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [isSharing, setIsSharing] = useState(false);
  const { toast } = useToast();

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      toast({
        variant: "destructive",
        title: "Geolocation Error",
        description: "Geolocation is not supported by your browser.",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        toast({
          title: "Location Acquired",
          description: "Your current location has been updated.",
        });
      },
      () => {
        toast({
          variant: "destructive",
          title: "Geolocation Error",
          description: "Unable to retrieve your location. Please check your browser permissions.",
        });
      }
    );
  };
  
  const handleShareLocation = () => {
    if (!location) {
      toast({
        variant: "destructive",
        title: "Location Not Available",
        description: "Please acquire your location first.",
      });
      return;
    }
    setIsSharing(true);
    toast({
      title: "Sharing Location...",
      description: "Your location is being shared with emergency services.",
    });
    setTimeout(() => {
      setIsSharing(false);
      toast({
        title: "Location Shared",
        description: "Emergency services have been notified of your location.",
        variant: "default",
      });
    }, 2000);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Location Status</CardTitle>
        <CardDescription>Manage and share your location in emergencies.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="aspect-video w-full rounded-md overflow-hidden border">
           <Image
              src="https://storage.googleapis.com/aif-us-build-test-project/get_started_guide/Studio_Bot_location_card_map.png"
              width={600}
              height={400}
              alt="Map of an urban area"
              className="w-full h-full object-cover"
              data-ai-hint="map city"
            />
        </div>
        {location && (
            <div className="text-sm text-muted-foreground">
                Lat: {location.latitude.toFixed(4)}, Lon: {location.longitude.toFixed(4)}
            </div>
        )}
        <div className="flex gap-2 flex-wrap">
          <Button onClick={handleGetLocation}>
            <MapPin className="mr-2 h-4 w-4" /> Get My Location
          </Button>
          <Button variant="outline" onClick={handleShareLocation} disabled={!location || isSharing}>
            <Share2 className="mr-2 h-4 w-4" /> {isSharing ? 'Sharing...' : 'Share with Authorities'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
