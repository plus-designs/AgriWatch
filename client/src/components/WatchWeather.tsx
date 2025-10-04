import { CloudRain, Sun, CloudDrizzle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface WatchWeatherProps {
  onBack: () => void;
}

export default function WatchWeather({ onBack }: WatchWeatherProps) {
  const [showDetails, setShowDetails] = useState(false);

  if (showDetails) {
    return (
      <div className="p-6 space-y-6" data-testid="weather-details">
        <Button variant="ghost" onClick={() => setShowDetails(false)} className="mb-2" data-testid="button-back-simple">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back
        </Button>
        
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-center">
            <CloudRain className="w-24 h-24 text-chart-2" />
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-lg">Temperature</span>
              <span className="text-2xl font-bold" data-testid="text-temperature">28°C</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg">Humidity</span>
              <span className="text-2xl font-bold" data-testid="text-humidity">65%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg">Wind</span>
              <span className="text-2xl font-bold" data-testid="text-wind">12 km/h</span>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6" data-testid="watch-weather">
      <Button variant="ghost" onClick={onBack} className="mb-2" data-testid="button-back">
        <ArrowLeft className="w-5 h-5 mr-2" /> Back
      </Button>
      
      <Card className="p-8 space-y-6">
        <div className="flex items-center justify-center">
          <CloudRain className="w-32 h-32 text-chart-2" />
        </div>
        
        <p className="text-xl text-center font-medium" data-testid="text-weather-alert">
          Rain expected today at 3pm
        </p>
        
        <Button 
          className="w-full" 
          size="lg"
          onClick={() => setShowDetails(true)}
          data-testid="button-more-details"
        >
          More Details
        </Button>
      </Card>
    </div>
  );
}
