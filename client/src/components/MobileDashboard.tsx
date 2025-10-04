import { Cloud, Camera, Droplets, MapPin, AlertCircle } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface MobileDashboardProps {
  onNavigate: (screen: string) => void;
}

export default function MobileDashboard({ onNavigate }: MobileDashboardProps) {
  return (
    <div className="space-y-6" data-testid="mobile-dashboard">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to AgriWatch</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card className="hover-elevate cursor-pointer" onClick={() => onNavigate("weather")} data-testid="card-weather">
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-3">
            <CardTitle className="text-lg">Weather</CardTitle>
            <Cloud className="w-8 h-8 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-2xl font-bold">28°C</p>
              <p className="text-sm text-muted-foreground">Rain expected at 3pm</p>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-elevate cursor-pointer" onClick={() => onNavigate("crops")} data-testid="card-crops">
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-3">
            <CardTitle className="text-lg">Crop Health</CardTitle>
            <Camera className="w-8 h-8 text-chart-1" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Badge className="bg-chart-1/20 text-chart-1">3 Scans Today</Badge>
              <p className="text-sm text-muted-foreground">Last scan: 2 hours ago</p>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-elevate cursor-pointer" onClick={() => onNavigate("irrigation")} data-testid="card-irrigation">
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-3">
            <CardTitle className="text-lg">Irrigation</CardTitle>
            <Droplets className="w-8 h-8 text-chart-2" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm font-medium">Next: Tomorrow 6am</p>
              <Badge className="bg-chart-2/20 text-chart-2">2 Pending Tasks</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-elevate cursor-pointer" onClick={() => onNavigate("map")} data-testid="card-map">
          <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-3">
            <CardTitle className="text-lg">Field Map</CardTitle>
            <MapPin className="w-8 h-8 text-chart-4" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm font-medium">5 Zones Mapped</p>
              <Badge className="bg-destructive/20 text-destructive">1 Problem Area</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-chart-4/10 border-l-4 border-l-chart-4" data-testid="card-alert">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <AlertCircle className="w-5 h-5" />
            Active Alerts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <Cloud className="w-5 h-5 text-chart-2 mt-0.5" />
            <div>
              <p className="font-medium">Rain Alert</p>
              <p className="text-sm text-muted-foreground">Expected at 3pm today</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Droplets className="w-5 h-5 text-chart-2 mt-0.5" />
            <div>
              <p className="font-medium">Irrigation Reminder</p>
              <p className="text-sm text-muted-foreground">Scheduled for tomorrow morning</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
