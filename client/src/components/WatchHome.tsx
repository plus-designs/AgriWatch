import { Cloud, Camera, Droplets, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface WatchHomeProps {
  onNavigate: (screen: string) => void;
}

export default function WatchHome({ onNavigate }: WatchHomeProps) {
  const navItems = [
    { id: "weather", icon: Cloud, label: "Weather", color: "bg-chart-2/20" },
    { id: "camera", icon: Camera, label: "Camera", color: "bg-chart-1/20" },
    { id: "irrigation", icon: Droplets, label: "Irrigation", color: "bg-chart-2/20" },
    { id: "gps", icon: MapPin, label: "GPS Map", color: "bg-chart-4/20" },
  ];

  return (
    <div className="p-6 space-y-6" data-testid="watch-home">
      <h1 className="text-3xl font-bold text-center">AgriWatch</h1>
      <div className="grid grid-cols-2 gap-4">
        {navItems.map((item) => (
          <Card
            key={item.id}
            className={`${item.color} p-6 flex flex-col items-center justify-center gap-3 cursor-pointer hover-elevate active-elevate-2 transition-all`}
            onClick={() => onNavigate(item.id)}
            data-testid={`button-nav-${item.id}`}
          >
            <item.icon className="w-16 h-16 text-foreground" />
            <span className="text-lg font-semibold text-center">{item.label}</span>
          </Card>
        ))}
      </div>
    </div>
  );
}
