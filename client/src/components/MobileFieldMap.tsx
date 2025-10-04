import { ArrowLeft, MapPin, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MobileFieldMapProps {
  onBack: () => void;
}

export default function MobileFieldMap({ onBack }: MobileFieldMapProps) {
  const zones = [
    { id: 1, name: "North Zone", status: "healthy", coordinates: "23.5°N, 72.8°E" },
    { id: 2, name: "South Zone", status: "problem", coordinates: "23.4°N, 72.8°E" },
    { id: 3, name: "East Zone", status: "healthy", coordinates: "23.5°N, 72.9°E" },
    { id: 4, name: "West Zone", status: "healthy", coordinates: "23.5°N, 72.7°E" },
  ];

  return (
    <div className="space-y-6" data-testid="mobile-field-map">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={onBack} data-testid="button-back">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-3xl font-bold">Field Map</h1>
      </div>

      <Card className="bg-chart-1/10" data-testid="card-map-view">
        <CardContent className="pt-6 space-y-4">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="w-24 h-24 text-chart-1 opacity-20" />
            </div>
            <div className="relative text-center">
              <p className="text-sm text-muted-foreground">GPS Field Map</p>
              <p className="text-xs text-muted-foreground mt-1">5 zones mapped</p>
            </div>
          </div>
          
          <Button variant="default" className="w-full" data-testid="button-add-zone">
            <Plus className="w-5 h-5 mr-2" />
            Add New Zone
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Field Zones</h2>
        {zones.map((zone) => (
          <Card key={zone.id} className="hover-elevate cursor-pointer" data-testid={`card-zone-${zone.id}`}>
            <CardContent className="pt-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 flex-1">
                <MapPin className={`w-8 h-8 ${zone.status === "healthy" ? "text-chart-1" : "text-destructive"}`} />
                <div>
                  <p className="font-semibold">{zone.name}</p>
                  <p className="text-sm text-muted-foreground">{zone.coordinates}</p>
                </div>
              </div>
              {zone.status === "healthy" ? (
                <Badge className="bg-chart-1/20 text-chart-1" data-testid={`badge-healthy-${zone.id}`}>
                  🟢 Healthy
                </Badge>
              ) : (
                <Badge className="bg-destructive/20 text-destructive" data-testid={`badge-problem-${zone.id}`}>
                  🔴 Problem
                </Badge>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
